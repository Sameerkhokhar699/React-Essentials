import React from 'react'
import { useState } from 'react'


const App = () => {
// Use State Hook
 const [count, setCount] = useState(0) 
  // Function to increment,decrement the counter we also use simple function here
 const increment =()=>{
  
      setCount(count+1)
  // Or setCount(prev=>prev+1)
  
 }

 const decrement =()=>{
  setCount(count-1)
 }
  
 const divideBy2 =()=>{
  setCount(count/2)
 } 

  const reset =()=>{
  setCount(0)
 }

  // Object in useState Hook to change name
    const [user, setUser] = useState({ name: "Sunil Khokhar", age: 23 })
    const changeName=()=>{
      const newUser={...user}
      newUser.name= "Sameer Khokhar"
      newUser.age= 21
      setUser(newUser)
    }
   
     // Or newName(prev=>({...prev,name:"Sameer Khokhar",age:21}))
    

  
  // Array in useState Hook to add new item

  const [arr, setArr] = useState(["Apple", "Banana", "Grapes"])
   
  const addItem =()=>{
    const newArr = [...arr]
    newArr.push("Mango","Orange","Pineapple")
    setArr(newArr)
   }

  return (
    <div>
      { /* useState Hook for Counter */ }
       <h1>{count}</h1>
       <button onClick={increment}> Click To Increase</button>
         <button onClick={decrement}> Click To decrease</button>
          <button onClick={divideBy2}> Click To Divide by 2</button>
            <button onClick={reset}> Click To Reset</button>

        {/* To change name using useState*/}
           <h1>{user.name},{user.age} </h1>
       <button onClick={changeName}>Click Me</button>

        {/* To add new item to array */}
        <h1> {arr} <br /> </h1>
        <button onClick={addItem}>Click to Update</button>
        
    </div>
  )
}

export default App