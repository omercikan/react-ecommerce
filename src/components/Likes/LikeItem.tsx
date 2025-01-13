import React, { useRef } from "react";
import { Product } from "../../types/types";
import { IoClose } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeLikeItem } from "../../redux/Slices/likesSlice";
import useToastify from "../../customHooks/useToastify";
import { RootState } from "../../redux/store";

type likeItemProps = {
  item: Product;
  gridLayout: string;
};

const LikeItem: React.FC<likeItemProps> = ({ item, gridLayout }) => {
  const { id, image, title, price, description } = item;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const likeItem = useRef<HTMLLIElement>(null);
  const { likes } = useSelector((state: RootState) => state.likesSlice);

  const handleRemove = (): void => {
    useToastify(`Product Removed From Favorites (${likes.length -1})`)
    setTimeout(() => {
      dispatch(removeLikeItem(id));
    }, 500);

    if (likeItem.current && gridLayout == "1") {
        likeItem.current.style.animationName = "singleRemove";  
    } else if(likeItem.current && gridLayout >= "2") {
        likeItem.current.style.animationName = "remove";  
    }
  };

  return (
    <li
      className={`group ${
        gridLayout == "1" && "flex gap-10 max-sm:flex-col max-sm:items-center"
      } border rounded-lg p-5 relative overflow-hidden`}
      id="like-item"
      ref={likeItem}
    >
      <div className="absolute z-10 -right-[100%] group-hover:right-4 top-4 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-700">
        <IoClose
          size={28}
          cursor="pointer"
          color="white"
          className="bg-black rounded-full p-1"
          onClick={handleRemove}
        />
        <IoEye
          size={28}
          cursor="pointer"
          color="white"
          className="bg-black rounded-full p-1 mt-1"
          onClick={() =>
            navigate(`/product-detail/${title.substring(0, 30)}:${id}`)
          }
        />
      </div>

      <figure
        className={`${gridLayout == "1" && "w-[250px] align-top inline-block"}`}
      >
        <img
          src={image}
          alt={title}
          className={`${gridLayout == "4" && "w-[270px] h-[270px]"} ${
            gridLayout == "3" && "w-[370px] h-[370px]"
          } ${
            gridLayout == "2" &&
            "w-[570px] h-[570px] max-lg:h-[400px] max-sm:h-[200px] max-[375px]:h-[100%]"
          } ${
            gridLayout == "1" && "w-full h-full max-sm:h-auto"
          } object-contain`}
        />
      </figure>

      <div
        className={`mt-10 ${
          gridLayout == "1" && "w-[calc(100%-250px)]"
        } like-item-content`}
      >
        <h2 className="mt-5 whitespace-nowrap text-ellipsis overflow-hidden max-sm:text-sm">
          {title}
        </h2>
        <p
          className={`${
            gridLayout == "1"
              ? "inline-flex my-5 text-sm color-[#232323]"
              : "hidden"
          }`}
        >
          {description}
        </p>
        <span className="font-bold text-[#e10600] block">${price}</span>
      </div>
    </li>
  );
};

export default LikeItem;
