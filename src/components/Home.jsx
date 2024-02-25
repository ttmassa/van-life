import React from 'react'
import Header from './Header'

export default function Home() {
    return (
        <main className='home--container'>
            <Header />
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
                <button className='home--button'>Find your van</button>
            </section>
        </main>
    )
}