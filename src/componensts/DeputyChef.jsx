import React from 'react'
import Container from './layer/Container'
import Image from './layer/Image'
import fork from '../assets/fork.png'
import spoon from '../assets/spoon.png'
import Lcover from '../assets/Lcover.jpg'
import L1 from '../assets/L1.png'
import L3 from '../assets/L3.png'
import steak from '../assets/steak.jpg'


const DeputyChef = () => {
    return (
        <div>
            <div className='bg-bg-img bg-cover py-32 '>

                    <div className='main flex gap-x-8 justify-between w-[1300px] mx-auto'>
                        <div className='left w-[634px] flex flex-col justify-center'>
                            <h3 className='font-CU text-[23px] text-[#FFF] font-semibold leading-[30px] capitalize'>Deputy Chef</h3>
                            <div className="flex py-2 gap-x-2">
                                <Image className="rotate-180 cursor-auto" src={fork} />
                                <Image className="cursor-auto" src={spoon} />
                            </div>
                            <p className='font-CU text-[#DCCA87] text-[64px] font-semibold leading-[83px] capitalize'>Personal Achievements</p>
                            {/* ================================================= */}

                            <div className='flex flex-wrap gap-x-8'>
                                <div className='pt-[64px] flex gap-x-8 w-[301px]'>
                                    <Image className="cursor-auto" src={L1} />
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
                                    <Image className="cursor-auto" src={L3} />
                                    <div className=''>
                                        <h4 className='font-CU text-[#DCCA87] text-[23px] font-semibold leading-[30px] '>
                                        Outstanding Chef
                                        </h4>
                                        <p className='font-OS text-[#AAA] text-[16px] font-normal leading-[28px] w-[190px]'>
                                            Lorem ipsum dolor sit amet, consectetur.
                                        </p>
                                    </div>
                                </div>

                                <div className='pt-[64px] flex gap-x-8 w-[301px]'>
                                    <Image className="cursor-auto" src={L3} />
                                    <div className=''>
                                        <h4 className='font-CU text-[#DCCA87] text-[23px] font-semibold leading-[30px] '>
                                        Outstanding Chef
                                        </h4>
                                        <p className='font-OS text-[#AAA] text-[16px] font-normal leading-[28px] w-[190px]'>
                                            Lorem ipsum dolor sit amet, consectetur.
                                        </p>
                                    </div>
                                </div>

                                <div className='pt-[64px] flex gap-x-8 w-[301px]'>
                                    <Image className="cursor-auto" src={L1} />
                                    <div className=''>
                                        <h4 className='font-CU text-[#DCCA87] text-[23px] font-semibold leading-[30px] '>
                                        Rising Star
                                        </h4>
                                        <p className='font-OS text-[#AAA] text-[16px] font-normal leading-[28px] w-[190px]'>
                                            Lorem ipsum dolor sit amet, consectetur.
                                        </p>
                                    </div>
                                </div>
                            </div>





                        </div>
                        
                        <div className='right w-[634px] '>
                            <Image className="cursor-auto" src={steak} />
                        </div>

                    </div>

            </div>
        </div>
    )
}

export default DeputyChef
