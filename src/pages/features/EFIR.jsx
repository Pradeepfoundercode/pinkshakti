import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ExternalLink } from 'lucide-react'
import bannerBg from '../../assets/banner/e-fir.png'
import PhoneBanner from '../../components/common/PhoneBanner'

function EFIR() {
  const { t } = useTranslation()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen">
      {/* Top Banner Section */}
      <section className="relative isolate h-[200px] w-full overflow-hidden sm:h-[260px] md:h-[320px] lg:h-[345px]">
        {/* Background Image with slow zoom-out effect */}
        <img
          src={bannerBg}
          alt="E-FIR - Pink Shakti"
          className={`absolute inset-0 -z-10 h-full w-full object-cover object-[60%_center] lg:object-fill transition-transform duration-[2000ms] ease-out ${isLoaded ? "scale-100" : "scale-110"
            }`}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/10 md:hidden z-0"></div>

        <div className="hero-content relative z-10 flex flex-col justify-center h-full px-[5%] sm:px-[8%] w-[95%] sm:w-[85%] md:w-[65%] lg:w-[58%] text-[#102849]">
          {/* Badge: • E-FIR */}
          <div
            className={`transition-all duration-700 ease-out delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="mb-0.5 sm:mb-1.5">
              <span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-pink-100/90 px-2 py-0.5 sm:px-3 sm:py-0.5 text-[9.5px] sm:text-[11px] font-bold text-[#e60067] shadow-xs">
                <span className="text-sm leading-none">•</span>
                <span>{t('eFirPage.badge', { defaultValue: 'E-FIR' })}</span>
              </span>
            </div>
          </div>

          {/* Title: E-FIR – File a Complaint Online */}
          <h1
            className={`mt-0.5 sm:mt-1 font-serif text-[17px] sm:text-[24px] md:text-[30px] lg:text-[36px] font-bold leading-tight sm:leading-[1.18] tracking-tight transition-all duration-700 ease-out delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="text-[#e60067]">
              {t('eFirPage.titlePink', { defaultValue: 'E-FIR' })}
            </span>{' '}
            <span className="text-[#102849]">
              {t('eFirPage.titleNavy', { defaultValue: '– File a Complaint Online' })}
            </span>
          </h1>

          {/* Description */}
          <p
            className={`mt-1 sm:mt-1.5 max-w-[34rem] text-[10.5px] sm:text-[12.5px] lg:text-[14px] font-medium leading-snug sm:leading-relaxed text-slate-700 line-clamp-2 sm:line-clamp-3 transition-all duration-700 ease-out delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {t('eFirPage.desc', {
              defaultValue:
                'Get information about E-FIR and access the official Uttar Pradesh Police e-FIR portal to register your complaint online. Know when and how to use e-FIR for a faster and easier process.',
            })}
          </p>

          {/* Button: Go to UP Police e-FIR Portal (Same gradient & responsive sizing as Home banner) */}
          <div
            className={`mt-2 sm:mt-3 lg:mt-4 flex flex-wrap items-center gap-2 sm:gap-3 transition-all duration-700 ease-out delay-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a
              href="https://cctnsup.gov.in/eFIR/login.aspx?cd=MQA3ADAA"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full btn-pink-gradient px-3.5 py-1.5 sm:px-5 sm:py-2.5 text-[11px] sm:text-sm font-semibold shadow-md transition-all duration-300 hover:shadow-[0_8px_20px_rgba(230,0,103,0.3)] hover:scale-[1.03] active:scale-95 w-fit"
            >
              <span>{t('eFirPage.button', { defaultValue: 'Go to UP Police e-FIR Portal' })}</span>
              <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* About E-FIR Section */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5">
        <div className="mx-auto max-w-[1600px]">
          <div className="rounded-3xl border border-pink-100 bg-gradient-to-r from-[#fff5f8] via-[#fff9fb] to-[#fff5f8] p-5 sm:p-6 lg:p-7 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-pink-500/10 relative overflow-hidden">
            <div className="flex flex-col xl:flex-row items-center xl:items-start justify-between gap-4 sm:gap-5 xl:gap-6 relative z-10">
              
              {/* Left Column: Police Avatar + About E-FIR + Description + CTA Button */}
              <div className="w-full xl:w-[35%] flex items-start gap-3 sm:gap-3.5 shrink-0">
                {/* Police Officer Circular Badge */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#fdebf3] border border-pink-200/80 flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 hover:scale-105">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 64 64" fill="none">
                    {/* Cap Crown */}
                    <path
                      d="M14 26C14 17 21 13 32 13C43 13 50 17 50 26L52 30C52 31 50 32 32 32C14 32 12 31 12 30L14 26Z"
                      fill="#e60067"
                    />
                    {/* Cap Visor */}
                    <path
                      d="M16 29C20 31 25 32 32 32C39 32 44 31 48 29C49 32 45 34 32 34C19 34 15 32 16 29Z"
                      fill="#b80053"
                    />
                    {/* Cap Badge */}
                    <circle cx="32" cy="20" r="3" fill="#ffe4ee" stroke="#ffffff" strokeWidth="1.2" />
                    <polygon points="32,18 32.8,20.5 35.5,20.5 33.3,22 34.2,24.5 32,23 29.8,24.5 30.7,22 28.5,20.5 31.2,20.5" fill="#e60067" />
                    {/* Ears */}
                    <circle cx="20" cy="38" r="3" fill="#ffd1e3" />
                    <circle cx="44" cy="38" r="3" fill="#ffd1e3" />
                    {/* Face */}
                    <rect x="21" y="28" width="22" height="15" rx="7.5" fill="#ffe4ee" />
                    {/* Eyes */}
                    <circle cx="27" cy="35" r="2" fill="#e60067" />
                    <circle cx="37" cy="35" r="2" fill="#e60067" />
                    {/* Mustache & Smile */}
                    <path
                      d="M26 39.5C28 38.5 31 39 32 40.5C33 39 36 38.5 38 39.5C36 41 33.5 41.2 32 40.5C30.5 41.2 28 41 26 39.5Z"
                      fill="#e60067"
                    />
                    {/* Uniform Shoulders */}
                    <path
                      d="M13 58C13 49 20 45 32 45C44 45 51 49 51 58"
                      fill="#e60067"
                    />
                    {/* Shirt Collar */}
                    <polygon points="26,45 38,45 32,53" fill="#ffffff" />
                    {/* Tie */}
                    <polygon points="30.5,47 33.5,47 34,55 32,58 30,55" fill="#e60067" />
                    {/* Epaulettes */}
                    <rect x="15" y="47" width="7" height="2.5" rx="1" fill="#ffd1e3" />
                    <rect x="42" y="47" width="7" height="2.5" rx="1" fill="#ffd1e3" />
                  </svg>
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <h2 className="font-serif leading-none">
                    <span className="text-[#e60067] font-bold text-xl sm:text-2xl lg:text-[26px]">
                      {t('eFirPage.aboutSection.titlePink', { defaultValue: 'About' })}
                    </span>{' '}
                    <span className="text-[#102849] font-bold text-xl sm:text-2xl lg:text-[26px]">
                      {t('eFirPage.aboutSection.titleNavy', { defaultValue: 'E-FIR' })}
                    </span>
                  </h2>

                  <p className="mt-1.5 text-slate-600 text-[11.5px] sm:text-xs leading-relaxed max-w-md">
                    {t('eFirPage.aboutSection.desc', {
                      defaultValue:
                        'E-FIR (Electronic First Information Report) is an online facility provided by Uttar Pradesh Police to register certain types of complaints. Pink Shakti provides information and a direct link to the official UP Police e-FIR portal.',
                    })}
                  </p>

                  <div className="mt-2.5 sm:mt-3">
                    <a
                      href="https://cctnsup.gov.in/eFIR/login.aspx?cd=MQA3ADAA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl btn-pink active:scale-[0.98] font-bold text-[11.5px] sm:text-xs py-2 px-4 shadow-sm shadow-pink-500/20 transition-all duration-200 cursor-pointer w-fit group"
                    >
                      <span>
                        {t('eFirPage.aboutSection.button', {
                          defaultValue: 'Visit Official e-FIR Portal',
                        })}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: 4 Feature Cards */}
              <div className="w-full xl:w-[65%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 items-stretch">
                {/* Card 1: Register Online */}
                <div className="bg-white rounded-2xl py-3.5 px-3 sm:px-3.5 border border-pink-200 shadow-sm hover:shadow-xl hover:border-[#e60067]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-between group cursor-default">
                  <div className="w-12 h-12 rounded-full bg-[#fdebf3] border border-pink-200/60 shadow-xs flex items-center justify-center mb-2.5 transition-transform duration-300 group-hover:scale-110 shrink-0">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                      <rect x="4" y="2" width="16" height="20" rx="3" fill="#e60067" />
                      <line x1="8" y1="7" x2="16" y2="7" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                      <line x1="8" y1="11" x2="16" y2="11" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                      <line x1="8" y1="15" x2="12" y2="15" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-[#102849] text-xs sm:text-[13px] mb-0.5 group-hover:text-[#e60067] transition-colors duration-200">
                      {t('eFirPage.aboutSection.cards.registerOnline.title', { defaultValue: 'Register Online' })}
                    </h3>
                    <p className="text-slate-500 text-[10px] sm:text-[10.5px] leading-snug">
                      {t('eFirPage.aboutSection.cards.registerOnline.desc', {
                        defaultValue: 'File your complaint online through the official UP Police portal.',
                      })}
                    </p>
                  </div>
                </div>

                {/* Card 2: Save Time */}
                <div className="bg-white rounded-2xl py-3.5 px-3 sm:px-3.5 border border-pink-200 shadow-sm hover:shadow-xl hover:border-[#e60067]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-between group cursor-default">
                  <div className="w-12 h-12 rounded-full bg-[#fdebf3] border border-pink-200/60 shadow-xs flex items-center justify-center mb-2.5 transition-transform duration-300 group-hover:scale-110 shrink-0">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" fill="#e60067" />
                      <polyline points="12 7 12 12 15 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-[#102849] text-xs sm:text-[13px] mb-0.5 group-hover:text-[#e60067] transition-colors duration-200">
                      {t('eFirPage.aboutSection.cards.saveTime.title', { defaultValue: 'Save Time' })}
                    </h3>
                    <p className="text-slate-500 text-[10px] sm:text-[10.5px] leading-snug">
                      {t('eFirPage.aboutSection.cards.saveTime.desc', {
                        defaultValue: 'Avoid unnecessary travel to the police station for eligible cases.',
                      })}
                    </p>
                  </div>
                </div>

                {/* Card 3: Track Status */}
                <div className="bg-white rounded-2xl py-3.5 px-3 sm:px-3.5 border border-pink-200 shadow-sm hover:shadow-xl hover:border-[#e60067]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-between group cursor-default">
                  <div className="w-12 h-12 rounded-full bg-[#fdebf3] border border-pink-200/60 shadow-xs flex items-center justify-center mb-2.5 transition-transform duration-300 group-hover:scale-110 shrink-0">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#e60067" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-[#102849] text-xs sm:text-[13px] mb-0.5 group-hover:text-[#e60067] transition-colors duration-200">
                      {t('eFirPage.aboutSection.cards.trackStatus.title', { defaultValue: 'Track Status' })}
                    </h3>
                    <p className="text-slate-500 text-[10px] sm:text-[10.5px] leading-snug">
                      {t('eFirPage.aboutSection.cards.trackStatus.desc', {
                        defaultValue: 'Check the status of your complaint on the e-FIR portal.',
                      })}
                    </p>
                  </div>
                </div>

                {/* Card 4: Official & Secure */}
                <div className="bg-white rounded-2xl py-3.5 px-3 sm:px-3.5 border border-pink-200 shadow-sm hover:shadow-xl hover:border-[#e60067]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-between group cursor-default">
                  <div className="w-12 h-12 rounded-full bg-[#fdebf3] border border-pink-200/60 shadow-xs flex items-center justify-center mb-2.5 transition-transform duration-300 group-hover:scale-110 shrink-0">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="#e60067" />
                      <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-[#102849] text-xs sm:text-[13px] mb-0.5 group-hover:text-[#e60067] transition-colors duration-200">
                      {t('eFirPage.aboutSection.cards.officialSecure.title', { defaultValue: 'Official & Secure' })}
                    </h3>
                    <p className="text-slate-500 text-[10px] sm:text-[10.5px] leading-snug">
                      {t('eFirPage.aboutSection.cards.officialSecure.desc', {
                        defaultValue: 'A government platform managed by Uttar Pradesh Police.',
                      })}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* When to Use E-FIR & When to Visit Police Station Section */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 sm:gap-6">
            
            {/* Box 1: When to Use E-FIR */}
            <div className="rounded-3xl border border-pink-100 bg-gradient-to-r from-[#fff5f8] via-[#fff9fb] to-[#fff5f8] p-5 sm:p-6 lg:p-7 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-pink-500/10 relative overflow-hidden flex flex-col justify-between gap-4">
              
              <div className="flex items-start gap-3 sm:gap-3.5 shrink-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#fdebf3] border border-pink-200/80 flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 hover:scale-105">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none">
                    <rect x="4" y="2" width="16" height="20" rx="3" fill="#e60067" />
                    <line x1="8" y1="7" x2="16" y2="7" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                    <line x1="8" y1="11" x2="16" y2="11" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                    <line x1="8" y1="15" x2="12" y2="15" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </div>

                <div className="flex-1">
                  <h2 className="font-serif leading-none mt-1">
                    <span className="text-[#e60067] font-bold text-lg sm:text-xl lg:text-[22px]">
                      {t('eFirPage.whenToUse.titlePink', { defaultValue: 'When to Use' })}
                    </span>{' '}
                    <span className="text-[#102849] font-bold text-lg sm:text-xl lg:text-[22px]">
                      {t('eFirPage.whenToUse.titleNavy', { defaultValue: 'E-FIR?' })}
                    </span>
                  </h2>
                  <p className="mt-1.5 text-slate-600 text-[11.5px] sm:text-xs leading-relaxed">
                    {t('eFirPage.whenToUse.desc', {
                      defaultValue: 'E-FIR can be used for certain types of non-cognizable offences such as:',
                    })}
                  </p>
                </div>
              </div>

              <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 sm:gap-3 items-stretch mt-1">
                <div className="bg-white rounded-2xl py-3 px-2 border border-pink-200 shadow-sm hover:shadow-xl hover:border-[#e60067]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-between group cursor-default min-h-[96px]">
                  <div className="w-10 h-10 rounded-full bg-[#fdebf3] border border-pink-200/60 shadow-xs flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <svg className="w-5 h-5 text-[#e60067]" viewBox="0 0 24 24" fill="none">
                      <path d="M7 8V6C7 3.8 8.8 2 11 2H13C15.2 2 17 3.8 17 6V8" stroke="#e60067" strokeWidth="2" strokeLinecap="round" />
                      <rect x="4" y="8" width="16" height="14" rx="3" fill="#e60067" />
                      <path d="M10 12H14" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-[#102849] text-xs leading-tight group-hover:text-[#e60067] transition-colors duration-200">
                      {t('eFirPage.whenToUse.cards.theft.title', { defaultValue: 'Theft' })}
                    </h3>
                    <p className="text-slate-500 text-[10px] leading-tight mt-0.5">
                      {t('eFirPage.whenToUse.cards.theft.subtitle', { defaultValue: '(Lost items)' })}
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl py-3 px-2 border border-pink-200 shadow-sm hover:shadow-xl hover:border-[#e60067]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-between group cursor-default min-h-[96px]">
                  <div className="w-10 h-10 rounded-full bg-[#fdebf3] border border-pink-200/60 shadow-xs flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <rect x="6" y="2" width="12" height="20" rx="3" stroke="#e60067" strokeWidth="2" />
                      <circle cx="12" cy="18" r="1.2" fill="#e60067" />
                      <line x1="10" y1="5" x2="14" y2="5" stroke="#e60067" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-[#102849] text-xs leading-tight group-hover:text-[#e60067] transition-colors duration-200">
                      {t('eFirPage.whenToUse.cards.mobileTheft.title', { defaultValue: 'Mobile Theft' })}
                    </h3>
                  </div>
                </div>

                <div className="bg-white rounded-2xl py-3 px-2 border border-pink-200 shadow-sm hover:shadow-xl hover:border-[#e60067]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-between group cursor-default min-h-[96px]">
                  <div className="w-10 h-10 rounded-full bg-[#fdebf3] border border-pink-200/60 shadow-xs flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <path d="M5 11L7 5H17L19 11M5 11H19M5 11V18C5 18.5523 5.44772 19 6 19H7C7.55228 19 8 18.5523 8 18V17H16V18C16 18.5523 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V11" stroke="#e60067" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="8" cy="14" r="1.5" fill="#e60067" />
                      <circle cx="16" cy="14" r="1.5" fill="#e60067" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-[#102849] text-xs leading-tight group-hover:text-[#e60067] transition-colors duration-200">
                      {t('eFirPage.whenToUse.cards.vehicleTheft.title', { defaultValue: 'Vehicle Theft' })}
                    </h3>
                  </div>
                </div>

                <div className="bg-white rounded-2xl py-3 px-2 border border-pink-200 shadow-sm hover:shadow-xl hover:border-[#e60067]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-between group cursor-default min-h-[96px]">
                  <div className="w-10 h-10 rounded-full bg-[#fdebf3] border border-pink-200/60 shadow-xs flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <svg className="w-5 h-5 text-[#e60067]" viewBox="0 0 24 24" fill="none">
                      <rect x="5" y="3" width="14" height="18" rx="2" fill="#e60067" />
                      <line x1="8" y1="8" x2="16" y2="8" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
                      <line x1="8" y1="12" x2="16" y2="12" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
                      <line x1="8" y1="16" x2="12" y2="16" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-[#102849] text-xs leading-tight group-hover:text-[#e60067] transition-colors duration-200">
                      {t('eFirPage.whenToUse.cards.documentLoss.title', { defaultValue: 'Document Loss' })}
                    </h3>
                  </div>
                </div>

                <div className="bg-white rounded-2xl py-3 px-2 border border-pink-200 shadow-sm hover:shadow-xl hover:border-[#e60067]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-between group cursor-default min-h-[96px]">
                  <div className="w-10 h-10 rounded-full bg-[#fdebf3] border border-pink-200/60 shadow-xs flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <svg className="w-5 h-5 text-[#e60067]" viewBox="0 0 24 24" fill="none">
                      <circle cx="6" cy="12" r="2.2" fill="#e60067" />
                      <circle cx="12" cy="12" r="2.2" fill="#e60067" />
                      <circle cx="18" cy="12" r="2.2" fill="#e60067" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-[#102849] text-xs leading-tight group-hover:text-[#e60067] transition-colors duration-200">
                      {t('eFirPage.whenToUse.cards.otherEligible.title', { defaultValue: 'Other Eligible Complaints' })}
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 2: When to Visit Police Station */}
            <div className="rounded-3xl border border-pink-100 bg-gradient-to-r from-[#fff5f8] via-[#fff9fb] to-[#fff5f8] p-5 sm:p-6 lg:p-7 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-pink-500/10 relative overflow-hidden flex flex-col justify-between gap-4">
              
              <div className="flex items-start gap-3 sm:gap-3.5 shrink-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#fdebf3] border border-pink-200/80 flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 hover:scale-105">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L3 7V9H21V7L12 2Z" fill="#e60067" />
                    <circle cx="12" cy="5.5" r="1.2" fill="white" />
                    <rect x="5" y="9" width="2" height="9" fill="#e60067" />
                    <rect x="9.5" y="9" width="2" height="9" fill="#e60067" />
                    <rect x="13.5" y="9" width="2" height="9" fill="#e60067" />
                    <rect x="18" y="9" width="2" height="9" fill="#e60067" />
                    <rect x="2" y="18" width="20" height="3" rx="1" fill="#e60067" />
                  </svg>
                </div>

                <div className="flex-1">
                  <h2 className="font-serif leading-none mt-1">
                    <span className="text-[#e60067] font-bold text-lg sm:text-xl lg:text-[22px]">
                      {t('eFirPage.whenToVisitPolice.titlePink', { defaultValue: 'When to Visit' })}
                    </span>{' '}
                    <span className="text-[#102849] font-bold text-lg sm:text-xl lg:text-[22px]">
                      {t('eFirPage.whenToVisitPolice.titleNavy', { defaultValue: 'Police Station?' })}
                    </span>
                  </h2>
                  <p className="mt-1.5 text-slate-600 text-[11.5px] sm:text-xs leading-relaxed">
                    {t('eFirPage.whenToVisitPolice.desc', {
                      defaultValue: 'For serious and cognizable offences, please visit your nearest police station or contact emergency helplines such as 112. Examples:',
                    })}
                  </p>
                </div>
              </div>

              <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 sm:gap-3 items-stretch mt-1">
                <div className="bg-white rounded-2xl py-3 px-2 border border-pink-200 shadow-sm hover:shadow-xl hover:border-[#e60067]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-between group cursor-default min-h-[96px]">
                  <div className="w-10 h-10 rounded-full bg-[#fdebf3] border border-pink-200/60 shadow-xs flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <svg className="w-5 h-5 text-[#e60067]" viewBox="0 0 24 24" fill="none">
                      <circle cx="13" cy="4" r="2.2" fill="#e60067" />
                      <path d="M10 8L13 11L16 9M9 13L11 11L13 15L15 20M13 15L10 18" stroke="#e60067" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-[#102849] text-xs leading-tight group-hover:text-[#e60067] transition-colors duration-200">
                      {t('eFirPage.whenToVisitPolice.cards.physicalAssault.title', { defaultValue: 'Physical Assault' })}
                    </h3>
                  </div>
                </div>

                <div className="bg-white rounded-2xl py-3 px-2 border border-pink-200 shadow-sm hover:shadow-xl hover:border-[#e60067]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-between group cursor-default min-h-[96px]">
                  <div className="w-10 h-10 rounded-full bg-[#fdebf3] border border-pink-200/60 shadow-xs flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <svg className="w-5 h-5 text-[#e60067]" viewBox="0 0 24 24" fill="none">
                      <path d="M12 3L2 20H22L12 3Z" fill="#e60067" />
                      <line x1="12" y1="9" x2="12" y2="14" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="12" cy="17" r="1.2" fill="white" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-[#102849] text-xs leading-tight group-hover:text-[#e60067] transition-colors duration-200">
                      {t('eFirPage.whenToVisitPolice.cards.seriousCrimes.title', { defaultValue: 'Serious Crimes' })}
                    </h3>
                  </div>
                </div>

                <div className="bg-white rounded-2xl py-3 px-2 border border-pink-200 shadow-sm hover:shadow-xl hover:border-[#e60067]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-between group cursor-default min-h-[96px]">
                  <div className="w-10 h-10 rounded-full bg-[#fdebf3] border border-pink-200/60 shadow-xs flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <svg className="w-5 h-5 text-[#e60067]" viewBox="0 0 24 24" fill="none">
                      <circle cx="9" cy="6" r="2" fill="#e60067" />
                      <path d="M6 14V11C6 9.89543 6.89543 9 8 9H10C11.1046 9 12 9.89543 12 11V14" stroke="#e60067" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="16" cy="10" r="1.8" fill="#e60067" />
                      <path d="M14 19V15C14 14.2 14.6 13.5 15.4 13.5H16.6C17.4 13.5 18 14.2 18 15V19" stroke="#e60067" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-[#102849] text-xs leading-tight group-hover:text-[#e60067] transition-colors duration-200">
                      {t('eFirPage.whenToVisitPolice.cards.domesticViolence.title', { defaultValue: 'Domestic Violence' })}
                    </h3>
                  </div>
                </div>

                <div className="bg-white rounded-2xl py-3 px-2 border border-pink-200 shadow-sm hover:shadow-xl hover:border-[#e60067]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-between group cursor-default min-h-[96px]">
                  <div className="w-10 h-10 rounded-full bg-[#fdebf3] border border-pink-200/60 shadow-xs flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <svg className="w-5 h-5 text-[#e60067]" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="7" r="3" fill="#e60067" />
                      <path d="M6 20C6 16.5 8.7 13.5 12 13.5C15.3 13.5 18 16.5 18 20" stroke="#e60067" strokeWidth="2.2" strokeLinecap="round" />
                      <path d="M9 10C9 8.5 10.3 7 12 7C13.7 7 15 8.5 15 10" fill="#e60067" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-[#102849] text-xs leading-tight group-hover:text-[#e60067] transition-colors duration-200">
                      {t('eFirPage.whenToVisitPolice.cards.harassment.title', { defaultValue: 'Harassment' })}
                    </h3>
                  </div>
                </div>

                <div className="bg-white rounded-2xl py-3 px-2 border border-pink-200 shadow-sm hover:shadow-xl hover:border-[#e60067]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-between group cursor-default min-h-[96px]">
                  <div className="w-10 h-10 rounded-full bg-[#fdebf3] border border-pink-200/60 shadow-xs flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <svg className="w-5 h-5 text-[#e60067]" viewBox="0 0 24 24" fill="none">
                      <path d="M12 4C9 4 7 6.5 7 10V15H17V10C17 6.5 15 4 12 4Z" fill="#e60067" />
                      <rect x="6" y="15" width="12" height="3" rx="1.5" fill="#e60067" />
                      <line x1="12" y1="1" x2="12" y2="3" stroke="#e60067" strokeWidth="2" strokeLinecap="round" />
                      <line x1="4" y1="5" x2="6" y2="6.5" stroke="#e60067" strokeWidth="2" strokeLinecap="round" />
                      <line x1="20" y1="5" x2="18" y2="6.5" stroke="#e60067" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-[#102849] text-xs leading-tight group-hover:text-[#e60067] transition-colors duration-200">
                      {t('eFirPage.whenToVisitPolice.cards.otherUrgent.title', { defaultValue: 'Other Urgent Matters' })}
                    </h3>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* How to Register E-FIR & Important Points Section */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 sm:gap-6 items-stretch">
            
            {/* Left Box: How to Register E-FIR */}
            <div className="xl:col-span-8 rounded-3xl border border-pink-100 bg-gradient-to-r from-[#fff5f8] via-[#fff9fb] to-[#fff5f8] p-5 sm:p-6 lg:p-7 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-pink-500/10 relative overflow-hidden flex flex-col justify-between">
              <div>
                {/* Header */}
                <div className="flex items-start gap-3 sm:gap-3.5 mb-2.5 sm:mb-3">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#fdebf3] border border-pink-200/80 flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 hover:scale-105">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#e60067]" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.312.12-.423.064L6.1 5.347c-.8-.43-1.796-.16-2.28.608l-1.02 1.62c-.482.766-.312 1.77.387 2.348l1.01.838c.11.092.148.243.11.4a7.48 7.48 0 000 1.144c.038.157 0 .308-.11.4l-1.01.838c-.7.578-.87 1.582-.387 2.348l1.02 1.62c.484.768 1.48 1.038 2.28.608l1.244-.524c.111-.056.257-.051.423.064.312.215.642.406.986.57.182.088.277.228.297.348l.178 1.072c.151.904.933 1.567 1.85 1.567h2.044c.917 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.115-.26.297-.348.344-.164.674-.355.986-.57.166-.115.312-.12.423-.064l1.244.524c.8.43 1.796.16 2.28-.608l1.02-1.62c.483-.766.313-1.77-.387-2.348l-1.01-.838c-.11-.092-.148-.243-.11-.4a7.48 7.48 0 000-1.144c-.038-.157 0-.308.11-.4l1.01-.838c.7-.578.87-1.582.387-2.348l-1.02-1.62c-.484-.768-1.48-1.038-2.28-.608l-1.244.524c-.111.056-.257.051-.423-.064a7.492 7.492 0 00-.986-.57c-.182-.088-.277-.228-.297-.348l-.178-1.072c-.151-.904-.933-1.567-1.85-1.567h-2.044zM12 15a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="font-serif leading-none mt-1">
                      <span className="text-[#e60067] font-bold text-lg sm:text-xl lg:text-[22px]">
                        {t('eFirPage.howToRegister.titlePink', { defaultValue: 'How to Register' })}
                      </span>{' '}
                      <span className="text-[#102849] font-bold text-lg sm:text-xl lg:text-[22px]">
                        {t('eFirPage.howToRegister.titleNavy', { defaultValue: 'E-FIR' })}
                      </span>
                    </h2>
                    <p className="mt-1.5 text-slate-600 text-[11.5px] sm:text-xs leading-relaxed">
                      {t('eFirPage.howToRegister.desc', {
                        defaultValue: 'Follow these simple steps on the official UP Police e-FIR portal.',
                      })}
                    </p>
                  </div>
                </div>

                {/* 4 Steps Row with Connecting Arrows */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-center gap-2.5 sm:gap-2 mt-3.5">
                  {/* Step 1 */}
                  <div className="bg-white rounded-2xl py-3.5 px-3 border border-pink-200 shadow-sm hover:shadow-xl hover:border-[#e60067]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-between min-h-[142px] relative group cursor-default">
                    <div className="absolute top-2.5 left-2.5 w-5 h-5 rounded-full bg-[#e60067] text-white font-bold text-[10px] flex items-center justify-center shadow-xs">
                      {t('eFirPage.howToRegister.steps.step1.num', { defaultValue: '01' })}
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#fdebf3] border border-pink-200/60 shadow-xs flex items-center justify-center mb-1 text-[#e60067] group-hover:scale-110 transition-transform duration-300 shrink-0">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-[#102849] text-xs leading-tight mb-1 group-hover:text-[#e60067] transition-colors duration-200">
                        {t('eFirPage.howToRegister.steps.step1.title', { defaultValue: 'Visit Official Portal' })}
                      </h3>
                      <p className="text-slate-500 text-[10px] leading-snug">
                        {t('eFirPage.howToRegister.steps.step1.desc', { defaultValue: 'Click on the UP Police e-FIR portal link.' })}
                      </p>
                    </div>
                  </div>

                  {/* Arrow 1 */}
                  <span className="hidden lg:block text-[#e60067] font-bold text-base px-0.5 select-none shrink-0">
                    →
                  </span>

                  {/* Step 2 */}
                  <div className="bg-white rounded-2xl py-3.5 px-3 border border-pink-200 shadow-sm hover:shadow-xl hover:border-[#e60067]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-between min-h-[142px] relative group cursor-default">
                    <div className="absolute top-2.5 left-2.5 w-5 h-5 rounded-full bg-[#e60067] text-white font-bold text-[10px] flex items-center justify-center shadow-xs">
                      {t('eFirPage.howToRegister.steps.step2.num', { defaultValue: '02' })}
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#fdebf3] border border-pink-200/60 shadow-xs flex items-center justify-center mb-1 text-[#e60067] group-hover:scale-110 transition-transform duration-300 shrink-0">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <rect x="5" y="2" width="14" height="20" rx="3" fill="#e60067" />
                        <line x1="8" y1="7" x2="16" y2="7" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                        <line x1="8" y1="11" x2="16" y2="11" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                        <line x1="8" y1="15" x2="13" y2="15" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-[#102849] text-xs leading-tight mb-1 group-hover:text-[#e60067] transition-colors duration-200">
                        {t('eFirPage.howToRegister.steps.step2.title', { defaultValue: 'Fill Complaint Details' })}
                      </h3>
                      <p className="text-slate-500 text-[10px] leading-snug">
                        {t('eFirPage.howToRegister.steps.step2.desc', { defaultValue: 'Provide the required information about the incident.' })}
                      </p>
                    </div>
                  </div>

                  {/* Arrow 2 */}
                  <span className="hidden lg:block text-[#e60067] font-bold text-base px-0.5 select-none shrink-0">
                    →
                  </span>

                  {/* Step 3 */}
                  <div className="bg-white rounded-2xl py-3.5 px-3 border border-pink-200 shadow-sm hover:shadow-xl hover:border-[#e60067]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-between min-h-[142px] relative group cursor-default">
                    <div className="absolute top-2.5 left-2.5 w-5 h-5 rounded-full bg-[#e60067] text-white font-bold text-[10px] flex items-center justify-center shadow-xs">
                      {t('eFirPage.howToRegister.steps.step3.num', { defaultValue: '03' })}
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#fdebf3] border border-pink-200/60 shadow-xs flex items-center justify-center mb-1 text-[#e60067] group-hover:scale-110 transition-transform duration-300 shrink-0">
                      <svg className="w-5.5 h-5.5 text-[#e60067]" viewBox="0 0 24 24" fill="#e60067">
                        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-[#102849] text-xs leading-tight mb-1 group-hover:text-[#e60067] transition-colors duration-200">
                        {t('eFirPage.howToRegister.steps.step3.title', { defaultValue: 'Upload Documents' })}
                      </h3>
                      <p className="text-slate-500 text-[10px] leading-snug">
                        {t('eFirPage.howToRegister.steps.step3.desc', { defaultValue: 'Attach relevant documents or photos if required.' })}
                      </p>
                    </div>
                  </div>

                  {/* Arrow 3 */}
                  <span className="hidden lg:block text-[#e60067] font-bold text-base px-0.5 select-none shrink-0">
                    →
                  </span>

                  {/* Step 4 */}
                  <div className="bg-white rounded-2xl py-3.5 px-3 border border-pink-200 shadow-sm hover:shadow-xl hover:border-[#e60067]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-between min-h-[142px] relative group cursor-default">
                    <div className="absolute top-2.5 left-2.5 w-5 h-5 rounded-full bg-[#e60067] text-white font-bold text-[10px] flex items-center justify-center shadow-xs">
                      {t('eFirPage.howToRegister.steps.step4.num', { defaultValue: '04' })}
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#fdebf3] border border-pink-200/60 shadow-xs flex items-center justify-center mb-1 group-hover:scale-110 transition-transform duration-300 shrink-0">
                      <div className="w-6 h-6 rounded-full bg-[#e60067] flex items-center justify-center text-white shadow-xs">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-[#102849] text-xs leading-tight mb-1 group-hover:text-[#e60067] transition-colors duration-200">
                        {t('eFirPage.howToRegister.steps.step4.title', { defaultValue: 'Submit & Note Reference' })}
                      </h3>
                      <p className="text-slate-500 text-[10px] leading-snug">
                        {t('eFirPage.howToRegister.steps.step4.desc', { defaultValue: 'Submit your complaint and note the reference number for future use.' })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Box: Important Points */}
            <div className="xl:col-span-4 rounded-3xl border border-pink-100 bg-gradient-to-r from-[#fff5f8] via-[#fff9fb] to-[#fff5f8] p-5 sm:p-6 lg:p-7 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-pink-500/10 relative overflow-hidden flex flex-col justify-between">
              <div>
                {/* Header */}
                <div className="flex items-start gap-3 sm:gap-3.5 mb-2.5 sm:mb-3">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#fdebf3] border border-pink-200/80 flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 hover:scale-105">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#e60067] flex items-center justify-center text-white font-serif font-bold text-xs sm:text-sm italic shadow-xs">
                      i
                    </div>
                  </div>
                  <div>
                    <h2 className="font-serif leading-none mt-1">
                      <span className="text-[#e60067] font-bold text-lg sm:text-xl lg:text-[22px]">
                        {t('eFirPage.importantPoints.titlePink', { defaultValue: 'Important' })}
                      </span>{' '}
                      <span className="text-[#102849] font-bold text-lg sm:text-xl lg:text-[22px]">
                        {t('eFirPage.importantPoints.titleNavy', { defaultValue: 'Points' })}
                      </span>
                    </h2>
                  </div>
                </div>

                {/* Bullet Points List */}
                <ul className="space-y-2 mt-3.5">
                  {(t('eFirPage.importantPoints.points', {
                    returnObjects: true,
                    defaultValue: [
                      'E-FIR facility is provided by Uttar Pradesh Police.',
                      'Pink Shakti does not register FIR directly.',
                      'Only certain types of complaints are eligible for e-FIR.',
                      'Provide correct and accurate information.',
                      'For urgent or serious matters, call 112 or visit nearest police station.',
                      'Keep your complaint reference number safe.',
                    ],
                  }) || []).map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 bg-white/70 hover:bg-white rounded-xl px-2.5 py-1.5 border border-pink-100/80 hover:border-pink-200 shadow-2xs transition-all duration-200 text-slate-700 text-[11px] sm:text-[11.5px] leading-tight">
                      <div className="w-4 h-4 rounded-full bg-[#e60067] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-2xs">
                        <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span className="flex-1">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom Phone Banner */}
      <PhoneBanner />
    </div>
  )
}

export default EFIR
