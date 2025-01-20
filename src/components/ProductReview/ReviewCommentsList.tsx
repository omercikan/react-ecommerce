import React from "react";
import { evaluationProductType } from "../../types/types";
import ReviewCommentItem from "./ReviewCommentItem";

type ReviewCommentsListProps = {
  matchedReviews: evaluationProductType[];
};

const ReviewCommentsList: React.FC<ReviewCommentsListProps> = ({ matchedReviews }) => {
  return (
    <React.Fragment>
      {matchedReviews.length > 0 ? (
        <ul className="border rounded-lg p-4 mt-6 flex flex-col gap-5 max-sm:mx-4">
          {matchedReviews.map((review, index) => (
            <ReviewCommentItem
              review={review}
              key={index}
            />
          ))}
        </ul>
      ) : (
        <div className="flex justify-center items-center h-40 text-center">
          <p className="text-red-500 font-medium">
            No reviews yet. Be the first to share your thounghts on this
            product!
          </p>
        </div>
      )}
    </React.Fragment>
  );
};

export default ReviewCommentsList;
