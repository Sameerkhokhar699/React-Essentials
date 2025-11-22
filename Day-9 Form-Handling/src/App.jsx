import React, { useState } from 'react'

const App = () => {
 const [user, setUser] = useState('')
const submitHandler = (e)=>{

  e.preventDefault()
  console.log("Form Submitted By:", user);
  setUser('')
}
// Two way binding: It is a process in which we can bind the value of input field to the state and vice versa.
  return (
    <div>
    <form onSubmit={(e)=>{
      submitHandler(e)
    }} >
      <input value={user} onChange={(e)=>{
       setUser(e.target.value)
      }} 
      type="text" placeholder='Enter Your Name' /> <br />
      <button>Submit</button>
    </form>
    </div>
  )
}

export default App