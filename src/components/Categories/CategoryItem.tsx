import React from "react";
import { Product } from "../../types/types";
import { Link } from "react-router-dom";

type CategoryItemProps = {
  product: Product;
};

const CategoryItem: React.FC<CategoryItemProps> = ({ product }) => {
  const { id, image, title, price } = product;

  return (
    <li className="border p-10 max-sm:p-6 rounded-md w-72 max-lg:w-full bg-slate-50">
      <figure className="mix-blend-darken select-none"> 
        <img src={image} alt={title} className="w-full h-60 max-sm:h-52 max-[400px]:h-40 object-contain" />
      </figure>

      <Link to={`/product-detail/${title.substring(0, 30)}:${id}`}>
        <span className="text-center mt-3 inline-block w-full text-[#232323] whitespace-nowrap text-ellipsis overflow-hidden">{title.substring(0, 30)}...</span>
      </Link>

      <span className="text-center w-full inline-block text-sm mt-4">${price}</span>
    </li>
  );
};

export default CategoryItem;
