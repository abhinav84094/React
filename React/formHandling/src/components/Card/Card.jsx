
import React from 'react'

function Card({data,remove}) {

    const {name, email , qualification, image} = data;

  return (
    <>
       <div className="w-40 h-48 border-black border rounded-md flex flex-col items-center my-2 mx-2 ">
            <img className='w-20 h-20 rounded-full  border-black border my-1 ' src={image} />
            <h1 className='font-bold text-xl leading-none'>{name}</h1>
            <h4 className='font-semibold text-sm opacity-40 leading-none text-center text-ellipsis overflow-hidden whitespace-nowrap w-full'>{email}</h4>
            <h5 className='text-md font-semibold'>{qualification}</h5>
            <button className='border-black border rounded-lg px-1 py-1 text-sm my-2' onClick={()=>remove(name)}>Remove</button>
        </div>
    </>
  )
}

export default Card