import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  PhoneCall,
  MapPin,
  Users,
  Headphones,
  Info,
  ArrowRight,
  Settings,
  ShieldAlert,
  ShieldCheck,
  Eye,
  Lightbulb,
  Car,
} from 'lucide-react'
import PageBanner from '../../components/common/PageBanner'
import PhoneBanner from '../../components/common/PhoneBanner'

function WomenSafety() {
  const { t } = useTranslation()

  const safetyTips = [
    {
      id: 'tip1',
      icon: MapPin,
      title: t('womenSafety.safetyTipsBanner.tips.tip1.title', { defaultValue: 'Be Aware' }),
      desc: t('womenSafety.safetyTipsBanner.tips.tip1.desc', { defaultValue: 'of Surroundings' }),
    },
    {
      id: 'tip2',
      icon: PhoneCall,
      title: t('womenSafety.safetyTipsBanner.tips.tip2.title', { defaultValue: 'Keep Emergency' }),
      desc: t('womenSafety.safetyTipsBanner.tips.tip2.desc', { defaultValue: 'Numbers Handy' }),
    },
    {
      id: 'tip3',
      icon: Users,
      title: t('womenSafety.safetyTipsBanner.tips.tip3.title', { defaultValue: 'Share Your' }),
      desc: t('womenSafety.safetyTipsBanner.tips.tip3.desc', { defaultValue: 'Travel Details' }),
    },
    {
      id: 'tip4',
      icon: Car,
      title: t('womenSafety.safetyTipsBanner.tips.tip4.title', { defaultValue: 'Use Trusted' }),
      desc: t('womenSafety.safetyTipsBanner.tips.tip4.desc', { defaultValue: 'Transport Options' }),
    },
    {
      id: 'tip5',
      icon: PhoneCall,
      title: t('womenSafety.safetyTipsBanner.tips.tip5.title', { defaultValue: 'Avoid Isolated' }),
      desc: t('womenSafety.safetyTipsBanner.tips.tip5.desc', { defaultValue: 'Areas at Night' }),
    },
  ]

  const workSteps = [
    {
      id: 'step1',
      number: '01',
      icon: PhoneCall,
      title: t('womenSafety.howItWorks.steps.step1.title', { defaultValue: 'Tap on SOS' }),
      desc: t('womenSafety.howItWorks.steps.step1.desc', { defaultValue: 'Click on the emergency help button.' }),
    },
    {
      id: 'step2',
      number: '02',
      icon: MapPin,
      title: t('womenSafety.howItWorks.steps.step2.title', { defaultValue: 'Share Your Location' }),
      desc: t('womenSafety.howItWorks.steps.step2.desc', { defaultValue: 'Your live location will be shared instantly.' }),
    },
    {
      id: 'step3',
      number: '03',
      icon: Users,
      title: t('womenSafety.howItWorks.steps.step3.title', { defaultValue: 'Notify Trusted Contacts' }),
      desc: t('womenSafety.howItWorks.steps.step3.desc', { defaultValue: 'Your selected contacts will be alerted.' }),
    },
    {
      id: 'step4',
      number: '04',
      icon: Headphones,
      title: t('womenSafety.howItWorks.steps.step4.title', { defaultValue: 'Get Immediate Support' }),
      desc: t('womenSafety.howItWorks.steps.step4.desc', { defaultValue: 'You will be connected to ERSS (112) for help.' }),
    },
  ]

  const keyBenefits = [
    {
      id: 'b1',
      icon: ShieldCheck,
      title: t('womenSafety.keyBenefits.benefits.benefit1.title', { defaultValue: 'Faster Emergency Help' }),
      desc: t('womenSafety.keyBenefits.benefits.benefit1.desc', { defaultValue: 'Quick access to ERSS (112) during critical situations.' }),
    },
    {
      id: 'b2',
      icon: Users,
      title: t('womenSafety.keyBenefits.benefits.benefit2.title', { defaultValue: 'Greater Safety' }),
      desc: t('womenSafety.keyBenefits.benefits.benefit2.desc', { defaultValue: 'Friends and family stay informed in real time.' }),
    },
    {
      id: 'b3',
      icon: Eye,
      title: t('womenSafety.keyBenefits.benefits.benefit3.title', { defaultValue: 'Peace of Mind' }),
      desc: t('womenSafety.keyBenefits.benefits.benefit3.desc', { defaultValue: 'Feel safer wherever you go with trusted support.' }),
    },
    {
      id: 'b4',
      icon: Lightbulb,
      title: t('womenSafety.keyBenefits.benefits.benefit4.title', { defaultValue: 'More Awareness' }),
      desc: t('womenSafety.keyBenefits.benefits.benefit4.desc', { defaultValue: 'Access safety tips and important resources.' }),
    },
  ]

  const safetyFeatures = [
    {
      id: 'sos',
      icon: PhoneCall,
      title: t('womenSafety.erss.features.sos.title', { defaultValue: 'One Click SOS' }),
      desc: t('womenSafety.erss.features.sos.desc', {
        defaultValue: 'Get immediate support in emergency situations.',
      }),
    },
    {
      id: 'location',
      icon: MapPin,
      title: t('womenSafety.erss.features.location.title', { defaultValue: 'Share Live Location' }),
      desc: t('womenSafety.erss.features.location.desc', {
        defaultValue: 'Share your real-time location with trusted contacts.',
      }),
    },
    {
      id: 'contacts',
      icon: Users,
      title: t('womenSafety.erss.features.contacts.title', { defaultValue: 'Trusted Contacts' }),
      desc: t('womenSafety.erss.features.contacts.desc', {
        defaultValue: 'Add family or friends to keep them informed during an emergency.',
      }),
    },
    {
      id: 'connect',
      icon: Headphones,
      title: t('womenSafety.erss.features.connect.title', { defaultValue: 'Connect with ERSS' }),
      desc: t('womenSafety.erss.features.connect.desc', {
        defaultValue: 'Directly connect to UP Emergency Response Support System (112).',
      }),
    },
    {
      id: 'resources',
      icon: Info,
      title: t('womenSafety.erss.features.resources.title', { defaultValue: 'Safety Resources' }),
      desc: t('womenSafety.erss.features.resources.desc', {
        defaultValue: 'Access useful tips, guidelines and support information for women.',
      }),
    },
  ]

  return (
    <div className="w-full bg-transparent flex flex-col justify-between min-h-screen">
      {/* Top PageBanner */}
      <PageBanner
        alt="Women Safety - Pink Shakti"
        badge={
          <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[10px] sm:text-[11px]">
            <span className="text-[#e60067] text-sm leading-none">•</span>
            <span>{t('womenSafety.banner.badge', 'WOMEN SAFETY')}</span>
          </span>
        }
        title={
          <>
            <span className="text-[#e60067]">{t('womenSafety.banner.titlePink', 'Women')}</span>{' '}
            <span className="text-[#102849]">{t('womenSafety.banner.titleNavy', 'Safety')}</span>
          </>
        }
        description={t(
          'womenSafety.banner.desc',
          'Emergency support, safety tools and helpful resources for a safer, stronger and more empowered Uttar Pradesh.'
        )}
      />

      {/* Emergency Response Support System (ERSS) Main Section - 1600px Width & Home Page Styled Cards */}
      <section className="bg-transparent px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5">
        <div className="mx-auto max-w-[1600px]">
          <div className="rounded-3xl border border-pink-100 bg-gradient-to-r from-[#fff5f8] via-[#fff9fb] to-[#fff5f8] p-5 sm:p-6 lg:p-7 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-pink-500/10 relative overflow-hidden">
            <div className="flex flex-col xl:flex-row items-center xl:items-start justify-between gap-5 xl:gap-7 relative z-10">
              
              {/* Left Column: Shield Icon + Headings + Description + CTA Button */}
              <div className="w-full xl:w-[34%] flex items-start gap-3.5 sm:gap-4">
                {/* Shield Circular Badge */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#fdebf3] border border-pink-200/80 flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 hover:scale-105">
                  <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2L4 5.2V11.5C4 16.5 7.4 20.8 12 22C16.6 20.8 20 16.5 20 11.5V5.2L12 2Z"
                      fill="#e60067"
                    />
                    <path
                      d="M12 7.5V14.5M8.5 11H15.5"
                      stroke="white"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <h2 className="font-serif leading-tight">
                    <span className="block text-[20px] sm:text-[23px] lg:text-[25px] font-bold text-[#e60067]">
                      {t('womenSafety.erss.titlePink', { defaultValue: 'Emergency Response' })}
                    </span>
                    <span className="block text-[20px] sm:text-[23px] lg:text-[25px] font-bold text-[#102849] mt-0.5">
                      {t('womenSafety.erss.titleNavy', { defaultValue: 'Support System (ERSS)' })}
                    </span>
                  </h2>

                  <p className="mt-1.5 text-slate-600 text-xs sm:text-[12.5px] leading-relaxed">
                    {t('womenSafety.erss.desc', {
                      defaultValue:
                        'Pink Shakti provides quick access to emergency support for women. With one click, you can connect to the Emergency Response Support System (ERSS) and get help in critical situations.',
                    })}
                  </p>

                  <div className="mt-3">
                    <a
                      href="tel:112"
                      className="btn-pink active:scale-[0.98] font-bold text-xs sm:text-[12.5px] py-2 px-4.5 rounded-xl shadow-sm shadow-pink-500/20 inline-flex items-center gap-1.5 transition-all duration-200 group w-fit cursor-pointer"
                    >
                      <span>{t('womenSafety.erss.button', { defaultValue: 'Use Emergency Help' })}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: 5 Colored Feature Cards in a Row */}
              <div className="w-full xl:w-[66%] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 items-stretch">
                {safetyFeatures.map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.id}
                      className="bg-white rounded-2xl py-3.5 px-3 border border-pink-200 shadow-sm hover:shadow-xl hover:border-[#e60067]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-between group cursor-default"
                    >
                      {/* Icon Badge */}
                      <div className="w-12 h-12 rounded-full bg-[#fdebf3] border border-pink-200/60 shadow-xs flex items-center justify-center text-[#e60067] mb-2.5 transition-transform duration-300 group-hover:scale-110 shrink-0">
                        <Icon className="w-5.5 h-5.5 stroke-[2.3]" />
                      </div>

                      {/* Card Title */}
                      <h3 className="font-serif font-bold text-[#102849] text-xs sm:text-[13px] mb-0.5 group-hover:text-[#e60067] transition-colors duration-200">
                        {item.title}
                      </h3>

                      {/* Card Description */}
                      <p className="text-slate-600 text-[10px] sm:text-[10.5px] leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  )
                })}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* How It Works & Key Benefits Section */}
      <section className="bg-transparent px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5">
        <div className="mx-auto max-w-[1600px]">
          <div className="rounded-3xl border border-pink-100 bg-gradient-to-r from-[#fff5f8] via-[#fff9fb] to-[#fff5f8] p-5 sm:p-6 lg:p-7 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-pink-500/10 relative overflow-hidden">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 xl:gap-8 items-stretch">
              
              {/* Left Column: How It Works (7 cols) */}
              <div className="xl:col-span-7 flex flex-col justify-between">
                <div>
                  {/* Header */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#fdebf3] border border-pink-200/80 flex items-center justify-center shrink-0 text-[#e60067] shadow-sm transition-transform duration-300 hover:scale-105">
                      <Settings className="w-6 h-6 sm:w-6.5 sm:h-6.5" />
                    </div>
                    <div>
                      <h2 className="font-serif font-bold text-lg sm:text-xl lg:text-[22px] text-[#e60067] leading-tight">
                        {t('womenSafety.howItWorks.title', { defaultValue: 'How It Works' })}
                      </h2>
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-snug mt-0.5">
                        {t('womenSafety.howItWorks.subtitle', { defaultValue: 'Get help in emergency situations in just a few simple steps.' })}
                      </p>
                    </div>
                  </div>

                  {/* 4 Steps Row */}
                  <div className="mt-4 sm:mt-5 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3">
                    {workSteps.map((step, idx) => {
                      const StepIcon = step.icon
                      return (
                        <div
                          key={step.id}
                          className="relative bg-white rounded-2xl py-3.5 px-3 border border-pink-200 shadow-sm hover:shadow-xl hover:border-[#e60067]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-between min-h-[145px] group cursor-default"
                        >
                          {/* Step Badge */}
                          <span className="absolute top-2.5 left-2.5 w-5 h-5 rounded-full bg-[#e60067] text-white text-[10px] font-bold flex items-center justify-center shadow-xs">
                            {step.number}
                          </span>

                          {/* Icon */}
                          <div className="mt-1 w-10 h-10 rounded-full bg-[#fdebf3] border border-pink-200/60 shadow-xs flex items-center justify-center shrink-0 mb-1.5 text-[#e60067] group-hover:scale-110 transition-transform duration-300">
                            <StepIcon className="w-5 h-5 stroke-[2.2]" />
                          </div>

                          {/* Title & Desc */}
                          <div className="flex-1 flex flex-col justify-start">
                            <h3 className="font-serif font-bold text-[#102849] text-xs sm:text-[12.5px] leading-snug group-hover:text-[#e60067] transition-colors duration-200">
                              {step.title}
                            </h3>
                            <p className="text-slate-500 text-[10px] sm:text-[10.5px] leading-tight mt-1">
                              {step.desc}
                            </p>
                          </div>

                          {/* Arrow between steps (desktop only) */}
                          {idx < 3 && (
                            <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-[#e60067] font-bold text-xs pointer-events-none">
                              →
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Right Column: Key Benefits (5 cols) */}
              <div className="xl:col-span-5 flex flex-col justify-between">
                <div>
                  {/* Header */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#fdebf3] border border-pink-200/80 flex items-center justify-center shrink-0 text-[#e60067] shadow-sm transition-transform duration-300 hover:scale-105">
                      <ShieldAlert className="w-6 h-6 sm:w-6.5 sm:h-6.5" />
                    </div>
                    <div>
                      <h2 className="font-serif font-bold text-lg sm:text-xl lg:text-[22px] text-[#e60067] leading-tight">
                        {t('womenSafety.keyBenefits.title', { defaultValue: 'Key Benefits' })}
                      </h2>
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-snug mt-0.5">
                        {t('womenSafety.keyBenefits.subtitle', { defaultValue: 'Helping women feel safer, more confident and more supported.' })}
                      </p>
                    </div>
                  </div>

                  {/* 4 Benefits in 2x2 Grid */}
                  <div className="mt-4 sm:mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    {keyBenefits.map((b) => {
                      const BenefitIcon = b.icon
                      return (
                        <div
                          key={b.id}
                          className="bg-white rounded-2xl p-3 sm:p-3.5 border border-pink-200 shadow-sm hover:shadow-xl hover:border-[#e60067]/40 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 min-h-[76px] group cursor-default"
                        >
                          <div className="w-10 h-10 rounded-full bg-[#fdebf3] border border-pink-200/60 shadow-xs flex items-center justify-center shrink-0 text-[#e60067] group-hover:scale-110 transition-transform duration-300">
                            <BenefitIcon className="w-5 h-5 stroke-[2.2]" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-serif font-bold text-[#102849] text-xs sm:text-[12.5px] leading-snug group-hover:text-[#e60067] transition-colors duration-200">
                              {b.title}
                            </h3>
                            <p className="text-slate-500 text-[10px] sm:text-[10.5px] leading-tight mt-0.5">
                              {b.desc}
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Safety Tips for Women Strip / Section */}
      <section className="bg-transparent px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5">
        <div className="mx-auto max-w-[1600px]">
          <div className="rounded-3xl border border-pink-100 bg-gradient-to-r from-[#fff5f8] via-[#fff9fb] to-[#fff5f8] p-5 sm:p-6 lg:p-7 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-pink-500/10 flex flex-col xl:flex-row items-center justify-between gap-5 sm:gap-6 relative overflow-hidden">
            
            {/* Left Headline */}
            <div className="flex items-center gap-3 sm:gap-3.5 shrink-0 w-full xl:w-auto">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#fdebf3] border border-pink-200/80 flex items-center justify-center shrink-0 text-[#e60067] shadow-sm transition-transform duration-300 hover:scale-105">
                <Lightbulb className="w-6 h-6 sm:w-6.5 sm:h-6.5 stroke-[2.3]" />
              </div>
              <div className="min-w-0">
                <h3 className="font-serif leading-tight">
                  <span className="font-bold text-base sm:text-lg lg:text-[19px] text-[#e60067]">
                    {t('womenSafety.safetyTipsBanner.titlePink', { defaultValue: 'Safety Tips' })}
                  </span>{' '}
                  <span className="font-bold text-base sm:text-lg lg:text-[19px] text-[#102849]">
                    {t('womenSafety.safetyTipsBanner.titleNavy', { defaultValue: 'for Women' })}
                  </span>
                </h3>
                <p className="text-slate-500 text-xs sm:text-[12.5px] leading-tight mt-0.5">
                  {t('womenSafety.safetyTipsBanner.subtitle', { defaultValue: 'Simple tips to stay safer in daily life.' })}
                </p>
              </div>
            </div>

            {/* Middle: 5 Tip Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 flex-1 w-full xl:w-auto">
              {safetyTips.map((tip) => {
                const TipIcon = tip.icon
                return (
                  <div
                    key={tip.id}
                    className="bg-white rounded-2xl py-3 px-3.5 border border-pink-200 shadow-sm hover:shadow-xl hover:border-[#e60067]/40 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2.5 group cursor-default"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#fdebf3] border border-pink-200/60 shadow-xs flex items-center justify-center shrink-0 text-[#e60067] group-hover:scale-110 transition-transform duration-300">
                      <TipIcon className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[2.2]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="block font-serif font-bold text-[#102849] text-xs sm:text-[12.5px] leading-tight truncate group-hover:text-[#e60067] transition-colors duration-200">
                        {tip.title}
                      </span>
                      <span className="block text-slate-500 text-[10.5px] sm:text-[11px] leading-tight truncate mt-0.5">
                        {tip.desc}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Right: View All Tips Button */}
            <div className="shrink-0 w-full xl:w-auto flex justify-end">
              <a
                href="/highlights/emergency-helplines"
                className="btn-pink-outline w-full xl:w-auto justify-center font-bold text-xs sm:text-[13px] py-2.5 sm:py-3 px-5 rounded-xl transition-all duration-200 inline-flex items-center gap-2 shadow-sm hover:shadow-md active:scale-95 group cursor-pointer"
              >
                <span>{t('womenSafety.safetyTipsBanner.viewAll', { defaultValue: 'View All Tips' })}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom Phone Banner */}
      <PhoneBanner />
    </div>
  )
}

export default WomenSafety
