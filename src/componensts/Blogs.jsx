import React from 'react'
import Container from './layer/Container'
import Image from './layer/Image'
import fork from '../assets/fork.png'
import spoon from '../assets/spoon.png'
import Blog1 from '../assets/Blog1.jpg'
import Blog2 from '../assets/Blog2.jpg'
import Blog3 from '../assets/Blog3.jpg'
import { Link } from 'react-router-dom'
import Button from './layer/Button'


const Blogs = () => {
  return (
    <div className='py-[152px] '>
      <Container>
        <div className=''>


        <div className=' flex flex-col justify-center items-center gap-y-2 mb-16'>
          <h3 className='font-CU text-[#FFF] text-[23px] font-semibold leading-[30px]'>Blogs</h3>
          <div className="flex  gap-x-2 ">
            <Image className="rotate-180 cursor-auto" src={fork} />
            <Image className='cursor-auto' src={spoon} />
          </div>
          <p className='text-[#DCCA87] font-CU text-[64px] leading-[83px] font-semibold capitalize'>Gerícht updates</p>
        </div>




        <div className='main flex justify-center items-center gap-x-8'>
        <div >
          <Image className='cursor-auto' src={Blog1}/>
          <div className='flex justify-between w-[410px] mt-6'>
            <p className='text-[#FAFAFA] font-OS text-[16px] leading-7 '>16 Apr 2021</p>
            <p className='text-[#FAFAFA] font-OS text-[16px] leading-7'>- Annalisa L</p>
          </div>
        <div className='w-[412px]'>
          <p className='text-[#DCCA87]  font-CU text-[32px] leading-[42px] capitalize
          mt-8 tracking-[1.28px] relative group'><span>tips for prepping and caring
             for your grill</span><span className="absolute -bottom-[0.5px] left-0 w-0 h-[1px] bg-[#DCCA87] transition-all group-hover:w-full"></span></p>

          <p className='font-OS text-[#AAA] mt-8 mb-8 leading-7 tracking-[0.64px] text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
        </div>

        <Link className='text-[#DCCA87] font-CU text-base leading-7 font-bold tracking-[0.64px]' >Read More</Link>
          

        </div>

        <div >
          <Image className='cursor-auto' src={Blog2}/>
          <div className='flex justify-between w-[410px] mt-6'>
            <p className='text-[#FAFAFA] font-OS text-[16px] leading-7 '>23 May 2021</p>
            <p className='text-[#FAFAFA] font-OS text-[16px] leading-7'>-John Micheal</p>
          </div>
        <div className='w-[412px]'>
          <p className='text-[#DCCA87]  font-CU text-[32px] leading-[42px] capitalize
          mt-8 tracking-[1.28px] relative group'><span>summer cocktails and mocktails</span><span className="absolute -bottom-[0.5px] left-0 w-0 h-[1px] bg-[#DCCA87] transition-all group-hover:w-full"></span></p>

          <p className='font-OS text-[#AAA] mt-8 mb-8 leading-7 tracking-[0.64px] text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
        </div>

        <Link className='text-[#DCCA87] font-CU text-base leading-7 font-bold tracking-[0.64px]' >Read More</Link>
          

        </div>

        <div >
          <Image className='cursor-auto' src={Blog3}/>
          <div className='flex justify-between w-[410px] mt-6'>
            <p className='text-[#FAFAFA] font-OS text-[16px] leading-7 '>06 Aug 2021</p>
            <p className='text-[#FAFAFA] font-OS text-[16px] leading-7'>-Fred W</p>
          </div>
        <div className='w-[412px]'>
          <p className='text-[#DCCA87]  font-CU text-[32px] leading-[42px] capitalize
          mt-8 tracking-[1.28px] relative group'><span>easy cooking for college students</span><span className="absolute -bottom-[0.5px] left-0 w-0 h-[1px] bg-[#DCCA87] transition-all group-hover:w-full"></span></p>

          <p className='font-OS text-[#AAA] mt-8 mb-8 leading-7 tracking-[0.64px] text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
        </div>

        <Link className='text-[#DCCA87] font-CU text-base leading-7 font-bold tracking-[0.64px]' >Read More</Link>
          

        </div>
        </div>



        </div>
        <div className='flex justify-center items-center mt-16'>
        <Button text='View More'/>
        </div>
        
          
        
      </Container>
    </div>
  )
}

export default Blogs
