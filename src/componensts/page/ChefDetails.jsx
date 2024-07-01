import React from 'react'
import AboutBanner from '../layer/AboutBanner'
import Image from '../layer/Image'
import chef2 from '../../assets/chef2.jpg'
import spoon from '../../assets/spoon.png'
import fork from '../../assets/fork.png'
import line2 from '../../assets/line2.png'
import PatrickChoi from '../../assets/PatrickChoi.png'
import DeputyChef from '../DeputyChef'
import Newsletter from '../Newsletter'

const ChefDetails = () => {
    return (
        <div className='bg-home-bg'>
            <AboutBanner text="Chefs Details" />

            <div className="main w-[1300px] mx-auto flex justify-between py-[152px]">
                <div className="left w-[634px]">
                    <Image src={chef2} alt="chef2" className="cursor-auto" />
                </div>

                <div className="right w-[634px] ">
                    <h5 className='text-[23px] text-[#FFF] font-bold font-CU capitalize leading-7'>Deputy Chef</h5>
                    <div className='flex gap-x-2 my-2'>
                        <Image src={fork} alt="chef2" className="cursor-auto rotate-180" />
                        <Image src={spoon} alt="chef2" className="cursor-auto" />
                    </div>
                    <h2 className='text-[64px] text-[#DCCA87] font-semibold font-CU capitalize leading-[84px] mb-16'>Patrick Choi</h2>

                    <p className='text-base text-[#AAA] font-OS italic leading-7 max-w-[550px] mb-12 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit. Auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque consectetur adipiscing elit.</p>

                    <div className='flex flex-col gap-y-6 mb-12'>
                        <p className='text-base text-[#F5EFDB] font-semibold font-CU capitalize leading-7 flex  items-center gap-x-2'>
                            <Image src={line2} alt="line2" className="cursor-auto" />Graduated from Culinary Institute of New Jersey, USA.
                        </p>
                        <p className='text-base text-[#F5EFDB] font-semibold font-CU capitalize leading-7 flex  items-center gap-x-2'> <Image src={line2} alt="line2" className="cursor-auto" />Worked as a junior chef at ruso's Italiano.

                        </p>
                        <p className='text-base text-[#F5EFDB] font-semibold font-CU capitalize leading-7 flex  items-center gap-x-2'> <Image src={line2} alt="line2" className="cursor-auto" />Contributed 20+ new recipes on International platform.

                        </p>
                        <p className='text-base text-[#F5EFDB] font-semibold font-CU capitalize leading-7 flex  items-center gap-x-2'> <Image src={line2} alt="line2" className="cursor-auto" />Trained under renowned Chef Gusteau Marcellini
                        </p>
                    </div>
                    <Image src={PatrickChoi} alt="line2" className="cursor-auto" />

                </div>
            </div>

            <DeputyChef/>
            <Newsletter/>

        </div>
    )
}

export default ChefDetails
