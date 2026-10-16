import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Landmark, Gavel, ShieldCheck, Briefcase } from 'lucide-react'
import bannerBg from '../../assets/home/Empowered Women in Pink Horizons (1).png'
import cardBgImage from "../../assets/features/Smiling Woman with Pink Shield Design.png"
import cardBgImage2 from "../../assets/features/Pink Security Alert with Hidden Figure.png"
import cardBgImage3 from "../../assets/features/Glossy Pink E-FIR Legal Laptop Illustration.png"
import cardBgImage4 from "../../assets/features/Glossy Pink City Map Banner.png"
import PhoneBanner from '../../components/common/PhoneBanner'

function PinkInfo() {
  const { t } = useTranslation()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const infoCards = [
    {
      id: 'schemes',
      icon: Landmark,
      title: t('pinkInfo.cards.schemes.title', { defaultValue: 'Government Schemes' }),
      description: t('pinkInfo.cards.schemes.desc', {
        defaultValue: "Discover various government schemes and programs for women's education, health, skill development, financial support and overall empowerment.",
      }),
      bgImage: cardBgImage,
    },
    {
      id: 'laws',
      icon: Gavel,
      title: t('pinkInfo.cards.laws.title', { defaultValue: 'Women Laws' }),
      description: t('pinkInfo.cards.laws.desc', {
        defaultValue: 'Learn about important laws and legal provisions that protect women from violence, harassment and discrimination.',
      }),
      bgImage: cardBgImage2,
    },
    {
      id: 'rights',
      icon: ShieldCheck,
      title: t('pinkInfo.cards.rights.title', { defaultValue: 'Women Rights' }),
      description: t('pinkInfo.cards.rights.desc', {
        defaultValue: 'Know your rights, including equality, dignity, safety, education, property rights and access to justice for a more equal and empowered society.',
      }),
      bgImage: cardBgImage3,
    },
    {
      id: 'posh',
      icon: Briefcase,
      title: t('pinkInfo.cards.posh.title', { defaultValue: 'PoSH Act 2013' }),
      description: t('pinkInfo.cards.posh.desc', {
        defaultValue: 'Get information about the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 and your rights at the workplace.',
      }),
      bgImage: cardBgImage4,
    },
  ]

  return (
    <div className="w-full bg-white">
      {/* Banner with exact same height, width, size, animations, CSS & typography as PageBanner */}
      <section className="relative isolate overflow-hidden w-full h-[250px] sm:h-[310px] md:h-[340px] lg:h-[400px]">
        {/* Background Image with slow zoom-out effect */}
        <img
          src={bannerBg}
          alt="Pink Info - Pink Shakti"
          className={`absolute inset-0 h-full w-full object-cover object-right lg:object-fill -z-10 transition-transform duration-[2000ms] ease-out ${
            isLoaded ? "scale-100" : "scale-110"
          }`}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/10 md:hidden z-0"></div>

        <div className="hero-content relative z-10 flex flex-col justify-center h-full px-[5%] sm:px-[8%] w-[95%] sm:w-[85%] md:w-[65%] lg:w-[55%] text-[#102849]">
          
          {/* Title - Exact PageBanner classes & animation */}
          <h1
            className={`mt-1 sm:mt-1.5 font-serif text-[22px] sm:text-[28px] md:text-[34px] lg:text-[38px] font-bold leading-[1.15] sm:leading-[1.18] tracking-tight transition-all duration-700 ease-out delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-[#e60067]">{t("pinkInfo.bannerTitlePink", { defaultValue: "Pink" })}</span>{' '}
            <span className="text-[#102849]">{t("pinkInfo.bannerTitleNavy", { defaultValue: "Info" })}</span>
          </h1>

          {/* Description - Exact PageBanner classes & animation */}
          <p
            className={`mt-1.5 sm:mt-2 max-w-[34rem] text-[12px] sm:text-[13px] lg:text-[14px] font-medium leading-snug sm:leading-relaxed text-slate-700 line-clamp-3 transition-all duration-700 ease-out delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {t("pinkInfo.bannerDesc", {
              defaultValue:
                "Reliable information on government schemes, women laws, rights and PoSH Act 2013 to help, protect and empower women.",
            })}
          </p>

          {/* 4 Feature Logos / Pills - Exact PageBanner animation & layout timing */}
          <div
            className={`mt-2.5 sm:mt-3.5 lg:mt-4 flex flex-wrap items-center gap-2 sm:gap-2.5 transition-all duration-700 ease-out delay-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* 1. Knowledge */}
            <div className="flex items-center gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl bg-white px-2.5 py-1.5 sm:px-3 sm:py-2 shadow-xs border border-pink-100/80 transition-all duration-300 hover:scale-105 hover:shadow-md cursor-default">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" viewBox="0 0 24 24" fill="none">
                <path d="M12 3L1 9L12 15L21 10.09V17H23V9L12 3Z" fill="#e60067"/>
                <path d="M5 13.18V17.5C5 19.43 8.13 21 12 21C15.87 21 19 19.43 19 17.5V13.18L12 17L5 13.18Z" fill="#e60067"/>
              </svg>
              <span className="text-[11px] sm:text-xs font-bold text-[#102849]">
                {t("pinkInfo.pills.knowledge", { defaultValue: "Knowledge" })}
              </span>
            </div>

            {/* 2. Safety */}
            <div className="flex items-center gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl bg-white px-2.5 py-1.5 sm:px-3 sm:py-2 shadow-xs border border-pink-100/80 transition-all duration-300 hover:scale-105 hover:shadow-md cursor-default">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" viewBox="0 0 28 28" fill="none">
                <path d="M14 2.5L4 6.5V13C4 19.2 8.3 24.8 14 26.2C19.7 24.8 24 19.2 24 13V6.5L14 2.5Z" fill="#e60067"/>
                <path d="M10 13.5L12.8 16.5L18.5 10.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[11px] sm:text-xs font-bold text-[#102849]">
                {t("pinkInfo.pills.safety", { defaultValue: "Safety" })}
              </span>
            </div>

            {/* 3. Awareness */}
            <div className="flex items-center gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl bg-white px-2.5 py-1.5 sm:px-3 sm:py-2 shadow-xs border border-pink-100/80 transition-all duration-300 hover:scale-105 hover:shadow-md cursor-default">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" viewBox="0 0 28 28" fill="none">
                <circle cx="6.5" cy="11.5" r="3" fill="#e60067"/>
                <path d="M2 21C2 18 4.2 16 7 16C8.2 16 9.3 16.4 10.2 17.1C9.5 18 9 19.2 9 20.5V21H2Z" fill="#e60067"/>
                <circle cx="21.5" cy="11.5" r="3" fill="#e60067"/>
                <path d="M26 21C26 18 23.8 16 21 16C19.8 16 18.7 16.4 17.8 17.1C18.5 18 19 19.2 19 20.5V21H26Z" fill="#e60067"/>
                <circle cx="14" cy="9.5" r="3.8" fill="#e60067"/>
                <path d="M8 21.5C8 18 10.7 15.5 14 15.5C17.3 15.5 20 18 20 21.5V22H8V21.5Z" fill="#e60067"/>
              </svg>
              <span className="text-[11px] sm:text-xs font-bold text-[#102849]">
                {t("pinkInfo.pills.awareness", { defaultValue: "Awareness" })}
              </span>
            </div>

            {/* 4. Empowerment */}
            <div className="flex items-center gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl bg-white px-2.5 py-1.5 sm:px-3 sm:py-2 shadow-xs border border-pink-100/80 transition-all duration-300 hover:scale-105 hover:shadow-md cursor-default">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" viewBox="0 0 28 28" fill="none">
                <rect x="4" y="16" width="4.5" height="9" rx="1" fill="#e60067"/>
                <rect x="11.5" y="12" width="4.5" height="13" rx="1" fill="#e60067"/>
                <rect x="19" y="8" width="4.5" height="17" rx="1" fill="#e60067"/>
                <path d="M4 12L10.5 7.5L16.5 11L24 4" stroke="#e60067" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19 4H24V9" stroke="#e60067" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[11px] sm:text-xs font-bold text-[#102849]">
                {t("pinkInfo.pills.empowerment", { defaultValue: "Empowerment" })}
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 4 Pink Info Cards Grid Section */}
      <section className="bg-white px-4 py-6 sm:px-6 lg:px-8 lg:py-9">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-2">
            {infoCards.map((item) => (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border border-pink-100/90 bg-[#fff5f8]/50 p-4 sm:p-5 lg:p-5.5 shadow-xs transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/10 min-h-[155px] sm:min-h-[170px]"
              >
                {/* Background Illustration on Right */}
                <div className="absolute right-0 top-0 bottom-0 w-[42%] sm:w-[46%] pointer-events-none flex items-center justify-end overflow-hidden">
                  <img
                    src={item.bgImage}
                    alt={item.title}
                    className="h-full w-full object-contain object-right transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Subtle soft gradient to guarantee clear text visibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#fff5f8] via-[#fff5f8]/95 to-transparent w-[65%] sm:w-[60%] z-[1] pointer-events-none"></div>

                {/* Content Container on the Left */}
                <div className="relative z-10 max-w-[62%] sm:max-w-[58%] flex flex-col justify-between h-full">
                  <div>
                    {/* Header: Icon Badge + Title */}
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-[#ffd8e6] text-[#e60067] shadow-xs transition-transform duration-300 group-hover:scale-110">
                        <item.icon className="h-4.5 w-4.5 sm:h-5 sm:w-5 stroke-[2.2]" />
                      </div>
                      <h3 className="font-serif text-base sm:text-lg lg:text-[19px] font-bold text-[#e60067] leading-tight">
                        {item.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="mt-2 text-xs sm:text-[12.5px] text-slate-700 leading-snug sm:leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>

                  {/* Explore Details Button */}
                  <div className="mt-3 sm:mt-3.5">
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 sm:gap-2 rounded-xl bg-[#e60067] px-3.5 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-semibold text-white shadow-sm shadow-pink-500/20 transition-all duration-300 hover:bg-[#c9005a] hover:shadow-md hover:scale-[1.03] active:scale-95 cursor-pointer"
                    >
                      <span>{t("pinkInfo.cards.exploreDetails", { defaultValue: "Explore Details" })}</span>
                      <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Phone Banner */}
      <PhoneBanner />
    </div>
  )
}

export default PinkInfo
