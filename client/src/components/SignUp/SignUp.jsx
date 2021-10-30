import React, { useState } from 'react'
import "./styles.css" 
import crypto from 'crypto'



export default function SignUp() {
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [nickname, setNickname] = useState('')
    const handleClick = (e) =>{
            e.preventDefault()
            let hashPass = crypto.createHash('sha256').update(password).digest('hex')
        console.log(hashPass, name, nickname)
    }
    return (
        <div>
            <h1>Classic Sign Up</h1>
        <form className="signup-form">

       <span> <i className="bi bi-person-badge-fill"></i><input value={name} onChange={(event)=>{
           event.preventDefault()
           setName(event.target.value)
       }}  name="login" placeholder="Name" type="text"/></span>  
       <span> <i className="bi bi-person-badge-fill"></i><input value={nickname} onChange={(event)=>{
           event.preventDefault()
           setNickname(event.target.value)
       }}  name="login" placeholder="Nickname" type="text"/></span>  
        <span> <i className="bi bi-file-lock2-fill"></i><input value={password}  onChange={(event)=>{event.preventDefault()
        setPassword(event.target.value)}} name="password" placeholder="Password" type="password"/></span>  
        <span><i className="bi bi-box-arrow-in-right"></i><input onClick={handleClick} type="submit" /></span>
       </form>
       </div>
    )
}
