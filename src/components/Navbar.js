import React from 'react';
import logo from '../assets/logo-removebg.png';
import Login from './Login';


const Navbar = () => {
    return (
        <nav className="bg-white p-4">
            <div className="flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    <a href="/"><img src={logo} className='w-1/3' /></a>
                </div>
                <div className="space-x-4">
                    <Login />
                    {/* <a href="/signup" className="text-black hover:text-black">Sign Up</a> */}
                    {/* <a href="/login" className="text-black hover:text-black">Login</a> */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;