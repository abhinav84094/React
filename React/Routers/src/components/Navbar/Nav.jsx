import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import ReactDOM from "react-dom/client";

function Nav() {
  return (
        <nav className="flex w-[50%] justify-between mt-4 ml-4 text-xl font-bold">
        <NavLink style={(e)=>{
          return {color: e.isActive?"tomato": "" ,
            fontWeight: e.isActive?"900":""
          }
        }} to="/">Home</NavLink>
        <NavLink className={(e)=>{
          return [
            e.isActive?"text-red-500":"",
            e.isActive?"font-extrabold":"",
          ].join(" ")
        }} to="/About">About</NavLink>
        <NavLink style={(e)=>{
          return {color: e.isActive?"tomato": "",
            fontWeight: e.isActive?"900":""
          }
        }} to="/Profile">Profile</NavLink>
      </nav>
    
  )
}

export default Nav