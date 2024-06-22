import React from 'react'
import Container from './layer/Container'
import Image from './layer/Image'
import { Link } from 'react-router-dom'
import footerLogo from '../assets/footerLogo.png'
import fork from '../assets/fork.png'
import spoon from '../assets/spoon.png'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'

const Footer = () => {
    return (
        <div className=' bg-bg-img bg-cover h-[837px]'>
            <Container>
                <div className='pt-[349px] flex justify-center items-center' >
                    <div className='flex flex-col gap-y-6 mr-[125px]'>

                        <h5 className='font-CU text-[32px] text-[#F5EFDB] leading-[41.6px] capitalize text-center'>Contact Us</h5>
                        <div className='text-[#aaa] text-base leading-7 flex items-center flex-col'>
                            <p className='mb-2'>9 W 53rd St, New York, NY 10019, USA</p>
                            <Link to="tel:+8801704446708">
                                <p>+8801704446708</p>
                            </Link>
                            <Link to="tel:+8801703561733">
                                <p>+8801703561733</p>
                            </Link>
                        </div>
                    </div>







                    <div className='w-[438px] justify-center items-center flex flex-col mr-[229px]'>
                        <Image src={footerLogo} />
                        <p className='text-[#fff] font-OS text-base leading-7 text-center mt-8 '>"The best way to find yourself is to lose yourself in the service of others.”</p>
                        <div className='flex gap-x-2 my-4 cursor-auto'>
                            <Image className="rotate-180 " src={fork} />
                            <Image src={spoon} />
                        </div>
                        <div className='text-[#fff] flex gap-x-4 '>
                            <Link to={`https://www.facebook.com/bijoy1x`} target='_blank'>
                                <FaFacebookF />
                            </Link>

                            <Link to={`https://twitter.com/bijoy_shakhawat`} target='_blank'>
                                <FiTwitter />
                            </Link>

                            <Link to={`https://www.instagram.com/bijoy_shakhawat/`} target='_blank'>
                                <FaInstagram />
                            </Link>




                        </div>
                    </div>









                    <div>
                        <h5 className='font-CU text-[32px] text-[#F5EFDB] leading-[41.6px] capitalize'>Working Hours</h5>

                        <div className='text-[#aaa] text-base leading-7 flex items-center flex-col font-OS mt-6 mb-2'>
                            <p>Monday-Friday:</p>
                            <p>08:00 am - 12:00 am</p>
                        </div>

                        <div className='text-[#aaa] text-base leading-7 flex items-center flex-col font-OS'>
                            <p>Saturday-Sunday:</p>
                            <p>07:00 am - 11:00 am</p>
                        </div>
                    </div>
                </div>

                <p className='text-[#aaa] text-base leading-7 flex justify-center pt-20 font-OS tracking-wide'>2024 Gerícht, Team-B All Rights reserved.</p>
            </Container>
        </div>
    )
}

export default Footer