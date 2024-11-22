import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

function Profile(){

    return (

        <>
            <div className="mt-0 ml-[45%] mt-10 font-bold text-xl flex flex-col gap-1">
                
                    <Link to="/Profile/Abhinav" className="border-black border rounded-md bg-green-200 hover:bg-green-500 hover-bg-green-300 w-[20%] px-1 py-1">Abhinav</Link>
                    <Link to="/Profile/Nitish" className="border-black border rounded-md hover:bg-green-500 bg-green-200 w-[20%] px-1 py-1">Nitish</Link>
                    <Link to="/Profile/Indrajeet" className="border-black border rounded-md hover:bg-green-500 bg-green-200 w-[20%] px-1 py-1">Indrajeet</Link>            
            
                
                
            </div>  
            <hr />
            <Outlet />       
        </>
    )
}

export default Profile;