import React, { Dispatch, SetStateAction, useDeferredValue, useEffect, useMemo, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import SearchMenu from "../../components/Search/SearchMenu";
import { useFetchProductsQuery } from "../../redux/Api/ProductApi";

type HeaderSearchProps = {
  isOpenMenu: string;
  setMenu: Dispatch<SetStateAction<string>>;
};

const HeaderSearch: React.FC<HeaderSearchProps> = ({ isOpenMenu, setMenu }) => {
  const [searchMenu, setSearchMenu] = useState<boolean>(false);
  const [searchValue, setSearcValue] = useState<string>("");
  const { data } = useFetchProductsQuery();
  const defferedSearch = useDeferredValue(searchValue);

  //! Click the any element and closed search menu
  useEffect(() => {
    const handleClick = () => {
      setSearchMenu(false);
      setMenu("");
    };

    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  //!Click input open the search menu
  const handleOpenMenu = (e: React.MouseEvent<HTMLInputElement>) => {
    setSearchMenu(true);
    e.stopPropagation();
  };

  const filteredSearch = useMemo(() => {
    return data?.filter((product) =>
      product.title.trim().toLowerCase().includes(defferedSearch.trim().toLowerCase())
    );
  }, [data, searchValue]);

  return (
    <div
      className={`search-container relative flex-[1.6] ${isOpenMenu}`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="lg:hidden flex items-center justify-between mb-3">
        <h1 className="font-[600] text-lg">Search</h1>
        <IoCloseOutline size={24} onClick={() => setMenu("")} />
      </div>

      <div className="search-bar relative">
        <input
          type="text"
          placeholder="Search for products"
          className="w-full py-3 px-5 pe-16 rounded-3xl outline-none placeholder-gray-500"
          onClick={handleOpenMenu}
          value={searchValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => data && setSearcValue(e.target.value)}
        />

        <IoSearchOutline
          className="absolute top-1/2 right-4 -translate-y-1/2"
          size={30}
          cursor="pointer"
        />
      </div>

      <div className="search-menu">
        <SearchMenu
          isOpenSearchMenu={searchMenu}
          filteredSearchData={filteredSearch}
          searchValue={defferedSearch}
        />
      </div>
    </div>
  );
};

export default HeaderSearch;
