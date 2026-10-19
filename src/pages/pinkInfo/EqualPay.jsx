import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { BookOpen, Users, Lightbulb } from 'lucide-react'
import bannerBg from '../../assets/home/Empowered Women in Pink Horizons (1).png'
import equalPayPoster from '../../assets/pinkInfo/56181046-8da5-41ed-ba2f-5e8e1703224c.png'
import PhoneBanner from '../../components/common/PhoneBanner'

function EqualPay() {
  const { t } = useTranslation()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const constituentsBullets = [
    t('equalPayPage.cards.constituents.bullets.0', {
      defaultValue: 'Equal pay for same work or work of similar nature.',
    }),
    t('equalPayPage.cards.constituents.bullets.1', {
      defaultValue: 'No discrimination in wages on the basis of gender.',
    }),
    t('equalPayPage.cards.constituents.bullets.2', {
      defaultValue: 'Equal opportunities for employment and promotion.',
    }),
    t('equalPayPage.cards.constituents.bullets.3', {
      defaultValue:
        'Women should be treated at par with men in all aspects of employment.',
    }),
  ]

  const whatYouCanDoBullets = [
    t('equalPayPage.cards.whatYouCanDo.bullets.0', {
      defaultValue: 'Be aware of your right to equal pay.',
    }),
    t('equalPayPage.cards.whatYouCanDo.bullets.1', {
      defaultValue: 'Speak up if you are paid less than a man for the same work.',
    }),
    t('equalPayPage.cards.whatYouCanDo.bullets.2', {
      defaultValue: 'Keep records of your work, salary and related documents.',
    }),
    t('equalPayPage.cards.whatYouCanDo.bullets.3', {
      defaultValue:
        'Report discrimination to the concerned authorities or labour department.',
    }),
    t('equalPayPage.cards.whatYouCanDo.bullets.4', {
      defaultValue: 'Seek legal help if necessary.',
    }),
  ]

  return (
    <div className="w-full bg-[#FFF9FA] min-h-screen flex flex-col justify-between">
      {/* Top Banner Section */}
      <section className="relative isolate overflow-hidden w-full h-[270px] sm:h-[320px] md:h-[350px] lg:h-[400px] flex items-center">
        {/* Background Image with slow zoom-out effect */}
        <img
          src={bannerBg}
          alt="Right to Equal Pay - Pink Shakti"
          className={`absolute inset-0 h-full w-full object-cover object-right lg:object-fill -z-10 transition-transform duration-[2000ms] ease-out ${
            isLoaded ? 'scale-100' : 'scale-110'
          }`}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/10 md:hidden z-0"></div>

        <div className="hero-content relative z-10 flex flex-col justify-center h-full px-[5%] sm:px-[8%] w-[95%] sm:w-[85%] md:w-[75%] lg:w-[65%] text-[#102849]">
          {/* Badge: WOMEN RIGHTS */}
          <div
            className={`transition-all duration-700 ease-out delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="mb-2 sm:mb-2.5">
              <span className="inline-flex items-center rounded-full bg-pink-100/90 px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#e60067] shadow-xs">
                {t('equalPayPage.badge', { defaultValue: 'WOMEN RIGHTS' })}
              </span>
            </div>
          </div>

          {/* Heading: Right to Equal Pay (Same size as BNS Section 79) */}
          <h1
            className={`mt-1 sm:mt-1.5 font-serif text-[22px] sm:text-[28px] md:text-[34px] lg:text-[38px] font-bold leading-[1.15] sm:leading-[1.18] tracking-tight transition-all duration-700 ease-out delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="text-[#e60067]">
              {t('equalPayPage.titlePink', { defaultValue: 'Right to' })}
            </span>{' '}
            <span className="text-[#102849]">
              {t('equalPayPage.titleNavy', { defaultValue: 'Equal Pay' })}
            </span>
          </h1>

          {/* Description */}
          <p
            className={`mt-1.5 sm:mt-2 max-w-[34rem] text-[12px] sm:text-[13px] lg:text-[14px] font-medium leading-snug sm:leading-relaxed text-[#102849] transition-all duration-700 ease-out delay-400 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {t('equalPayPage.desc', {
              defaultValue:
                'Women have the right to receive equal pay for equal work without discrimination.',
            })}
          </p>
        </div>
      </section>

      {/* Main Content Area: Left Poster + Right Cards (Exact layout from BnsSection.jsx) */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-9 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
          {/* Left Column: Poster Image Card (Exact sizing & sticky styling from BnsSection.jsx) */}
          <div className="lg:col-span-4 xl:col-span-4 flex justify-center lg:justify-start">
            <div className="w-full max-w-[340px] sm:max-w-[360px] bg-white rounded-2xl border border-pink-100/90 overflow-hidden shadow-sm sticky top-24">
              <img
                src={equalPayPoster}
                alt="Equal Pay For Equal Work - Pink Shakti"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Right Column: Information Cards (Exact compact heights & styling from BnsSection.jsx) */}
          <div className="lg:col-span-8 xl:col-span-8 flex flex-col gap-3 sm:gap-3.5">
            {/* Card 1: Explanation */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-pink-100/90 shadow-[0_2px_10px_-3px_rgba(230,0,103,0.05)] hover:shadow-[0_4px_16px_-3px_rgba(230,0,103,0.08)] transition-all duration-300 p-3 sm:p-3.5 flex items-start gap-3 sm:gap-3.5">
              <BookOpen className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-[#e60067] shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-serif font-bold text-[#e60067] text-[15px] sm:text-[16px] leading-tight mb-1">
                  {t('equalPayPage.cards.explanation.title', {
                    defaultValue: 'Explanation',
                  })}
                </h3>
                <p className="text-[#102849] text-xs sm:text-[12.5px] lg:text-[13px] font-medium leading-snug sm:leading-relaxed">
                  {t('equalPayPage.cards.explanation.desc', {
                    defaultValue:
                      'Every woman has the right to receive equal pay for equal work. This means that a woman cannot be paid less than a man for the same work or work of a similar nature. Discrimination in wages on the basis of gender is not allowed.',
                  })}
                </p>
              </div>
            </div>

            {/* Card 2: Main Constituents */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-pink-100/90 shadow-[0_2px_10px_-3px_rgba(230,0,103,0.05)] hover:shadow-[0_4px_16px_-3px_rgba(230,0,103,0.08)] transition-all duration-300 p-3 sm:p-3.5 flex items-start gap-3 sm:gap-3.5">
              <Users className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-[#e60067] shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-serif font-bold text-[#e60067] text-[15px] sm:text-[16px] leading-tight mb-1">
                  {t('equalPayPage.cards.constituents.title', {
                    defaultValue: 'Main Constituents',
                  })}
                </h3>
                <ul className="space-y-0.5 sm:space-y-1">
                  {constituentsBullets.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs sm:text-[12.5px] text-[#102849] font-medium leading-snug"
                    >
                      <span className="text-[#e60067] font-bold text-sm leading-none mt-0.5">
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 3: What You Can Do */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-pink-100/90 shadow-[0_2px_10px_-3px_rgba(230,0,103,0.05)] hover:shadow-[0_4px_16px_-3px_rgba(230,0,103,0.08)] transition-all duration-300 p-3 sm:p-3.5 flex items-start gap-3 sm:gap-3.5">
              <Lightbulb className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-[#e60067] shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-serif font-bold text-[#e60067] text-[15px] sm:text-[16px] leading-tight mb-1">
                  {t('equalPayPage.cards.whatYouCanDo.title', {
                    defaultValue: 'What You Can Do',
                  })}
                </h3>
                <ul className="space-y-0.5 sm:space-y-1">
                  {whatYouCanDoBullets.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs sm:text-[12.5px] text-[#102849] font-medium leading-snug"
                    >
                      <span className="text-[#e60067] font-bold text-sm leading-none mt-0.5">
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Important Note Banner */}
        <div className="mt-5 sm:mt-6 bg-[#FFF0F4] border border-[#FBCFE8]/90 rounded-2xl p-3 sm:p-3.5 flex items-start sm:items-center gap-3 shadow-xs">
          <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-full bg-[#e60067] flex items-center justify-center shrink-0 text-white font-bold text-xs mt-0.5 sm:mt-0 shadow-xs">
            i
          </div>
          <p className="text-[12px] sm:text-[12.5px] text-[#102849] leading-snug sm:leading-relaxed font-medium">
            <span className="font-bold text-[#e60067]">
              {t('equalPayPage.importantNoteTitle', {
                defaultValue: 'Important Note:',
              })}
            </span>{' '}
            {t('equalPayPage.importantNoteDesc', {
              defaultValue:
                'This information is for awareness only. Laws and provisions may change over time. For current and detailed legal advice, please consult a qualified lawyer or refer to official government sources.',
            })}
          </p>
        </div>
      </main>

      {/* Bottom Phone Banner */}
      <div>
        <PhoneBanner />
      </div>
    </div>
  )
}

export default EqualPay
