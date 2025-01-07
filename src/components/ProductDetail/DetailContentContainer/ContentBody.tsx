import Skeleton from "@mui/material/Skeleton";
import React from "react";
import { productDetailComponentsProps } from "../../../types/types";

const ContentBody: React.FC<productDetailComponentsProps> = ({
  matchedProduct,
}) => {
  return (
    <div className="detail-content-body">
      {matchedProduct?.title ? (
        <strong className="text-xl font-semibold">
          {matchedProduct?.title}
        </strong>
      ) : (
        <Skeleton className="w-[300px] max-sm:w-full" />
      )}

      {matchedProduct?.description ? (
        <p className="text-sm color-[#3c3c3c] mt-5">
          {matchedProduct?.description}
        </p>
      ) : (
        <Skeleton className="w-full" height={300} />
      )}
      
      {matchedProduct?.price ? (
        <data
          value={matchedProduct?.price}
          className="mt-6 inline-block text-lg font-bold text-[#e10600]"
        >
          ${matchedProduct?.price}
        </data>
      ) : (
        <Skeleton width={150} />
      )}
    </div>
  );
};

export default ContentBody;
