import React from "react";
import { useState } from 'react'
import "./index.css"

function App() {

  const [bgColor , setBgColor] = useState("#ffffff");




    return (
      <div className="w-full h-screen duration-200" style={{backgroundColor: bgColor}}>
        <div className="flex flex-wrap fixed justify-center bottom-12 inset-x-0 px-2">
        <button onClick={()=>{setBgColor("red")}} className="outline-none px-4 py-1 text-white shadow-lg" style={{backgroundColor: "red"}}> Red</button>
        <button onClick={()=>{setBgColor("green")}} className="outline-none px-4 py-1 text-white shadow-lg" style={{backgroundColor: "green"}}> Green</button>
        <button onClick={()=>{setBgColor("yellow")}} className="outline-none px-4 py-1 text-white shadow-lg" style={{backgroundColor: "yellow"}}> Yellow</button>

        </div>
        <div className="flex flex-wrap jsutify-center gap shadow-lg bg-white px-3 py-2 rounded-3xl ">test</div>
        
      </div>
  )
}

export default App
