import React from 'react';
import about1 from '../../assets/about1.jpg';
import about2 from '../../assets/about2.jpg';
import Slider from 'react-slick';
import Image from '../layer/Image';
import Header from './Header';

const AboutBanner = ({text}) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    fade: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='w-full'>
      <Slider {...settings}>
        <div className="relative w-full">
          <Image className="object-cover w-full" src={about1}/>
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 transition-all duration-300 group">
            <Header className="text-[#DCCA87] font-CU text-[90px] font-bold leading-[117px] tracking-[3.6px]" text={text}/>
          </div>
        </div>

        <div className="relative w-full">
          <Image className="object-cover w-full " src={about2}/>
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 transition-all duration-300 group">
            <Header className="text-[#DCCA87] font-CU text-[90px] font-bold leading-[117px] tracking-[3.6px]" text={text}/>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default AboutBanner;
