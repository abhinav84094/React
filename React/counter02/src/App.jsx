import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind CSS</h1>
      <br/>
      <Card username = "abhinav" city="patna" profileimage="https://th.bing.com/th?id=OIP.4Sf5Qzlwrq-0iNoydcGW0wHaLH&w=204&h=306&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.5&pid=3.1&rm=2"/>
      <br/>
      <Card username = "aman" city="sheikhpura" />
    </>
  )
}

export default App
