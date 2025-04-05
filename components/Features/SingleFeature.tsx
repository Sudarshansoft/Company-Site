import React, { useState } from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description, additionalDetails } = feature;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 p-8 transition-all duration-500 ease-in-out hover:shadow-2xl bg-white dark:bg-[#111]`}
      style={{
        backdropFilter: isHovered ? "blur(8px)" : "none",
        transform: isHovered ? "translateY(-5px)" : "none",
        background: isHovered
          ? "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(226,240,255,0.8))"
          : "white",
      }}
    >
      {/* Hover Gradient Glow */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-100 to-blue-200 opacity-0 hover:opacity-40 transition-opacity duration-500 rounded-2xl pointer-events-none" />

      {/* Icon */}
      <div
        className="z-10 mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 transition-all duration-300"
        style={{
          transform: isHovered ? "scale(1.15)" : "scale(1)",
        }}
      >
        <Image
          src={icon}
          alt={title}
          width={isHovered ? 38 : 30}
          height={isHovered ? 38 : 30}
        />
      </div>

      {/* Title */}
      <h3
        className="z-10 mb-3 text-lg font-semibold text-black dark:text-white transition-all duration-300"
        style={{
          fontSize: isHovered ? "24px" : "20px",
          fontWeight: isHovered ? "800" : "700",
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <div
        className="z-10 text-sm text-gray-700 dark:text-gray-300 transition-all duration-500"
        style={{
          maxHeight: isHovered ? "400px" : "60px",
          overflow: "hidden",
          lineHeight: "1.6",
        }}
      >
        {!isHovered ? (
          <p>{description}</p>
        ) : (
          <div className="mt-2">{additionalDetails}</div>
        )}
      </div>
    </motion.div>
  );
};

export default SingleFeature;
