import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({text, className,to,onClick}) => {
  return (
    <div onClick={onClick}>
      <Link to={to}>
      <button className={` bg-[#DCCA87] w-[157px] px-8 py-2 font-CU text-base leading-7  text-[#0C0C0C] font-bold border border-transparent
        hover:bg-[#cbba7d] transition-all duration-300 hover:text-[#FFF] ${className}`}>{text}</button>
      
      </Link>
    </div>
  )
}

export default Button