import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: "/images/icon/icon-01.svg",
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
    icon: "/images/icon/icon-02.svg",
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
    icon: "/images/icon/icon-03.svg",
    title: "AI/ML Development",
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
    icon: "/images/icon/icon-04.svg",
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
    icon: "/images/icon/icon-05.svg",
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
    icon: "/images/icon/icon-06.svg",
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
