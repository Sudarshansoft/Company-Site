import { Project } from "@/types/project";

const ProjectData: Project[] = [
    {
        _id: 1,
        title: "TwitBuzz",
        category: "Web Application",
        createdDate: new Date(),
        technologies: ["React", "Next.js", "Sanity"],
        description: "This is description",
        bannerImage: "/images/blog/blog-01.png",
        details: [
            `TwitBuzz is a modern social media platform inspired by Twitter, built using the powerful MERN stack
            (MongoDB, Express.js, React, and Node.js).It offers users a seamless experience to connect,
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
        demoLink: "",
        bannerImage: "/images/blog/blog-01.png",
        images: [
            "/images/blog/blog-01.png",
            "/images/blog/blog-02.png",
            "/images/blog/blog-03.png",
        ]

    }
];

export default ProjectData;
