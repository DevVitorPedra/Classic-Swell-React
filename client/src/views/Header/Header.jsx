import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

export default function Header() {
    return (
        <div>
            <header className="main-header">
                <div className="logo">
                <div className="logo-img"></div>
                    <h1 className="title-name" >lassic Swell</h1>
                </div>
            <nav className="navigation-menu">
            <ul className="menu-list">
             <Link to={'/'}><li>Best Beaches</li></Link> 
             <Link to={'/weekforecast'}><li>Week Forecast</li></Link> 
             <Link to={'/news'}><li>News</li></Link>
            </ul>
            <div className="login">
                <img alt='Avatar'></img>
                <p></p>
               <Link to={'/login'}><button>Login</button></Link> 
               <Link to={'/signup'}> <button>SignUp</button> </Link>
            </div>
            </nav>
          
            </header>
        </div>
    )
}
