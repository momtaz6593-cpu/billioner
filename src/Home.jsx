import React from 'react'
import Navbar from './Home/Navbar'
import Hero from './Home/Hero'
import CategoryBar from './Home/CategoryBar'
import NewSeason from './Home/NewSeason'
import EverydayUniform from './Home/EverydayUniform'
import ShopByStyle from './Home/ShopByStyle'
import FeaturesBar from './Home/FeaturesBar'
import PromoBanner from './Home/PromoBanner'
import Footer from './Home/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <CategoryBar/>
        <NewSeason/>
        <EverydayUniform/>
        <ShopByStyle/>
        <FeaturesBar/>
        <PromoBanner/>
        <Footer/>
    </div>
  )
}

export default Home