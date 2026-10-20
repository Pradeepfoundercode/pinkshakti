import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import appDownloadBanner from "../../assets/home/Pink Mobile App Showcase Banner (1).png";
import googlePlayBadge from "../../assets/logo/play_store.png";
import qrCode from "../../assets/home/qr.png";

export default function PhoneBanner() {
  const { t } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    // Reduced height for small devices to h-[160px]
    <section className="relative isolate overflow-hidden w-full h-[160px] sm:h-[190px] md:h-[300px] lg:h-[300px]">
      {/* Background Image with slow zoom-out effect */}
      <img
        src={appDownloadBanner}
        alt="Pink Shakti App on mobile"
        className={`absolute inset-0 h-full w-full object-fill object-center lg:object-fill -z-10 transition-transform duration-[2000ms] ease-out ${
          isLoaded ? "scale-100" : "scale-110"
        }`}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-100/70 to-pink-100/95 sm:hidden z-0"></div>

      <div className="relative z-10 flex flex-col justify-center h-full ml-[41%] sm:ml-[45%] lg:ml-[45%] w-[58%] sm:w-[45%] lg:w-[40%] text-[#102849] pr-2 sm:pr-0">
        
        {/* Badge */}
        <div 
          className={`transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] delay-100 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="inline-flex items-center rounded-full bg-white/90 px-2 py-0.5 sm:px-3 sm:py-1 text-[9px] sm:text-xs font-bold text-[#e60067] shadow-sm">
            <span>•&nbsp; {t("phoneBanner.badge", { defaultValue: "DOWNLOAD NOW" })}</span>
          </p>
        </div>

        {/* Title */}
        <h2 
          className={`mt-1 sm:mt-3 lg:mt-5 font-serif text-[18px] sm:text-[28px] md:text-[36px] lg:text-[42px] font-bold leading-[1.15] sm:leading-tight transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-[#e60067]">{t("phoneBanner.titlePink", { defaultValue: "Pink Shakti App" })}</span>
          <span className="block text-[#102849]">{t("phoneBanner.titleNavy", { defaultValue: "Now On Your Mobile" })}</span>
        </h2>

        {/* Description */}
        <p 
          className={`mt-1 sm:mt-2.5 lg:mt-3 max-w-md text-[10px] sm:text-sm lg:text-[16px] leading-snug sm:leading-normal text-slate-700 font-medium transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {t("phoneBanner.description", { defaultValue: "A Safer, Empowered and Informed You – Always." })}
        </p>

        {/* MODERN BUTTON */}
        <div 
          className={`mt-1.5 sm:mt-3 md:mt-4 lg:mt-5 flex items-center transition-all duration-[1200ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] delay-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <a
            href="https://play.google.com/store/apps/details?id=com.inaequalisconsulting.pinkshakti"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get Pink Shakti on Google Play"
            className="group flex items-center gap-1.5 sm:gap-2 md:gap-2.5 btn-playstore rounded-md sm:rounded-lg md:rounded-xl px-2.5 py-1 sm:px-3.5 sm:py-1.5 md:px-4 md:py-2 w-fit transition-all duration-300 hover:border-neutral-600 hover:scale-[1.03] hover:-translate-y-0.5 active:scale-95 shadow-md hover:shadow-lg"
          >
            <img src={googlePlayBadge} alt="Play Store" className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 object-contain transition-transform duration-300 group-hover:scale-105" />
            <div>
              <div className="text-[7px] sm:text-[7.5px] md:text-[8px] uppercase tracking-wider text-neutral-400 leading-none mb-0.5">{t("phoneBanner.getItOn", { defaultValue: "Get it on" })}</div>
              <div className="text-[10px] sm:text-[11.5px] md:text-[13px] font-semibold text-white leading-none tracking-wide">{t("phoneBanner.googlePlay", { defaultValue: "Google Play" })}</div>
            </div>
          </a>
        </div>
      </div>

      {/* MODERN QR CODE */}
      <a 
        href="https://play.google.com/store/apps/details?id=com.inaequalisconsulting.pinkshakti"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Scan or click to download Pink Shakti app on Google Play"
        className={`hidden sm:flex absolute right-[3%] lg:right-[5%] top-1/2 -translate-y-1/2 w-[100px] md:w-[115px] lg:w-[130px] flex-col items-center justify-center rounded-xl border-2 border-pink-300 bg-white/95 p-2 shadow-xl z-10 cursor-pointer 
        transition-all duration-[1200ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] delay-700
        hover:scale-110 hover:-translate-y-[55%] hover:border-[#e60067] hover:shadow-[0_20px_40px_-15px_rgba(230,0,103,0.5)]
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
          {t("phoneBanner.scanTitle", { defaultValue: "Scan to Download" })}<br />{t("phoneBanner.scanSubtitle", { defaultValue: "Pink Shakti App" })}
        </p>
      </a>
    </section>
  );
}