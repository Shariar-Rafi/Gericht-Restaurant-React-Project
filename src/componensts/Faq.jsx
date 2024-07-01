import React, { useState } from 'react'
import Image from './layer/Image'
import List from './layer/List'
import lemonade from '../assets/lemonade.jpg'
import AboutBanner from './layer/AboutBanner'
import Newsletter from './Newsletter'

const Faq = () => {


  const [count, setCount] = useState(0)
  const [a, setA] = useState([
    {
      title: " How Do I Reach To The Restaurant?",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
      title: " Is There A Reservation Required?",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
      title: "Can I Host An Event At The Restaurant?",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
      title: "Is Valet Parking Available At The Restaurant?",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
      title: " When Are The Happy Hours Of Your Bar?",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
      title: "Is Seafood Available At Ahe Restaurant?",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    }


  ])

  const handleClick = (index) => {
    setCount(index)
  }




  return (
    <div className='bg-home-bg'>
      <AboutBanner text="Frequently Asked Questions"/>
      <div className=' py-[152px]'>
        
        <div className='main mx-auto flex justify-center'>

          <div className="left max-w-[650px] h-[648px]">
            <div className="w-[635px] h-[789px] relative">
              <div className="top w-[413px] h-[383px] bg-[#DCCA87] absolute top-0 right-0">

              </div>
              <div>
                <Image src={lemonade} className="z-20 absolute top-6 right-6 cursor-auto" />
              </div>
              <div className="bottom w-[435px] h-[383px] bg-[#DCCA87] absolute top-[265px] left-0">

              </div>

            </div>
          </div>



          <div className="right max-w-[650px] ml-10 ">
            <ul className='w-[600px] flex flex-col gap-y-4'>
              {a.length != 0 && a.map((value, index) => (
                <List key={index} >
                  <div className='text-white w-full cursor-pointer'>
                    <h2 onClick={() => handleClick(index)} className={`bg-[#242424] font-CU text-2xl py-6 pl-8 ${count === index ? 
                      ("text-[#DCCA87] border-t-2 border-[#DCCA87] border-x-2") : (" ")}`}>
                      {value.title}
                    </h2>
                    <p className={`text-lg font-OS font-medium pb-4 text-[#AAAAAA] pl-8 pr-9 bg-[#242424] ${count === index ? 
                      ("border-b-2 border-x-2 border-[#DCCA87]") : ("hidden ")}`}>
                      {value.description}
                    </p>
                  </div>

                </List>

              ))}

            </ul>
          </div>

        </div>
      </div>

      <Newsletter/>

    </div>

  )
}

export default Faq