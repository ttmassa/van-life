import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function HostLayout() {
    return (
        <div className='hostlayout--main'>
            <nav className='hostlayout--header'>
                <NavLink to="." end className={({ isActive }) => isActive ? "host--active-link" : "hostlayout--link"} >Dashboard</NavLink>
                <NavLink to="reviews" className={({ isActive }) => isActive ? "host--active-link" : "hostlayout--link"} >Reviews</NavLink>
                <NavLink to="vans" className={({ isActive }) => isActive ? "host--active-link" : "hostlayout--link"} >Vans</NavLink>
                <NavLink to="income" className={({ isActive }) => isActive ? "host--active-link" : "hostlayout--link"} >Income</NavLink>
            </nav>
            <Outlet /> 
        </div>
    )
}