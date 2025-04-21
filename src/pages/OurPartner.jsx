import React from 'react';

const OurPartner = () => {
    return (
        <div>
            <div className="bg-black text-white py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Left Side - Image */}
                        <div className="relative">
                            <img
                                src="https://via.placeholder.com/600x400/ADD8E6/000000?Text=Security%20Team" // Replace with your actual image URL
                                alt="Security Team"
                                className="rounded-lg shadow-lg w-full h-auto object-cover"
                            />
                            {/* Red arrow overlay (optional) */}
                            <div className="absolute bottom-4 right-4 bg-red-500 text-white rounded-md p-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 000 2h3.586l-2.293 2.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Right Side - Text and Logos */}
                        <div className="text-center md:text-left">
                            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-2">
                                Our Partners
                            </h2>
                            <h3 className="text-3xl md:text-4xl font-bold mb-4">
                                Building Strong Connections
                            </h3>
                            <p className="text-gray-300 mb-8">
                                Dolor eleifend amet a imperdiet. Ultricies lacinia sollicitudin
                                viverra aliquam. Ultrices laoreet diam commodo ut nibh ac a
                                accumsan. Sit vel.
                            </p>
                            <div className="grid grid-cols-3 gap-4 md:gap-6">
                                {/* Logo 1 */}
                                <div className="flex items-center justify-center rounded-md border border-gray-700 p-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-gray-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.75 5c-1.03 0-2 .59-2 1.305a8.296 8.296 0 01-.491 1.053l-.3 1.053a3 3 0 01-3 3H6.75M12 6.253V13m0-13C13.168 5.477 14.754 5 16.25 5c1.03 0 2 .59 2 1.305a8.296 8.296 0 00.491 1.053l.3 1.053a3 3 0 003 3h-.25M12 6.253V13m0-13C15.168 5.477 16.754 5 18.25 5c1.03 0 2 .59 2 1.305a8.296 8.296 0 01.491 1.053l.3 1.053a3 3 0 003 3h-.25"
                                        />
                                    </svg>
                                    <span className="ml-2 text-gray-400">Logolpsum</span>
                                </div>
                                {/* Logo 2 */}
                                <div className="flex items-center justify-center rounded-md border border-gray-700 p-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-gray-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0010.07 4h3.86a2 2 0 001.664.89l.812 1.22A2 2 0 0118 7h.93a2 2 0 012 2v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                                        />
                                    </svg>
                                    <span className="ml-2 text-gray-400">Logolpsum</span>
                                </div>
                                {/* Logo 3 */}
                                <div className="flex items-center justify-center rounded-md border border-gray-700 p-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-gray-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                    <span className="ml-2 text-gray-400">Logolpsum</span>
                                </div>
                                {/* Logo 4 */}
                                <div className="flex items-center justify-center rounded-md border border-gray-700 p-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-gray-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 17v-2m3 2v-4m3 4v-2m3-4v-2M5 21l5-12m0 0l5 12m0 0l-9-4m9-4l-3 4m3-4l3 4"
                                        />
                                    </svg>
                                    <span className="ml-2 text-gray-400">Logolpsum</span>
                                </div>
                                {/* Logo 5 */}
                                <div className="flex items-center justify-center rounded-md border border-gray-700 p-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-gray-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                                        />
                                    </svg>
                                    <span className="ml-2 text-gray-400">Logolpsum</span>
                                </div>
                                {/* Logo 6 */}
                                <div className="flex items-center justify-center rounded-md border border-gray-700 p-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-gray-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <span className="ml-2 text-gray-400">Logolpsum</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurPartner;