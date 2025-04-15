"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import TeamPage from "@/components/Team";

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

    return <h3 className="text-2xl font-bold text-blue-600">{count}{suffix}</h3>;
};

export default function AboutCompany() {
    return (
        <>
            <div className="bg-white py-16 px-4 sm:px-6 lg:px-16 mt-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
                    {/* Left side images */}
                    <div className="relative w-fit">
                        <div className="absolute top-0 left-0 w-48 h-48 bg-blue-100 rounded-lg -z-10"></div>
                        <div className="absolute top-10 left-10 w-48 h-48 bg-blue-200 rounded-full -z-10"></div>
                        <div className="relative z-10">
                            <div className="relative w-[350px] h-[250px]">
                                <Image
                                    src="/images/about/about_1.jpg"
                                    alt="Team Working"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-xl shadow-lg"
                                />
                            </div>
                            <div className="relative w-[350px] h-[250px] -mt-12 ml-45">
                                <Image
                                    src="/images/about/about_2.jpg"
                                    alt="Team Meeting"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-xl shadow-lg"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right side content */}
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">About Us</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            We are not just a software development company — we are a team of passionate innovators, creative thinkers, and tech enthusiasts committed to transforming your ideas into powerful digital experiences. At the heart of our company lies a deep desire to solve real-world problems through technology that’s smart, intuitive, and built to last.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            From startups to enterprise clients, we collaborate closely with every partner to understand their vision and deliver tailor-made solutions that exceed expectations. Whether it's building custom applications, optimizing user journeys, or boosting online presence with effective SEO strategies — we go the extra mile, every time. Our culture thrives on innovation, transparency, and a relentless drive for excellence.
                        </p>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-8">
                            <div>
                                <Counter end={85} suffix="+" />
                                <p className="text-sm text-gray-700">Happy Clients</p>
                            </div>
                            <div>
                                <Counter end={95000} suffix="" />
                                <p className="text-sm text-gray-700">Hours Worked</p>
                            </div>
                            <div>
                                <Counter end={145} suffix="+" />
                                <p className="text-sm text-gray-700">Projects Done</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TeamPage></TeamPage>
        </>
    );
}
