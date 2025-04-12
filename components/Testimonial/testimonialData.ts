import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "David Smith",
    designation: "Founder @DemoCompany",
    image: image1,
    content:
      "Working with this team was a fantastic experience. They delivered our product on time, with top-notch quality and great communication throughout.",
  },
  {
    id: 2,
    name: "John Abraham",
    designation: "Founder @DemoCompany",
    image: image2,
    content:
      "Their attention to detail and ability to adapt to our evolving needs was impressive. Highly recommended for any serious business.",
  },
  {
    id: 3,
    name: "Emma Johnson",
    designation: "CTO @TechNova",
    image: image1,
    content:
      "From planning to execution, they exceeded every expectation. Their development process is seamless and transparent.",
  },
  {
    id: 4,
    name: "Michael Lee",
    designation: "Product Manager @InnoSoft",
    image: image2,
    content:
      "We’ve worked with multiple teams before, but this was the most professional and satisfying experience. We'll definitely collaborate again.",
  },
];
