import { ProjectCategory, Technology } from "./constants";

interface Testimonial {
  name: string;
  position: string;
  feedback: string;
}

export type Project = {
  _id: number;
  title: string;
  category: ProjectCategory;
  technologies: Technology[];
  description: string;
  details: string[];
  keyObjectives: string[];
  demoLink: string;
  bannerImage: string;
  images: Object[];
  testimonials: Testimonial[];
};
