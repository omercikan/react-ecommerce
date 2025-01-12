import React, { useDeferredValue, useMemo, useState } from 'react'
import LikesList from '../components/Likes/LikesList'
import { Link } from 'react-router-dom'
import { GoChevronLeft } from "react-icons/go";
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Seo from '../components/Seo/Seo';

const Likes: React.FC = () => {
  const { likes } = useSelector((state: RootState) => state.likesSlice);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const defferedSearch = useDeferredValue(searchTerm);
  
  const searchedLikes = useMemo(() => {
    return likes.filter((product) => 
      product.title.trim().toLowerCase().includes(defferedSearch.trim().toLowerCase()))
  }, [likes, searchTerm, defferedSearch]) 

  return (
    <>
      <Seo 
        title="Trending Products You Love - Trendly"
        description="Explore the best products that users are loving right now. See what's trending and make your purchase decisions today!"
        keywords="top products, trending items, product wishlist, favorite products, best sellers"
      />

      <div className='mt-[122px]'>
        <div className="likes-container"> 
          <div className="breadcrumbs my-20 flex items-center gap-1 text-[#999999]">
              <Link to='/' className='flex items-center gap-1 hover:text-[#232323] transition duration-500'>
                Home 
              </Link>

              <GoChevronLeft /> 
              <span>Favorites</span>
          </div>

          <div className='mb-10 border-b pb-10 text-2xl uppercase flex justify-between items-center'>
            <h1>My Favorites ({likes.length})</h1>
            <input type="text" placeholder='Search in my favorites' className='border outline-none text-sm py-2 px-3' onChange={(e) => setSearchTerm(e.target.value)}/>
          </div>

          <LikesList 
            searchedLikes={searchedLikes}
            searchTerm={defferedSearch}
          />
        </div>
      </div>
    </>
  )
}

export default Likes