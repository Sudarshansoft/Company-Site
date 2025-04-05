import RelatedPost from "@/components/Blog/RelatedPost";
import ProjectData from "@/components/Blog/projectData";
import Image from "next/image";


const ProjectDetails = async ({params}:{params: Promise<{ projectName: string}>}) => {
    const projectName = (await params).projectName;
    const project = ProjectData.find((proj) => proj.title === decodeURIComponent(projectName));

    if (!project) {
        return <p className="text-white">Project not found</p>;
    }
    
    return (
        <>
            <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
                <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                    <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
                        <div className="md:w-1/2 lg:w-[32%]">
                            <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
                                <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
                                    Technologies
                                </h4>

                                <div className="flex flex-wrap gap-3">
                                    {project.technologies.map((item, index) => (
                                        <span
                                            key={index}
                                            className="rounded-full border border-stroke bg-white px-4 py-2 text-sm font-medium text-black shadow-md transition-all duration-300 hover:bg-black hover:text-white dark:border-strokedark dark:bg-blacksection dark:text-white dark:hover:bg-white dark:hover:text-black"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>

                            </div>

                            {project.testimonials && project.testimonials.length > 0 && (
                                <div className="animate_top rounded-xl border border-stroke bg-white p-8 shadow-solid-13 dark:border-strokedark dark:bg-blacksection mt-10 mb-12">
                                    <h4 className="mb-6 text-2xl font-semibold text-black dark:text-white border-b border-gray-200 dark:border-gray-700 pb-3">
                                        Client Testimonials
                                    </h4>

                                    <div className="flex flex-col gap-6">
                                        {project.testimonials.map((testimonial, index) => (
                                            <div
                                                key={index}
                                                className="relative rounded-lg bg-[#f9fafb] px-6 py-5 text-sm shadow-md transition-all duration-300 hover:shadow-lg dark:bg-[#1e1e2d]"
                                            >
                                                <div className="mb-3 flex items-start gap-2">
                                                    <span className="text-2xl text-primary leading-none select-none">“</span>
                                                    <p className="text-gray-800 dark:text-gray-300 italic">{testimonial.feedback}</p>
                                                </div>

                                                <div className="mt-3 border-t pt-3 border-gray-200 dark:border-gray-700">
                                                    <p className="text-sm font-semibold text-black dark:text-white">{testimonial.name}</p>
                                                    <span className="text-xs text-gray-500 dark:text-gray-400">{testimonial.position}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}



                            <RelatedPost />
                        </div>

                        <div className="lg:w-2/3">
                            <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                                <div className="mb-10 w-full overflow-hidden ">
                                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                                        <Image
                                            src={"/images/blog/blog-01.png"}
                                            alt="Kobe Steel plant that supplied"
                                            fill
                                            className="rounded-md object-cover object-center"
                                        />
                                    </div>
                                </div>

                                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                                    {project.title}
                                </h2>

                                <ul className="mb-9 flex flex-wrap gap-4 text-sm">
                                    <li className="flex items-center gap-2 rounded-full bg-[#f9fafb] px-4 py-2 shadow-sm dark:bg-[#1e1e2d]">
                                        <svg
                                            className="h-4 w-4 text-primary"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M8 7V3M16 7V3M3 11H21M5 5H19C20.1046 5 21 5.89543 21 7V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V7C3 5.89543 3.89543 5 5 5Z" />
                                        </svg>
                                        <span className="text-black dark:text-white font-medium">Published On:</span>
                                        <span className="ml-1 text-gray-600 dark:text-gray-300 font-normal">
                                            {project.createdDate.toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "short",
                                                day: "numeric",
                                            })}
                                        </span>
                                    </li>

                                    <li className="flex items-center gap-2 rounded-full bg-[#f9fafb] px-4 py-2 shadow-sm dark:bg-[#1e1e2d]">
                                        <svg
                                            className="h-4 w-4 text-primary"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                        <span className="text-black dark:text-white font-medium">Category:</span>
                                        <span className="ml-1 text-gray-600 dark:text-gray-300 font-normal">
                                            {project.category}
                                        </span>
                                    </li>

                                    {project.demoLink && (
                                        <li className="flex items-center gap-2 rounded-full bg-[#f9fafb] px-4 py-2 shadow-sm dark:bg-[#1e1e2d]">
                                            <svg
                                                className="h-4 w-4 text-primary"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M14 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-9" />
                                                <path d="M9 15l11-11M15 3h6v6" />
                                            </svg>
                                            <span className="text-black dark:text-white font-medium">Demo:</span>
                                            <a
                                                href= {project.demoLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="ml-1 text-primary underline hover:text-primary-dark dark:text-primary-light"
                                            >
                                                View Project
                                            </a>
                                        </li>
                                    )}
                                </ul>


                                <div className="blog-details">
                                    {project.details.map((item, index) => (
                                        <p key={index}>{item}</p>
                                    ))}
                        
                                    <div className="flex flex-wrap gap-5">
                                        <Image
                                            src={"/images/blog/blog-01.png"}
                                            width={350}
                                            height={200}
                                            alt="image"
                                        />
                                        <Image
                                            src={"/images/blog/blog-02.png"}
                                            width={350}
                                            height={200}
                                            alt="image"
                                        />
                                    </div>

                                    <div className="mt-10">
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 border-b border-gray-200 pb-2 dark:border-gray-700">
                                            Key Objectives
                                        </h3>
                                        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
                                            {project.keyObjectives.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-start gap-3 border-l-4 border-blue-600 pl-4 hover:border-blue-800 transition duration-200"
                                                >
                                                    <svg
                                                        className="mt-1 h-5 w-5 text-blue-600 shrink-0"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2.5"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <p className="text-gray-800 dark:text-gray-300 leading-relaxed">{item}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectDetails;
