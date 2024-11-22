import React,{ useState } from "react";

function Card({name, image, education, friend, friendFunction, index}){
    // const {} = new data ; 

    return (


                <div className="border-solid border-black rounded-lg border w-52 mx-5 my-5 text-center" >
                    <img className="w-full h-40 border mx-auto object-cover rounded-t-lg" src={image} />
                    <h1 className="font-bold text-center text-xl py-2">{name}</h1>
                    <div className="text-center">{education}</div>
                    <button onClick={(()=>{
                        friendFunction(index);
                    })} className={`py-1 px-2 rounded-md text-center my-1 ${friend ? "bg-green-500 hover:bg-green-600": "bg-blue-400  hover:bg-blue-500"}`} >{!friend ? "Add Friend": "Remove Friend"}</button>
                </div>

    )
}

export default Card;