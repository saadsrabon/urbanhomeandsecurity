import React from "react";

const teamMembers = [
    {
        name: "John Smith",
        position: "Chief Security Officer",
        image: "https://jagaen.tokotema.com/wp-content/uploads/2023/10/successful-bearded-freelance-businessman-looks-at-2022-12-08-04-13-21-utc-1-150x150.jpg",
        icon: "https://cdn-icons-png.flaticon.com/512/733/733579.png"
    },
    {
        name: "Emily Davis",
        position: "Head of Security Training",
        image: "https://jagaen.tokotema.com/wp-content/uploads/2023/10/portrait-of-serious-asian-businessman-man-outside-2022-12-08-04-05-53-utc-1-150x150.jpg",
        icon: "https://cdn-icons-png.flaticon.com/512/733/733579.png"
    },
    {
        name: "Michael Turner",
        position: "Lead Security Investigator",
        image: "https://jagaen.tokotema.com/wp-content/uploads/2023/10/portrait-happy-confident-smart-handsome-business-l-2023-03-27-18-33-04-utc-1-150x150.jpg",
        icon: ""
    },
];

const OurTeam = () => {
    return (
        <div className="py-20 px-4 text-center bg-[#101828] space-y-12">
            <p className="text-xl font-semibold text-[#F5F5F5]">Urban  Team</p>
            <h2 className="text-5xl font-bold my-4 font-monst text-[#F5F5F5]">Our Professional Team</h2>
            <p className="max-w-2xl mx-auto text-[#8f8f8f] text-lg">
                To provide disciplined, dependable, and professional security services that protect lives, property, and peace of mind across Houston and beyond.
            </p>

            <div className="flex justify-center items-center gap-8 mt-10 flex-wrap">
                {teamMembers.map((member, index) => (
                    <div key={index} className="text-center">
                        <div className="relative w-80 h-80 mx-auto rounded-full overflow-hidden mt-16">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover rounded-full"
                            />
                            <div className="absolute bottom-0 right-0 transform translate-x-2 translate-y-2 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
                                <img src={member.icon} alt="Twitter" className="w-5 h-5" />
                            </div>
                        </div>
                        <h3 className="mt-4 text-lg text-[#F5F5F5] font-semibold">{member.name}</h3>
                        <p className="text-sm text-gray-500 mt-1">{member.position}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurTeam;
