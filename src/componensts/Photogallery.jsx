import React from 'react'
import Container from './layer/Container'
import Image from './layer/Image'
import spoon from '../assets/spoon.png'
import fork from '../assets/fork.png'
import Button from './layer/Button'
import pg1 from '../assets/pg1.jpg'
import pg2 from '../assets/pg2.jpg'
import pg3 from '../assets/pg3.jpg'
import pg4 from '../assets/pg4.jpg'
import pg5 from '../assets/pg5.jpg'
import { FaInstagram } from 'react-icons/fa'



const Photogallery = () => {
  return (
    <div className='bg-bg-img object-cover z-10 h-[70vh] flex gap-x-16 overflow-hidden'>
        <Container className="flex items-center justify-center">
            <div className='w-[491px] flex flex-col justify-center ml-[190px] '>
                <p className='text-[#fff] text-[23px] font-CU font-bold leading-[30px]'>Instagram</p>
                <p className='flex gap-x-2 my-2'>
                    <span>
                        <Image className="rotate-180
                        " src={fork}/>
                    </span>
                    <span>
                        <Image src={spoon}/>
                    </span>
                </p>
                <h5 className='text-[#DCCA87] text-[64px] leading-[84px] font-semibold font-CU tracking-[1.92px]'>Photo Gallery</h5>
                <p className='text-[#aaa] text-base leading-7 font-OS my-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
                <Button className="w-[136px]" text="View More"/>
            </div>



        </Container>
        
        
        <div className='flex justify-center items-center gap-x-8'>
            
            <div className="relative w-[295px] h-[450px] ">
            <Image src={pg1} alt="Image" className="w-full h-full object-cover"/>
                {/* <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-0 hover:bg-opacity-70 transition-all duration-300 group  w-[295px] h-[450px]">
                <FaInstagram className="text-white w-12 h-12 opacity-0 hover:opacity-100 transition-all duration-300 bg-slate-500 "/>
                </div> */}
            </div>            
            <div className="relative w-[295px] h-[450px]">
            <Image src={pg2} alt="Image" className="w-full h-full object-cover"/>
               
            </div>            
            <div className="relative w-[295px] h-[450px]">
            <Image src={pg3} alt="Image" className="w-full h-full object-cover"/>
                
            </div>            
            <div className="relative w-[295px] h-[450px]">
            <Image src={pg4} alt="Image" className="w-full h-full object-cover"/>
               
            </div>            
            <div className="relative w-[295px] h-[450px]">
            <Image src={pg5} alt="Image" className="w-full h-full object-cover"/>
               
            </div>            
            <div className="relative w-[295px] h-[450px]">
            <Image src={pg1} alt="Image" className="w-full h-full object-cover"/>
                
            </div>
         </div>
    </div>
  )
}

export default Photogallery