import React from "react";
import CategoriesItem from "./CategoriesItem";
import Men from "../../../assets/images/categories/men.webp";
import Women from "../../../assets/images/categories/women.webp";
import Jewelery from "../../../assets/images/categories/jewelery.webp";
import Electronics from "../../../assets/images/categories/electronics.webp";

const Categories: React.FC = () => {
  return (
    <ul className="md:container mx-auto mt-10 flex gap-3 flex-wrap justify-center max-md:justify-start max-md:flex-nowrap max-md:overflow-auto max-md:mx-5">
      <CategoriesItem
        categoryImage={Men}
        categoryTitle={"Men"}
        categoryId={"men's clothing"}
      />

      <CategoriesItem
        categoryImage={Women}
        categoryTitle={"Women"}
        categoryId={"women's clothing"}
      />

      <CategoriesItem
        categoryImage={Jewelery}
        categoryTitle={"Jewelery"}
        categoryId={"jewelery"}
      />

      <CategoriesItem
        categoryImage={Electronics}
        categoryTitle={"Electronics"}
        categoryId={"electronics"}
      />
    </ul>
  );
};

export default Categories;
