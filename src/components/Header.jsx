import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
    return (
        <header>
            <Link className='header--title' to="/">#VANLIFE</Link> 
            <nav className='header--nav'>
                <Link className={(props.activeLink === '/about' ? 'active-link' : 'header--link')} to="/about">About</Link>
                <Link className={(props.activeLink === '/vans' ? 'active-link' : 'header--link')} to="/vans">Vans</Link>
            </nav>
        </header>
    )
}