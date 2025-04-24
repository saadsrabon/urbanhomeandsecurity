import React from 'react';

const OurService = () => {
    return (
        <div className="bg-gray-900 py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="text-2xl font-semibold text-gray-400 uppercase tracking-widest mb-2">
                        Our Services
                    </h2>
                    <h3 className="text-4xl font-bold text-white">
                        Our Comprehensive Security Services
                    </h3>
                    <a
                        href="#"
                        className="inline-block mt-6 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300"
                    >
                        See All Services
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Risk Management Card */}
                    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                        <div className="h-64 bg-gray-700 flex items-center justify-center">
                            {/* Image Placeholder */}
                            <img
                                src="https://placehold.co/400x200/000/FFF?text=Risk+Mgmt&font=Montserrat"
                                alt="Risk Management"
                                className="w-full h-full object-cover"
                            />
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

                    {/* Crisis Management Card */}
                    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                        <div className="h-64 bg-gray-700 flex items-center justify-center">
                            {/* Image Placeholder */}
                            <img
                                src="https://placehold.co/400x200/000/FFF?text=Crisis+Mgmt&font=Montserrat"
                                alt="Crisis Management"
                                className="w-full h-full object-cover"
                            />
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
                    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                        <div className="h-64 bg-gray-700 flex items-center justify-center">
                            {/* Image Placeholder */}
                            <img
                                src="https://placehold.co/400x200/000/FFF?text=Security+Mgmt&font=Montserrat"
                                alt="Security Management"
                                className="w-full h-full object-cover"
                            />
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
                </div>
            </div>
        </div>
    );
};

export default OurService;