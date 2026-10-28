import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Download, Menu, X, ChevronDown, Languages } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion"; // Added framer motion
import logo from "../../assets/logo/image.png";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileLangOpen, setIsMobileLangOpen] = useState(false);
  const language = i18n.language?.startsWith("hi") ? "HI" : "EN";
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const langRef = useRef(null);

  useEffect(() => {
    setIsOpen(false);
    setIsLangOpen(false);
    setIsMobileLangOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isOpen) setIsMobileLangOpen(false);
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) setIsLangOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: t("navbar.home", { defaultValue: "Home" }), path: "/" },
    { name: t("navbar.about", { defaultValue: "About Us" }), path: "/about" },
    { name: t("navbar.highlights", { defaultValue: "Highlights" }), path: "/highlights" },
    { name: t("navbar.gallery", { defaultValue: "Gallery" }), path: "/gallery" },
    { name: t("navbar.blogs", { defaultValue: "Blogs" }), path: "/blogs" },
    { name: t("navbar.ourVision", { defaultValue: "Our Vision" }), path: "/our-vision" },
  ];

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang.toLowerCase());
    setIsLangOpen(false);
    setIsMobileLangOpen(false);
  };

  return (
    // Slide down Navbar on load
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className={`w-full sticky top-0 z-50 transition-colors duration-500 ease-in-out border-b ${scrolled ? "bg-[var(--color-theme,#fceaf1)]/95 backdrop-blur-md border-pink-200/80 shadow-[0_4px_20px_rgba(230,0,103,0.08)] py-1" : "bg-[var(--color-theme,#fceaf1)] border-transparent py-1.5"
        }`}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full h-14">

          {/* Logo with Hover Bounce */}
          <div className="flex sm:ml-10 lg:flex-1 items-center justify-start">
            <Link to="/" className="relative z-10 flex items-center flex-shrink-0 group">
              <motion.img
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                src={logo}
                alt="Pink Shakti"
                loading="eager"
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Center (Nav Links) - Staggered reveal */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
            }}
            className="hidden lg:flex items-center justify-center space-x-4 xl:space-x-7"
          >
            {navLinks.map((link) => (
              <motion.div key={link.name} variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `group relative py-2 text-[15px] font-medium transition-colors duration-300 whitespace-nowrap ${isActive ? "text-[#E60067]" : "text-gray-600 hover:text-[#E60067]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      <span className={`absolute left-1/2 bottom-0 h-[2.5px] rounded-full -translate-x-1/2 bg-[#E60067] transition-all duration-300 ease-out ${isActive ? "w-4/5 opacity-100" : "w-0 opacity-0 group-hover:w-4/5 group-hover:opacity-100"
                        }`}></span>
                    </>
                  )}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side (Actions) */}
          <div className="flex lg:flex-1 items-center justify-end gap-3 sm:gap-4">

            {/* Download CTA Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://play.google.com/store/apps/details?id=com.inaequalisconsulting.pinkshakti"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center gap-2 rounded-full btn-pink-gradient px-4 py-2 text-sm font-semibold shadow-md whitespace-nowrap"
            >
              <Download className="h-4 w-4" />
              <span>{t("navbar.getApp", { defaultValue: "Get The App" })}</span>
            </motion.a>

            {/* Desktop Language Dropdown (AnimatePresence for smooth toggle) */}
            <div className="hidden md:block relative" ref={langRef}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="group flex items-center justify-center gap-1.5 rounded-full bg-pink-50/50 border border-pink-100 px-3.5 py-1.5 shadow-sm hover:bg-pink-100 hover:border-pink-200 whitespace-nowrap"
              >
                <Languages strokeWidth={2.5} className="h-4 w-4 text-[#E60067]" />
                <span className="text-sm font-bold text-[#E60067] tracking-wide">
                  {language === "EN" ? "EN" : "आ"}
                </span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#E60067] transition-transform duration-300 ${isLangOpen ? "rotate-180" : ""}`} />
              </motion.button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-3 w-36 bg-[var(--color-theme,#fceaf1)] rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-pink-200 overflow-hidden origin-top-right"
                  >
                    <div className="p-1.5">
                      <button
                        onClick={() => changeLanguage("EN")}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium ${language === "EN" ? "bg-pink-50 text-[#E60067]" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`}
                      >
                        English
                        {language === "EN" && <span className="h-1.5 w-1.5 rounded-full bg-[#E60067]"></span>}
                      </button>
                      <button
                        onClick={() => changeLanguage("HI")}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium ${language === "HI" ? "bg-pink-50 text-[#E60067]" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`}
                      >
                        हिन्दी
                        {language === "HI" && <span className="h-1.5 w-1.5 rounded-full bg-[#E60067]"></span>}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Toggle Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-full text-gray-700 hover:text-[#E60067] hover:bg-pink-50 focus:outline-none"
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                <Menu className={`absolute w-6 h-6 transition-all duration-300 ${isOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}`} />
                <X className={`absolute w-6 h-6 transition-all duration-300 ${isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}`} />
              </div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Smooth Mobile Menu with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-[var(--color-theme,#fceaf1)]/98 backdrop-blur-md shadow-2xl border-t border-pink-200/80"
          >
            <div className="px-4 py-5 space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${isActive ? "bg-pink-50 text-[#E60067] translate-x-2" : "text-gray-600 hover:bg-gray-50 hover:text-[#E60067] hover:translate-x-1"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              {/* Mobile Lang Option */}
              <div className="pt-2 px-2 md:hidden">
                <button
                  onClick={() => setIsMobileLangOpen(!isMobileLangOpen)}
                  className="group flex items-center justify-center gap-1.5 rounded-full bg-pink-50/50 border border-pink-100 px-4 py-2 shadow-sm"
                >
                  <Languages strokeWidth={2.5} className="h-4 w-4 text-[#E60067]" />
                  <span className="text-sm font-bold text-[#E60067] tracking-wide">
                    {language === "EN" ? "EN" : "आ"}
                  </span>
                  <ChevronDown className={`w-3.5 h-3.5 text-[#E60067] transition-transform duration-300 ${isMobileLangOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {isMobileLangOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden mt-2 ml-1 w-40 bg-[var(--color-theme,#fceaf1)] rounded-2xl shadow-md border border-pink-200"
                    >
                      <div className="p-1.5">
                        <button onClick={() => changeLanguage("EN")} className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium ${language === "EN" ? "bg-pink-50 text-[#E60067]" : "text-gray-600"}`}>
                          English
                          {language === "EN" && <span className="h-1.5 w-1.5 rounded-full bg-[#E60067]"></span>}
                        </button>
                        <button onClick={() => changeLanguage("HI")} className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium ${language === "HI" ? "bg-pink-50 text-[#E60067]" : "text-gray-600"}`}>
                          हिन्दी
                          {language === "HI" && <span className="h-1.5 w-1.5 rounded-full bg-[#E60067]"></span>}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href="https://play.google.com/store/apps/details?id=com.inaequalisconsulting.pinkshakti"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-6 flex sm:hidden items-center justify-center gap-2 w-full rounded-xl btn-pink-gradient px-4 py-3.5 text-sm font-semibold shadow-md active:scale-95 transition-all"
              >
                <Download className="h-5 w-5" />
                <span>{t("navbar.getApp", { defaultValue: "Get The App" })}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}