import React from 'react'
import Container from './layer/Container'
import chef01 from "../assets/chef01.jpg"
import Image from './layer/Image'
import spoon from "../assets/spoon.png"
import fork from "../assets/fork.png"
import comma from "../assets/comma.png"
import kl from "../assets/KevinLuo.png"

const ChefWord = () => {
    return (
        <div className=" bg-bg-img bg-cover z-20 py-32">
            <Container>
                <div className="main flex gap-x-24 justify-center items-center">
                    <div className="left">
                        <div className="left w-[635px] h-[789px] relative">
                            <div className="top size-[435px] bg-[#DCCA87] absolute top-0 right-0">

                            </div>
                            <div>
                                <Image src={chef01} className="z-20 absolute top-6 right-6 cursor-auto" />
                            </div>
                            <div className="bottom size-[435px] bg-[#DCCA87] absolute bottom-0 left-0">

                            </div>

                        </div>
                    </div>


                    <div className="right my-auto w-[570px]">
                        <p className='text-white font-CU text-[23px] font-bold leading-7 capitalize'>Chef's Word</p>
                        <p className='flex gap-x-2 my-2'>
                            <Image className="rotate-180 cursor-auto" src={fork} alt="fork" />
                            <Image className="cursor-auto" src={spoon} alt="spoon" />
                        </p>
                        <h2 className='text-[#DCCA87] font-CU text-[64px] font-semibold leading-[84px] capitalize'>What we believe in</h2>

                        <div className='max-w-[570px] my-16'>
                            <div className='flex gap-x-[10px] items-end'>
                                <Image className="cursor-auto" src={comma} alt="comma" />
                                <p className='text-[#AAA] font-OS text-base leading-7 italic' >Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
                            </div>

                            <p className='text-[#AAA] font-OS text-base leading-7 italic'>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
                        </div>

                        <h4 className='text-[#DCCA87] font-CU text-[32px] leading-[40px] capitalize mb-2'>Kevin Luo</h4>
                        <p className='text-[#AAA] font-OS text-base leading-7 mb-16'>Chef & Founder</p>
                        <Image className="cursor-auto" src={kl} alt="KevinLuo.png" />
                    </div>
                </div>

            </Container>

        </div>
    )
}

export default ChefWord
