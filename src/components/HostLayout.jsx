import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function HostLayout() {
    return (
        <div className='hostlayout--main'>
            <nav className='hostlayout--header'>
                <NavLink to="/host" end className={({ isActive }) => isActive ? "host--active-link" : "hostlayout--link"} >Dashboard</NavLink>
                <NavLink to="/host/reviews" className={({ isActive }) => isActive ? "host--active-link" : "hostlayout--link"} >Reviews</NavLink>
                <NavLink to="/host/income" className={({ isActive }) => isActive ? "host--active-link" : "hostlayout--link"} >Income</NavLink>
            </nav>
            <Outlet /> 
        </div>
    )
}