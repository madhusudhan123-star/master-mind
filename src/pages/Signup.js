import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { googleLogout } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const Signup = () => {
    const [show, setShow] = useState(false)
    const [isSignup, setIsSignup] = useState(true);
    const navigate = useNavigate();

    const toggleCard = () => setIsSignup((prev) => !prev);
    const togglePasswordVisibility = () => {
        setShow(!show);
    };

    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            try {
                const userInfo = await axios.get(
                    'https://www.googleapis.com/oauth2/v3/userinfo',
                    {
                        headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
                    }
                );
                localStorage.setItem('userData', JSON.stringify(userInfo.data));
                navigate('/');
            } catch (error) {
                console.log(error);
            }
        },
    });

    return (
        <div className="bg-gray-900 h-[120vh] py-10 flex justify-center items-center">
            <div className="w-[400px] h-full  perspective">
                <div className={`flip-card ${isSignup ? "flipped" : ""}`}>
                    {/* Signup Card */}
                    <div className="flip-card-front bg-white rounded-xl p-8 flex flex-col gap-6">
                        <div className="text-center">
                            <h1 className="font-bold text-4xl">Create an account</h1>
                        </div>
                        <form className="w-full flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <p className="font-mono text-xl">Email</p>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="border-2 p-3 rounded-md border-black border-solid"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="font-mono text-xl">Password</p>
                                <div className="relative">
                                    <input
                                        type={show ? "text" : "password"}
                                        placeholder="Password"
                                        className="border-2 w-full p-3 rounded-md border-black border-solid"
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
                                    >
                                        {show ? "Hide" : "Show"}
                                    </button>
                                </div>
                            </div>
                            <button className="bg-[#34A069] font-bold text-xl text-white py-3 rounded-full mt-4">
                                Create Account
                            </button>
                        </form>

                        <div className="w-full flex items-center gap-3">
                            <div className="h-[1px] flex-1 bg-gray-300"></div>
                            <p className="text-gray-500">OR</p>
                            <div className="h-[1px] flex-1 bg-gray-300"></div>
                        </div>

                        <button 
                            onClick={() => login()}
                            className="flex items-center justify-center gap-2 border-2 border-gray-300 rounded-full py-2 hover:bg-gray-50 transition-colors"
                        >
                            <img
                                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                                alt="Google"
                                className="w-6"
                            />
                            <span>Continue with Google</span>
                        </button>

                        <div className="text-center">
                            <p className="text-gray-600">Already have an account?</p>
                            <button className="text-green-500 font-semibold" onClick={toggleCard}>
                                Sign In
                            </button>
                        </div>
                    </div>

                    {/* Login Card */}
                    <div className="flip-card-back bg-white rounded-xl p-8 flex flex-col gap-6">
                        <div className="text-center">
                            <h1 className="font-bold text-4xl">Sign in</h1>
                            <p className="text-gray-600">to MasterMind account</p>
                        </div>
                        
                        <form className="w-full flex flex-col gap-4">
                            {/* Same input structure as signup */}
                            <div className="flex flex-col gap-2">
                                <p className="font-mono text-xl">Email</p>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="border-2 p-3 rounded-md border-black border-solid"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="font-mono text-xl">Password</p>
                                <div className="relative">
                                    <input
                                        type={show ? "text" : "password"}
                                        placeholder="Password"
                                        className="border-2 w-full p-3 rounded-md border-black border-solid"
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
                                    >
                                        {show ? "Hide" : "Show"}
                                    </button>
                                </div>
                            </div>
                            <button className="bg-[#34A069] font-bold text-xl text-white py-3 rounded-full mt-4">
                                Sign In
                            </button>
                        </form>

                        <div className="w-full flex items-center gap-3">
                            <div className="h-[1px] flex-1 bg-gray-300"></div>
                            <p className="text-gray-500">OR</p>
                            <div className="h-[1px] flex-1 bg-gray-300"></div>
                        </div>

                        <button 
                            onClick={() => login()}
                            className="flex items-center justify-center gap-2 border-2 border-gray-300 rounded-full py-2 hover:bg-gray-50 transition-colors"
                        >
                            <img
                                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                                alt="Google"
                                className="w-6"
                            />
                            <span>Continue with Google</span>
                        </button>

                        <div className="text-center">
                            <p className="text-gray-600">Don't have an account?</p>
                            <button className="text-green-500 font-semibold" onClick={toggleCard}>
                                Sign Up
                            </button>
                            <button className="text-green-500 block mx-auto mt-2">
                                Forgot Password?
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;