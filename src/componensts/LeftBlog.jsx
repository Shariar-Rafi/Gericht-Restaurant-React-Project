import React from 'react'
import Image from './layer/Image'
import { Link } from 'react-router-dom'
import Button from './layer/Button'
import Blog1 from '../assets/Blog1.jpg'
import Blog2 from '../assets/Blog2.jpg'
import Blog4 from '../assets/Blog4.jpg'
import Blog5 from '../assets/Blog5.jpg'

const LeftBlog = () => {
  return (
    <div>

      <div className='main flex justify-center gap-x-8 gap-y-16 w-[856px] flex-wrap'>
      <div className='group'>
        <Image className='cursor-auto' src={Blog1}/>
        <div className='flex justify-between w-[410px] mt-6'>
          <p className='text-[#FAFAFA] font-OS text-[16px] leading-7 '>16 Apr 2021</p>
          <p className='text-[#FAFAFA] font-OS text-[16px] leading-7'>- Annalisa L</p>
        </div>
        <div className='w-[412px] '>
            {/* <div className='group'> */}

                <Link to="/blogs-detail">
                  <p className='text-[#DCCA87] font-CU text-[32px] leading-[42px] capitalize
                  mt-8 tracking-[1.28px] relative group inline-block'>tips for prepping and caring<span className="absolute -bottom-[0.5px] left-0 w-0 h-[1px] bg-[#DCCA87] transition-all duration-300 group-hover:w-full"></span></p>
                  <p className='text-[#DCCA87] font-CU text-[32px] leading-[42px] capitalize tracking-[1.28px] relative group inline-block'>
                  for your grill
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#DCCA87] transition-all duration-700 group-hover:w-full"></span>
                  </p>
                </Link>
            {/* </div> */}

        <p className='font-OS text-[#AAA] mt-8 mb-8 leading-7 tracking-[0.64px] text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
      </div>

      <Link className='text-[#DCCA87] font-CU text-base leading-7 font-bold tracking-[0.64px]' >Read More</Link>
        

      </div>

      <div className='group'>
        <Image className='cursor-auto' src={Blog2}/>
        <div className='flex justify-between w-[410px] mt-6'>
          <p className='text-[#FAFAFA] font-OS text-[16px] leading-7 '>23 May 2021</p>
          <p className='text-[#FAFAFA] font-OS text-[16px] leading-7'>-John Micheal</p>
        </div>
        <div className='w-[412px]'>
                <p className='text-[#DCCA87]  font-CU text-[32px] leading-[42px] capitalize
                mt-8 tracking-[1.28px] relative group inline-block'>summer cocktails and <span className="absolute -bottom-[0.5px] left-0 w-0 h-[1px] bg-[#DCCA87] transition-all duration-300 group-hover:w-full"></span></p>
                <p className='text-[#DCCA87]  font-CU text-[32px] leading-[42px] capitalize
                tracking-[1.28px] relative group inline-block'>mocktails<span className="absolute -bottom-[0.5px] left-0 w-0 h-[1px] bg-[#DCCA87] transition-all duration-700 group-hover:w-full"></span></p>

        <p className='font-OS text-[#AAA] mt-8 mb-8 leading-7 tracking-[0.64px] text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
      </div>

      <Link className='text-[#DCCA87] font-CU text-base leading-7 font-bold tracking-[0.64px]' >Read More</Link>
        

      </div>

      <div className='group'>
        <Image className='cursor-auto' src={Blog4}/>
        <div className='flex justify-between w-[410px] mt-6'>
          <p className='text-[#FAFAFA] font-OS text-[16px] leading-7 '>06 Mar 2020</p>
          <p className='text-[#FAFAFA] font-OS text-[16px] leading-7'>- Andrial M</p>
        </div>
        <div className='w-[412px] '>

                <p className='text-[#DCCA87]  font-CU text-[32px] leading-[42px] capitalize
                mt-8 tracking-[1.28px] relative group inline-block'><span>How to make your food </span><span className="absolute -bottom-[0.5px] left-0 w-0 h-[1px] bg-[#DCCA87] transition-all duration-300 group-hover:w-full"></span></p>
                <p className='text-[#DCCA87]  font-CU text-[32px] leading-[42px] capitalize
                tracking-[1.28px] relative group inline-block'><span></span><span className="absolute -bottom-[0.5px] left-0 w-0 h-[1px] bg-[#DCCA87] transition-all duration-700 group-hover:w-full"></span>Photographs look aesthetic</p>

        <p className='font-OS text-[#AAA] mt-8 mb-8 leading-7 tracking-[0.64px] text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
      </div>
      <Link className='text-[#DCCA87] font-CU text-base leading-7 font-bold tracking-[0.64px]' >Read More</Link>
        

      </div>

      <div className='group'>
        <Image className='cursor-auto' src={Blog5}/>
        <div className='flex justify-between w-[410px] mt-6'>
          <p className='text-[#FAFAFA] font-OS text-[16px] leading-7 '>17 June 2018</p>
          <p className='text-[#FAFAFA] font-OS text-[16px] leading-7'>-Kaityln B</p>
        </div>
      <div className='w-[412px]'>

            <p className='text-[#DCCA87]  font-CU text-[32px] leading-[42px] capitalize
            mt-8 tracking-[1.28px] relative group inline-block'><span>Co-ordination & Teamwork  </span><span className="absolute -bottom-[0.5px] left-0 w-0 h-[1px] bg-[#DCCA87] transition-all duration-300 group-hover:w-full"></span></p>
            <p className='text-[#DCCA87]  font-CU text-[32px] leading-[42px] capitalize
            tracking-[1.28px] relative group inline-block'><span className="absolute -bottom-[0.5px] left-0 w-0 h-[1px] bg-[#DCCA87] transition-all duration-700 group-hover:w-full"></span>Tips from a sous chef</p>

        <p className='font-OS text-[#AAA] mt-8 mb-8 leading-7 tracking-[0.64px] text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
      </div>

      <Link className='text-[#DCCA87] font-CU text-base leading-7 font-bold tracking-[0.64px]' >Read More</Link>
        

      </div> 


      <div className='flex justify-center items-center'>
      <Button text='View More'/>
      </div>
      </div>
  </div>
  )
}

export default LeftBlog