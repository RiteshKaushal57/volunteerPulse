import React from 'react'

const HowItWorks = () => {
  return (
    <section className="w-full py-20 bg-gray-50" id="how-it-works">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">How VolunteerPulse Works</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Step 1 */}
        <div className="flex flex-col items-center bg-white shadow rounded-lg p-6 w-full md:w-1/3">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 mb-4">
            <span className="text-2xl font-bold text-blue-600">1</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Post a Calamity</h3>
          <p className="text-gray-600 text-center">
            Anyone affected by a natural calamity can post details and request help, making their needs visible to the community.
          </p>
        </div>
        {/* Step 2 */}
        <div className="flex flex-col items-center bg-white shadow rounded-lg p-6 w-full md:w-1/3">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-100 mb-4">
            <span className="text-2xl font-bold text-green-600">2</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Volunteer Steps Up</h3>
          <p className="text-gray-600 text-center">
            Volunteers browse posts and offer help to those in need, connecting directly through the platform.
          </p>
        </div>
        {/* Step 3 */}
        <div className="flex flex-col items-center bg-white shadow rounded-lg p-6 w-full md:w-1/3">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-yellow-100 mb-4">
            <span className="text-2xl font-bold text-yellow-600">3</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Get Help & Support</h3>
          <p className="text-gray-600 text-center">
            The affected person receives timely assistance from volunteers, ensuring faster and more effective disaster response.
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default HowItWorks
