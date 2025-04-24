import React from 'react';
import Service1 from '../assets/service-1.jpg'
import Service2 from '../assets/service-2.jpg'
import Service3 from '../assets/service-3.jpg'

const OurService = () => {
    return (
        <div className="bg-gray-900 py-16 md:py-24 mt-20">
            <div className="container mx-auto px-4">
                <div className="mb-12 flex justify-between items-center">
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
                            href="#"
                            className="inline-block mt-6 bg-red-500 hover:bg-white hover:text-red-500 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            See All Services
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Risk  Card */}
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
                            <h4 className="text-xl font-semibold text-white mb-4">Risk Management</h4>
                            <p className="text-gray-400 text-base">
                                Scelerisque pulvinar morbi felis odio ut mauris diam sit. Gravida
                                faucibus integer at porta vitae diam.
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

                    {/* Crisis Card */}
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
                            <h4 className="text-xl font-semibold text-white mb-4">Crisis Management</h4>
                            <p className="text-gray-400 text-base">
                                Scelerisque pulvinar morbi felis odio ut mauris diam sit. Gravida
                                faucibus integer at porta vitae diam.
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

                    {/* Security Management Card */}
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
                            <h4 className="text-xl font-semibold text-white mb-4">Security Management</h4>
                            <p className="text-gray-400 text-base">
                                Scelerisque pulvinar morbi felis odio ut mauris diam sit. Gravida
                                faucibus integer at porta vitae diam.
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
                </div>
            </div>
        </div>
    );
};

export default OurService;