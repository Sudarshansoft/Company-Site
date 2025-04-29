"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import TeamPage from "@/components/Team";
import { UserCheck, Clock, Folder } from "lucide-react";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurProcess from "@/components/OurProcess";

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
      <div className="mt-16 bg-white px-4 py-16 sm:px-6 lg:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 lg:grid-cols-2">
          {/* Left Side Image - Hidden on Mobile */}
          <div className="hidden md:block">
            <div className="relative h-[450px] w-full overflow-hidden">
              <Image
                src="/images/about/about.jpg"
                alt="About Us"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Side Content */}
          <div className="flex flex-col justify-start">
            <h1 className="mb-6 text-3xl font-bold text-blue-600">About us</h1>
            <p className="mb-4 leading-relaxed text-gray-600">
              We are a team of developers, designers, and visionaries dedicated
              to building powerful and elegant digital products. With a focus on
              performance, creativity, and impact — we turn complex ideas into
              simple, user-friendly software.
            </p>
            <p className="mb-8 leading-relaxed text-gray-600">
              From web platforms to AI-driven tools, we combine technology with
              design to deliver solutions that truly matter.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="min-w-0 rounded-xl border bg-white p-4 text-center shadow-md">
                <UserCheck className="mx-auto mb-2 text-blue-500" size={24} />
                <Counter end={36} suffix="+" />
                <p className="break-words text-sm text-gray-700">
                  Happy Clients
                </p>
              </div>
              <div className="min-w-0 rounded-xl border bg-white p-4 text-center shadow-md">
                <Clock className="mx-auto mb-2 text-blue-500" size={24} />
                <Counter end={12000} suffix="+" />
                <p className="break-words text-sm text-gray-700">
                  Hours Worked
                </p>
              </div>
              <div className="min-w-0 rounded-xl border bg-white p-4 text-center shadow-md">
                <Folder className="mx-auto mb-2 text-blue-500" size={24} />
                <Counter end={142} suffix="+" />
                <p className="break-words text-sm text-gray-700">
                  Projects Done
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhyChooseUs />
      <OurProcess />
      <div className="-mt-16">
        <TeamPage />
      </div>
    </>
  );
}
