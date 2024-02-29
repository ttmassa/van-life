import React from 'react'

export default function Van(props) {
    return (
        <div className='van--container'>
            <img className='van--image' src={props.image} alt='Photography of a van'/>
            <div className='van--info'>
                <h2 className='van--name'>{props.name}</h2>
                <div>
                    <h2 className='van--price'>${props.price}</h2>
                    <p className='van--day'>/day</p>
                </div>
            </div>
            <p className='van--type'>{props.type}</p>
        </div>
    )
}