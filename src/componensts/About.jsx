import React from 'react'
import Image from './layer/Image'
import g from "../assets/g.png"
import Container from './layer/Container'
import knife from '../assets/knife.png'
import spoon from '../assets/spoon.png'
import fork from '../assets/fork.png'
import Button from './layer/Button'

const About = () => {
  return (
    <div className="py-32 bg-bg-img bg-cover z-20">
      <div className='h-[100vh] relative '>
        <Container className="flex items-center justify-center">


          <Image className="absolute translate-x-[-50%] top-1/2 translate-y-[-50%]" src={g} alt={"g"} />


          <div className='flex gap-x-[85px] z-20 absolute top-1/2 translate-y-[-50%] '>
            <div className='top w-[523px] flex flex-col items-end my-auto'>
              <h2 className='text-[64px] text-[#DCCA87] leading-[130px] capitalize font-CU font-semibold'>About Us</h2>
              <div className='mt-2 flex gap-x-2 '>
                <Image className="cursor-auto" src={fork} alt={"fork"} />
                <Image className="rotate-180 cursor-auto" src={spoon} alt={"spoon"} />
              </div>
              <p className='text-base text-[#AAA] leading-7 my-8 font-OS'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
              <Button to="/about-us" text="Know More" />
            </div>
            <div className='center'><Image className="cursor-auto" src={knife} /></div>

            <div className='bottom w-[523px] flex flex-col items-start my-auto'>
              <h2 className='text-[64px] text-[#DCCA87] leading-[130px] capitalize font-CU font-semibold'>Our History</h2>
              <div className='mt-2 flex gap-x-2'>
                <Image className="rotate-180 cursor-auto" src={fork} alt={"fork"} />
                <Image className="cursor-auto" src={spoon} alt={"spoon"} />
              </div>
              <p className='text-base text-[#AAA] leading-7 my-8 font-OS'>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
              <Button to="/about-us" text="Know More" />
            </div>

          </div>

        </Container>
      </div>

    </div>
  )
}

export default About
