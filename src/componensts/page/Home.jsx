import React from 'react'
import Banner from '../Banner'
import About from '../About'
import Reservations from '../Reservations'
import BarMenu from '../BarMenu'

const Home = () => {
  return (
    <div className="div bg-home-bg z-10">
        <Banner />
        <About />
        <Reservations />
        <BarMenu/>
    </div>

  )
}

export default Home
