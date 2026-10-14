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

      <section className="bg-white px-4 sm:px-6 lg:px-8 py-3">
        <div className="feature-panel mx-auto max-w-[1600px] rounded-3xl bg-[#fff7fa] px-6 py-2 ">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="inline-flex rounded-full bg-pink-100 px-3  text-xs font-bold uppercase tracking-wide text-[#e60067]">
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

            <Link to="/features" className="inline-flex items-center gap-2  text-sm font-bold text-[#e60067] transition hover:text-[#c9005a]">
              Explore All Features
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {[
              { title: "Women Safety", description: "Emergency Response Support System (ERSS) for women.", icon: womenSafetyIcon },
              { title: "Anonymous Crime Reporting", description: "Report incidents anonymously with map location & e-FIR.", icon: anonymousReportIcon },
              { title: "Women Schemes", description: "Information about government schemes for women.", icon: womenSchemesIcon },
              { title: "Women Laws & Rights", description: "Know your rights, laws and PoSH Act 2013.", icon: womenLawsIcon },
              { title: "Pink Health", description: "Mental health, menstrual health and cervical cancer awareness.", icon: pinkHealthIcon },
              { title: "E-FIR", description: "Direct access to UP Police e-FIR portal.", icon: eFirIcon },
            ].map((feature) => (
              <article key={feature.title} className="lift-card flex min-h-56 flex-col rounded-2xl bg-white p-5 shadow-sm ring-1 ring-pink-100">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-pink-100 p-2">
                  <img src={feature.icon} alt="" className="h-full w-full object-contain" />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold leading-tight text-[#102849]">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.description}</p>
                <Link to="/features" aria-label={`Learn more about ${feature.title}`} className="mt-auto inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#e60067] text-white transition hover:bg-[#c9005a]">
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
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
        <div className="bg-white px-4  sm:px-6 lg:px-8 ">
          <div className="mx-auto max-w-[1600px]">
            <div className="flex flex-col gap-8 rounded-3xl border border-pink-100 bg-gradient-to-r from-[#fff5f8] via-[#fff9fb] to-[#fff5f8] shadow-sm sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:px-10 ">

              {/* Left Headline */}
              <div className="shrink-0 lg:max-w-xs xl:max-w-sm">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-pink-100/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#e60067]">
                  • OUR IMPACT
                </span>
                <h2 className="mt-2.5 font-serif text-2xl font-bold leading-tight text-[#102849] sm:text-3xl lg:text-[2rem]">
                  <span className="text-[#e60067]">Together</span> For
                  <span className="block text-[#102849]">A Safer Tomorrow</span>
                </h2>
              </div>

              {/* 4 Impact Columns with Dividers */}
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:flex lg:flex-1 lg:items-center lg:justify-around lg:gap-0">
                {[
                  { title: "Women's Safety", icon: womenSafetyIcon },
                  { title: "Community Awareness", icon: communityIcon },
                  { title: "Access to Rights", icon: eFirIcon },
                  { title: "Health & Wellbeing", icon: pinkHealthIcon },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-1 flex-col items-center justify-center px-2 text-center lg:border-l lg:border-pink-200/80 lg:px-4"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fdebf3] p-3 transition-transform duration-300 hover:scale-105 sm:h-18 sm:w-18 sm:p-3.5">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <span className="mt-3 text-xs font-bold text-[#102849] sm:text-sm lg:text-[0.95rem]">
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
            <div className="flex flex-col gap-6 rounded-3xl border border-pink-100 bg-gradient-to-r from-[#fff5f8] via-[#fff9fb] to-[#fff5f8] p-5 shadow-sm sm:p-7 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:px-8 xl:px-10">

              {/* Left Title Area */}
              <div className="w-full shrink-0 lg:w-64 xl:w-80">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-pink-100/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#e60067]">
                  • GALLERY
                </span>
                <h2 className="mt-2.5 font-serif text-2xl font-bold leading-tight text-[#102849] sm:text-3xl lg:text-[1.75rem] xl:text-[2rem]">
                  <span className="text-[#e60067]">Creating Awareness,</span>
                  <span className="block text-[#102849]">Building Stronger Communities</span>
                </h2>
              </div>

              {/* 4 Gallery Photos - Fully Responsive Grid */}
              <div className="grid w-full min-w-0 flex-1 grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3 lg:gap-3 xl:gap-4">
                {[
                  { id: 1, src: image1, alt: "Community Awareness" },
                  { id: 2, src: image2, alt: "Pink Shakti Outreach" },
                  { id: 3, src: image3, alt: "Women Workshop" },
                  { id: 4, src: image4, alt: "Awareness Drive" },
                ].map((item, idx) => (
                  <div
                    key={item.id}
                    className="group relative aspect-[4/3] w-full min-w-0 overflow-hidden rounded-xl border border-pink-100 bg-pink-50/60 shadow-xs transition-transform duration-300 hover:scale-105 sm:rounded-2xl"
                  >
                    {item.src ? (
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-pink-100/70 to-pink-50 p-2 text-center text-pink-400">
                        <ImageIcon className="h-6 w-6 stroke-1 text-pink-400/80" />
                        <span className="mt-1 text-[11px] font-semibold text-pink-500">Image {idx + 1}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Right CTA Button */}
              <div className="flex shrink-0 justify-start lg:justify-end">
                <Link
                  to="/gallery"
                  className="button-motion inline-flex items-center gap-2 rounded-full border-2 border-[#e60067] bg-white px-5 py-2.5 text-sm font-semibold text-[#e60067] whitespace-nowrap shadow-xs transition hover:bg-[#e60067] hover:text-white"
                >
                  View Gallery
                  <ArrowRight className="h-4 w-4" />
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
