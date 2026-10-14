import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Download, Menu, X } from "lucide-react";
import logo from "../../assets/logo/image.png";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Features", path: "/features" },
        { name: "Gallery", path: "/gallery" },
       
        { name: "Contact Us", path: "/contact" },
    ];

    return (
        <nav className="site-navbar w-full bg-white sticky top-0 z-50 shadow-[0_2px_10px_rgba(0,0,0,0.03)] border-b border-pink-50">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <Link to="/" className="relative z-10 flex items-center flex-shrink-0">
                        <img
                            src={logo}
                            alt="Pink Shakti"
                            className="h-14 sm:h-16 lg:h-[4.5rem] w-auto object-contain transition-transform duration-200 hover:scale-105"
                        />
                    </Link>

                    {/* Desktop & Tablet Nav Links */}
                    <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `nav-item text-sm lg:text-[15px] font-medium transition-colors relative py-1 cursor-pointer ${isActive
                                        ? "text-[#E60067] font-semibold"
                                        : "text-gray-700 hover:text-[#E60067]"
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        {link.name}
                                        {isActive && (
                                            <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#E60067] rounded-full"></span>
                                        )}
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </div>

                    {/* Right Actions: CTA & Mobile Hamburger */}
                    <div className="flex items-center gap-3">
                        <Link
                            to="/downloads"
                            className="navbar-cta button-motion inline-flex items-center gap-1.5 sm:gap-2 rounded-xl bg-[#e60067] px-3.5 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md shadow-pink-500/25 transition hover:bg-[#d0005a] active:scale-95 cursor-pointer"
                        >
                            <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                            <span>Get The App</span>
                        </Link>

                        {/* Hamburger Button for Mobile */}
                        <button
                            type="button"
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden inline-flex items-center justify-center p-2 rounded-xl text-gray-700 hover:text-[#E60067] hover:bg-pink-50 transition focus:outline-none focus:ring-2 focus:ring-pink-300"
                            aria-expanded={isOpen}
                            aria-label="Toggle navigation menu"
                        >
                            {isOpen ? (
                                <X className="h-6 w-6 stroke-[2.2]" />
                            ) : (
                                <Menu className="h-6 w-6 stroke-[2.2]" />
                            )}
                        </button>
                    </div>

                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-pink-100 bg-white shadow-lg ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                }`}
            >
                <div className="px-4 pt-2 pb-5 space-y-1 sm:px-6">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `block px-4 py-2.5 rounded-xl text-base font-medium transition-all ${
                                    isActive
                                        ? "bg-pink-50 text-[#E60067] font-semibold"
                                        : "text-gray-700 hover:bg-pink-50/60 hover:text-[#E60067]"
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
}
