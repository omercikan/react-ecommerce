import React from 'react'
import { Product } from '../../types/types'
import { Link } from 'react-router-dom';

type RecommendedProductProps = {
    item: Product;
    filteredSearchData?: Product[];
}

const RecommendedProduct: React.FC<RecommendedProductProps> = ({item, filteredSearchData}) => {
    const { id, image, title, price } = item;

  return (
    <li className='p-3 group relative w-full recommended-item'>
        <figure>
            <img src={image} alt={title} className='object-contain w-full h-60 p-2'/>
        </figure>

        <div className='hover-div absolute'>
            <Link to={`/product-detail/${title}:${id}`}> 
                <button className='whitespace-nowrap p-2 border rounded-3xl bg-white text-sm invisible opacity-0 transition duration-500'>Review Product</button> 
            </Link>
        </div>

        <div className="recommended-content">
            <h2 className={`whitespace-nowrap  text-ellipsis overflow-hidden max-lg:w-[200px] ${filteredSearchData?.length && 'w-[200px]'}`}>{title}</h2>
            <span className='text-[#e10600] font-bold mt-4 inline-block'>{price} $</span>
        </div>
    </li>
  )
}

export default RecommendedProduct