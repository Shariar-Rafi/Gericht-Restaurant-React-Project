import React from 'react'
import Banner from '../Banner'
import About from '../About'
import Reservations from '../Reservations'
import BarMenu from '../BarMenu'
import Review from '../Review'
import SpecialMenu from '../SpecialMenu'
import ChefWord from '../ChefWord'
import Laurels from '../Laurels'
import Blogs from '../Blogs'
import Video from '../Video'
import Photogallery from '../Photogallery'
import Newsletter from '../Newsletter'


const Home = () => {
  return (
    <div className="bg-home-bg z-10 bg-repeat"> 
      {/* className="div bg-home-bg z-10  bg-repeat-y" */}
        <Banner />
        <About />
        <Reservations />
        <BarMenu/>
        <SpecialMenu/>
        <ChefWord/>
        <Review/>
        <Video/>
        <Laurels/>
        <Blogs/>
        <Photogallery/>
        <Newsletter/>
    </div>

  )
}

export default Home
