import React from "react";

function Header({data, friends}){
     
    
   
    return (
        <div className="h-12 w-full bg-gray-500 text-white text-center sticky top-0 flex items-center justify-center gap-5">
            <h1 className="py-1 text-xl text-white-700 font-bold text-center">Welcome to Our Community...</h1>
            <h5 className="ml-96">friends : {data.filter((val)=>val.friend).length} </h5>
        </div>
    )
}


export default Header;