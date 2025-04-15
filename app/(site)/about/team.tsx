"use client"
import Image from "next/image";

const teamMembers = [
    {
        name: "Bryan Wiener",
        title: "Executive Chairman",
        image: "/images/team/bryan.jpg",
    },
    {
        name: "Sarah Hofstetter",
        title: "Chief Executive Officer",
        image: "/images/team/sarah.jpg",
    },
    {
        name: "Jared Belsky",
        title: "President",
        image: "/images/team/jared.jpg",
    },
];

export default function TeamPage() {
    return (
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-16 mt-16">
            <div className="max-w-7xl mx-auto text-center">
                <p className="text-blue-600 font-semibold uppercase mb-2">Our Team</p>
                <h2 className="text-4xl font-bold text-gray-900 mb-10">Meet the Leaders</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="relative w-40 h-40 mb-4">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-full"
                                />
                                <div className="absolute bottom-0 right-0 bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-md">
                                    <span className="text-blue-500 text-xl">→</span>
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                            <p className="text-sm text-gray-500">{member.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}