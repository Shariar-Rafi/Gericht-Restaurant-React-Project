import React from 'react'
import Container from './layer/Container'
import Image from './layer/Image'
import bg from '../assets/glass.jpg'
const BarMenu = () => {
  return (
  
    <div className='font-CU'>
         <Image className='absolute w-full' src={bg}/>

        <Container >
      
        <div className=' text-white absolute text-[64px] pt-40'>
        <h3 className='border-b-4 border-white max-w-[242px]' >Bar Menu</h3>
        <h3 className='py-[65px]'>Food Menu</h3>
        <h3>Desserts Menu</h3>
        </div>
        </Container>
    </div>
  )
}

export default BarMenu
