import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [color, setColor] = useState("olive")

  

  return (
    <>
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none bg-red-600 text-amber-50 px-3 py-2 rounded-2xl bold font-extrabold shadow-lg' onClick={()=>{setColor("red")}}>Red</button>
          <button className='outline-none bg-blue-600 text-amber-50 px-3 py-2 rounded-2xl bold font-extrabold shadow-lg' onClick={()=>{setColor("blue")}}>Blue</button>
          <button className='outline-none bg-green-600 text-amber-50 px-3 py-2 rounded-2xl bold font-extrabold shadow-lg' onClick={()=>{setColor("green")}}>Green</button>
          <button className='outline-none bg-yellow-400 text-amber-50 px-3 py-2 rounded-2xl bold font-extrabold shadow-lg' onClick={()=>{setColor("yellow")}}>Yellow</button>
          <button className='outline-none bg-black text-amber-50 px-3 py-2 rounded-2xl bold font-extrabold shadow-lg' onClick={()=>{setColor("black")}}>Black</button>
          <button className='outline-none bg-white text-black px-3 py-2 rounded-2xl bold font-extrabold shadow-lg' onClick={()=>{setColor("white")}}>White</button>
          <button className='outline-none bg-amber-900 text-amber-50 px-3 py-2 rounded-2xl bold font-extrabold shadow-lg' onClick={()=>{setColor("brown")}}>Brown</button>
        </div>
      </div>

    </div>
      
    </>
  )
}

export default App
