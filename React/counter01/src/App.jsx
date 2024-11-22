import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let [counter , setCounter] = useState(15);

  const addValue = () =>{
    console.log("clicked", counter);
    // counter++;
    // setCounter(counter);
    setCounter(counter+1);
  }

  const removeValue = ()=>{
    if(counter > 0) setCounter(counter-1);
    else setCounter(0);
    console.log("clicked" , counter);
  }

  return (
    <>
      <h1>Hello Dosto</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick = {addValue}>Add value</button>
      <br/>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
