import React from 'react'
import { FaFacebookF, FaInstagram, FaSearch } from 'react-icons/fa'
import Image from './layer/Image'
import sidebarLine from '../assets/sidebarLine.png'
import Line2 from '../assets/line2.png'
import Blog2 from '../assets/Blog2.jpg'
import { Link } from 'react-router-dom'
import { FiTwitter } from 'react-icons/fi'


const Sidebar = () => {
  return (
    <div className='flex flex-col items-center gap-y-8'>
        <div className='w-[375px] bg-[#242424] p-8 flex flex-col gap-y-6'>
            <p className='text-[#DCCA87] text-[32px] leading-[41.6px] capitalize font-CU'>Search Page</p>

            <div className=' relative'>
            <input 
            type="text" 
            placeholder='Example'
            className='outline-none bg-transparent text-[#aaa] text-base font-OS leading-7 w-[311px] border-b border-[#aaa] hover:border-b-2 hover:border-[#DCCA87] transition-all duration-300'
            />
            <FaSearch className='absolute text-white right-0 top-0 translate-y-[50%]'/>
            </div>
        </div>


        <div className='w-[375px] bg-[#242424] p-8 flex flex-col gap-y-8'>
            
        <p className='text-[#DCCA87] text-[32px] leading-[41.6px] capitalize font-CU'>All Categories</p>

        <div className='flex items-center gap-x-4'>
        <p className='text-[#aaa] text-base font-OS leading-7 w-[103px]'
        >Photography</p>
        <Image src={sidebarLine}/>
        <p className='text-[#aaa] text-base'>(1)</p>
        </div>

        <div className='flex items-center gap-x-4'>
        <p className='text-[#aaa] text-base font-OS leading-7 w-[103px]'
        >Baking</p>
        <Image src={sidebarLine}/>
        <p className='text-[#aaa] text-base'>(2)</p>
        </div>


        <div className='flex items-center gap-x-4'>
        <p className='text-[#aaa] text-base font-OS leading-7 w-[103px]'
        >Cooking Tips</p>
        <Image src={sidebarLine}/>
        <p className='text-[#aaa] text-base'>(6)</p>
        </div>

        </div>


        <div className='w-[375px] bg-[#242424] p-8 gap-y-8 flex flex-col'>

        <p className='text-[#DCCA87] text-[32px] leading-[41.6px] capitalize font-CU'>Our Latest Posts</p>

        <div >
        <Image className='cursor-auto' src={Blog2}/>
        <div className='flex justify-between mt-8'>
          <p className='text-[#FAFAFA] font-OS text-[16px] leading-7 '>23 May 2021</p>
          <p className='text-[#FAFAFA] font-OS text-[16px] leading-7'>-John Micheal</p>
        </div>
        <div>
            <div className='group'>

                <p className='text-[#DCCA87]  font-CU text-[32px] leading-[42px] capitalize
                mt-8 tracking-[1.28px] relative group inline-block'>summer cocktails and <span className="absolute -bottom-[0.5px] left-0 w-0 h-[1px] bg-[#DCCA87] transition-all duration-300 group-hover:w-full"></span></p>
                <p className='text-[#DCCA87]  font-CU text-[32px] leading-[42px] capitalize
                tracking-[1.28px] relative group inline-block'>mocktails<span className="absolute -bottom-[0.5px] left-0 w-0 h-[1px] bg-[#DCCA87] transition-all duration-700 group-hover:w-full"></span></p>
            </div>

        <p className='font-OS text-[#AAA] my-8 leading-7 tracking-[0.64px] text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
      </div>

      <Link className='text-[#DCCA87] font-CU text-base leading-7 font-bold tracking-[0.64px]' >Read More</Link>
        

      </div>

        </div>


        <div className='w-[375px] bg-[#242424] p-8 flex flex-col gap-y-8'>
             <p className='text-[#DCCA87] text-[32px] leading-[41.6px] capitalize font-CU'>Related Tags</p>

             <div className='flex flex-col gap-y-4'>
                <div className='flex items-center gap-x-2'>
                    <p className='text-[#aaa] text-base font-OS leading-7'>Grilling</p>
                    <Image src={Line2}/>
                    <p className='text-[#aaa] text-base font-OS leading-7'>Cooking</p>
                    <Image src={Line2}/>
                    <p className='text-[#aaa] text-base font-OS leading-7'>Baking</p>
                </div>

                <div className='flex items-center gap-x-2'>
                    <p className='text-[#aaa] text-base font-OS leading-7'>Cuisines</p>
                    <Image src={Line2}/>
                    <p className='text-[#aaa] text-base font-OS leading-7'>Chef</p>
                    <Image src={Line2}/>
                    <p className='text-[#aaa] text-base font-OS leading-7'>Alcohol Mixing</p>
                </div>
             </div>

        </div>


        <div className='w-[375px] bg-[#242424] p-8 flex flex-col gap-y-8'>
            <p className='text-[#DCCA87] text-[32px] leading-[41.6px] capitalize font-CU'>Share</p>
            <div className='text-[#fff] flex gap-x-4 '>
                        <Link to={`https://www.facebook.com/bijoy1x`} target='_blank'>
                            <FaFacebookF className='hover:text-[#DCCA87]'/>
                        </Link>

                        <Link to={`https://twitter.com/bijoy_shakhawat`} target='_blank'>
                            <FiTwitter  className='hover:text-[#DCCA87]'/>
                        </Link>
                        
                        <Link to={`https://www.instagram.com/bijoy_shakhawat/`} target='_blank'>
                        <FaInstagram  className='hover:text-[#DCCA87]'/>
                        </Link> 
                    </div>
        </div>

    </div>
  )
}

export default Sidebar