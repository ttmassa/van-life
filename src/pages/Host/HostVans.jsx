import React from 'react'
import { useState, useEffect } from 'react'
import HostedVan from '../../components/HostedVan'

export default function HostVans() {
  const [vans, setVans] = useState([])

  useEffect(() => {
    let isMounted = true

    const fetchData = async () => {
      try {
        const response = await fetch('/api/host/vans')
        const data = await response.json()

        if (isMounted) {
          setVans(data.vans)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()

    return () => {
      isMounted = false
    }
  }, []) 
  
  const hostVansList = vans.map((van) => (
    <HostedVan
      key={van.id}
      id={van.id}
      image={van.imageUrl}
      name={van.name}
      price={van.price}
    />
  ))

  return (
    <div className='hostvan--page'>
      <h2>Your listed vans</h2>
      {hostVansList}
    </div>
  )
}
