import React from 'react'
import ProductList from '../components/Product/ProductList'
import SlideImage from '../components/Home/SlideImage'

const Home: React.FC = () => {
  return (
    <div className='home-container-element'>
      <SlideImage />

      <ProductList />
    </div>
  )
}

export default Home