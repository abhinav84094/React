import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form';
1
function Form({setInput}) {

    const {register, reset, handleSubmit} = useForm();

     // Handle form submission
  const formSubmit = (formData) => {
    // Create a new entry using the submitted form data
    const newEntry = {
      ...formData,
    };

    setInput(newEntry); // Add the new entry to the list
    reset(); // Reset form after submission
  };

  return (
    <div className='border border-black py-1 '>
        <form className='flex justify-center'  onSubmit={handleSubmit((x)=>formSubmit(x))}>
            <h1 className='font-bold text-xl'>Add Friends</h1>
            <input {...register("name")} type='text' placeholder='name'  className='border-black border rounded-md ml-4 px-1 py-1' /> 
            <input {...register("email")} type='email' placeholder='email'  className='border-black border rounded-md mx-2 px-1 py-1' /> 
            <input {...register("qualification")} type='text' placeholder='qualification'  className='border-black border rounded-md px-1 py-1' /> 
            <input {...register("image")} type='text' placeholder='image url'  className='border-black border rounded-md mx-2 px-1 py-1' /> 
            <input type='submit' className='border-black border rounded-md px-1 py-1 bg-blue-500' />
        </form>
    </div>
  )
}

export default Form

