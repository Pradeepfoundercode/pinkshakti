import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion' // Added Framer Motion
import BannerSlider from '../../components/common/BannerSlider'
import visionBanner from '../../assets/ourvision/OUR VISION DRAFT.png'
import PhoneBanner from '../../components/common/PhoneBanner'

// Images from src/assets/ourvision
import visionaryImg from '../../assets/ourvision/ourvision_1731070269.png'
import launchImg from '../../assets/ourvision/download.png'
import techSolutionImg from '../../assets/ourvision/download (1).png'

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const imagePop = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

export default function OurVision() {
  const { t } = useTranslation()

  return (
    <div className="w-full bg-[#FFF9FA] text-[#102849] overflow-hidden">
      {/* Top Banner */}
      <BannerSlider
        images={[visionBanner]}
        autoPlay={false}
      />

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">

        {/* Card Container */}
        <div className="rounded-3xl border border-pink-200/90 bg-white p-6 sm:p-10 lg:p-12 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/10">

          {/* Chief Visionary Profile Section */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center text-center pb-8 border-b border-pink-100"
          >
            <div className="relative group mb-3">
              <motion.div 
                whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                transition={{ type: "spring", stiffness: 300 }}
                className="h-44 w-44 sm:h-52 sm:w-52 rounded-2xl overflow-hidden border-2 border-pink-200/80 shadow-md bg-white p-1"
              >
                <img
                  src={visionaryImg}
                  alt={t('ourVisionPage.visionaryName', { defaultValue: "Ms. Snigdhaa Ritesh - Chief Visionary, Pink Shakti" })}
                  className="h-full w-full object-cover rounded-xl"
                />
              </motion.div>
            </div>

            <h2 className="text-[#e60067] font-bold text-sm sm:text-base tracking-wider uppercase mt-1">
              {t('ourVisionPage.visionaryName', { defaultValue: "MS. SNIGDHAA RITESH" })}
            </h2>
            <p className="text-[#e60067] font-bold text-xs sm:text-sm tracking-wider uppercase mt-0.5">
              {t('ourVisionPage.visionaryRole', { defaultValue: "CHIEF VISIONARY, PINK SHAKTI" })}
            </p>
          </motion.div>

          {/* Section: OUR VISION */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8 sm:mt-10"
          >
            <h3 className="font-serif text-xl sm:text-2xl font-extrabold text-[#e60067] uppercase tracking-wide">
              {t('ourVisionPage.visionTitle', { defaultValue: "OUR VISION" })}
            </h3>
            <p className="mt-3 text-slate-700 text-sm sm:text-[15px] leading-relaxed font-medium">
              {t('ourVisionPage.visionText', { defaultValue: "Promoting Holistic Women Empowerment through Technology-driven Aids to ensure Safety, Awareness & Empowerment of Women Populace in a Violence-Free Environment" })}
            </p>
          </motion.div>

          {/* Section: OUR MISSION */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8 sm:mt-10"
          >
            <h3 className="font-serif text-xl sm:text-2xl font-extrabold text-[#e60067] uppercase tracking-wide">
              {t('ourVisionPage.missionTitle', { defaultValue: "OUR MISSION" })}
            </h3>
            <p className="mt-3 text-slate-700 text-sm sm:text-[15px] leading-relaxed font-medium">
              {t('ourVisionPage.missionText', { defaultValue: "To achieve SDG 5 by Empowering Women Populace of India and giving them a fair chance to contribute to Nation Building with dignity, in a Discrimination Free Environment with equal opportunities." })}
            </p>
          </motion.div>

          {/* Section: ABOUT US */}
          <div className="mt-8 sm:mt-10">
            <motion.h3 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="font-serif text-xl sm:text-2xl font-extrabold text-[#e60067] uppercase tracking-wide"
            >
              {t('ourVisionPage.aboutTitle', { defaultValue: "ABOUT US" })}
            </motion.h3>

            <motion.p 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="mt-3 text-slate-700 text-sm sm:text-[15px] leading-relaxed text-justify sm:text-left"
            >
              {t('ourVisionPage.aboutP1', { defaultValue: "We are an Award-Winning Social Startup working towards SDG-5 Gender Equality. PINK SHAKTI APP is a One Stop Tech Solution for women providing them Safety, Awareness and Empowerment with a Holistic approach. The app functions as an integrated computer and mobile aided emergency response platform a '3-Way Emergency Response Support System (ERSS)' with Crime Data Analytics, Big Data, AI and IoT synced to it. We have developed PINK SHAKTI APP after four years of thorough research. We have validated the prototype and received positive feedback from various society stakeholders like school and college-going girls, guardians, journalists, working women, senior police officials, bureaucrats, and ministers. The concept of this innovative App is conceived by our Chief Visionary Ms. Snigdhaa Ritesh who has worked as a journalist for 16 years and covered pertinent issues concerning women safety and empowerment. She firmly believes that this initiative would impact the lives of crores of women populace of Uttar Pradesh. For our innovation and comprehensive concept, we have won many accolades and awards both at the State and Central Level. Pink Shakti App was formally launched by the Honorable Mayor of Lucknow, Ms. Shushma Kharkawal on the eve of Women's Day 2024." })}
            </motion.p>

            {/* Middle Image 1: Grand Launch Event */}
            <motion.div 
              variants={imagePop}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="my-6 sm:my-8 flex justify-center"
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-full max-w-2xl sm:max-w-3xl rounded-2xl overflow-hidden border border-pink-200/80 shadow-sm hover:shadow-md cursor-pointer"
              >
                <img
                  src={launchImg}
                  alt={t('ourVisionPage.launchImgAlt', { defaultValue: "Pink Shakti Grand Launch Event by Mayor of Lucknow" })}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </motion.div>

            <motion.p 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="text-slate-700 text-sm sm:text-[15px] leading-relaxed text-justify sm:text-left"
            >
              {t('ourVisionPage.aboutP2', { defaultValue: "Working towards SDG-5, Pink Shakti firmly believes that Women & girls can never be empowered unless they are safe. Safety comes first whether they are at home, in school, college, at workplace or travelling via public or private transport or just walking on road. They will only come out of their houses to exercise their free choices when we create a conducive environment for them. Pink Shakti also opines that for all round development of women there is an utmost need to invest time and capital for all aspects- right from safety, education, financial independence, awareness, mental, physical and menstrual health to providing them equal opportunities everywhere." })}
            </motion.p>

            {/* Middle Image 2: Pink Shakti Tech Solution Showcase */}
            <motion.div 
              variants={imagePop}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="my-6 sm:my-8 flex justify-center"
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-full max-w-2xl sm:max-w-3xl rounded-2xl overflow-hidden border border-pink-200/80 shadow-sm hover:shadow-md cursor-pointer"
              >
                <img
                  src={techSolutionImg}
                  alt={t('ourVisionPage.techImgAlt', { defaultValue: "Pink Shakti One-Stop Tech Solution for Women" })}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </motion.div>

            <motion.p 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="text-slate-700 text-sm sm:text-[15px] leading-relaxed text-justify sm:text-left"
            >
              {t('ourVisionPage.aboutP3', { defaultValue: "With joint efforts of Government and other stakeholders of Society, Pink Shakti aims to empower womenfolk, exercising free choices over their minds, to become economically independent in an atmosphere free from violence and threat. We appeal everyone to download Pink Shakti App and join our movement in empowering the womenfolk of Uttar Pradesh leading towards the path of progress and prosperity." })}
            </motion.p>
          </div>

        </div>
      </main>

      {/* Phone Banner at Bottom */}
      <PhoneBanner />
    </div>
  )
}