import React from 'react'


const List = ({ children, className }) => {
  return (
    <li className={`${className}`}>
      {children}
    </li>

  )
}

export default List
