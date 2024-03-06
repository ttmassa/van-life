import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function HostVanPricing() {
    const { van } = useOutletContext()

    return (
        <div className='hostvanpricing--main'>
            <p className='hostvanpricing--price'>${van.price}<span >/day</span></p>
        </div>
    )
}