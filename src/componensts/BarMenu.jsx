import React from 'react'
import Container from './layer/Container'
import Image from './layer/Image'
import bg from '../assets/glass.jpg'
const BarMenu = () => {
  return (
    <Container >
    <div className='font-CU relative'>
         <Image className=' w-full' src={bg}/>

        
      
        <div className=' text-white  text-[64px] pt-40 absolute'>
        <h3 className='border-b-4 border-white max-w-[242px]' >Bar Menu</h3>
        <h3 className='py-[65px]'>Food Menu</h3>
        <h3>Desserts Menu</h3>
        </div>
        </div>
        </Container>
    
  )
}

export default BarMenu
