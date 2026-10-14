import React from 'react'
import { Link } from 'react-router-dom'
import appDownloadBanner from "../../assets/home/banner2.png"
import googlePlayBadge from "../../assets/logo/play_store.png"
import qrCode from "../../assets/home/qr.png"

export default function PhoneBanner() {
  return (
    <section className="relative isolate overflow-hidden w-full h-[260px] sm:h-[320px] md:h-[360px] lg:h-[400px]">
      <img
        src={appDownloadBanner}
        alt="Pink Shakti App on mobile"
        className="absolute inset-0 h-full w-full object-cover sm:object-fill -z-10"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-100/70 to-pink-100/95 sm:hidden z-0"></div>

      <div className="relative z-10 flex flex-col justify-center h-full ml-[38%] sm:ml-[42%] lg:ml-[45%] w-[58%] sm:w-[45%] lg:w-[40%] text-[#102849] pr-2 sm:pr-0">
        <div>
          <p className="inline-flex items-center rounded-full bg-white/90 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-bold text-[#e60067] shadow-sm">
            <span>•&nbsp; DOWNLOAD NOW</span>
          </p>
        </div>

        <h2 className="mt-2 sm:mt-3 lg:mt-5 font-serif text-[20px] sm:text-[28px] md:text-[36px] lg:text-[42px] font-bold leading-[1.15] sm:leading-tight">
          <span className="text-[#e60067]">Pink Shakti App</span>
          <span className="block text-[#102849]">Now On Your Mobile</span>
        </h2>

        <p className="mt-1.5 sm:mt-2.5 lg:mt-3 max-w-md text-[11px] sm:text-sm lg:text-[16px] leading-snug sm:leading-normal text-slate-700 font-medium">
          A Safer, Empowered and Informed You – Always.
        </p>

        <div className="mt-3 sm:mt-4 lg:mt-5 flex items-center">
          <Link
            to="/downloads"
            aria-label="Get Pink Shakti on Google Play"
            className="button-motion inline-flex h-9 w-[125px] sm:h-[45px] sm:w-[150px] items-center justify-center gap-2.5 sm:gap-3.5 rounded-lg sm:rounded-xl bg-black text-white shadow-md transition hover:bg-neutral-800"
          >
            <img src={googlePlayBadge} alt="" className="h-[55%] sm:h-[60%] object-contain" />
            <span className="text-left leading-none">
              <span className="block text-[8px] sm:text-[9px] mb-0.5 sm:mb-1 opacity-80">GET IT ON</span>
              <span className="block text-[12px] sm:text-[15px] font-medium">Google Play</span>
            </span>
          </Link>
        </div>
      </div>

      <div className="hidden sm:flex absolute right-[3%] lg:right-[5%] top-1/2 -translate-y-1/2 w-[100px] md:w-[115px] lg:w-[130px] flex-col items-center justify-center rounded-xl border-2 border-pink-300 bg-white/95 p-2 shadow-lg z-10">
        <img
          src={qrCode}
          alt="Scan to download the Pink Shakti app"
          className="aspect-square w-full object-contain"
        />
        <p className="mt-1.5 text-center text-[10px] md:text-[11px] lg:text-[12px] font-bold leading-tight text-[#e60067]">
          Scan to Download<br />Pink Shakti App
        </p>
      </div>
    </section>
  )
}