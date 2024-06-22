import React from 'react'
import AboutBanner from '../layer/AboutBanner'
import History from '../History'
import ChefWord from '../ChefWord'
import Review from '../Review'
import Photogallery from '../Photogallery'
import Newsletter from '../Newsletter'
import Video from '../Video'
import spoon from "../../assets/spoon.png"
import fork from "../../assets/fork.png"
import Image from '../layer/Image'

const About = () => {
    return (
        <>
            <div className="bg-home-bg z-10 bg-repeat ">
                <AboutBanner text="Welcome to Gerícht" />
                <History/> 
                <div className="main flex flex-col justify-center items-center pt-2 pb-[152px]">
                    <div className="top">
                        <h5 className='text-[23px] text-[#FFF] font-bold capitalize leading-7 font-CU text-center'>About Us</h5>

                        <div className="images flex gap-x-2 my-2 justify-center">
                            <Image className="cursor-auto rotate-180" src={fork}/>
                            <Image className="cursor-auto" src={spoon}/>
                        </div>

                        <h2  className='text-[64px] text-[#DCCA87] font-semibold capitalize leading-[84px] font-CU text-center mb-8'>Happy Hours with Us</h2>
                        <p  className='text-base text-[#AAA] leading-7 font-OS max-w-[824px] text-center mb-24'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>

                    </div>

                    <div className="bottom w-[1300px] mx-auto">
                        <Video/>
                    </div>
                    
                </div>

                    
                <ChefWord/>
                <Review/>
                <Photogallery/>
                <Newsletter/>
            </div>

        </>
    )
}

export default About
