"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#121829] text-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-0 md:gap-x-10 lg:gap-x-20">
          {/* ABOUT SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-primary mb-4">SOLID</h3>
            <p className="text-sm text-gray-400 mb-6 max-w-xs">
            We're a passionate team delivering innovative digital solutions tailored to your business needs. Let’s build something amazing together.
            </p>
            <div className="flex space-x-2">
            {[
              {
                href: "#",
                src: "/images/social/linkedin.svg",
                alt: "LinkedIn",
                hoverColor: "hover:bg-[#0077b5]",
              },
              {
                href: "#",
                src: "/images/social/instagram.svg",
                alt: "Instagram",
                hoverColor: "hover:bg-[#E4405F]",
              },
              {
                href: "#",
                src: "/images/social/whatsapp.svg",
                alt: "WhatsApp",
                hoverColor: "hover:bg-[#25D366]",
              },
              {
                href: "#",
                src: "/images/social/facebook.svg",
                alt: "Facebook",
                hoverColor: "hover:bg-[#1877F2]",
              },
            ].map((icon, index) => (
              <Link
                key={index}
                href={icon.href}
                className={`w-9 h-9 rounded-full bg-[#1f273e] ${icon.hoverColor} flex items-center justify-center transition-colors duration-300`}
              >
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={18}
                  height={18}
                  className="invert"
                />
              </Link>
            ))}
          </div>
          </motion.div>

          {/* PAGES SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:flex md:justify-center"
          >
            <div>
              <h4 className="text-lg font-semibold mb-6">Pages</h4>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li>
                  <Link href="/" className="hover:text-primary">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-primary">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-primary">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* CONTACT SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:flex md:justify-end"
          >
            <div className="max-w-xs">
              <h4 className="text-lg font-semibold mb-6">Contact</h4>
              <p className="text-sm text-gray-400 mb-3">
                <span className="font-medium text-white">Location:</span>
                <br />
                316, Green Plaza, Mota Varachha, Surat, Gujarat - 394101
              </p>
              <p className="text-sm text-gray-400 mb-3">
                <span className="font-medium text-white">Email:</span>
                <br />
                futureforge9188@gmail.com
              </p>
              <p className="text-sm text-gray-400">
                <span className="font-medium text-white">Phone:</span>
                <br />
                +009 42334 6343 843
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* COPYRIGHT BAR */}
      <div className="border-t border-strokedark py-6 text-center text-sm text-gray-400">
        &copy; 2025 <span className="text-white font-semibold">Solid</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
