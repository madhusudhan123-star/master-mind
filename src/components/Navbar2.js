import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { googleLogout } from '@react-oauth/google';
import Login from './Auth/Login';
import logo from '../assets/logo-removebg.png';
import exit from '../assets/exit_navbar.png';

const Navbar = () => {
    const navigate = useNavigate();
    const [showLogin, setShowLogin] = useState(false);
    const userData = JSON.parse(localStorage.getItem('userData'));

    const handleLogout = () => {
        googleLogout();
        localStorage.removeItem('userData');
        navigate('/');
    };

    return (
        <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16">
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center">
                            <img className="h-8 w-auto" src={logo} alt="Logo" />
                        </Link>
                    </div>``

                    {/* Auth Section */}
                    <div className="flex items-center">
                        {userData ? (
                            <div className="flex items-center space-x-4">
                                <Link to="/profile" className="flex items-center space-x-2">
                                    <img
                                        className="h-8 w-8 rounded-full border-2 border-gray-200"
                                        src={userData.picture}
                                        alt="Profile"
                                    />
                                    <span className="hidden md:block font-medium text-gray-700">
                                        {userData.name}
                                    </span>
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="bg-red-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-600 transition-colors"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="relative">
                                {showLogin ? (
                                    <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-xl p-4 flex flex-col items-end">
                                        <img src={exit} className='w-5 ' onClick={() => setShowLogin(false)} />
                                        <Login onClose={() => setShowLogin(false)} />
                                    </div>
                                ) : (
                                    <div>
                                        <Link to="/" className=" text-black px-6 py-2 rounded-md text-sm font-medium">Home</Link>
                                        <Link to="/about" className=" text-black px-6 py-2 rounded-md text-sm font-medium ">About</Link>
                                        <Link to="/contact" className=" text-black px-6 py-2 rounded-md text-sm font-medium ">Contact</Link>
                                        <button
                                            onClick={() => setShowLogin(true)}
                                            className="bg-blue-500 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors"
                                        >
                                            Login
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;