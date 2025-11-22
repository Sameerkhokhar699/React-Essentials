import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3 '>
        <div className='p-9'>
            <h3 className=' mb-7 text-6xl  font-bold '>Prospective <br /> <span>Customer</span> <br /> Segmentation</h3>
           <p className='text-xl  text-shadow-2xs font-medium text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse odit dolorem laudantium ullam soluta dignissimos quas adipisci, sed maxime ex.</p>
        </div>
        <div  className='mx-5 mb-6'><ArrowUpRight size={90} /></div>
    </div>
  )
}

export default LeftContent