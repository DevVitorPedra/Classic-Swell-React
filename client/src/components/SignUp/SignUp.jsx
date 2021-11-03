import React, { useState } from 'react'
import "./styles.css" 

import signUp from '../../utils/signup/signUp'



export default function SignUp() {
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [nickname, setNickname] = useState('')
    const handleClick = (e) =>{
            e.preventDefault()
            if(name.trim()!=='' && nickname.trim()!=='' && password.trim()!==''){
            signUp(name,nickname,password)
            }else {
                console.log('campos vazios')
            }
      
    }
    return (
        <div>
            
        <form className="signup-form">
        <h1>Classic Sign Up</h1>

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
        <span><input onClick={handleClick} type="submit"/></span>
       </form>
       </div>
    )
}
