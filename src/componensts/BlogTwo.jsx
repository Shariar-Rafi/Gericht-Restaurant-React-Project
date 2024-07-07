import React from 'react'

import Image from './layer/Image'
import { Link } from 'react-router-dom'
import Blog1 from '../assets/Blog1.jpg'
import Blog2 from '../assets/Blog2.jpg'


const BlogTwo = () => {
  return (
    <div className='w-[856px] flex flex-col gap-y-16'>
        <div className='group'>
        <Image className='cursor-auto object-cover w-full h-[475px]' src={Blog1}/>
        <div className='flex justify-between mt-10'>
          <p className='text-[#FAFAFA] font-OS text-[16px] leading-7 '>16 Apr 2021</p>
          <p className='text-[#FAFAFA] font-OS text-[16px] leading-7'>- Annalisa L</p>
        </div>
        <div>
            {/* <div className='group'> */}
              <Link to="/blogs-detail">
                <p className='text-[#DCCA87] font-CU text-[32px] leading-[42px] capitalize
                mt-8 tracking-[1.28px] relative group inline-block'>tips for prepping and caring for your grill<span className="absolute -bottom-[0.5px] left-0 w-0 h-[1px] bg-[#DCCA87] transition-all duration-300 group-hover:w-full"></span></p>
                </Link>
            {/* </div> */}

        <p className='font-OS text-[#AAA] mt-8 mb-8 leading-7 tracking-[0.64px] text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
      </div>

      <Link className='text-[#DCCA87] font-CU text-base leading-7 font-bold tracking-[0.64px]' >Read More</Link>
        

      </div>

      <div className='group'>
        <Image className='cursor-auto object-cover w-full h-[475px]' src={Blog2}/>
        <div className='flex justify-between mt-10'>
          <p className='text-[#FAFAFA] font-OS text-[16px] leading-7 '>23 May 2021</p>
          <p className='text-[#FAFAFA] font-OS text-[16px] leading-7'>-John Micheal</p>
        </div>
        <div>
                <p className='text-[#DCCA87]  font-CU text-[32px] leading-[42px] capitalize
                mt-8 tracking-[1.28px] relative group inline-block'>summer cocktails and mocktails<span className="absolute -bottom-[0.5px] left-0 w-0 h-[1px] bg-[#DCCA87] transition-all duration-300 group-hover:w-full"></span></p>

        <p className='font-OS text-[#AAA] mt-8 mb-8 leading-7 tracking-[0.64px] text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
      </div>

      <Link className='text-[#DCCA87] font-CU text-base leading-7 font-bold tracking-[0.64px]' >Read More</Link>
        

      </div>
    </div>
  )
}

export default BlogTwo