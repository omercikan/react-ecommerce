import React from 'react'
import { useFetchProductsQuery } from '../../redux/Api/ProductApi'
import ProductItem from './ProductItem';
import { Skeleton } from '@mui/material';

const ProductList: React.FC = () => {
    const { data, isFetching, isError } = useFetchProductsQuery();

    let dataContent;

    if(data) {
        dataContent = (
            <ul className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-5 my-5 max-sm:flex max-sm:flex-wrap mx-4'>
                {data?.map((product) => (
                    <ProductItem item={product} key={product.id} />
                ))} 
            </ul> 
        );
    };

    if(isFetching) {
        dataContent = (
            <ul className='my-5 mx-4 loading-list'>
                {
                    <Skeleton variant='rounded' animation="wave" className='loading-screen'/>
                }
            </ul> 
        );
    };

    return (
        <React.Fragment>
            {dataContent}
        </React.Fragment>
    )
}

export default ProductList