import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { BookOpen, Users, Gavel, Lightbulb } from 'lucide-react'
import bannerBg from '../../assets/banner/a8e0bc73-7c16-4d15-983e-008a0b69104b.png'
import eveTeasingPoster from '../../assets/pinkInfo/251ca6b7-f21a-4fc1-a6d0-e9dfd0e1364d.png'
import PhoneBanner from '../../components/common/PhoneBanner'

function BnsSection() {
  const { t } = useTranslation()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const constituentsBullets = [
    t('bnsSection79Page.cards.constituents.bullets.0', {
      defaultValue: 'Obscene words or gestures directed towards a woman.',
    }),
    t('bnsSection79Page.cards.constituents.bullets.1', {
      defaultValue: 'Unwanted physical contact.',
    }),
    t('bnsSection79Page.cards.constituents.bullets.2', {
      defaultValue: 'Any act intended to outrage the modesty of a woman.',
    }),
    t('bnsSection79Page.cards.constituents.bullets.3', {
      defaultValue:
        'Can be committed in public or private place, including online through messages, calls or social media.',
    }),
  ]

  const examplesBullets = [
    t('bnsSection79Page.cards.examples.bullets.0', {
      defaultValue: 'Passing obscene remarks.',
    }),
    t('bnsSection79Page.cards.examples.bullets.1', {
      defaultValue:
        'Eve teasing in public places like streets, markets, schools or colleges.',
    }),
    t('bnsSection79Page.cards.examples.bullets.2', {
      defaultValue: 'Unwanted touching or physical advances.',
    }),
    t('bnsSection79Page.cards.examples.bullets.3', {
      defaultValue: 'Sending inappropriate messages or images online.',
    }),
    t('bnsSection79Page.cards.examples.bullets.4', {
      defaultValue:
        'Any behaviour that humiliates or makes a woman feel unsafe.',
    }),
  ]

  return (
    <div className="w-full bg-transparent min-h-screen flex flex-col justify-between">
      {/* Top Banner Section */}
      <section className="relative isolate h-[200px] w-full overflow-hidden sm:h-[260px] md:h-[320px] lg:h-[350px]">
        {/* Background Image with slow zoom-out effect */}
        <img
          src={bannerBg}
          alt="BNS Section 79 - Pink Shakti"
           className={`absolute inset-0 -z-10 h-full w-full object-cover object-[70%_center] lg:object-fill transition-transform duration-[2000ms] ease-out ${isLoaded ? "scale-100" : "scale-110"
            }`}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/10 md:hidden z-0"></div>

        <div className="hero-content relative z-10 flex flex-col justify-center h-full px-[5%] sm:px-[8%] w-[95%] sm:w-[85%] md:w-[75%] lg:w-[65%] text-[#102849]">
          {/* Badge: • PINK INFO */}
          <div
            className={`transition-all duration-700 ease-out delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="mb-2 sm:mb-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-pink-100/90 px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#e60067] shadow-xs">
                <span className="text-sm leading-none">•</span>
                <span>{t('bnsSection79Page.badge', { defaultValue: 'PINK INFO' })}</span>
              </span>
            </div>
          </div>

          {/* Main Heading: BNS Section 79 (matches About banner font size) */}
          <h1
            className={`mt-1 sm:mt-1.5 font-serif text-[22px] sm:text-[28px] md:text-[34px] lg:text-[38px] font-bold leading-[1.15] sm:leading-[1.18] tracking-tight transition-all duration-700 ease-out delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="text-[#e60067]">
              {t('bnsSection79Page.titlePink', { defaultValue: 'BNS' })}
            </span>{' '}
            <span className="text-[#102849]">
              {t('bnsSection79Page.titleNavy', { defaultValue: 'Section 79' })}
            </span>
          </h1>

          {/* Subtitle: Outraging the Modesty of Women / Eve Teasing */}
          <h2
            className={`mt-1 sm:mt-1.5 font-serif font-bold text-[#102849] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-snug transition-all duration-700 ease-out delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {t('bnsSection79Page.subtitle', {
              defaultValue: 'Outraging the Modesty of Women / Eve Teasing',
            })}
          </h2>

          {/* Description */}
          <p
            className={`mt-1.5 sm:mt-2 max-w-[34rem] text-[12px] sm:text-[13px] lg:text-[14px] font-medium leading-snug sm:leading-relaxed text-slate-700 transition-all duration-700 ease-out delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {t('bnsSection79Page.desc', {
              defaultValue:
                'Know about the legal provisions, punishments and your rights to stay safe, aware and empowered.',
            })}
          </p>
        </div>
      </section>

      {/* Main Content Area: Left Poster + Right 4 Cards */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-9 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
          {/* Left Column: Poster Image Card (reduced height & width) */}
          <div className="lg:col-span-4 xl:col-span-4 flex justify-center lg:justify-start">
            <div className="w-full max-w-[340px] sm:max-w-[360px] bg-white rounded-2xl border border-pink-100/90 overflow-hidden shadow-sm sticky top-24">
              <img
                src={eveTeasingPoster}
                alt="Stop Eve Teasing - BNS Section 79"
                className="w-full h-auto max-h-[490px] sm:max-h-[520px] object-cover object-top rounded-2xl"
              />
            </div>
          </div>

          {/* Right Column: 4 Information Cards (Compact heights) */}
          <div className="lg:col-span-8 xl:col-span-8 flex flex-col gap-3 sm:gap-3.5">
            {/* Card 1: Explanation */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-pink-100/90 shadow-[0_2px_10px_-3px_rgba(230,0,103,0.05)] hover:shadow-[0_4px_16px_-3px_rgba(230,0,103,0.08)] transition-all duration-300 p-3 sm:p-3.5 flex items-start gap-3 sm:gap-3.5">
              <BookOpen className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-[#e60067] shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-serif font-bold text-[#e60067] text-[15px] sm:text-[16px] leading-tight mb-1">
                  {t('bnsSection79Page.cards.explanation.title', {
                    defaultValue: 'Explanation',
                  })}
                </h3>
                <p className="text-[#102849] text-xs sm:text-[12.5px] lg:text-[13px] font-medium leading-snug sm:leading-relaxed">
                  {t('bnsSection79Page.cards.explanation.desc', {
                    defaultValue:
                      'BNS Section 79 covers words, gestures or any act intended to outrage the modesty of a woman. This includes any behaviour that is indecent, obscene or unwelcome and makes a woman feel uncomfortable, humiliated or unsafe in a public or private place.',
                  })}
                </p>
              </div>
            </div>

            {/* Card 2: Main Constituents */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-pink-100/90 shadow-[0_2px_10px_-3px_rgba(230,0,103,0.05)] hover:shadow-[0_4px_16px_-3px_rgba(230,0,103,0.08)] transition-all duration-300 p-3 sm:p-3.5 flex items-start gap-3 sm:gap-3.5">
              <Users className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-[#e60067] shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-serif font-bold text-[#e60067] text-[15px] sm:text-[16px] leading-tight mb-1">
                  {t('bnsSection79Page.cards.constituents.title', {
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

            {/* Card 3: Punishment */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-pink-100/90 shadow-[0_2px_10px_-3px_rgba(230,0,103,0.05)] hover:shadow-[0_4px_16px_-3px_rgba(230,0,103,0.08)] transition-all duration-300 p-3 sm:p-3.5 flex items-start gap-3 sm:gap-3.5">
              <Gavel className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-[#e60067] shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-serif font-bold text-[#e60067] text-[15px] sm:text-[16px] leading-tight mb-1">
                  {t('bnsSection79Page.cards.punishment.title', {
                    defaultValue: 'Punishment',
                  })}
                </h3>
                <p className="text-[#102849] text-xs sm:text-[12.5px] lg:text-[13px] font-medium leading-snug sm:leading-relaxed">
                  Imprisonment for a term which may extend up to{' '}
                  <strong className="font-bold text-[#102849]">3 years</strong>{' '}
                  and/or fine as per law.
                </p>
                <p className="text-[#102849] text-xs sm:text-[12px] font-medium leading-snug sm:leading-relaxed mt-0.5">
                  {t('bnsSection79Page.cards.punishment.line2', {
                    defaultValue:
                      'Punishment may vary based on the circumstances of the case.',
                  })}
                </p>
              </div>
            </div>

            {/* Card 4: Examples of Such Offences */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-pink-100/90 shadow-[0_2px_10px_-3px_rgba(230,0,103,0.05)] hover:shadow-[0_4px_16px_-3px_rgba(230,0,103,0.08)] transition-all duration-300 p-3 sm:p-3.5 flex items-start gap-3 sm:gap-3.5">
              <Lightbulb className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-[#e60067] shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-serif font-bold text-[#e60067] text-[15px] sm:text-[16px] leading-tight mb-1">
                  {t('bnsSection79Page.cards.examples.title', {
                    defaultValue: 'Examples of Such Offences',
                  })}
                </h3>
                <ul className="space-y-0.5 sm:space-y-1">
                  {examplesBullets.map((item, idx) => (
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
      </main>

      {/* Bottom Phone Banner */}
      <div>
        <PhoneBanner />
      </div>
    </div>
  )
}

export default BnsSection
