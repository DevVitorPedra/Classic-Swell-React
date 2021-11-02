import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import Avatar from '../../components/Avatar/Avatar'

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
             <Link to={'/'}><li>Top 5</li></Link> 
             <Link to={'/weekforecast'}><li>Forecast</li></Link> 
             <Link to={'/news'}><li>News</li></Link>
            </ul>
            <div className="btn-login">
                {sessionStorage.getItem('SessionToken') ?<Avatar/> :
                <Link to ={'/login'}>Dive in</Link>}
            </div>
            </nav>
          
            </header>
        </div>
    )
}
