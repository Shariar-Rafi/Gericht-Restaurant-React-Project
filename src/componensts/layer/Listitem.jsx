import React from 'react'
import { Link } from 'react-router-dom'

const Listitem = ({to, text, className}) => {
  return (
    <li className='group'>
        <Link className={`${className}`} to={to}>
          {text}
        </Link>
    </li>
  )
}

export default Listitem