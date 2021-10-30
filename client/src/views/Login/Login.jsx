import React from 'react'
import './styles.css'
import SignIn from '../../components/SignIn/SignIn'

export default function Login() {
    return (
        <div>
          <div className="login-page" >
            <h1>Classic Log in</h1>
            <SignIn/>
          </div>
            
        </div>
    )
}
