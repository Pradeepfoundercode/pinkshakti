import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ExternalLink, ArrowRight, Info } from 'lucide-react'
import bannerBg from '../../assets/banner/womenschemes.png'
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
    <div className="w-full bg-white flex flex-col justify-between min-h-screen">
      {/* Top Banner Section */}
      <section className="relative isolate overflow-hidden w-full h-[250px] sm:h-[270px] md:h-[290px] lg:h-[290px] flex items-center">

        <img
          src={bannerBg}
          alt="Women Schemes - Pink Shakti"
          className={`absolute inset-0 h-full w-full object-cover object-[85%_center] lg:object-fill -z-10 transition-transform duration-[2000ms] ease-out ${isLoaded ? 'scale-100' : 'scale-110'
            }`}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/10 md:hidden z-0"></div>

        <div className="hero-content relative z-10 flex flex-col justify-center h-full px-[5%] sm:px-[8%] w-[95%] sm:w-[85%] md:w-[70%] lg:w-[60%] text-[#102849]">

          <div
            className={`transition-all duration-700 ease-out delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <div className="mb-1.5 sm:mb-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-pink-100/90 px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#e60067] shadow-xs">
                <span className="text-sm leading-none">•</span>
                <span>{t('womenSchemesPage.badge', { defaultValue: 'PINK INFO' })}</span>
              </span>
            </div>
          </div>


          <h1
            className={`mt-1 sm:mt-1.5 font-serif text-[22px] sm:text-[28px] md:text-[34px] lg:text-[38px] font-bold leading-[1.15] sm:leading-[1.18] tracking-tight transition-all duration-700 ease-out delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <span className="text-[#102849]">
              {t('womenSchemesPage.titleNavy', { defaultValue: 'Women' })}
            </span>{' '}
            <span className="text-[#e60067]">
              {t('womenSchemesPage.titlePink', { defaultValue: 'Schemes' })}
            </span>
          </h1>


          <h2
            className={`mt-1 sm:mt-1.5 text-xs sm:text-sm md:text-[15px] font-extrabold uppercase tracking-wide text-[#102849] transition-all duration-700 ease-out delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            {t('womenSchemesPage.subtitle', {
              defaultValue: 'SCHEMES FOR WOMEN IN UTTAR PRADESH',
            })}
          </h2>


          <p
            className={`mt-2 sm:mt-2.5 max-w-[38rem] text-[12px] sm:text-[13.5px] lg:text-[14.5px] font-medium leading-snug sm:leading-relaxed text-slate-700 transition-all duration-700 ease-out delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            {t('womenSchemesPage.desc', {
              defaultValue:
                'Information about various schemes and initiatives by the Government of Uttar Pradesh for the safety, education, financial support and overall empowerment of women and girls.',
            })}
          </p>
        </div>
      </section>


      <section className="bg-[#fcfafb] px-3 sm:px-5 lg:px-7 py-7 sm:py-9 lg:py-12">
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
                        {scheme.title}
                      </h3>
                    </Link>

                    {/* Show only 2 lines of content matching the bottom scholarship cards style */}
                    <p className="text-slate-600 text-[10px] sm:text-[11px] font-medium leading-snug mb-1.5 line-clamp-2">
                      {scheme.desc}
                    </p>

                    <Link
                      to={`/highlights/pink-info/women-schemes/${scheme.id}`}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-[#e60067] hover:text-[#c9005a] hover:underline mb-2 transition-colors group/km"
                    >
                      <span>Know More</span>
                      <ArrowRight className="w-3 h-3 stroke-[2.5] transition-transform group-hover/km:translate-x-0.5" />
                    </Link>
                  </div>

                  {scheme.applyUrl ? (
                    <div className="mt-auto mx-1 pt-2 border-t border-pink-50 flex items-center justify-between gap-1.5 flex-wrap">
                      <a
                        href={scheme.applyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-md btn-pink active:scale-95 px-2 py-1 text-[9px] sm:text-[9.5px] font-bold shadow-xs shadow-pink-500/20 transition-all duration-200 cursor-pointer"
                      >
                        <span>APPLY ONLINE</span>
                        <ArrowRight className="w-2.5 h-2.5 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5" />
                      </a>

                      {scheme.portalUrl && (
                        <a
                          href={scheme.portalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[10px] sm:text-[10.5px] font-semibold text-[#e60067] hover:text-[#c9005a] hover:underline transition-colors"
                        >
                          <ExternalLink className="w-3 h-3 stroke-[2]" />
                          <span className="truncate max-w-[85px] sm:max-w-[95px]">{scheme.portalText}</span>
                        </a>
                      )}
                    </div>
                  ) : null}
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
                        {card.cardTitle || card.title}
                      </h4>
                    </Link>

                    {/* 2 Lines Scheme Description with exact provided content */}
                    <p className="text-slate-600 text-[10px] sm:text-[10.5px] font-medium leading-snug line-clamp-2">
                      {card.schemeText}
                    </p>

                    {/* Know More Link */}
                    <Link
                      to={`/highlights/pink-info/women-schemes/${card.id}`}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-[#e60067] hover:text-[#c9005a] hover:underline mt-2 transition-colors group/km"
                    >
                      <span>Know More</span>
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

          {/* Important Note Banner */}
          <div className="mt-6 sm:mt-8 rounded-xl sm:rounded-2xl bg-[#fff0f5]/85 border border-pink-200/70 px-4 py-2.5 sm:px-5 sm:py-3.5 flex items-center gap-3 shadow-xs">
            <div className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-[#e60067] text-white shadow-xs">
              <Info className="h-3 w-3 sm:h-3.5 sm:w-3.5 stroke-[2.5]" />
            </div>
            <p className="text-[11px] sm:text-xs text-slate-700 leading-snug sm:leading-relaxed">
              <span className="font-bold text-[#e60067]">Important Note: </span>
              {t('womenSchemesPage.importantNote', {
                defaultValue:
                  'The information provided here is for awareness and reference purposes only. Please check eligibility, detailed benefits and application process on the official government scheme portals.',
              })}
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Phone Banner */}
      <PhoneBanner />
    </div>
  )
}

export default WomenSchemes
