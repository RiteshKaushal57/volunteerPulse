import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContextProvider } from '../context/Context';

const DEFAULT_PROFILE_IMAGE = "https://ui-avatars.com/api/?name=User&background=4F46E5&color=fff";

const Navbar = () => {
    const [open, setOpen] = useState(false); // mobile nav menu
    const [profileDropdownOpen, setProfileDropdownOpen] = useState(false); // profile dropdown
    const profileRef = useRef();
    const { isLoggedIn, user, logout } = useContextProvider();

    // Close profile dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setProfileDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <nav className="w-full h-16 border-b border-gray-300 bg-white relative transition-all">
            <div className="w-full mx-auto flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 h-16">
                {/* Left: Logo */}
                <div className="flex items-center">
                    <Link to='/' className="text-2xl font-bold text-indigo-600">vP</Link>
                </div>
                {/* Center: Menu */}
                <div className="flex-1 hidden sm:flex items-center justify-center gap-10">
                    <Link to='/blogs' className="hover:text-indigo-600 font-semibold transition">Blogs</Link>
                    <Link to='/about' className="hover:text-indigo-600 font-semibold transition">About</Link>
                    <Link to='/contact' className="hover:text-indigo-600 font-semibold transition">Contact</Link>
                </div>
                {/* Right: Profile or Auth */}
                <div className='flex items-center'>
                    {isLoggedIn ? (
                        // Profile picture and dropdown (all screen sizes)
                        <div className="relative" ref={profileRef}>
                            <img
                                src={user?.photo || DEFAULT_PROFILE_IMAGE}
                                alt='profile'
                                className="w-10 h-10 rounded-full object-cover border-2 border-indigo-400 cursor-pointer"
                                onClick={() => setProfileDropdownOpen(prev => !prev)}
                            />
                            {profileDropdownOpen && (
                                <ul className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded shadow-md py-1 z-50">
                                    <li className="px-4 py-2 text-gray-700">{user?.name || "User"}</li>
                                    <li>
                                        <Link
                                            to="/profile"
                                            className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                            onClick={() => setProfileDropdownOpen(false)}
                                        >
                                            My Profile
                                        </Link>
                                    </li>
                                    <li
                                        className="px-4 py-2 hover:bg-red-500/10 text-red-500 cursor-pointer"
                                        onClick={() => {
                                            console.log('logout is clicked');

                                            logout();
                                            setProfileDropdownOpen(false);
                                        }}
                                    >
                                        Logout
                                    </li>
                                </ul>
                            )}
                        </div>
                    ) : (
                        <>
                            {/* Signin button for desktop */}
                            <div className="hidden sm:flex items-center justify-end gap-2">
                                <Link to="/signin" className="px-8 py-2 bg-indigo-100 hover:bg-indigo-200 transition text-black font-semibold rounded-full cursor-pointer hover:text-black/70">
                                    Signin
                                </Link>
                            </div>
                            {/* Hamburger menu for mobile */}
                            <button onClick={() => setOpen(!open)} aria-label="Menu" className="ml-2 sm:hidden">
                                <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="21" height="1.5" rx=".75" fill="#426287" />
                                    <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                                    <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                                </svg>
                            </button>
                        </>
                    )}
                </div>
            </div>
            {/* Mobile Navigation Links (only for not logged in) */}
            {!isLoggedIn && (
                <div className={`${open ? 'flex' : 'hidden'} sm:hidden absolute top-[64px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm z-50 cursor-pointer`}>
                    <Link to='/' className="block w-full py-2 font-semibold hover:text-black/70" onClick={() => setOpen(false)}>Home</Link>
                    <Link to='/blogs' className="block w-full py-2 font-semibold hover:text-black/70" onClick={() => setOpen(false)}>Blogs</Link>
                    <Link to='/about' className="block w-full py-2 font-semibold hover:text-black/70" onClick={() => setOpen(false)}>About</Link>
                    <Link to='/contact' className="block w-full py-2 font-semibold hover:text-black/70" onClick={() => setOpen(false)}>Contact</Link>
                    <Link to="/signin" className="w-full px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition font-semibold text-white rounded-full text-sm" onClick={() => setOpen(false)}>
                        Signin
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
