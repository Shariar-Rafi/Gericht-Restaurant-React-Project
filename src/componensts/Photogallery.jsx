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

import Slider from 'react-slick'
import { FaArrowRightLong,FaArrowLeftLong } from "react-icons/fa6";



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className='w-16 h-16 absolute right-5 top-1/2 translate-y-[-50%] rounded-full border !flex justify-center items-center cursor-pointer'
        style={{ ...style, display: "block", }}
        onClick={onClick}
      >
        <FaArrowRightLong className='text-white'/>
  
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
      className='w-16 h-16 absolute left-5 top-1/2 translate-y-[-50%] rounded-full border !flex justify-center items-center z-50 cursor-pointer'
      style={{ ...style, display: "block", }}
      onClick={onClick}
    >
      <FaArrowLeftLong className='text-white'/>
  
    </div>
    );
  }
  
  function SampleNextArrow2(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className='lg:w-16 lg:h-16 w-10 h-10 absolute lg:right-5 right-1 top-1/2 translate-y-[-50%] rounded-full bg-[#c3c3c2] !flex justify-center items-center cursor-pointer'
        style={{ ...style, display: "block", }}
        onClick={onClick}
      >
        <FaArrowRightLong className='text-white'/>
  
      </div>
    );
  }
  
  function SamplePrevArrow2(props) {
    const { className, style, onClick } = props;
    return (
      <div
      className='lg:w-16 lg:h-16 w-10 h-10 absolute lg:left-5 left-1 top-1/2 translate-y-[-50%] rounded-full bg-[#c3c3c2] !flex justify-center items-center z-50 cursor-pointer'
      style={{ ...style, display: "block", }}
      onClick={onClick}
    >
      <FaArrowLeftLong className='text-white'/>
  
    </div>
    );
  }


const Photogallery = () => {

    var settings = {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 6000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
  
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 750,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },    {
            breakpoint: 700,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }, 
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
  
              nextArrow: <SampleNextArrow2 />,
              prevArrow: <SamplePrevArrow2 />,
  
            }
          }
        ]
  
  
      };
  

  return (
    <div className='bg-bg-img object-cover z-10 h-[90vh]'>

        <Container className="flex items-center justify-center py-10" >
            <div className='w-[491px] flex flex-col justify-center items-center'>
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
   
    
    <div className='max-w-full gap-5'>
    <Slider {...settings}>
        <div className="relative w-[301px] h-[550px] px-5">
        <Image src={pg2} alt="Image" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-0 hover:bg-opacity-70 transition-all duration-300 group">
            <FaInstagram className="text-white w-12 h-12 opacity-0 group-hover:opacity-100 transition-all duration-300" />
        </div>
        </div>

        <div className="relative w-[301px] h-[550px] px-5">
        <Image src={pg3} alt="Image" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-0 hover:bg-opacity-70 transition-all duration-300 group">
            <FaInstagram className="text-white w-12 h-12 opacity-0 group-hover:opacity-100 transition-all duration-300" />
        </div>
        </div>

        <div className="relative w-[301px] h-[550px] px-5">
        <Image src={pg4} alt="Image" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-0 hover:bg-opacity-70 transition-all duration-300 group">
            <FaInstagram className="text-white w-12 h-12 opacity-0 group-hover:opacity-100 transition-all duration-300" />
        </div>
        </div>

        <div className="relative w-[301px] h-[550px] px-5">
        <Image src={pg5} alt="Image" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-0 hover:bg-opacity-70 transition-all duration-300 group">
            <FaInstagram className="text-white w-12 h-12 opacity-0 group-hover:opacity-100 transition-all duration-300" />
        </div>
        </div>

        <div className="relative w-[301px] h-[550px] px-5">
        <Image src={pg1} alt="Image" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-0 hover:bg-opacity-70 transition-all duration-300 group">
            <FaInstagram className="text-white w-12 h-12 opacity-0 group-hover:opacity-100 transition-all duration-300" />
        </div>
        </div>

        <div className="relative w-[301px] h-[550px] px-5">
        <Image src={pg3} alt="Image" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-0 hover:bg-opacity-70 transition-all duration-300 group">
            <FaInstagram className="text-white w-12 h-12 opacity-0 group-hover:opacity-100 transition-all duration-300" />
        </div>
        </div>

        <div className="relative w-[301px] h-[550px] px-5">
        <Image src={pg4} alt="Image" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-0 hover:bg-opacity-70 transition-all duration-300 group">
            <FaInstagram className="text-white w-12 h-12 opacity-0 group-hover:opacity-100 transition-all duration-300" />
        </div>
        </div>
    </Slider>
    </div>

    
  </div>
  )
}

export default Photogallery