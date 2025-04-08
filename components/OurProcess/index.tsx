"use client";

import { motion } from "framer-motion";
import { SearchCheck, Code2, CheckCircle } from "lucide-react";
import SectionHeader from "../Common/SectionHeader";

const steps = [
  {
    id: 1,
    title: "Discover & Define",
    description:
      "We dive deep into your vision, uncover goals, and shape a roadmap to success.",
    icon: <SearchCheck className="h-10 w-10 text-primary" />,
  },
  {
    id: 2,
    title: "Craft the Code",
    description:
      "With precision and creativity, we engineer scalable solutions that power your product.",
    icon: <Code2 className="h-10 w-10 text-primary" />,
  },
  {
    id: 3,
    title: "Launch & Elevate",
    description:
      "We deliver, deploy, and support—ensuring your product shines from day one and beyond.",
    icon: <CheckCircle className="h-10 w-10 text-primary" />,
  },
];

const OurProcess = () => {
  return (
    <section className="relative z-10 bg-white py-16 dark:bg-blacksection">
      <div className="container mx-auto px-4 text-center">
        {/* Header */}
        <div className="relative z-10 mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0 text-center animate_top mb-16">
          <SectionHeader
            headerInfo={{
              title: `OUR PROCESS`,
              subtitle: `Turning Vision Into Reality`,
              description: `Our streamlined process blends strategy, creativity, and technology to bring your ideas to life.`,
            }}
          />
        </div>

        {/* Steps */}
        <div className="flex flex-col items-center gap-16 md:flex-row md:justify-center md:gap-24">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center relative"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mb-4 flex h-20 w-20 items-center justify-center rounded-full border-4 border-primary bg-white dark:bg-boxdark shadow-lg"
              >
                {step.icon}
              </motion.div>

              {/* Title & Description */}
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                {step.title}
              </h3>
              <p className="max-w-xs text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Arrow (only between steps) */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute right-[-60px] top-1/2 transform -translate-y-1/2 z-0">
                  <svg
                    width="60"
                    height="20"
                    viewBox="0 0 60 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 10H54M54 10L48 4M54 10L48 16"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
