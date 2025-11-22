import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
    
  return (
    <div id='right' className='h-full w-3/4 p-6 flex flex-nowrap gap-10 overflow-x-auto  '>
       
          {props.users.map(function(element){
            return < RightCard  srNum={element.sr}
             img={element.img} 
             tag={element.tag} 
             intro={element.intro}
              color={element.color} /> 
          })}

    </div>
  )
}

export default RightContent