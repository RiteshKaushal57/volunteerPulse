import React from 'react'
import Navbar from '../src/components/Navbar'
import Hero from '../src/components/Hero'

const Home = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center'>

            <Navbar />
            <Hero />

        </div>
    )
}

export default Home
