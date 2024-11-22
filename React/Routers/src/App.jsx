import { useState } from 'react'
import Nav from './components/Navbar/Nav'
import Routing from './components/Utils/Routing'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  

  return (
    <>
      
      <Nav />
      <Routing />                        
      
    </>
  )
}

export default App
