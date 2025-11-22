import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
     function inputChanged(value){
      console.log(value);
     }

  return (
    <>
      <div>
        <input onChange={function(elem){
            inputChanged(elem.target.value);
        }} type="text" placeholder='Enter Your Name' /> <br />


        <input onChange={function(elem){
               inputChanged(elem.target.value);
        }} type="=password" placeholder='Enter Your Password' /> <br />
       
        <button onClick={function btnClicked(){
         console.log("Button Clicked");
         
        }}>Click Here</button>
      </div>
      
    </>
  )
}

export default App
