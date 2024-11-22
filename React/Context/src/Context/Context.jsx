import React, { createContext, useState } from 'react'

export const UserContext = createContext();

function Context(props) {

    const [user, setUser] = useState([
        {id:1, username:"ABHINAV",city:"PATNA"},
        {id:2, username:"AMAN", city:"SHEIKHPURA"},
        
    ]);
    
    return (
    <UserContext.Provider value={ [user, setUser] }>{props.children}</UserContext.Provider>
  )
}

export default Context