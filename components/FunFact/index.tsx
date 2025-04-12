"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 100, suffix: "+", label: "World Wide Clients", animate: true },
  { value: 250, suffix: "+", label: "Successful Projects", animate: true },
  { value: 20, suffix: "+", label: "Countries Served", animate: true },
  { value: "24/7", suffix: "", label: "Support Available", animate: false },
];

const FunFact = () => {
  return (
    <section className="relative px-4 py-20 md:px-8 lg:py-24 2xl:px-0">
      <div className="relative z-10 mx-auto max-w-7xl rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] py-20 px-6 text-center shadow-md dark:bg-black dark:from-transparent dark:to-transparent">
        <Image
          width={335}
          height={384}
          src="/images/shape/shape-04.png"
          alt="Shape"
          className="absolute -left-12 -top-20 hidden lg:block"
        />
        <Image
          width={132}
          height={132}
          src="/images/shape/shape-05.png"
          alt="Shape"
          className="absolute bottom-0 right-0 hidden lg:block"
        />

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
            We build strong partnerships by delivering reliable solutions,
            exceptional support, and innovative technologies that scale globally.
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 lg:gap-24">
          {stats.map((item, index) => (
            <StatCard key={index} item={item} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ item, delay }: { item: any; delay: number }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="w-40"
    >
      <h3 className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">
        {item.animate ? (
          <CountUp
            start={0}
            end={inView ? Number(item.value) : 0}
            duration={2}
            suffix={item.suffix}
            preserveValue
            redraw
            useEasing
          >
            {({ countUpRef }) => <span ref={countUpRef} />}
          </CountUp>
        ) : (
          <>
            {item.value}
            {item.suffix}
          </>
        )}
      </h3>
      <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
        {item.label}
      </p>
    </motion.div>
  );
};

export default FunFact;
