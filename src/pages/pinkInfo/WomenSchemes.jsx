import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowRight } from 'lucide-react'
import BannerSlider from '../../components/common/BannerSlider'
import govtSchemeBanner from '../../assets/women-schemes/govt_scheme.jpg'
import PhoneBanner from '../../components/common/PhoneBanner'
import { womenSchemesList, girlChildScholarshipsList } from '../../constants/womenSchemesData'

function WomenSchemes() {
  const { t } = useTranslation()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const schemes = womenSchemesList.filter((s) => s.id <= 10)
  const girlChildScholarships = girlChildScholarshipsList


  return (
    <div className="w-full bg-transparent flex flex-col justify-between min-h-screen">
      <BannerSlider
        images={[govtSchemeBanner]}
        autoPlay={false}
        height="h-[250px] sm:h-[320px] md:h-[420px] lg:h-[510px]"
      />
     


      <section className="bg-transparent px-3 sm:px-5 lg:px-7 py-7 sm:py-9 lg:py-12">
        <div className="mx-auto max-w-[1700px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-3 sm:gap-x-4 lg:gap-x-4.5 gap-y-7 sm:gap-y-9 lg:gap-y-10 items-stretch">
            {schemes.map((scheme, index) => (
              <div
                key={scheme.id}
                style={{ transitionDelay: `${index * 60}ms` }}
                className={`group flex flex-col justify-between rounded-2xl pb-2 border border-pink-100/90 bg-white shadow-[0_4px_20px_-4px_rgba(230,0,103,0.06)] hover:shadow-xl hover:border-[#e60067]/40 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden cursor-default ${isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-[0.98]'
                  }`}
              >
                <Link to={`/highlights/pink-info/women-schemes/${scheme.id}`} className="block relative w-full h-[120px] sm:h-[130px] lg:h-[138px] rounded-xl overflow-hidden mb-2.5 bg-pink-50/50 shadow-2xs">
                  <img
                    src={scheme.image}
                    alt={scheme.title}
                    className="h-full w-full object-fill transition-transform duration-500 ease-out group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </Link>

                <div className="flex flex-col justify-between flex-1 px-1.5">
                  <div>
                    <Link to={`/highlights/pink-info/women-schemes/${scheme.id}`}>
                      <h3 className="font-serif font-bold text-[13px] sm:text-[14px] text-[#102849] leading-snug mb-1.5 line-clamp-2 group-hover:text-[#e60067] transition-colors min-h-[38px]">
                        {t(`womenSchemesPage.items.${scheme.id}.title`, { defaultValue: scheme.title })}
                      </h3>
                    </Link>

                    {/* Show only 2 lines of content matching the bottom scholarship cards style */}
                    <p className="text-slate-600 text-[10px] sm:text-[11px] font-medium leading-snug mb-1.5 line-clamp-2">
                      {t(`womenSchemesPage.items.${scheme.id}.desc`, { defaultValue: scheme.desc })}
                    </p>

                    <Link
                      to={`/highlights/pink-info/women-schemes/${scheme.id}`}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-[#e60067] hover:text-[#c9005a] hover:underline mb-1 transition-colors group/km"
                    >
                      <span>{t('womenSchemesPage.knowMore', { defaultValue: 'Know More' })}</span>
                      <ArrowRight className="w-3 h-3 stroke-[2.5] transition-transform group-hover/km:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Girl Child Education & Scholarship Schemes (4 Horizontal Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-4.5 mt-8 sm:mt-10 lg:mt-12 items-stretch">
            {girlChildScholarships.map((card, index) => (
              <div
                key={card.id}
                style={{ transitionDelay: `${index * 80}ms` }}
                className={`group relative flex justify-between overflow-hidden rounded-2xl border border-pink-100/90 bg-gradient-to-r from-white via-[#fff7f9] to-[#fff0f5] p-2.5 sm:p-3 shadow-[0_4px_20px_-4px_rgba(230,0,103,0.06)] hover:shadow-xl hover:border-[#e60067]/40 hover:-translate-y-1 transition-all duration-300 min-h-[125px] sm:min-h-[135px] cursor-pointer ${isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-[0.98]'
                  }`}
              >
                {/* Content Column (Left Side) */}
                <div className="relative z-10 w-[60%] sm:w-[72%] flex flex-col justify-between h-full">
                  <div>
                    {/* Logo & Title in one row side-by-side */}
                    <Link
                      to={`/highlights/pink-info/women-schemes/${card.id}`}
                      className="flex items-center gap-1.5 sm:gap-2 mb-1.5"
                    >
                      <div className="h-9 w-9 sm:h-11 sm:w-11 shrink-0 flex items-center justify-center">
                        <img
                          src={card.logo}
                          alt="Logo"
                          className="max-h-full max-w-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <h4 className="font-serif font-bold text-[12px] sm:text-[12.5px] text-[#102849] group-hover:text-[#e60067] leading-tight transition-colors line-clamp-2">
                        {t(`womenSchemesPage.items.${card.id}.cardTitle`, {
                          defaultValue: t(`womenSchemesPage.items.${card.id}.title`, {
                            defaultValue: card.cardTitle || card.title
                          })
                        })}
                      </h4>
                    </Link>

                    {/* 2 Lines Scheme Description with exact provided content */}
                    <p className="text-slate-600 text-[10px] sm:text-[10.5px] font-medium leading-snug line-clamp-2">
                      {t(`womenSchemesPage.items.${card.id}.schemeText`, { defaultValue: card.schemeText })}
                    </p>

                    {/* Know More Link */}
                    <Link
                      to={`/highlights/pink-info/women-schemes/${card.id}`}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-[#e60067] hover:text-[#c9005a] hover:underline mt-2 transition-colors group/km"
                    >
                      <span>{t('womenSchemesPage.knowMore', { defaultValue: 'Know More' })}</span>
                      <ArrowRight className="w-3 h-3 stroke-[2.5] transition-transform group-hover/km:translate-x-0.5" />
                    </Link>
                  </div>
                </div>

                {/* Girl Student Photo (Right Side) */}
                <Link
                  to={`/highlights/pink-info/women-schemes/${card.id}`}
                  className="absolute right-0 bottom-0 top-0 w-[40%] sm:w-[36%] flex items-end justify-end z-[1] overflow-hidden"
                >
                  <img
                    src={card.girlImage}
                    alt={card.cardTitle || card.title}
                    className="h-full w-auto max-h-[135px] sm:max-h-[145px] object-contain object-bottom transition-transform duration-500 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                </Link>
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

export default WomenSchemes
