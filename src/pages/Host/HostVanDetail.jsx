import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

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
                    <Link className='hostlayout--link'>Details</Link>
                    <Link className='hostlayout--link'>Pricing</Link>
                    <Link className='hostlayout--link'>Photos</Link>
                </nav>
                <h4 className='hostvandetail--category'>Name: <span>{van.name}</span></h4>
                <h4 className='hostvandetail--category'>Category: <span>{van.type}</span></h4>
                <h4 className='hostvandetail--category'>Description: <span>{van.description}</span></h4>
                <h4 className='hostvandetail--category'>Visibility: <span>public</span></h4>
            </div>
        </div>
    )
}