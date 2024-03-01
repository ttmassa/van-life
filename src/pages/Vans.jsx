import React from 'react'
import { useState, useEffect } from 'react'
import Van from '../components/Van'

export default function Vans() {
    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch('/api/vans')
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const vansList = vans.map(van => (
        <Van
            key={van.id}
            id={van.id}
            image={van.imageUrl}
            name={van.name}
            price={van.price}
            type={van.type}
        />
    ))

    return (
        <main className='van--page'>
            <h2 className='van--title'>Explore our Van options</h2>
            <div className='van--section'>
                {vansList}
            </div>
        </main>
    )
}