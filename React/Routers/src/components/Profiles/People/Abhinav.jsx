import React from 'react'
import { useNavigate } from 'react-router-dom'

function Abhinav() {
  const navigate = useNavigate()
  const GoBackHandler = ()=>{
    navigate("/Profile");
  }

  return (
    <>
        <div>
            <h1 className='text-xl font-semibold mt-5 ml-5'>Hell! This is Abhinav Prakash.</h1>
        </div>
        <button onClick={GoBackHandler} className='border-black border rounded-md bg-red-200 mt-10 ml-10 px-2 py-2'>Go Back</button>
    </>
  )
}

export default Abhinav