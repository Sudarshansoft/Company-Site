"use client";

import React, { useState } from "react";
import ProjectData from "@/components/Project/projectData";
import ProjectItem from "@/components/Project/ProjectItem";

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(ProjectData.map((p) => p.category)))
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? ProjectData
      : ProjectData.filter((p) => p.category === selectedCategory);

  return (
    <section className="pt-32 pb-20 lg:pb-25 xl:pb-30 bg-white min-h-screen">
      {/* Title */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Our Work
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Explore the projects we’ve built across different domains.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="flex justify-center flex-wrap gap-4 mb-12 px-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 text-sm font-semibold transition-all duration-300
        rounded-full border backdrop-blur-md
        ${selectedCategory === category
                ? "bg-gradient-to-r from-blue-600 to-indigo-500 text-white border-transparent shadow-xl scale-105"
                : "bg-white/70 text-gray-700 border-gray-300 hover:shadow-md hover:ring-2 hover:ring-blue-300"
              }`}
          >
            {category}
          </button>
        ))}
      </div>
        

      {/* Project Grid */}
      <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, key) => (
            <ProjectItem key={key} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
