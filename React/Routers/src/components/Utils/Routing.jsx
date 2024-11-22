import React from 'react'
import Home from '../Home/Home';
import About from '../About/About';
import Profile from '../Profiles/Profile';
import Abhinav from '../Profiles/People/Abhinav'
import Indrajeet from '../Profiles/People/Indrajeet'
import Nitish from '../Profiles/People/Nitish'
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import People from '../Profiles/People/People';

function Routing() {
  return (
    
    <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Profile' element={<Profile />}>
          <Route path='/Profile/Abhinav' element={<Abhinav />}/>
          <Route path='/Profile/Nitish' element={<Nitish />}/>
          <Route path='/Profile/Indrajeet' element={<Indrajeet />}/>
          <Route path='/Profile/:name' element={<People />}/>
        </Route>
    </Routes>           
  )
}

export default Routing