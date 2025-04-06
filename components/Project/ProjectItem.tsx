"use client";
import { Project } from "@/types/project";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ project }: { project: Project }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Link href={`/projects/${project.title}`} className="block group">
        <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-md transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-xl dark:border-gray-800 dark:bg-blacksection">
          {/* Project Image */}
          <div className="relative block aspect-[368/239] overflow-hidden rounded-xl">
            <Image
              src={project.bannerImage}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Project Title */}
          <div className="mt-6 px-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
              {project.title.length > 40
                ? `${project.title.slice(0, 40)}...`
                : project.title}
            </h3>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectItem;
