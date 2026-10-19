import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { BookOpen, Users, Lightbulb } from 'lucide-react'
import bannerBg from '../../assets/home/Empowered Women in Pink Horizons (1).png'
import mentalHealthPoster from '../../assets/pinkInfo/70c7a5ab-6bb1-4cad-87fe-41fbefbe8d77.png'
import PhoneBanner from '../../components/common/PhoneBanner'

function MentalHealth() {
  const { t } = useTranslation()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const concernsList = [
    t('mentalHealthPage.cards.concerns.bullets.0', { defaultValue: 'Stress and anxiety' }),
    t('mentalHealthPage.cards.concerns.bullets.1', { defaultValue: 'Depression' }),
    t('mentalHealthPage.cards.concerns.bullets.2', { defaultValue: 'Mood swings' }),
    t('mentalHealthPage.cards.concerns.bullets.3', { defaultValue: 'Low self-esteem' }),
    t('mentalHealthPage.cards.concerns.bullets.4', { defaultValue: 'Relationship and family issues' }),
    t('mentalHealthPage.cards.concerns.bullets.5', { defaultValue: 'Work or study pressure' }),
    t('mentalHealthPage.cards.concerns.bullets.6', { defaultValue: 'Any other emotional distress' }),
  ]

  const tipsList = [
    t('mentalHealthPage.cards.tips.bullets.0', { defaultValue: 'Take time for yourself' }),
    t('mentalHealthPage.cards.tips.bullets.1', { defaultValue: 'Talk to someone you trust' }),
    t('mentalHealthPage.cards.tips.bullets.2', {
      defaultValue: 'Maintain a healthy routine (sleep, food and exercise)',
    }),
    t('mentalHealthPage.cards.tips.bullets.3', { defaultValue: 'Stay positive and practice gratitude' }),
    t('mentalHealthPage.cards.tips.bullets.4', { defaultValue: 'Seek professional help if needed' }),
  ]

  return (
    <div className="w-full bg-[#FFF9FA] min-h-screen flex flex-col justify-between">
      {/* Top Banner Section */}
      <section className="relative isolate overflow-hidden w-full h-[270px] sm:h-[320px] md:h-[350px] lg:h-[400px] flex items-center">
        {/* Background Image with slow zoom-out effect */}
        <img
          src={bannerBg}
          alt="Mental Health - Pink Shakti"
          className={`absolute inset-0 h-full w-full object-cover object-right lg:object-fill -z-10 transition-transform duration-[2000ms] ease-out ${
            isLoaded ? 'scale-100' : 'scale-110'
          }`}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/10 md:hidden z-0"></div>

        <div className="hero-content relative z-10 flex flex-col justify-center h-full px-[5%] sm:px-[8%] w-[95%] sm:w-[85%] md:w-[75%] lg:w-[65%] text-[#102849]">
          {/* Badge: PINK HEALTH */}
          <div
            className={`transition-all duration-700 ease-out delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="mb-2 sm:mb-2.5">
              <span className="inline-flex items-center rounded-full bg-pink-100/90 px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#e60067] shadow-xs">
                {t('mentalHealthPage.badge', { defaultValue: 'PINK HEALTH' })}
              </span>
            </div>
          </div>

          {/* Heading: Mental Health */}
          <h1
            className={`mt-1 sm:mt-1.5 font-serif text-[22px] sm:text-[28px] md:text-[34px] lg:text-[38px] font-bold leading-[1.15] sm:leading-[1.18] tracking-tight transition-all duration-700 ease-out delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="text-[#e60067]">
              {t('mentalHealthPage.titlePink', { defaultValue: 'Mental' })}
            </span>{' '}
            <span className="text-[#102849]">
              {t('mentalHealthPage.titleNavy', { defaultValue: 'Health' })}
            </span>
          </h1>

          {/* Subtitle / Description */}
          <p
            className={`mt-1.5 sm:mt-2 max-w-[34rem] text-[12px] sm:text-[13px] lg:text-[14px] font-medium leading-snug sm:leading-relaxed text-[#102849] transition-all duration-700 ease-out delay-400 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {t('mentalHealthPage.desc', {
              defaultValue:
                'A healthy mind leads to a healthier, happier and stronger you.',
            })}
          </p>
        </div>
      </section>

      {/* Main Content Area: Poster + 3 Cards + Important Note */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7 items-start">
          {/* Left Column: Poster Image Card */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-start">
            <div className="w-full max-w-[420px] bg-white rounded-2xl border border-pink-100/90 overflow-hidden shadow-sm flex flex-col sticky top-24">
              <img
                src={mentalHealthPoster}
                alt="Mental Health Matters - Pink Shakti"
                className="w-full h-auto object-cover"
              />
              <div className="bg-[#e60067] text-white py-3 sm:py-3.5 px-3 text-center shadow-inner">
                <h4 className="font-bold text-xs sm:text-[13.5px] tracking-wider uppercase">
                  {t('mentalHealthPage.poster.title', {
                    defaultValue: 'MENTAL HEALTH MATTERS',
                  })}
                </h4>
                <p className="text-[10.5px] sm:text-[11.5px] text-pink-100 font-medium tracking-wide mt-0.5">
                  {t('mentalHealthPage.poster.subtitle', {
                    defaultValue: 'Take Care • Stay Positive • Be Strong',
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Information Cards */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col gap-4 sm:gap-4.5">
            {/* Card 1: What is Mental Health? */}
            <div className="bg-white rounded-2xl border border-pink-100/90 shadow-[0_2px_12px_-3px_rgba(230,0,103,0.06)] hover:shadow-[0_4px_16px_-3px_rgba(230,0,103,0.1)] transition-all duration-300 p-4 sm:p-5 flex items-start gap-3.5 sm:gap-4">
              <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-[#e60067] shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-serif font-bold text-[#e60067] text-[17px] sm:text-[18.5px] leading-tight mb-2">
                  {t('mentalHealthPage.cards.whatIs.title', {
                    defaultValue: 'What is Mental Health?',
                  })}
                </h3>
                <p className="text-[#102849] text-xs sm:text-[13.5px] font-medium leading-relaxed">
                  {t('mentalHealthPage.cards.whatIs.desc', {
                    defaultValue:
                      'Mental health refers to our emotional, psychological and social well-being. It affects how we think, feel, act and handle stress. Good mental health helps you lead a happier, healthier and more productive life.',
                  })}
                </p>
              </div>
            </div>

            {/* Card 2: Common Mental Health Concerns */}
            <div className="bg-white rounded-2xl border border-pink-100/90 shadow-[0_2px_12px_-3px_rgba(230,0,103,0.06)] hover:shadow-[0_4px_16px_-3px_rgba(230,0,103,0.1)] transition-all duration-300 p-4 sm:p-5 flex items-start gap-3.5 sm:gap-4">
              <Users className="w-6 h-6 sm:w-7 sm:h-7 text-[#e60067] shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-serif font-bold text-[#e60067] text-[17px] sm:text-[18.5px] leading-tight mb-2">
                  {t('mentalHealthPage.cards.concerns.title', {
                    defaultValue: 'Common Mental Health Concerns',
                  })}
                </h3>
                <ul className="space-y-1 sm:space-y-1.5">
                  {concernsList.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs sm:text-[13.5px] text-[#102849] font-medium leading-snug"
                    >
                      <span className="text-[#e60067] font-bold text-sm leading-none mt-1">
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 3: Tips for Better Mental Health */}
            <div className="bg-white rounded-2xl border border-pink-100/90 shadow-[0_2px_12px_-3px_rgba(230,0,103,0.06)] hover:shadow-[0_4px_16px_-3px_rgba(230,0,103,0.1)] transition-all duration-300 p-4 sm:p-5 flex items-start gap-3.5 sm:gap-4">
              <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7 text-[#e60067] shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-serif font-bold text-[#e60067] text-[17px] sm:text-[18.5px] leading-tight mb-2">
                  {t('mentalHealthPage.cards.tips.title', {
                    defaultValue: 'Tips for Better Mental Health',
                  })}
                </h3>
                <ul className="space-y-1 sm:space-y-1.5">
                  {tipsList.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs sm:text-[13.5px] text-[#102849] font-medium leading-snug"
                    >
                      <span className="text-[#e60067] font-bold text-sm leading-none mt-1">
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

        {/* Bottom Important Note Banner */}
        <div className="mt-6 sm:mt-8 bg-pink-50/70 border border-pink-200/80 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 px-4 sm:px-5 flex items-center gap-3 shadow-2xs">
          <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-full bg-[#e60067] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs">
            i
          </div>
          <p className="text-xs sm:text-[13px] text-[#102849] leading-relaxed">
            <strong className="text-[#e60067] font-bold mr-1.5">
              {t('mentalHealthPage.note.label', {
                defaultValue: 'Important Note:',
              })}
            </strong>
            {t('mentalHealthPage.note.text', {
              defaultValue:
                'This information is for awareness only. If you are experiencing severe or persistent mental health concerns, please consult a qualified mental health professional.',
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

export default MentalHealth
