import React, { useState } from 'react';
import { Info } from "lucide-react";

const Appointment = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (


        <div className="min-h-screen bg-[#F5F5F5] flex flex-col items-center justify-center px-4 py-12">

            <div className='mb-15'>
                {/* Text section */}

                <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] text-center mb-12">
                    Make an Appointment
                </h2>

                <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto space-y-12 md:space-y-0 relative">
                    {/* Step 1 */}
                    <div className="flex-1 text-center relative">
                        <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-[#0A1F44] text-white font-semibold text-xl rounded-full mx-auto z-10">
                            1
                        </div>
                        <h3 className="text-[#0A1F44] font-semibold text-lg mt-4">
                            Select Date / Time slot
                        </h3>
                        <p className="text-[#4B4F58] mt-2 text-sm">
                            Choose the type of service and your staff along with the time slot
                        </p>
                    </div>

                    {/* Dotted Line */}
                    <div className="hidden md:block absolute top-6 left-1/4 w-1/2 border-t border-dashed border-[#4B4F58] z-0"></div>

                    {/* Step 2 */}
                    <div className="flex-1 text-center relative">
                        <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 border-2 border-[#4B4F58] text-[#4B4F58] font-semibold text-xl rounded-full mx-auto z-10 bg-[#FFFFFF]">
                            2
                        </div>
                        <h3 className="text-[#0A1F44] font-semibold text-lg mt-4">
                            Fill Contact Details
                        </h3>
                        <p className="text-[#4B4F58] mt-2 text-sm">
                            Fill in your personal details and brief description of your treatment needed
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="flex-1 text-center relative">
                        <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 border-2 border-[#4B4F58] text-[#4B4F58] font-semibold text-xl rounded-full mx-auto z-10 bg-[#FFFFFF]">
                            3
                        </div>
                        <h3 className="text-[#0A1F44] font-semibold text-lg mt-4">
                            Check Details
                        </h3>
                        <p className="text-[#4B4F58] mt-2 text-sm">
                            Proof read the details about the chosen staff, service & personal details
                        </p>
                    </div>
                </div>

                {/* Info Box */}
                <div className="mt-12 max-w-4xl mx-auto bg-[#B3E5FC] text-[#0A1F44] flex items-center p-4 rounded border-l-4 border-[#0A1F44]">
                    <Info className="w-5 h-5 mr-3" />
                    <p className="text-sm font-medium">All fields are mandatory</p>
                </div>
            </div>

            {/* Form section */}
            <div>
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-xl bg-white shadow-lg rounded-2xl p-8 space-y-6  border-[#4B4F58]"
                >
                    <h2 className="text-5xl font-bold text-[#0A1F44] text-center mb-10">
                        Book an Appointment
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0A1F44]"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0A1F44]"
                        />

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0A1F44]"
                        />

                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0A1F44]"
                        />

                        <input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0A1F44]"
                        />

                        <textarea
                            name="message"
                            rows="4"
                            placeholder="Additional Notes (Optional)"
                            value={formData.message}
                            onChange={handleChange}
                            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0A1F44] md:col-span-2"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#D7263D] hover:bg-[#A31B2A] text-white py-3 rounded-lg font-semibold transition duration-300"
                    >
                        Confirm Appointment
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Appointment;
