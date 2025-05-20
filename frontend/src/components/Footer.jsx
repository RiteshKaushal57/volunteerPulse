import React from 'react'

const Footer = () => {
    return (
        <footer class="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500">
            <div class="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
                <div class="md:max-w-96 flex flex-col gap-2">
                    <p className='text-black text-2xl font-bold'>volunteerPulse</p>
                    <p>VolunteerPulse is a fictional platform created solely for portfolio and resume practice. This project focuses on demonstrating core frontend and backend development skills and does not represent a real organization or service. The site’s design and content are intentionally minimal and do not include advanced UI/UX or Tailwind CSS styling.
                    </p>
                </div>
                <div class="flex-1 flex items-start md:justify-end gap-20">
                    <div>
                        <h2 class="font-semibold mb-5 text-gray-800">Company</h2>
                        <ul class="text-sm space-y-2">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Privacy policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="font-semibold mb-5 text-gray-800">Get in touch</h2>
                        <div class="text-sm space-y-2">
                            <p>+1-212-456-7890</p>
                            <p>riteshkaushal57@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <p class="pt-4 text-center text-xs md:text-sm pb-5">
                Copyright 2025 © volunteerPulse. All Right Reserved.
            </p>
        </footer>
    )
}

export default Footer
