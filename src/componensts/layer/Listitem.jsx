import React from 'react'
import { Link } from 'react-router-dom'

const Listitem = ({to, text, className}) => {
  return (
    <li className='group'>
        <Link className={`font-OS text-base font-normal leading-7 text-[#fff] hover:text-[#DCCA87] transition-all duration-300  ${className}`} to={to}>
          {text}
        </Link>
    </li>
  )
}

export default Listitem