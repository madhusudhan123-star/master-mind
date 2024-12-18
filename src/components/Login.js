import React, { useState } from 'react';
import { useGoogleLogin, googleLogout } from '@react-oauth/google';

function Login() {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState(null);

    // Google Login Handler
    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            try {
                setLoading(true);

                // Store token response
                setUserData({
                    access_token: tokenResponse.access_token,
                    timestamp: new Date().toISOString()
                });

                /* Commented API call for later use
                const res = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
                    headers: {
                        Authorization: `Bearer ${tokenResponse.access_token}`,
                    },
                });
                */

                // Simulate user data for development
                const mockUserData = {
                    email: "user@example.com",
                    name: "Test User",
                    picture: "https://placeholder.com/150",
                };

                setProfile(mockUserData);

                /* Commented backend API call for later use
                await axios.post('https://your-backend.com/api/auth/google', {
                    google_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
                    email: userData.email,
                    name: userData.name,
                    picture: userData.picture,
                    access_token: tokenResponse.access_token,
                });
                */

                console.log('Login successful:', mockUserData);
            } catch (error) {
                console.error('Login error:', error);
            } finally {
                setLoading(false);
            }
        },
        onError: (error) => {
            console.error('Login Failed:', error);
            setLoading(false);
        },
    });

    // Logout Handler
    const logout = () => {
        googleLogout();
        setProfile(null);
        setUserData(null);
    };

    return (
        <div className="flex items-center justify-center bg-gray-100">
            <div >
                {profile ? (
                    <div className="text-center">
                        <img
                            src={profile.picture}
                            alt="User"
                            className="w-20 h-20 rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">Welcome, {profile.name}</h3>
                        <p className="text-gray-600 mb-4">{profile.email}</p>
                        <button
                            onClick={logout}
                            className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition-colors"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <button
                        onClick={() => login()}
                        disabled={loading}
                        className="w-full bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-colors disabled:bg-gray-400"
                    >
                        {loading ? 'Connecting...' : ' Google'}
                    </button>
                )}

                {/* Debug information - remove in production */}
                {userData && (
                    <div className="mt-4 p-4 bg-gray-100 rounded text-sm">
                        <p>Token received at: {userData.timestamp}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Login;
