import React from 'react'
import { ArrowRight, Download, Image as ImageIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import BannerSlider from "../../components/common/BannerSlider"
import VisionBanner from "../../components/common/VisionBanner"
import PhoneBanner from '../../components/common/PhoneBanner'
import HoverCardsSlider from '../../components/common/HoverCardsSlider'
import VideoSlider from '../../components/common/VideoSlider'
import { homeFeatures, homeFeatureCards, homeImpactItems, homeGalleryItems } from '../../constants/homeData'

// Banner slider images
import slide1 from "../../assets/home/Home Page 1st image alternative (2).png"
import slide2 from "../../assets/home/Slide1.png"
import slide3 from "../../assets/home/Slide2.png"
import slide4 from "../../assets/home/Slide3.png"

const homeBannerSlides = [slide1, slide2, slide3, slide4]

function Home() {
  const { t } = useTranslation()

  const featureTranslations = {
    "Women Safety": {
      title: t("home.featureList.womenSafetyTitle", { defaultValue: "Women Safety" }),
      desc: t("home.featureList.womenSafetyDesc", { defaultValue: "Emergency Response Support System (ERSS) for women." })
    },
    "Anonymous Crime Reporting": {
      title: t("home.featureList.crimeReportTitle", { defaultValue: "Anonymous Crime Reporting" }),
      desc: t("home.featureList.crimeReportDesc", { defaultValue: "Report incidents anonymously with map location & e-FIR." })
    },
    "Women Schemes": {
      title: t("home.featureList.schemesTitle", { defaultValue: "Women Schemes" }),
      desc: t("home.featureList.schemesDesc", { defaultValue: "Information about government schemes for women." })
    },
    "Women Laws & Rights": {
      title: t("home.featureList.lawsTitle", { defaultValue: "Women Laws & Rights" }),
      desc: t("home.featureList.lawsDesc", { defaultValue: "Know your rights, laws and PoSH Act 2013." })
    },
    "Pink Health": {
      title: t("home.featureList.healthTitle", { defaultValue: "Pink Health" }),
      desc: t("home.featureList.healthDesc", { defaultValue: "Mental health, menstrual health and cervical cancer awareness." })
    },
    "E-FIR": {
      title: t("home.featureList.eFirTitle", { defaultValue: "E-FIR" }),
      desc: t("home.featureList.eFirDesc", { defaultValue: "Direct access to UP Police e-FIR portal." })
    }
  }

  const impactTranslations = {
    "Women's Safety": t("home.impactItems.womenSafety", { defaultValue: "Women's Safety" }),
    "Community Awareness": t("home.impactItems.communityAwareness", { defaultValue: "Community Awareness" }),
    "Access to Rights": t("home.impactItems.accessToRights", { defaultValue: "Access to Rights" }),
    "Health & Wellbeing": t("home.impactItems.healthWellbeing", { defaultValue: "Health & Wellbeing" })
  }

  return (
    <>
      <BannerSlider images={homeBannerSlides} />

      <section className="bg-white px-4 sm:px-6 lg:px-8 pt-7 overflow-hidden">
        <div className="feature-panel mx-auto max-w-[1600px] rounded-3xl bg-[#fff7fa] px-4 py-6 sm:px-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="inline-flex rounded-full bg-pink-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#e60067]">
                {t("home.featuresBadge", { defaultValue: "• Our Highlights" })}
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#102849] sm:text-4xl">
                <span className="text-[#e60067]">{t("home.featuresHeadingPink", { defaultValue: "A Safer, Stronger" })}</span>
                <span className="block">{t("home.featuresHeadingNavy", { defaultValue: "and Empowered Women" })}</span>
              </h2>
            </div>

            <p className="max-w-md pb-1 text-sm leading-relaxed text-slate-600 sm:text-base">
              {t("home.featuresDesc", { defaultValue: "Pink Shakti brings together safety, awareness, health and opportunities for women in one platform." })}
            </p>

            <Link to="/highlights" className="group inline-flex items-center gap-2 text-sm font-bold text-[#e60067] transition hover:text-[#c9005a]">
              {t("home.allHighlights", { defaultValue: "All Highlights" })}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Reusable Framer Hover Feature Cards Slider */}
          <HoverCardsSlider items={homeFeatureCards} />

        </div>
      </section>


      <VisionBanner
        badge={t("home.visionBadge", { defaultValue: "Our Vision" })}
        title={
          <>
            {t("home.visionTitle1", { defaultValue: "A Safer Uttar Pradesh" })}
            <span className="block">
              {t("home.visionWith", { defaultValue: "With" })}{' '}
              <span className="text-[#e60067]">{t("home.visionTitle2", { defaultValue: "Empowered Women" })}</span>
            </span>
          </>
        }
        description={t("home.visionDesc", { defaultValue: "Pink Shakti is the vision of Snigdhaa Ritesh, envisioned to create a safer, more aware and empowered community of women in Uttar Pradesh." })}
        name={t("home.visionName", { defaultValue: "Snigdhaa Ritesh" })}
        role={t("home.visionRole", { defaultValue: "Chief Visionary, Pink Shakti" })}
        quote={{
          text: t("home.visionQuote", { defaultValue: "When women are safe, aware and empowered, society becomes stronger." }),
          author: t("home.visionName", { defaultValue: "Snigdhaa Ritesh" }),
        }}
      />




      <PhoneBanner />




      <section className='py-5'>
        <div className="bg-transparent px-4 sm:px-6 lg:px-8">
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
                  {t("home.impactBadge", { defaultValue: "OUR IMPACT" })}
                </span>
                <h2 className="mt-2.5 font-serif text-2xl font-bold leading-tight text-[#102849] sm:text-3xl lg:text-[2rem]">
                  <span className="text-[#e60067]">{t("home.impactTogether", { defaultValue: "Together" })}</span> {t("home.impactFor", { defaultValue: "For" })}
                  <span className="block text-[#102849]">{t("home.impactSaferTomorrow", { defaultValue: "A Safer Tomorrow" })}</span>
                </h2>
              </div>

              {/* 4 Impact Columns - Original grid and gap (gap-6) restored */}
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:flex lg:flex-1 lg:items-center lg:justify-around lg:gap-0">
                {homeImpactItems.map((item, index) => (
                  <div
                    key={item.title}
                    className={`group flex flex-1 cursor-pointer flex-col items-center justify-center px-2 text-center lg:px-4 ${index !== 0 ? "lg:border-l lg:border-pink-200/80" : ""
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
                      {impactTranslations[item.title] || item.title}
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
                  {t("home.galleryBadge", { defaultValue: "GALLERY" })}
                </span>
                <h2 className="mt-2.5 font-serif text-2xl font-bold leading-tight text-[#102849] sm:text-3xl lg:text-[1.75rem] xl:text-[2rem]">
                  <span className="text-[#e60067]">{t("home.galleryTitlePink", { defaultValue: "Creating Awareness," })}</span>
                  <span className="block text-[#102849]">{t("home.galleryTitleNavy", { defaultValue: "Building Stronger Communities" })}</span>
                </h2>
              </div>

              {/* 4 Gallery Photos - Original gaps (gap-2.5, sm:gap-3) restored */}
              <div className="grid w-full min-w-0 flex-1 grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3 lg:gap-3 xl:gap-4">
                {homeGalleryItems.map((item, idx) => (
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
                <a
                  href="/gallery"
                  className="group inline-flex items-center gap-2 rounded-full btn-pink-outline px-5 py-2.5 text-sm font-semibold whitespace-nowrap shadow-xs transition-all duration-300 ease-out hover:shadow-md hover:shadow-pink-500/40"
                >
                  {t("home.viewGallery", { defaultValue: "View Gallery" })}
                  {/* Arrow Animation on Hover */}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Video Slider Section */}
      <VideoSlider />
    </>
  )
}

export default Home

