import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { BookOpen, Gavel, Shield } from 'lucide-react'
import bannerBg from '../../assets/pinkInfo/banner.png'
import PhoneBanner from '../../components/common/PhoneBanner'
import { womenLawsList } from '../../constants/womenLawsData'

// Helper to bold and darken the leading Section reference (e.g., Section 77)
const renderConcludingText = (text) => {
  if (!text) return null
  const match = text.match(/^(Section\s+[\w\(\)]+)\s*(.*)/s)
  if (match) {
    return (
      <p className="text-slate-700 text-xs sm:text-sm lg:text-[14px] leading-relaxed font-normal pt-1 whitespace-pre-line">
        <strong className="font-bold italic text-[#102849]">{match[1]}</strong>{' '}
        {match[2]}
      </p>
    )
  }
  return (
    <p className="text-slate-700 text-xs sm:text-sm lg:text-[14px] leading-relaxed font-normal pt-1 whitespace-pre-line">
      {text}
    </p>
  )
}

function WomenLaws() {
  const { t } = useTranslation()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-[#fffafa] flex flex-col justify-between">
      {/* Top Banner Section */}
      <section className="relative isolate h-[200px] w-full overflow-hidden sm:h-[260px] md:h-[320px] lg:h-[350px]">
        <img
          src={bannerBg}
          alt="Women Laws - Pink Shakti"
          className={`absolute inset-0 h-full w-full object-cover object-[60%_center] lg:object-fill -z-10 transition-transform duration-[2000ms] ease-out ${isLoaded ? 'scale-100' : 'scale-110'
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
                <span>{t('womenLawsPage.badge', { defaultValue: 'PINK INFO' })}</span>
              </span>
            </div>
          </div>

          <h1
            className={`mt-1 sm:mt-1.5 font-serif text-[22px] sm:text-[28px] md:text-[34px] lg:text-[38px] font-bold leading-[1.15] sm:leading-[1.18] tracking-tight transition-all duration-700 ease-out delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <span className="text-[#e60067]">
              {t('womenLawsPage.titlePink', { defaultValue: 'Women' })}
            </span>{' '}
            <span className="text-[#102849]">
              {t('womenLawsPage.titleNavy', { defaultValue: 'Laws' })}
            </span>
          </h1>

          <p
            className={`mt-1.5 sm:mt-2 max-w-[34rem] text-[12px] sm:text-[13px] lg:text-[14px] font-medium leading-snug sm:leading-relaxed text-slate-700 transition-all duration-700 ease-out delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            {t('womenLawsPage.desc', {
              defaultValue:
                'Understand the important legal provisions to protect women from violence, harassment, exploitation and discrimination.',
            })}
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-10 w-full flex-1">
        {/* Laws List - 2-Column Cards with Real Images and Exact User Content */}
        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          {womenLawsList.map((law, index) => (
            <div
              key={law.id}
              id={`law-${law.id}`}
              style={{ transitionDelay: `${index * 40}ms` }}
              className="bg-white rounded-3xl p-5 sm:p-7 lg:p-8 border border-pink-100/90 shadow-[0_4px_24px_-4px_rgba(230,0,103,0.06)] hover:shadow-[0_8px_30px_-4px_rgba(230,0,103,0.12)] transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[45%_minmax(0,1fr)] gap-6 lg:gap-8 xl:gap-10 items-start">
                {/* Left Column: Real Infographic Image (slightly wider, same height) */}
                <div className="flex items-start justify-center">
                  <div className="w-full max-w-[580px] rounded-2xl overflow-hidden border border-pink-100/80 shadow-xs bg-pink-50/30">
                    <img
                      src={law.image}
                      alt={law.title}
                      className="w-full h-auto sm:h-[360px] object-fill"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Right Column: Exact Heading & Full Content */}
                <div className="flex flex-col justify-start space-y-4">
                  {/* Law Title */}
                  <h2 className="font-serif text-xl sm:text-2xl lg:text-[25px] font-bold text-[#824497] leading-tight">
                    {law.title}
                  </h2>

                  {/* Explanation */}
                  <div>
                    <h3 className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#102849] mb-1.5 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#e60067]" />
                      <span>EXPLANATION:</span>
                    </h3>
                    <p className="text-slate-700 text-xs sm:text-sm lg:text-[14px] leading-relaxed font-normal whitespace-pre-line">
                      {law.explanation}
                    </p>
                  </div>

                  {/* Main Constituents */}
                  {law.mainConstituents && (
                    <div>
                      <h3 className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#102849] mb-1.5 flex items-center gap-1.5">
                        <Shield className="w-3.5 h-3.5 text-[#e60067]" />
                        <span>MAIN CONSTITUENTS:</span>
                      </h3>
                      <p className="text-slate-700 text-xs sm:text-sm lg:text-[14px] leading-relaxed font-normal whitespace-pre-line">
                        {law.mainConstituents}
                      </p>
                    </div>
                  )}

                  {/* Punishment */}
                  {law.punishment && (
                    <div>
                      <h3 className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#102849] mb-1.5 flex items-center gap-1.5">
                        <Gavel className="w-3.5 h-3.5 text-[#e60067]" />
                        <span>PUNISHMENT:</span>
                      </h3>
                      <p className="text-slate-700 text-xs sm:text-sm lg:text-[14px] leading-relaxed font-normal whitespace-pre-line">
                        {law.punishment}
                      </p>
                    </div>
                  )}

                  {/* Concluding Paragraph with Section bold/dark */}
                  {law.conclusion && renderConcludingText(law.conclusion)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Bottom Phone Banner */}
      <div className="mt-8">
        <PhoneBanner />
      </div>
    </div>
  )
}

export default WomenLaws
