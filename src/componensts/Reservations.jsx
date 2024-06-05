import React from 'react'
import Container from './layer/Container'
import Image from './layer/Image'
import spoon from '../assets/spoon.png'
import fork from '../assets/fork.png'
import Button from './layer/Button'




const Reservations = () => {

  return (
    <div className='h-[959px] flex justify-center items-center ' >
      <Container>
        <div className='w-[1364px] bg-[#0C0C0C] border text-center py-12 px-8 '>
          <div className='header  m-auto  '>
            <p className='text-[#FFFFFF] font-CU text-[23px] font-bold leading-[30px]'>Reservations</p>
            <p className='mt-2 flex justify-center gap-x-2'>
              <Image className="rotate-180 cursor-auto" src={fork} alt={"fork"} />
              <Image className="cursor-auto" src={spoon} alt={"spoon"} />

            </p>
            <p className='text-[#DCCA87] font-CU text-[64px] font-semibold leading-[83px] capitalize'>Book A Table</p>
          </div>


          <div className='my-16 flex gap-x-8 justify-center'>

            <div className='border bg-transparent border-[#AAAAAA] text-[#767676] lg:text-sm text-xs w-[412px]'>


              <select className='outline-none text-[#AAAAAA] my-4 ml-4 flex justify-start bg-transparent'>

                <option className=' bg-[#0C0B08]' value="SIZE">
                  1 person</option>

                <option className=' bg-[#0C0B08]' value="Featured">
                  2 person</option>

                <option className=' bg-[#0C0B08]' value="Featured">
                  3 person</option>

              </select> 

            </div>

            <div className='border bg-transparent border-[#AAAAAA] text-[#767676] lg:text-sm text-xs w-[412px]'>

              <select className='outline-none text-[#AAAAAA] my-4 ml-4 flex justify-start bg-transparent'>

                <option className=' bg-[#0C0B08]' value="SIZE">
                  12/05/2021</option>



              </select>
            </div>

            <div className='border bg-transparent border-[#AAAAAA] text-[#767676] lg:text-sm text-xs w-[412px]'>

              <select className='outline-none text-[#AAAAAA] my-4 ml-4 flex justify-start bg-transparent'>

                <option className=' bg-[#0C0B08]' value="SIZE">
                  11:00 AM</option>



              </select>
            </div>

          </div>
          <Button className='w-[133px]' text="Book Now" />
        </div>
      </Container>
    </div>
  )
}

export default Reservations
