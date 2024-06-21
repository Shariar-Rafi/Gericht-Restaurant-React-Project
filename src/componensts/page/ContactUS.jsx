import React from 'react'
import AboutBanner from '../layer/AboutBanner'
import Newsletter from '../Newsletter'
import fork from '../../assets/fork.png'
import spoon from '../../assets/spoon.png'
import Lcover from '../../assets/Lcover.jpg'
import GW from '../../assets/GW.png'
import L1 from '../../assets/L1.png'
import L2 from '../../assets/L2.png'
import L5 from '../../assets/L5.png'
import L3 from '../../assets/L3.png'
import Container from '../layer/Container'
import Image from '../layer/Image'
import Button from '../layer/Button'

const ContactUS = () => {
  return (
    <div className="bg-home-bg z-10 bg-repeat">
      <AboutBanner text="Contact Us" />

      <div className='py-[152px] relative'>
        <iframe className='w-[1300px] h-[500px] border-2 mx-auto border-[#DCCA87] opacity-85' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211456.91668941753!2d90.25487531119137!3d23.78106723705999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e1!3m2!1sen!2sbd!4v1718996473295!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>

      <div className='laurels'>
        <div className='bg-bg-img bg-cover pt-32 pb-[226px]'>

          <Container>

            <div className='main flex gap-x-[135px]'>
              <div className='left ml-[156px] w-[634px] flex flex-col justify-center gap-y-8'>
                <input type="text" placeholder='Full Name'
                  className='bg-transparent border border-[#F5EFDB] p-[16px] placeholder:text-[#AAA] placeholder:text-base placeholder:font-semibold placeholder:font-CU text-[#AAA] text-base font-semibold font-CU outline-none' />
                <input type="email" placeholder='Email Address'
                  className='bg-transparent border border-[#F5EFDB] p-[16px] placeholder:text-[#AAA] placeholder:text-base placeholder:font-semibold placeholder:font-CU text-[#AAA] text-base font-semibold font-CU outline-none' />
                <textarea
                  className="p-4 lg:p-5 bg-transparent border border-[#F5EFDB] rounded-md placeholder:text-[#AAA] placeholder:text-base placeholder:font-semibold placeholder:font-CU text-[#AAA] text-base font-semibold font-CU outline-none resize-none"
                  rows={5}

                  placeholder="Message"
                  name="message"
                />
                <Button to="#" text="Subscribe"/>

              </div>


              <div className='right mr-[156px] relative '>
                <Image src={Lcover} />
                <Image className='absolute bottom-0 translate-x-[-20%] ' src={GW} />
              </div>

            </div>
          </Container>

        </div>


      </div>

      <Newsletter />


    </div>
  )
}

export default ContactUS
