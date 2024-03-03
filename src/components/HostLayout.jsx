import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function HostLayout() {
    return (
        <div className='hostlayout--main'>
            <nav className='hostlayout--header'>
                <Link to="/host" className='hostlayout--link'>Dashboard</Link>
                <Link to="/host/reviews" className='hostlayout--link'>Reviews</Link>
                <Link to="/host/income" className='hostlayout--link'>Income</Link>
            </nav>
            <Outlet /> 
        </div>
    )
}