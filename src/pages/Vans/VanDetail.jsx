import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function VanDetail() {
  const params = useParams()

  const [van, setVan] = useState(null)

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then(res => res.json())
      .then(data => setVan(data.vans))
  }, [params.id])

  return (
    <div className="vandetail-page">
        {van ? (
            <div className='vandetail--container'>
              <Link 
                className='return-link' 
                to={'..'}
                relative='path'
              >
                &larr; <span>Back to all vans</span>
              </Link>
              <img className='vandetail--image' src={van.imageUrl} alt='van'/>
              <p className={`van--type ${van.type}`}>{van.type}</p>
              <h2 className='vandetail--name'>{van.name}</h2>
              <p className="vandetail--price"><span>${van.price}</span>/day</p>
              <p className='vandetail--descr'>{van.description}</p>
              <Link className='vandetail--button' to={'/vans'}>Rent this van</Link>
            </div>
        ) : <h2>Loading...</h2>}
    </div>  
  )
}