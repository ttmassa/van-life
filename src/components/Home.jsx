import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <main className='home--page'>
            <section className='home--main'>
                <h2 className='home--title'>
                    You got the travel plans, 
                    we got the travel vans.
                </h2>
                <p className='home--descr'>
                    Add adventure to your life 
                    by joining the #vanlife movement.
                    Rent the perfect van to make 
                    your perfect road trip.
                </p>
                <Link className='home--button' to="/vans">Find your van</Link>
            </section>
        </main>
    )
}