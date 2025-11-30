import React, { useEffect, useState } from 'react'

const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
    
const incrementA=()=>{
  setA(a+1)
}
const incrementB=()=>{
  setB(b+1)
}
// useeffect hook: Used to perform side effects in functional components,it run after every render by default but when we use dependency array it only run when the value in the dependency array changes.

useEffect(function(){
  console.log("Use Effect running......");
},[a,b])

  return (
    <div>
      <h1>Value Of a:{a}</h1>
      <h1>Value of b:{b} </h1>
      <button
      onClick={()=>{
        incrementA()
      }}>Click For A</button>
      <button onClick={()=>{
        incrementB()
      }}>Click For B</button>
    </div>
  )
}

export default App