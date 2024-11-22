import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function People() {

    const name = useParams();
    const navigate =  useNavigate()

    const GoBackHandler =()=>{
        // navigate("/Profile")
        navigate(-1);
    }

  return (
    <>
        <div>
            <h1 className='text-xl font-semibold mt-10 ml-5'>Hell! This is {name.name}.</h1>
        </div>
        <button onClick={GoBackHandler} className='border-black border rounded-md bg-red-200 mt-10 ml-10 px-2 py-2'>Go Back</button>
    </>
  )
}

export default People