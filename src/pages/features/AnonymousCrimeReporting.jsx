import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Settings,
  Shield,
  MapPin,
  FileText,
  Camera,
  CheckCircle2,
  TrendingUp,
  AlertTriangle,
  Users,
  Heart,
} from 'lucide-react'
import bannerBg from '../../assets/banner/anonymousbanner.png'
import PhoneBanner from '../../components/common/PhoneBanner'

function AnonymousCrimeReporting() {
  const { t } = useTranslation()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const featureCards = [
    {
      id: 'map',
      title: t('anonymousCrime.features.map.title', { defaultValue: 'Map Based Reporting' }),
      desc: t('anonymousCrime.features.map.desc', { defaultValue: 'Mark the exact location of the incident on map.' }),
      icon: (
        <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" fill="#e60067" />
          <circle cx="12" cy="9" r="3" fill="white" />
        </svg>
      ),
    },
    {
      id: 'photos',
      title: t('anonymousCrime.features.photos.title', { defaultValue: 'Add Photos' }),
      desc: t('anonymousCrime.features.photos.desc', { defaultValue: 'Upload images to provide more details.' }),
      icon: (
        <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#e60067" />
          <circle cx="8.5" cy="8.5" r="2" fill="white" />
          <path d="M21 16L16 11L7 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 17L12 15L9 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 'stayAnonymous',
      title: t('anonymousCrime.features.stayAnonymous.title', { defaultValue: 'Stay Anonymous' }),
      desc: t('anonymousCrime.features.stayAnonymous.desc', { defaultValue: 'Your identity remains private and confidential.' }),
      icon: (
        <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L4 5.5V11.5C4 16.5 7.4 21.2 12 22.5C16.6 21.2 20 16.5 20 11.5V5.5L12 2Z" fill="#e60067" />
          <path d="M12 6.5C10.6 7.8 9.5 9.5 9.5 12C9.5 14.2 10.5 16 12 17.5C13.5 16 14.5 14.2 14.5 12C14.5 9.5 13.4 7.8 12 6.5Z" fill="white" />
        </svg>
      ),
    },
    {
      id: 'communitySafety',
      title: t('anonymousCrime.features.communitySafety.title', { defaultValue: 'Community Safety' }),
      desc: t('anonymousCrime.features.communitySafety.desc', { defaultValue: 'Help make your city safer for all women.' }),
      icon: (
        <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5" viewBox="0 0 24 24" fill="none">
          <circle cx="6" cy="11" r="2.8" fill="#e60067" />
          <path d="M1.5 19.5C1.5 16.8 3.5 15 6 15C7.2 15 8.3 15.4 9.1 16.1C8.4 16.9 8 18 8 19.2V19.5H1.5Z" fill="#e60067" />
          <circle cx="18" cy="11" r="2.8" fill="#e60067" />
          <path d="M22.5 19.5C22.5 16.8 20.5 15 18 15C16.8 15 15.7 15.4 14.9 16.1C15.6 16.9 16 18 16 19.2V19.5H22.5Z" fill="#e60067" />
          <circle cx="12" cy="9" r="3.5" fill="#e60067" />
          <path d="M6.5 19.5C6.5 16.5 9 14.2 12 14.2C15 14.2 17.5 16.5 17.5 19.5H6.5Z" fill="#e60067" />
        </svg>
      ),
    },
    {
      id: 'efirInfo',
      title: t('anonymousCrime.features.efirInfo.title', { defaultValue: 'e-FIR Information' }),
      desc: t('anonymousCrime.features.efirInfo.desc', { defaultValue: 'Get information and redirection to e-FIR portal if needed.' }),
      icon: (
        <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5" viewBox="0 0 24 24" fill="none">
          <path d="M5 4C5 2.9 5.9 2 7 2H13.5L19 7.5V20C19 21.1 18.1 22 17 22H7C5.9 22 5 21.1 5 20V4Z" fill="#e60067" />
          <path d="M13.5 2V7.5H19" fill="#c40058" />
          <rect x="8" y="11" width="8" height="1.8" rx="0.9" fill="white" />
          <rect x="8" y="14.5" width="8" height="1.8" rx="0.9" fill="white" />
          <rect x="8" y="18" width="5" height="1.8" rx="0.9" fill="white" />
        </svg>
      ),
    },
  ]

  const workSteps = [
    {
      id: 'step1',
      number: '01',
      title: t('anonymousCrime.howItWorks.steps.step1.title', { defaultValue: 'Select Location' }),
      desc: t('anonymousCrime.howItWorks.steps.step1.desc', { defaultValue: 'Mark the incident location on map.' }),
      icon: <MapPin className="w-5 h-5 text-[#e60067]" />,
    },
    {
      id: 'step2',
      number: '02',
      title: t('anonymousCrime.howItWorks.steps.step2.title', { defaultValue: 'Add Details' }),
      desc: t('anonymousCrime.howItWorks.steps.step2.desc', { defaultValue: 'Describe the incident and any relevant information.' }),
      icon: <FileText className="w-5 h-5 text-[#e60067]" />,
    },
    {
      id: 'step3',
      number: '03',
      title: t('anonymousCrime.howItWorks.steps.step3.title', { defaultValue: 'Upload Photos' }),
      desc: t('anonymousCrime.howItWorks.steps.step3.desc', { defaultValue: 'Add images if available.' }),
      icon: <Camera className="w-5 h-5 text-[#e60067]" />,
    },
    {
      id: 'step4',
      number: '04',
      title: t('anonymousCrime.howItWorks.steps.step4.title', { defaultValue: 'Submit Anonymously' }),
      desc: t('anonymousCrime.howItWorks.steps.step4.desc', { defaultValue: 'Your report will be submitted securely without revealing your identity.' }),
      icon: <CheckCircle2 className="w-5 h-5 text-[#e60067]" />,
    },
  ]

  const keyBenefits = [
    {
      id: 'benefit1',
      title: t('anonymousCrime.keyBenefits.benefits.benefit1.title', { defaultValue: 'Helps Identify Unsafe Locations' }),
      desc: t('anonymousCrime.keyBenefits.benefits.benefit1.desc', { defaultValue: 'Supports data collection for safer communities.' }),
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      id: 'benefit2',
      title: t('anonymousCrime.keyBenefits.benefits.benefit2.title', { defaultValue: 'Raises Awareness' }),
      desc: t('anonymousCrime.keyBenefits.benefits.benefit2.desc', { defaultValue: 'Helps authorities and communities become more aware.' }),
      icon: <AlertTriangle className="w-5 h-5" />,
    },
    {
      id: 'benefit3',
      title: t('anonymousCrime.keyBenefits.benefits.benefit3.title', { defaultValue: 'Supports Action' }),
      desc: t('anonymousCrime.keyBenefits.benefits.benefit3.desc', { defaultValue: 'Contributes to safety measures and better planning.' }),
      icon: <Users className="w-5 h-5" />,
    },
    {
      id: 'benefit4',
      title: t('anonymousCrime.keyBenefits.benefits.benefit4.title', { defaultValue: 'Empowers Women' }),
      desc: t('anonymousCrime.keyBenefits.benefits.benefit4.desc', { defaultValue: 'Encourages more women to speak up and share information.' }),
      icon: <Heart className="w-5 h-5" />,
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      {/* Banner Section */}
      <section className="relative isolate h-[200px] w-full overflow-hidden sm:h-[260px] md:h-[320px] lg:h-[340px]">
        {/* Background Image with slow zoom-out effect */}
        <img
          src={bannerBg}
          alt="Anonymous Crime Reporting - Pink Shakti"
          className={`absolute inset-0 -z-10 h-full w-full object-cover object-[52%_center] lg:object-fill transition-transform duration-[2000ms] ease-out ${isLoaded ? "scale-100" : "scale-110"
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
            <span className="text-[#e60067]">{t("anonymousCrime.bannerTitlePink", { defaultValue: "Anonymous" })}</span>{' '}
            <span className="text-[#102849]">{t("anonymousCrime.bannerTitleNavy", { defaultValue: "Crime Reporting" })}</span>
          </h1>

          {/* Description - Exact PageBanner classes & animation */}
          <p
            className={`mt-1.5 sm:mt-2 max-w-[34rem] text-[12px] sm:text-[13px] lg:text-[14px] font-medium leading-snug sm:leading-relaxed text-slate-700 line-clamp-3 transition-all duration-700 ease-out delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {t("anonymousCrime.bannerDesc", {
              defaultValue:
                "Report incidents anonymously with map location and e-FIR information, Help create safer communities and support women by sharing details of unsafe locations, incidents and more.",
            })}
          </p>
        </div>
      </section>

      {/* Feature Overview Section */}
      <section className="px-4 py-6 sm:py-4.5 sm:px-6 lg:px-8 lg:py-8 max-w-[1600px] mx-auto w-full">
        <div className="rounded-2xl sm:rounded-3xl border border-pink-100/90 bg-[#fff5f8] p-3.5 sm:p-4.5 lg:p-5 shadow-xs">
          <div className="flex flex-col xl:flex-row items-center xl:items-stretch gap-4 sm:gap-5 xl:gap-6">
            
            {/* Left Block: Icon, Title, Description, CTA */}
            <div className="w-full xl:w-[32%] 2xl:w-[30%] flex items-start gap-3 sm:gap-3.5 shrink-0">
              {/* Anonymous Detective Avatar Badge */}
              <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-pink-100/90 border border-pink-200/80 flex items-center justify-center shrink-0 shadow-2xs">
                <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 48 48" fill="none">
                  {/* Hat Crown */}
                  <path d="M15 17C15 11 18 8 24 8C30 8 33 11 33 17H15Z" fill="#e60067" />
                  {/* Hat Ribbon */}
                  <path d="M14 17C14 16 18 15 24 15C30 15 34 16 34 17H14Z" fill="#c40058" />
                  {/* Hat Brim */}
                  <path d="M6 18.5C6 17 12 17 24 17C36 17 42 17 42 18.5C42 20 36 20.5 24 20.5C12 20.5 6 20 6 18.5Z" fill="#e60067" />
                  {/* Sunglasses */}
                  <path d="M14 24.5C14 22.8 15.2 22 17 22H21C22.2 22 23 22.8 23 24.2V25.5C23 27.5 21.5 29 19.5 29H17.5C15.5 29 14 27.5 14 25.5V24.5Z" fill="#e60067" />
                  <path d="M25 24.5C25 22.8 25.8 22 27 22H31C32.8 22 34 22.8 34 24.5V25.5C34 27.5 32.5 29 30.5 29H28.5C26.5 29 25 27.5 25 25.5V24.5Z" fill="#e60067" />
                  <rect x="22" y="23.5" width="4" height="2" rx="1" fill="#e60067" />
                  {/* Coat Collar & Shoulders */}
                  <path d="M9 39C9 33.5 13 30.5 17 30.5L24 34L31 30.5C35 30.5 39 33.5 39 39H9Z" fill="#e60067" />
                </svg>
              </div>

              {/* Text Info & CTA */}
              <div className="flex-1 min-w-0">
                <h2 className="font-serif font-bold text-base sm:text-lg lg:text-[19px] text-[#e60067] leading-tight">
                  {t("anonymousCrime.sectionTitle", { defaultValue: "Report Incidents Anonymously" })}
                </h2>
                <p className="mt-1 sm:mt-1.5 text-[11px] sm:text-xs text-slate-600 leading-snug">
                  {t("anonymousCrime.sectionDesc", {
                    defaultValue:
                      "Pink Shakti enables women to report unsafe locations, incidents and other concerns anonymously. You can share details with map location, upload photos and help create safer communities.",
                  })}
                </p>
              </div>
            </div>

            {/* Right Block: 5 Feature Cards */}
            <div className="w-full xl:w-[68%] 2xl:w-[70%] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-2.5">
              {featureCards.map((card) => (
                <div
                  key={card.id}
                  className="bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-3 border border-pink-100/80 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-center text-center justify-between min-h-[125px] sm:min-h-[135px]"
                >
                  {/* Icon Circle */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#ffe8f0] flex items-center justify-center shrink-0 mb-1.5 sm:mb-2">
                    {card.icon}
                  </div>

                  {/* Title & Desc */}
                  <div className="flex-1 flex flex-col justify-start">
                    <h3 className="text-[#102849] font-bold text-[11px] sm:text-xs leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-slate-500 text-[10px] sm:text-[10.5px] leading-tight mt-1">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* How It Works & Key Benefits Section (Middle phone mockup card removed as requested) */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8 max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          
          {/* Left Panel: How It Works (7 columns) */}
          <div className="lg:col-span-7 rounded-2xl sm:rounded-3xl border border-pink-100/90 bg-[#fff5f8] p-4 sm:p-5 lg:p-6 shadow-xs flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-pink-100/90 border border-pink-200/80 flex items-center justify-center shrink-0 text-[#e60067] shadow-2xs">
                  <Settings className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
                </div>
                <div>
                  <h2 className="font-serif font-bold text-lg sm:text-xl lg:text-[22px] text-[#e60067] leading-tight">
                    {t("anonymousCrime.howItWorks.title", { defaultValue: "How It Works" })}
                  </h2>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-snug mt-0.5">
                    {t("anonymousCrime.howItWorks.subtitle", { defaultValue: "Report an incident in just a few simple steps." })}
                  </p>
                </div>
              </div>

              {/* 4 Steps Grid */}
              <div className="mt-4 sm:mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3">
                {workSteps.map((step, idx) => (
                  <div
                    key={step.id}
                    className="relative bg-white rounded-xl sm:rounded-2xl p-3 sm:p-3.5 border border-pink-100/80 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-center text-center justify-between min-h-[140px] sm:min-h-[150px]"
                  >
                    {/* Step Badge */}
                    <span className="absolute top-2.5 left-2.5 w-5 h-5 rounded-full bg-[#e60067] text-white text-[10px] font-bold flex items-center justify-center shadow-xs">
                      {step.number}
                    </span>

                    {/* Icon */}
                    <div className="mt-1 w-10 h-10 rounded-full bg-[#ffe8f0] flex items-center justify-center shrink-0 mb-2">
                      {step.icon}
                    </div>

                    {/* Title & Desc */}
                    <div className="flex-1 flex flex-col justify-start">
                      <h3 className="text-[#102849] font-bold text-xs leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-slate-500 text-[10px] sm:text-[10.5px] leading-tight mt-1">
                        {step.desc}
                      </p>
                    </div>

                    {/* Arrow Indicator between cards (desktop only) */}
                    {idx < 3 && (
                      <div className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 text-[#e60067] font-bold text-xs pointer-events-none">
                        →
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel: Key Benefits (5 columns) */}
          <div className="lg:col-span-5 rounded-2xl sm:rounded-3xl border border-pink-100/90 bg-[#fff5f8] p-4 sm:p-5 lg:p-6 shadow-xs flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-pink-100/90 border border-pink-200/80 flex items-center justify-center shrink-0 text-[#e60067] shadow-2xs">
                  <Shield className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
                </div>
                <div>
                  <h2 className="font-serif font-bold text-lg sm:text-xl lg:text-[22px] text-[#e60067] leading-tight">
                    {t("anonymousCrime.keyBenefits.title", { defaultValue: "Key Benefits" })}
                  </h2>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-snug mt-0.5">
                    {t("anonymousCrime.keyBenefits.subtitle", { defaultValue: "Your report can help create a safer environment for women." })}
                  </p>
                </div>
              </div>

              {/* 4 Benefits in 2x2 grid */}
              <div className="mt-4 sm:mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {keyBenefits.map((b) => (
                  <div
                    key={b.id}
                    className="bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-3 border border-pink-100/80 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-2.5 sm:gap-3 min-h-[90px]"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#ffe8f0] flex items-center justify-center shrink-0 text-[#e60067]">
                      {b.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[#102849] font-bold text-xs leading-snug">
                        {b.title}
                      </h3>
                      <p className="text-slate-500 text-[10px] sm:text-[10.5px] leading-tight mt-0.5">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                ))}
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

export default AnonymousCrimeReporting
