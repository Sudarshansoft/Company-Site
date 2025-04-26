"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const contactItems = [
  {
    label: "Email",
    value: "futureforge9188@gmail.com",
    icon: "/images/icon/email.svg",
  },
  {
    label: "Phone",
    value: "+009 42334 6343 843",
    icon: "/images/icon/phone.svg",
  },
  {
    label: "Address",
    value: (
      <>
        316, Green Plaza, Golden Chowk,<br />
        Mota Varachha, Surat, Gujarat - 394101
      </>
    ),
    icon: "/images/icon/location.svg",
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#121829] text-white text-base overflow-hidden">
      <div className="px-6 sm:px-10 lg:px-20 xl:px-32 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 text-left max-w-screen-xl mx-auto">
          {/* SOLID Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-5">
              <Image
                src="/images/logo/WhiteLogoWithName.svg"
                alt="Solid Logo"
                width={160}
                height={50}
                className="object-contain"
              />
            </div>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              We’re a passionate team delivering innovative digital solutions tailored to your business needs.
            </p>
            <div className="flex gap-4">
              {[
                { src: "/images/social/linkedin.svg", alt: "LinkedIn" },
                { src: "/images/social/instagram.svg", alt: "Instagram" },
                { src: "/images/social/whatsapp.svg", alt: "WhatsApp" },
                { src: "/images/social/facebook.svg", alt: "Facebook" },
              ].map((icon, index) => (
                <Link key={index} href="#" aria-label={icon.alt}>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1f273e] hover:bg-blue-500 transition">
                    <Image src={icon.src} alt={icon.alt} width={20} height={20} className="invert" />
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact Us Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6">Contact Us</h4>
            <div className="space-y-5">
              {contactItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 text-gray-300">
                  <Image src={item.icon} alt={item.label} width={20} height={20} className="invert mt-1" />
                  <div>
                    <p className="text-white font-medium mb-1">{item.label}:</p>
                    <p className="leading-relaxed text-base">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Company Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-gray-300 text-base">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Projects", href: "/projects" },
                { label: "About Us", href: "/about" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="hover:text-blue-500 transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-[#1f273e] text-center py-6 px-4 text-gray-500 text-sm">
        &copy; 2025 <span className="text-white font-semibold">Solid</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
