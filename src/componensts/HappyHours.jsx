import React from 'react'
import Image from './layer/Image';
import happhour from '../assets/happhour.jpg';
import happhour2 from '../assets/happhour2.jpg';
import happhour3 from '../assets/happhour3.jpg';
import happhour4 from '../assets/happhour4.jpg';
import Slider from 'react-slick';

const HappyHours = () => {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        fade: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

  return (
        <div className='w-full'>
      <Slider {...settings}>
        <div className="relative w-full">
          <Image className="object-cover w-full" src={happhour}/>
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 transition-all duration-300 group">
            <div>
            <p className='text-[#DCCA87] text-[128px] font-CU font-semibold leading-[166.4px] tracking-[3.84px] capitalize'>Happy Hours</p>
            <p className='text-[#fff] text-[32px] font-CU font-bold leading-[41.6px] tracking-[1.28px] capitalize text-center'>Monday - Friday (4:00 Pm - 7:00 pm)</p>
            </div>
          </div>
        </div>

        <div className="relative w-full">
          <Image className="object-cover w-full " src={happhour2}/>
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 transition-all duration-300 group">
          <div>
            <p className='text-[#DCCA87] text-[128px] font-CU font-semibold leading-[166.4px] tracking-[3.84px] capitalize'>Happy Hours</p>
            <p className='text-[#fff] text-[32px] font-CU font-bold leading-[41.6px] tracking-[1.28px] capitalize text-center'>Monday - Friday (4:00 Pm - 7:00 pm)</p>
            </div>
          </div>
        </div>
        

        <div className="relative w-full">
          <Image className="object-cover w-full " src={happhour3}/>
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 transition-all duration-300 group">
          <div>
            <p className='text-[#DCCA87] text-[128px] font-CU font-semibold leading-[166.4px] tracking-[3.84px] capitalize'>Happy Hours</p>
            <p className='text-[#fff] text-[32px] font-CU font-bold leading-[41.6px] tracking-[1.28px] capitalize text-center'>Monday - Friday (4:00 Pm - 7:00 pm)</p>
            </div>
          </div>
        </div>
        

        <div className="relative w-full">
          <Image className="object-cover w-full " src={happhour4}/>
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 transition-all duration-300 group">
          <div>
            <p className='text-[#DCCA87] text-[128px] font-CU font-semibold leading-[166.4px] tracking-[3.84px] capitalize'>Happy Hours</p>
            <p className='text-[#fff] text-[32px] font-CU font-bold leading-[41.6px] tracking-[1.28px] capitalize text-center'>Monday - Friday (4:00 Pm - 7:00 pm)</p>
            </div>
          </div>
        </div>
        
      </Slider>
    </div>
  )
}

export default HappyHours