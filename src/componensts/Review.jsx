import React from 'react'
import Container from './layer/Container'
import Image from './layer/Image'
import fork from '../assets/fork.png'
import spoon from '../assets/spoon.png'
import r1 from '../assets/R1.jpg'
import r2 from '../assets/R2.jpg'
import r3 from '../assets/R3.jpg'
import r4 from '../assets/R4.jpg'
import comma from '../assets/comma.png'



const Review = () => {
  return (
    <div className='py-[152px]'>
        <Container className="!max-w-[1300px]">
            <div>
                <div className='flex flex-col gap-y-2 justify-center items-center'>
                    <p className='text-[#ffffff] font-CU text-[23px] font-bold leading-[30px]'>Testimony</p>
                    <div className='flex justify-center  gap-x-2'>
                        <Image className="rotate-180" src={fork}/>
                        <Image src={spoon}/>
                    
                    </div>
                    <p className='text-[#dcca87] font-CU text-[64px] font-semibold leading-[83px]'>Happy customers</p>
                </div>
                <div className="mt-16 flex flex-wrap justify-between gap-y-16">
                    <div className='w-[634px] '>
                        <div className='flex gap-x-8'>
                            <div className='relative'>
                            <Image className="w-[206px] " src={r1}/>
                           
                            <Image className="absolute right-0 translate-x-4 bottom-0" src={comma}/>
                            </div>
                            <div className='my-4 w-[412px]'>
                            <p className='mb-4 font-OS text-base italic leading-7 text-[#aaa]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.
                            </p>
                            <h4 className='font-CU text-[32px]  leading-[42px] text-[#dcca87]'>Wade Warren</h4>
                            <p className='mt-2 text-[#f5efdb] font-OS text-base leading-7 '>Sommelier</p>
                            </div>
                        </div>

                    </div>

                    <div className='w-[634px] '>
                        <div className='flex gap-x-8'>
                            <div className='relative'>
                            <Image className="w-[206px] " src={r2}/>
                           
                            <Image className="absolute right-0 translate-x-4 bottom-0" src={comma}/>
                            </div>
                            <div className='my-4 w-[412px]'>
                            <p className='mb-4 font-OS text-base italic leading-7 text-[#aaa]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.
                            </p>
                            <h4 className='font-CU text-[32px]  leading-[42px] text-[#dcca87]'>Jane Cooper</h4>
                            <p className='mt-2 text-[#f5efdb] font-OS text-base leading-7 '>Chef</p>
                            </div>
                        </div>

                    </div>

                    <div className='w-[634px] '>
                        <div className='flex gap-x-8'>
                            <div className='relative'>
                            <Image className="w-[206px] " src={r3}/>
                           
                            <Image className="absolute right-0 translate-x-4 bottom-0" src={comma}/>
                            </div>
                            <div className='my-4 w-[412px]'>
                            <p className='mb-4 font-OS text-base italic leading-7 text-[#aaa]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.
                            </p>
                            <h4 className='font-CU text-[32px]  leading-[42px] text-[#dcca87]'>Robert Fox</h4>
                            <p className='mt-2 text-[#f5efdb] font-OS text-base leading-7 '>Chef</p>
                            </div>
                        </div>

                    </div>

                    <div className='w-[634px] '>
                        <div className='flex gap-x-8'>
                            <div className='relative'>
                            <Image className="w-[206px] " src={r4}/>
                           
                            <Image className="absolute right-0 translate-x-4 bottom-0" src={comma}/>
                            </div>
                            <div className='my-4 w-[412px]'>
                            <p className='mb-4 font-OS text-base italic leading-7 text-[#aaa]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.
                            </p>
                            <h4 className='font-CU text-[32px]  leading-[42px] text-[#dcca87]'>Brooklyn Simmons</h4>
                            <p className='mt-2 text-[#f5efdb] font-OS text-base leading-7 '>Caterer</p>
                            </div>
                        </div>

                    </div>

                    
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Review