import { ProjectCategory, Technology } from "./constants";

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
  testimonials: Object[];
};
