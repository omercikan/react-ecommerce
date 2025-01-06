import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const HeaderUserTab: React.FC = () => {
  const { cart } = useSelector((state: RootState) => state.cartSlice);

  return (
    <div className="header-user-tab flex-[1]">
        <ul className='flex gap-10 text-white justify-end'>
            <li className='cursor-pointer text-[#fdc525]'>
                <FaRegHeart className='mx-auto hover:scale-110 transition-all duration-300' size={28} />
                <span className='text-sm'>Favorites</span>
            </li>

            <li className='cursor-pointer text-[#fdc525] relative'>
                <span className='absolute -right-3 -top-2 bg-[#0a6cdc] text-white flex justify-center items-center w-6 h-6 rounded-full text-xs'>{cart.length}</span>
                <RiShoppingCart2Line className='mx-auto hover:scale-110 transition-all duration-300' size={28} />
                <span className='text-sm'>Cart</span>
            </li>
        </ul>
    </div>
  )
}

export default HeaderUserTab