import React from 'react'

const Card = (props) => {
  return (
    <div>
        <a href={props.element.url} target='_blank'>
         <div className='h-40 w-50  rounded-3xl overflow-hidden'>
      <img className='h-full w-full object-cover' src={props.element.download_url} alt="" />
    </div>
    <h2 className='font-bold text-lg p-2 mx-2'>{props.element.author}</h2>
       </a>
    </div>
  )
}

export default Card