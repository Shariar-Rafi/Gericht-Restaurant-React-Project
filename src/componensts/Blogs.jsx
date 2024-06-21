import React from 'react'
import Container from './layer/Container'
import Image from './layer/Image'
import fork from '../assets/fork.png'
import spoon from '../assets/spoon.png'
import Blog1 from '../assets/Blog1.jpg'
import Blog2 from '../assets/Blog2.jpg'
import Blog3 from '../assets/Blog3.jpg'
import { Link } from 'react-router-dom'
import Button from './layer/Button'
import Slider from 'react-slick'
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import "./Blog.css"



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className='w-16 h-16 absolute right-[10px] top-1/2 translate-y-[-50%] rounded-full border !flex justify-center items-center cursor-pointer'
      style={{ ...style, display: "block", }}
      onClick={onClick}
    >
      <FaArrowRightLong className='text-white' />

    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className='w-16 h-16 absolute left-[10px] top-1/2 translate-y-[-50%] rounded-full border !flex justify-center items-center z-50 cursor-pointer'
      style={{ ...style, display: "block", }}
      onClick={onClick}
    >
      <FaArrowLeftLong className='text-white' />

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
      <FaArrowRightLong className='text-white' />

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
      <FaArrowLeftLong className='text-white' />

    </div>
  );
}




const Blogs = () => {



  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 6000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,


    responsive: [
      {
        breakpoint: 1080,
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
      }, {
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
    <div className='py-[152px] '>
      <Container className="w-[1300px]">
        <div>


          <div className=' flex flex-col justify-center items-center gap-y-2 mb-16 '>
            <h3 className='font-CU text-[#FFF] text-[23px] font-semibold leading-[30px]'>Blogs</h3>
            <div className="flex  gap-x-2 ">
              <Image className="rotate-180 cursor-auto" src={fork} />
              <Image className='cursor-auto' src={spoon} />
            </div>
            <p className='text-[#DCCA87] font-CU text-[64px] leading-[83px] font-semibold capitalize'>Gerícht updates</p>
          </div>




          {/* <div className='main flex justify-center items-center gap-x-8'> */}

            <Slider {...settings}>

              <div className='group'>
                <Image className='cursor-auto' src={Blog1} />
                <div className='flex justify-between w-[410px] mt-6'>
                  <p className='text-[#FAFAFA] font-OS text-[16px] leading-7 '>16 Apr 2021</p>
                  <p className='text-[#FAFAFA] font-OS text-[16px] leading-7'>- Annalisa L</p>
                </div>
                <div className='w-[412px] '>
                  {/* <div className='group'> */}

                  <p className='text-[#DCCA87] font-CU text-[32px] leading-[42px] capitalize
              mt-8 tracking-[1.28px] relative group inline-block'>tips for prepping and caring<span className="absolute -bottom-[0.5px] left-0 w-0 h-[1px] bg-[#DCCA87] transition-all duration-300 group-hover:w-full"></span></p>
                  <p className='text-[#DCCA87] font-CU text-[32px] leading-[42px] capitalize tracking-[1.28px] relative group inline-block'>
                    for your grill
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#DCCA87] transition-all duration-700 group-hover:w-full"></span>
                  </p>
                  {/* </div> */}

                  <p className='font-OS text-[#AAA] mt-8 mb-8 leading-7 tracking-[0.64px] text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
                </div>

                <Link className='text-[#DCCA87] font-CU text-base leading-7 font-bold tracking-[0.64px]' >Read More</Link>


              </div>


              <div className='group'>
                <Image className='cursor-auto' src={Blog2} />
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
                <Image className='cursor-auto' src={Blog3} />
                <div className='flex justify-between w-[410px] mt-6'>
                  <p className='text-[#FAFAFA] font-OS text-[16px] leading-7 '>06 Aug 2021</p>
                  <p className='text-[#FAFAFA] font-OS text-[16px] leading-7'>-Fred W</p>
                </div>
                <div className='w-[412px]'>

                  <p className='text-[#DCCA87]  font-CU text-[32px] leading-[42px] capitalize
              mt-8 tracking-[1.28px] relative group inline-block'>easy cooking for college<span className="absolute -bottom-[0.5px] left-0 w-0 h-[1px] bg-[#DCCA87] transition-all duration-300 group-hover:w-full"></span></p>
                  <p className='text-[#DCCA87]  font-CU text-[32px] leading-[42px] capitalize
              tracking-[1.28px] relative group inline-block'>students<span className="absolute -bottom-[0.5px] left-0 w-0 h-[1px] bg-[#DCCA87] transition-all duration-700 group-hover:w-full"></span></p>

                  <p className='font-OS text-[#AAA] mt-8 mb-8 leading-7 tracking-[0.64px] text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
                </div>

                <Link className='text-[#DCCA87] font-CU text-base leading-7 font-bold tracking-[0.64px]' >Read More</Link>


              </div>

              <div className='group'>
                <Image className='cursor-auto' src={Blog1} />
                <div className='flex justify-between w-[410px] mt-6'>
                  <p className='text-[#FAFAFA] font-OS text-[16px] leading-7 '>16 Apr 2021</p>
                  <p className='text-[#FAFAFA] font-OS text-[16px] leading-7'>- Annalisa L</p>
                </div>
                <div className='w-[412px] '>
                  {/* <div className='group'> */}

                  <p className='text-[#DCCA87] font-CU text-[32px] leading-[42px] capitalize
            mt-8 tracking-[1.28px] relative group inline-block'>tips for prepping and caring<span className="absolute -bottom-[0.5px] left-0 w-0 h-[1px] bg-[#DCCA87] transition-all duration-300 group-hover:w-full"></span></p>
                  <p className='text-[#DCCA87] font-CU text-[32px] leading-[42px] capitalize tracking-[1.28px] relative group inline-block'>
                    for your grill
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#DCCA87] transition-all duration-700 group-hover:w-full"></span>
                  </p>
                  {/* </div> */}

                  <p className='font-OS text-[#AAA] mt-8 mb-8 leading-7 tracking-[0.64px] text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
                </div>

                <Link className='text-[#DCCA87] font-CU text-base leading-7 font-bold tracking-[0.64px]' >Read More</Link>


              </div>

              <div className='group' >
                <Image className='cursor-auto' src={Blog2} />
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


            </Slider>




        </div>
        <div className='flex justify-center items-center mt-16'>
          <Button text='View More' />
        </div>



      </Container>
    </div>
  )
}

export default Blogs