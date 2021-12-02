import React, { useContext, createContext, useEffect } from 'react'
import crypto from 'crypto'
import { Link } from 'react-router-dom'
import * as Yup from "yup";
import { useFormik } from "formik";
export const UserContext =  createContext('unloged')
export const LoginContext = createContext('')

export default function SignIn() {
  
    const { value, setValue } = useContext(UserContext)
    const { userName, setUserName} = useContext(LoginContext)
  
    const submitSignIn = async(name, password) =>{
        try {
           
            const response = await fetch(`http://localhost:5000/users/${name}`)
            const data = await response.json()
            const inputPass =   password = crypto.createHash('sha256').update(password).digest('hex')
            if (inputPass===data.user_password){
              sessionStorage.setItem('SessionToken',`{name:${name}}`)
              setUserName(name)
              setValue('loged')
            
            }else if(name !== data.user_name){
                console.log('incorrect credentials')
            }
        } catch (err) {
            console.error(err.message)
            
        }
    
    }
    
    

    const { handleSubmit, handleChange, values, touched, errors, handleBlur } = useFormik({
        initialValues: {
            login: '',
            password: ''
        },
        validationSchema: Yup.object({
            login: Yup.string().max(10, "Login must be shorter than 10 characters").required('Required'),
            password: Yup.string().required("Required")
        }),
        onSubmit: ({ login, password }) => {
             submitSignIn(login, password)

        }
    })

    return (
        <div>

            <form onSubmit={handleSubmit} >
                <span><i className="bi bi-person-badge-fill"></i><input onBlur={handleBlur} onChange={handleChange} value={values.login} name="login" placeholder="Login" type="text" /></span>
                {touched.login && errors.login ? (<div>{errors.login}</div>) : null}
                <br />
                <span><i className="bi bi-file-lock2-fill"></i><input onBlur={handleBlur} onChange={handleChange} value={values.password} name="password" placeholder="Password" type="password" /></span>
                {touched.password && errors.password ? (<div>{errors.password}</div>) : null}
                <br></br>
                <span><i className="bi bi-box-arrow-in-right"></i><input type="submit" /></span>
            </form>
            <p>dont have an account yet?</p>
            <Link to={'/signup'}> <button>SignUp</button> </Link>

        </div>
    )
}


