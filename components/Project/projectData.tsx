import { Project } from "@/types/project";
import {ProjectCategory, Technology } from "@/types/constants";

const ProjectData: Project[] = [
    {
        _id: 1,
        title: "TwitBuzz",
        category: ProjectCategory.WebApp,
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
    },
    {
        _id: 2,
        title: "Gamerz",
        category: ProjectCategory.WebApp,
        technologies: [Technology.Html, Technology.Css, Technology.Js, Technology.Bootstrap],
        description: "This is description acnajcnsaljcnac canclkascnaklcnalkc accnlkcnaklcnac cakcnasklcnaklc  calkncaslknc",
        bannerImage: "/images/blog/blog-01.png",
        details: [
            `Gamerz is a fully responsive, browser-based gaming platform designed to offer users an interactive and enjoyable online gaming experience. This web application hosts a collection of 8 casual and entertaining games that can be played instantly without requiring any downloads or installations.`,
            `Built with HTML, CSS, Bootstrap, and core JavaScript, the platform emphasizes both performance and user experience. Bootstrap ensures a mobile-first, responsive layout that adapts well across desktops, tablets, and smartphones, while JavaScript handles interactive game logic and animations.`,
            `Each game on the platform is designed with:\n
            User engagement in mind, including smooth transitions and real-time feedback.\n
            Lightweight assets to ensure fast loading and minimal latency.\n
            Accessibility features like keyboard navigation and clear visual hierarchies.\n
            Whether users are looking to relax with a quick puzzle or engage in more fast-paced gameplay, Gamerz delivers a cohesive and fun environment for all types of players.`
        ],
        keyObjectives: [
            "Create a browser-based platform that allows users to play multiple online games without the need to download any external files.",
            "Build modular and reusable game components using JavaScript to encourage maintainability and scalability.",
            "Deliver a fun and user-friendly experience that encourages longer session times and repeat visits.",
            "Optimize for speed and performance, ensuring low page load times even with multimedia elements."
        ],
        demoLink: "",
        bannerImage: "/images/blog/blog-01.png",
        images: [
            "/images/blog/blog-01.png",
            "/images/blog/blog-02.png",
            "/images/blog/blog-03.png",
        ],
        testimonials: []
    },
    {
        _id: 3,
        title: "PlantPal",
        category: ProjectCategory.MobileApp,
        technologies: [Technology.ReactNative, Technology.Firebase, Technology.Node],
        description: "A mobile app to help users track and manage their plant care routine.",
        bannerImage: "/images/blog/blog-02.png",
        details: [
            `PlantPal is a beautifully designed mobile application developed using React Native and Firebase. It helps plant lovers manage watering schedules, get care tips, and identify plants using AI.`,
            `With intuitive notifications and an easy-to-use interface, users can log their plants, set reminders, and track growth over time. Firebase provides real-time updates and secure cloud syncing.`,
        ],
        keyObjectives: [
            "Build a cross-platform mobile app for plant care tracking.",
            "Integrate Firebase for authentication and real-time data sync.",
            "Use AI/ML to recognize plants from images and provide care instructions.",
            "Provide reminders for watering, fertilizing, and sunlight needs.",
            "Deliver a minimalist and soothing UI for nature lovers.",
        ],
        demoLink: "https://plantpal-demo.com",
        images: [
            "/images/blog/blog-02.png",
            "/images/blog/blog-03.png",
            "/images/blog/blog-01.png",
        ],
        testimonials: [
            {
                name: "Alex Green",
                position: "Plant Enthusiast",
                feedback: "PlantPal has completely changed how I care for my plants. It’s like having a gardener in my pocket!",
            },
        ],
    },
];

export default ProjectData;