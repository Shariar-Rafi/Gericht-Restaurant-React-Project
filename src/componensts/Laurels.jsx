import React from 'react'
import Container from './layer/Container'
import Image from './layer/Image'
import fork from '../assets/fork.png'
import spoon from '../assets/spoon.png'
import Lcover from '../assets/Lcover.jpg'
import GW from '../assets/GW.png'
import L1 from '../assets/L1.png'
import L2 from '../assets/L2.png'
import L5 from '../assets/L5.png'
import L3 from '../assets/L3.png'


const Laurels = () => {
  return (
    <div className='bg-bg-img bg-cover pt-32 pb-[226px]'>

      <Container>
        
          <div className='main flex gap-x-[135px]'>
          <div className='left ml-[156px] w-[634px] flex flex-col justify-center'>
            <h3 className='font-CU text-[23px] text-[#FFF] font-semibold leading-[30px] capitalize'>Awards & recognition</h3>
            <div className="flex py-2 gap-x-2">
            <Image className="rotate-180 cursor-auto" src={fork} />
            <Image className="cursor-auto" src={spoon} />
          </div>
          <p className='font-CU text-[#DCCA87] text-[64px] font-semibold leading-[83px] capitalize'>Our Laurels</p>
        {/* ================================================= */}
        
        <div className='flex flex-wrap gap-x-8'>
        <div className='pt-[64px] flex gap-x-8 w-[301px]'>
          <Image className="cursor-auto" src={L2}/>
          <div className=''> 
            <h4 className='font-CU text-[#DCCA87] text-[23px] font-semibold leading-[30px] '>
            Bib Gourmond
            </h4>
            <p className='font-OS text-[#AAA] text-[16px] font-normal leading-[28px] w-[190px]'>
            Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
        </div>

        <div className='pt-[64px] flex gap-x-8 w-[301px]'>
          <Image className="cursor-auto" src={L1}/>
          <div className=''> 
            <h4 className='font-CU text-[#DCCA87] text-[23px] font-semibold leading-[30px] '>
            Rising Star
            </h4>
            <p className='font-OS text-[#AAA] text-[16px] font-normal leading-[28px] w-[190px]'>
            Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
        </div>

        <div className='pt-[64px] flex gap-x-8 w-[301px]'>
          <Image className="cursor-auto" src={L5}/>
          <div className=''> 
            <h4 className='font-CU text-[#DCCA87] text-[23px] font-semibold leading-[30px] '>
            AA Hospitality 
            </h4>
            <p className='font-OS text-[#AAA] text-[16px] font-normal leading-[28px] w-[190px]'>
            Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
        </div>

        <div className='pt-[64px] flex gap-x-8 w-[301px]'>
          <Image className="cursor-auto" src={L3}/>
          <div className=''> 
            <h4 className='font-CU text-[#DCCA87] text-[23px] font-semibold leading-[30px] '>
            Outstanding Chef
            </h4>
            <p className='font-OS text-[#AAA] text-[16px] font-normal leading-[28px] w-[190px]'>
            Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
        </div>
        </div>
        

        


          </div>
        {/* ============================================= */}
          <div className='right mr-[156px] relative '>
            <Image className="cursor-auto" src={Lcover}/>
            <Image className='absolute cursor-auto bottom-0 translate-x-[-20%] ' src={GW}/>
          </div>

          </div>
      </Container>

    </div>
  )
}

export default Laurels
