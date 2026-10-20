import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Download, Menu, X, ChevronDown, Languages } from "lucide-react";
import { useTranslation } from "react-i18next";
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

    // Close dropdowns on route change
    useEffect(() => {
        setIsOpen(false);
        setIsLangOpen(false);
        setIsMobileLangOpen(false);
    }, [location.pathname]);

    // Close mobile language dropdown if main menu closes
    useEffect(() => {
        if (!isOpen) setIsMobileLangOpen(false);
    }, [isOpen]);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close desktop language dropdown on outside click
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
        { name: t("navbar.features", { defaultValue: "Features" }), path: "/features" },
        { name: t("navbar.gallery", { defaultValue: "Gallery" }), path: "/gallery" },
        { name: t("navbar.contact", { defaultValue: "Contact Us" }), path: "/contact" },
    ];

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang.toLowerCase());
        setIsLangOpen(false);
        setIsMobileLangOpen(false);
    };

    return (
        <nav
            className={`w-full sticky top-0 z-50 transition-all duration-500 ease-in-out border-b ${scrolled ? "bg-white/95 backdrop-blur-md border-pink-100 shadow-[0_4px_20px_rgba(230,0,103,0.08)] py-1" : "bg-white border-transparent py-1.5"
                }`}
        >
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between w-full h-14">

                    {/* Left Side (Logo) */}
                    <div className="flex sm:ml-10 lg:flex-1 items-center justify-start">
                        <Link to="/" className="relative z-10 flex items-center flex-shrink-0 group">
                            <img
                                src={logo}
                                alt="Pink Shakti"
                                className="h-14 sm:h-16 w-auto object-contain transition-all duration-500 group-hover:scale-105"
                            />
                        </Link>
                    </div>

                    {/* Center (Nav Links) */}
                    <div className="hidden lg:flex items-center justify-center space-x-6 xl:space-x-10">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
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
                        ))}
                    </div>

                    {/* Right Side (Actions) */}
                    <div className="flex lg:flex-1 items-center justify-end gap-3 sm:gap-4">

                        {/* Get The App CTA */}
                        <a
                            href="https://play.google.com/store/apps/details?id=com.inaequalisconsulting.pinkshakti"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden sm:inline-flex items-center justify-center gap-2 rounded-full btn-pink-gradient px-4 py-2 text-sm font-semibold shadow-md transition-all duration-300 hover:shadow-[0_8px_20px_rgba(230,0,103,0.3)] hover:scale-[1.03] active:scale-95 whitespace-nowrap"
                        >
                            <Download className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1" />
                            <span>{t("navbar.getApp", { defaultValue: "Get The App" })}</span>
                        </a>

                        {/* Modern Desktop Language Button */}
                        <div className="hidden md:block relative" ref={langRef}>
                            <button
                                onClick={() => setIsLangOpen(!isLangOpen)}
                                className="group flex items-center justify-center gap-1.5 rounded-full bg-pink-50/50 border border-pink-100 px-3.5 py-1.5 shadow-sm transition-all duration-300 hover:bg-pink-100 hover:border-pink-200 hover:shadow-md active:scale-95 whitespace-nowrap"
                                aria-label="Select Language"
                            >
                                <Languages
                                    strokeWidth={2.5}
                                    className="h-4 w-4 text-[#E60067] transition-transform duration-300 group-hover:scale-110"
                                />
                                <span className="text-sm font-bold text-[#E60067] tracking-wide">
                                    {language === "EN" ? "EN" : "आ"}
                                </span>
                                <ChevronDown className={`w-3.5 h-3.5 text-[#E60067] transition-transform duration-300 group-hover:translate-y-0.5 ${isLangOpen ? "rotate-180" : ""}`} />
                            </button>

                            <div className={`absolute right-0 mt-3 w-36 bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden transition-all duration-300 origin-top-right ${isLangOpen ? "scale-100 opacity-100 translate-y-0 visible" : "scale-95 opacity-0 -translate-y-2 invisible"
                                }`}>
                                <div className="p-1.5">
                                    <button
                                        onClick={() => changeLanguage("EN")}
                                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${language === "EN" ? "bg-pink-50 text-[#E60067]" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`}
                                    >
                                        English
                                        {language === "EN" && <span className="h-1.5 w-1.5 rounded-full bg-[#E60067]"></span>}
                                    </button>
                                    <button
                                        onClick={() => changeLanguage("HI")}
                                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${language === "HI" ? "bg-pink-50 text-[#E60067]" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`}
                                    >
                                        हिन्दी
                                        {language === "HI" && <span className="h-1.5 w-1.5 rounded-full bg-[#E60067]"></span>}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Hamburger Button (Mobile & Tablet) */}
                        <button
                            type="button"
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-2 rounded-full text-gray-700 hover:text-[#E60067] hover:bg-pink-50 transition-all duration-300 focus:outline-none"
                        >
                            <div className="relative w-6 h-6 flex items-center justify-center">
                                <Menu className={`absolute w-6 h-6 transition-all duration-300 ${isOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}`} />
                                <X className={`absolute w-6 h-6 transition-all duration-300 ${isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}`} />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] bg-white/95 backdrop-blur-md shadow-2xl ${isOpen ? "max-h-[600px] opacity-100 border-t border-pink-50" : "max-h-0 opacity-0"}`}>
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

                    {/* Mobile Language Button (Like Desktop) */}
                    <div className="pt-2 px-2 md:hidden">
                        <button
                            onClick={() => setIsMobileLangOpen(!isMobileLangOpen)}
                            className="group flex items-center justify-center gap-1.5 rounded-full bg-pink-50/50 border border-pink-100 px-4 py-2 shadow-sm transition-all duration-300 hover:bg-pink-100 hover:border-pink-200 w-max"
                            aria-label="Select Language"
                        >
                            <Languages
                                strokeWidth={2.5}
                                className="h-4 w-4 text-[#E60067]"
                            />
                            <span className="text-sm font-bold text-[#E60067] tracking-wide">
                                {language === "EN" ? "EN" : "आ"}
                            </span>
                            <ChevronDown className={`w-3.5 h-3.5 text-[#E60067] transition-transform duration-300 ${isMobileLangOpen ? "rotate-180" : ""}`} />
                        </button>

                        {/* Mobile Language Dropdown */}
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileLangOpen ? "max-h-32 opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
                            <div className="w-40 bg-white rounded-2xl shadow-md border border-gray-100 p-1.5 ml-1">
                                <button
                                    onClick={() => changeLanguage("EN")}
                                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${language === "EN" ? "bg-pink-50 text-[#E60067]" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`}
                                >
                                    English
                                    {language === "EN" && <span className="h-1.5 w-1.5 rounded-full bg-[#E60067]"></span>}
                                </button>
                                <button
                                    onClick={() => changeLanguage("HI")}
                                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${language === "HI" ? "bg-pink-50 text-[#E60067]" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`}
                                >
                                    हिन्दी
                                    {language === "HI" && <span className="h-1.5 w-1.5 rounded-full bg-[#E60067]"></span>}
                                </button>
                            </div>
                        </div>
                    </div>

                    <a
                        href="https://play.google.com/store/apps/details?id=com.inaequalisconsulting.pinkshakti"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                        className="mt-6 flex sm:hidden items-center justify-center gap-2 w-full rounded-xl btn-pink-gradient px-4 py-3.5 text-sm font-semibold shadow-md transition-all duration-300 active:scale-95"
                    >
                        <Download className="h-5 w-5" />
                        <span>{t("navbar.getApp", { defaultValue: "Get The App" })}</span>
                    </a>
                </div>
            </div>
        </nav>
    );
}