import React from 'react'

function UserCard({username,city, image}){
    
    return (
        <>
            <div
    class=" rounded-xl  hover:shadow-sm shadow-md border border-l-4 hover:border-black relative w-60  border-gray-200 pb-1 transition duration-200 hover:scale-105">
    <div class="p-2">
        <div class="relative w-52 h-40 mx-auto ">
            <img class="w-full h-full  rounded-lg  object-cove rbg-autp"
                src={image}
                alt=""/>
            
        </div>

    </div>
    <div class="">
        <div class="p-1.5 bg-black  w-44 rounded-tr-full rounded-br-full mt-2">
            <div class=" text-center">
                <p class="text-white text-sm font-medium tracking-wide">{username}</p>
            </div>
        </div>
        <div class="flex items-center justify-center gap-3 mt-4">
            <p class="text-slate-500 text-sm font-medium  tracking-wide ">Student</p>
            <p class="text-white text-sm font-semibold text-center tracking-wide">{city}</p>
        </div>

        <div class="w-full text-center mx-auto mt-3" routerLink="/reception/op-view">
            <button
                class=" border-indigo-500 bg-cyan-500 text-white rounded-md px-4 py-1.5 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline text-xs font-medium">
                View More
            </button>

        </div>
    </div>
</div>
        </>
    )
}

export default UserCard