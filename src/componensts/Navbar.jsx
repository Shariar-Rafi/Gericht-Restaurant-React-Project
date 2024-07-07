import React from 'react'
import Container from './layer/Container'
import Image from './layer/Image'
import logo from '../assets/logo.png'
import line from '../assets/Line.png'
import Listitem from './layer/Listitem'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-[#0C0C0C]'>
        <Container className="py-8 flex items-center">
            <div>
               <Image src={logo}/>
            </div>
            <div className='ml-[437px]'>
                <ul className='flex gap-x-8 z-10 items-center text-white text-base font-OS font-medium'>
                    <Listitem className="hover:text-[#DCCA87]" to="/" text="Home"/>
                    <Listitem className="hover:text-[#DCCA87]" to="/" text="Pages"/>
                    <Listitem className="hover:text-[#DCCA87]" to="/contact-us" text="Contact Us"/>
                    <Listitem className="hover:text-[#DCCA87]" to="/our-blogs" text="Blog"/>
                    <Listitem className="hover:text-[#DCCA87]" to="/service" text="Service"/>
                </ul>
            </div>
            <div className='ml-[271px] flex gap-x-[50px]'>
                <button className='text-base font-semibold leading-7 font-OS text-[#fff] hover:text-[#DCCA87] transition-all duration-300 capitalize '>
                    <Link >Log in / registration</Link>
                </button>
            
            <p>
                <Image src={line}/>
            </p>
            
                <button className='text-base font-semibold leading-7 font-OS text-[#fff] hover:text-[#DCCA87] transition-all duration-300 capitalize'>
                    <Link >book table</Link>
                </button>
            </div>
            
        </Container>
        </div>
    )
}

export default Navbar
