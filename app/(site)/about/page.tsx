"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import TeamPage from "@/components/Team";
import { UserCheck, Clock, Folder } from "lucide-react";

const Counter = ({ end, suffix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 2000;
        const increment = end / (duration / 50);
        const counter = setInterval(() => {
            start += increment;
            if (start >= end) {
                start = end;
                clearInterval(counter);
            }
            setCount(Math.floor(start));
        }, 50);
        return () => clearInterval(counter);
    }, [end]);

    return (
        <h3 className="text-lg font-semibold text-blue-600">
            {count}
            {suffix}
        </h3>
    );
};

export default function AboutCompany() {
    return (
        <>
            <div className="bg-white py-16 px-4 sm:px-6 lg:px-16 mt-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Side Image - Hidden on Mobile */}
                    <div className="hidden md:block">
                        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/about/about_1.jpg"
                                alt="About Us"
                                fill
                                className="object-cover rounded-xl"
                            />
                        </div>
                    </div>

                    {/* Right Side Content */}
                    <div className="flex flex-col justify-start">
                        <h1 className="text-3xl font-bold text-blue-600 mb-6">About us</h1>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            We are a team of developers, designers, and visionaries dedicated
                            to building powerful and elegant digital products. With a focus on
                            performance, creativity, and impact — we turn complex ideas into
                            simple, user-friendly software.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            From web platforms to AI-driven tools, we combine technology with
                            design to deliver solutions that truly matter.
                        </p>

                        {/* Stats Section */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="bg-white rounded-xl shadow-md p-4 text-center border min-w-0">
                                <UserCheck className="mx-auto text-blue-500 mb-2" size={24} />
                                <Counter end={85} suffix="+" />
                                <p className="text-sm text-gray-700 break-words">Happy Clients</p>
                            </div>
                            <div className="bg-white rounded-xl shadow-md p-4 text-center border min-w-0">
                                <Clock className="mx-auto text-blue-500 mb-2" size={24} />
                                <Counter end={95000} suffix="+" />
                                <p className="text-sm text-gray-700 break-words">Hours Worked</p>
                            </div>
                            <div className="bg-white rounded-xl shadow-md p-4 text-center border min-w-0">
                                <Folder className="mx-auto text-blue-500 mb-2" size={24} />
                                <Counter end={145} suffix="+" />
                                <p className="text-sm text-gray-700 break-words">Projects Done</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TeamPage />
        </>
    );
}
