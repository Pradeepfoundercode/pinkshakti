import React from 'react'
import { useTranslation } from 'react-i18next'
import PageBanner from '../../components/common/PageBanner'
import PhoneBanner from '../../components/common/PhoneBanner'

// Images from src/assets/ourvision
import visionaryImg from '../../assets/ourvision/ourvision_1731070269.png'
import launchImg from '../../assets/ourvision/download.png'
import techSolutionImg from '../../assets/ourvision/download (1).png'

export default function OurVision() {
  const { t } = useTranslation()

  return (
    <div className="w-full bg-[#FFF9FA] text-[#102849]">
      {/* Top Banner */}
      <PageBanner
        alt="Pink Shakti - Our Vision & Mission"
        badge={t("ourVision.pageBadge", { defaultValue: "• OUR VISION" })}
        title={
          <>
            {t("ourVision.bannerTitle1", { defaultValue: "Our Vision &" })}{" "}
            <span className="text-[#e60067]">
              {t("ourVision.bannerTitle2", { defaultValue: "Mission" })}
            </span>
          </>
        }
        description={t("ourVision.bannerDesc", {
          defaultValue:
            "Promoting Holistic Women Empowerment through Technology-driven Aids to ensure Safety, Awareness & Empowerment."
        })}
      />

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">

        {/* Card Container */}
        <div className="rounded-3xl border border-pink-200/90 bg-white p-6 sm:p-10 lg:p-12 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/10">

          {/* Chief Visionary Profile Section */}
          <div className="flex flex-col items-center text-center pb-8 border-b border-pink-100">
            <div className="relative group mb-3">
              <div className="h-44 w-44 sm:h-52 sm:w-52 rounded-2xl overflow-hidden border-2 border-pink-200/80 shadow-md bg-white p-1 transition-transform duration-500 group-hover:scale-105">
                <img
                  src={visionaryImg}
                  alt="Ms. Snigdhaa Ritesh - Chief Visionary, Pink Shakti"
                  className="h-full w-full object-cover rounded-xl"
                />
              </div>
            </div>

            <h2 className="text-[#e60067] font-bold text-sm sm:text-base tracking-wider uppercase mt-1">
              MS. SNIGDHAA RITESH
            </h2>
            <p className="text-[#e60067] font-bold text-xs sm:text-sm tracking-wider uppercase mt-0.5">
              CHIEF VISIONARY, PINK SHAKTI
            </p>
          </div>

          {/* Section: OUR VISION */}
          <div className="mt-8 sm:mt-10">
            <h3 className="font-serif text-xl sm:text-2xl font-extrabold text-[#e60067] uppercase tracking-wide">
              OUR VISION
            </h3>
            <p className="mt-3 text-slate-700 text-sm sm:text-[15px] leading-relaxed font-medium">
              Promoting Holistic Women Empowerment through Technology-driven Aids to ensure Safety, Awareness & Empowerment of Women Populace in a Violence-Free Environment
            </p>
          </div>

          {/* Section: OUR MISSION */}
          <div className="mt-8 sm:mt-10">
            <h3 className="font-serif text-xl sm:text-2xl font-extrabold text-[#e60067] uppercase tracking-wide">
              OUR MISSION
            </h3>
            <p className="mt-3 text-slate-700 text-sm sm:text-[15px] leading-relaxed font-medium">
              To achieve SDG 5 by Empowering Women Populace of India and giving them a fair chance to contribute to Nation Building with dignity, in a Discrimination Free Environment with equal opportunities.
            </p>
          </div>

          {/* Section: ABOUT US */}
          <div className="mt-8 sm:mt-10">
            <h3 className="font-serif text-xl sm:text-2xl font-extrabold text-[#e60067] uppercase tracking-wide">
              ABOUT US
            </h3>

            <p className="mt-3 text-slate-700 text-sm sm:text-[15px] leading-relaxed text-justify sm:text-left">
              We are an Award-Winning Social Startup working towards SDG-5 Gender Equality. PINK SHAKTI APP is a One Stop Tech Solution for women providing them Safety, Awareness and Empowerment with a Holistic approach. The app functions as an integrated computer and mobile aided emergency response platform a '3-Way Emergency Response Support System (ERSS)' with Crime Data Analytics, Big Data, AI and IoT synced to it. We have developed PINK SHAKTI APP after four years of thorough research. We have validated the prototype and received positive feedback from various society stakeholders like school and college-going girls, guardians, journalists, working women, senior police officials, bureaucrats, and ministers. The concept of this innovative App is conceived by our Chief Visionary Ms. Snigdhaa Ritesh who has worked as a journalist for 16 years and covered pertinent issues concerning women safety and empowerment. She firmly believes that this initiative would impact the lives of crores of women populace of Uttar Pradesh. For our innovation and comprehensive concept, we have won many accolades and awards both at the State and Central Level. Pink Shakti App was formally launched by the Honorable Mayor of Lucknow, Ms. Shushma Kharkawal on the eve of Women's Day 2024.
            </p>

            {/* Middle Image 1: Grand Launch Event */}
            <div className="my-6 sm:my-8 flex justify-center">
              <div className="w-full max-w-2xl sm:max-w-3xl rounded-2xl overflow-hidden border border-pink-200/80 shadow-sm transition-transform duration-500 hover:scale-[1.01] hover:shadow-md">
                <img
                  src={launchImg}
                  alt="Pink Shakti Grand Launch Event by Mayor of Lucknow"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <p className="text-slate-700 text-sm sm:text-[15px] leading-relaxed text-justify sm:text-left">
              Working towards SDG-5, Pink Shakti firmly believes that Women & girls can never be empowered unless they are safe. Safety comes first whether they are at home, in school, college, at workplace or travelling via public or private transport or just walking on road. They will only come out of their houses to exercise their free choices when we create a conducive environment for them. Pink Shakti also opines that for all round development of women there is an utmost need to invest time and capital for all aspects- right from safety, education, financial independence, awareness, mental, physical and menstrual health to providing them equal opportunities everywhere.
            </p>

            {/* Middle Image 2: Pink Shakti Tech Solution Showcase */}
            <div className="my-6 sm:my-8 flex justify-center">
              <div className="w-full max-w-2xl sm:max-w-3xl rounded-2xl overflow-hidden border border-pink-200/80 shadow-sm transition-transform duration-500 hover:scale-[1.01] hover:shadow-md">
                <img
                  src={techSolutionImg}
                  alt="Pink Shakti One-Stop Tech Solution for Women"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <p className="text-slate-700 text-sm sm:text-[15px] leading-relaxed text-justify sm:text-left">
              With joint efforts of Government and other stakeholders of Society, Pink Shakti aims to empower womenfolk, exercising free choices over their minds, to become economically independent in an atmosphere free from violence and threat. We appeal everyone to download Pink Shakti App and join our movement in empowering the womenfolk of Uttar Pradesh leading towards the path of progress and prosperity.
            </p>
          </div>

        </div>
      </main>

      {/* Phone Banner at Bottom */}
      <PhoneBanner />
    </div>
  )
}
