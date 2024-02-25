import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <header>
            <h1 className='header--title'>#VANLIFE</h1>
            <nav className='header--nav'>
                <Link className='header--link' to="/">Home</Link>
                <Link className='header--link' to="/about">About</Link>
            </nav>
        </header>
    )
}