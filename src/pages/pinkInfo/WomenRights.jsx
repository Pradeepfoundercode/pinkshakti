import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  Coins,
  Shield,
  Check,
  Home,
  Scale,
  ArrowRight,
} from 'lucide-react'
import bannerBg from '../../assets/pinkInfo/banner.png'
import PhoneBanner from '../../components/common/PhoneBanner'

// Card Images from assets/pinkInfo
import imgEqualPay from '../../assets/pinkInfo/a1905b4a-fdea-4eeb-bb1c-b080733e49cf.png'
import imgDignity from '../../assets/pinkInfo/138e27e5-bb26-4403-b680-8985a194eb0f.png'
import imgDomesticViolence from '../../assets/pinkInfo/3195080d-5ba9-43bf-bab0-c7fd302dda8e.png'
import imgLegalAid from '../../assets/pinkInfo/1f6b5164-31e1-417b-bff9-7da0664ea62e.png'

function WomenRights() {
  const { t } = useTranslation()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const rightsCards = [
    {
      id: 'equalPay',
      image: imgEqualPay,
      link: '/features/pink-info/women-rights/equal-pay',
      icon: <Coins className="w-8 h-8 text-[#e60067]" />,
      title: t('womenRightsPage.cards.equalPay.title', {
        defaultValue: 'Right to Equal Pay',
      }),
      desc: t('womenRightsPage.cards.equalPay.desc', {
        defaultValue: 'Women have the right to receive equal pay for equal work.',
      }),
    },
    {
      id: 'dignity',
      image: imgDignity,
      icon: (
        <div className="relative flex items-center justify-center">
          <Shield className="w-8 h-8 fill-[#e60067] text-[#e60067]" />
          <Check className="w-4 h-4 text-white absolute stroke-[3]" />
        </div>
      ),
      title: t('womenRightsPage.cards.dignity.title', {
        defaultValue: 'Right to Dignity and Decency',
      }),
      desc: t('womenRightsPage.cards.dignity.desc', {
        defaultValue: 'Every woman has the right to live with dignity and decency.',
      }),
    },
    {
      id: 'domesticViolence',
      image: imgDomesticViolence,
      icon: <Home className="w-8 h-8 fill-[#e60067] text-[#e60067]" />,
      title: t('womenRightsPage.cards.domesticViolence.title', {
        defaultValue: 'Right Against Domestic Violence',
      }),
      desc: t('womenRightsPage.cards.domesticViolence.desc', {
        defaultValue: 'Women have the right to live free from domestic violence.',
      }),
    },
    {
      id: 'legalAid',
      image: imgLegalAid,
      icon: <Scale className="w-8 h-8 text-[#e60067]" />,
      title: t('womenRightsPage.cards.legalAid.title', {
        defaultValue: 'Right to Free Legal Aid',
      }),
      desc: t('womenRightsPage.cards.legalAid.desc', {
        defaultValue: 'Women have the right to free legal aid and support.',
      }),
    },
  ]

  return (
    <div className="min-h-screen bg-[#FFF9FA]">
      {/* Top Banner Section */}
      <section className="relative isolate h-[200px] w-full overflow-hidden sm:h-[260px] md:h-[320px] lg:h-[350px]">
        <img
          src={bannerBg}
          alt="Women Rights - Pink Shakti"
          className={`absolute inset-0 h-full w-full object-cover object-[60%_center] lg:object-fill -z-10 transition-transform duration-[2000ms] ease-out ${
            isLoaded ? 'scale-100' : 'scale-110'
          }`}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/10 md:hidden z-0"></div>

        <div className="hero-content relative z-10 flex flex-col justify-center h-full px-[5%] sm:px-[8%] w-[95%] sm:w-[85%] md:w-[70%] lg:w-[60%] text-[#102849]">
          {/* Badge */}
          <div
            className={`transition-all duration-700 ease-out delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="mb-1.5 sm:mb-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-pink-100/90 px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#e60067] shadow-xs">
                <span className="text-sm leading-none">•</span>
                <span>{t('womenRightsPage.badge', { defaultValue: 'PINK INFO' })}</span>
              </span>
            </div>
          </div>

          {/* Title */}
          <h1
            className={`mt-1 sm:mt-1.5 font-serif text-[22px] sm:text-[28px] md:text-[34px] lg:text-[38px] font-bold leading-[1.15] sm:leading-[1.18] tracking-tight transition-all duration-700 ease-out delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="text-[#e60067]">
              {t('womenRightsPage.titlePink', { defaultValue: 'Women' })}
            </span>{' '}
            <span className="text-[#102849]">
              {t('womenRightsPage.titleNavy', { defaultValue: 'Rights' })}
            </span>
          </h1>

          {/* Tagline */}
          <h2
            className={`mt-1.5 sm:mt-2 text-sm sm:text-base md:text-[17px] font-bold font-serif text-[#102849] tracking-tight transition-all duration-700 ease-out delay-400 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {t('womenRightsPage.tagline', {
              defaultValue: 'Know your rights. Build confidence. Make informed choices.',
            })}
          </h2>

          {/* Description */}
          <p
            className={`mt-1 sm:mt-1.5 max-w-[34rem] sm:max-w-[36rem] text-[12px] sm:text-[13.5px] lg:text-[14.5px] font-medium leading-snug sm:leading-relaxed text-slate-700 transition-all duration-700 ease-out delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {t('womenRightsPage.desc', {
              defaultValue:
                'Learn about the rights available to women for a safer, fairer and more equal society.',
            })}
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Important Note Banner */}
        <div className="bg-[#FFF0F4] border border-[#FBCFE8]/90 rounded-2xl p-3.5 sm:p-4 mb-8 sm:mb-10 flex items-start sm:items-center gap-3 shadow-xs">
          <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-full bg-[#e60067] flex items-center justify-center shrink-0 text-white font-bold text-xs mt-0.5 sm:mt-0 shadow-xs">
            i
          </div>
          <p className="text-[12px] sm:text-[13px] text-slate-700 leading-relaxed">
            <span className="font-bold text-[#e60067]">
              {t('womenRightsPage.importantNoteTitle', { defaultValue: 'Important Note:' })}
            </span>{' '}
            {t('womenRightsPage.importantNoteDesc', {
              defaultValue:
                'This information is for awareness only. Laws and provisions may change over time. For current and detailed legal advice, please consult a qualified lawyer or refer to official government sources.',
            })}
          </p>
        </div>

        {/* 4 Rights Cards - 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {rightsCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl border border-pink-100/90 shadow-[0_2px_12px_-3px_rgba(230,0,103,0.06)] hover:shadow-[0_8px_24px_-4px_rgba(230,0,103,0.12)] transition-all duration-300 p-3 sm:p-4 flex flex-col sm:flex-row items-center sm:items-stretch gap-4 sm:gap-5 group"
            >
              {/* Left Image */}
              <div className="w-full sm:w-[42%] lg:w-[40%] aspect-[1.28/1] sm:aspect-auto rounded-xl overflow-hidden bg-pink-50 relative shrink-0 shadow-inner">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Right Content: Logo on left, Heading + Text + Button in one column */}
              <div className="flex-1 flex items-start gap-3 sm:gap-3.5 py-1 sm:py-1.5 w-full h-full">
                {/* Logo on Left */}
                <div className="shrink-0 mt-0.5 sm:mt-1 flex items-center justify-center">
                  {card.icon}
                </div>

                {/* Single Column: Heading, Text, and Button */}
                <div className="flex-1 flex flex-col justify-between h-full items-start">
                  <div>
                    {/* Heading */}
                    <h3 className="font-serif font-bold text-[#e60067] text-[17px] sm:text-[19px] lg:text-[20px] leading-tight mb-2 sm:mb-2.5">
                      {card.title}
                    </h3>

                    {/* Text */}
                    <p className="text-slate-700 text-xs sm:text-[13px] lg:text-[13.5px] font-medium leading-relaxed mb-1.5 sm:mb-2">
                      {card.desc}
                    </p>

                    {/* Small pink text link "Read more" - Only on first card */}
                    {card.link && (
                      <div className="pt-0.5">
                        <Link
                          to={card.link}
                          className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-[#e60067] hover:text-[#c9005a] hover:underline transition-colors"
                        >
                          <span>
                            {t('womenRightsPage.readMore', { defaultValue: 'Read more' })}
                          </span>
                          <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Bottom Phone Banner */}
      <div className="mt-16 sm:mt-20">
        <PhoneBanner />
      </div>
    </div>
  )
}

export default WomenRights

