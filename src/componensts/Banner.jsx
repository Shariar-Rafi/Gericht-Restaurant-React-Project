import React from 'react'
import Container from './layer/Container'
import Image from './layer/Image'
import spoon from '../assets/spoon.png'
import banner01 from '../assets/banner01.jpg'
import Button from './layer/Button'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='bg-[#0C0C0C] pb-[152px]'>
      <Container  className="relative pt-12 pb-[92px] bg-[#0C0C0C]">
        <p className='-rotate-90 text-white font-OS text-lg leading-8 inline-block my-auto absolute top-1/2'>
            <Link>#Gericht</Link>
        </p>
        <div className='h-[736px] flex  '>
            <div className="left flex flex-col w-[453px] my-auto ml-[158px] mr-[180px]">
                <p className='text-[23px] text-[#FFF] font-CU leading-7 tracking-[0.92px] capitalize font-bold'>Chase the new Flavour</p>
                <p className='mt-2'><Image src={spoon} alt={"spoon"} /></p>
                <h2  className='text-[90px] text-[#DCCA87] font-CU leading-[117px]  capitalize font-bold '>
                The key to Fine dining
                </h2>
                <p className='text-base text-[#AAA] leading-7 font-OS my-8'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
                <Button text="Explore Menu"/>

            </div>




            <div className="right w-[667px] relative">
                <div className="top size-[435px] bg-[#DCCA87] absolute right-0">

                </div>
                <div>
                <Image src={banner01} className="z-20 absolute top-6 left-6" />
                </div>
                <div className="bottom size-[435px] bg-[#DCCA87] absolute left-0 bottom-0">

                </div>
                
            </div>
        </div>


        <p className='text-white text-center mt-[64px]'>1-2 3 4</p>
      </Container>
    </div>
  )
}

export default Banner
