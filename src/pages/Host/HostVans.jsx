import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function HostVans() {
    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch('/api/host/vans')
            .then(res => res.json())
            .then(data => setVans(data.vans))
        console.log(vans)
    }, [])

    return (
       <div>
            <h1>Host Vans List</h1>
       </div> 
    )
}