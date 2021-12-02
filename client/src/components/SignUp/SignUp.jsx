import React from 'react'
import "./styles.css" 
import {useFormik} from 'formik'
import * as Yup from "yup";
import signUp from '../../utils/signup/signUp'



export default function SignUp() {

    const {handleSubmit, handleChange,values,touched,errors, handleBlur}=useFormik({
        initialValues:{
         name:'',
         nickname:'',
         email:'',
         password:''   
        },
        validationSchema:Yup.object({
            name:Yup.string().required('Name is required'),
            nickname:Yup.string().required("Don't have? use your first name!"),
            email:Yup.string().required("Email is Required"),
            password:Yup.string().max(10,"max 10 Characters").required()
        }),
        onSubmit:({name, nickname, email, password})=>{
            signUp(name,nickname,email,password)
        }
     
    })
 
    return (
        <div>
            
        <form onSubmit={handleSubmit} className="signup-form">
        <h1>Classic Sign Up</h1>

       <span> <i className="bi bi-person-badge-fill"></i><input onBlur={handleBlur} onChange={handleChange} value={values.name} name="name" placeholder="Name" type="text"/></span>  
       {touched.name && errors.name ? (<div>{errors.name}</div>):null}
       <span> <i className="bi bi-person-badge-fill"></i><input onBlur={handleBlur} onChange={handleChange} value={values.nickname}  name="nickname" placeholder="Nickname" type="text"/></span>  
       {touched.nickname && errors.nickname ? (<div>{errors.nickname}</div>):null}
        <span> <i className="bi bi-file-lock2-fill"></i><input onBlur={handleBlur} onChange={handleChange} value={values.email} name="email" placeholder="email" type="text"/></span>  
        {touched.email && errors.email ? (<div>{errors.email}</div>):null}
        <span> <i className="bi bi-file-lock2-fill"></i><input onBlur={handleBlur} onChange={handleChange} value={values.password} name="password" placeholder="password" type="password"/></span>  
        {touched.password && errors.password ? (<div>{errors.password}</div>):null}
        <span><input type="submit"/></span>
       </form>
       </div>
    )
}
