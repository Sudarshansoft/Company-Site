"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { FaLocationArrow, FaPhoneAlt, FaEnvelope, FaLinkedin, FaWhatsapp, FaUserPlus } from "react-icons/fa";

const Contact = () => {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <section id="support" className="px-4 md:px-8 2xl:px-0">
      <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
        <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>

        {/* Form Container */}
        <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
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

            <form action="https://formbold.com/s/unique_form_id" method="POST">
              <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-blue-500 focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-blue-500 focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                />
              </div>

              <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-blue-500 focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
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
                ></textarea>
              </div>

              <div className="flex flex-wrap gap-4 xl:justify-end">
                <button
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
      transform: translateX(8px); /* Move arrow to the right */
    }
  `}</style>
                </button>

              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 2, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15"
          >
            <h2 className="mb-12.5 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
              Find us
            </h2>

            <div className="mb-7">
              <h3 className="mb-3 text-xl font-medium text-black dark:text-white">
                <FaLocationArrow className="inline mr-3 text-blue-500" />
                Our Location
              </h3>
              <p>316, Green Plaza, Mota Varachha, Surat, Gujarat - 394101</p>
            </div>

            <div className="mb-7">
              <h3 className="mb-3 text-xl font-medium text-black dark:text-white">
                <FaEnvelope className="inline mr-3 text-blue-500" />
                Email Address
              </h3>
              <p>
                <a href="mailto:futureforge9188@gmail.com">futureforge9188@gmail.com</a>
              </p>
            </div>

            <div>
              <h4 className="mb-3 text-xl font-medium text-black dark:text-white">
                <FaPhoneAlt className="inline mr-3 text-blue-500" />
                Phone Number
              </h4>
              <p>
                <a href="tel:+00942334634843">+009 42334 6343 843</a>
              </p>
            </div>

            <div className="mt-7">
              <h4 className="mb-3 text-xl font-medium text-black dark:text-white">
                <FaUserPlus className="text-3xl inline mr-3 text-blue-500"/>
                Follow us
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FaLinkedin className="text-4xl" />
                </a>
                <a
                  href="https://wa.me/your-phone-number"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-800"
                >
                  <FaWhatsapp className="text-4xl" />
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
