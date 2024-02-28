import React from 'react'
import { Link } from 'react-router-dom'
import carImage from '../assets/about-car.png'

export default function About() {
    return (
        <main className='about--page'>
                <img className='about--image' alt='Man sitting on a car' src={carImage}/>
            <div className='about--container'>
                <h1 className='about--title'>
                    Don't squeeze in a sedan when 
                    you could relax in a van.
                </h1>
                <p className='about--descr'>
                    Our mission is to enliven your road 
                    trip with the perfect travel van 
                    rental. Our vans are recertified 
                    before each trip to ensure your 
                    travel plans can go off without 
                    a hitch.
                    <br/>
                    (Hitch costs extra 😉)
                    <br/> <br/>
                    Our team is full of vanlife 
                    enthusiasts who know firsthand 
                    the magic of touring the world 
                    on 4 wheels.
                </p>
                <section className='about--explore-section'>
                    <div>
                        <h2 className='about--explore-title'>
                            Your destination is waiting.
                            <br/>
                            Your van is ready.
                        </h2>
                    </div>
                    <Link to="/vans" className='about--explore-button'>Explore our vans</Link>
                </section>
            </div>
        </main>
    )
}