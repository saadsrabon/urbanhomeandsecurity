import React from 'react';


import {
    ShieldCheck,
    Users,
    ClipboardCheck,
    Star,
    Settings,
    Briefcase,
} from 'lucide-react';
import OurPartner from './OurPartner';


const services = [
    { icon: <ShieldCheck className="text-white" size={20} />, title: "Expertise in Security" },
    { icon: <Users className="text-white" size={20} />, title: "Highly Trained Team" },
    { icon: <ClipboardCheck className="text-white" size={20} />, title: "Proven Track Record" },
    { icon: <Star className="text-white" size={20} />, title: "Security Guaranteed" },
    { icon: <Settings className="text-white" size={20} />, title: "Modern Equipment" },
    { icon: <Briefcase className="text-white" size={20} />, title: "Years of Experience" },
];

const WhyChooseUS = () => {
    return (
        <section className="px-16 py-16 max-w-7xl mx-auto  rounded-md mb-40 mt-40 ">
            <h2 className="text-5xl text-[#0A1F44] font-bold mb-16 font-monst">Why <span className='text-[#00A3FF]'>Choose</span> Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-10 border-t border-b py-10 ">
                {services.map((service, index) => (
                    <div key={index} className="flex justify-center items-center gap-3">
                        <div className="bg-[#0A1F44] p-3 rounded-md">
                            {service.icon}
                        </div>
                        <div key={index} className="flex justify-start items-start gap-4 p-4 rounded-lg shadow-md hover:shadow-xl hover:bg-[#F9FBFF] transition-all duration-300      ">
                            <h4 className="font-semibold text-2xl mb-1 text-[#00A3FF]">{service.title}</h4>
                            <p className="text-sm text-[#0A1F44]">Scelerisque pulvinar morbi felis odio ut mauris diam sit.</p>
                        </div>
                    </div>
                ))}
            </div>

            <OurPartner></OurPartner>

        </section>
    );
};

export default WhyChooseUS;