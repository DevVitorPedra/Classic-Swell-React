import React, { useState } from 'react'
import submitSignIn from '../../utils/login'


export default function SignIn() {
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const handleClick = (e) =>{
            e.preventDefault()
        submitSignIn(name)
    }
    return (
        <div>
        <form >
       <span> <i className="bi bi-person-badge-fill"></i><input value={name} onChange={(event)=>{
           event.preventDefault()
           setName(event.target.value)
       }}  name="login" placeholder="Login" type="text"/></span>  
        <span> <i className="bi bi-file-lock2-fill"></i><input value={password}  onChange={(event)=>{event.preventDefault()
        setPassword(event.target.value)}} name="password" placeholder="Password" type="password"/></span>  
        <span><i className="bi bi-box-arrow-in-right"></i><input onClick={handleClick} type="submit" /></span>
       </form>
       </div>
    )
}
