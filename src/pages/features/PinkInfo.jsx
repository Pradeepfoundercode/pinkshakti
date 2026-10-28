import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Landmark, Gavel, ShieldCheck, Briefcase } from 'lucide-react'
import BannerSlider from '../../components/common/BannerSlider'
import govtSchemeBanner from '../../assets/women-schemes/govt_scheme.jpg'
import cardBgImage from "../../assets/pinkInfo/e726b4cb-7e86-4313-8089-c7a40539f54c.png"
import cardBgImage2 from "../../assets/pinkInfo/97994605-1eef-4eee-9ffe-ab5bb70bf8f5.png"
import cardBgImage3 from "../../assets/pinkInfo/1e1024c3-4848-4eec-8050-2ccb3630466a.png"
import cardBgImage4 from "../../assets/pinkInfo/ccbbf1cb-259c-4315-9350-54a8a73b61e5.png"
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
      title: t('pinkInfo.cards.schemes.title', { defaultValue: 'Women Schemes' }),
      description: t('pinkInfo.cards.schemes.desc', {
        defaultValue: "Discover schemes and programs that support women's education, health, financial independence, skill development, and overall empowerment.",
      }),
      bgImage: cardBgImage,
      link: '/highlights/pink-info/women-schemes',
    },
    {
      id: 'laws',
      icon: Gavel,
      title: t('pinkInfo.cards.laws.title', { defaultValue: 'Women Laws' }),
      description: t('pinkInfo.cards.laws.desc', {
        defaultValue: 'Learn about important laws and legal provisions that protect women from violence, harassment and discrimination.',
      }),
      bgImage: cardBgImage2,
      link: '/highlights/pink-info/women-laws',
    },
    {
      id: 'rights',
      icon: ShieldCheck,
      title: t('pinkInfo.cards.rights.title', { defaultValue: 'Women Rights' }),
      description: t('pinkInfo.cards.rights.desc', {
        defaultValue: 'Know your rights, including equality, dignity, safety, education, property rights and access to justice for a more equal and empowered society.',
      }),
      bgImage: cardBgImage3,
      link: '/highlights/pink-info/women-rights',
    },
    {
      id: 'posh',
      icon: Briefcase,
      title: t('pinkInfo.cards.posh.title', { defaultValue: 'PoSH Act 2013' }),
      description: t('pinkInfo.cards.posh.desc', {
        defaultValue: 'Get information about the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 and your rights at the workplace.',
      }),
      bgImage: cardBgImage4,
      link: '/highlights/pink-info/posh-act2013',
    },
  ]

  return (
    <div className="w-full bg-transparent">
      {/* Top Banner Section */}
      <BannerSlider
        images={[govtSchemeBanner]}
        autoPlay={false}
        height="h-[250px] sm:h-[320px] md:h-[420px] lg:h-[520px]"
      />

      {/* 4 Pink Info Cards Grid Section */}
      <section className="bg-transparent px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-2">
            {infoCards.map((item) => (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border border-pink-100/90 bg-[#fff5f8]/50 p-4 sm:p-5 lg:p-5.5 shadow-xs transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/10 min-h-[155px] sm:min-h-[170px]"
              >
                {/* Background Illustration on Right */}
                <div className="absolute right-0 top-0 bottom-0 w-[100%] sm:w-[100%] pointer-events-none flex items-center justify-end overflow-hidden">
                  <img
                    src={item.bgImage}
                    alt={item.title}
                    className="h-full w-full object-cover object-[80%_center] md:object-fill transition-transform duration-700 ease-out group-hover:scale-105"
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
                      <a href={item.link} className="hover:opacity-90">
                        <h3 className="font-serif text-base sm:text-lg lg:text-[19px] font-bold text-[#e60067] leading-tight">
                          {item.title}
                        </h3>
                      </a>
                    </div>

                    {/* Description */}
                    <p className="mt-2 text-xs sm:text-[12.5px] text-slate-700 leading-snug sm:leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>

                  {/* Know More Button */}
                  <div className="mt-3 sm:mt-3.5">
                    <a
                      href={item.link}
                      className="inline-flex items-center gap-1.5 sm:gap-2 rounded-xl btn-pink px-3.5 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-semibold shadow-sm shadow-pink-500/20 transition-all duration-300 hover:shadow-md hover:scale-[1.03] active:scale-95 cursor-pointer"
                    >
                      <span>{t("pinkInfo.cards.knowMore", { defaultValue: "Know More" })}</span>
                      <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
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
