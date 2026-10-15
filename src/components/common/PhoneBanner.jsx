import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import appDownloadBanner from "../../assets/home/banner2.png";
import googlePlayBadge from "../../assets/logo/play_store.png";
import qrCode from "../../assets/home/qr.png";

export default function PhoneBanner() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative isolate overflow-hidden w-full h-[260px] sm:h-[320px] md:h-[360px] lg:h-[400px]">
      {/* Background Image with slow zoom-out effect */}
      <img
        src={appDownloadBanner}
        alt="Pink Shakti App on mobile"
        className={`absolute inset-0 h-full w-full object-cover sm:object-fill -z-10 transition-transform duration-[2000ms] ease-out ${
          isLoaded ? "scale-100" : "scale-110"
        }`}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-100/70 to-pink-100/95 sm:hidden z-0"></div>

      <div className="relative z-10 flex flex-col justify-center h-full ml-[38%] sm:ml-[42%] lg:ml-[45%] w-[58%] sm:w-[45%] lg:w-[40%] text-[#102849] pr-2 sm:pr-0">
        
        {/* Badge */}
        <div 
          className={`transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] delay-100 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="inline-flex items-center rounded-full bg-white/90 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-bold text-[#e60067] shadow-sm">
            <span>•&nbsp; DOWNLOAD NOW</span>
          </p>
        </div>

        {/* Title */}
        <h2 
          className={`mt-2 sm:mt-3 lg:mt-5 font-serif text-[20px] sm:text-[28px] md:text-[36px] lg:text-[42px] font-bold leading-[1.15] sm:leading-tight transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-[#e60067]">Pink Shakti App</span>
          <span className="block text-[#102849]">Now On Your Mobile</span>
        </h2>

        {/* Description */}
        <p 
          className={`mt-1.5 sm:mt-2.5 lg:mt-3 max-w-md text-[11px] sm:text-sm lg:text-[16px] leading-snug sm:leading-normal text-slate-700 font-medium transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          A Safer, Empowered and Informed You – Always.
        </p>

        {/* MODERN BUTTON */}
        <div 
          className={`mt-3 sm:mt-4 lg:mt-5 flex items-center transition-all duration-[1200ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] delay-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <Link
            to="/downloads"
            aria-label="Get Pink Shakti on Google Play"
            className="group relative inline-flex h-9 w-[125px] sm:h-[45px] sm:w-[150px] items-center justify-center gap-2.5 sm:gap-3.5 rounded-lg sm:rounded-xl bg-black text-white shadow-[0_4px_10px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1.5 hover:scale-105 hover:shadow-[0_10px_25px_rgba(230,0,103,0.4)] hover:bg-[#1a1a1a] active:scale-95"
          >
            {/* Background Glow Effect on Hover */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#e60067]/0 via-[#e60067]/20 to-[#e60067]/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 blur-sm"></div>
            
            <img 
              src={googlePlayBadge} 
              alt="" 
              className="h-[55%] sm:h-[60%] object-contain transition-transform duration-300 group-hover:scale-110 z-10" 
            />
            <span className="text-left leading-none z-10">
              <span className="block text-[8px] sm:text-[9px] mb-0.5 sm:mb-1 opacity-80">GET IT ON</span>
              <span className="block text-[12px] sm:text-[15px] font-medium">Google Play</span>
            </span>
          </Link>
        </div>
      </div>

      {/* MODERN QR CODE */}
      <div 
        className={`hidden sm:flex absolute right-[3%] lg:right-[5%] top-1/2 -translate-y-1/2 w-[100px] md:w-[115px] lg:w-[130px] flex-col items-center justify-center rounded-xl border-2 border-pink-300 bg-white/95 p-2 shadow-xl z-10 cursor-pointer 
        transition-all duration-[1200ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] delay-700
        hover:scale-110 hover:-translate-y-[55%]  hover:border-[#e60067] hover:shadow-[0_20px_40px_-15px_rgba(230,0,103,0.5)]
        ${
          isLoaded ? "opacity-100 translate-x-0 rotate-0" : "opacity-0 translate-x-20 rotate-12"
        }`}
      >
        <img
          src={qrCode}
          alt="Scan to download the Pink Shakti app"
          className="aspect-square w-full object-contain transition-transform duration-500 hover:scale-105"
        />
        <p className="mt-1.5 text-center text-[10px] md:text-[11px] lg:text-[12px] font-bold leading-tight text-[#e60067]">
          Scan to Download<br />Pink Shakti App
        </p>
      </div>
    </section>
  );
}