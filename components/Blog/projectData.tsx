import { Project } from "@/types/project";
import {ProjectCategory, Technology } from "@/types/constants";

const ProjectData: Project[] = [
    {
        _id: 1,
        title: "TwitBuzz",
        category: ProjectCategory.WebApp,
        createdDate: new Date(),
        technologies: [Technology.Js,Technology.Bootstrap, Technology.React, Technology.Node, Technology.Express, Technology.MongoDB],
        description: "This is description",
        bannerImage: "/images/blog/blog-01.png",
        details: [
            `TwitBuzz is a modern social media platform inspired by Twitter, built using the powerful MERN stack. It offers users a seamless experience to connect,
        share, and engage in real time.With features like creating and sharing posts, following users,
        liking and commenting on content, and exploring trending topics, TwitBuzz provides a dynamic and 
  interactive environment.Users can personalize their feeds by following others, stay updated 
  on the latest trends, and engage in meaningful conversations through likes and comments.`,
            `The platform is designed with a responsive and intuitive interface, ensuring an optimized experience
 across both desktop and mobile devices. TwitBuzz also incorporates real-time updates, making
 interactions fast and engaging. Built for scalability and performance, it combines robust backend
  functionality with a visually appealing and user-friendly frontend. Whether you're a casual browser
   or an active content creator, TwitBuzz offers a fresh and exciting take on social networking,
   bringing people closer and fostering meaningful connections.`
        ],
        keyObjectives: [
            "Build a scalable social media platform using the MERN stack.",
            "Implement core features like posts, likes, comments, and following system.",
            "Ensure responsive design across all devices.",
            "Integrate real-time updates for a dynamic user experience.",
            "Focus on usability, performance, and clean UI/UX design."
        ],
        demoLink: "https://www.google.com",
        bannerImage: "/images/blog/blog-01.png",
        images: [
            "/images/blog/blog-01.png",
            "/images/blog/blog-02.png",
            "/images/blog/blog-03.png",
        ],
        testimonials: [
            {
                name: "John Doe",
                position: "CEO, ExampleCorp",
                feedback: "Working with this team was a fantastic experience. The project was delivered on time with exceptional quality.",
            },
            {
                name: "Jane Smith",
                position: "CTO, TechNova",
                feedback: "Professional, efficient, and highly skilled—couldn’t ask for more.",
            }
        ]
    }
];

export default ProjectData;
