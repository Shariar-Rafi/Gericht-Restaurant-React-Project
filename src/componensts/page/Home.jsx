import React from 'react'
import Banner from '../Banner'
import About from '../About'
import Reservations from '../Reservations'
import BarMenu from '../BarMenu'
import Review from '../Review'
import SpecialMenu from '../SpecialMenu'


const Home = () => {
  return (
    <div className="bg-home-bg z-10  bg-repeat-y"> 
      {/* className="div bg-home-bg z-10  bg-repeat-y" */}
        <Banner />
        <About />
        <Reservations />
        <BarMenu/>
        <SpecialMenu/>
        <Review/>
        
    </div>

  )
}

export default Home
