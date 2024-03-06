import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function HostVanPhotos() {
    const { van } = useOutletContext()

    return (
        <div>
            <img className='hostvanphotos--image' src={van.imageUrl} alt='van'/>
        </div>
    )
}