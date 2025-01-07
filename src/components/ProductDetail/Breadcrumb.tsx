import Skeleton from '@mui/material/Skeleton';
import React from 'react'
import { GoChevronRight } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { productDetailComponentsProps } from '../../types/types';

const Breadcrumb: React.FC<productDetailComponentsProps> = ({matchedProduct}) => {
  return (
    <div className="product-breadcrubm text-[#999999]">
        <ol className='text-sm flex items-center gap-1'>
        {matchedProduct?.title ? (
            <React.Fragment>
            <li><Link to='/'>Home</Link></li>
            <span> <GoChevronRight /> </span>
            <li className='text-ellipsis whitespace-nowrap overflow-hidden'> {matchedProduct?.title} </li>
            </React.Fragment>
        ) : <Skeleton className='w-2/6' animation="wave"/>}
        </ol>
    </div>
  )
}

export default Breadcrumb;