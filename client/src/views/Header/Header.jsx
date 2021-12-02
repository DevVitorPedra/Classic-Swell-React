import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import Avatar from '../../components/Avatar/Avatar'
import { LoginContext, UserContext } from '../../components/SignIn/SignIn'

export default function Header() {
    
    const {value} = useContext(UserContext)
    const {userName} = useContext(LoginContext)
    console.log("header", value,userName)
    useEffect(() => {
        console.log("setValue funfed")
       
    }, [value]);
    return (
        <div>
            <header className="main-header">
                <div className="logo">
                <div className="logo-img"></div>
                    <h1 className="title-name" >Classic Swell</h1>
                </div>
            <nav className="navigation-menu">
            
            <ul className="menu-list">
             <Link to={'/'}><li>Top 5</li></Link> 
             <Link to={'/weekforecast'}><li>Forecast</li></Link> 
             <Link to={'/news'}><li>News</li></Link>
            </ul>
            <div className="btn-login">
                  { (value==='loged')  ?<Avatar name={userName}/> :
                <Link to ={'/login'}>Dive in</Link>}
            </div>
            </nav>
          
            </header>
        </div>
    )
}
