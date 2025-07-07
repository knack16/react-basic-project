import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0);


  const addValue = () => {
    if(counter<=20){
      setCounter(counter + 1);
    }else{
      alert("Counter value cannot be greater than 10");
    }
    
  }

  const substractValue = () => {
    if(counter>0){
      setCounter(counter - 1);
    }else{
      alert("Counter value cannot be less than 0");
    }
    
    
  } 

  

  return (
    <>
      <h1>Vite + React</h1>
      <h2>Conter value : {counter}</h2>

      <br/>
      <button  onClick={addValue}>Add Value</button>
      <button  onClick={substractValue}>Subtract Value</button>
    </>
  )
}

export default App
