import React from 'react';
import Service1 from '../assets/service-1.jpg'
import Service2 from '../assets/service-2.jpg'
import Service3 from '../assets/service-3.jpg'
import SecurityInstallation from '../assets/securityInstallation-1.jpeg'

const OurService = () => {
    return (
        <div className="bg-gray-900 py-16 md:py-24 mt-20">
            <div className="container mx-auto px-4">
                <div className="mb-12 flex flex-col md:flex-row justify-between items-center">
                    {/* text */}
                    <div className='space-y-3'>
                        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-2">
                            Our Services
                        </h2>
                        <h3 className="text-5xl font-bold font-monst text-white">
                            Our Comprehensive
                        </h3>
                        <h3 className="text-5xl font-bold font-monst text-white ">
                            <span className='text-[#00A3FF]'>Security</span> Services
                        </h3>
                    </div>
                    {/* Button */}
                    <div>
                        <a
                            href="/AllServicePages"
                            className="inline-block mt-6 bg-red-500 hover:bg-white hover:text-red-500 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            See All Services
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {/* Security Guard */}
                    <a href="/securityGuard">
                        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                            {/* image */}
                            <div className="h-64 bg-gray-700 relative group overflow-hidden">
                                <img
                                    src={Service1}
                                    alt="Risk Management"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
                            </div>
                            <div className="p-6">
                                <h4 className="text-xl font-semibold text-white mb-4 capitalize">Security Guards - Construction sites and vacant buildings</h4>
                                <p className="text-gray-400 text-base">
                                    We identify vulnerabilities early and craft smart strategies to protect your assets, reputation, and operations.
                                </p>
                                {/* Red Arrow Icon */}
                                <div className="flex justify-end mt-4">
                                    <svg
                                        className="h-6 w-6 text-red-500"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </a>

                    {/* Security Plaza */}
                    <a href="/securityPlaza">
                        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                            {/* image */}
                            <div className="h-64 bg-gray-700 relative group overflow-hidden">
                                <img
                                    src={Service2}
                                    alt="Risk Management"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
                            </div>
                            <div className="p-6">
                                <h4 className="text-xl font-semibold text-white mb-4">Security Plaza</h4>
                                <p className="text-gray-400 text-base">
                                    We specialize in providing safety and monitoring for strip plazas with real-time alerts, and rapid response.
                                </p>
                                {/* Red Arrow Icon */}
                                <div className="flex justify-end mt-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-red-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </a>

                    {/* Security House */}
                    <a href="/securityHouse">
                        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                            {/* image */}
                            <div className="h-64 bg-gray-700 relative group overflow-hidden">
                                <img
                                    src={Service3}
                                    alt="Risk Management"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
                            </div>
                            <div className="p-6">
                                <h4 className="text-xl font-semibold text-white mb-4">Security House</h4>
                                <p className="text-gray-400 text-base">
                                    Going away? We watch over your home, pick up mail,
                                    water plants, and keep everything safe and secure.
                                </p>
                                {/* Red Arrow Icon */}
                                <div className="flex justify-end mt-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-red-500"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </a>

                    {/* Security Installations */}
                    <a href="/securityInstallation">
                        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                            {/* image */}
                            <div className="h-64 bg-gray-700 relative group overflow-hidden">
                                <img
                                    src={SecurityInstallation}
                                    alt="Risk Management"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
                            </div>
                            <div className="p-6">
                                <h4 className="text-xl font-semibold text-white mb-4">Security Installations</h4>
                                <p className="text-gray-400 text-base">
                                    We install the latest CCTV, Alarms, Motion sensors,
                                    and full smart security systems tailored to your needs.
                                </p>
                                {/* Red Arrow Icon */}
                                <div className="flex justify-end mt-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-red-500"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default OurService;