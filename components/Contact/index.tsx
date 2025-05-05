"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaLinkedin, FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Contact = () => {
  const [hasMounted, setHasMounted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [phone, setPhone] = React.useState('');

  React.useEffect(() => {
    setHasMounted(true);
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      try {
        emailjs.init(publicKey);
      } catch (error) {
        console.error('Failed to initialize EmailJS:', error);
      }
    } else {
      console.error('EmailJS Public Key is not defined. Please set NEXT_PUBLIC_EMAILJS_PUBLIC_KEY in your .env.local file.');
    }
  }, []);

  if (!hasMounted) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const data = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      phone: phone,
      message: formData.get('message'),
    };

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

    if (!serviceId || !templateId) {
      alert('EmailJS configuration is missing. Please check your .env.local file for NEXT_PUBLIC_EMAILJS_SERVICE_ID and NEXT_PUBLIC_EMAILJS_TEMPLATE_ID.');
      console.error('Service ID or Template ID is undefined:', { serviceId, templateId });
      setIsSubmitting(false);
      return;
    }

    emailjs
      .send(serviceId, templateId, data)
      .then(
        (result) => {
          alert("Message sent successfully!");
          e.target.reset();
          setPhone('');
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error("EmailJS error:", error);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="support" className="px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-0">
      <div className="relative mx-auto max-w-c-1390 px-4 sm:px-6 lg:px-15 pt-8 sm:pt-10 lg:pt-15 xl:pt-20">
        <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-xl bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>

        <div className="flex flex-col-reverse flex-wrap gap-6 sm:gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top w-full rounded-xl bg-white p-6 sm:p-8 shadow-xl dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4 xl:p-15"
          >
            <h2 className="mb-8 sm:mb-10 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-6 flex flex-col gap-6 lg:flex-row lg:justify-between lg:gap-8">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className="w-full rounded-lg border border-gray-200 bg-white px-5 py-4 text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:placeholder-gray-500 dark:focus:border-blue-400 dark:focus:ring-blue-600 transition-all duration-300"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full rounded-lg border border-gray-200 bg-white px-5 py-4 text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:placeholder-gray-500 dark:focus:border-blue-400 dark:focus:ring-blue-600 transition-all duration-300"
                  required
                />
              </div>

              <div className="mb-6 flex flex-col gap-6 lg:flex-row lg:justify-between lg:gap-8">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full rounded-lg border border-gray-200 bg-white px-5 py-4 text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:placeholder-gray-500 dark:focus:border-blue-400 dark:focus:ring-blue-600 transition-all duration-300"
                  required
                />
                <div className="w-full relative">
                  <PhoneInput
                    country={'us'}
                    value={phone}
                    onChange={setPhone}
                    inputProps={{
                      name: "phone",
                      className: "w-full rounded-lg border border-gray-200 bg-white pl-14 pr-5 py-4 text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:placeholder-gray-500 dark:focus:border-blue-400 dark:focus:ring-blue-600 transition-all duration-300",
                      placeholder: "Phone Number",
                    }}
                    containerStyle={{ position: "relative" }}
                    buttonStyle={{
                      background: "transparent",
                      border: "none",
                      padding: "0 0 0 12px",
                      margin: "0",
                      position: "absolute",
                      left: "0",
                      top: "50%",
                      transform: "translateY(-50%)",
                      zIndex: 10, // Ensure flag button is above input
                    }}
                    dropdownStyle={{
                      borderRadius: "8px",
                      maxHeight: "250px",
                      overflowY: "auto",
                      background: "#fff",
                      color: "#000",
                      width: "auto",
                      minWidth: "250px",
                      zIndex: 50, // Ensure dropdown appears above other elements
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                      border: "1px solid #e5e7eb",
                    }}
                    dropdownClass="custom-phone-dropdown" // Add custom class for additional styling if needed
                  />
                  <style jsx global>{`
                    .custom-phone-dropdown {
                      margin-top: 5px;
                    }
                    .custom-phone-dropdown .country {
                      padding: 8px 12px;
                      font-size: 14px;
                      display: flex;
                      align-items: center;
                      gap: 8px;
                    }
                    .custom-phone-dropdown .country:hover {
                      background-color: #f0f0f0;
                    }
                    .custom-phone-dropdown .flag {
                      margin-right: 8px;
                    }
                    .custom-phone-dropdown .dial-code {
                      color: #6b7280;
                    }
                  `}</style>
                </div>
              </div>

              <div className="mb-6 flex">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  className="w-full rounded-lg border border-gray-200 bg-white px-5 py-4 text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:placeholder-gray-500 dark:focus:border-blue-400 dark:focus:ring-blue-600 transition-all duration-300"
                  required
                ></textarea>
              </div>

              <div className="flex flex-wrap gap-4 justify-center sm:justify-end">
                <button
                  type="submit"
                  aria-label="send message"
                  className="inline-flex items-center gap-2.5 rounded-full bg-blue-600 px-5 sm:px-6 py-3 font-medium text-white shadow-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-300 ease-in-out"
                  disabled={isSubmitting}
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
                    button:disabled {
                      opacity: 0.5;
                      cursor: not-allowed;
                    }
                  `}</style>
                </button>
              </div>
            </form>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-full md:w-2/5 md:p-6 lg:p-8 lg:w-[26%] xl:pt-20"
          >
            <h2 className="mb-8 sm:mb-10 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
              Contact Information
            </h2>

            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-2xl sm:text-3xl text-blue-600 flex-shrink-0" />
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white">Our Office</h4>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    Boston, MA
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaEnvelope className="text-2xl sm:text-3xl text-blue-600 flex-shrink-0" />
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white">Email Us</h4>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    <a href="mailto:info@sudarshansoft.com" className="hover:text-blue-500 transition-colors">
                      info@sudarshansoft.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-2xl sm:text-3xl text-blue-600 flex-shrink-0" />
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white">Call Us</h4>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    <a href="tel:+18574219551" className="hover:text-blue-500 transition-colors">
                      +1 (857) 421-9551
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-10">
              <h4 className="mb-4 text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                Connect With Us
              </h4>
              <div className="flex gap-4 sm:gap-5 flex-wrap">
                <a
                  href="https://www.linkedin.com/company/sudarshansoft/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900 transition-all duration-300"
                >
                  <FaLinkedin className="text-2xl sm:text-3xl" />
                </a>
                <a
                  href="https://wa.me/+18574219551"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-green-700 transition-all duration-300"
                >
                  <FaWhatsapp className="text-2xl sm:text-3xl" />
                </a>
                <a
                  href="https://www.instagram.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-700 transition-all duration-300"
                >
                  <FaInstagram className="text-2xl sm:text-3xl" />
                </a>
                <a
                  href="https://www.facebook.com/your-page"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-all duration-300"
                >
                  <FaFacebook className="text-2xl sm:text-3xl" />
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