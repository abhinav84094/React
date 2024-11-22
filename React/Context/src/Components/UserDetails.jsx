import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../Context/Context';

function UserDetails() {

    const navigate = useNavigate();
    const goBackHandler = ()=>{
        navigate("/user")
    }

    const {id} = useParams();
   
    const [users, setUsers] = useContext(UserContext);
    // console.log(users[id-1])

  return (
    <>
        <div className='ml-20 mt-20 text-xl font-semibold'>id : {users[id-1].id}</div>
        <div className='ml-20 text-xl font-semibold'>username : {users[id-1].username}</div>
        <div className='ml-20 text-xl font-semibold'>city : {users[id-1].city}</div>
        
        <button onClick={goBackHandler} className='m-20 p-2 bg-blue-200 rounded-md'>Back</button>
    </>
    
  )
}

export default UserDetails