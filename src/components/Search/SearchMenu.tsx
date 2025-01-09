import React from 'react'
import { useFetchProductsQuery } from '../../redux/Api/ProductApi';
import RecommendedProduct from './RecommendedProduct';
import { Skeleton } from '@mui/material';
import { Product } from '../../types/types';

type searchMenuProps = {
    isOpenSearchMenu: boolean;
    filteredSearchData: Product[] | undefined;
    searchValue: string;
}

const SearchMenu: React.FC<searchMenuProps> = ({isOpenSearchMenu, filteredSearchData, searchValue}) => {
    const { data, isFetching } = useFetchProductsQuery();
    const slicedData = data?.slice(15, 18);

    let searchMenuContent;

    if(data) {
        searchMenuContent = (
            <React.Fragment>
                <h2 className='border-b pb-3 mb-3 font-extrabold uppercase text-sm'>Popular Products</h2>

                <ul className='grid grid-cols-3 gap-3 overflow-x-auto max-lg:flex' style={{scrollbarWidth: "thin"}}>
                    {
                        slicedData?.map((product) => (
                            <RecommendedProduct item={product} key={product.id}/>
                        ))
                    }
                </ul>
            </React.Fragment>
        )   
    }

    if(isFetching) {
        searchMenuContent = <Skeleton variant='rounded' animation="wave" height={100} />;
    }

    if(searchValue.length > 0) {
        searchMenuContent = (
            <React.Fragment>
                {
                    filteredSearchData!.length > 0 ? (
                        <React.Fragment>
                            <h2 className='border-b pb-3 mb-3 font-extrabold uppercase text-sm'>Search Results</h2>

                            <ul className='flex gap-3 overflow-x-auto' style={{scrollbarWidth: "thin"}}>
                                {
                                    filteredSearchData?.map((product) => (
                                        <RecommendedProduct item={product} key={product.id} filteredSearchData={filteredSearchData} />
                                    ))
                                }
                            </ul>
                        </React.Fragment>
                    ) : <p className='text-gray-500 text-sm text-center py-5 font-medium text-ellipsis overflow-hidden'>Search result not found <span className='font-bold text-black w-full'>"{searchValue}"</span></p>
            }
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            {isOpenSearchMenu && (
                <div className="search-result-menu">
                    <div className="bg-white rounded-[5px] p-[18px] absolute top-[125%] w-full border" onClick={(e) => e.stopPropagation()}>
                    
                        {searchMenuContent}
                    </div>
                </div>
            )}
        </React.Fragment>
    )
}

export default SearchMenu;