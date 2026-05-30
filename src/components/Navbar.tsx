import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "Home",
    "About",

    // "Team",

    "Projects",
    "Gallery",
    "Skills",
    "Resume",
    "Certificates",
    "Blog",
    "Contact",
  ];

  const scrollToSection = (item: string) => {
    const id = item.toLowerCase();
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });

      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-3 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="relative w-full px-6 py-4 flex items-center justify-center">

          {/* LEFT: Logo + Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-3"
          >
            {/* Logo */}
           <div
  style={{
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    overflow: "hidden",
    flexShrink: 0,
  }}
>
  <img
    src="/favicon.png"
    alt="AKG Logo"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      objectPosition: "center",
    }}
  />
</div>

            {/* Name + Subtitle */}
            <div className="flex flex-col">
              <span className="text-gray-900 dark:text-white font-semibold text-base md:text-lg">
                Akash Kumar Gupta
              </span>

              <span className="text-blue-500 dark:text-purple-100 font-medium text-sm md:text-base">
                Full Stack Web Developer
              </span>
            </div>
          </motion.div>

          {/* CENTER NAV LINKS */}
          <div className="hidden md:flex justify-center gap-8">
            {navItems.map((item, idx) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => scrollToSection(item)}
                className="text-gray-900 dark:text-white/80 hover:text-blue-500 dark:hover:text-purple-400 transition-colors text-base md:text-lg font-semibold relative group"
              >
                {item}

                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </motion.button>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-3">

            <motion.a
              href="mailto:akashgjimt@gmail.com"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="hidden md:inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Hire Me
            </motion.a>

            <button
              className="md:hidden text-gray-900 dark:text-white"
              onClick={() =>
                setMobileMenuOpen(!mobileMenuOpen)
              }
            >
              {mobileMenuOpen ? (
                <X size={28} />
              ) : (
                <Menu size={28} />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          className="fixed inset-0 z-40 bg-white dark:bg-black/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-8"
        >
          {navItems.map((item, idx) => (
            <motion.button
              key={item}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => scrollToSection(item)}
              className="text-gray-900 dark:text-white text-2xl hover:text-blue-500 dark:hover:text-purple-400 transition-colors font-semibold"
            >
              {item}
            </motion.button>
          ))}

          <motion.a
            href="mailto:akashgjimt@gmail.com"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: navItems.length * 0.05,
            }}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xl font-semibold hover:opacity-90 transition-opacity"
          >
            Hire Me
          </motion.a>
        </motion.div>
      )}
    </>
  );
}