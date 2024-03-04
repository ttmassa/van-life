import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <Link className='header--title' to="/">#VANLIFE</Link> 
            <nav className='header--nav'>
                <NavLink className={({ isActive }) => isActive ? "active-link" : "header--link"} to="/about">About</NavLink>
                <NavLink className={({ isActive }) => isActive ? "active-link" : "header--link"} to="/vans">Vans</NavLink>
                <NavLink className={({ isActive }) => isActive ? "active-link" : "header--link"} to="/host">Host</NavLink>
            </nav>
        </header>
    )
}