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
      "Prescripto provides a seamless platform for patients to book appointments, manage visits, and make secure online payments through Stripe or Razorpay. Patients can create personalized profiles and track appointment history easily. Doctors can manage their schedules, update profiles, view earnings, and handle appointments efficiently through a dedicated dashboard.",
    "Admins have complete control over managing doctors, patients, and appointments, along with access to insightful statistics via the admin panel. The application ensures data security with JWT authentication and delivers a mobile-responsive, easy-to-use interface built with the MERN stack.",
    "Additional features include a home page with doctor search, detailed doctor profiles, payment integration, and informational pages like About, Contact, and All Doctors.",
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
    bannerImage: "/images/projects/invoice-erp-crm/banner.jfif",
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
        src: "/images/projects/invoice-erp-crm/main-page.png",
      },
      {
        id: 4,
        src: "/images/projects/invoice-erp-crm/client-page.png",
      },
      {
        id: 5,
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
        position: "CEO, Plantpact innovation",
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
    bannerImage: "/images/projects/behaviour-detection/banner.jfif",
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
    title: "Cyber Sentinel",
    category: ProjectCategory.AI,
    technologies: [
      Technology.LlamaIndex,
      Technology.FAISS,
      Technology.Streamlit,
      Technology.OpenAI,
      Technology.MongoDB
    ],
    description: "An innovative AI-powered web application designed to redefine cybersecurity through real-time threat detection and advanced risk analysis.",
    bannerImage: "/images/projects/cyber-sentinel/main.png",
    details: [
      "Cyber Sentinel is an advanced AI-powered chatbot designed to deliver the latest cybersecurity-related news and updates. By utilizing cutting-edge AI technologies like GPT-4 Turbo and LlamaIndex, it provides real-time insights into the evolving landscape of cybersecurity, keeping users informed about new threats, vulnerabilities, and industry trends.",
"The chatbot continuously gathers and analyzes the latest cybersecurity information, offering timely alerts on emerging risks such as phishing, malware, and data breaches. Whether you're an individual, small business, or large enterprise, Cyber Sentinel ensures you stay up-to-date with essential cybersecurity developments, empowering you to take proactive measures against potential threats.",
"With its intuitive interface and smart capabilities, Cyber Sentinel makes it easy to access critical security news and stay ahead in an ever-changing digital environment."
    ],
    keyObjectives: [
      "Cyber Sentinel provides real-time threat detection",
      "Support businesses of all sizes",
      "Adapt to evolving cyber threats with AI"
    ],
    demoLink: "",
    images: [
      {
        id: 1,
        src: "/images/projects/cyber-sentinel/img-1.jpg",
      },
      {
        id: 2,
        src: "/images/projects/cyber-sentinel/img-2.jpg",
      },
      {
        id: 3,
        src: "/images/projects/cyber-sentinel/img-3.jpg",
      },
    ],
    testimonials: [],
  },
  {
    _id: 6,
    title: "Hotel MS",
    category: ProjectCategory.WebApp,
    technologies: [
      Technology.Html,
      Technology.Css,
      Technology.Bootstrap,
      Technology.ASPNET,
      Technology.SQLServer
    ],
    description: "An innovative AI-powered web application designed to redefine cybersecurity through real-time threat detection and advanced risk analysis.",
    bannerImage: "/images/projects/hotel-ms/main.jpg",
    details: [
      "Hotel-MS is a dynamic hotel management system built with ASP.NET, designed to streamline hotel booking and management processes. This user-friendly platform empowers hotel administrators to efficiently manage room details, availability, and rental pricing, while ensuring smooth operations for both the hotel staff and guests.",
      "The system allows users to easily register and browse through various room categories, from standard to premium, offering flexibility to book based on their preferences. With the ability to select check-in and checkout dates, customers can seamlessly plan their stays, ensuring a personalized and hassle-free experience.",
      "Hotel admins can effortlessly update room availability, set rental prices, and monitor bookings in real-time, while users enjoy a straightforward, intuitive interface for booking their perfect stay. Whether it's a short getaway or a long-term stay, Hotel-MS offers a complete solution for managing hotel reservations with efficiency and ease."
    ],
    keyObjectives: [
      "Enable efficient room management for admins with real-time availability and pricing updates.",
      "Provide users with a seamless, intuitive platform for browsing and booking rooms.",
      "Ensure real-time availability updates to prevent overbooking and optimize reservations.",
      "Enhance customer experience with a fast, personalized booking and registration process."
    ],
    demoLink: "",
    images: [
      {
        id: 1,
        src: "/images/projects/hotel-ms/img-1.jpg",
      },
      {
        id: 2,
        src: "/images/projects/hotel-ms/img-2.jpg",
      },
      {
        id: 3,
        src: "/images/projects/hotel-ms/img-3.jpg",
      },
      {
        id: 4,
        src: "/images/projects/hotel-ms/img-4.jpg",
      },
    ],
    testimonials: [],
  },
  {
    _id: 7,
    title: "Gamerz",
    category: ProjectCategory.WebApp,
    technologies: [
      Technology.Html,
      Technology.Css,
      Technology.Bootstrap,
      Technology.Js,
    ],
    description: "An interactive gaming website that offers 8 diverse online games with seamless gameplay, built using HTML, CSS, Bootstrap, and JavaScript for an engaging and responsive user experience.",
    bannerImage: "/images/projects/gamerz/main.jpg",
    details: [
      "Our project is an interactive gaming website that offers eight different online games, designed for fun and accessibility. Built using HTML, CSS, Bootstrap, and JavaScript, it ensures a responsive and seamless experience across devices. The platform allows users to easily browse and select their favorite games, offering smooth animations, responsive controls, and an engaging visual design.",
      "The website's intuitive navigation and dynamic interactions make it easy for players to dive into the action, whether on desktop or mobile. By leveraging Bootstrap, the platform ensures an optimal gaming experience on all screen sizes, while JavaScript powers the gameplay mechanics.",
      "This project combines creativity and technical skills, delivering a fun and browser-based gaming experience for all types of players."
    ],
    keyObjectives: [
      "Provide a diverse collection of 8 online games for an engaging gaming experience.",
      "Ensure seamless and responsive gameplay across devices using HTML, CSS, Bootstrap, and JavaScript.",
      "Offer an intuitive and user-friendly interface for easy navigation and game selection.",
      "Create smooth animations, responsive controls, and appealing visuals for an immersive experience."
    ],
    demoLink: "",
    images: [
      {
        id: 1,
        src: "/images/projects/gamerz/img-1.jpg",
      },
      {
        id: 2,
        src: "/images/projects/gamerz/img-2.jpg",
      },
      {
        id: 3,
        src: "/images/projects/gamerz/img-3.jpg",
      },
      {
        id: 4,
        src: "/images/projects/gamerz/img-4.jpg",
      },
      {
        id: 5,
        src: "/images/projects/gamerz/img-5.jpg",
      },
      {
        id: 6,
        src: "/images/projects/gamerz/img-6.jpg",
      },
      {
        id: 7,
        src: "/images/projects/gamerz/img-7.jpg",
      },
    ],
    testimonials: [],
  },
  {
    _id: 8,
    title: "ResuGenius",
    category: ProjectCategory.AI,
    technologies: [
      Technology.Langchain,
      Technology.Autogen,
      Technology.Streamlit,
    ],
    description: "An AI-powered platform that analyzes resumes, extracts candidate skills, and generates personalized interview questions and model answers based on job requirements.",
    bannerImage: "/images/projects/resu-genius/main.webp",
    details: [
      "Resu Genius is an innovative resume analysis platform designed to streamline the hiring process by leveraging advanced AI technologies. The system allows recruiters to upload candidate resumes, job descriptions, and specify the desired number of interview questions per skill. It intelligently extracts key candidate details, including skills, experience, and relevant achievements, generating customized interview questions that reflect the candidate's background and expertise.",
      "The platform goes beyond simple keyword matching, utilizing Autogen with AI agents to assess how well a candidate's resume aligns with the job requirements. This scoring mechanism helps recruiters quickly gauge the suitability of candidates, reducing time spent on manual screening. Resu Genius also generates model answers for each question, providing recruiters with a comprehensive understanding of the candidate’s potential responses during the interview.",
      "With its intuitive design and powerful AI-driven capabilities, Resu Genius enhances the hiring experience by delivering accurate, data-driven insights, helping organizations identify the right talent with greater speed and precision."
    ],
    keyObjectives: [
      "Automate resume analysis to extract key skills and experience.",
      "Generate personalized interview questions based on candidate profiles.",
      "Provide model answers for comprehensive candidate evaluation.",
      "Score resume-job fit using AI agents for accurate candidate matching."
    ],
    demoLink: "",
    images: [
      {
        id: 1,
        src: "/images/projects/resu-genius/img-1.jpg",
      },
      {
        id: 2,
        src: "/images/projects/resu-genius/img-2.jpg",
      },
      {
        id: 3,
        src: "/images/projects/resu-genius/img-3.jpg",
      },
      {
        id: 4,
        src: "/images/projects/resu-genius/img-4.jpg",
      },
      {
        id: 5,
        src: "/images/projects/resu-genius/img-5.jpg",
      }
    ],
    testimonials: [],
  },
  {
          _id: 8,
          title: "Trip, Slip, Fall Detection",
          technologies: [Technology.Python, Technology.AI,Technology.DL],
          category: ProjectCategory.computervision,
          description: "The Trip, Slip, and Fall Detection System is a real-time safety monitoring solution designed to detect human falls using deep learning and live tracking. Developed with an LSTM-based architecture, the model analyzes temporal features from video feeds to distinguish between normal movement and fall events such as trips and slips. The system is integrated with a shared tracker to enable continuous live monitoring and localization of individuals in the frame, providing instant alerts upon fall detection. This enhances situational awareness for security or medical personnel in sensitive environments like elderly care, workplaces, and public areas.",
          bannerImage: "/images/projects/trip-slip-fall-detection/banner-image.png",
          details: [
              "Developed a real-time Trip, Slip, and Fall Detection system using LSTM for temporal motion analysis. Integrated a shared tracker to continuously monitor and track individuals across video frames. The model detects abnormal motion sequences and classifies them as fall events with high accuracy. Live alerts and visual overlays are triggered instantly to enable immediate safety responses."
          ],
          keyObjectives: [
              "Detect trip, slip, and fall events in real-time using LSTM-based temporal sequence analysis.",
              "Integrate live video input with a shared tracker for continuous person tracking and location monitoring.",
              "Trigger instant alerts upon detection of a fall to enable rapid response.",
              "Train the model with sequential motion data to distinguish falls from regular activities.",
              "Build a scalable solution suitable for deployment in smart surveillance systems and IoT edge devices."
          ],
          images:  [
          {
            id: 1,
            src: "/images/projects/trip-slip-fall-detection/camera-view.png",
          },
          {
            id: 2,
            src: "/images/projects/trip-slip-fall-detection/Dashboard.png",
          },
          {
            id: 3,
            src: "/images/projects/trip-slip-fall-detection/lincident-log.png",
          },
          {
            id: 4,
            src: "/images/projects/trip-slip-fall-detection/live-monitoring.png",
          },
          {
            id: 5,
            src: "/images/projects/trip-slip-fall-detection/setting.png",
          }
        ],
          demoLink: "",
          testimonials: []
      }
];

export default ProjectData;
