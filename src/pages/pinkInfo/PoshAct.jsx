import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Shield,
  ShieldCheck,
  Scale,
  Users,
  Building2,
  FileText,
  Clock,
  AlertTriangle,
  GraduationCap,
  BookOpen,
  Laptop,
  ExternalLink,
  Lock,
  MapPin,
  CheckCircle2,
  FileCheck,
  AlertCircle
} from 'lucide-react'
import BannerSlider from '../../components/common/BannerSlider'
import poshBanner from '../../assets/posh-act/POSH 1.jpg'
import poshActImage from '../../assets/posh-act/post_act2.jpeg'
import poshActImageHi from '../../assets/women-rights/3.png'
import sheboxImage from '../../assets/posh-act/download.png'
import PhoneBanner from '../../components/common/PhoneBanner'

function PoshAct() {
  const { t, i18n } = useTranslation()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const defaultUnwelcomeActs = [
    'Physical contact and advances',
    'A demand or request for sexual favors',
    'Sexually colored remarks',
    'Showing pornography',
    'Any other unwelcome physical, verbal, or non-verbal conduct of a sexual nature',
  ]

  const unwelcomeActs = t('poshActPage.cards.definition.unwelcomeActs', {
    returnObjects: true,
    defaultValue: defaultUnwelcomeActs,
  })

  const defaultExtendedWorkplaces = [
    'Government bodies',
    'Private and public sector organizations',
    'Non-governmental organizations',
    'Vocational and educational institutions',
    'Sports institutes',
    'Places visited by the employee during the course of employment, including transportation',
  ]

  const extendedWorkplaces = t('poshActPage.cards.scope.places', {
    returnObjects: true,
    defaultValue: defaultExtendedWorkplaces,
  })

  const defaultSheboxSteps = [
    {
      num: 1,
      title: 'Access the Portal',
      desc: 'Navigate to the official SHe-Box website:',
      link: 'https://shebox.wcd.gov.in',
      subPoints: [],
    },
    {
      num: 2,
      title: 'Initiate Complaint Registration',
      desc: 'Start your complaint registration process:',
      subPoints: [
        'a) Click on the “Register Your Complaint” tab on the homepage.',
        'b) Select your employment sector: Central Government, State Government, or Private Sector.',
      ],
    },
    {
      num: 3,
      title: 'Fill in Complainant Details',
      desc: 'Provide your personal and employment details:',
      subPoints: [
        "a) Indicate if you're filing for yourself or on behalf of someone else.",
        'b) Provide your full name, valid email ID, and mobile number.',
        'c) Specify your employment status and organization details.',
      ],
    },
    {
      num: 4,
      title: 'Provide Workplace Information',
      desc: 'Enter accurate workplace details:',
      subPoints: [
        'a) Enter details about your workplace, including the name, address, and relevant ministry or department (if applicable).',
        'b) Select the state and district where your workplace is located.',
      ],
    },
    {
      num: 5,
      title: 'Enter Respondent (Accused) Details',
      desc: 'Details of the individual against whom complaint is filed:',
      subPoints: [
        "a) Provide the name, designation, and contact information of the individual you're filing the complaint against.",
        'b) Describe your working relationship with the respondent.',
      ],
    },
    {
      num: 6,
      title: 'Detail the Complaint',
      desc: 'Furnish complete details of the incident:',
      subPoints: [
        "a) Indicate if you've previously filed a complaint with your organization's Internal Committee (IC).",
        'b) Select the type of harassment experienced.',
        'c) Provide a brief description of the incident(s) (up to 500 words).',
        'd) Upload any supporting documents (PDF, JPEG, PNG formats; maximum size 2MB).',
      ],
    },
    {
      num: 7,
      title: 'Submit the Complaint',
      desc: 'Finalize and submit your complaint:',
      subPoints: [
        'a) Review all entered information for accuracy.',
        'b) Click “Submit” to file your complaint.',
        "c) You'll receive a confirmation email with a link to set your password and activate your account.",
      ],
    },
    {
      num: 8,
      title: 'Tracking Your Complaint',
      desc: 'After registration, monitor the status of your complaint:',
      subPoints: [
        'a) Visit https://shebox.wcd.gov.in.',
        'b) Click on the “View Status of Complaint” tab.',
        'c) Log in using your registered email ID and password.',
        'd) Enter the captcha code and click “Submit” to view the current status.',
      ],
    },
  ]

  const sheboxStepsData = t('poshActPage.shebox.steps', {
    returnObjects: true,
    defaultValue: defaultSheboxSteps,
  })

  const sheboxSteps = Array.isArray(sheboxStepsData) && sheboxStepsData.length > 0
    ? sheboxStepsData.map((step) => ({
        ...step,
        link: step.num === 1 ? 'https://shebox.wcd.gov.in' : undefined,
      }))
    : defaultSheboxSteps

  return (
    <div className="min-h-screen bg-transparent">
      {/* Top Banner Section */}
      <BannerSlider
        images={[poshBanner]}
        autoPlay={false}
        height="h-[200px] sm:h-[260px] md:h-[320px] lg:h-[400px]"
      />

      {/* Main Content Sections */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-9 space-y-10 sm:space-y-12">
        {/* ========================================================= */}
        {/* SECTION 1: THE PREVENTION OF SEXUAL HARASSMENT (PoSH) ACT, 2013 */}
        {/* ========================================================= */}
        <section id="section-posh-act" className="scroll-mt-20">
          {/* Section Header */}
          <div className="mb-4 text-center sm:text-left">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[28px] font-bold text-[#102849] tracking-tight">
              {t('poshActPage.heading', { defaultValue: 'THE PREVENTION OF SEXUAL HARASSMENT (PoSH) ACT, 2013' })}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#e60067] to-[#824497] rounded-full mt-2 mx-auto sm:mx-0"></div>
          </div>

          {/* UPER: Image on Top (Showcase Card) */}
          <div className="w-full max-w-[700px] mx-auto mb-5">
            <div className="bg-white rounded-2xl border border-pink-100 shadow-[0_4px_18px_-4px_rgba(230,0,103,0.08)] overflow-hidden">
              <div className="p-2 sm:p-2.5 bg-gradient-to-b from-pink-50/50 to-white flex justify-center">
                <img
                  src={i18n.language === 'hi' ? poshActImageHi : poshActImage}
                  alt={t('poshActPage.imageAlt', { defaultValue: 'Right Against Workplace Harassment - PoSH Act 2013' })}
                  className="w-full h-auto max-h-[350px] object-cover sm:object-fill rounded-xl border border-pink-100/90 shadow-2xs"
                />
              </div>
            </div>
          </div>

          {/* Intro paragraph below image */}
          <div className="mb-5">
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed max-w-4xl font-medium">
              {t('poshActPage.intro', {
                defaultValue:
                  'The Prevention of Sexual Harassment (PoSH) Act, 2013, is a significant piece of legislation in India aimed at ensuring a safe and secure working environment for women. Here are the essential aspects of the PoSH Act, 2013:',
              })}
            </p>
          </div>

          {/* NICHE: 12-Column Responsive Cards Grid Below Image */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 sm:gap-4">
            {/* 1. Purpose and Objective */}
            <div className="md:col-span-6 bg-white rounded-2xl border border-pink-100/90 shadow-[0_2px_10px_-3px_rgba(230,0,103,0.05)] hover:shadow-[0_4px_16px_-3px_rgba(230,0,103,0.1)] transition-all p-4 sm:p-4.5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center shrink-0 text-[#e60067] mt-0.5">
                  <Scale className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif font-bold text-[#e60067] text-base sm:text-lg mb-1.5">
                    {t('poshActPage.cards.purpose.title', { defaultValue: 'Purpose and Objective' })}
                  </h3>
                  <p className="text-slate-700 text-xs sm:text-[13.5px] lg:text-[14px] leading-relaxed font-medium">
                    {t('poshActPage.cards.purpose.desc', {
                      defaultValue:
                        'The primary aim of the PoSH Act is to provide protection against sexual harassment of women at the workplace and to establish a redressal mechanism for complaints. It is intended to create a safe working environment that enables women to work without fear of prejudice, gender bias, or sexual harassment.',
                    })}
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Scope of the Act */}
            <div className="md:col-span-6 bg-white rounded-2xl border border-pink-100/90 shadow-[0_2px_10px_-3px_rgba(230,0,103,0.05)] hover:shadow-[0_4px_16px_-3px_rgba(230,0,103,0.1)] transition-all p-4 sm:p-4.5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center shrink-0 text-[#e60067] mt-0.5">
                  <Building2 className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif font-bold text-[#e60067] text-base sm:text-lg mb-1.5">
                    {t('poshActPage.cards.scope.title', { defaultValue: 'Scope of the Act' })}
                  </h3>
                  <p className="text-slate-700 text-xs sm:text-[13.5px] font-medium mb-2">
                    {t('poshActPage.cards.scope.desc', { defaultValue: 'The Act applies to all workplaces in India, including:' })}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs sm:text-[13px] text-slate-700 font-medium">
                    {Array.isArray(extendedWorkplaces) &&
                      extendedWorkplaces.map((place, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 p-1.5 rounded-lg bg-pink-50/60">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#e60067] shrink-0"></span>
                          <span className="truncate">{place}</span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Definition of Sexual Harassment (Full Width) */}
            <div className="md:col-span-12 bg-white rounded-2xl border border-pink-100/90 shadow-[0_2px_10px_-3px_rgba(230,0,103,0.05)] hover:shadow-[0_4px_16px_-3px_rgba(230,0,103,0.1)] transition-all p-4 sm:p-4.5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center shrink-0 text-[#e60067] mt-0.5">
                  <AlertCircle className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif font-bold text-[#e60067] text-base sm:text-lg mb-1.5">
                    {t('poshActPage.cards.definition.title', { defaultValue: 'Definition of Sexual Harassment' })}
                  </h3>
                  <p className="text-slate-700 text-xs sm:text-[13.5px] lg:text-[14px] font-medium mb-2.5">
                    {t('poshActPage.cards.definition.desc', {
                      defaultValue:
                        'The Act defines sexual harassment in a broad manner, covering any unwelcome acts or behavior (whether directly or by implication) such as:',
                    })}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                    {Array.isArray(unwelcomeActs) &&
                      unwelcomeActs.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs sm:text-[13.5px] text-slate-700 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#e60067] mt-1.5 shrink-0"></span>
                          <span>{item}</span>
                        </div>
                      ))}
                  </div>
                  <div className="p-3 bg-pink-50/70 rounded-xl border border-pink-100 text-xs sm:text-[13px] text-slate-700 font-medium">
                    <strong className="text-[#102849]">
                      {t('poshActPage.cards.definition.extendedNoteBold', {
                        defaultValue: 'The definition also extends to places visited by the employee during the course of employment, including:',
                      })}
                    </strong>{' '}
                    {t('poshActPage.cards.definition.extendedNoteText', {
                      defaultValue:
                        'Government bodies, private & public sector organizations, NGOs, vocational & educational institutions, sports institutes, and places visited during the course of employment, including transportation.',
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Internal Complaints Committee (ICC) - WIDER (Col 7) */}
            <div className="md:col-span-7 bg-white rounded-2xl border border-pink-100/90 shadow-[0_2px_10px_-3px_rgba(230,0,103,0.05)] hover:shadow-[0_4px_16px_-3px_rgba(230,0,103,0.1)] transition-all p-4 sm:p-4.5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center shrink-0 text-[#e60067] mt-0.5">
                  <Users className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif font-bold text-[#e60067] text-base sm:text-lg mb-1.5">
                    {t('poshActPage.cards.icc.title', { defaultValue: 'Internal Complaints Committee (ICC)' })}
                  </h3>
                  <p className="text-slate-700 text-xs sm:text-[13.5px] lg:text-[14px] leading-relaxed font-medium mb-2">
                    {t('poshActPage.cards.icc.desc', {
                      defaultValue:
                        'Every employer with 10 or more employees is required to constitute an Internal Complaints Committee (ICC) at each office or branch. The ICC is responsible for addressing complaints of sexual harassment and is composed of:',
                    })}
                  </p>
                  <ul className="space-y-1.5 text-xs sm:text-[13px] lg:text-[13.5px] text-slate-700 font-medium border-l-2 border-[#e60067] pl-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#e60067] font-bold">&bull;</span>
                      <span>
                        {t('poshActPage.cards.icc.points.0', { defaultValue: 'A senior woman employee as the Presiding Officer' })}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#e60067] font-bold">&bull;</span>
                      <span>
                        {t('poshActPage.cards.icc.points.1', {
                          defaultValue: 'At least two employees committed to the cause of women or having experience in social work or legal knowledge',
                        })}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#e60067] font-bold">&bull;</span>
                      <span>
                        {t('poshActPage.cards.icc.points.2', {
                          defaultValue: 'One external member from an NGO or association committed to the cause of women',
                        })}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 5. Local Complaints Committee (LCC) - NARROWER (Col 5) */}
            <div className="md:col-span-5 bg-white rounded-2xl border border-pink-100/90 shadow-[0_2px_10px_-3px_rgba(230,0,103,0.05)] hover:shadow-[0_4px_16px_-3px_rgba(230,0,103,0.1)] transition-all p-4 sm:p-4.5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center shrink-0 text-[#e60067] mt-0.5">
                  <MapPin className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif font-bold text-[#e60067] text-base sm:text-lg mb-1.5">
                    {t('poshActPage.cards.lcc.title', { defaultValue: 'Local Complaints Committee (LCC)' })}
                  </h3>
                  <p className="text-slate-700 text-xs sm:text-[13.5px] lg:text-[14px] leading-relaxed font-medium">
                    {t('poshActPage.cards.lcc.desc', {
                      defaultValue:
                        'For workplaces with fewer than 10 employees or if the complaint is against the employer, a Local Complaints Committee (LCC) must be established by the District Officer. The LCC serves the same purpose as the ICC but operates at the district level.',
                    })}
                  </p>
                </div>
              </div>
            </div>

            {/* 6. Complaint Procedure (Full Width) */}
            <div className="md:col-span-12 bg-white rounded-2xl border border-pink-100/90 shadow-[0_2px_10px_-3px_rgba(230,0,103,0.05)] hover:shadow-[0_4px_16px_-3px_rgba(230,0,103,0.1)] transition-all p-4 sm:p-4.5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center shrink-0 text-[#e60067] mt-0.5">
                  <FileText className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif font-bold text-[#e60067] text-base sm:text-lg mb-2.5">
                    {t('poshActPage.cards.procedure.title', { defaultValue: 'Complaint Procedure' })}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3 rounded-xl bg-pink-50/60 border border-pink-100">
                      <span className="text-[10px] font-bold uppercase text-[#e60067] bg-pink-100 px-2 py-0.5 rounded-md inline-block mb-1.5">
                        {t('poshActPage.cards.procedure.step1.tag', { defaultValue: 'Step 1' })}
                      </span>
                      <h4 className="font-bold text-[#102849] text-xs sm:text-sm mb-1">
                        {t('poshActPage.cards.procedure.step1.title', { defaultValue: 'Filing of Complaint' })}
                      </h4>
                      <p className="text-slate-700 text-xs sm:text-[13px] leading-relaxed font-medium">
                        {t('poshActPage.cards.procedure.step1.desc', {
                          defaultValue:
                            'The aggrieved woman must submit a written complaint within three months from the date of the incident. This period can be extended by another three months if there are valid reasons.',
                        })}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-pink-50/60 border border-pink-100">
                      <span className="text-[10px] font-bold uppercase text-[#e60067] bg-pink-100 px-2 py-0.5 rounded-md inline-block mb-1.5">
                        {t('poshActPage.cards.procedure.step2.tag', { defaultValue: 'Step 2' })}
                      </span>
                      <h4 className="font-bold text-[#102849] text-xs sm:text-sm mb-1">
                        {t('poshActPage.cards.procedure.step2.title', { defaultValue: 'Conciliation' })}
                      </h4>
                      <p className="text-slate-700 text-xs sm:text-[13px] leading-relaxed font-medium">
                        {t('poshActPage.cards.procedure.step2.desc', {
                          defaultValue:
                            'Before initiating an inquiry, the ICC/LCC can take steps to settle the matter between the aggrieved woman and the respondent through conciliation, if requested by the complainant.',
                        })}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-pink-50/60 border border-pink-100">
                      <span className="text-[10px] font-bold uppercase text-[#e60067] bg-pink-100 px-2 py-0.5 rounded-md inline-block mb-1.5">
                        {t('poshActPage.cards.procedure.step3.tag', { defaultValue: 'Step 3' })}
                      </span>
                      <h4 className="font-bold text-[#102849] text-xs sm:text-sm mb-1">
                        {t('poshActPage.cards.procedure.step3.title', { defaultValue: 'Inquiry' })}
                      </h4>
                      <p className="text-slate-700 text-xs sm:text-[13px] leading-relaxed font-medium">
                        {t('poshActPage.cards.procedure.step3.desc', {
                          defaultValue:
                            'If conciliation is not possible or desired, the ICC/LCC conducts an inquiry following principles of natural justice.',
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 7. Protection Against Retaliation */}
            <div className="md:col-span-6 bg-white rounded-2xl border border-pink-100/90 shadow-[0_2px_10px_-3px_rgba(230,0,103,0.05)] hover:shadow-[0_4px_16px_-3px_rgba(230,0,103,0.1)] transition-all p-4 sm:p-4.5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center shrink-0 text-[#e60067] mt-0.5">
                  <ShieldCheck className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif font-bold text-[#e60067] text-base sm:text-lg mb-1.5">
                    {t('poshActPage.cards.protection.title', { defaultValue: 'Protection Against Retaliation' })}
                  </h3>
                  <p className="text-slate-700 text-xs sm:text-[13.5px] lg:text-[14px] leading-relaxed font-medium">
                    {t('poshActPage.cards.protection.desc', {
                      defaultValue:
                        'The Act ensures protection for complainants, witnesses, and ICC/LCC members against any form of retaliation or victimization.',
                    })}
                  </p>
                </div>
              </div>
            </div>

            {/* 8. Time-bound Process - Point Wise (No Boxes) */}
            <div className="md:col-span-6 bg-white rounded-2xl border border-pink-100/90 shadow-[0_2px_10px_-3px_rgba(230,0,103,0.05)] hover:shadow-[0_4px_16px_-3px_rgba(230,0,103,0.1)] transition-all p-4 sm:p-4.5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center shrink-0 text-[#e60067] mt-0.5">
                  <Clock className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif font-bold text-[#e60067] text-base sm:text-lg mb-1.5">
                    {t('poshActPage.cards.timebound.title', { defaultValue: 'Time-bound Process' })}
                  </h3>
                  <p className="text-slate-700 text-xs sm:text-[13.5px] font-medium mb-2">
                    {t('poshActPage.cards.timebound.desc', { defaultValue: 'The Act mandates a time-bound process:' })}
                  </p>
                  <ul className="space-y-1.5 text-xs sm:text-[13.5px] text-slate-700 font-medium">
                    <li className="flex items-start gap-2">
                      <span className="text-[#e60067] font-bold mt-0.5">&bull;</span>
                      <span>
                        {t('poshActPage.cards.timebound.points.0', { defaultValue: 'The inquiry should be completed within 90 days.' })}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#e60067] font-bold mt-0.5">&bull;</span>
                      <span>
                        {t('poshActPage.cards.timebound.points.1', {
                          defaultValue: 'The report of the inquiry should be submitted to the employer within 10 days of completion.',
                        })}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#e60067] font-bold mt-0.5">&bull;</span>
                      <span>
                        {t('poshActPage.cards.timebound.points.2', { defaultValue: 'Action on the report should be taken within 60 days.' })}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 9. Penalties for Non-compliance */}
            <div className="md:col-span-6 bg-white rounded-2xl border border-pink-100/90 shadow-[0_2px_10px_-3px_rgba(230,0,103,0.05)] hover:shadow-[0_4px_16px_-3px_rgba(230,0,103,0.1)] transition-all p-4 sm:p-4.5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center shrink-0 text-[#e60067] mt-0.5">
                  <AlertTriangle className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif font-bold text-[#e60067] text-base sm:text-lg mb-1.5">
                    {t('poshActPage.cards.penalties.title', { defaultValue: 'Penalties for Non-compliance' })}
                  </h3>
                  <p className="text-slate-700 text-xs sm:text-[13.5px] font-medium mb-2">
                    {t('poshActPage.cards.penalties.desc', {
                      defaultValue: 'Employers who do not comply with the provisions of the Act face various penalties, including:',
                    })}
                  </p>
                  <ul className="space-y-1.5 text-xs sm:text-[13.5px] text-slate-700 font-medium">
                    <li className="flex items-start gap-2">
                      <span className="text-[#e60067] font-bold">&bull;</span>
                      <span>
                        {t('poshActPage.cards.penalties.p1', { defaultValue: 'A fine of up to ₹50,000' })}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#e60067] font-bold">&bull;</span>
                      <span>
                        {t('poshActPage.cards.penalties.p2', {
                          defaultValue: 'Repeat offenses may lead to higher fines and cancellation of business licenses',
                        })}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 10. Training and Awareness */}
            <div className="md:col-span-6 bg-white rounded-2xl border border-pink-100/90 shadow-[0_2px_10px_-3px_rgba(230,0,103,0.05)] hover:shadow-[0_4px_16px_-3px_rgba(230,0,103,0.1)] transition-all p-4 sm:p-4.5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center shrink-0 text-[#e60067] mt-0.5">
                  <GraduationCap className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif font-bold text-[#e60067] text-base sm:text-lg mb-1.5">
                    {t('poshActPage.cards.training.title', { defaultValue: 'Training and Awareness' })}
                  </h3>
                  <p className="text-slate-700 text-xs sm:text-[13.5px] lg:text-[14px] leading-relaxed font-medium">
                    {t('poshActPage.cards.training.desc', {
                      defaultValue:
                        'Employers are responsible for organizing workshops and awareness programs at regular intervals for sensitizing employees about the provisions of the Act and forming a gender-sensitive workplace.',
                    })}
                  </p>
                </div>
              </div>
            </div>

            {/* 11. Annual Report (Full Width) */}
            <div className="md:col-span-12 bg-white rounded-2xl border border-pink-100/90 shadow-[0_2px_10px_-3px_rgba(230,0,103,0.05)] hover:shadow-[0_4px_16px_-3px_rgba(230,0,103,0.1)] transition-all p-4 sm:p-4.5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center shrink-0 text-[#e60067] mt-0.5">
                  <BookOpen className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif font-bold text-[#e60067] text-base sm:text-lg mb-1.5">
                    {t('poshActPage.cards.annualReport.title', { defaultValue: 'Annual Report' })}
                  </h3>
                  <p className="text-slate-700 text-xs sm:text-[13.5px] lg:text-[14px] leading-relaxed font-medium mb-2">
                    {t('poshActPage.cards.annualReport.desc', {
                      defaultValue:
                        "The ICC is required to prepare an annual report with details of the number of cases filed and their disposal, which must be included in the employer's annual report to the respective state government.",
                    })}
                  </p>
                  <div className="p-2.5 bg-pink-50/80 rounded-xl text-xs sm:text-[13.5px] text-[#102849] font-semibold border border-pink-100">
                    {t('poshActPage.cards.annualReport.highlight', {
                      defaultValue: 'The PoSH Act, 2013, represents a crucial step towards safeguarding women in the workplace.',
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 2: SHe-BOX (Sexual Harassment electronic Box) */}
        {/* ========================================================= */}
        <section id="section-she-box" className="scroll-mt-20 pt-2">
          {/* Section Header */}
          <div className="mb-4 text-center sm:text-left">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[28px] font-bold text-[#102849] tracking-tight">
              {t('poshActPage.shebox.heading', { defaultValue: 'SHe- BOX' })}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#e60067] to-[#824497] rounded-full mt-2 mx-auto sm:mx-0"></div>
          </div>

          {/* UPER: SHe-Box Image on Top (Showcase Card) */}
          <div className="w-full max-w-[620px] mx-auto mb-5">
            <div className="bg-white rounded-2xl border border-pink-100 shadow-[0_4px_18px_-4px_rgba(230,0,103,0.08)] overflow-hidden">
              <div className="p-2 sm:p-2.5 bg-gradient-to-b from-pink-50/50 to-white flex justify-center">
                <img
                  src={sheboxImage}
                  alt={t('poshActPage.shebox.imageAlt', { defaultValue: 'SHe-Box Sexual Harassment Complaints Portal' })}
                  className="w-full h-auto max-h-[320px] object-cover sm:object-fill rounded-xl border border-pink-100/90 shadow-2xs"
                />
              </div>
            </div>
          </div>

          {/* SHe-Box Intro Below Image */}
          <div className="mb-5">
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed max-w-4xl font-medium">
              {t('poshActPage.shebox.intro', {
                defaultValue:
                  'SHe-Box (Sexual Harassment electronic Box) is an initiative by the Ministry of Women & Child Development, Government of India, providing a single-window platform for women to report workplace sexual harassment. It caters to women across all sectors organized or unorganized, public or private.',
              })}
            </p>
          </div>

          {/* Steps to File a Complaint on SHe-Box */}
          <div className="mb-7">
            <div className="flex items-center gap-2 mb-3">
              <FileCheck className="w-5 h-5 text-[#e60067]" />
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#102849]">
                {t('poshActPage.shebox.stepsHeading', { defaultValue: 'Steps to File a Complaint on SHe-Box' })}
              </h3>
            </div>

            <div className="space-y-3 sm:space-y-3.5">
              {sheboxSteps.map((step) => (
                <div
                  key={step.num}
                  className="bg-white rounded-2xl border border-pink-100/90 shadow-[0_2px_10px_-3px_rgba(230,0,103,0.05)] hover:shadow-[0_4px_16px_-3px_rgba(230,0,103,0.1)] transition-all p-3.5 sm:p-4"
                >
                  <h4 className="font-bold text-[#102849] text-sm sm:text-[15px] mb-1">
                    {step.num}. {step.title}
                  </h4>
                  <p className="text-slate-700 text-xs sm:text-[13.5px] font-medium leading-snug mb-1.5">
                    {step.desc}{' '}
                    {step.link && (
                      <a
                        href={step.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-[#e60067] hover:underline inline-flex items-center gap-1"
                      >
                        {step.link}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </p>

                  {step.subPoints && step.subPoints.length > 0 && (
                    <div className="space-y-1.5 mt-2">
                      {step.subPoints.map((sub, sIdx) => {
                        if (typeof sub === 'string' && sub.includes('https://shebox.wcd.gov.in')) {
                          const parts = sub.split('https://shebox.wcd.gov.in')
                          return (
                            <div
                              key={sIdx}
                              className="text-xs sm:text-[13px] text-slate-700 font-medium leading-relaxed"
                            >
                              {parts[0]}
                              <a
                                href="https://shebox.wcd.gov.in"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-bold text-[#e60067] hover:underline inline-flex items-center gap-1"
                              >
                                https://shebox.wcd.gov.in
                                <ExternalLink className="w-3 h-3" />
                              </a>
                              {parts[1]}
                            </div>
                          )
                        }
                        return (
                          <div
                            key={sIdx}
                            className="text-xs sm:text-[13px] text-slate-700 font-medium leading-relaxed"
                          >
                            {sub}
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 4 Crucial Features & Provisions */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
              {/* Confidentiality */}
              <div className="bg-white rounded-2xl border border-pink-100 p-3.5 sm:p-4 shadow-xs">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center text-[#e60067] mb-2">
                  <Lock className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
                <h4 className="font-serif font-bold text-[#102849] text-sm sm:text-base mb-1">
                  {t('poshActPage.shebox.features.confidentiality.title', { defaultValue: 'Confidentiality' })}
                </h4>
                <p className="text-slate-700 text-xs sm:text-[13px] font-medium leading-relaxed">
                  {t('poshActPage.shebox.features.confidentiality.desc', {
                    defaultValue: 'All complaints are handled with strict confidentiality.',
                  })}
                </p>
              </div>

              {/* Jurisdiction */}
              <div className="bg-white rounded-2xl border border-pink-100 p-3.5 sm:p-4 shadow-xs">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center text-[#e60067] mb-2">
                  <Building2 className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
                <h4 className="font-serif font-bold text-[#102849] text-sm sm:text-base mb-1">
                  {t('poshActPage.shebox.features.jurisdiction.title', { defaultValue: 'Jurisdiction' })}
                </h4>
                <p className="text-slate-700 text-xs sm:text-[13px] font-medium leading-relaxed">
                  {t('poshActPage.shebox.features.jurisdiction.desc', {
                    defaultValue:
                      'Complaints are forwarded to the appropriate Internal Committee (IC) or Local Committee (LC) based on your workplace.',
                  })}
                </p>
              </div>

              {/* Resolution Timeline */}
              <div className="bg-white rounded-2xl border border-pink-100 p-3.5 sm:p-4 shadow-xs">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center text-[#e60067] mb-2">
                  <Clock className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
                <h4 className="font-serif font-bold text-[#102849] text-sm sm:text-base mb-1">
                  {t('poshActPage.shebox.features.timeline.title', { defaultValue: 'Resolution Timeline' })}
                </h4>
                <p className="text-slate-700 text-xs sm:text-[13px] font-medium leading-relaxed">
                  {t('poshActPage.shebox.features.timeline.desc', {
                    defaultValue:
                      'As per the Sexual Harassment of Women at Workplace Act, 2013, complaints should be resolved within 90 days.',
                  })}
                </p>
              </div>

              {/* Mandatory IC Registration */}
              <div className="bg-white rounded-2xl border border-pink-100 p-3.5 sm:p-4 shadow-xs">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center text-[#e60067] mb-2">
                  <Shield className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
                <h4 className="font-serif font-bold text-[#102849] text-sm sm:text-base mb-1">
                  {t('poshActPage.shebox.features.mandatory.title', { defaultValue: 'Mandatory IC Registration' })}
                </h4>
                <p className="text-slate-700 text-xs sm:text-[13px] font-medium leading-relaxed">
                  {t('poshActPage.shebox.features.mandatory.desc', {
                    defaultValue:
                      'In Uttar Pradesh, all organizations with 10 or more employees are required to establish Internal Committees and register them on the SHe-Box portal.',
                  })}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Phone Banner */}
      <div>
        <PhoneBanner />
      </div>
    </div>
  )
}

export default PoshAct
