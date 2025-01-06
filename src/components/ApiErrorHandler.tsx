import React from 'react'
import { useNavigate } from 'react-router-dom'

const ApiErrorHandler: React.FC = () => {
    const navigate = useNavigate();

  return (
    <div className='flex flex-col justify-center items-center' style={{height: "calc(100vh - 122px)"}}>
        <h1 className='text-[#be123c] text-6xl max-lg:text-5xl max-md:text-3xl max-sm:text-wrap text-center max-sm:text-2xl'>Oops! Something went wrong.</h1> 
        <p className='mt-5 text-xl italic font-semibold max-md:text-lg max-sm:text-wrap max-sm:text-sm text-center'>"We couldn't fetch the data. Please try refreshing the page."</p>
        <button className='bg-black text-white p-3 px-10 mt-3 rounded-full' onClick={() => navigate(0)}>Refresh</button>
    </div>
  )
}

export default ApiErrorHandler