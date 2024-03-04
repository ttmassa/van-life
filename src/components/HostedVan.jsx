import React from 'react'
import { Link } from 'react-router-dom'

export default function HostedVan(props) {
    return (
        <Link className='hostvanlist--main'>
            <img className='hostvanlist--image' src={props.image} alt='miniature of van'/>
            <div>
                <p className='hostvanlist--name'>{props.name}</p>
                <p className='hostvanlist--price'>${props.price}/day</p>
            </div>
        </Link>
    )
}