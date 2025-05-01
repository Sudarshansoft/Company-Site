import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SudarshanSoft Solutions | Contact Us",

  // other metadata
  description: "Explore top-tier IT solutions and services from SudarshanSoft"
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Contact />
    </div>
  );
};

export default SupportPage;
