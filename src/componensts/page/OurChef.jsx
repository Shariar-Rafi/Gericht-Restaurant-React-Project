import React from 'react'
import Image from '../layer/Image'
import chef1 from "../../assets/chef1.jpg"
import chef02 from "../../assets/chef02.jpg"
import chef3 from "../../assets/chef3.jpg"
import chef4 from "../../assets/chef4.jpg"
import chef5 from "../../assets/chef5.jpg"
import chef6 from "../../assets/chef6.jpg"
import AboutBanner from '../layer/AboutBanner'
import Video from '../Video'
import Laurels from '../Laurels'
import Newsletter from '../Newsletter'

const OurChef = () => {
    return (
        <div className='bg-home-bg'>
            <AboutBanner text="Our Chefs"/>
            <div className="main w-[1300px] mx-auto py-[152px]">
                <div className="cards flex flex-wrap gap-x-8 gap-y-16">
                    <div className="card w-[412px] h-[646px] ">
                        <Image src={chef1} className="w-full h-[520px]  border-2 border-[#DCCA87] object-cover" />
                        <h4 className='text-[45px] text-[#DCCA87] font-semibold font-CU capitalize leading-[58px] mt-8 mb-2'>Kevin Luo</h4>
                        <p className='text-[#FFF] font-OS capitalize leading-7 '>Head Chef</p>
                    </div>

                    <div className="card w-[412px] h-[646px] ">
                        <Image src={chef02} className="w-full h-[520px] border-2 border-[#DCCA87]  object-cover" />
                        <h4 className='text-[45px] text-[#DCCA87] font-semibold font-CU capitalize leading-[58px] mt-8 mb-2'>Patrick Choi</h4>
                        <p className='text-[#FFF] font-OS capitalize leading-7 '>Deputy Chef</p>
                    </div>

                    <div className="card w-[412px] h-[646px] ">
                        <Image src={chef3} className="w-full h-[520px]  border-2 border-[#DCCA87] object-cover" />
                        <h4 className='text-[45px] text-[#DCCA87] font-semibold font-CU capitalize leading-[58px] mt-8 mb-2'>Jack Biscoff</h4>
                        <p className='text-[#FFF] font-OS capitalize leading-7 '>Station Chef</p>
                    </div>

                    <div className="card w-[412px] h-[646px] ">
                        <Image src={chef4} className="w-full h-[520px]  border-2 border-[#DCCA87] object-cover" />
                        <h4 className='text-[45px] text-[#DCCA87] font-semibold font-CU capitalize leading-[58px] mt-8 mb-2'>Stacy Lee</h4>
                        <p className='text-[#FFF] font-OS capitalize leading-7 '>Station Chef</p>
                    </div>

                    <div className="card w-[412px] h-[646px] ">
                        <Image src={chef5} className="w-full h-[520px]  border-2 border-[#DCCA87] object-cover" />
                        <h4 className='text-[45px] text-[#DCCA87] font-semibold font-CU capitalize leading-[58px] mt-8 mb-2'>Aren Goodman</h4>
                        <p className='text-[#FFF] font-OS capitalize leading-7 '>Junior Chef</p>
                    </div>

                    <div className="card w-[412px] h-[646px] ">
                        <Image src={chef6} className="w-full h-[520px]  border-2 border-[#DCCA87] object-cover" />
                        <h4 className='text-[45px] text-[#DCCA87] font-semibold font-CU capitalize leading-[58px] mt-8 mb-2'>Javier Dowsing</h4>
                        <p className='text-[#FFF] font-OS capitalize leading-7 '>Junior Chef</p>
                    </div>
                </div>

            </div>
            <Video/>
            <Laurels/>
            <Newsletter/>

        </div>
    )
}

export default OurChef
