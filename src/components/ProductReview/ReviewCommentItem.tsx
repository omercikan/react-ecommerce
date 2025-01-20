import React from "react";
import { evaluationProductType } from "../../types/types";
import { TiStarFullOutline } from "react-icons/ti";

type ReviewCommentItemProps = {
  review: evaluationProductType;
};

const ReviewCommentItem: React.FC<ReviewCommentItemProps> = ({ review }) => {
  const { stars, comment, category } = review;
  const fullStars = Array.from({length: stars}, (_, item) => item)
  const emptyStars = Array.from({length: 5 - stars}, (_, item) => item);

  return (
    <li className="w-1/2 max-lg:w-full">
      <ul className="flex mb-4">
        {fullStars.map((_item, index) => (
          <li key={index}>
            <TiStarFullOutline color="#fdc525"/>
          </li>
        ))}

        {emptyStars.map((item, index) => (
          <li key={index}>
            <TiStarFullOutline color="#dedede"/>
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
