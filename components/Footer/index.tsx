"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiSend } from "react-icons/fi";

const contactItems = [
  {
    label: "Email",
    value: "info@sudarshansoft.com",
    icon: "/images/icon/email.svg",
  },
  {
    label: "Phone",
    value: "+1 (857) 421-9551",
    icon: "/images/icon/phone.svg",
  },
  {
    label: "Address",
    value: (
      <>
        16 Lakeville Rd
        <br />
        Jamaica Plain, MA 02130, United States
      </>
    ),
    icon: "/images/icon/location.svg",
  },
];

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = () => {
    const mailtoLink = `mailto:info@sudarshansoft.com?subject=New Inquiry&body=User Email: ${email}`;
    window.location.href = mailtoLink;
  };

  return (
    <footer className="relative z-10 w-full overflow-hidden bg-[#0c0f1f] text-base text-white shadow-inner">
      <div className="bg-gradient-to-br from-[#121829] via-[#0f162a] to-[#0c0f1f] px-6 py-16 sm:px-10 lg:px-20 xl:px-32">
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-10 text-left sm:grid-cols-2 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <Image
              src="/images/logo/SUDARSHANSOFT4Dark.png"
              alt="Logo"
              width={160}
              height={50}
              className="mb-5 object-contain"
            />
            <p className="mb-6 max-w-sm leading-relaxed text-gray-400">
              We craft tailored solutions to drive growth and success in the
              digital world.
            </p>
            <div className="flex gap-3">
              {[
                { src: "/images/social/linkedin.svg", alt: "LinkedIn", href: "https://www.linkedin.com/company/sudarshansoft/" },
                { src: "/images/social/instagram.svg", alt: "Instagram", href: "https://www.instagram.com/your-profile" },
                { src: "/images/social/whatsapp.svg", alt: "WhatsApp", href: "https://wa.me/+18574219551" },
                { src: "/images/social/facebook.svg", alt: "Facebook", href: "https://www.facebook.com/your-page" },
              ].map((icon, index) => (
                <Link
                  key={index}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={icon.alt}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1f273e] transition-shadow hover:bg-blue-600 hover:shadow-lg">
                    <Image
                      src={icon.src}
                      alt={icon.alt}
                      width={20}
                      height={20}
                      className="invert"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h4 className="mb-6 text-xl font-semibold text-white">
              Contact Info
            </h4>
            <div className="space-y-5 text-sm text-gray-300">
              {contactItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={20}
                    height={20}
                    className="mt-1 invert"
                  />
                  <div>
                    <p className="font-medium text-white">{item.label}:</p>
                    <p className="leading-relaxed">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h4 className="mb-6 text-xl font-semibold text-white">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Projects", href: "/projects" },
                { label: "About Us", href: "/about" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="transition hover:text-blue-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h4 className="mb-6 text-xl font-semibold text-white">
              Let’s Connect
            </h4>
            <p className="mb-4 text-sm text-gray-400">
              Drop your email and we’ll get back to you shortly.
            </p>
            <div className="mb-4 flex items-center">
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-10 rounded-l-md border border-gray-600 bg-[#1f273e] px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleEmailSubmit}
                className=" h-10 flex items-center justify-center rounded-r-md bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
              >
                <FiSend className="h-6 w-5" />
              </button>
            </div>

            <Link
              href="/contact"
              className="mt-2 inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow transition hover:shadow-lg"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-[#1f273e] bg-[#0b0f1a] px-4 py-6 text-center text-sm text-gray-500">
        © 2025{" "}
        <span className="font-semibold text-white">SudarshanSoft</span>. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;