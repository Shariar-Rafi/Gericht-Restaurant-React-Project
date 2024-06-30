import React from 'react'
import fork from '../assets/fork.png'
import spoon from '../assets/spoon.png'
import Image from './layer/Image'
import { Link } from 'react-router-dom'

const ServiceQuality = () => {
  return (
    <div className='max-w-[1300px] py-[152px] mx-auto flex flex-col items-center'>
        <div className='text-center'>
            <p className='text-[#fff] font-CU text-[23px] font-bold leading-[30px]'>Serving Quality</p>
            <div className="flex  gap-x-2 my-2 justify-center items-center">
            <Image className="rotate-180 cursor-auto" src={fork} />
            <Image className='cursor-auto' src={spoon} />
          </div>
          <h5 className='text-[#DCCA87] font-CU text-[64px] leading-[84px] tracking-[1.39px] capitalize'>We at Gericth are serving our customers for over a decade.</h5>
        </div>
        <p className='text-[#aaa] font-OS text-base font-normal leading-7 max-w-[868px] text-center my-10'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
        </p>
        <div className='flex gap-x-10'>
        <Link>
            <button className='w-[137px] py-2 text-black bg-[#DCCA87] font-OS border border-transparent hover:border-[#DCCA87] hover:bg-transparent transition-all duration-300 hover:text-[#fff]'>Read More</button>
      
        </Link>

        <Link to="/contact-us">
            <button className='w-[137px] py-2 text-black bg-[#DCCA87] font-OS border border-transparent hover:border-[#DCCA87] hover:bg-transparent transition-all duration-300 hover:text-[#fff]'>Contact Us</button>
      
        </Link>
        </div>
    </div>
  )
}

export default ServiceQuality