import image1 from "@/public/images/user/Kaushik_patel.jpeg";
import image2 from "@/public/images/user/Devin_tejani.jpeg";
import image3 from "@/public/images/user/Rechard_lenol.jpeg";
import image4 from "@/public/images/user/George_macias.jpg";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Kaushik Patel",
    designation: "CEO & Founder @RRocks Thread",
    image: image1,
    content:
      "Working with Sudarshan Soft was a great experience. He understood our ERP system requirements clearly and helped us create a solution that made our billing and business management much more efficient. Highly recommended!",
  },
  {
    id: 2,
    name: "Devin Tejani",
    designation: "CEO @Plantpact Innovations PVT LTD",
    image: image2,
    content:
      "Working with Sudarshan Soft was a seamless and inspiring experience. They understood our vision for GreenSkin and brought it to life with a modern, responsive website that truly reflects our brand's commitment to sustainability.",
  },
  {
    id: 3,
    name: "Richard Lenol",
    designation: "IT Consultant",
    image: image3,
    content:
      "From planning to execution, the team exceeded all our expectations. Their process was seamless, transparent, and highly efficient. They fulfilled all our requirements perfectly. We highly recommend their services.",
  },
  {
    id: 4,
    name: "George Macias",
    designation: "CEO @MDI",
    image: image4,
    content:
      "We had a wonderful experience working with Sudarshan Soft. They understood our needs perfectly and delivered a high-quality, user-friendly solution on time. We're very happy with their excellent service and ongoing support.",
  },
];
