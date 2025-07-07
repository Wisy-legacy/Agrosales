import React from 'react'

const Button = ({message, bgColor, onClick}) => {
  return (
    <button
    className={`${bgColor} rounded-2xl playfair text-white px-5 py-3 w-30`}
    onClick={onClick}
  >
    {message}
  </button>
  )
}

export default Button
