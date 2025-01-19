import Skeleton from "@mui/material/Skeleton";
import React from "react";
import { productDetailComponentsProps } from "../../../types/types";
import { Typography } from "@mui/material";

const ContentBody: React.FC<productDetailComponentsProps> = ({ matchedProduct, setReviewModal }) => {
  return (
    <div className="detail-content-body">
      {matchedProduct?.title ? (
        <strong className="text-xl font-semibold">
          {matchedProduct?.title}
        </strong>
      ) : (
        <Typography variant="h1"><Skeleton variant="text" animation="wave" height={50}/></Typography>
      )}

      <div className="evulation-link">
        <button className="text-sm mt-2 inline-block text-gray-600 hover:underline" onClick={() => setReviewModal && setReviewModal(true)}>Add Review</button>
      </div>

      {matchedProduct?.description ? (
        <p className="text-sm color-[#3c3c3c] mt-5">
          {matchedProduct?.description}
        </p>
      ) : (
        <Typography variant="subtitle1"><Skeleton height={120} animation="wave" /></Typography>
      )}

      {matchedProduct?.price ? (
        <data
          value={matchedProduct?.price}
          className="mt-6 inline-block text-lg font-bold text-[#e10600]"
        >
          ${matchedProduct?.price}
        </data>
      ) : (
        <Typography variant="h6" width={120}><Skeleton animation="wave" /></Typography>
      )}
    </div>
  );
};

export default ContentBody;
