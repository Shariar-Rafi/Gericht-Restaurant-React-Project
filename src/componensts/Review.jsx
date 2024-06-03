import React from 'react'
import Container from './layer/Container'
import Image from './layer/Image'
import fork from '../assets/fork.png'
import spoon from '../assets/spoon.png'



const Review = () => {
  return (
    <div className='h-[100vh] pt-[152px]'>
        <Container>
            <div>
                <div className='flex flex-col gap-y-2 justify-center items-center'>
                    <p className='text-[#ffffff] font-CU text-[23px] font-bold leading-[30px]'>Testimony</p>
                    <div className='flex justify-center  gap-x-2'>
                        <Image src={fork}/>
                        <Image src={spoon}/>
                    
                    </div>
                    <p className='text-[#dcca87] font-CU text-[64px] font-semibold leading-[83px]'>Happy customers</p>
                </div>
                <div>
                    <div className='w-[634px] bg-slate-400'>
                        <div>
                            <Image />
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.
                            </p>
                            <h4>Wade Warren</h4>
                            <p>Sommelier</p>
                        </div>

                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Review