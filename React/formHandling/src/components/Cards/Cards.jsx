import React from "react";
import Card from "../Card/Card";

function Cards({data, remove}){

    return (
        <>
           <div className="w-full max-h-80 border-black border flex flex-wrap my-20 overflow-auto">
                {data.map((val, index)=>(<Card data={val} key={index} remove={remove} />))}
                
           </div>
        </>
    )
}

export default Cards;