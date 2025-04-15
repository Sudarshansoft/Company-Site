import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import OurProcess from "@/components/OurProcess";
import FeaturesTab from "@/components/FeaturesTab";
import WhyChooseUs from "@/components/WhyChooseUs";
console.log("WhyChooseUs component:", WhyChooseUs);
import FunFact from "@/components/FunFact";
import OurCoreStrengths from "@/components/OurCoreStrengths";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Project from "@/components/Project";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Next.js Starter Template for SaaS Startups - Solid SaaS Boilerplate",

  // other metadata
  description: "This is Home for Solid Pro"
};

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Brands /> */}
      <Feature />
      <OurProcess />
      {/* <FeaturesTab /> */}
      <WhyChooseUs />
      <FunFact />
      <OurCoreStrengths />
      <CTA />
      <FAQ />
      <Testimonial />
      <Pricing />
      <Contact />
      <Project />
    </main>
  );
}
