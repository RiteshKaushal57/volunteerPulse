import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [open, setOpen] = React.useState(false)
    return (
        <nav className="w-full h-16 border-b border-gray-300 bg-white relative transition-all">
            <div className="w-full mx-auto flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 h-16">
                {/* Left: Logo */}
                <div className="flex items-center">
                    <Link to='/' className="text-2xl font-bold text-indigo-600">vP</Link>
                </div>
                {/* Center: Menu */}
                <div className="flex-1 hidden sm:flex items-center justify-center gap-10">
                    <Link to='/how-it-works' className="hover:text-indigo-600 font-semibold transition">How it works</Link>
                    <Link to='/about' className="hover:text-indigo-600 font-semibold transition">About</Link>
                    <Link to='/contact' className="hover:text-indigo-600 font-semibold transition">Contact</Link>
                </div>
                {/* Right: Auth Buttons */}
                <div className="hidden sm:flex items-center justify-end gap-2">
                    <Link to="/login" className="px-8 py-2 bg-indigo-100 hover:bg-indigo-200 transition text-black font-semibold rounded-full cursor-pointer hover:text-black/70">
                        Login
                    </Link>
                    <Link to="/register" className="px-8 py-2 font-semibold transition text-black rounded-full cursor-pointer hover:text-black/70">
                        Signup
                    </Link>
                </div>
                {/* Hamburger */}
                <button onClick={() => setOpen(!open)} aria-label="Menu" className="sm:hidden ml-2">
                    <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="21" height="1.5" rx=".75" fill="#426287" />
                        <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                        <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                    </svg>
                </button>
            </div>
            {/* Mobile Menu */}
            <div className={`${open ? 'flex' : 'hidden'} sm:hidden absolute top-[64px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm z-50 cursor-pointer`}>
                <Link to='/' className="block w-full py-2 font-semibold hover:text-black/70" onClick={() => setOpen(false)}>Home</Link>
                <Link to='/how-it-works' className="block w-full py-2 font-semibold hover:text-black/70" onClick={() => setOpen(false)}>How it works</Link>
                <Link to='/about' className="block w-full py-2 font-semibold hover:text-black/70" onClick={() => setOpen(false)}>About</Link>
                <Link to='/contact' className="block w-full py-2 font-semibold hover:text-black/70" onClick={() => setOpen(false)}>Contact</Link>
                <Link to="/login" className="w-full px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition font-semibold text-white rounded-full text-sm" onClick={() => setOpen(false)}>
                    Signin
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
