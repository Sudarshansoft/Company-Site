"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <>
      {/* <!-- ===== CTA Start ===== --> */}
      <section className="overflow-hidden px-4 py-20 md:px-8 lg:py-25 xl:py-30 2xl:px-0">
        <div className="mx-auto max-w-screen-xl rounded-2xl bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] px-6 py-12 md:px-10 lg:px-16 xl:py-8">
          <div className="flex flex-wrap gap-8 md:flex-nowrap md:items-center md:justify-between md:gap-0">
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-[70%] lg:w-1/2"
            >
              <h2 className="mb-4 w-full text-3xl font-bold text-black dark:text-white xl:text-sectiontitle4">
                Let’s Build Something Great Together
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Partner with us to bring your ideas to life through cutting-edge software solutions.
                Whether you're a startup or an enterprise, our team is ready to deliver exceptional results tailored to your business.
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right lg:w-[45%]"
            >
              <div className="flex items-center justify-end xl:justify-between">
                <Image
                  width={299}
                  height={299}
                  src="/images/shape/shape-06.png"
                  alt="Saly"
                  className="hidden xl:block"
                />
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white hover:opacity-90 dark:bg-white dark:text-black"
                >
                  Contact Us
                  <Image
                    width={20}
                    height={20}
                    src="/images/icon/icon-arrow-dark.svg"
                    alt="Arrow"
                    className="dark:hidden"
                  />
                  <Image
                    width={20}
                    height={20}
                    src="/images/icon/icon-arrow-light.svg"
                    alt="Arrow"
                    className="hidden dark:block"
                  />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== CTA End ===== --> */}
    </>
  );
};

export default CTA;