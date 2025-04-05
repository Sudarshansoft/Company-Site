import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[99]">
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="scroll to top"
          className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 via-blue-600 to-blue-700 text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl animate-pulse"
        >
          <svg
            className="h-6 w-6 transition-transform duration-300 group-hover:-translate-y-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
          <span className="sr-only">Scroll to top</span>
        </button>
      )}
    </div>
  );
}
