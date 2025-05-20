import Hero from '../src/components/Hero'
import Testimonials from '../src/components/Testimonials'
import HowItWorks from '../src/components/HowItWorks'
import SuccessStories from '../src/components/SuccessStories'
import DisasterEducation from '../src/components/DisasterEducation'

const Home = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center'>

            <Hero />
            <Testimonials />
            <HowItWorks />
            <SuccessStories />
            <DisasterEducation />
        </div>
    )
}

export default Home
