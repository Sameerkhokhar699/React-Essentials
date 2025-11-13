import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Message from './message.jsx'
import Login from  './login.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      < Message/>
      < Login/>
    </div>
     
        
    </>
  )
}

export default App
