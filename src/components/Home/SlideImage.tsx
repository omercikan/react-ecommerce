import React from 'react'
import { Link } from 'react-router-dom'

const SlideImage: React.FC = () => {
  return (
    <div className='mt-[92.3px] max-lg:mt-[81.1px] max-sm:mt-[65.1px] relative'>
        <img src="https://new-ella-demo.myshopify.com/cdn/shop/files/home-19-slider-1.jpg?v=1645001949&width=1880" alt="Slider-image" className='max-lg:h-[400px] max-lg:object-cover max-sm:h-[300px]'/>

        <div className="slide-image-content">
            <div className='absolute top-1/2 left-60 max-lg:left-16 max-md:left-24 max-sm:left-6 -translate-y-1/2'>
                <h2 className='font-bold text-[50px] max-md:text-[40px] max-sm:text-[24px] text-white leading-none'>
                    <strong className='text-[#10ffda]'>Unbeatable Deals</strong>
                    <br />
                    on UHD Televisions!
                </h2>

                <p className='text-white mt-6 mb-12 text-lg max-sm:text-sm'>Up to 70% Off on Selected Items — Shop Now!</p>

                <Link to='/' className=' border border-white py-3.5 px-12 text-white hover:bg-white hover:text-black rounded-full font-medium transition duration-500 max-sm:px-6'>
                    Shop Now
                </Link>
            </div>
        </div>
    </div>
  )
}

export default SlideImage