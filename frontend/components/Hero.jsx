import React from 'react'

const Hero = () => {
    return (
        <div className='w-full min-h-[70vh] flex flex-col items-center gap-10 px-10'>
            <div className='flex flex-col w-full justify-center items-center gap-5'>
                <h1 className='text-5xl font-semibold text-center'>Together, We Can Make a Difference</h1>
                <h3 className='text-3xl text-center'>Connect volunteers with those in need</h3>
            </div>
            <div className='flex gap-5'>
                <button className='flex items-center justify-center gap-2 px-8 py-2 bg-indigo-500 hover:bg-indigo-800 transition text-white rounded-full'>
                    <p>Ask for help</p>
                </button>
                <button className='flex items-center justify-center gap-2 px-8 py-2 bg-indigo-500 hover:bg-indigo-800 transition text-white rounded-full'>
                    Act as volunteer
                </button>
            </div>
        </div>
    )
}

export default Hero
