import React from 'react'
import { Link } from 'react-router-dom'
import Image from './layer/Image'

const BlogSlider = ({src, className, date, writer, to, title1, title2, details}) => {
  return (
    <div className={` UpdateSlider w-[412px] w-100% group ${className}`}>

    <div className='group'>
        <Image className='cursor-auto' src={src}/>
        <div className='flex justify-between w-[410px] mt-6'>
          <p className='text-[#FAFAFA] font-OS text-[16px] leading-7 '>{date}</p>
          <p className='text-[#FAFAFA] font-OS text-[16px] leading-7'>{writer}</p>
        </div>
        <div className='w-[412px] '>
            <div className='group'> 

                <Link to={to}>
                  <p className='text-[#DCCA87] font-CU text-[32px] leading-[42px] capitalize
                  mt-8 tracking-[1.28px] relative group inline-block'>{title1}<span className="absolute -bottom-[0.5px] left-0 w-0 h-[1px] bg-[#DCCA87] transition-all duration-300 group-hover:w-full"></span></p>
                  <p className='text-[#DCCA87] font-CU text-[32px] leading-[42px] capitalize tracking-[1.28px] relative group inline-block'>
                  {title2}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#DCCA87] transition-all duration-700 group-hover:w-full"></span>
                  </p>
                </Link>
            </div>

        <p className='font-OS text-[#AAA] mt-8 mb-8 leading-7 tracking-[0.64px] text-base'>{details}</p>
      </div>

      <Link className='text-[#DCCA87] font-CU text-base leading-7 font-bold tracking-[0.64px]' >Read More</Link>


      </div>


    </div>
  )
}

export default BlogSlider