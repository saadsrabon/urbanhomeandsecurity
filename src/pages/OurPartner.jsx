import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import PartnerImage from '../assets/Parterner.jpg'

const OurPartnerCompany = [
    { name: "Ardent Health Services", type: "Healthcare" },
    { name: "Lifespan Health System", type: "Healthcare" },
    { name: "CoorsTek", type: "Manufacturing" },
    { name: "Carpenter Technology", type: "Manufacturing" },
    { name: "XPO Logistics", type: "Logistics" },
    { name: "Ryder System, Inc.", type: "Logistics" }
];

const OurPartner = () => {
    return (
        <div className="mt-15 py-16 md:py-24 border-t border-gray-200 transition-all duration-300 hover:bg-gray-50/50 rounded-md px-2  hover:shadow-xl">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4 sm:px-6 lg:px-8">
                {/* Left Image Section */}
                <div className="relative rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <img
                        src={PartnerImage}
                        alt="Security Team"
                        className="w-full h-auto rounded-lg object-cover"
                    />
                    <div className="absolute bottom-4 left-4 bg-red-600 p-3 rounded-full cursor-pointer hover:scale-110 transition-transform duration-200 shadow-md hover:shadow-lg">
                        <ArrowUpRight className="text-white w-6 h-6" />
                    </div>
                </div>

                {/* Right Text Section */}
                <div className='space-y-6'>
                    <p className="text-xl font-semibold mb-8 text-[#00A3FF]">Our Partners</p>
                    <h2 className="text-4xl sm:text-4xl lg:text-6xl font-bold font-monst leading-tight mb-4
                                   bg-gradient-to-r from-gray-900 to-black text-transparent bg-clip-text
                                   animate-text-gradient">
                        Building Strong <br /> Connections
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg">
                        Choosing Urban Security means partnering with a company rooted in discipline, integrity, and unwavering commitment to safety. As a veteran-owned business, we bring a mission-ready mindset to every site we secure—residential, commercial, or event-based.
                    </p>

                    <div className='grid md:grid-cols-2 grid-cols-1 gap-4 hover:cursor-pointer'>

                        {
                            OurPartnerCompany.map((Company, index) => (
                                <div
                                    key={index}
                                    className="flex items-center space-x-3 py-3 border-t border-gray-200
                                             transition-all duration-300 
                                             hover:bg-gray-50/50 rounded-md px-2 shadow-md hover:shadow-xl"
                                >
                                    <div key={index} className="flex items-start gap-4 p-4 rounded-lg shadow-md hover:shadow-xl hover:bg-[#F9FBFF] transition-all duration-300 ">
                                        <span className="text-xs text-gray-500 ">

                                            {Company.name.charAt(0)}
                                        </span>
                                    </div>
                                    <span className="text-lg font-medium text-[#0A1F44] hover:text-blue-700 transition-colors">
                                        {Company.name}
                                    </span>
                                </div>
                            ))}

                    </div>
                </div>
            </div>
            <style jsx global>{`
                @keyframes animate-text-gradient {
                  0% { background-position: 0% 50%; }
                  50% { background-position: 100% 50%; }
                  100% { background-position: 0% 50%; }
                }
                .animate-text-gradient {
                    background-size: 200% 200%;
                    animation: animate-text-gradient 5s ease infinite;
                }
                .group:hover .animate-text-gradient {
                    animation: none;
                }
            `}</style>
        </div>
    );
};

export default OurPartner;
