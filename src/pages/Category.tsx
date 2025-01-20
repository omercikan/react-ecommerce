import React, { useMemo } from "react";
import { useFetchProductsQuery } from "../redux/Api/ProductApi";
import { Link, useParams } from "react-router-dom";
import CategoryList from "../components/Categories/CategoryList";
import { GoChevronRight } from "react-icons/go";

const Category: React.FC = () => {
  const { data } = useFetchProductsQuery();
  const params = useParams();

  const matchedCategory = useMemo(() => {
    return data?.filter((products) => products.category === params.categoryId);
  }, [data, params]);

  return (
    <React.Fragment>
        <div className="container mx-auto max-sm:px-4 flex items-center gap-1 text-[#999999] text-xs mt-[122px]">
            <Link to="/">Home</Link>
            <span><GoChevronRight/></span>
            <span>{params.categoryId}</span>
        </div>

        <div className="my-10">
            <CategoryList matchedCategory={matchedCategory} />
        </div>
    </React.Fragment>
  );
};

export default Category;
