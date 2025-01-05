import React from "react";
import { Link } from "react-router-dom";

const HeaderBrand: React.FC = () => {
  return (
    <div className="header-brand flex-[1] text-white text-4xl">
      <Link to="/">trendly</Link>
    </div>
  );
};

export default HeaderBrand;
