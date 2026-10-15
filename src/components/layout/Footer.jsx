import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Globe } from "lucide-react";
import logo from "../../assets/logo/image.png";
import googlePlayBadge from "../../assets/logo/play_store.png";
// import appleStoreBadge from "../../assets/logo/apple.png"; // Removed if not in use

export default function Footer() {
  const quickLinksLeft = [
    { name: "One Stop Centers", path: "/" },
    { name: "Emergency Helplines", path: "/" },
    { name: "Our Feedback", path: "/" },
  ];

  const quickLinksRight = [
    { name: "Gallery", path: "/gallery" },
    { name: "Downloads", path: "/downloads" },
    { name: "Contact Us", path: "/contact" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: (
        <svg className="h-3.5 w-3.5 fill-[#940040] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: (
        <svg className="h-3.5 w-3.5 fill-[#940040] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "X",
      href: "https://x.com",
      icon: (
        <svg className="h-3 w-3 fill-[#940040] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://youtube.com",
      icon: (
        <svg className="h-3.5 w-3.5 fill-[#940040] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: (
        <svg className="h-3.5 w-3.5 fill-[#940040] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="w-full overflow-hidden bg-gradient-to-r from-[#ad0550] via-[#c90a63] to-[#e60067] text-white">
      <div className="mx-auto max-w-[1600px] px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 items-start">

          {/* Col 1: Brand & Socials */}
          <div className="sm:col-span-2 lg:col-span-4">
            <div className="group flex cursor-pointer items-center gap-3 w-fit">
              <img
                src={logo}
                alt="Pink Shakti Logo"
                className="h-16 w-16 object-contain brightness-0 invert drop-shadow-sm transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3"
              />
              <div>
                <h3 className="font-serif text-xl font-bold tracking-wider text-white transition-colors duration-300">
                  PINK SHAKTI
                </h3>
                <p className="mt-0.5 text-xs font-medium text-pink-100/90 tracking-wide transition-colors duration-300 group-hover:text-white">
                  Women Safety | Awareness | Empowerment
                </p>
              </div>
            </div>

            {/* Social Icons with modern lift & shadow */}
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="group flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-xs transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-110 hover:bg-pink-50 hover:shadow-lg hover:shadow-white/25"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-4">
            <h4 className="text-base font-bold text-white">Quick Links</h4>
            <div className="mt-3.5 grid grid-cols-2 gap-x-4 gap-y-2">
              <div className="flex flex-col space-y-2">
                {quickLinksLeft.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="inline-block w-fit text-xs sm:text-sm font-medium text-pink-100/85 transition-all duration-300 ease-out hover:translate-x-1.5 hover:text-white"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col space-y-2">
                {quickLinksRight.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="inline-block w-fit text-xs sm:text-sm font-medium text-pink-100/85 transition-all duration-300 ease-out hover:translate-x-1.5 hover:text-white"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Col 3: Contact Us */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-bold text-white">Contact Us</h4>
            <ul className="mt-3.5 space-y-3">
              <li className="group flex items-center gap-2.5">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e60067] text-white transition-transform duration-300 group-hover:scale-110">
                  <MapPin className="h-3.5 w-3.5" />
                </span>
                <span className="text-xs sm:text-sm font-medium text-pink-100/90 transition-colors duration-300 group-hover:text-white">
                  Uttar Pradesh, India
                </span>
              </li>
              <li className="group flex items-center gap-2.5">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center text-pink-100 transition-transform duration-300 group-hover:scale-110 group-hover:text-white">
                  <Globe className="h-4 w-4" />
                </span>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs sm:text-sm font-medium text-pink-100/90 transition-all duration-300 ease-out hover:translate-x-1 hover:text-white"
                >
                  www.pinkshakti.in
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Get The App */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-bold text-white">Get The App</h4>
            <div className="mt-3.5 flex flex-wrap items-center gap-2.5">
              {/* Google Play Button with modern pop up animation */}
              <Link
                to="/downloads"
                aria-label="Get it on Google Play"
                className="group inline-flex h-10 w-[132px] items-center justify-center gap-2 rounded-lg bg-black px-2.5 text-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:bg-neutral-900 hover:shadow-lg hover:shadow-black/40"
              >
                <img
                  src={googlePlayBadge}
                  alt="Play Store"
                  className="h-5 w-5 object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <span className="text-left leading-tight">
                  <span className="block text-[8px] uppercase tracking-wider text-neutral-300 transition-colors duration-300 group-hover:text-white">
                    GET IT ON
                  </span>
                  <span className="block text-[12px] font-semibold tracking-tight">
                    Google Play
                  </span>
                </span>
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Sub-footer */}
      <div className="border-t border-white/20">
        <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-center gap-6 sm:gap-14 px-4 py-5 sm:py-6 text-xs font-medium text-pink-100/80 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-center transition-colors duration-300 hover:text-white">
            © 2024 Pink Shakti. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="/privacy-policy"
              className="transition-all duration-300 hover:-translate-y-0.5 hover:text-white"
            >
              Privacy Policy
            </Link>
            <span className="text-white/30">|</span>
            <Link
              to="/terms-and-conditions"
              className="transition-all duration-300 hover:-translate-y-0.5 hover:text-white"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}