import React, { createContext, useState } from 'react'
import { Link } from 'react-router-dom'
import submitSignIn from '../../utils/login'

export const AuthContext = createContext()




export default function SignIn() {
 
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const handleClick = (e) =>{
            e.preventDefault()
        
        submitSignIn(name,password)
       
    }
    return (
        <div>
        <form >
       <span><i className="bi bi-person-badge-fill"></i><input value={name} onChange={(event)=>{event.preventDefault()
           setName(event.target.value)
       }}  name="login" placeholder="Login" type="text"/></span>  
       <br />
        <span><i className="bi bi-file-lock2-fill"></i><input value={password}  onChange={(event)=>{event.preventDefault()
        setPassword(event.target.value)}} name="password" placeholder="Password" type="password"/></span>  
        <br></br>
        <span><i className="bi bi-box-arrow-in-right"></i><input onClick={handleClick} type="submit" /></span>
       </form>
       <p>dont have an account yet?</p>
       <Link to={'/signup'}> <button>SignUp</button> </Link>
       </div>
    )
}

export function AuthProvider({children}) {
    return (
            <AuthContext.Provider value={{}}>
                {children}
            </AuthContext.Provider>
    )
}
