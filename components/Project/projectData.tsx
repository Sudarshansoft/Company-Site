import { Project } from "@/types/project";
import { ProjectCategory, Technology } from "@/types/constants";

const ProjectData: Project[] = [
  {
    _id: 1,
    title: "Prescripto",
    category: ProjectCategory.WebApp,
    technologies: [
      Technology.React,
      Technology.Node,
      Technology.Express,
      Technology.MongoDB,
      Technology.Bootstrap,
      Technology.Stripe,
      Technology.RazorPay
    ],
    description: `Prescripto is a full-stack healthcare web application that simplifies doctor appointment bookings, offering distinct portals for patients, 
                  doctors, and admins with secure online payment integrations.`,
    bannerImage: "/images/projects/prescripto/img1.png",
    details: [
      `"Prescripto provides a seamless platform for patients to book appointments, manage visits, and make secure online payments through Stripe or Razorpay. Patients can create personalized profiles and track appointment history easily. Doctors can manage their schedules, update profiles, view earnings, and handle appointments efficiently through a dedicated dashboard.",
    "Admins have complete control over managing doctors, patients, and appointments, along with access to insightful statistics via the admin panel. The application ensures data security with JWT authentication and delivers a mobile-responsive, easy-to-use interface built with the MERN stack.",
    "Additional features include a home page with doctor search, detailed doctor profiles, payment integration, and informational pages like About, Contact, and All Doctors."`,
    ],
    keyObjectives: [
      "Build a scalable healthcare booking system with the MERN stack.",
      "Implement role-based authentication for patients, doctors, and admins.",
      "Integrate Stripe and Razorpay for secure online payments.",
      "Create a responsive and user-friendly UI/UX.",
      "Offer complete management of appointments and profiles."
    ],
    demoLink: "",
    images: [
      {
        id: 1,
        src: "/images/projects/prescripto/img2.png",
      },
      {
        id: 2,
        src: "/images/projects/prescripto/img3.png",
      },
      {
        id: 3,
        src: "/images/projects/prescripto/img4.png",
      }
    ],
    testimonials: [],
  },
  {
    _id: 2,
    title: "Invoice ERP-CRM",
    category: ProjectCategory.WebApp,
    technologies: [Technology.React, Technology.Node, Technology.Express, Technology.MongoDB, Technology.AntDesign],
    description: `A full-featured ERP and CRM system with powerful invoice and quote management functionalities, built on the robust MERN stack.`,
    bannerImage: "/images/projects/invoice-erp-crm/main-page.png",
    details: [
      "Invoice ERP-CRM is a comprehensive business management platform designed for small to medium-sized enterprises. Built with the MERN stack and Ant Design, it provides intuitive tools to manage invoices, payments, quotes, and customer information effectively. The system ensures streamlined financial operations by enabling users to generate and track invoices, manage payments, and handle customer interactions from a centralized platform. With a focus on clean UI/UX, it offers an easy-to-use dashboard for seamless business workflow management.",
      "It is optimized for scalability, performance, and a responsive experience across devices, empowering businesses to maintain better financial control and customer relationships.",
    ],
    keyObjectives: [
      "Develop a scalable and intuitive ERP/CRM system using the MERN stack.",
      "Implement core functionalities like invoice, payment, quote, and customer management.",
      "Design a clean and responsive UI using Ant Design framework.",
      "Enable businesses to manage finances and customer relationships efficiently from one platform."
    ],
    demoLink: "",
    images: [
      {
        id: 1,
        src: "/images/projects/invoice-erp-crm/invoice-page.png",
      },
      {
        id: 2,
        src: "/images/projects/invoice-erp-crm/payment-page.png",
      },
      {
        id: 3,
        src: "/images/projects/invoice-erp-crm/client-page.png",
      },
      {
        id: 4,
        src: "/images/projects/invoice-erp-crm/setting-page.png",
      }
    ],
    testimonials: [
      {
        "name": "Kaushik Patel",
        "position": "Founder, RRocks Thread",
        "feedback": "Invoice ERP-CRM transformed how we handle invoicing and customer management. It's simple, fast, and extremely reliable."
      },
      {
        "name": "Yagnesh Paladiya",
        "position": "COO, Reva Textile.",
        "feedback": "The platform's clean design and powerful features have greatly improved our operational efficiency. Highly recommended!"
      }
    ],
  },
  {
    _id: 3,
    title: "GreenSkin",
    category: ProjectCategory.WebApp,
    technologies: [Technology.React, Technology.Tailwind, Technology.MongoDB],
    description: `greenskin.eco is a modern, eco-conscious website designed to showcase innovative solutions in 
    sustainable materials. Built with a user-friendly interface and responsive design, 
                    the site ensures seamless navigation across all devices. It features multilingual support, a sleek 
                    layout, interactive sections, and integrated contact forms for inquiries. With clear messaging, 
                    high-quality visuals, and fast load times, greenskin.eco delivers an engaging and informative 
                    browsing experience that highlights its mission and offerings effectively.`,
    bannerImage: "/images/projects/green-skin/home.png",
    details: [
      `GreenSkin is a sustainability-focused website developed by Deprosys Infotech for a brand innovating in 
        lab-grown leather. The site features modern, responsive design using React.js, Tailwind CSS, and Framer Motion, 
        with multilingual support. Key pages include Home, About, Products, Blog, and Contact, all optimized for user experience and global reach. 
        The backend integrates EmailJS with secure SMTP (SPF & DKIM) for contact form submissions and auto-replies, along with WhatsApp Business API integration. 
        Built with scalability and clean architecture, GreenSkin reflects our commitment to delivering eco-conscious digital solutions with powerful tech.`,
    ],
    keyObjectives: [
      "Showcase GreenSkin’s lab-grown leather and sustainability mission to attract eco-conscious audiences.",
      "Educate visitors about the innovation behind their products and sustainable manufacturing process.",
      "Establish a strong brand identity through a clean, modern, and user-friendly web design.",
      "Reach a global audience with multi-language support and seamless localization.",
      "Facilitate smooth communication through integrated contact forms and WhatsApp Business support."
    ],
    demoLink: "https://greenskin.eco",
    images: [
      {
        id: 1,
        src: "/images/projects/green-skin/img-1.png",
      },
      {
        id: 2,
        src: "/images/projects/green-skin/img-2.png",
      },
      {
        id: 3,
        src: "/images/projects/green-skin/img-3.png",
      }
    ],
    testimonials: [
      {
        name: "Devin Tejani",
        position: "CEO, GreenSkin",
        feedback: `Working with "Sudarshan Soft" was a seamless and inspiring experience.
                        They understood our vision for GreenSkin and brought it to life with a modern, 
                        responsive website that truly reflects our brand's commitment to sustainability. 
                        The team was highly professional, technically sound, and delivered beyond expectations 
                        — from multilingual support to real-time communication integration. 
                        We're proud of the result and grateful for their dedication.`
      },
    ],
  },
  {
    _id: 4,
    title: "Behaviour Detection System",
    category: ProjectCategory.computervision,
    technologies: [
      Technology.Python,
      Technology.AI,
      Technology.VLM,
      Technology.DL,
    ],
    description: `The Aggressive Behavior Detection System is a real-time monitoring and analysis 
            platform designed to identify and track aggressive behavioral patterns. It provides 
            a sophisticated dashboard interface for security personnel, healthcare professionals, 
            or administrators to monitor and respond to potentially aggressive situations in various 
            environments like healthcare facilities, public spaces, or educational institutions.`,
    bannerImage: "/images/projects/behaviour-detection/dash-1.png",
    details: [
      `The Behavior Analysis Model is designed to detect aggressive actions in real-time from video footage. 
        The primary goal of this project is to enhance security and safety by identifying violent behaviors such as 
        fighting, pushing, and physical confrontations. By using Qwen2VL-2B, a Vision-Language Model. 
        the system can analyze both visual and contextual cues to improve the accuracy of aggression detection. 
        This model is optimized for real-time deployment on edge devices 
        and surveillance systems, making it suitable for applications in public safety, workplace security`,
    ],
    keyObjectives: [
      "Real-time monitoring and analysis of aggressive behavior patterns using AI-powered detection for immediate threat identification.",
      "Implements three-tier classification with confidence scoring for quick assessment and response prioritization.",
      "Maintains detailed records with unique identifiers, timestamps, and descriptions for comprehensive incident tracking.",
      "Features professional monitoring interface with real-time analysis and statistical overviews for efficient management.",
      "Ensures secure data handling while maintaining detailed incident history for administrative review and planning.",
    ],
    demoLink: "",
    images: [
      {
        id: 1,
        src: "/images/projects/behaviour-detection/dash-1.png",
      },
      {
        id: 2,
        src: "/images/projects/behaviour-detection/dash-2.png",
      },
      {
        id: 3,
        src: "/images/projects/behaviour-detection/normal.png",
      },
      {
        id: 4,
        src: "/images/projects/behaviour-detection/aggression.png",
      },
    ],
    testimonials: [],
  },
  {
    _id: 5,
    title: "TwitBuzz",
    category: ProjectCategory.WebApp,
    technologies: [
      Technology.Js,
      Technology.Bootstrap,
      Technology.React,
      Technology.Node,
      Technology.Express,
      Technology.MongoDB,
    ],
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
   bringing people closer and fostering meaningful connections.`,
    ],
    keyObjectives: [
      "Build a scalable social media platform using the MERN stack.",
      "Implement core features like posts, likes, comments, and following system.",
      "Ensure responsive design across all devices.",
      "Integrate real-time updates for a dynamic user experience.",
      "Focus on usability, performance, and clean UI/UX design.",
    ],
    demoLink: "",
    images: [
      {
        id: 1,
        src: "/images/blog/blog-01.png",
      },
      {
        id: 2,
        src: "/images/blog/blog-02.png",
      },
      {
        id: 3,
        src: "/images/blog/blog-03.png",
      },
    ],
    testimonials: [
      {
        name: "John Doe",
        position: "CEO, ExampleCorp",
        feedback:
          "Working with this team was a fantastic experience. The project was delivered on time with exceptional quality.",
      },
      {
        name: "Jane Smith",
        position: "CTO, TechNova",
        feedback:
          "Professional, efficient, and highly skilled—couldn’t ask for more.",
      },
    ],
  },
];

export default ProjectData;
