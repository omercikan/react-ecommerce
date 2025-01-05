import React from 'react'
import { useFetchProductsQuery } from '../../redux/Api/ProductApi';
import RecommendedProduct from './RecommendedProduct';
import { Skeleton } from '@mui/material';
import { Product } from '../../types/types';

type searchMenuProps = {
    isOpenSearchMenu: boolean;
    filteredSearchData: Product[];
    searchValue: string;
}

const SearchMenu: React.FC<searchMenuProps> = ({isOpenSearchMenu, filteredSearchData, searchValue}) => {
    const { data, isFetching } = useFetchProductsQuery();
    const slicedData = data?.slice(15, 18);

    let searchMenuContent;

    if(data) {
        searchMenuContent = (
            <ul className='grid grid-cols-3 gap-3 overflow-x-auto max-lg:flex'>
                {
                    slicedData?.map((product) => (
                        <RecommendedProduct item={product} key={product.id}/>
                    ))
                }
            </ul>
        )   
    }

    if(isFetching) {
        searchMenuContent = <Skeleton variant='rounded' animation="wave" height={100} />;
    }

    if(searchValue.length > 0) {
        searchMenuContent = (
            <React.Fragment>
                {
                    filteredSearchData?.length > 0 ? (
                        <ul className='flex gap-3 overflow-x-auto' style={{scrollbarWidth: "thin"}}>
                            {
                                filteredSearchData?.map((product) => (
                                    <RecommendedProduct item={product} key={product.id} filteredSearchData={filteredSearchData} />
                                ))
                            }
                        </ul>
                    ) : <p className='text-gray-500 text-sm text-center py-5 font-medium text-ellipsis overflow-hidden'>Search result not found <span className='font-bold text-black w-full'>"{searchValue}"</span></p>
                }
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            {isOpenSearchMenu && (
                <div className="search-result-menu">
                    <div className="bg-white rounded-[5px] p-[18px] absolute top-[125%] w-full border z-40" onClick={(e) => e.stopPropagation()}>
                        <h2 className='border-b pb-3 mb-3 font-extrabold uppercase text-sm'>Popular Products</h2>
                    
                        {searchMenuContent}
                    </div>
                </div>
            )}
        </React.Fragment>
    )
}

export default SearchMenu;