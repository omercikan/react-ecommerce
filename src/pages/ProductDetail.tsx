import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchProductsQuery } from "../redux/Api/ProductApi";
import ProductImage from "../components/ProductDetail/ProductImage";
import Breadcrumb from "../components/ProductDetail/Breadcrumb";
import ContentBody from "../components/ProductDetail/DetailContentContainer/ContentBody";
import ContentSizes from "../components/ProductDetail/DetailContentContainer/ContentSizes";
import ProductQuantity from "../components/ProductDetail/DetailContentContainer/ProductQuantity";
import ApiErrorHandler from "../components/ApiErrorHandler";
import AddToCart from "../components/ProductDetail/DetailContentContainer/AddToCart";
import Seo from "../components/Seo/Seo";
import ProductEvaluation from "../components/ProductDetail/ProductEvaluation";

const ProductDetail: React.FC = () => {
  const params = useParams();
  const { data, isError } = useFetchProductsQuery();
  const incomingID = Number(params.id?.split(":")[1]);
  const matchedProduct = data?.find((product) => product.id === incomingID);
  const [selectSize, setSelectSize] = useState<string>("XS");
  const [quantity, setQuantity] = useState(1);

  return (
    <React.Fragment>
      <Seo 
        title={`Trendly | ${matchedProduct?.title}`}
        description="This is an amazing product from Trendly that provides top-quality features and benefits."
        keywords="electronics, smartphone, product detail, buy online"
      />

      {
        isError ? <ApiErrorHandler /> : (
        <div className="mt-[122px] max-lg:mt-[111px] px-4">
          <Breadcrumb matchedProduct={matchedProduct} />

          <div className="product-detail-container mt-10 container mx-auto">
            <div className="product-detail-container__wrapper">
              <div className="flex max-lg:flex-col gap-x-10 gap-y-5">
                <ProductImage matchedProduct={matchedProduct} />

                <div className="detail-content-container flex-[60%]">
                  <ContentBody matchedProduct={matchedProduct} />

                  <ContentSizes
                    matchedProduct={matchedProduct}
                    setSelectSize={setSelectSize}
                    selectSize={selectSize}
                  />

                  {matchedProduct && (
                    <ProductQuantity
                    quantity={quantity}
                    setQuantity={setQuantity}
                  />
                  )}

                  <AddToCart 
                    matchedProduct={matchedProduct}
                    incomingID={incomingID}
                    quantity={quantity}
                    selectSize={selectSize}
                  />
                </div>
              </div>
            </div>
          </div>

          <ProductEvaluation matchedProduct={matchedProduct}/>
        </div>
        )
      }
    </React.Fragment>
  );
};

export default ProductDetail;
