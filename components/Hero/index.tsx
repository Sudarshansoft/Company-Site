"use client";
import Image from "next/image";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="overflow-hidden pb-16 sm:pb-20 pt-28 sm:pt-35 md:pt-40 xl:pb-25 xl:pt-46 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-c-1390 px-4 sm:px-6 md:px-8 2xl:px-0">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8 xl:gap-32.5">
          <div className="w-full lg:w-1/2">
            <h4 className="mb-4 text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 tracking-wide">
              Building Future-Ready Software Solutions
            </h4>
            <h1 className="mb-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-hero font-extrabold text-gray-900 dark:text-white leading-tight">
              Code Your Vision into Reality
              <br className="block sm:hidden" /> {/* Break on mobile */}
              <span className="inline-block ml-0 text-blue-600 dark:text-blue-400 min-w-[180px] sm:min-w-[220px]">
                <Typewriter
                  words={["Let's Innovate", "Unite Ideas", "Craft Tomorrow"]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-md sm:max-w-lg">
              Transforming ideas into powerful digital solutions with innovation and expertise. From custom software to AI-driven applications, we build scalable and future-proof technology for businesses of all sizes.
            </p>

            <div className="mt-8 sm:mt-10">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap gap-5">
                  <button
                    aria-label="get started button"
                    className="flex rounded-full bg-blue-600 px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold text-white shadow-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-300 ease-in-out"
                  >
                    Get a Quote
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="animate_right hidden md:w-1/2 lg:block">
            <div className="relative 2xl:-mr-7.5">
              <Image
                src="/images/shape/shape-01.png"
                alt="shape"
                width={46}
                height={246}
                className="absolute -left-11.5 top-0"
              />
              <Image
                src="/images/shape/shape-02.svg"
                alt="shape"
                width={36.9}
                height={36.7}
                className="absolute bottom-0 right-0 z-10"
              />
              <Image
                src="/images/shape/shape-03.svg"
                alt="shape"
                width={21.64}
                height={21.66}
                className="absolute -right-6.5 bottom-0 z-1"
              />
              <div className="relative aspect-[700/444] w-full">
                <Image
                  className="shadow-solid-l dark:hidden"
                  src="/images/hero/home.svg"
                  alt="Hero"
                  fill
                />
                <Image
                  className="hidden shadow-solid-l dark:block"
                  src="/images/hero/home.svg"
                  alt="Hero"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;