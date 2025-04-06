import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectData from "./projectData";

const RelatedProject = ({ relatedProjectIds }: { relatedProjectIds: number[] }) => {
  const relatedProjects = ProjectData.filter((project) =>
    relatedProjectIds.includes(project._id)
  );

  return (
    <div className="animate_top rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
      <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
        Related Projects
      </h4>

      {relatedProjects.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400">No related projects found.</p>
      ) : (
        <div>
          {relatedProjects.map((project, key) => (
            <div className="mb-5 flex gap-4" key={key}>
              <div className="aspect-video w-28 relative flex-shrink-0">
                {project.bannerImage ? (
                  <Image
                    src={project.bannerImage}
                    alt="Project"
                    fill
                    className="object-cover rounded"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center text-sm text-gray-600">
                    No image
                  </div>
                )}
              </div>
              <div className="flex-1">
                <h5 className="text-md font-medium text-black transition-all duration-300 hover:text-primary dark:text-white dark:hover:text-primary">
                  <Link href={`/projects/${project.title}`}>
                    {project.title.length > 40
                      ? `${project.title.slice(0, 40)}...`
                      : project.title}
                  </Link>
                </h5>
                {project.description && (
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {project.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RelatedProject;
