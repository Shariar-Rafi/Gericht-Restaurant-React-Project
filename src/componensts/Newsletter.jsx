import React from 'react'
import Container from './layer/Container'
import Image from './layer/Image'
import fork from '../assets/fork.png'
import spoon from '../assets/spoon.png'
import Button from './layer/Button'


const Newsletter = () => {
  return (
    <div className='pt-[113px] h-[334px]'>
      <Container className='flex justify-center items-center'>

        <div className='bg-[#0c0c0c] main w-[1300px] border border-[#dcca87] border-opacity-20'>
        
        <div className='py-16 px-[252px]'>
        <div className='flex flex-col justify-center items-center gap-y-2 mb-16'>
          <h3 className='font-CU text-[#FFF] text-[23px] font-semibold leading-[30px]'>Newsletter</h3>
            <div className="flex  gap-x-2">
              <Image className="rotate-180 cursor-auto" src={fork} />
              <Image className='cursor-auto' src={spoon} />
            </div>
          <p className='text-[#DCCA87] font-CU text-[64px] leading-[83px] font-semibold capitalize '>Subscribe to Our Newsletter</p>
          <p className='text-[#FFF] font-OS text-[16px] leading-7 mt-6'>And never miss latest Updates!</p>
        </div>

        <div className='flex justify-center items-center mt-8 gap-x-[32px] '>
          

          <input className='text-[#AAA] font-CU text-[16px] font-semibold leading-7 w-[635px] h-[60px] border border-[#F5EFDB]  border-spacing-1   bg-transparent outline-none px-5' type="email" placeholder="Email Address " />

          <Button className='font-CU  text-[#0C0C0C] text-[16px] font-semibold leading-7 tracking-[0.64px]'  text='Subscribe' />
        </div>
        </div>

        </div>

      </Container>
    </div>
  )
}

export default Newsletter
