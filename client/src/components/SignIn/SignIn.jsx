import React, { createContext } from 'react'
import { Link } from 'react-router-dom'
import submitSignIn from '../../utils/login/login'
import * as Yup from "yup";
import { useFormik } from "formik";

export const AuthContext = createContext()




export default function SignIn() {
    const { handleSubmit, handleChange, values, touched, errors, handleBlur } = useFormik({
        initialValues: {
            login: '',
            password: ''
        },
        validationSchema:Yup.object({
            login:Yup.string().max(10,"Login must be shorter than 10 characters").required('Required'),
            password:Yup.string().required("Required")
        }),
        onSubmit: ({ login, password }) => {
            submitSignIn(login, password)
            
        }
    })

    return (
        <div>

            <form onSubmit={handleSubmit} >
                <span><i className="bi bi-person-badge-fill"></i><input onBlur={handleBlur} onChange={handleChange} value={values.login} name="login" placeholder="Login" type="text" /></span>
                {touched.login && errors.login ? (<div>{errors.login}</div>):null}
                <br />
                <span><i className="bi bi-file-lock2-fill"></i><input onBlur={handleBlur} onChange={handleChange} value={values.password} name="password" placeholder="Password" type="password" /></span>
                {touched.password && errors.password ? (<div>{errors.password}</div>):null}
                <br></br>
                <span><i className="bi bi-box-arrow-in-right"></i><input type="submit" /></span>
            </form>
            <p>dont have an account yet?</p>
            <Link to={'/signup'}> <button>SignUp</button> </Link>

        </div>
    )
}

export function AuthProvider({ children }) {
    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}
