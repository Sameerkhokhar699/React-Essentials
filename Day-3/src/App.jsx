import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="parent">
      < Card user="Sameer Khokhar" img="https://plus.unsplash.com/premium_photo-1678566154673-a728037f3f00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVhY3QlMjBjb2RlfGVufDB8fDB8fHww"  text="Helllooooooooooooooooooooooo"/>
       < Card user="Sunil Khokhar" img="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHJlYWN0JTIwY29kZXxlbnwwfHwwfHx8MA%3D%3D" />
       < Card user="Sanwal Khan" img="https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHJlYWN0JTIwY29kZXxlbnwwfHwwfHx8MA%3D%3D" />
        < Card user="John Doe" img="https://images.unsplash.com/photo-1687603917313-ccae1a289a9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHJlYWN0JTIwY29kZXxlbnwwfHwwfHx8MA%3D%3D" />
         < Card user="Bob Doe" img="https://images.unsplash.com/photo-1672309046475-4cce2039f342?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHJlYWN0JTIwY29kZXxlbnwwfHwwfHx8MA%3D%3D" />
          < Card user="Johnson" img="https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHJlYWN0JTIwY29kZXxlbnwwfHwwfHx8MA%3D%3D" />
       
    </div>
    </>
  )
}

export default App
