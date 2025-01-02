import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#14576E] text-white py-10 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Logo and Contact */}
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold">Jungle</h1>
                    <p className="text-gray-300">hello@jungleai.com</p>
                    <div className="flex space-x-4 text-sm">
                        <a href="#" className="hover:underline">
                            Login
                        </a>
                        <a href="#" className="hover:underline">
                            Sign Up
                        </a>
                    </div>
                </div>

                {/* Use Cases */}
                <div className="space-y-2">
                    <h2 className="font-bold">Use Cases</h2>
                    <ul className="space-y-1 text-gray-300">
                        <li>
                            <a href="#" className="hover:text-white">
                                AI mcq maker
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white">
                                AI quiz maker
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white">
                                AI image occlusion
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Company */}
                <div className="space-y-2">
                    <h2 className="font-bold">Company</h2>
                    <ul className="space-y-1 text-gray-300">
                        <li>
                            <a href="#" className="hover:text-white">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white">
                                Terms of Service
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Links */}
                <div className="space-y-2">
                    <ul className="space-y-1 text-gray-300">
                        <li>
                            <a href="#" className="hover:text-white">
                                Pricing
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white">
                                Affiliate
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white">
                                About
                            </a>
                        </li>
                    </ul>
                    {/* Social Icons */}
                    <div className="flex space-x-4 mt-4 text-xl">
                        <a href="#" className="hover:text-white">
                            🕺
                        </a>
                        <a href="#" className="hover:text-white">
                            📸
                        </a>
                        <a href="#" className="hover:text-white">
                            ▶️
                        </a>
                        <a href="#" className="hover:text-white">
                            🐦
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
