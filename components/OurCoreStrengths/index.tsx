"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const features = [
  {
    title: "Agile Development",
    icon: "/images/brand/agile.png",
  },
  {
    title: "Fast Delivery",
    icon: "/images/brand/speed.png",
  },
  {
    title: "Customer Support",
    icon: "/images/brand/support.png",
  },
  {
    title: "Scalability",
    icon: "/images/brand/scalability.png",
  },
  {
    title: "Security First",
    icon: "/images/brand/secure.png",
  },
  {
    title: "Innovation-Driven",
    icon: "/images/brand/solution.png",
  },
];

const OurCoreStrengths = () => {
  return (
    <section className="relative z-10 py-20 md:py-28 bg-white dark:bg-black">
      <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-20">
        <SectionHeader
          headerInfo={{
            title: "Our Core Strengths",
            subtitle: "Building Robust, Scalable, and Secure Solutions.",
            description:
              "We deliver agile, secure, and scalable solutions with a focus on speed, support, and innovation tailored to your business needs."
          }}
        />

        <div className="mt-16 space-y-12 md:space-y-0 md:grid md:grid-cols-3 md:gap-12">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center"
            >
              <div className="mb-4 rounded-full bg-blue-50 dark:bg-blue-900 p-4 shadow-inner">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                {item.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCoreStrengths;
