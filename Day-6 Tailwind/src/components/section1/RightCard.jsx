import React from 'react'
import { ArrowRight } from 'lucide-react'

const RightCard = (props) => {
  return (
    <div className='h-full w-80 overflow-hidden relative  rounded-4xl shrink-0 '>
    <img className='h-full w-full object-cover' src={props.img} alt="" />
    <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
    <h2 className='bg-white flex items-center justify-center h-10 w-10 rounded-3xl  font-semibold'>{props.srNum} </h2>
    <div>
        <p className='font-medium mb-10 text-white leading-relaxed'>{props.intro} </p>
        <div className='flex justify-between'>
           <button className={`${props.color} px-8 py-2 font-medium text-white rounded-full`}>{props.tag} </button>
            <button className={`${props.color} px-3 py-2 text-white rounded-full`}> <ArrowRight />
</button>

        </div>
    </div>
    </div>
    </div>
  )
}

export default RightCard