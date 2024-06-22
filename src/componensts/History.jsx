import React from 'react'
import Container from './layer/Container'
import Image from './layer/Image'
import fork from '../assets/fork.png'
import spoon from '../assets/spoon.png'
import Studio1 from '../assets/Studio1.jpg'
import Studio2 from '../assets/Studio2.jpg'
import VectorA from '../assets/VectorA.png'

const History = () => {
  return (
    <div className='py-[152px]'>
      <Container className='w-[1300px]'>
        <div className='flex justify-center items-center flex-col'>

        <h3 className='text-[#FFF] font-CU text-[23px] font-normal leading-[30px]'>Our History</h3>

            <div className="flex  gap-x-2">
              <Image className="rotate-180 cursor-auto" src={fork} />
              <Image className='cursor-auto' src={spoon} />
            </div>

        <p className='text-[#DCCA87] font-CU text-[64px] capitalize  mb-16'>serving customers for over a decade</p>

        </div>

      <div className='main flex gap-x-[143px]'>

          <div className='left w-[523px]  '>
            <p className=' text-[#AAA] font-OS text-[16px] font-normal leading-7 tracking-[0.64px] mb-[40px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
            <Image className='' src={Studio1}/>
          </div>

          <div className='right '>
            <Image className='' src={Studio2}/>
            <p className='text-[#DCCA87] font-CU text-[45px]  font-normal leading-[58.5px] tracking-[1.8px] capitalize mt-[40px] mb-[40px]' >Over the years</p>

            <div className='flex justify-center items-center gap-x-[64px] '>

              <div className='w-[126px]'>
                <h3 className='text-[#DCCA87] font-CU text-[45px] font-normal leading-[58.5px] tracking-[1.8px] '>30+</h3>
                <div className="flex  gap-x-2 mt-2 mb-2">
                  <Image className="rotate-180 cursor-auto" src={fork} />
                  <Image className='cursor-auto' src={spoon} />
                </div>
                <p className='text-[#FFF] font-CU text-[32px] font-normal leading-[42px] tracking-[1.28px]'>Breakfast Options</p>
              </div>
                
                  <Image src={VectorA}/>
                
              <div className='w-[126px]'>
                <h3 className='text-[#DCCA87] font-CU text-[45px] font-normal leading-[58.5px] tracking-[1.8px] '>50+</h3>
                <div className="flex  gap-x-2 mt-2 mb-2">
                  <Image className="rotate-180 cursor-auto" src={fork} />
                  <Image className='cursor-auto' src={spoon} />
                </div>
                <p className='text-[#FFF] font-CU text-[32px] font-normal leading-[42px] tracking-[1.28px]'>Dinner Options</p>
              </div>
              
                  <Image src={VectorA}/>
                
              <div className='w-[126px]'>
                <h3 className='text-[#DCCA87] font-CU text-[45px] font-normal leading-[58.5px] tracking-[1.8px] '>8</h3>
                <div className="flex  gap-x-2 mt-2 mb-2">
                  <Image className="rotate-180 cursor-auto" src={fork} />
                  <Image className='cursor-auto' src={spoon} />
                </div>
                <p className='text-[#FFF] font-CU text-[32px] font-normal leading-[42px] tracking-[1.28px]'>New Locations</p>
              </div>

              

              
              
            </div>
          </div>

      </div>
      </Container>
    </div>
  )
}

export default History
