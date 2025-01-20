import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

type categoriesItemProps = {
  categoryImage: string;
  categoryTitle: string;
  categoryId: string;
};

const CategoriesItem: React.FC<categoriesItemProps> = ({
  categoryImage,
  categoryTitle,
  categoryId,
}) => {
  const navigate = useNavigate();

  const handleMatchedRedirectCategory = useCallback(() => {
    navigate(`/category/${categoryId}`);
  }, [categoryId, navigate]);

  return (
    <li
      className="w-max"
      data-category={categoryId}
      onClick={handleMatchedRedirectCategory}
    >
      <figure className="relative w-max overflow-hidden rounded-lg cursor-pointer">
        <img
          src={categoryImage}
          alt={categoryTitle}
          className="rounded-lg transition duration-300 hover:scale-105 w-80"
        />
        <figcaption className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl pointer-events-none">
          {categoryTitle}
        </figcaption>
      </figure>
    </li>
  );
};

export default CategoriesItem;
