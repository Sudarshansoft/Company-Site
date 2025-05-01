"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaLinkedin, FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
// Change 1: Import EmailJS
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [hasMounted, setHasMounted] = React.useState(false);

  // Change 2: Initialize EmailJS without dynamic script loading
  React.useEffect(() => {
    setHasMounted(true);
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey); // Initialize only if public key is available
    } else {
      console.error('EmailJS Public Key is not defined');
    } // Replace with your EmailJS public key
  }, []);

  if (!hasMounted) {
    return null;
  }

  // Handle form submission (unchanged)
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      fullName: e.target[0].value, // Full name
      email: e.target[1].value,    // Email address
      subject: e.target[2].value,  // Subject
      phone: e.target[3].value,    // Phone number
      message: e.target[4].value,  // Message
    };

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

    if (!serviceId || !templateId) {
      alert('EmailJS configuration is missing. Please contact support.');
      console.error('Service ID or Template ID is undefined:', { serviceId, templateId });
      return;
    }

    emailjs
      .send(serviceId, templateId, formData) // Replace with your EmailJS service ID and template ID
      .then(
        (result) => {
          alert("Message sent successfully!");
          e.target.reset(); // Reset the form after successful submission
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error("EmailJS error:", error);
        }
      );
  };

  return (
    <section id="support" className="px-4 md:px-8 2xl:px-0">
      <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
        <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>

        {/* Form Container */}
        <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top w-full rounded-lg bg-white p-7.5 shadow-lg dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4 xl:p-15"
          >
            <h2 className="mb-15 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
              Send a message
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-blue-500 focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  required
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-blue-500 focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  required
                />
              </div>

              <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-blue-500 focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  required
                />
                <input
                  type="text"
                  placeholder="Phone number"
                  className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-blue-500 focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                />
              </div>

              <div className="mb-11.5 flex">
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full border-b border-stroke bg-transparent focus:border-blue-500 focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                  required
                ></textarea>
              </div>

              <div className="flex flex-wrap gap-4 xl:justify-end">
                <button
                  type="submit"
                  aria-label="send message"
                  className="inline-flex items-center gap-2.5 rounded-full bg-blue-500 px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 relative"
                >
                  Send Message
                  <svg
                    className="fill-white transform transition-transform duration-300 ease-in-out"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                      fill=""
                    />
                  </svg>
                  <style jsx>{`
                    button:hover svg {
                      transform: translateX(8px);
                    }
                  `}</style>
                </button>
              </div>
            </form>
          </motion.div>

          {/* Contact Information Section */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-full md:w-2/5 md:p-8 lg:w-[26%] xl:pt-20"
          >
            <h2 className="mb-10 text-4xl font-bold text-gray-900 dark:text-white">
              Contact Information
            </h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-3xl text-blue-600" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Our Office</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                  16 Lakeville Rd,<br />Jamaica Plain, MA 02130, United States
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaEnvelope className="text-3xl text-blue-600" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Email Us</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    <a href="mailto:info@sudarshansoft.com">info@sudarshansoft.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-3xl text-blue-600" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Call Us</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    <a href="tel:+00942334634843">+1 (857) 421-9551</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-10">
              <h4 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                Connect With Us
              </h4>
              <div className="flex gap-5">
                <a
                  href="https://www.linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900 transition"
                >
                  <FaLinkedin className="text-3xl" />
                </a>
                <a
                  href="https://wa.me/your-phone-number"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-green-700 transition"
                >
                  <FaWhatsapp className="text-3xl" />
                </a>
                <a
                  href="https://www.instagram.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-700 transition"
                >
                  <FaInstagram className="text-3xl" />
                </a>
                <a
                  href="https://www.facebook.com/your-page"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition"
                >
                  <FaFacebook className="text-3xl" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;