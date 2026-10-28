import React from 'react'
import { ArrowRight, Download, Image as ImageIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
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

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
}

// Special Text Reveal for Headings
const textReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
}

function Home() {
  const { t } = useTranslation()

  const impactTranslations = {
    "Women's Safety": t("home.impactItems.womenSafety", { defaultValue: "Women's Safety" }),
    "Community Awareness": t("home.impactItems.communityAwareness", { defaultValue: "Community Awareness" }),
    "Access to Rights": t("home.impactItems.accessToRights", { defaultValue: "Access to Rights" }),
    "Health & Wellbeing": t("home.impactItems.healthWellbeing", { defaultValue: "Health & Wellbeing" })
  }

  return (
    <>
      <BannerSlider images={homeBannerSlides} />

      <section className="bg-transparent px-4 sm:px-6 lg:px-8 pt-7 overflow-hidden">
        <div className="feature-panel mx-auto max-w-[1600px] rounded-3xl border border-pink-100 bg-[#fff5f8]  px-4 py-6 sm:px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
          >
            <div>
              <motion.p variants={fadeInUp} className="inline-flex rounded-full bg-pink-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#e60067]">
                {t("home.featuresBadge", { defaultValue: "• Our Highlights" })}
              </motion.p>
              {/* Animated Text Reveal Heading */}
              <motion.h2
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-3 font-serif text-3xl font-bold leading-tight text-[#102849] sm:text-4xl"
              >
                <motion.span variants={textReveal} className="inline-block text-[#e60067] mr-2">
                  {t("home.featuresHeadingPink", { defaultValue: "A Safer, Stronger" })}
                </motion.span>
                <motion.span variants={textReveal} className="block">
                  {t("home.featuresHeadingNavy", { defaultValue: "and Empowered Women" })}
                </motion.span>
              </motion.h2>
            </div>

            <motion.p variants={fadeInUp} className="max-w-md pb-1 text-sm leading-relaxed text-slate-600 sm:text-base">
              {t("home.featuresDesc", { defaultValue: "Pink Shakti brings together safety, awareness, health and opportunities for women in one platform." })}
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Link to="/highlights" className="group inline-flex items-center gap-2 text-sm font-bold text-[#e60067] transition hover:text-[#c9005a]">
                {t("home.allHighlights", { defaultValue: "All Highlights" })}
                <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

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

      <section className='py-5 overflow-hidden'>
        <div className="bg-transparent px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1600px]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="flex flex-col gap-8 rounded-3xl border border-pink-100 bg-[#fff5f8] p-5 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-pink-500/10 sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:px-10"
            >
              <div className="shrink-0 lg:max-w-xs xl:max-w-sm">
                <motion.span variants={fadeInUp} className="inline-flex cursor-default items-center gap-1.5 rounded-full bg-pink-100/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#e60067] shadow-sm">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[#e60067] opacity-75"></span>
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#e60067]"></span>
                  </span>
                  {t("home.impactBadge", { defaultValue: "OUR IMPACT" })}
                </motion.span>

                {/* Animated Text Reveal Heading */}
                <motion.h2
                  variants={staggerContainer}
                  className="mt-2.5 font-serif text-2xl font-bold leading-tight text-[#102849] sm:text-3xl lg:text-[2rem]"
                >
                  <motion.span variants={textReveal} className="inline-block text-[#e60067] mr-1.5">{t("home.impactTogether", { defaultValue: "Together" })}</motion.span>
                  <motion.span variants={textReveal} className="inline-block">{t("home.impactFor", { defaultValue: "For" })}</motion.span>
                  <motion.span variants={textReveal} className="block text-[#102849]">{t("home.impactSaferTomorrow", { defaultValue: "A Safer Tomorrow" })}</motion.span>
                </motion.h2>
              </div>

              <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:flex lg:flex-1 lg:items-center lg:justify-around lg:gap-0">
                {homeImpactItems.map((item, index) => (
                  <motion.div
                    variants={fadeInUp}
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    key={item.title}
                    className={`group flex flex-1 cursor-pointer flex-col items-center justify-center px-2 text-center lg:px-4 ${index !== 0 ? "lg:border-l lg:border-pink-200/80" : ""
                      }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm border border-pink-100 p-3 sm:h-[72px] sm:w-[72px] sm:p-3.5 transition-shadow duration-300 group-hover:shadow-md"
                    >
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="relative z-10 h-full w-full object-contain"
                      />
                    </motion.div>
                    {/* Animated Number/Text Hover */}
                    <span className="mt-3 text-xs font-bold text-[#102849] transition-colors duration-300 group-hover:text-[#e60067] sm:text-sm lg:text-[0.95rem]">
                      {impactTranslations[item.title] || item.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mt-7 overflow-hidden">
        <div className="bg-transparent px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
          <div className="mx-auto max-w-[1600px]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="flex flex-col gap-6 rounded-3xl border border-pink-100 bg-[#fff5f8] p-5 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-pink-500/10 sm:p-7 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:px-8 xl:px-10"
            >
              <div className="w-full shrink-0 lg:w-64 xl:w-80">
                <motion.span variants={fadeInUp} className="inline-flex cursor-default items-center gap-1.5 rounded-full bg-pink-100/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#e60067] shadow-sm">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[#e60067] opacity-75"></span>
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#e60067]"></span>
                  </span>
                  {t("home.galleryBadge", { defaultValue: "GALLERY" })}
                </motion.span>

                {/* Animated Text Reveal Heading */}
                <motion.h2
                  variants={staggerContainer}
                  className="mt-2.5 font-serif text-2xl font-bold leading-tight text-[#102849] sm:text-3xl lg:text-[1.75rem] xl:text-[2rem]"
                >
                  <motion.span variants={textReveal} className="block text-[#e60067]">{t("home.galleryTitlePink", { defaultValue: "Creating Awareness," })}</motion.span>
                  <motion.span variants={textReveal} className="block text-[#102849]">{t("home.galleryTitleNavy", { defaultValue: "Building Stronger Communities" })}</motion.span>
                </motion.h2>
              </div>

              <div className="grid w-full min-w-0 flex-1 grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3 lg:gap-3 xl:gap-4">
                {homeGalleryItems.map((item, idx) => (
                  <motion.div
                    variants={scaleIn}
                    whileHover={{ scale: 1.03, y: -5 }}
                    whileTap={{ scale: 0.97 }}
                    key={item.id}
                    className="group relative aspect-[4/3] w-full min-w-0 cursor-pointer overflow-hidden rounded-xl bg-pink-50/60 shadow-xs border border-pink-100 sm:rounded-2xl"
                  >
                    {item.src ? (
                      <>
                        <motion.img
                          whileHover={{ scale: 1.15 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          src={item.src}
                          alt={item.alt}
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-pink-900/0 transition-colors duration-500 group-hover:bg-pink-900/10"></div>
                      </>
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-pink-100/70 to-pink-50 p-2 text-center">
                        <ImageIcon className="h-6 w-6 stroke-1 text-pink-400/80" />
                        <span className="mt-1 text-[11px] font-semibold text-pink-500">Image {idx + 1}</span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeInUp} className="flex shrink-0 justify-start lg:justify-end">
                <motion.a
                  href="/gallery"
                  whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(230, 0, 103, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center gap-2 rounded-full btn-pink-outline px-5 py-2.5 text-sm font-semibold whitespace-nowrap shadow-xs"
                >
                  {t("home.viewGallery", { defaultValue: "View Gallery" })}
                  <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 400 }}>
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <VideoSlider />
    </>
  )
}

export default Home