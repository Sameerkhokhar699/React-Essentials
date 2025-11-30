
import axios from 'axios'
import { useState } from 'react'
const App = () => {

  // getting data using fetch api
//  const getData= async ()=>{
//    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     const data = await response.json()
//     console.log(data);
//  }


//  getting data using axios
const [data, setData] = useState([])
const getDataAxios = async ()=>{
       const axioData =  await axios.get('https://picsum.photos/v2/list') 
        setData(axioData.data)
        console.log(axioData);
        
         
}
  return (
    <div>
      <button className='btn' onClick={getDataAxios}>Click</button>
      {data.map(function(elem,index){
        return ( 
          <div>
            <h1>{index}:{elem.author}</h1>
            <img src={elem.download_url} alt=""  style={{ width: "50%", margin: "30px", padding:"20px"}} />
          </div>
        )
      })}
    </div>
  )
}

export default App