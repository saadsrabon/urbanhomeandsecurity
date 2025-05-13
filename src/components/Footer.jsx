import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black text-white">
            {/* Newsletter Section */}
            {/* <div className="container mx-auto px-6 py-12 border-b border-gray-800">
                <div className="flex flex-col md:flex-row md:justify-between justify-center items-center gap-6">
                    <h2 className="text-2xl md:text-3xl font-semibold">Subscribe Our Newsletter</h2>
                    <div className="flex flex-col md:flex-row gap-3">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="px-4 py-3 rounded-lg bg-amber-50 text-black   w-[250px]"
                        />
                        <button className="bg-[#D7263D] px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-all duration-300">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div> */}

            {/* Footer Navigation */}
            <div className="container mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
                {/* Logo + Description */}
                <div className="col-span-1 md:col-span-2">
                    <h1 className="text-3xl font-bold">Urban Security<span className="text-[#D7263D]">.</span></h1>
                    <p className="text-gray-400 mt-4 leading-relaxed">
                    To provide disciplined, dependable, and professional security services that protect lives, property, and peace of mind across Houston and beyond.
                    </p>
                </div>

                {/* Navigation Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Navigation</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li className='hover:text-[#D7263D] duration-200'><NavLink to="/">Home</NavLink></li>
                        <li className='hover:text-[#D7263D] duration-200'><NavLink to="/about">About Us</NavLink></li>
                        <li className='hover:text-[#D7263D] duration-200'><NavLink to="/AllServicePages">Services</NavLink></li>
                        <li className='hover:text-[#D7263D] duration-200'><NavLink to="/appointment">Contact Us</NavLink></li>
                    </ul>
                </div>

                {/* Services Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Services</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li className='hover:text-[#D7263D] duration-200'><NavLink to="/securityPlaza">Strip Plaza Security</NavLink></li>
                        <li className='hover:text-[#D7263D] duration-200'><NavLink to="/securityGuard">Security Guard Services</NavLink></li>
                        <li className='hover:text-[#D7263D] duration-200'><NavLink to="/securityHouse">House Sitting Services</NavLink></li>
                        <li className='hover:text-[#D7263D] duration-200'><NavLink to="/securityInstallation">Security Installations</NavLink></li>
                        
                    </ul>
                </div>

                {/* Resources Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Resources</h3>
                    <ul className="space-y-2 text-gray-300">
                       <a href="/"> <li className='hover:text-[#D7263D] duration-200'>Customer Stories</li></a>
                        <a href="/appointment"><li className='hover:text-[#D7263D] duration-200'>Help Center</li></a>
                        <a href="/appointment"><li className='hover:text-[#D7263D] duration-200'>Documentation</li></a>
                        <a href="/service"><li className='hover:text-[#D7263D] duration-200'>Blog & Guide</li></a>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-400">
                        Copyright © 2025 Urban Security 
                    </p>
                    <div className="flex gap-4 text-white">
                        <a href="#" className="hover:text-[#D7263D] duration-200">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="hover:text-[#D7263D] duration-200">
                            <FaTwitter />
                        </a>
                        <a href="#" className="hover:text-[#D7263D] duration-200">
                            <FaYoutube />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;