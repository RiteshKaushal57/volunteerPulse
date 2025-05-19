import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
    return (
        <div
            className="w-full min-h-screen flex flex-col items-center justify-start pt-24 md:pt-40 px-10 bg-cover bg-center bg-no-repeat relative"
            style={{
                backgroundImage: `url(${assets.heroImage})`,
            }}
        >
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-black/50 z-0"></div>

            <div className="flex flex-col items-center gap-5 z-10">
                <h1 className="text-5xl font-semibold text-center text-white drop-shadow-lg">
                    Together, We Can Make a Difference
                </h1>
                <h3 className="text-3xl text-center text-white drop-shadow-lg">
                    Connect volunteers with those in need
                </h3>
            </div>
            <div className="flex gap-5 z-10 mt-8">
                <button className="flex items-center justify-center gap-2 px-8 py-2 bg-indigo-500 hover:bg-indigo-800 font-semibold transition text-white rounded-full">
                    <p>Ask for help</p>
                </button>
                <button className="flex items-center justify-center gap-2 px-8 py-2 bg-indigo-500 hover:bg-indigo-800 font-semibold transition text-white rounded-full">
                    Act as volunteer
                </button>
            </div>
        </div>
    )
}

export default Hero
