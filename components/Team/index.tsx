import Image from "next/image";
import { useEffect, useState } from "react";
import CustomModal from "../CustomModal";

const teamMembers = [
    {
        name: "Bryan Wiener",
        title: "Executive Chairman",
        image: "/images/team/nishil_photo.jpg",
        bio: "Bryan is the Executive Chairman at the company with extensive experience in leadership..."
    },
    {
        name: "Sarah Hofstetter",
        title: "Chief Executive Officer",
        image: "/images/team/team.jfif",
        bio: "Sarah leads the company as the CEO with a vision for innovation and growth."
    },
    {
        name: "Jared Belsky",
        title: "President",
        image: "/images/team/team.jfif",
        bio: "Jared is the President and oversees business operations."
    },
    {
        name: "Pierre Lipton",
        title: "Chief Creative Officer",
        image: "/images/team/team.jfif",
        bio: "Pierre is the CCO, known for his creative leadership in global campaigns."
    },
    {
        name: "Jane Doe",
        title: "Head of Marketing",
        image: "/images/team/team.jfif",
        bio: "Jane heads the marketing department and is a branding expert."
    },
];

export default function TeamPage() {
    const [selectedMember, setSelectedMember] = useState(null);
    const [shuffledTeamMembers, setShuffledTeamMembers] = useState([]);

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    useEffect(() => {
        setShuffledTeamMembers(shuffleArray([...teamMembers]));
    }, []);

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
                        {shuffledTeamMembers.map((member, index) => (
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