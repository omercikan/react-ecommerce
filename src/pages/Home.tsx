import React from 'react'
import ProductList from '../components/Product/ProductList'
import SlideImage from '../components/Home/SlideImage'
import Seo from '../components/Seo/Seo'
import Categories from '../components/Home/Categories/Categories'

const Home: React.FC = () => {
  return (
    <div className='home-container-element'>
      <Seo
        title="Trendly | Fashion & Tech Products - Best Prices Online"
        description='Trendly is your go-to online shopping destination for the latest fashion trends, electronics, home goods, and more. Shop top-quality products at unbeatable prices with fast and reliable delivery.'
        keywords='online shopping, fashion trends, electronics, home goods, affordable fashion, best online store, trendy clothing, top products, fast delivery, buy online'
      />

      <SlideImage />
      <Categories />
      <ProductList />
    </div>
  )
}

export default Home