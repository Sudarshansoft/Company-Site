"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { title: "Home", path: "/" },
  { title: "Services", path: "/services" },
  { title: "Projects", path: "/projects" },
  { title: "About Us", path: "/about" },
];

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
          <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out py-4 ${
          isSticky ? "bg-white shadow dark:bg-gray-900" : "bg-transparent"
        }`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center h-[72px]">
          <Image
            src="/images/logo/BlackLogoWithoutName1.svg"
            alt="Logo"
            width={200}
            height={60}
            className="block dark:hidden object-contain max-h-[60px] w-auto"
            priority
          />
          <Image
            src="/images/logo/BlackLogoWithoutName1.svg"
            alt="Logo"
            width={200}
            height={60}
            className="hidden dark:block object-contain max-h-[60px] w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={item.path}
              className={`text-[16px] font-medium transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400 ${
                path === item.path
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Get a Quote Button */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition duration-300 text-sm font-semibold"
        >
          Get a Quote
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                mobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="md:hidden bg-white dark:bg-gray-900 px-4 pt-4 pb-6 shadow-lg"
        >
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400 ${
                  path === item.path
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {item.title}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-4 inline-block text-center w-full px-4 py-2 rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
            >
              Get a Quote
            </Link>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
