import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { BookOpen, Gavel, Shield } from 'lucide-react'
import BannerSlider from '../../components/common/BannerSlider'
import actBanner from '../../assets/women-laws/act.jpg'
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
      <BannerSlider
        images={[actBanner]}
        autoPlay={false}
       
      />

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
