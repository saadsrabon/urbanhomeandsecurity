import React from 'react';
import {
    ShieldCheck,
    Users,
    ClipboardCheck,
    Star,
    Settings,
    Briefcase,
} from 'lucide-react';


const services = [
    { icon: <ShieldCheck className="text-white" size={20} />, title: "Expertise in Security" },
    { icon: <Users className="text-white" size={20} />, title: "Highly Trained Team" },
    { icon: <ClipboardCheck className="text-white" size={20} />, title: "Proven Track Record" },
    { icon: <Star className="text-white" size={20} />, title: "Security Guaranteed" },
    { icon: <Settings className="text-white" size={20} />, title: "Modern Equipments" },
    { icon: <Briefcase className="text-white" size={20} />, title: "Years of Experience" },
];

const WhyChooseUS = () => {
    return (
        <section className="px-4 py-16 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-10 font-monst">Why Choose Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6 border-t border-b py-10">
                {services.map((service, index) => (
                    <div key={index} className="flex items-start gap-4">
                        <div className="bg-black p-3 rounded-md">
                            {service.icon}
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg mb-1">{service.title}</h4>
                            <p className="text-sm text-gray-500">Scelerisque pulvinar morbi felis odio ut mauris diam sit.</p>
                        </div>
                    </div>
                ))}
            </div>

                

        </section>
    );
};

export default WhyChooseUS;