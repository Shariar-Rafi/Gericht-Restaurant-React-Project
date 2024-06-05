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


const Home = () => {
  return (
    <div className="bg-home-bg z-10 bg-repeat-x"> 
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
    </div>

  )
}

export default Home
