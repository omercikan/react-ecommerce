import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import LikeItem from "./LikeItem";

import { TbLayoutListFilled } from "react-icons/tb";
import { TfiLayoutGrid2Alt } from "react-icons/tfi";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { Product } from "../../types/types";

type likesListProps = {
  searchedLikes: Product[];
  searchTerm: string;
}

const LikesList: React.FC<likesListProps> = ({searchedLikes, searchTerm}) => {
  const { likes } = useSelector((state: RootState) => state.likesSlice);
  const [gridLayout, setGridLayout] = useState<string>("1");

  const likesList = useMemo(() => {
    return searchedLikes.length > 0 ? (
      searchedLikes.map((product) => <LikeItem item={product} key={product.id} gridLayout={gridLayout} />)
    ) : (
        <div className="flex items-center justify-center h-32 text-2xl w-max absolute left-1/2 -translate-x-1/2 text-red-950">
          <p>😔 No results found. Try different keywords!</p>
        </div>
      ) 
  }, [likes, gridLayout, searchedLikes]);

  return (
    <React.Fragment>
      <div className="display-mode flex items-center gap-3">
        <label className="uppercase font-medium">View Mode</label>
        <ul className="flex gap-3">
          <li
            className={`border border-[#232323] p-1 cursor-pointer ${
              gridLayout === "1" ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => setGridLayout("1")}
          >
            <TbLayoutListFilled size={24} />
          </li>

          <li
            className={`border border-[#232323] p-1 cursor-pointer ${
              gridLayout === "2" ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => setGridLayout("2")}
          >
            <TfiLayoutGrid2Alt size={24} />
          </li>

          <li
            className={`max-md:hidden border border-[#232323] p-1 cursor-pointer ${
              gridLayout === "3" ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => setGridLayout("3")}
          >
            <TfiLayoutGrid3Alt size={24} />
          </li>

          <li
            className={`${"max-2xl:hidden"} flex border border-[#232323] p-1 cursor-pointer ${
              gridLayout === "4" ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => setGridLayout("4")}
          >
            <TfiLayoutGrid4Alt size={24} />
          </li>
        </ul>
      </div>

      {searchTerm.length > 0 && <p className="mt-10 text-blue-500 font-semibold uppercase rounded-md">search results {searchedLikes.length}</p>}  
      <ul style={{display: "grid", gridTemplateColumns: `repeat(${gridLayout}, minmax(0, 1fr))`}} className='gap-3 my-10' id="likes-list">
        {likesList}
      </ul>
    </React.Fragment>
  );
};

export default LikesList;
