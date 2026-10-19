import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  FileText,
  Shield,
  Eye,
  BookOpen,
  Users,
  Gavel,
  ArrowRight,
} from 'lucide-react'
import bannerBg from '../../assets/home/Empowered Women in Pink Horizons (1).png'
import PhoneBanner from '../../components/common/PhoneBanner'

// Card Images from assets/pinkInfo
import imgEveTeasing from '../../assets/pinkInfo/268527dd-5df6-4f79-b1e0-8528bee5e60d.png'
import imgDisrobing from '../../assets/pinkInfo/3f461a65-452f-4e96-90a1-0df1178f29fe.png'
import imgStalking from '../../assets/pinkInfo/6dc84148-ee20-436a-b398-cf63a809ad15.png'
import imgRape from '../../assets/pinkInfo/81572656-d175-4cff-851e-b437c8e27d2a.png'

function WomenLaws() {
  const { t } = useTranslation()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const lawsData = [
    {
      id: 'eveTeasing',
      section: 'BNS Section 79',
      image: imgEveTeasing,
      link: '/features/pink-info/women-laws/bns-section79',
      icon: <FileText className="w-3.5 h-3.5" />,
      title: t('womenLawsPage.cards.eveTeasing.title', {
        defaultValue: 'Outraging the Modesty of Women / Eve Teasing',
      }),
      explanation: t('womenLawsPage.cards.eveTeasing.explanation', {
        defaultValue:
          'Covers words, gestures or acts intended to outrage the modesty of a woman.',
      }),
      constituents: [
        t('womenLawsPage.cards.eveTeasing.constituents.0', {
          defaultValue: 'Obscene words or gestures',
        }),
        t('womenLawsPage.cards.eveTeasing.constituents.1', {
          defaultValue: 'Unwanted physical contact',
        }),
        t('womenLawsPage.cards.eveTeasing.constituents.2', {
          defaultValue: 'Any act intended to outrage modesty',
        }),
      ],
      punishment: t('womenLawsPage.cards.eveTeasing.punishment', {
        defaultValue:
          'Imprisonment and/or fine as per law. Punishment may vary based on circumstances.',
      }),
    },
    {
      id: 'disrobing',
      section: 'BNS Section 76',
      image: imgDisrobing,
      icon: <Shield className="w-3.5 h-3.5" />,
      title: t('womenLawsPage.cards.disrobing.title', {
        defaultValue: 'Disrobing a Woman',
      }),
      explanation: t('womenLawsPage.cards.disrobing.explanation', {
        defaultValue:
          'Covers the act of disrobing a woman or compelling her to be nude.',
      }),
      constituents: [
        t('womenLawsPage.cards.disrobing.constituents.0', {
          defaultValue: 'Forcibly disrobing a woman',
        }),
        t('womenLawsPage.cards.disrobing.constituents.1', {
          defaultValue: 'Compelling a woman to be nude',
        }),
        t('womenLawsPage.cards.disrobing.constituents.2', {
          defaultValue: 'Intent to insult or outrage modesty',
        }),
      ],
      punishment: t('womenLawsPage.cards.disrobing.punishment', {
        defaultValue:
          'Imprisonment and/or fine as per law. Punishment may vary based on circumstances.',
      }),
    },
    {
      id: 'stalking',
      section: 'BNS Section 78',
      image: imgStalking,
      icon: <Eye className="w-3.5 h-3.5" />,
      title: t('womenLawsPage.cards.stalking.title', {
        defaultValue: 'Stalking',
      }),
      explanation: t('womenLawsPage.cards.stalking.explanation', {
        defaultValue:
          'Covers following, contacting or surveilling a woman repeatedly despite her disinterest.',
      }),
      constituents: [
        t('womenLawsPage.cards.stalking.constituents.0', {
          defaultValue: 'Repeatedly following',
        }),
        t('womenLawsPage.cards.stalking.constituents.1', {
          defaultValue: 'Contacting through any means',
        }),
        t('womenLawsPage.cards.stalking.constituents.2', {
          defaultValue: 'Monitoring online/offline activities',
        }),
      ],
      punishment: t('womenLawsPage.cards.stalking.punishment', {
        defaultValue:
          'Imprisonment and/or fine as per law. Punishment may vary based on circumstances.',
      }),
    },
    {
      id: 'rape',
      section: 'BNS Section 63',
      image: imgRape,
      icon: <BookOpen className="w-3.5 h-3.5" />,
      title: t('womenLawsPage.cards.rape.title', {
        defaultValue: 'Rape',
      }),
      explanation: t('womenLawsPage.cards.rape.explanation', {
        defaultValue:
          'Covers sexual intercourse with a woman against her will or without her consent.',
      }),
      constituents: [
        t('womenLawsPage.cards.rape.constituents.0', {
          defaultValue: 'Without consent',
        }),
        t('womenLawsPage.cards.rape.constituents.1', {
          defaultValue: 'Against her will',
        }),
        t('womenLawsPage.cards.rape.constituents.2', {
          defaultValue: 'Through force, threat or coercion',
        }),
      ],
      punishment: t('womenLawsPage.cards.rape.punishment', {
        defaultValue:
          'Imprisonment (rigorous) and fine as per law. Punishment may vary based on circumstances.',
      }),
    },
  ]

  return (
    <div className="min-h-screen bg-[#FFF9FA]">
      {/* Top Banner Section */}
      <section className="relative isolate overflow-hidden w-full h-[270px] sm:h-[320px] md:h-[350px] lg:h-[400px] flex items-center">
        <img
          src={bannerBg}
          alt="Women Laws - Pink Shakti"
          className={`absolute inset-0 h-full w-full object-cover object-right lg:object-fill -z-10 transition-transform duration-[2000ms] ease-out ${
            isLoaded ? 'scale-100' : 'scale-110'
          }`}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/10 md:hidden z-0"></div>

        <div className="hero-content relative z-10 flex flex-col justify-center h-full px-[5%] sm:px-[8%] w-[95%] sm:w-[85%] md:w-[70%] lg:w-[60%] text-[#102849]">
          {/* Badge */}
          <div
            className={`transition-all duration-700 ease-out delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="mb-1.5 sm:mb-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-pink-100/90 px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#e60067] shadow-xs">
                <span className="text-sm leading-none">•</span>
                <span>{t('womenLawsPage.badge', { defaultValue: 'PINK INFO' })}</span>
              </span>
            </div>
          </div>

          {/* Title */}
          <h1
            className={`mt-1 sm:mt-1.5 font-serif text-[22px] sm:text-[28px] md:text-[34px] lg:text-[38px] font-bold leading-[1.15] sm:leading-[1.18] tracking-tight transition-all duration-700 ease-out delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="text-[#e60067]">
              {t('womenLawsPage.titlePink', { defaultValue: 'Women' })}
            </span>{' '}
            <span className="text-[#102849]">
              {t('womenLawsPage.titleNavy', { defaultValue: 'Laws' })}
            </span>
          </h1>

          {/* Description */}
          <p
            className={`mt-1.5 sm:mt-2 max-w-[34rem] text-[12px] sm:text-[13px] lg:text-[14px] font-medium leading-snug sm:leading-relaxed text-slate-700 transition-all duration-700 ease-out delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Important Note Banner */}
        <div className="bg-[#FFF0F4] border border-[#FBCFE8]/90 rounded-2xl p-3.5 sm:p-4 mb-8 sm:mb-10 flex items-start sm:items-center gap-3 shadow-xs">
          <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-full bg-[#e60067] flex items-center justify-center shrink-0 text-white font-bold text-xs mt-0.5 sm:mt-0 shadow-xs">
            i
          </div>
          <p className="text-[12px] sm:text-[13px] text-slate-700 leading-relaxed">
            <span className="font-bold text-[#e60067]">
              {t('womenLawsPage.importantNoteTitle', { defaultValue: 'Important Note:' })}
            </span>{' '}
            {t('womenLawsPage.importantNoteDesc', {
              defaultValue:
                'This information is for legal awareness only. Laws and penalties may change over time. For current legal advice, please consult a qualified lawyer or refer to official government sources.',
            })}
          </p>
        </div>

        {/* 4 Law Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5 lg:gap-4">
          {lawsData.map((law) => (
            <div
              key={law.id}
              className="bg-white rounded-2xl border border-pink-100/90 shadow-[0_2px_10px_-3px_rgba(230,0,103,0.06)] hover:shadow-[0_8px_20px_-4px_rgba(230,0,103,0.12)] transition-all duration-300 p-2.5 sm:p-3 flex flex-col justify-between group"
            >
              <div>
                {/* Banner Image with BNS Badge already embedded in image */}
                <div className="w-full h-[130px] rounded-xl overflow-hidden bg-pink-50 relative shadow-inner">
                  <img
                    src={law.image}
                    alt={law.title}
                    className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Law Title */}
                <h3 className="font-serif font-bold text-[#102849] text-[15px] sm:text-[16px] leading-snug mt-2.5 mb-2.5 min-h-[40px] flex items-start">
                  {law.title}
                </h3>

                {/* 3 Detail Rows */}
                <div className="space-y-2.5 sm:space-y-3">
                  {/* Explanation */}
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-pink-50 flex items-center justify-center shrink-0 text-[#e60067] mt-0.5 shadow-2xs">
                      {law.icon}
                    </div>
                    <div>
                      <h4 className="text-[11px] sm:text-[11.5px] font-bold text-[#e60067] leading-tight">
                        {t('womenLawsPage.explanation', { defaultValue: 'Explanation' })}
                      </h4>
                      <p className="text-[10.5px] sm:text-[11px] text-slate-600 leading-snug mt-0.5">
                        {law.explanation}
                      </p>
                    </div>
                  </div>

                  {/* Main Constituents */}
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-pink-50 flex items-center justify-center shrink-0 text-[#e60067] mt-0.5 shadow-2xs">
                      <Users className="w-3 h-3" />
                    </div>
                    <div>
                      <h4 className="text-[11px] sm:text-[11.5px] font-bold text-[#e60067] leading-tight">
                        {t('womenLawsPage.mainConstituents', { defaultValue: 'Main Constituents' })}
                      </h4>
                      <ul className="text-[10.5px] sm:text-[11px] text-slate-600 leading-snug mt-0.5 space-y-0.5">
                        {law.constituents.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-1">
                            <span className="text-slate-400 font-bold leading-none mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Punishment */}
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-pink-50 flex items-center justify-center shrink-0 text-[#e60067] mt-0.5 shadow-2xs">
                      <Gavel className="w-3 h-3" />
                    </div>
                    <div>
                      <h4 className="text-[11px] sm:text-[11.5px] font-bold text-[#e60067] leading-tight">
                        {t('womenLawsPage.punishment', { defaultValue: 'Punishment' })}
                      </h4>
                      <p className="text-[10.5px] sm:text-[11px] text-slate-600 leading-snug mt-0.5">
                        {law.punishment}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Read Full Details Button */}
              <div className="mt-3.5 pt-2.5 border-t border-pink-50/80">
                {law.link ? (
                  <Link
                    to={law.link}
                    className="w-full bg-[#e60067] hover:bg-[#c80058] active:scale-[0.99] text-white font-medium text-[11.5px] sm:text-xs py-1.5 sm:py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-all duration-200 shadow-xs shadow-pink-200"
                  >
                    <span>
                      {t('womenLawsPage.readDetails', { defaultValue: 'Read Full Details' })}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <button
                    type="button"
                    className="w-full bg-[#e60067] hover:bg-[#c80058] active:scale-[0.99] text-white font-medium text-[11.5px] sm:text-xs py-1.5 sm:py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-all duration-200 shadow-xs shadow-pink-200"
                  >
                    <span>
                      {t('womenLawsPage.readDetails', { defaultValue: 'Read Full Details' })}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Bottom Phone Banner */}
      <div className="mt-16 sm:mt-20">
        <PhoneBanner />
      </div>
    </div>
  )
}

export default WomenLaws

