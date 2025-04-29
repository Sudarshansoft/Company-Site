import Image from "next/image";
import { useEffect, useState } from "react";
import CustomModal from "../CustomModal";

const teamMembers = [
    {
        name: "Kashyap Rajodiya",
        title: "CEO & Founder",
        image: "/images/team/Kashyap Rajodiya.jpeg",
        bio: "Kashyap Rajodiya is the Founder and CEO at SudarshanSoft. Over 5 years of experience, he is known to be instrumental, visionary and holds the sole responsibility of nurturing high performing businesses and future technology strategies. His leadership blends technical expertise with a deep commitment to client success."
    },
    {
        name: "Nishil Tejani",
        title: "COO & Co-Founder",
        image: "/images/team/Nishil_photo.JPG",
        bio: "At Sudarshansoft, innovation, passion, and a commitment to excellence drive everything they do. As COO and Co-founder, Nishil takes pride in leading a dynamic team focused on delivering future-ready IT solutions. Our mission is to empower businesses through technology that drives growth and transformation. We believe in building trusted partnerships and creating real value for their clients."
    },
    {
        name: "Jenis Donda",
        title: "CTO & Co-Founder",
        image: "/images/team/Jenis Donda.jpeg",
        bio: "At Sudarshansoft, our CTO Jenis Donda transforms visionary thinking into powerful technology. With a passion for innovation and hands-on leadership, He drives our tech vision, builds cutting-edge solutions, and ensures we stay ahead of the curve. He leads our engineering teams with creativity and precision, always pushing boundaries to deliver smarter, faster, and more impactful products."
    },
    {
        name: "Jenil Kukadiya",
        title: "VP & Co-Founder",
        image: "/images/team/Jenil Kukadiya.jpeg",
        bio: "Jenil Kukadiya is the Vice President of Engineering and Co-Founder at Sudarshan Soft. With a strong focus on innovation and technical excellence, he leads the engineering vision and strategy while empowering teams to build scalable, high-impact software solutions. His leadership ensures that technology and business objectives move forward in perfect sync."
    },
    {
        name: "Krunal Vaghasiya",
        title: "Director",
        image: "/images/team/Krunal Vaghasiya.jpeg",
        bio: "Krunal Vaghasiya is the Director of the US region at SudarshanSoft. With a solid background in technology and business, he leads the company’s operations across the globe, ensuring innovative and client-focused solutions across various industries."
    },
];

export default function TeamPage() {
    const [selectedMember, setSelectedMember] = useState(null);

    useEffect(() => {
        if (selectedMember) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedMember]);

    return (
        <div className="relative">
            <div className={`bg-white py-16 px-4 sm:px-6 lg:px-16 mt-16 ${selectedMember ? 'overflow-hidden max-h-screen' : ''}`}>
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-blue-600 font-semibold uppercase mb-2">Our Team</p>
                    <h2 className="text-4xl font-bold text-gray-900 mb-15">Meet the Leaders</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-3 gap-y-6">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="flex flex-col items-center text-center">
                                <div className="relative w-32 h-32 mb-2">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-full"
                                    />
                                    <button
                                        onClick={() => setSelectedMember(member)}
                                        className="absolute bottom-0 right-0 bg-white w-7 h-7 rounded-full flex items-center justify-center shadow-md"
                                    >
                                        <span className="text-blue-500 text-lg">→</span>
                                    </button>
                                </div>
                                <h3 className="text-base font-semibold text-gray-800">{member.name}</h3>
                                <p className="text-sm text-gray-500">{member.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {selectedMember && (
                <CustomModal
                    member={selectedMember}
                    onClose={() => setSelectedMember(null)}
                />
            )}
        </div>
    );
}