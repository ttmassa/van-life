import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import HostedVan from '../../components/HostedVan'

export default function HostVans() {
    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch('/api/host/vans')
            .then(res => res.json())
            .then(data => setVans(data.vans))
        console.log(vans)
    }, [])

    const hostVansList = vans.map(van => {
        return <HostedVan 
            key={van.id}
            id={van.id}
            image={van.imageUrl}
            name={van.name}
            price={van.price}
        />
    })

    return (
       <div className='hostvan--page'>
        <h2>Your listed vans</h2>
        {hostVansList}
       </div> 
    )
}