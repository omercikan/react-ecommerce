import React from "react";
import { evaluationProductType } from "../../types/types";
import { TiStarFullOutline } from "react-icons/ti";

type ReviewCommentItemProps = {
  review: evaluationProductType;
  productScoreEmptyStar: number[];
  productScoreStar: number[];
};

const ReviewCommentItem: React.FC<ReviewCommentItemProps> = ({
  review,
  productScoreStar,
  productScoreEmptyStar,
}) => {
  const { comment, category } = review;

  return (
    <li className="w-1/2 max-lg:w-full">
      <ul className="flex mb-4">
        {productScoreStar.map((_item, index) => (
          <li key={index}>
            <TiStarFullOutline color="#fdc525" size={14} />
          </li>
        ))}

        {productScoreEmptyStar.length > 0 &&
          productScoreEmptyStar.map((_item, index) => (
            <li key={index}>
              <TiStarFullOutline color="#dedede" size={14} />
            </li>
          ))}
      </ul>

      <div className="review-item-comment-content">
        <div className="bg-[#eeeeee] py-5 px-6 rounded-2xl">
          <p className="text-[#484848] text-xs">{comment}</p>

          <div className="border-t-[1px] mt-4 border-[#e4e1e1] flex items-center gap-3">
            <p className="text-[#919191] text-[11px] mt-[10px] whitespace-nowrap text-ellipsis overflow-hidden">
              User purchased this product from{" "}
              <strong className="text-[#161880]">Trendly</strong>
            </p>
            <span className="w-1 h-1 bg-[#CCCCCC] rounded-full mt-[10px] max-[450px]:hidden"></span>
            <span className="text-[11px] mt-[10px] max-[450px]:hidden">{category}</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ReviewCommentItem;
