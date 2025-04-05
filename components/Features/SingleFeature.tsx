import React, { useState } from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description } = feature;
  const [isHovered, setIsHovered] = useState(false);
  const additionalDetails = "More info here...";

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative animate_top z-40 rounded-lg border transition-all p-7.5 xl:p-12.5 overflow-hidden"
    >
      {/* Icon Container - Moves Up on Hover */}
      <div
        className="relative flex items-center justify-center rounded-[4px] bg-primary transition-all duration-300 ease-in-out"
        style={{
          width: isHovered ? "48px" : "64px",
          height: isHovered ? "48px" : "64px",
          transform: isHovered ? "translateY(-10px)" : "translateY(0px)",
        }}
      >
        <Image
          src={icon}
          alt={title}
          width={isHovered ? 28 : 36}
          height={isHovered ? 28 : 36}
        />
      </div>

      {/* Title - Moves Up & Space Reduces on Hover */}
      <h3
        className="text-black dark:text-white xl:text-itemtitle transition-all ease-in-out"
        style={{
          fontSize: isHovered ? "20px" : "25px",
          fontWeight: isHovered ? "500" : "700",
          color: isHovered ? "black" : "",
          marginTop: isHovered ? "8px" : "20px", // Reduced space between icon & title
          transition: "all 0.3s ease-in-out",
          transform: isHovered ? "translateY(-10px)" : "translateY(0px)",
        }}
      >
        {title}
      </h3>

      {/* Description */}
      {!isHovered ? (
        <p className="transition-opacity duration-500 ease-in-out opacity-100">
          {description}
        </p>
      ) : null}

      {/* Additional Details on Hover */}
      <div
        style={{
          transition: "all 0.5s ease-out",
          transform: isHovered ? "translateY(0)" : "translateY(20px)",
          opacity: isHovered ? 1 : 0,
          maxHeight: isHovered ? "100px" : "0",
          overflow: "hidden",
          color:"black"
        }}
      >
        <p>{additionalDetails}</p>
      </div>

      {/* Background Hover Effect */}
      <div
        className={`absolute bottom-0 left-0 right-0 transition-all duration-500 ease-in-out`}
        style={{
          height: isHovered ? "100%" : "0",
          background: isHovered
            ? "linear-gradient(to top, #a1c4fd, #c2e9fb)"
            : "transparent",
          opacity: isHovered ? 1 : 0,
          zIndex: -1,
        }}
      />
    </motion.div>
  );
};

export default SingleFeature;
