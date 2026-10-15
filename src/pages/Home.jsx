import React from 'react'
import { ArrowRight, Download, Quote, Image as ImageIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import homeBanner from "../assets/home/Empowered Women Shaping Tomorrow.png"
import womenSafetyIcon from "../assets/logo/women_safety.png"
import anonymousReportIcon from "../assets/logo/bell.png"
import womenSchemesIcon from "../assets/logo/women_schems.png"
import womenLawsIcon from "../assets/logo/laws&rights.png"
import pinkHealthIcon from "../assets/logo/healths.png"
import eFirIcon from "../assets/logo/note.png"
import communityIcon from "../assets/logo/communities.png"
import appDownloadBanner from "../assets/home/banner2.png"
import qrCode from "../assets/home/qr.png"
import googlePlayBadge from "../assets/logo/play_store.png"
import appleStoreBadge from "../assets/logo/apple.png"
import waveBackdrop from "../assets/home/Pastel Pink Botanical Frame.png"
import visionPortrait from "../assets/home/mam_image.png"
import image1 from "../assets/home/1fourth.png"
import image2 from "../assets/home/2fourth.png"
import image3 from "../assets/home/3fourth.png"
import image4 from "../assets/home/3th.png"
import PageBanner from "../components/common/PageBanner"
import VisionBanner from "../components/common/VisionBanner"
import PhoneBanner from '../components/common/PhoneBanner'

function Home() {
  
  return (
    <>
      <PageBanner
        bannerImage={homeBanner}
        alt="Women from diverse professions representing Pink Shakti"
        badge={["SAFE WOMEN", "STRONGER SOCIETY"]}
        title={
          <>
            Empowering Women
            <span className="block">
              For <span className="text-[#e60067]">A Safer Tomorrow</span>
            </span>
          </>
        }
        description="Pink Shakti is a Women Safety, Awareness and Empowerment platform dedicated to building a safer, stronger and more independent Uttar Pradesh."
        primaryButton={{
          text: "Get The App",
          to: "/downloads",
          icon: Download,
        }}
        secondaryButton={{
          text: "Know More",
          to: "/about",
          icon: ArrowRight,
        }}
      />

<section className="bg-white px-4 sm:px-6 lg:px-8 py-5 overflow-hidden">
  <div className="feature-panel mx-auto max-w-[1600px] rounded-3xl bg-[#fff7fa] px-4 py-6 sm:px-6">
    <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="inline-flex rounded-full bg-pink-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#e60067]">
          • Our Features
        </p>
        <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#102849] sm:text-4xl">
          <span className="text-[#e60067]">A Safer, Stronger</span>
          <span className="block">and Empowered Women</span>
        </h2>
      </div>

      <p className="max-w-md pb-1 text-sm leading-relaxed text-slate-600 sm:text-base">
        Pink Shakti brings together safety, awareness, health and opportunities for women in one platform.
      </p>

      <Link to="/features" className="group inline-flex items-center gap-2 text-sm font-bold text-[#e60067] transition hover:text-[#c9005a]">
        Explore All Features
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>

    {/* Scroll Container: Py-8 adds vertical space for hover states so the box shadow and ring do not get cut. 
        Instead of playing with negative margins which was causing the side clip, we just let the slider have px-2 padding and the gap-6 handles the space between. 
        Added a pseudo element approach via Tailwind flex shrink-0 to give extra space at the end if needed, though px-2 usually suffices. */}
   
<div className="mt-4 overflow-hidden">
  <div
    className="
      flex gap-6
      overflow-x-auto overflow-y-hidden
      px-3 pt-6 pb-8
      snap-x snap-mandatory scroll-smooth
      [&::-webkit-scrollbar]:hidden
      [-ms-overflow-style:none]
      [scrollbar-width:none]
    "
  >
    {[
      { title: "Women Safety", description: "Emergency Response Support System (ERSS) for women.", icon: womenSafetyIcon },
      { title: "Anonymous Crime Reporting", description: "Report incidents anonymously with map location & e-FIR.", icon: anonymousReportIcon },
      { title: "Women Schemes", description: "Information about government schemes for women.", icon: womenSchemesIcon },
      { title: "Women Laws & Rights", description: "Know your rights, laws and PoSH Act 2013.", icon: womenLawsIcon },
      { title: "Pink Health", description: "Mental health, menstrual health and cervical cancer awareness.", icon: pinkHealthIcon },
      { title: "E-FIR", description: "Direct access to UP Police e-FIR portal.", icon: eFirIcon },
    ].map((feature) => (
      <article
        key={feature.title}
        className="
          group snap-start shrink-0
          w-[220px] sm:w-[230px]
          lg:w-[calc(20%-1.2rem)]
          flex flex-col text-left
          rounded-2xl bg-white
          px-4 py-4
          border border-pink-200
          shadow-sm
          transition-all duration-300
          hover:-translate-y-1
          hover:shadow-xl
          hover:border-[#e60067]/40
        "
      >
        <div className="mx-auto flex h-15 w-15 items-center justify-center rounded-full bg-pink-200 p-2.5 shadow-sm transition-transform duration-300 group-hover:scale-105">
          <img
            src={feature.icon}
            alt=""
            className="h-full w-full object-contain"
          />
        </div>

        <h3 className="mt-4 font-serif text-[19px] font-bold leading-tight text-[#102849] transition-colors duration-300 group-hover:text-[#e60067]">
          {feature.title}
        </h3>

        <p className="mt-1.5 mb-4 text-[13px] leading-tight text-slate-500">
          {feature.description}
        </p>

        <Link
          to="/features"
          aria-label={`Learn more about ${feature.title}`}
          className="mt-auto inline-flex h-8 w-8 items-center justify-center rounded-full bg-pink-50 text-[#e60067] shadow-sm transition-all duration-300 group-hover:bg-[#e60067] group-hover:text-white"
        >
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </article>
    ))}

    <div className="shrink-0 w-1 lg:hidden" />
  </div>
</div>

  </div>
</section>

      {/* <section className="bg-white px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14">
        <div className="info-panel mx-auto grid max-w-[1600px] gap-6 rounded-3xl bg-[#fff7fa] p-6 lg:grid-cols-[1.05fr_1.55fr] lg:p-7">
          <div className="flex flex-col justify-center">
            <p className="inline-flex w-fit rounded-full bg-pink-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#e60067]">
              • Pink Info
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#102849] sm:text-4xl">
              <span className="text-[#e60067]">Important Information</span>
              <span className="block">For A Brighter <span className="text-[#e60067]">Tomorrow</span></span>
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Access essential information on government schemes, women’s laws & rights, PoSH Act 2013 and more — all in one place.
            </p>
            <Link to="/features" className="button-motion mt-5 inline-flex w-fit items-center gap-2 rounded-xl bg-[#e60067] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-pink-500/25 transition hover:bg-[#d0005a]">
              Explore Pink Info
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: "Women Schemes", description: "Government schemes for education, employment, financial support and more.", icon: womenSchemesIcon },
              { title: "Women Laws & Rights", description: "Know your legal rights including PoSH Act 2013, important laws and useful resources.", icon: womenLawsIcon },
            ].map((info) => (
              <article key={info.title} className="lift-card flex min-h-48 flex-col rounded-2xl bg-white p-5 shadow-sm ring-1 ring-pink-100">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-pink-100 p-2">
                    <img src={info.icon} alt="" className="h-full w-full object-contain" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#102849]">{info.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{info.description}</p>
                  </div>
                </div>
                <Link to="/features" aria-label={`Learn more about ${info.title}`} className="mt-auto inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#e60067] text-white transition hover:bg-[#c9005a]">
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section> */}



    <PhoneBanner />


      <VisionBanner
        badge="Our Vision"
        title={
          <>
            A Safer Uttar Pradesh
            <span className="block">
              With <span className="text-[#e60067]">Empowered Women</span>
            </span>
          </>
        }
        description="Pink Shakti is the vision of Snigdhaa Ritesh, envisioned to create a safer, more aware and empowered community of women in Uttar Pradesh."
        name="Snigdhaa Ritesh"
        role="Chief Visionary, Pink Shakti"
        quote={{
          text: "When women are safe, aware and empowered, society becomes stronger.",
          author: "Snigdhaa Ritesh",
        }}
      />

      <section>
  <div className="bg-white px-4 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-[1600px]">
      
      {/* Main Container - Original padding (sm:p-8) and gap (gap-8) restored */}
      <div className="group/card flex flex-col gap-8 rounded-3xl border border-pink-100 bg-gradient-to-r from-[#fff5f8] via-[#fff9fb] to-[#fff5f8] p-5 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-pink-500/10 sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        
        {/* Left Headline */}
        <div className="shrink-0 lg:max-w-xs xl:max-w-sm">
          <span className="inline-flex cursor-default items-center gap-1.5 rounded-full bg-pink-100/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#e60067] shadow-sm transition-transform duration-300 hover:scale-105">
            {/* Modern Live Blinking Dot */}
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full  rounded-full bg-[#e60067] opacity-75"></span>
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#e60067]"></span>
            </span>
            OUR IMPACT
          </span>
          <h2 className="mt-2.5 font-serif text-2xl font-bold leading-tight text-[#102849] sm:text-3xl lg:text-[2rem]">
            <span className="text-[#e60067]">Together</span> For
            <span className="block text-[#102849]">A Safer Tomorrow</span>
          </h2>
        </div>

        {/* 4 Impact Columns - Original grid and gap (gap-6) restored */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:flex lg:flex-1 lg:items-center lg:justify-around lg:gap-0">
          {[
            { title: "Women's Safety", icon: womenSafetyIcon },
            { title: "Community Awareness", icon: communityIcon },
            { title: "Access to Rights", icon: eFirIcon },
            { title: "Health & Wellbeing", icon: pinkHealthIcon },
          ].map((item, index) => (
            <div
              key={item.title}
              className={`group flex flex-1 cursor-pointer flex-col items-center justify-center px-2 text-center lg:px-4 ${
                index !== 0 ? "lg:border-l lg:border-pink-200/80" : ""
              }`}
            >
              {/* Icon Container - Restored to original rounded-full with modern hover effect */}
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#fdebf3] p-3 transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-md group-hover:shadow-pink-200 sm:h-[72px] sm:w-[72px] sm:p-3.5">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="relative z-10 h-full w-full object-contain transition-all duration-500 ease-out group-hover:scale-110"
                />
                {/* Subtle Glow Effect Behind Icon on Hover */}
                <div className="absolute inset-0 -z-10 rounded-full bg-pink-400 opacity-0 blur transition-opacity duration-500 group-hover:opacity-20"></div>
              </div>
              
              {/* Text Styling - Restored original font sizes */}
              <span className="mt-3 text-xs font-bold text-[#102849] transition-colors duration-300 group-hover:text-[#e60067] sm:text-sm lg:text-[0.95rem]">
                {item.title}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  </div>
</section>

      {/* Gallery Section */}
    <section className="mt-7">
  <div className="bg-white px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
    <div className="mx-auto max-w-[1600px]">
      
      {/* Main Container - Original padding (p-5, sm:p-7) and gap (gap-6) restored */}
      <div className="group/section flex flex-col gap-6 rounded-3xl border border-pink-100 bg-gradient-to-r from-[#fff5f8] via-[#fff9fb] to-[#fff5f8] p-5 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-pink-500/10 sm:p-7 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:px-8 xl:px-10">

        {/* Left Title Area */}
        <div className="w-full shrink-0 lg:w-64 xl:w-80">
          <span className="inline-flex cursor-default items-center gap-1.5 rounded-full bg-pink-100/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#e60067] shadow-sm transition-transform duration-300 hover:scale-105">
            {/* Modern Live Blinking Dot */}
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full  rounded-full bg-[#e60067] opacity-75"></span>
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#e60067]"></span>
            </span>
            GALLERY
          </span>
          <h2 className="mt-2.5 font-serif text-2xl font-bold leading-tight text-[#102849] sm:text-3xl lg:text-[1.75rem] xl:text-[2rem]">
            <span className="text-[#e60067]">Creating Awareness,</span>
            <span className="block text-[#102849]">Building Stronger Communities</span>
          </h2>
        </div>

        {/* 4 Gallery Photos - Original gaps (gap-2.5, sm:gap-3) restored */}
        <div className="grid w-full min-w-0 flex-1 grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3 lg:gap-3 xl:gap-4">
          {[
            { id: 1, src: image1, alt: "Community Awareness" }, // Ensure variables are defined
            { id: 2, src: image2, alt: "Pink Shakti Outreach" },
            { id: 3, src: image3, alt: "Women Workshop" },
            { id: 4, src: image4, alt: "Awareness Drive" },
          ].map((item, idx) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] w-full min-w-0 cursor-pointer overflow-hidden rounded-xl bg-pink-50/60 shadow-xs border border-pink-100 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-lg hover:shadow-pink-200 sm:rounded-2xl"
            >
              {item.src ? (
                <>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Subtle Dark Overlay on Hover */}
                  <div className="absolute inset-0 bg-pink-900/0 transition-colors duration-500 group-hover:bg-pink-900/10"></div>
                </>
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-pink-100/70 to-pink-50 p-2 text-center transition-transform duration-500 group-hover:scale-105">
                  <ImageIcon className="h-6 w-6 stroke-1 text-pink-400/80 transition-transform duration-500 group-hover:-translate-y-1 group-hover:text-pink-500" />
                  <span className="mt-1 text-[11px] font-semibold text-pink-500">Image {idx + 1}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right CTA Button - Original padding restored */}
        <div className="flex shrink-0 justify-start lg:justify-end">
          <Link
            to="/gallery"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-[#e60067] bg-white px-5 py-2.5 text-sm font-semibold text-[#e60067] whitespace-nowrap shadow-xs transition-all duration-300 ease-out hover:bg-[#e60067] hover:text-white hover:shadow-md hover:shadow-pink-500/40"
          >
            View Gallery
            {/* Arrow Animation on Hover */}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Home
