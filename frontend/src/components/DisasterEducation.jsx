import React from 'react'
import { assets } from '../assets/assets';

const DisasterEducation = () => {
    return (

        <section className="w-full py-20 bg-blue-950" id="preparedness">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-blue-50">Disaster Preparedness & Education</h2>
                <div className="grid gap-10 md:grid-cols-3">
                    {/* Tip 1 */}
                    <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
                        <img
                            src={assets.emergencykit}
                            alt="Emergency Kit"
                            className="mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">Prepare an Emergency Kit</h3>
                        <p className="text-gray-700">
                            Keep essential supplies ready: water, food, flashlight, batteries, first aid, and important documents.
                        </p>
                    </div>
                    {/* Tip 2 */}
                    <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
                        <img
                            src={assets.evacuation}
                            alt="Evacuation Plan"
                            className="mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">Have an Evacuation Plan</h3>
                        <p className="text-gray-700">
                            Know your evacuation routes and safe zones. Practice drills with your family and community regularly.
                        </p>
                    </div>
                    {/* Tip 3 */}
                    <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
                        <img
                            src={assets.communication}
                            alt="Communication Plan"
                            className="mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">Communication Plan</h3>
                        <p className="text-gray-700">
                            Establish how to stay in touch with loved ones during disasters using phones, radios, or community networks.
                        </p>
                    </div>
                </div>
        
            </div>
        </section>
    );
}
export default DisasterEducation
