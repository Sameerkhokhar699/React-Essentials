import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'
import { Tag } from 'lucide-react'

const App = () => {
  const users = [
    { sr:'1',
      img:'https://plus.unsplash.com/premium_photo-1661578248908-85e78e6d6c9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWxzfGVufDB8fDB8fHww',
      intro:'lorem ipsum dolor sit amet consectetur adipisicing elit. Quia facilis laudantium sequi exercitationem dignissimos repellat pariatur maiores praesentium necessitatibus aperiam!',
      tag:'Satisfied',
      color:'bg-blue-600'
    },
    {  sr:'2',
       img:'https://plus.unsplash.com/premium_photo-1661596852991-ca83ea8c253b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWxzfGVufDB8fDB8fHww',
      intro:'lorem ipsum dolor sit amet consectetur adipisicing elit. Quia facilis laudantium sequi exercitationem dignissimos repellat pariatur maiores praesentium necessitatibus aperiam!',
      tag:'Underserved',
      color:'bg-green-600'
    },
    {  sr:'3',
       img:'https://plus.unsplash.com/premium_photo-1661594430156-6d5973b67131?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHx3b3JraW5nJTIwcHJvZmVzc2lvbmFsc3xlbnwwfHwwfHx8MA%3D%3D',
      intro:'lorem ipsum dolor sit amet consectetur adipisicing elit. Quia facilis laudantium sequi exercitationem dignissimos repellat pariatur maiores praesentium necessitatibus aperiam!',
      tag:'Underbanked',
      color:'bg-red-600'
    },
  {  sr:'4',
       img:'https://plus.unsplash.com/premium_photo-1661575258771-2899b67898ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWxzfGVufDB8fDB8fHww',
      intro:'lorem ipsum dolor sit amet consectetur adipisicing elit. Quia facilis laudantium sequi exercitationem dignissimos repellat pariatur maiores praesentium necessitatibus aperiam!',
      tag:'Underprivileged',
      color:'bg-purple-600'
    },
  {  sr:'5',
       img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro:'lorem ipsum dolor sit amet consectetur adipisicing elit. Quia facilis laudantium sequi exercitationem dignissimos repellat pariatur maiores praesentium necessitatibus aperiam!',
      tag:'Undercompensated',
      color:'bg-black'
    }]
  return (
    <div>
    < Section1 users={users} />
    < Section2 />
    </div>
  )
}

export default App
