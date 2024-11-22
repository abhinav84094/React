import { useState } from 'react'
import {Link, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import User from './Components/User'
import About from './Components/About'
import UserDetails from './Components/UserDetails'

function App() {


  return (
    <>
      <nav className='flex gap-20 justify-center p-2'>
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
        <Link to="/about">About</Link>
      </nav>
      <hr />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user" element={<User />}>
          {/* <Route path='/user/:id' element={<UserDetails />}></Route> */}
        </Route>
        <Route path='/user/:id' element={<UserDetails />}></Route>

        <Route path="/about" element={<About />}></Route>
      </Routes> 
    </>
  )
}

export default App
