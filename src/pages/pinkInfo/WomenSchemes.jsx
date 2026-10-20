import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { ExternalLink, ArrowRight, Info } from 'lucide-react'
import bannerBg from '../../assets/banner/women-schemes.png'
import PhoneBanner from '../../components/common/PhoneBanner'

// 10 Scheme Banner Images from assets/pinkInfo
import img1 from '../../assets/pinkInfo/विधवा पेंशन योजना बैनर.png'
import img2 from '../../assets/pinkInfo/Smiling Schoolgirl and Hindi Scheme Banner.png'
import img3 from '../../assets/pinkInfo/Beti Bachao, Beti Padhao Banner.png'
import img4 from '../../assets/pinkInfo/Rani Lakshmibai Tribute Banner (1).png'
import img5 from '../../assets/pinkInfo/181 महिला हेल्पलाइन Banner.png'
import img6 from '../../assets/pinkInfo/One Stop Center Community Banner.png'
import img7 from '../../assets/pinkInfo/Joyful Girls in Pink Uniforms.png'
import img8 from '../../assets/pinkInfo/Mission Vatsalya_ Mother and Child.png'
import img9 from '../../assets/pinkInfo/निराश्रित महिला आश्रय गृह Banner.png'
import img10 from '../../assets/pinkInfo/Justice and Compassion Banner.png'

// Girl Child Education & Scholarship Logos & Photos
import kvsLogo from '../../assets/pinkInfo/Kendriya Vidyalaya Emblem.png'
import cbseLogo from '../../assets/pinkInfo/577ff876-f303-4736-beb2-c42703e3490b.png'
import udaanLogo from '../../assets/pinkInfo/0a6bc3c5-d295-4115-861d-f70ccf82e906.png'
import indiraLogo from '../../assets/pinkInfo/5fd2c164-da29-463c-929b-cd5ed8a27eaf.png'

import kvsGirl from '../../assets/pinkInfo/Smiling Schoolgirl with Red Backpack.png'
import cbseGirl from '../../assets/pinkInfo/Smiling Schoolgirl with Backpack and Notebook.png'
import udaanGirl from '../../assets/pinkInfo/Smiling Schoolgirl with Orange Backpack.png'
import indiraGirl from '../../assets/pinkInfo/Smiling Graduate in Pink Robe.png'

function WomenSchemes() {
  const { t } = useTranslation()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const schemes = [
    {
      id: 1,
      image: img1,
      title: t('womenSchemesPage.schemes.widowPension.title', {
        defaultValue: "Destitute Women's Pension After Husband's Death",
      }),
      desc: t('womenSchemesPage.schemes.widowPension.desc', {
        defaultValue:
          "For UP resident women (18+ years) whose husband has died. Family annual income up to ₹2 lakh. Financial assistance of ₹1,000 per month.",
      }),
      applyUrl: 'https://sspy-up.gov.in/',
      portalText: 'sspy-up.gov.in',
      portalUrl: 'https://sspy-up.gov.in/',
    },
    {
      id: 2,
      image: img2,
      title: t('womenSchemesPage.schemes.kanyaSumangala.title', {
        defaultValue: 'Chief Minister Kanya Sumangala Yojana',
      }),
      desc: t('womenSchemesPage.schemes.kanyaSumangala.desc', {
        defaultValue:
          'Launched in 2019 for girls of UP. Family annual income up to ₹3 lakh, maximum two children. Six benefit stages from birth till degree/diploma.',
      }),
      applyUrl: 'https://mksy.up.gov.in/',
      portalText: 'mksy.up.gov.in',
      portalUrl: 'https://mksy.up.gov.in/',
    },
    {
      id: 3,
      image: img3,
      title: t('womenSchemesPage.schemes.betiBachao.title', {
        defaultValue: 'Save Daughter, Educate Daughter',
      }),
      desc: t('womenSchemesPage.schemes.betiBachao.desc', {
        defaultValue:
          "Awareness and support for the safety, education and better future of girls."
      }),
    },
    {
      id: 4,
      image: img4,
      title: t('womenSchemesPage.schemes.raniLakshmibai.title', {
        defaultValue: 'Rani Lakshmibai Children and Women Honor Fund',
      }),
      desc: t('womenSchemesPage.schemes.raniLakshmibai.desc', {
        defaultValue:
          "Financial compensation for women and girls affected by heinous crimes."
      }),
      applyUrl: 'https://msk.upsdc.gov.in/',
      portalText: 'msk.upsdc.gov.in',
      portalUrl: 'https://msk.upsdc.gov.in/',
    },
    {
      id: 5,
      image: img5,
      title: t('womenSchemesPage.schemes.helpline181.title', {
        defaultValue: "181 Women's Helpline",
      }),
      desc: t('womenSchemesPage.schemes.helpline181.desc', {
        defaultValue:
          "Toll-free helpline for women providing 24x7 support, guidance and assistance in difficult situations."
      }),
    },
    {
      id: 6,
      image: img6,
      title: t('womenSchemesPage.schemes.oneStopCenter.title', {
        defaultValue: 'One Stop Center',
      }),
      desc: t('womenSchemesPage.schemes.oneStopCenter.desc', {
        defaultValue:
          "Provides short stay, medical aid, counselling, legal aid and police assistance to women affected by violence."
      }),
    },
    {
      id: 7,
      image: img7,
      title: t('womenSchemesPage.schemes.childService.title', {
        defaultValue: 'Uttar Pradesh Chief Minister Child Service Scheme (General)',
      }),
      desc: t('womenSchemesPage.schemes.childService.desc', {
        defaultValue:
         "For children who have lost one or both parents/guardian. Financial assistance and education support for their development."
      }),
    },

    {
      id: 8,
      image: img8,
      title: t('womenSchemesPage.schemes.missionVatsalya.title', {
        defaultValue: 'Mission Vatsalya',
      }),
      desc: t('womenSchemesPage.schemes.missionVatsalya.desc', {
        defaultValue: `Child protection scheme for care, education, skill development and rehabilitation through institutions.`,
      }),
    },
    {
      id: 9,
      image: img9,
      title: t('womenSchemesPage.schemes.shelterFacility.title', {
        defaultValue: 'Shelter Facility for Destitute Women',
      }),
      desc: t('womenSchemesPage.schemes.shelterFacility.desc', {
        defaultValue:
"Women's shelters, protection homes, Shakti Sadans, Krishna Kutir and Sakhi Niwas working women hostels for safety and support."
      }),
    },
    {
      id: 10,
      image: img10,
      title: t('womenSchemesPage.schemes.implementationActs.title', {
        defaultValue: 'Implementation of Various Acts Related to Children and Women',
      }),
      desc: t('womenSchemesPage.schemes.implementationActs.desc', {
        defaultValue:
          "Implementation of laws protecting women and children against child marriage, child labour, domestic violence, dowry and harassment."
      }),
    },
  ]

  const girlChildScholarships = [
    {
      id: 1,
      logo: kvsLogo,
      title: t('womenSchemesPage.scholarships.kvs.title', {
        defaultValue: 'KVS Single Girl Child Admission Scheme',
      }),
      desc: t('womenSchemesPage.scholarships.kvs.desc', {
        defaultValue:
          'Fee waiver and admission for single girl child in Kendriya Vidyalayas as per rules.',
      }),
      scholarshipInfo: t('womenSchemesPage.scholarships.kvs.scholarshipInfo', {
        defaultValue: 'Full fee waiver for admitted single girl children.',
      }),
      portalText: 'kvsangathan.nic.in',
      applyUrl: 'https://kvsangathan.nic.in/',
      girlImage: kvsGirl,
    },
    {
      id: 2,
      logo: cbseLogo,
      title: t('womenSchemesPage.scholarships.cbse.title', {
        defaultValue: 'CBSE Merit Scholarship Scheme (for Single Girl Child)',
      }),
      desc: t('womenSchemesPage.scholarships.cbse.desc', {
        defaultValue:
          'For single girl child with 60% or more in Class X and studying in Class XI/XII. ₹1,000 per month for two years.',
      }),
      scholarshipInfo: t('womenSchemesPage.scholarships.cbse.scholarshipInfo', {
        defaultValue:
          '₹1000 per month for 2 years (Classes XI & XII), directly transferred to the bank account.',
      }),
      portalText: 'https://cbseit.in/cbse/2024/sgcx/default.aspx',
      applyUrl: 'https://cbseit.in/cbse/2024/sgcx/default.aspx',
      girlImage: cbseGirl,
    },
    {
      id: 3,
      logo: udaanLogo,
      title: t('womenSchemesPage.scholarships.udaan.title', {
        defaultValue: 'CBSE UDAAN Scheme',
      }),
      desc: t('womenSchemesPage.scholarships.udaan.desc', {
        defaultValue:
          'Free engineering entrance coaching, study material and mentoring for Class XI/XII girls.',
      }),
      scholarshipInfo: t('womenSchemesPage.scholarships.udaan.scholarshipInfo', {
        defaultValue: 'Free coaching classes, study materials, and mentoring support.',
      }),
      portalText: 'cbseacademic.nic.in',
      applyUrl: 'https://cbseacademic.nic.in/',
      girlImage: udaanGirl,
    },
    {
      id: 4,
      logo: indiraLogo,
      title: t('womenSchemesPage.scholarships.indira.title', {
        defaultValue: 'Post Graduate Indira Gandhi Scholarship for Single Girl Child',
      }),
      desc: t('womenSchemesPage.scholarships.indira.desc', {
        defaultValue:
          'Scholarship of ₹36,200 per year for single girl child to pursue post graduation.',
      }),
      scholarshipInfo: t('womenSchemesPage.scholarships.indira.scholarshipInfo', {
        defaultValue: '₹36,200 per year during the postgraduate course.',
      }),
      portalText: 'https://www.ugc.gov.in/',
      applyUrl: 'https://www.ugc.gov.in/',
      girlImage: indiraGirl,
    },
  ]

  return (
    <div className="w-full bg-white flex flex-col justify-between min-h-screen">
      {/* Top Banner Section */}
      <section className="relative isolate overflow-hidden w-full h-[250px] sm:h-[270px] md:h-[290px] lg:h-[290px] flex items-center">

        <img
          src={bannerBg}
          alt="Women Schemes - Pink Shakti"
          className={`absolute inset-0 h-full w-full object-cover object-right lg:object-fill -z-10 transition-transform duration-[2000ms] ease-out ${isLoaded ? 'scale-100' : 'scale-110'
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
                className={`group flex flex-col justify-between rounded-2xl pb-2  border border-pink-100/90 bg-white   shadow-[0_4px_20px_-4px_rgba(230,0,103,0.06)] hover:shadow-xl hover:border-[#e60067]/40 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden cursor-default ${isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-[0.98]'
                  }`}
              >

                <div className="relative w-full h-[120px] sm:h-[130px] lg:h-[138px] rounded-xl overflow-hidden mb-2.5 bg-pink-50/50 shadow-2xs">
                  <img
                    src={scheme.image}
                    alt={scheme.title}
                    className="h-full w-full object-fill transition-transform duration-500 ease-out group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                <div className="flex flex-col justify-between flex-1 px-1">
                  <div>

                    <h3 className="font-serif font-bold text-[13px] sm:text-[14px] text-[#102849] leading-snug mb-1.5 line-clamp-2 group-hover:text-[#e60067] transition-colors min-h-[38px]">
                      {scheme.title}
                    </h3>


                    <p className="text-slate-600 text-[10px] sm:text-[11px] font-semibold leading-relaxed  mb-2">
                      {scheme.desc}
                    </p>
                  </div>


                  {scheme.applyUrl ? (
                    <div className="mt-auto mx-2  flex items-center justify-between gap-1.5 flex-wrap">
                      <a
                        href={scheme.applyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-md bg-[#e60067] hover:bg-[#c90059] active:scale-95 px-2.5 py-1 text-[9.5px] font-bold text-white shadow-xs shadow-pink-500/20 transition-all duration-200 cursor-pointer"
                      >
                        <span>APPLY ONLINE</span>
                        <ArrowRight className="w-2.5 h-2.5 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5" />
                      </a>

                      <a
                        href={scheme.portalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[10.5px] font-semibold text-[#e60067] hover:text-[#c90059] hover:underline transition-colors"
                      >
                        <ExternalLink className="w-3 h-3 stroke-[2]" />
                        <span>{scheme.portalText}</span>
                      </a>
                    </div>
                  ) : (
                    <div className="mt-auto pt-2 border-t border-transparent"></div>
                  )}
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
                className={`group relative flex justify-between overflow-hidden rounded-2xl border border-pink-100/90 bg-gradient-to-r from-white via-[#fff7f9] to-[#fff0f5] p-2.5 sm:p-3 shadow-[0_4px_20px_-4px_rgba(230,0,103,0.06)] hover:shadow-xl hover:border-[#e60067]/40 hover:-translate-y-1 transition-all duration-300 min-h-[125px] sm:min-h-[135px] cursor-default ${isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-[0.98]'
                  }`}
              >
                {/* Content Column (Left Side) */}
                <div className="relative z-10 w-[60%] sm:w-[75%] flex flex-col justify-between h-full ">
                  <div>
                    {/* Logo & Title in one row side-by-side */}
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5">
                      <div className="h-9 w-9 sm:h-12 sm:w-12 shrink-0 flex items-center justify-center">
                        <img
                          src={card.logo}
                          alt="Logo"
                          className="max-h-full max-w-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <h4 className="font-serif font-bold text-[12px] sm:text-[12.5px] text-[#102849] group-hover:text-[#e60067] leading-tight transition-colors ">
                        {card.title}
                      </h4>
                    </div>

                    {/* Description below */}
                    <p className="text-slate-600 text-[10px] sm:text-[10.5px] font-medium leading-snug">
                      {card.desc}
                    </p>

                    {/* Scholarship Info (if present) */}
                    {card.scholarshipInfo && (
                      <div className="mt-1.5">
                        <span className="font-bold text-[10.5px] sm:text-[11px] text-[#102849] block">
                          Scholarship:
                        </span>
                        <p className="text-slate-700 text-[10px] sm:text-[10.5px] font-medium leading-snug">
                          {card.scholarshipInfo}
                        </p>
                      </div>
                    )}

                    {/* APPLY ONLINE Link (if present) */}
                    {card.applyUrl && (
                      <div className="mt-2 text-[10.5px] sm:text-[11px] leading-snug">
                        <span className="text-[#e60067] font-bold">APPLY ONLINE: </span>
                        <a
                          href={card.applyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#0284c7] hover:underline transition-colors break-all"
                        >
                          {card.portalText}
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Girl Student Photo (Right Side) */}
                <div className="absolute right-0 bottom-0 top-0 w-[40%] sm:w-[38%] flex items-end justify-end pointer-events-none z-[1] overflow-hidden">
                  <img
                    src={card.girlImage}
                    alt={card.title}
                    className="h-full w-auto max-h-[135px] sm:max-h-[145px] object-contain object-bottom transition-transform duration-500 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
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
