import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Download, Menu, X, ChevronDown } from "lucide-react";
import logo from "../../assets/logo/image.png";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isMobileLangOpen, setIsMobileLangOpen] = useState(false);
    const [language, setLanguage] = useState("EN");
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
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Features", path: "/features" },
        { name: "Gallery", path: "/gallery" },
        { name: "Contact Us", path: "/contact" },
    ];

    const changeLanguage = (lang) => {
        setLanguage(lang);
        setIsLangOpen(false);
        setIsMobileLangOpen(false);
    };

    return (
        <nav 
            className={`w-full sticky top-0 z-50 transition-all duration-500 ease-in-out border-b ${
                scrolled ? "bg-white/90 backdrop-blur-md border-pink-100 shadow-[0_4px_20px_rgba(230,0,103,0.08)] py-1.5" : "bg-white border-transparent py-2.5"
            }`}
        >
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Navbar container - flex with relative for absolute centering of nav links */}
                <div className="flex items-center justify-between w-full h-16 sm:h-16 relative">
                    
                    {/* Logo (Left side) */}
                    <Link to="/" className="relative z-10 flex items-center flex-shrink-0 group lg:ml-10">
                        <img
                            src={logo}
                            alt="Pink Shakti"
                            className="h-14 sm:h-18 w-auto object-contain transition-all duration-500 group-hover:scale-110 group-hover:-rotate-1"
                        />
                    </Link>

                    {/* Nav Links (Perfectly Centered) */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-10 absolute left-1/2 -translate-x-1/2">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `group relative py-2 text-[15px] font-medium transition-colors duration-300 ${
                                        isActive ? "text-[#E60067]" : "text-gray-600 hover:text-[#E60067]"
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        {link.name}
                                        <span className={`absolute left-1/2 bottom-0 h-[2.5px] rounded-full -translate-x-1/2 bg-[#E60067] transition-all duration-300 ease-out ${
                                            isActive ? "w-4/5 opacity-100" : "w-0 opacity-0 group-hover:w-4/5 group-hover:opacity-100"
                                        }`}></span>
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </div>

                    {/* Right Actions (Right side) */}
                    <div className="flex items-center gap-3 sm:gap-4 lg:mr-6">
                        
                        {/* Get The App CTA */}
                        <Link
                            to="/downloads"
                            className="hidden sm:inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E60067] to-[#ff2a85] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:shadow-[0_8px_20px_rgba(230,0,103,0.3)] hover:scale-[1.03] active:scale-95"
                        >
                            <Download className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1" />
                            <span>Get The App</span>
                        </Link>

                        {/* Desktop Language Button */}
                        <div className="hidden md:block relative" ref={langRef}>
                            <button
                                onClick={() => setIsLangOpen(!isLangOpen)}
                                className="flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-[#E60067] to-[#ff2a85] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:shadow-[0_8px_20px_rgba(230,0,103,0.3)] hover:scale-[1.03] active:scale-95"
                            >
                                <span>Language</span>
                                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isLangOpen ? "rotate-180" : ""}`} />
                            </button>
                            
                            <div className={`absolute right-0 mt-3 w-32 bg-white rounded-2xl shadow-xl border border-pink-50 overflow-hidden transition-all duration-300 origin-top ${
                                isLangOpen ? "scale-100 opacity-100 translate-y-0 visible" : "scale-95 opacity-0 -translate-y-2 invisible"
                            }`}>
                                <button onClick={() => changeLanguage("EN")} className={`w-full text-left px-5 py-2.5 text-sm transition-colors duration-200 ${language === "EN" ? "bg-pink-50 text-[#E60067] font-semibold" : "text-gray-700 hover:bg-gray-50 hover:text-[#E60067]"}`}>English</button>
                                <button onClick={() => changeLanguage("HI")} className={`w-full text-left px-5 py-2.5 text-sm transition-colors duration-200 ${language === "HI" ? "bg-pink-50 text-[#E60067] font-semibold" : "text-gray-700 hover:bg-gray-50 hover:text-[#E60067]"}`}>हिन्दी</button>
                            </div>
                        </div>

                        {/* Hamburger Button (Mobile Only) */}
                        <button
                            type="button"
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2.5 rounded-full text-gray-700 hover:text-[#E60067] hover:bg-pink-50 transition-all duration-300 focus:outline-none"
                        >
                            <div className="relative w-6 h-6 flex items-center justify-center">
                                <Menu className={`absolute w-6 h-6 transition-all duration-300 ${isOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}`} />
                                <X className={`absolute w-6 h-6 transition-all duration-300 ${isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}`} />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown Menu with smooth slide down */}
            <div className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] bg-white/95 backdrop-blur-md shadow-2xl ${isOpen ? "max-h-[500px] opacity-100 border-t border-pink-50" : "max-h-0 opacity-0"}`}>
                <div className="px-4 py-5 space-y-2">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                                    isActive ? "bg-pink-50 text-[#E60067] translate-x-2" : "text-gray-600 hover:bg-gray-50 hover:text-[#E60067] hover:translate-x-1"
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    
                    {/* Mobile Language Option */}
                    <div className="pt-2">
                        <button
                            onClick={() => setIsMobileLangOpen(!isMobileLangOpen)}
                            className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-base font-medium text-gray-600 transition-colors duration-300 hover:text-[#E60067] hover:bg-gray-50"
                        >
                            <span>Language</span>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-400 ${isMobileLangOpen ? "rotate-180" : ""}`} />
                        </button>

                        <div className={`overflow-hidden transition-all duration-400 ease-in-out ${isMobileLangOpen ? "max-h-32 opacity-100 mt-1" : "max-h-0 opacity-0"}`}>
                            <div className="flex flex-col pl-6 pr-2 space-y-1 border-l-2 border-pink-100 ml-4">
                                <button
                                    onClick={() => changeLanguage("EN")}
                                    className={`text-left px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${language === "EN" ? "text-[#E60067] bg-pink-50/50" : "text-gray-500 hover:text-[#E60067]"}`}
                                >
                                    English
                                </button>
                                <button
                                    onClick={() => changeLanguage("HI")}
                                    className={`text-left px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${language === "HI" ? "text-[#E60067] bg-pink-50/50" : "text-gray-500 hover:text-[#E60067]"}`}
                                >
                                    हिन्दी
                                </button>
                            </div>
                        </div>
                    </div>

                    <Link
                        to="/downloads"
                        onClick={() => setIsOpen(false)}
                        className="mt-6 flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-[#E60067] to-[#ff2a85] px-4 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 active:scale-95"
                    >
                        <Download className="h-5 w-5" />
                        <span>Get The App</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}