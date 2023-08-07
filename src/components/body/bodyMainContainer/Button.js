import React from 'react'

export const Button = (props) => {
  return (
    <div className=''>
       <button className=' bg-gray-100 px-5 py-1 m-2 rounded-md hover:bg-gray-200'> {props.buttonName}</button>
    </div>
  )
}
