import React from 'react'

export default function HostedVan(props) {
    return (
        <div className='hostvanlist--main'>
            <img className='hostvanlist--image' src={props.image} alt='miniature of van'/>
            <div>
                <p className='hostvanlist--name'>{props.name}</p>
                <p className='hostvanlist--price'>${props.price}/day</p>
            </div>
        </div>
    )
}