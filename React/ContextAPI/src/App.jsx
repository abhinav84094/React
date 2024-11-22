import { useState } from 'react'
import axios from 'axios'
import Show from './Component/Show'
import Home from './Component/Home'
import Services from './Component/Services'
import { NavLink, Routes, Route } from 'react-router-dom'

function App() {

  

  return (
    <>
      <nav className='m-5 flex gap-10 justify-center'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/show"> Show</NavLink>
        <NavLink to="/service">Services</NavLink>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/show" element={<Show />}></Route>
        <Route path='/service' element={<Services />}></Route>
      </Routes>
    </>
  )
}

export default App
