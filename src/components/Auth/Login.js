import React, { useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({ onClose }) => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            try {
                // Get user info from Google
                const userInfoResponse = await axios.get(
                    'https://www.googleapis.com/oauth2/v3/userinfo',
                    {
                        headers: {
                            Authorization: `Bearer ${tokenResponse.access_token}`
                        }
                    }
                );
                console.log('User Info:', userInfoResponse.data);
                // Prepare user data with actual Google data
                const userData = {
                    email: userInfoResponse.data.email,
                    name: userInfoResponse.data.name,
                    family_name: userInfoResponse.data.family_name,
                    picture: userInfoResponse.data.picture,
                    given_name: userInfoResponse.data.given_name,
                    family_name: userInfoResponse.data.family_name,
                    timestamp: new Date().toISOString(),
                    access_token: tokenResponse.access_token,
                    // Initialize additional fields
                    userName: userInfoResponse.data.email.split('@')[0],
                    age: '',
                    orgName: '',
                    stream: 'MBBS',
                    referalCode: '',
                    dailyLimit: '100'
                };

                // Store in localStorage
                localStorage.setItem('userData', JSON.stringify(userData));

                // Close modal/popup if provided
                if (onClose) onClose();

                // Redirect to profile page for first-time users
                if (!localStorage.getItem('profileComplete')) {
                    navigate('/profile');
                } else {
                    navigate('/');
                }

            } catch (error) {
                console.error('Login error:', error);
                setError('Failed to get user information');
            }
        },
        onError: (error) => {
            console.error('Login Failed:', error);
            setError('Google login failed');
        }
    });

    return (
        <div className="w-full">
            {error && (
                <div className="text-red-500 text-sm mb-2 text-center">
                    {error}
                </div>
            )}
            <button
                onClick={() => login()}
                className="flex items-center justify-center gap-2 bg-white text-gray-700 px-6 py-2 rounded-lg shadow-md hover:bg-gray-50 transition-colors w-full border border-gray-200"
            >
                <img
                    src="https://tse1.mm.bing.net/th?id=OIP.-5SJNnAv8MYwwK-tGcwe8wHaHh&w=474&h=474&c=7"
                    alt="Google"
                    className="w-5 h-5"
                />
                <span>Continue with Google</span>
            </button>
        </div>
    );
};

export default Login;
