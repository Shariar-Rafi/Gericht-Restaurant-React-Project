import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ text, className, to, onClick }) => {
  return (
    <div onClick={onClick}>
      <Link to={to}>
        <button className={`relative h-[50px] w-40 overflow-hidden font-bold text-[#0C0B08] bg-[#DCCA87] border border-[#DCCA87] 
        shadow-inner group font-CU  text-base${className}`}>
          <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease">

          </span>
          <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease">

          </span>
          <span className="absolute top-0 left-0 w-full h-0 transition-all duration-200 delay-200 bg-gray-600 group-hover:h-full ease">

          </span>
          <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-200 delay-200 bg-gray-600 group-hover:h-full ease">

          </span>
          <span className="absolute inset-0 w-full h-full duration-200 delay-300 bg-[#ffffffdf] opacity-0 group-hover:opacity-100">

          </span>
          <span className="relative transition-colors duration-200 delay-200 group-hover:text-[#0C0B08] ease z-10">{text}</span>
        </button>
      </Link>

    </div>
  )
}

export default Button