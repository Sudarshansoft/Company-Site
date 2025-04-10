"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { value: "100+", label: "World Wide Clients" },
  { value: "250+", label: "Successful Projects" },
  { value: "24/7", label: "Support Available" },
  { value: "20+", label: "Countries Served" },
];

const FunFact = () => {
  return (
    <section className="relative px-4 py-20 md:px-8 lg:py-24 2xl:px-0">
      <div className="relative z-10 mx-auto max-w-7xl rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] py-20 px-6 text-center shadow-md dark:bg-black dark:from-transparent dark:to-transparent">
        {/* Decorative Images */}
        <Image
          width={335}
          height={384}
          src="/images/shape/shape-04.png"
          alt="Illustration"
          className="absolute -left-12 -top-20 hidden lg:block"
        />
        <Image
          width={132}
          height={132}
          src="/images/shape/shape-05.png"
          alt="Doodle"
          className="absolute bottom-0 right-0 hidden lg:block"
        />

        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-2xl"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Trusted by Global Companies.
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We build strong partnerships by delivering reliable solutions, exceptional support, and innovative technologies that scale globally.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 lg:gap-24">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              viewport={{ once: true }}
              className="w-40"
            >
              <h3 className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">{item.value}</h3>
              <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFact;
