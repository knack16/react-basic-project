import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name: 'Chai Aur React',
    age: 1,
    isAwesome: true,
    skills: ['React', 'Tailwind CSS', 'JavaScript'],
  }

  let myArray = [1, 2, 3, 4, 5]

  return (
    <>
      <Card channel = 'masti with react' />
      <Card />
    </>
  )
}

export default App
