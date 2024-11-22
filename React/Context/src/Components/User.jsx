import React, { useContext } from 'react'
import UserDetails from './UserDetails'
import { Link, Outlet } from 'react-router-dom'
import { UserContext } from '../Context/Context'

function User() {

   const [users, setusers] =  useContext(UserContext) 
  return (
    <div className='ml-2'>
        <h1 className='text-3xl font-semibold m-4'>UserList</h1>
        <div className='w-1/4 m-5 flex flex-col'>
            {users.map((val)=>{
                return (<Link to={`/user/${val.id}`} key={val.id} className='bg-red-100 m-2'>{val.username}</Link>)
            })}
        </div>
        <div className='ml-10'><Outlet /></div>
    </div>
    
  )
}

export default User