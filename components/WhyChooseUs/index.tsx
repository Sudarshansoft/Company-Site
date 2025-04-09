// components/WhyChooseUs/index.tsx
import React from "react";
import { whyChooseUsData } from "./whyChooseUsData";
import ChooseUsCard from "./ChooseUsCard";

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Why Choose Us
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Discover what makes us stand out from the crowd and why businesses trust us with their tech needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyChooseUsData.map((item, index) => (
            <ChooseUsCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
