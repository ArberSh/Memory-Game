import { useState } from 'react'
import './App.css'

function App() {

  const arr = ["A","A","B","B","C","C","D","D","E","E","F","F","G","G","H","H","I","I","J","J","K","K","L","L"]
  
  for(let i = arr.length - 1; i > 0; i--){
    var j = Math.floor(Math.random() * (i + 1))
    let temp = arr[i];
    arr[i] = arr[j]
    arr[j] = temp
  }
  console.log(arr)
 
  let newarr: string[] = []

  function Click(elem: string){
    
    const count = newarr.push(elem)
    console.log(newarr)
  
  }
  
  console.log(globalThis)


  return (
    <>
     <h1 className='text-red-500'>Hello</h1>
     <div className='flex flex-wrap justify-around'>
      {arr.map(elem => (
      <button onClick={() => Click(elem)} className='text-2xl'>{elem}</button>
     ))}
     </div>
     
    </>
  )
}

export default App
