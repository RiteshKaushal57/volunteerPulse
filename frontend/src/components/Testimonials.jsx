import React from 'react'

const Testimonials = () => {
    return (
        <div className='w-full py-24 flex flex-col md:flex-row items-center justify-center md:gap-40 md:py-24 gap-15 px-10'>
            <div className='flex flex-col items-center'>
                <p className='text-2xl font-semibold'>63,73,938+</p>
                <p className='text-2xl font-bold'>Lives impacted</p>
            </div>
            <div className='flex flex-col items-center'>
                <p className='text-2xl font-semibold'>31,934+</p>
                <p className='text-2xl font-bold'>Volunteers</p>
            </div>
            <div className='flex flex-col items-center'>
                <p className='text-2xl font-semibold'>35</p>
                <p className='text-2xl font-bold'>Countries served</p>
            </div>

        </div>
    )
}

export default Testimonials
