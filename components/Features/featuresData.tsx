import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="4" y="4" width="56" height="40" rx="4"/>
        <line x1="4" y1="14" x2="60" y2="14"/>
        <polyline points="24 24 20 28 24 32"/>
        <polyline points="40 24 44 28 40 32"/>
        <line x1="30" y1="24" x2="34" y2="32"/>
      </svg>

    ),
    title: "Web Development",
    description:
      "Building responsive and scalable websites tailored to your business needs.",
    additionalDetails: (
      <div>
        <p>
          Custom web applications built with modern frameworks like React, Angular, and Vue.js.
          We create responsive, scalable, and performant solutions tailored to your needs.
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Single Page Applications</li>
          <li>Progressive Web Apps</li>
          <li>E-commerce Solutions</li>
          <li>Custom CMS Development</li>
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="18" y="4" width="28" height="56" rx="4"/>
        <circle cx="32" cy="52" r="2"/>
      </svg>
    ),
    title: "Mobile App Development",
    description:
      "Creating high-performance mobile applications for Android and iOS platforms.",
    additionalDetails: (
      <div>
        <p>
          Native and cross-platform mobile applications for iOS and Android. We use React Native and Flutter to deliver high-quality mobile experiences.
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>iOS Development</li>
          <li>Android Development</li>
          <li>Cross-platform Solutions</li>
          <li>App Store Optimization</li>
        </ul>
      </div>
    ),
  },
  {
    id: 3,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M24 12a8 8 0 0 0-8 8v4a4 4 0 0 0 0 8v4a4 4 0 0 0 0 8v4a8 8 0 0 0 8 8M40 12a8 8 0 0 1 8 8v4a4 4 0 0 1 0 8v4a4 4 0 0 1 0 8v4a8 8 0 0 1-8 8M32 20v24"/>
        <circle cx="32" cy="20" r="2"/>
        <circle cx="32" cy="44" r="2"/>
      </svg>
    ),
    title: "AI/ML Solutions",
    description:
      "Leveraging AI and machine learning to build intelligent applications.",
    additionalDetails: (
      <div>
        <p>
          Cutting-edge artificial intelligence and machine learning solutions to transform your business with intelligent automation and data-driven insights.
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Predictive Analytics</li>
          <li>Natural Language Processing</li>
          <li>Computer Vision</li>
          <li>Machine Learning Models</li>
        </ul>
      </div>
    ),
  },
  {
    id: 4,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <ellipse cx="32" cy="12" rx="20" ry="6"/>
        <path d="M12 12v12c0 3.3 8.95 6 20 6s20-2.7 20-6V12"/>
        <path d="M12 24v12c0 3.3 8.95 6 20 6s20-2.7 20-6V24"/>
        <path d="M12 36v12c0 3.3 8.95 6 20 6s20-2.7 20-6V36"/>
      </svg>
    ),
    title: "Database Solutions",
    description:
      "Efficient data modeling, management, and performance optimization.",
    additionalDetails: (
      <div>
        <p>
          Robust database design and implementation using both SQL and NoSQL technologies to ensure efficient data management and scalability.
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Database Design</li>
          <li>Data Migration</li>
          <li>Performance Optimization</li>
          <li>Data Security</li>
        </ul>
      </div>
    ),
  },
  {
    id: 5,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 48h24a10 10 0 0 0 0-20 14 14 0 0 0-26-4A8 8 0 0 0 20 48z"/>
        <polyline points="32 36 36 40 32 44"/>
        <line x1="36" y1="40" x2="28" y2="40"/>
      </svg>
    ),
    title: "Cloud Services",
    description:
      "Scalable cloud infrastructure and deployment automation.",
    additionalDetails: (
      <div>
        <p>
          Comprehensive cloud solutions using AWS, Azure, and Google Cloud Platform to build scalable and reliable infrastructure.
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Cloud Migration</li>
          <li>DevOps</li>
          <li>Serverless Architecture</li>
          <li>Cloud Security</li>
        </ul>
      </div>
    ),
  },
  {
    id: 6,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M32 4l24 10v14c0 16-11.4 30-24 32C19.4 58 8 44 8 28V14z"/>
        <rect x="24" y="28" width="16" height="16" rx="2"/>
        <path d="M32 28v-4a4 4 0 0 1 8 0v4"/>
      </svg>
    ),
    title: "Cybersecurity",
    description:
      "Protecting digital assets with robust security strategies and practices.",
    additionalDetails: (
      <div>
        <p>
          Advanced security solutions to protect your digital assets and ensure compliance with industry standards and regulations.
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Security Audits</li>
          <li>Penetration Testing</li>
          <li>Compliance Management</li>
          <li>Security Training</li>
        </ul>
      </div>
    ),
  },
];

export default featuresData;
