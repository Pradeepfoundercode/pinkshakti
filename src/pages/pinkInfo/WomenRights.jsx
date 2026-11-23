import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowRight } from 'lucide-react'
import BannerSlider from '../../components/common/BannerSlider'
import womenRightsBanner from '../../assets/women-rights/women_rights.png'
import PhoneBanner from '../../components/common/PhoneBanner'
import { womenRightsList } from '../../constants/womenRightsData'

function WomenRights() {
  const { t, i18n } = useTranslation()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-transparent">
      <BannerSlider
        images={[womenRightsBanner]}
        autoPlay={false}
      />

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-3 sm:pb-4">
        {/* Section Heading */}
        <div className="mb-6 sm:mb-8">
          <h2 className="font-serif text-xl sm:text-2xl lg:text-[28px] font-bold text-[#e60067] tracking-wide uppercase">
            {t('womenRightsPage.heading', { defaultValue: 'WOMEN – SPECIFIC RIGHTS' })}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#e60067] to-[#824497] rounded-full mt-2 sm:mt-2.5"></div>
        </div>

        {/* 13 Rights Cards - 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {womenRightsList.map((card) => {
            const title = t(`womenRightsPage.items.${card.id}.title`, { defaultValue: card.title })
            const desc = t(`womenRightsPage.items.${card.id}.desc`, { defaultValue: card.desc })
            const isHi = i18n.language?.startsWith('hi')
            const cardImg = (isHi && card.imageHi) ? card.imageHi : card.image

            return (
              <div
                key={card.id}
                className="bg-white rounded-2xl shadow-[0_2px_12px_-3px_rgba(230,0,103,0.06)] hover:shadow-[0_8px_24px_-4px_rgba(230,0,103,0.12)] transition-all duration-300 p-3 sm:p-4 flex flex-col sm:flex-row items-center sm:items-stretch gap-4 sm:gap-5 group"
              >
                {/* Left Image (slightly wider, same height) */}
                <div className="w-full sm:w-[50%] lg:w-[48%] aspect-[1.38/1] sm:aspect-auto rounded-xl overflow-hidden bg-pink-50 relative shrink-0 shadow-inner">
                  <img
                    src={cardImg}
                    alt={title}
                    className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Right Content: Heading, Text snippet, and Know More button */}
                <div className="flex-1 flex flex-col justify-start items-start py-1 sm:py-1.5 w-full">
                  <div className="w-full">
                    {/* Heading */}
                    <h3 className="font-serif font-bold text-[#e60067] text-[15px] sm:text-[16px] lg:text-[17px] leading-snug mb-1.5 sm:mb-2 text-center">
                      {title}
                    </h3>

                    {/* 3-line description snippet */}
                    <p className="text-slate-700 text-xs sm:text-[13px] font-medium leading-relaxed mb-2.5 line-clamp-3">
                      {desc}
                    </p>
                  </div>

                  {/* Know More Button placed higher up */}
                  <div className="mt-0.5">
                    <Link
                      to={`/highlights/pink-info/women-rights/${card.slug || card.id}`}
                      className="inline-flex items-center gap-1.5 rounded-lg btn-pink py-1.5 px-3.5 text-xs font-semibold shadow-xs shadow-pink-500/20 active:scale-95 transition-all cursor-pointer"
                    >
                      <span>
                        {t('womenRightsPage.knowMore', { defaultValue: 'Know More' })}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </main>

      {/* Bottom Phone Banner */}
      <div className="mt-4 sm:mt-6">
        <PhoneBanner />
      </div>
    </div>
  )
}

export default WomenRights

