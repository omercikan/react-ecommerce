import React, { Dispatch, SetStateAction, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";

type HeaderSearchProps = {
  isOpenMenu: string;
  setMenu: Dispatch<SetStateAction<string>>;
}

const HeaderSearch: React.FC<HeaderSearchProps> = ({isOpenMenu, setMenu}) => {
  const [searchMenu, setSearchMenu] = useState<boolean>(false);

  //! Click the any element and closed search menu
  window.addEventListener('click', () => {
    setSearchMenu(false);
    setMenu("");
  })

  //!Click input open the search menu
  const handleOpenMenu = (e: React.MouseEvent<HTMLInputElement>) => {
    setSearchMenu(true);
    e.stopPropagation();
  }

  return (
    <div className={`search-container relative flex-[1.6] ${isOpenMenu}`} onClick={(e) => e.stopPropagation()}>
      <div className="lg:hidden flex items-center justify-between mb-3">
        <h1 className="font-[600] text-lg">Search</h1>
        <IoCloseOutline size={24} onClick={() => setMenu("")} />
      </div>
      <div className="search-bar relative">
        <input
          type="text"
          placeholder="Search for products"
          className="w-full py-3 px-5 rounded-3xl outline-none placeholder-gray-500"
          onClick={handleOpenMenu}
        />
        <IoSearchOutline
          className="absolute top-1/2 right-4 -translate-y-1/2"
          size={30}
          cursor="pointer"
        />
      </div>

      {searchMenu && (
        <div className="search-result-menu">
          <div className="bg-white rounded-[5px] p-[18px] absolute top-[125%] w-full border" onClick={(e) => e.stopPropagation()}>
            <h2>Popular Products</h2>

            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderSearch;
