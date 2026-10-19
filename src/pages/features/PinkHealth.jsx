import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowRight } from 'lucide-react'
import bannerBg from '../../assets/home/Empowered Women in Pink Horizons (1).png'
import mentalHealthImg from '../../assets/pinkhealths/Serene Pink Wellness Portrait Banner.png'
import menstrualHealthImg from '../../assets/pinkhealths/Menstrual Health in Bloom.png'
import cervicalCancerImg from '../../assets/pinkhealths/Pink Ribbon Awareness Portrait.png'
import PhoneBanner from '../../components/common/PhoneBanner'

function PinkHealth() {
  const { t } = useTranslation()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const healthCards = [
    {
      id: 'mentalHealth',
      image: mentalHealthImg,
      title: t('pinkHealthPage.cards.mentalHealth.title', { defaultValue: 'Mental Health' }),
      desc: t('pinkHealthPage.cards.mentalHealth.desc', {
        defaultValue:
          'Learn about mental health, common concerns, coping strategies and where to seek support for a healthier and happier you.',
      }),
      readMore: t('pinkHealthPage.cards.mentalHealth.readMore', { defaultValue: 'Read More' }),
      link: '/features/pink-health/mental-health',
    },
    {
      id: 'menstrualHealth',
      image: menstrualHealthImg,
      title: t('pinkHealthPage.cards.menstrualHealth.title', { defaultValue: 'Menstrual Health' }),
      desc: t('pinkHealthPage.cards.menstrualHealth.desc', {
        defaultValue:
          'Get information about menstrual health, hygiene, common issues and tips for a safe and healthy menstrual cycle.',
      }),
      readMore: t('pinkHealthPage.cards.menstrualHealth.readMore', { defaultValue: 'Read More' }),
    },
    {
      id: 'cervicalCancer',
      image: cervicalCancerImg,
      title: t('pinkHealthPage.cards.cervicalCancer.title', { defaultValue: 'Cervical Cancer' }),
      desc: t('pinkHealthPage.cards.cervicalCancer.desc', {
        defaultValue:
          'Learn about cervical cancer, its prevention, screening, vaccination and early detection for a healthier future.',
      }),
      readMore: t('pinkHealthPage.cards.cervicalCancer.readMore', { defaultValue: 'Read More' }),
    },
  ]

  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen">
      {/* Top Banner Section */}
      <section className="relative isolate overflow-hidden w-full h-[250px] sm:h-[310px] md:h-[340px] lg:h-[400px] flex items-center">
        {/* Background Image with slow zoom-out effect */}
        <img
          src={bannerBg}
          alt="Pink Health - Pink Shakti"
          className={`absolute inset-0 h-full w-full object-cover object-right lg:object-fill -z-10 transition-transform duration-[2000ms] ease-out ${
            isLoaded ? 'scale-100' : 'scale-110'
          }`}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/10 md:hidden z-0"></div>

        <div className="hero-content relative z-10 flex flex-col justify-center h-full px-[5%] sm:px-[8%] w-[95%] sm:w-[85%] md:w-[65%] lg:w-[55%] text-[#102849]">
          {/* Title - Exact PinkInfo classes & animation */}
          <h1
            className={`mt-1 sm:mt-1.5 font-serif text-[22px] sm:text-[28px] md:text-[34px] lg:text-[38px] font-bold leading-[1.15] sm:leading-[1.18] tracking-tight transition-all duration-700 ease-out delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="text-[#e60067]">
              {t('pinkHealthPage.titlePink', { defaultValue: 'Pink' })}
            </span>{' '}
            <span className="text-[#102849]">
              {t('pinkHealthPage.titleNavy', { defaultValue: 'Health' })}
            </span>
          </h1>

          {/* Subtitle */}
          <h2
            className={`mt-1.5 sm:mt-2 font-serif text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] font-bold text-[#102849] leading-snug transition-all duration-700 ease-out delay-400 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {t('pinkHealthPage.subtitle', {
              defaultValue: 'Healthy Women. Stronger Families. Brighter Future.',
            })}
          </h2>

          {/* Description - Exact PinkInfo classes & animation */}
          <p
            className={`mt-1.5 sm:mt-2 max-w-[34rem] text-[12px] sm:text-[13px] lg:text-[14px] font-medium leading-snug sm:leading-relaxed text-slate-700 transition-all duration-700 ease-out delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {t('pinkHealthPage.desc', {
              defaultValue:
                "Access reliable information and resources on women's health and well-being for a healthier and happier life.",
            })}
          </p>
        </div>
      </section>

      {/* 3 Health Pillars Cards Section */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-5 sm:py-7 lg:py-9">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 items-stretch">
            {healthCards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-2xl sm:rounded-3xl border border-pink-100/90 shadow-[0_4px_20px_-4px_rgba(230,0,103,0.06)] hover:shadow-xl hover:border-[#e60067]/40 hover:-translate-y-1.5 transition-all duration-300 p-3.5 sm:p-4.5 flex flex-col justify-between group overflow-hidden cursor-default"
              >
                {/* Top Banner Image with rounded corners */}
                <div className="w-full h-[135px] sm:h-[150px] md:h-[165px] lg:h-[170px] rounded-xl sm:rounded-2xl overflow-hidden mb-3.5 sm:mb-4 bg-pink-50 relative shadow-2xs">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Card Content */}
                <div className="flex-1 flex flex-col justify-between px-1">
                  <div>
                    {/* Hot Pink Title */}
                    <h3 className="font-serif font-bold text-lg sm:text-[20px] text-[#e60067] leading-tight mb-2 group-hover:text-[#c9005a] transition-colors">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed mb-4 line-clamp-3">
                      {card.desc}
                    </p>
                  </div>

                  {/* Read More Link */}
                  {card.link ? (
                    <Link
                      to={card.link}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#e60067] group-hover:text-[#c9005a] transition-colors mt-auto cursor-pointer"
                    >
                      <span>{card.readMore}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  ) : (
                    <div className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#e60067] group-hover:text-[#c9005a] transition-colors mt-auto cursor-pointer">
                      <span>{card.readMore}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  )}
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

export default PinkHealth
