import React from 'react';
import SecurityGuard1 from "../assets/securityGuard-1.jpeg"
import SecurityGuard2 from "../assets/securityGuard-2.jpeg"
import  vandalism from "../assets/elvandalism.jpeg"

const SecurityGuard = () => {
    return (
        <section className="bg-[#F5F5F5] py-16 px-4">
            <div className="max-w-6xl mx-auto bg-[#F5F5F5]  border-[#4B4F58] rounded-2xl  transition-shadow duration-300 hover:shadow-2xl p-10">
                <h2 className="text-6xl font-bold text-[#0A1F44] mb-6 text-start">
                    Security Guard <br /> Services
                </h2>
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    {/* Content Area */}
                    <div className="space-y-4">
                        <p className="text-[#6b6b6b] text-lg leading-relaxed font-semibold">
                            Our trained and certified guards offer proactive security and
                            <span className="text-[#0A1F44] text-xl font-semibold"> 24/7 protection</span>,
                            services across industries.
                        </p>
                        <p className="text-[#6b6b6b] text-base font-semibold">
                            From construction sites to event venues, we deploy trusted personnel with full reporting and vigilance.
                        </p>
                        <a href="/appointment">
                            <button className="mt-4 bg-[#D7263D] hover:bg-[#071633] text-white font-medium px-6 py-2 rounded-xl transition duration-300 hover:cursor-pointer">
                                Make Appointment
                            </button>
                        </a>
                    </div>

                    {/* Image Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {[SecurityGuard1, SecurityGuard2].map((img, i) => (
                            <div
                                key={i}
                                className="overflow-hidden rounded-xl border border-[#ddd] shadow hover:shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105"
                            >
                                <img
                                    src={img}
                                    alt={`Strip Security ${i + 1}`}
                                    className="w-full h-60 object-cover transition duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-14 my-8">
                    <h2 className='text-2xl font-bold capitalize text-center'> We prevent electrical vandalism in the construction industry </h2>

                    <div className='py-12 rounded-md'>
                        <img className='rounded-xl' src={vandalism} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecurityGuard;