import React from 'react'
import { Product } from '../../types/types'
import { IoClose } from "react-icons/io5";
import { IoEye } from "react-icons/io5";

type likeItemProps = {
    item: Product;
    gridLayout: string;
}

const LikeItem: React.FC<likeItemProps> = ({item, gridLayout}) => {
    const { image, title, price, description } = item;

    return (
        <li className={`group ${gridLayout == "1" && "flex gap-10 max-sm:flex-col max-sm:items-center"} border rounded-lg p-5 relative overflow-hidden`} id='like-item'>
            <div className='absolute z-10 -right-[100%] group-hover:right-4 top-4 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-700'>
                <IoClose size={28} cursor="pointer" color='white' className='bg-black rounded-full p-1' />
                <IoEye size={28} cursor="pointer" color='white' className='bg-black rounded-full p-1 mt-1'/>
            </div>

            <figure className={`${gridLayout == "1" && "w-[250px] align-top inline-block"}`}> 
                <img src={image} alt={title} className={`${gridLayout == "4" && "w-[270px] h-[270px]"} ${gridLayout == "3" && "w-[370px] h-[370px]"} ${gridLayout == "2" && "w-[570px] h-[570px] max-lg:h-[400px] max-sm:h-[200px] max-[375px]:h-[100%]"} ${gridLayout == "1" && "w-full h-full max-sm:h-auto"} object-contain`}/>
            </figure>

            <div className={`mt-10 ${gridLayout == "1" && "w-[calc(100%-250px)]"}`}>
                <h2 className='mt-5 whitespace-nowrap text-ellipsis overflow-hidden max-sm:text-sm'>{title}</h2>
                <p className={`${gridLayout == "1" ? "inline-flex my-5 text-sm color-[#232323]" : "hidden"}`}>{description}</p>
                <span className='font-bold text-[#e10600]'>${price}</span>
            </div>
        </li>
    )
}

export default LikeItem;