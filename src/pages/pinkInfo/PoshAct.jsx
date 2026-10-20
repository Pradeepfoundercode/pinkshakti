import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { BookOpen, Users, FileText, Laptop } from 'lucide-react'
import bannerBg from '../../assets/banner/posh-awareness.png'
import poshPoster from '../../assets/pinkInfo/5731ab1b-589a-4e11-b964-58b223e94fbb.png'
import PhoneBanner from '../../components/common/PhoneBanner'

function PoshAct() {
  const { t } = useTranslation()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const definitionBullets = [
    t('poshActPage.panels.definition.bullets.0', {
      defaultValue: 'Physical contact and advances.',
    }),
    t('poshActPage.panels.definition.bullets.1', {
      defaultValue: 'Demand or request for sexual favors.',
    }),
    t('poshActPage.panels.definition.bullets.2', {
      defaultValue: 'Sexually colored remarks.',
    }),
    t('poshActPage.panels.definition.bullets.3', {
      defaultValue: 'Showing pornography.',
    }),
    t('poshActPage.panels.definition.bullets.4', {
      defaultValue: 'Any other unwelcome physical, verbal or non-verbal conduct of a sexual nature.',
    }),
  ]

  const scopeBullets = [
    t('poshActPage.panels.scope.bullets.0', {
      defaultValue: 'All Government bodies.',
    }),
    t('poshActPage.panels.scope.bullets.1', {
      defaultValue: 'Private and public sector organizations.',
    }),
    t('poshActPage.panels.scope.bullets.2', {
      defaultValue: 'Non-governmental organizations (NGOs).',
    }),
    t('poshActPage.panels.scope.bullets.3', {
      defaultValue: 'Vocational and educational institutions.',
    }),
    t('poshActPage.panels.scope.bullets.4', {
      defaultValue: 'Sports institutes.',
    }),
    t('poshActPage.panels.scope.bullets.5', {
      defaultValue: 'Any place visited by a woman in the course of her employment, including transportation.',
    }),
  ]

  const sheboxSteps = [
    t('poshActPage.panels.shebox.steps.0', {
      defaultValue: 'Visit the official portal - shebox.wcd.gov.in',
    }),
    t('poshActPage.panels.shebox.steps.1', {
      defaultValue: 'Choose your employment sector.',
    }),
    t('poshActPage.panels.shebox.steps.2', {
      defaultValue: 'Enter details of complainant, workplace and respondent.',
    }),
    t('poshActPage.panels.shebox.steps.3', {
      defaultValue: 'Describe the complaint and upload supporting documents (if any).',
    }),
    t('poshActPage.panels.shebox.steps.4', {
      defaultValue: 'Submit the complaint and note the reference number to track the status.',
    }),
  ]

  return (
    <div className="min-h-screen bg-[#FFF9FA]">
      {/* Top Banner Section */}
      <section className="relative isolate h-[200px] w-full overflow-hidden sm:h-[260px] md:h-[320px] lg:h-[340px]">
        <img
          src={bannerBg}
          alt="PoSH Act - Pink Shakti"
          className={`absolute inset-0 h-full w-full object-cover object-right lg:object-fill -z-10 transition-transform duration-[2000ms] ease-out ${
            isLoaded ? 'scale-100' : 'scale-110'
          }`}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/10 md:hidden z-0"></div>

        <div className="hero-content relative z-10 flex flex-col justify-center h-full px-[5%] sm:px-[8%] w-[95%] sm:w-[85%] md:w-[75%] lg:w-[65%] text-[#102849]">
          {/* Badge */}
          <div
            className={`transition-all duration-700 ease-out delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="mb-1.5 sm:mb-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-pink-100/90 px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#e60067] shadow-xs">
                <span className="text-sm leading-none">•</span>
                <span>{t('poshActPage.badge', { defaultValue: 'PINK INFO' })}</span>
              </span>
            </div>
          </div>

          {/* Heading Line 1: Pink */}
          <h1
            className={`mt-0.5 font-serif font-bold text-[#e60067] text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] leading-[1.15] tracking-tight uppercase transition-all duration-700 ease-out delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {t('poshActPage.titlePink', { defaultValue: 'THE PREVENTION OF' })}
          </h1>

          {/* Heading Line 2: Navy */}
          <h2
            className={`mt-0.5 sm:mt-1 font-serif font-bold text-[#102849] text-[20px] sm:text-[26px] md:text-[32px] lg:text-[38px] leading-[1.15] tracking-tight uppercase transition-all duration-700 ease-out delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {t('poshActPage.titleNavy', {
              defaultValue: 'SEXUAL HARASSMENT (PoSH) ACT, 2013',
            })}
          </h2>

          {/* Description */}
          <p
            className={`mt-2 sm:mt-2.5 max-w-[36rem] text-[12.5px] sm:text-[14px] lg:text-[15px] font-medium leading-snug sm:leading-relaxed text-slate-700 transition-all duration-700 ease-out delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {t('poshActPage.desc', {
              defaultValue: 'A safe and secure working environment for women.',
            })}
          </p>
        </div>
      </section>

      {/* Main Content Area: Poster + 5 Info Panels */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-7 items-start">
          {/* Left Column: Poster Image Card */}
          <div className="lg:col-span-4 xl:col-span-4 flex justify-center lg:justify-start">
            <div className="w-full max-w-[380px] sm:max-w-[400px] lg:max-w-none bg-white rounded-2xl border border-pink-100/90 overflow-hidden shadow-sm flex flex-col sticky top-24">
              <img
                src={poshPoster}
                alt="PoSH Act Poster - Pink Shakti"
                className="w-full h-auto max-h-[580px] sm:max-h-[620px] lg:max-h-none object-cover"
              />
              <div className="bg-[#e60067] text-white py-2.5 sm:py-3 px-3 text-center font-bold text-xs sm:text-[12.5px] tracking-wider uppercase shadow-inner">
                {t('poshActPage.posterFooter', {
                  defaultValue: "A SAFE WORKPLACE IS EVERY WOMAN'S RIGHT",
                })}
              </div>
            </div>
          </div>

          {/* Right Column: 5 Information Panels */}
          <div className="lg:col-span-8 xl:col-span-8 flex flex-col gap-3 sm:gap-3.5">
            {/* Panel 1: Purpose and Objective */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-pink-100/90 shadow-[0_2px_10px_-3px_rgba(230,0,103,0.05)] hover:shadow-[0_4px_16px_-3px_rgba(230,0,103,0.08)] transition-all duration-300 p-3 sm:p-3.5 flex items-start gap-3 sm:gap-3.5">
              <BookOpen className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-[#e60067] shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-serif font-bold text-[#e60067] text-[15px] sm:text-[16px] leading-tight mb-1">
                  {t('poshActPage.panels.purpose.title', { defaultValue: 'Purpose and Objective' })}
                </h3>
                <p className="text-slate-700 text-xs sm:text-[12.5px] lg:text-[13px] font-medium leading-snug sm:leading-relaxed">
                  {t('poshActPage.panels.purpose.desc', {
                    defaultValue:
                      'The Prevention of Sexual Harassment (PoSH) Act, 2013 aims to protect women against sexual harassment at the workplace and to provide a safe and secure working environment. It also provides a mechanism for filing and redressing complaints.',
                  })}
                </p>
              </div>
            </div>

            {/* Panel 2: Definition of Sexual Harassment */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-pink-100/90 shadow-[0_2px_10px_-3px_rgba(230,0,103,0.05)] hover:shadow-[0_4px_16px_-3px_rgba(230,0,103,0.08)] transition-all duration-300 p-3 sm:p-3.5 flex items-start gap-3 sm:gap-3.5">
              <Users className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-[#e60067] shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-serif font-bold text-[#e60067] text-[15px] sm:text-[16px] leading-tight mb-1">
                  {t('poshActPage.panels.definition.title', { defaultValue: 'Definition of Sexual Harassment' })}
                </h3>
                <p className="text-slate-700 text-xs sm:text-[12.5px] lg:text-[13px] font-medium leading-snug sm:leading-relaxed mb-1">
                  {t('poshActPage.panels.definition.intro', {
                    defaultValue:
                      'As per the Act, sexual harassment includes any one or more of the following (whether directly or by implication):',
                  })}
                </p>
                <ul className="space-y-0.5">
                  {definitionBullets.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-[12.5px] text-slate-700 leading-snug font-medium">
                      <span className="text-[#e60067] font-bold leading-none mt-1 text-xs">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Panel 3: Scope of the Act */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-pink-100/90 shadow-[0_2px_10px_-3px_rgba(230,0,103,0.05)] hover:shadow-[0_4px_16px_-3px_rgba(230,0,103,0.08)] transition-all duration-300 p-3 sm:p-3.5 flex items-start gap-3 sm:gap-3.5">
              <FileText className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-[#e60067] shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-serif font-bold text-[#e60067] text-[15px] sm:text-[16px] leading-tight mb-1">
                  {t('poshActPage.panels.scope.title', { defaultValue: 'Scope of the Act' })}
                </h3>
                <p className="text-slate-700 text-xs sm:text-[12.5px] lg:text-[13px] font-medium leading-snug sm:leading-relaxed mb-1">
                  {t('poshActPage.panels.scope.intro', {
                    defaultValue: 'The Act applies to:',
                  })}
                </p>
                <ul className="space-y-0.5">
                  {scopeBullets.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-[12.5px] text-slate-700 leading-snug font-medium">
                      <span className="text-[#e60067] font-bold leading-none mt-1 text-xs">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Panel 4: Internal Complaints Committee (ICC) */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-pink-100/90 shadow-[0_2px_10px_-3px_rgba(230,0,103,0.05)] hover:shadow-[0_4px_16px_-3px_rgba(230,0,103,0.08)] transition-all duration-300 p-3 sm:p-3.5 flex items-start gap-3 sm:gap-3.5">
              <Users className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-[#e60067] shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-serif font-bold text-[#e60067] text-[15px] sm:text-[16px] leading-tight mb-1">
                  {t('poshActPage.panels.icc.title', { defaultValue: 'Internal Complaints Committee (ICC)' })}
                </h3>
                <p className="text-slate-700 text-xs sm:text-[12.5px] lg:text-[13px] font-medium leading-snug sm:leading-relaxed">
                  {t('poshActPage.panels.icc.desc', {
                    defaultValue:
                      'Every employer with 10 or more employees is required to constitute an Internal Complaints Committee (ICC) at each office or branch. The ICC must have a Presiding Officer who is a senior woman employee and at least two other members who are committed to the cause of women or have experience in social work, legal knowledge or experience in dealing with sexual harassment issues.',
                  })}
                </p>
              </div>
            </div>

            {/* Panel 5: SHe-Box */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-pink-100/90 shadow-[0_2px_10px_-3px_rgba(230,0,103,0.05)] hover:shadow-[0_4px_16px_-3px_rgba(230,0,103,0.08)] transition-all duration-300 p-3 sm:p-3.5 flex items-start gap-3 sm:gap-3.5">
              <Laptop className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-[#e60067] shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-serif font-bold text-[#e60067] text-[15px] sm:text-[16px] leading-tight mb-1">
                  {t('poshActPage.panels.shebox.title', { defaultValue: 'SHe-Box' })}
                </h3>
                <p className="text-slate-700 text-xs sm:text-[12.5px] lg:text-[13px] font-medium leading-snug sm:leading-relaxed">
                  {t('poshActPage.panels.shebox.desc', {
                    defaultValue:
                      'SHe-Box is an online complaint management platform launched by the Ministry of Women and Child Development (Government of India) for lodging complaints of sexual harassment at the workplace.',
                  })}
                </p>

                <h4 className="text-xs sm:text-[12.5px] font-bold text-[#e60067] mt-2 mb-1">
                  {t('poshActPage.panels.shebox.stepsHeading', { defaultValue: 'Steps to File a Complaint on SHe-Box' })}
                </h4>

                <ol className="space-y-1 sm:space-y-1.5">
                  {sheboxSteps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-[12.5px] text-slate-700 leading-snug font-medium">
                      <span className="w-4 h-4 sm:w-4.5 sm:h-4.5 rounded-full bg-[#e60067] text-white flex items-center justify-center font-bold text-[9.5px] sm:text-[10px] shrink-0 mt-0.5 shadow-2xs">
                        {idx + 1}
                      </span>
                      <span>
                        {idx === 0 ? (
                          <>
                            Visit the official portal -{' '}
                            <a
                              href="https://shebox.wcd.gov.in"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-bold text-[#102849] hover:text-[#e60067] transition-colors underline"
                            >
                              shebox.wcd.gov.in
                            </a>
                          </>
                        ) : (
                          step
                        )}
                      </span>
                    </li>
                  ))}
                </ol>
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

export default PoshAct

