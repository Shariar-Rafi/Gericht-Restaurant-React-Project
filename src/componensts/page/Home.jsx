import React from 'react'
import Banner from '../Banner'
import bg from "../../assets/bg.jpg"
import About from '../About'
import Reservations from '../Reservations'

const Home = () => {
  return (
    <div className='bg-bg-img bg-cover'>
      <Banner/>
      <About/>
      <Reservations/>
    </div>
  )
}

export default Home
