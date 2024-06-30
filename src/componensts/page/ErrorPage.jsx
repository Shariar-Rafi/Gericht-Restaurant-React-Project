import React from 'react'
import Image from '../layer/Image'
import spoon01 from '../../assets/spoon01.png'
import error404 from '../../assets/404.png'
import Button from '../layer/Button'
import Navbar from '../Navbar'

const ErrorPage = () => {
    return (
        <div className='main'>
            <Navbar />
            <div className="bg-error-bg bg-cover z-20 ">
                <div className='h-[80vh] relative flex items-center justify-center flex-col'>

                    <Image src={error404} alt="error404" className="cursor-auto" />
                    <Image src={spoon01} alt="spoon01" className="cursor-auto mt-4" />
                    <p className='text-[23px] text-[#FFF] font-bold font-CU capitalize leading-7 max-w-[610px] text-center my-8' >Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
                    <Button text="Back To Home" to="/" />
                </div>

                <p className='text-base text-[#AAA] font-OSleading-7 text-center py-8'>
                    2024 Gerícht. All Rights reserved.
                </p>
            </div>
        </div>
    )
}

export default ErrorPage
