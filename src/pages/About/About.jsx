import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import BannerSlider from '../../components/common/BannerSlider'
import aboutBanner from '../../assets/home/Home Page 1st image alternative (2).png'
import communities from "../../assets/home/Pink Shakti Community Portrait.png"
import cameralogo from "../../assets/home/Pink Target and Binoculars Icons1.png"
import targetlogo from "../../assets/home/Pink Target and Binoculars Icons.png"
import VisionBanner from '../../components/common/VisionBanner'
import PhoneBanner from '../../components/common/PhoneBanner'
import { impactPartners, enrichmentPanel, leadershipPanel, leadershipPanel1 } from '../../constants/aboutData'

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

const textReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
}

function About() {
  const { t } = useTranslation()

  return (
    <div className="overflow-hidden">
      {/* Top Banner Section */}
      <BannerSlider
        images={[aboutBanner]}
        autoPlay={false}
      />

      {/* Our Journey Section */}
      <section className="bg-white px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-[1600px]">
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="group/journey relative overflow-hidden rounded-3xl border border-pink-100 bg-[#fff5f8] p-5 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-pink-500/10 sm:p-6 lg:px-9 lg:py-6"
          >
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8">
              
              {/* Left Column: Journey Details */}
              <div className="lg:col-span-7">
                <motion.span 
                  variants={fadeInUp}
                  className="inline-flex cursor-default items-center gap-1.5 rounded-full bg-pink-100/90 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-[#e60067] shadow-sm transition-transform duration-300 hover:scale-105"
                >
                  {t("about.journeyBadge", { defaultValue: "• OUR JOURNEY" })}
                </motion.span>

                <motion.h2 
                  variants={staggerContainer}
                  className="mt-2 font-serif text-2xl font-bold leading-tight sm:text-3xl lg:text-[2rem]"
                >
                  <motion.span variants={textReveal} className="inline-block text-[#102849] mr-2">
                    {t("about.journeyTitle1", { defaultValue: "A Step Towards" })}
                  </motion.span>
                  <motion.span variants={textReveal} className="block text-[#e60067]">
                    {t("about.journeyTitle2", { defaultValue: "A Safer & Stronger Society." })}
                  </motion.span>
                </motion.h2>

                <motion.p 
                  variants={fadeInUp}
                  className="mt-2.5 max-w-2xl text-xs sm:text-sm lg:text-[0.95rem] leading-relaxed text-slate-600 transition-colors duration-300 group-hover/journey:text-slate-800"
                >
                  {t("about.journeyDesc", { defaultValue: "The Pink Shakti app has been developed after four years of extensive research and was launched on Women's Day 2024 by the Mayor of Lucknow, Ms. Sushma Kharkwal." })}
                </motion.p>
              </div>

              {/* Right Column: Launch Image */}
              <div className="flex justify-center lg:col-span-4 lg:justify-end">
                <motion.div 
                  variants={scaleIn}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group relative h-[180px] w-full max-w-lg cursor-pointer overflow-hidden rounded-2xl border border-pink-100 bg-white shadow-sm transition-shadow duration-500 hover:shadow-lg hover:shadow-pink-200 sm:h-[200px] md:h-[220px]"
                >
                  <img
                    src={communities}
                    alt="Pink Shakti Launch"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-pink-900/0 transition-colors duration-500 group-hover:bg-pink-900/5"></div>
                </motion.div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>


      {/* Vision & Mission Section */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 ">
        <div className="mx-auto max-w-[1600px]">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8"
          >
            {/* Our Vision Card */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group/card flex flex-col sm:flex-row items-center sm:items-center gap-5 sm:gap-6 rounded-3xl border border-pink-100 bg-[#fff5f8] p-6 shadow-sm transition-shadow duration-500 hover:shadow-xl hover:shadow-pink-500/10 sm:p-7"
            >
              <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-pink-100/80 p-4 transition-transform duration-500 group-hover/card:scale-110 sm:h-24 sm:w-24 sm:p-4.5">
                <motion.img
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  src={cameralogo}
                  alt="Our Vision"
                  className="relative z-10 h-[60px] w-[120px] object-fill transition-transform duration-500 group-hover/card:rotate-3"
                />
                <div className="absolute inset-0 -z-10 rounded-full bg-pink-300 opacity-0 blur transition-opacity duration-500 group-hover/card:opacity-30"></div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <span className="inline-flex cursor-default items-center gap-1.5 rounded-full bg-pink-100/90 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-[#e60067] shadow-sm">
                  {t("about.visionBadge", { defaultValue: "• OUR VISION" })}
                </span>
                <p className="mt-2.5 text-xs sm:text-sm lg:text-[0.95rem] font-medium sm:font-semibold leading-relaxed text-[#102849] transition-colors duration-300 group-hover/card:text-slate-800">
                  {t("about.visionText", { defaultValue: "Promoting Holistic Women Empowerment through Technology-driven Aids to ensure Safety, Awareness & Empowerment of Women Populace in a Violence-Free Environment." })}
                </p>
              </div>
            </motion.div>

            {/* Our Mission Card */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group/card flex flex-col sm:flex-row items-center sm:items-center gap-5 sm:gap-6 rounded-3xl border border-pink-100 bg-[#fff5f8] p-6 shadow-sm transition-shadow duration-500 hover:shadow-xl hover:shadow-pink-500/10 sm:p-7"
            >
              <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-pink-100/80 p-4 transition-transform duration-500 group-hover/card:scale-110 sm:h-24 sm:w-24 sm:p-4.5">
                <motion.img
                  whileHover={{ rotate: -10, scale: 1.1 }}
                  src={targetlogo}
                  alt="Our Mission"
                  className="relative z-10 h-full w-full object-contain transition-transform duration-500 group-hover/card:-rotate-3"
                />
                <div className="absolute inset-0 -z-10 rounded-full bg-pink-300 opacity-0 blur transition-opacity duration-500 group-hover/card:opacity-30"></div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <span className="inline-flex cursor-default items-center gap-1.5 rounded-full bg-pink-100/90 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-[#e60067] shadow-sm">
                  {t("about.missionBadge", { defaultValue: "• OUR MISSION" })}
                </span>
                <p className="mt-2.5 text-xs sm:text-sm lg:text-[0.95rem] font-medium sm:font-semibold leading-relaxed text-[#102849] transition-colors duration-300 group-hover/card:text-slate-800">
                  {t("about.missionText", { defaultValue: "To achieve SDG 5 by Empowering Women Populace of India and giving them a fair chance to contribute to Nation-Building with dignity, in a Discrimination-Free Environment with equal opportunities." })}
                </p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Our Founder Section */}
      <VisionBanner
        badge={t("about.founderBadge", { defaultValue: "OUR FOUNDER" })}
        title={t("about.founderName", { defaultValue: "Ms. Snigdhaa Ritesh" })}
        subtitle={t("about.founderRole", { defaultValue: "Chief Visionary, Pink Shakti" })}
        description={t("about.founderDesc", { defaultValue: "Ms. Snigdhaa Ritesh is a journalist with 16 years of experience in electronic and print media. Through her work, she has closely witnessed the challenges that women face in society. Her passion for creating a safer, more aware and empowered community of women led to the inception of Pink Shakti." })}
      />

      {/* Leadership Panel Section */}
      <section className="bg-white px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px]">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="rounded-3xl border border-pink-100 bg-[#fff5f8] p-6 shadow-sm sm:p-8 lg:p-8"
          >
            {/* Header */}
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-pink-100/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#e60067]">
                {t("about.leadershipBadge", { defaultValue: "• LEADERSHIP PANEL" })}
              </span>
              <div className="mt-2.5 flex items-center gap-3">
                <h2 className="font-bold text-2xl sm:text-3xl lg:text-[2rem] text-[#102849]">
                  {t("about.leadershipTitle", { defaultValue: "Our Leadership Panel" })}
                </h2>
                <motion.span 
                  initial={{ width: 0 }}
                  whileInView={{ width: 32 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-[2px] w-8 bg-pink-300 rounded-full inline-block"
                ></motion.span>
              </div>
            </motion.div>

            {/* Leadership Cards Grid */}
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
              {leadershipPanel.map((leader, index) => (
                <motion.div
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  key={index}
                  className="group flex flex-col items-center rounded-2xl border border-pink-100 bg-white p-6 text-center shadow-xs transition-shadow duration-300 hover:shadow-md"
                >
                  <div className="h-28 w-28 sm:h-32 sm:w-32 overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-105">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-4 font-bold text-base sm:text-lg text-[#102849]">
                    {leader.name}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm font-medium text-slate-500">
                    {leader.role}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Wisdom Panel Section */}
      <section className="bg-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px]">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="rounded-3xl border border-pink-100 bg-[#fff5f8] p-6 shadow-sm "
          >
            {/* Header */}
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-pink-100/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#e60067]">
                {t("about.wisdomBadge", { defaultValue: "• WISDOM PANEL" })}
              </span>
              <div className="mt-2.5 flex items-center gap-3">
                <h2 className="font-bold text-2xl sm:text-3xl lg:text-[2rem] text-[#102849]">
                  {t("about.wisdomTitle", { defaultValue: "Our Wisdom Panel" })}
                </h2>
                <motion.span 
                  initial={{ width: 0 }}
                  whileInView={{ width: 32 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-[2px] w-8 bg-pink-300 rounded-full inline-block"
                ></motion.span>
              </div>
            </motion.div>

            {/* Wisdom Cards Grid */}
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-6 sm:gap-5">
              {leadershipPanel1.map((leader, index) => (
                <motion.div
                  variants={scaleIn}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  key={index}
                  className="group flex flex-col items-center rounded-2xl border border-pink-100 bg-white p-5 text-center shadow-xs transition-shadow duration-300 hover:shadow-md"
                >
                  <div className="h-28 w-28 overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-105">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-4 font-bold text-base sm:text-lg text-[#102849]">
                    {leader.name}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm font-medium text-slate-500">
                    {leader.role}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enrichment Panel Section */}
      <section className="bg-white py-6 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px]">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="rounded-3xl border border-pink-100 bg-[#fff5f8] p-6 shadow-sm"
          >
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-14">
              {/* Header */}
              <motion.div variants={fadeInUp} className="w-full lg:w-[400px] mt-5">
                <span className="inline-flex items-center gap-2 rounded-full bg-pink-100/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#e60067] shadow-xs">
                  {t("about.enrichmentBadge", { defaultValue: "• ENRICHMENT PANEL" })}
                </span>
                <div className="mt-5 flex items-center">
                  <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-[#102849]">
                    {t("about.enrichmentTitle", { defaultValue: "Our Enrichment Panel" })}
                  </h2>
                </div>
              </motion.div>

              {/* Members Cards */}
              <div className="flex flex-wrap items-center gap-6 sm:gap-8">
                {enrichmentPanel.map((member, index) => (
                  <motion.div
                    variants={fadeInUp}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    key={index}
                    className="group flex w-full flex-col items-center justify-center rounded-2xl border border-pink-200/60 bg-white px-8 py-6 text-center shadow-xs transition-shadow duration-300 hover:shadow-md sm:w-[290px] lg:w-[320px]"
                  >
                    <div className="h-28 w-28 sm:h-32 sm:w-32 overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-105">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h3 className="mt-4 text-base sm:text-lg font-bold text-[#102849]">
                      {member.name}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Impact Partners Section */}
      <section className="bg-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px]">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="rounded-3xl border border-pink-100 bg-[#fff5f8] p-6 shadow-sm sm:p-8 lg:p-10"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
              {/* Left Header */}
              <motion.div variants={fadeInUp} className="shrink-0 lg:max-w-md">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-pink-100/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#e60067]">
                  {t("about.partnersBadge", { defaultValue: "• SOCIAL IMPACT PARTNERS" })}
                </span>
                <h2 className="mt-3 text-2xl sm:text-3xl lg:text-[2rem] font-bold leading-tight text-[#102849]">
                  {t("about.partnersTitle", { defaultValue: "Our Partners" })}
                  <span className="block">{t("about.partnersSubtitle", { defaultValue: "In Creating A Safer Society" })}</span>
                </h2>
              </motion.div>

              {/* 4 Partner Logo Cards */}
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5 flex-1 lg:max-w-3xl">
                {impactPartners.map((partner, index) => (
                  <motion.div
                    variants={scaleIn}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    key={index}
                    className="group flex h-28 sm:h-32 items-center justify-center rounded-2xl border border-pink-100 bg-white p-4 shadow-xs transition-shadow duration-300 hover:shadow-md"
                  >
                    <img
                      src={partner.image}
                      alt={partner.name || `Partner ${index + 1}`}
                      className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <PhoneBanner />
    </div>
  )
}

export default About