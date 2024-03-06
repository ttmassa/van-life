import React from 'react'
import { useState, useEffect } from 'react'
import { Link, NavLink, useParams, Outlet } from 'react-router-dom'

export default function HostVansDetail() {
    const params = useParams()
    const [van, setVan] = useState(null)

    useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
          .then(res => res.json())
          .then(data => setVan(data.vans))
    }, [params.id])

    if (!van) {
        return <h2>Loading...</h2>
    }

    return (
        <div className='hostvandetail--page'>
            <Link 
                className='return-link' 
                to={'/host/vans'}
                relative='path'
            >
                &larr; <span>Back to all vans</span>
            </Link>
            <div className='hostvandetail--main'>
                <div className='hostvandetail--info'>
                    <img className='hostvandetail--image' src={van.imageUrl} alt='miniature of van'/>
                    <div className='hostvandetail--info-text'>
                        <p className='van--type'>{van.type}</p>
                        <h2>{van.name}</h2>
                        <p>${van.price}/day</p>
                    </div>
                </div>
                <nav>
                    <NavLink className={({ isActive }) => isActive ? "host--active-link" : "hostlayout--link"} end to={'.'}>Details</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "host--active-link" : "hostlayout--link"} to={'pricing'}>Pricing</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "host--active-link" : "hostlayout--link"} to={'photos'}>Photos</NavLink>
                </nav>
                <Outlet context={{ van }} />
            </div>
        </div>
    )
}