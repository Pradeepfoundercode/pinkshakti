import React from 'react'
import { Link } from 'react-router-dom'
import appDownloadBanner from "../../assets/home/banner2.png"
import googlePlayBadge from "../../assets/logo/play_store.png"
import qrCode from "../../assets/home/qr.png"

function PhoneBanner() {
  return (
    <section className="relative isolate overflow-hidden w-full">
      <img
        src={appDownloadBanner}
        alt="Pink Shakti App on mobile"
        className="h-[280px] sm:h-[340px] md:h-[380px] lg:h-[400px] w-full object-cover object-left sm:object-fill"
      />

      {/* Content Overlay */}
      <div className="hero-content absolute left-[38%] sm:left-[43%] lg:left-[45%] top-1/2 -translate-y-1/2 z-10 w-[58%] sm:w-[42%] lg:w-[40%] text-[#102849] pr-2 sm:pr-0">
        <p className="inline-flex items-center rounded-full bg-pink-100/90 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-bold text-[#e60067]">
          <span>•&nbsp; DOWNLOAD NOW</span>
        </p>

        <h2 className="mt-2 sm:mt-3 lg:mt-5 font-serif text-[clamp(1.15rem,2.8vw,2.5rem)] font-bold leading-[1.15] sm:leading-tight">
          <span className="text-[#e60067]">Pink Shakti App</span>
          <span className="block text-[#102849]">Now On Your Mobile</span>
        </h2>

        <p className="mt-1.5 sm:mt-2.5 lg:mt-3 max-w-md text-[11px] sm:text-sm lg:text-[16px] leading-snug sm:leading-normal text-slate-600 font-medium">
          A Safer, Empowered and Informed You – Always.
        </p>

        <div className="mt-3 sm:mt-4 lg:mt-5 flex items-center gap-4">
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

      {/* QR Code (Visible on Tablet & Desktop) */}
      <div className="hidden sm:block absolute right-[3%] lg:right-[5%] top-1/2 -translate-y-1/2 w-[100px] md:w-[115px] lg:w-[130px] rounded-xl border-2 border-pink-300 bg-white p-2 shadow-md">
        <img
          src={qrCode}
          alt="Scan to download the Pink Shakti app"
          className="aspect-square w-full object-contain"
        />
        <p className="my-1 text-center text-[11px] lg:text-[13px] font-bold leading-tight text-[#e60067]">
          Scan to Download<br />Pink Shakti App
        </p>
      </div>
    </section>
  )
}

export default PhoneBanner
