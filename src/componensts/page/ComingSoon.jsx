import React, { useState, useEffect } from 'react';
import wave from '../../assets/wave.png';
import leftwave from '../../assets/leftwave.png';
import rightwave from '../../assets/rightwave.png';
import spoon from '../../assets/spoon.png';
import fork from '../../assets/fork.png';
import Image from '../layer/Image';
import { Link } from 'react-router-dom';

const ComingSoon = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-07-01") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        months: Math.floor(difference / (1000 * 60 * 60 * 24 * 30)),
        days: Math.floor((difference / (1000 * 60 * 60 * 24)) % 30),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    timerComponents.push(
      <div key={interval} className="flex flex-col gap-x-[140px]">
        <span className="text-[64px] font-semibold leading-[83.2px] tracking-[1.92px] capitalize font-OS text-[#F5EFDB]">{timeLeft[interval]}</span>
        <span className="text-sm text-[#AAA] font-OS text-[23px] font-bold leading-[30px] capitalize tracking-[0.92px]">{interval.charAt(0).toUpperCase() + interval.slice(1)}</span>
      </div>
    );
  });

  return (
    <div className='bg-bg-img bg-cover relative h-[90vh]'>

      <div className="max-w-[1300px] mx-auto text-[#DCCA87] flex flex-col items-center gap-y-5 py-20">
        <h1 className="text-[90px] font-bold font-OS leading-[117px] tracking-[3.6px] capitalize">Coming Soon</h1>
        <div className='flex justify-center gap-x-4'>
          <Image src={fork} />
          <Image src={spoon} />
        </div>
        <p className="text-[#fff] font-OS text-base leading-7 tracking-[0.64px] w-[741px] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique feugiat orci tristique bibendum sollicitudin at aliquam. Nulla varius augue eu orci vel.
        </p>
        <div className="flex space-x-8 mb-6">
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
        <Link className="px-6 py-2 bg-[#DCCA87] text-black font-bold rounded-md" to="/">
          Back To Home
        </Link>
      </div>

      

      <Image className="absolute top-0 inset-0 w-full" src={wave} />
      <Image className="absolute top-0 inset-0" src={leftwave} />
      <Image className="absolute top-0 inset-0" src={rightwave} />
    </div>
  );
};

export default ComingSoon;