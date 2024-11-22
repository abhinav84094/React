import React from "react";

function Header({number}){

    return (
        <div className="h-20 w-full border mt-4 border-black rounded-md flex justify-center items-center">
            <h1 className="text-xl font-bold ">My Community...</h1>
            <h5 className="ml-40 border-black border bg-green-200 rounded-lg py-1 px-1">Friends : {number}</h5>
        </div>
    )
}

export default Header;