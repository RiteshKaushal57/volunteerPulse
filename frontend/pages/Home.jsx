import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

const Home = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center gap-10'>

            <Navbar />
            <Hero />

        </div>
    )
}

export default Home
