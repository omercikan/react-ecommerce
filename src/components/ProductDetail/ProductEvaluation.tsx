import React, { useState } from "react";
import { Product } from "../../types/types";
import { IoCloseOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { addReview } from "../../redux/Slices/evaluationSlice";

type ProductEvaluationProps = {
  matchedProduct: Product | undefined;
};

const ProductEvaluation: React.FC<ProductEvaluationProps> = ({ matchedProduct }) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [clickIndex, setClickIndex] = useState<null | number>(null);
  const [commentProduct, setCommentProduct] = useState<string>("");
  const stars = [1, 2, 3, 4, 5];
  const dispatch = useDispatch<AppDispatch>();
  const { reviews } = useSelector((state: RootState) => state.evaluationSlice);

  console.log(reviews.filter((review) => review.category === matchedProduct?.category)); 

  return (
    <div
      className="product-evaluation-container w-full h-screen fixed top-0 left-0 z-[21]"
      style={{ background: "rgba(0,0,0, .6)" }}
    >
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[460px] max-sm:w-[95%] rounded-md bg-white border">
        <header className="evaluation-header">
          <div className="flex items-center justify-between py-[14px] px-5 border-b">
            <h1 className="text-lg font-semibold">Rate The Product</h1>
            <IoCloseOutline size={22} cursor="pointer" color="#66666" />
          </div>
        </header>

        <div className="evaluation-product-body pt-7 pb-5 px-5">
          <div className="evaluation-product-info">
            <div className="flex gap-8 max-sm:gap-4">
              <figure className="pb-7">
                <img
                  src={matchedProduct?.image}
                  alt={matchedProduct?.title}
                  className="w-14 h-[84px] max-sm:w-20 max-sm:h-full object-contain"
                />
              </figure>

              <div className="overflow-hidden">
                <h3 className="text-sm text-[#666666] whitespace-nowrap text-ellipsis overflow-hidden">
                  {matchedProduct?.title}
                </h3>
              </div>
            </div>
          </div>

          <div className="evaluation-product-review border-t pt-[26px]">
            <div className="flex items-center justify-between">
              <label className="text-[13px] font-medium">
                Rate The Product
              </label>

              <ul className="product-evaluation-stars flex group">
                {stars.map((_, index) => (
                  <li
                    key={index}
                    className={`evaluation-star-${index + 1}`}
                    onMouseEnter={() => {
                      if (clickIndex === null || index > clickIndex) {
                        setHoverIndex(index);
                      }
                    }}
                    onMouseLeave={() => setHoverIndex(null)}
                    onClick={() => setClickIndex(index)}
                  >
                    <FaStar
                      cursor="pointer"
                      className={
                        index <= (clickIndex ?? -1) ||
                        index <= (hoverIndex ?? -1)
                          ? "text-yellow-400 transition duration-500"
                          : "text-gray-300 hover:text-yellow-400 transition duration-500"
                      }
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="evaluation-product-input mt-5">
            <label className="text-sm font-medium">
              Your Comment
              <textarea
                className="block w-full h-[100px] bg-[#fbfbfb] mt-[10px] text-xs border p-[10px] rounded-md outline-none resize-none"
                placeholder="This product is both beautiful and high qua"
                value={commentProduct}
                onChange={(e) => setCommentProduct(e.target.value)}
              />
            </label>
          </div>
        </div>

        <button
          className="bg-[#161880] hover:bg-[#22236d]d disabled:bg-gray-400 transition duration-500 text-white p-2 rounded-md w-[95%] mb-5 mx-auto block"
          disabled={clickIndex == null || !commentProduct}
          onClick={() =>
            dispatch(
              addReview({
                id: matchedProduct?.id,
                image: matchedProduct?.image,
                title: matchedProduct?.title,
                category: matchedProduct?.category,
                stars: clickIndex ? clickIndex+1 : clickIndex,
                comment: commentProduct
              })
            )
          }
        >
          Leave A Comment
        </button>
      </div>
    </div>
  );
};

export default ProductEvaluation;
