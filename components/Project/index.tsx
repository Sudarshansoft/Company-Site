import React from "react";
import Link from "next/link";
import SectionHeader from "../Common/SectionHeader";
import ProjectItem from "./ProjectItem";
import ProjectData from "./projectData";

const ProjectsSection = async () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-25 xl:py-30 bg-gradient-to-br from-[#f9f9fb] via-white to-[#f1f3f9]">
      {/* Decorative radial grid background */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-10">
        <div className="w-full h-full bg-[radial-gradient(circle_at_1px_1px,_#ccc_1px,_transparent_0)] bg-[size:20px_20px]" />
      </div>

      {/* Section Header */}
      <div className="relative z-10 mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0 text-center animate_top">
        <SectionHeader
          headerInfo={{
            title: `PROJECTS`,
            subtitle: `See Our Expertise in Action`,
            description: `Explore a showcase of our best work — blending innovation, creativity, and cutting-edge tech.`,
          }}
        />
      </div>

      {/* Project Cards Grid */}
      <div className="relative z-10 mx-auto mt-16 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ProjectData.slice(0, 3).map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </div>

        {/* See All Projects Button */}
        <div className="mt-14 text-center animate_top">
          <Link
            href="/projects"
            className="relative inline-flex items-center justify-center overflow-hidden px-8 py-3 rounded-full bg-white /60 backdrop-blur-md border border-blue-100 shadow-lg shadow-blue-100/40 text-base font-semibold text-gray-800 transition-all duration-300 group hover:border-blue-400 hover:shadow-xl hover:shadow-blue-300/50"
          >
            <span className="absolute inset-0 z-0 transition-all duration-300 ease-in-out bg-gradient-to-r from-sky-300 to-blue-400 opacity-0 group-hover:opacity-100" />
            <span className="relative z-10 flex items-center gap-2 transition-all duration-300 group-hover:text-white group-hover:tracking-wide">
              See All Projects
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
