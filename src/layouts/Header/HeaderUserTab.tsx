import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";

const HeaderUserTab: React.FC = () => {
  return (
    <div className="header-user-tab flex-[1]">
        <ul className='flex gap-10 text-white justify-end'>
            <li className='cursor-pointer text-[#fdc525]'>
                <FaRegHeart className='mx-auto hover:scale-110 transition-all duration-300' size={28} />
                <span className='text-sm'>Favorites</span>
            </li>

            <li className='cursor-pointer text-[#fdc525]'>
                <RiShoppingCart2Line className='mx-auto hover:scale-110 transition-all duration-300' size={28} />
                <span className='text-sm'>Cart</span>
            </li>
        </ul>
    </div>
  )
}

export default HeaderUserTab