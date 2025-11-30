import React from 'react'

const App = () => {
  
  // Local Storage: 4 methods
  // 1. setItem(key, value) - to store data
       localStorage.setItem('name','Sunil Khokhar');

  // 2. getItem(key) - to retrieve data
   const data= localStorage.getItem('name');
   console.log(data);
   
  // 3. removeItem(key) - to delete data
  localStorage.removeItem('name')
  // 4. clear() - to clear all data
  localStorage.clear();

  // for storing objects/arrays, we need to convert them into string using JSON.stringify()
    const user ={
      name: 'Sameer Khokhar',
      age: 21,
      city: 'Islamabad'
    }
     localStorage.setItem('user',JSON.stringify(user));

  // for retrieving objects/arrays, we need to convert them back into object/array using JSON.parse()
     const usera=  JSON.parse(localStorage.getItem('user'))
      console.log(usera);
  return (
    <div>App</div>
  )
}

export default App