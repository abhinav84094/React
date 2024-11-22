import React, { useEffect, useState } from 'react'


function Services() {

    const [first, setFirst] = useState("this is normal data");
    const [second, setSecond] = useState("this is large data");

    useEffect(()=>{
        console.log("Service Coponent is created")
        
        return ()=>{
            console.log("Service component is deleted");
        }
    }, []);

    return (
    <div>
        <h1>{first}</h1>
        <button onClick={()=>setFirst("Normal data has been changed")} className='bg-red-200 px-2 py-2 rounded-md'>Normal data button</button>
        <h1 className='mt-10'>{second}</h1>
        <button onClick={()=>setSecond("Large data has been changed")} className='bg-blue-200 px-2 py-2 rounded-md'>Large data button</button>
    </div>
  )
}

export default Services