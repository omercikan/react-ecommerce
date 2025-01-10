import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { changeOpenModeCart } from '../../redux/Slices/isOpenCartSlice';

const HeaderUserTab: React.FC = () => {
  const { cart } = useSelector((state: RootState) => state.cartSlice);
  const dispatch = useDispatch<AppDispatch>();

  const handleOpenCart = () => {
    document.body.style.overflowY = "hidden";
    dispatch(changeOpenModeCart())
  }

  return (
    <div className="header-user-tab flex-[1]">
        <ul className='flex gap-10 text-white justify-end'>
            <li className='cursor-pointer text-[#fdc525]'>
                <FaRegHeart className='mx-auto hover:scale-110 transition-all duration-300' size={28} />
                <span className='text-sm'>Favorites</span>
            </li>

            <li className='cursor-pointer text-[#fdc525] relative' onClick={handleOpenCart}>
                <span className='absolute -right-3 -top-2 bg-[#0a6cdc] text-white flex justify-center items-center w-6 h-6 rounded-full text-xs z-10 max-sm:w-4 max-sm:h-4 max-sm:text-[10px] max-sm:-right-2 max-sm:-top-1'>{cart.length}</span>
                <RiShoppingCart2Line className='mx-auto hover:scale-110 transition-all duration-300' size={28}/>
                <span className='text-sm'>Cart</span>
            </li>
        </ul>
    </div>
  )
}

export default HeaderUserTab