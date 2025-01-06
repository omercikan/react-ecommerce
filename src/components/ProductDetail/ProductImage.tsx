import Skeleton from '@mui/material/Skeleton'
import React from 'react'
import { productDetailComponentsProps } from '../../types/types';

const ProductImage: React.FC<productDetailComponentsProps> = ({matchedProduct}) => {
  return (
    <div className="detail-image-container relative flex-[40%]">
        {matchedProduct?.image ? (
          <React.Fragment>
            <figure className='border p-16 rounded-lg bg-white mb-5 max-sm:mb-0'>
                <img src={matchedProduct.image} alt={matchedProduct.title} className='max-lg:p-0' />
            </figure>
          </React.Fragment>
        ) : <Skeleton height={600} className='absolute -top-32 left-0 w-full max-lg:invisible' />}
    </div>
  )
}

export default ProductImage;