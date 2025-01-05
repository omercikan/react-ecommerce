import React from 'react'
import { productItemPropsType } from '../../types/types'
import { Link } from 'react-router-dom';

const ProductItem: React.FC<productItemPropsType> = ({item}) => {
    const { id, image, price, rating, title } = item;

    return (
        <li className='border rounded-lg hover:shadow-md transition duration-300 p-10 max-sm:w-full mb-5'>
            <figure>
                <img src={image} alt={title} className='object-contain w-full h-60'/>
            </figure>

            <div className="product-content">
                <h2 className='whitespace-nowrap text-ellipsis overflow-hidden mt-10 mb-5'>{title}</h2>
                <span className='text-[#e10600] font-bold'>{price} $</span>
                <Link to={`/product-detail/${title}:${id}`}> 
                    <button className='block whitespace-nowrap mt-10 border p-2 w-full rounded-3xl hover:bg-black hover:text-white hover:border-black transition duration-500'>Review Product</button> 
                </Link>
            </div>
        </li>
    )
}

export default ProductItem