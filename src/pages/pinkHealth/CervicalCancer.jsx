import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  AlertTriangle,
  CheckCircle2,
  Info,
  XCircle,
} from 'lucide-react'
import BannerSlider from '../../components/common/BannerSlider'
import PhoneBanner from '../../components/common/PhoneBanner'

import cervicalBanner from '../../assets/pinkhealths/Cervical.jpg'
import c1 from '../../assets/pinkhealths/c1.jpg'
import c2 from '../../assets/pinkhealths/c2.png'
import c3 from '../../assets/pinkhealths/c3.jpg'
import c4 from '../../assets/pinkhealths/c4.jpg'
import c5 from '../../assets/pinkhealths/c5.jpg'
import c6 from '../../assets/pinkhealths/c6.jpg'

const defaultSymptoms = [
  'Involuntary weight loss',
  'Fatigue or tiredness',
  'Abnormal bleeding after intercourse / between periods',
  'Lower back pain',
  'Pelvic pain / discomfort',
  'Bloody or foul smelling vaginal discharge',
  'Very heavy periods',
  'Pain while urinating',
]

const defaultCausesAndRisks = [
  'Persistent HPV infection (types 16 & 18)',
  'Smoking',
  'Weakened immune system',
  'Multiple sexual partners',
  'Long-term oral contraceptive use',
  'Chlamydia (STIs)',
  'Poverty / Low socioeconomic status',
  'Family history',
  'Not getting regular Pap tests – begin testing at age 21',
]

const defaultTransmissionModes = [
  {
    title: '1. Sexual Transmission',
    points: [
      'HPV is transmitted through sexual contact.',
      'A person with HPV can pass the infection even without symptoms.',
    ],
  },
  {
    title: '2. Non-Sexual Transmission',
    points: [
      'Skin-to-skin contact other than sexual activity.',
      'HPV can be transmitted through fingers or contaminated surfaces.',
      'Warts can spread infection if touched and hands are not washed.',
    ],
  },
  {
    title: '3. Vertical Transmission',
    points: [
      'Through amniotic fluid, placenta, or during natural birth.',
      'HPV can be passed from a birthing person to their baby.',
    ],
  },
]

const defaultTestsList = [
  { name: 'Pap Smear', desc: 'Detects precancerous or cancerous cells' },
  { name: 'HPV Test', desc: 'Identifies high-risk HPV types' },
  { name: 'Colposcopy', desc: 'Further examination if abnormalities are found' },
]

const defaultRecommendations = [
  { age: 'Women 21–29', freq: 'Pap Smear every 3 years' },
  { age: 'Women 30–65', freq: 'Pap Smear + HPV Test every 5 years' },
]

const defaultPreventionList = [
  'HPV Vaccination (e.g., Cervavac, Gardasil)',
  'Regular Screening (Pap Smear, HPV Test)',
  'Safe sexual practices',
  'Smoking cessation',
]

const defaultAvailableVaccines = [
  { name: 'Cervavac', desc: 'India’s indigenous, cost-effective vaccine' },
  { name: 'Gardasil & Gardasil 9', desc: 'Protect against HPV types 6, 11, 16, 18' },
]

const defaultHighlights = [
  'Affordable & accessible',
  'Strong immunity against high-risk HPV',
  'Suitable for girls & women aged 9–26',
]

const defaultDosesGroup1 = [
  'First – (as elected date)',
  'Second – (6 months of first dose)',
]

const defaultDosesGroup2 = [
  'First – (as elected date)',
  'Second – (2 months of first dose)',
  'Third – (6 months)',
]

const defaultMythsList = [
  {
    myth: 'HPV vaccines promote sexual activity.',
    reality: 'They only protect against cancer-causing HPV strains.',
  },
  {
    myth: 'Only sexually active women need the vaccine.',
    reality: 'Most effective before HPV exposure.',
  },
  {
    myth: 'Vaccines are unsafe.',
    reality: 'Rigorously tested and proven safe.',
  },
]

const defaultBenefits = [
  'Prevents most cases of cervical cancer',
  'Reduces healthcare costs',
  'Provides long-term immunity',
]

const defaultSideEffects = [
  'Pain at injection site',
  'Fever or fatigue',
  'Dizziness or nausea (rare)',
]

function CervicalCancer() {
  const { t } = useTranslation()

  const rawSymptoms = t('cervicalCancerPage.symptoms.items', { returnObjects: true, defaultValue: defaultSymptoms })
  const symptoms = Array.isArray(rawSymptoms) ? rawSymptoms : defaultSymptoms

  const rawCauses = t('cervicalCancerPage.causes.items', { returnObjects: true, defaultValue: defaultCausesAndRisks })
  const causesAndRisks = Array.isArray(rawCauses) ? rawCauses : defaultCausesAndRisks

  const rawTransmission = t('cervicalCancerPage.transmission.modes', { returnObjects: true, defaultValue: defaultTransmissionModes })
  const transmissionModes = Array.isArray(rawTransmission) ? rawTransmission : defaultTransmissionModes

  const rawTestsList = t('cervicalCancerPage.tests.testList', { returnObjects: true, defaultValue: defaultTestsList })
  const testsList = Array.isArray(rawTestsList) ? rawTestsList : defaultTestsList

  const rawRecs = t('cervicalCancerPage.tests.recommendations', { returnObjects: true, defaultValue: defaultRecommendations })
  const recommendations = Array.isArray(rawRecs) ? rawRecs : defaultRecommendations

  const rawPrevention = t('cervicalCancerPage.prevention.items', { returnObjects: true, defaultValue: defaultPreventionList })
  const preventionList = Array.isArray(rawPrevention) ? rawPrevention : defaultPreventionList

  const rawAvailable = t('cervicalCancerPage.vaccines.availableList', { returnObjects: true, defaultValue: defaultAvailableVaccines })
  const availableVaccines = Array.isArray(rawAvailable) ? rawAvailable : defaultAvailableVaccines

  const rawHighlights = t('cervicalCancerPage.vaccines.highlights', { returnObjects: true, defaultValue: defaultHighlights })
  const highlights = Array.isArray(rawHighlights) ? rawHighlights : defaultHighlights

  const rawDoses1 = t('cervicalCancerPage.vaccines.group1.doses', { returnObjects: true, defaultValue: defaultDosesGroup1 })
  const dosesGroup1 = Array.isArray(rawDoses1) ? rawDoses1 : defaultDosesGroup1

  const rawDoses2 = t('cervicalCancerPage.vaccines.group2.doses', { returnObjects: true, defaultValue: defaultDosesGroup2 })
  const dosesGroup2 = Array.isArray(rawDoses2) ? rawDoses2 : defaultDosesGroup2

  const rawMyths = t('cervicalCancerPage.myths.items', { returnObjects: true, defaultValue: defaultMythsList })
  const mythsList = Array.isArray(rawMyths) ? rawMyths : defaultMythsList

  const rawBenefits = t('cervicalCancerPage.benefitsSideEffects.benefits', { returnObjects: true, defaultValue: defaultBenefits })
  const benefits = Array.isArray(rawBenefits) ? rawBenefits : defaultBenefits

  const rawSideEffects = t('cervicalCancerPage.benefitsSideEffects.sideEffects', { returnObjects: true, defaultValue: defaultSideEffects })
  const sideEffects = Array.isArray(rawSideEffects) ? rawSideEffects : defaultSideEffects

  return (
    <div className="w-full bg-[#FFF9FA] min-h-screen flex flex-col justify-between">
      {/* Top Banner Section */}
      <BannerSlider
        images={[cervicalBanner]}
        autoPlay={false}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full space-y-8 sm:space-y-12">
        {/* 1. What is Cervical Cancer? (Paired with c1.jpg) */}
        <section className="bg-white rounded-2xl sm:rounded-3xl border border-pink-100 shadow-[0_2px_14px_-3px_rgba(230,0,103,0.06)] p-5 sm:p-7 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#102849] leading-tight">
                {t('cervicalCancerPage.whatIs.title', { defaultValue: 'What is Cervical Cancer?' })}
              </h2>

              <ul className="space-y-3.5 text-xs sm:text-[14px] text-[#102849] font-medium leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#e60067] mt-2 shrink-0" />
                  <span>
                    {t('cervicalCancerPage.whatIs.p1', {
                      defaultValue:
                        'Cervical cancer occurs in the cells of the cervix, the lower part of the uterus. In India, 200 women die each day due to cervical cancer.',
                    })}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#e60067] mt-2 shrink-0" />
                  <span>
                    {t('cervicalCancerPage.whatIs.p2', {
                      defaultValue:
                        'It is primarily caused by persistent infection with high-risk types of HPV.',
                    })}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#e60067] mt-2 shrink-0" />
                  <span>
                    {t('cervicalCancerPage.whatIs.p3', {
                      defaultValue:
                        'Early detection and vaccination can prevent most cases.',
                    })}
                  </span>
                </li>
              </ul>
            </div>

            {/* Right Image (c1.jpg) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[420px] bg-white rounded-2xl border border-pink-100 p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={c1}
                  alt="Anatomy of Cervix and Uterus"
                  className="w-full h-auto max-h-[300px] object-contain mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 2. Signs and Symptoms (Paired with c2.png) */}
        <section className="bg-white rounded-2xl sm:rounded-3xl border border-pink-100 shadow-[0_2px_14px_-3px_rgba(230,0,103,0.06)] p-5 sm:p-7 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Image (c2.png) */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
              <div className="w-full max-w-[440px] bg-white rounded-2xl border border-pink-100 p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={c2}
                  alt="Cervical Cancer Signs & Symptoms"
                  className="w-full h-auto max-h-[340px] object-contain mx-auto rounded-xl"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#102849] leading-tight">
                {t('cervicalCancerPage.symptoms.title', { defaultValue: 'Signs and Symptoms' })}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {symptoms.map((symptom, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-pink-50/60 border border-pink-100/90 flex items-start gap-2.5 text-xs sm:text-[13px] font-medium text-[#102849]"
                  >
                    <AlertTriangle className="w-4 h-4 text-[#e60067] shrink-0 mt-0.5" />
                    <span>{symptom}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. Causes & Risk Factors (Paired with c3.jpg) */}
        <section className="bg-white rounded-2xl sm:rounded-3xl border border-pink-100 shadow-[0_2px_14px_-3px_rgba(230,0,103,0.06)] p-5 sm:p-7 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#102849] leading-tight">
                {t('cervicalCancerPage.causes.title', { defaultValue: 'Causes & Risk Factors' })}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {causesAndRisks.map((cause, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/80 flex items-start gap-2.5 text-xs sm:text-[13px] font-medium text-[#102849]"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#e60067] mt-1.5 shrink-0" />
                    <span>{cause}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image (c3.jpg) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[420px] bg-white rounded-2xl border border-pink-100 p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={c3}
                  alt="Risk Factors of Cervical Cancer"
                  className="w-full h-auto max-h-[320px] object-contain mx-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 4. How HPV Infection Can Occur (Paired with c4.jpg) */}
        <section className="bg-white rounded-2xl sm:rounded-3xl border border-pink-100 shadow-[0_2px_14px_-3px_rgba(230,0,103,0.06)] p-5 sm:p-7 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Image (c4.jpg) */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
              <div className="w-full max-w-[440px] bg-white rounded-2xl border border-pink-100 p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={c4}
                  alt="Human Papillomavirus HPV Diagram"
                  className="w-full h-auto max-h-[340px] object-contain mx-auto rounded-xl"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#102849] leading-tight">
                {t('cervicalCancerPage.transmission.title', { defaultValue: 'How HPV Infection Can Occur' })}
              </h2>

              <div className="space-y-3">
                {transmissionModes.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-pink-50/50 border border-pink-100"
                  >
                    <h3 className="font-bold text-[#e60067] text-xs sm:text-[13.5px] mb-1.5">
                      {item.title}
                    </h3>
                    <ul className="space-y-1 text-xs sm:text-[13px] text-[#102849] font-medium">
                      {item.points &&
                        item.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2">
                            <span className="text-[#e60067] font-bold mt-0.5">•</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}

                {/* Prevalence & Immunity Note Card */}
                <div className="p-4 rounded-xl bg-pink-50/50 border border-pink-100">
                  <p className="text-xs sm:text-[13px] text-[#102849] font-medium leading-relaxed">
                    {t('cervicalCancerPage.transmission.note', {
                      defaultValue:
                        'HPV is one of the most prevalent sexually transmitted infections. Vaccines induce stronger immunity than natural infection. It is found that 8 in 10 women may contract HPV at some point in their lives.',
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Tests & Screening + Ways to Prevent HPV Infection */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tests & Screening Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-pink-100 shadow-[0_2px_14px_-3px_rgba(230,0,103,0.06)] p-5 sm:p-7 flex flex-col justify-between">
            <div className="space-y-5">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#102849]">
                {t('cervicalCancerPage.tests.title', { defaultValue: 'Tests & Screening' })}
              </h2>

              {/* Tests */}
              <div>
                <h3 className="font-bold text-sm text-[#e60067] mb-2.5">
                  {t('cervicalCancerPage.tests.testsHeading', { defaultValue: 'Tests' })}
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-[13.5px] text-[#102849] font-medium">
                  {testsList.map((test, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e60067] mt-2 shrink-0" />
                      <span>
                        <strong>{test.name}:</strong> {test.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Screening Recommendations */}
              <div className="pt-2">
                <h3 className="font-bold text-sm text-[#e60067] mb-2.5">
                  {t('cervicalCancerPage.tests.screeningHeading', {
                    defaultValue: 'Screening Recommendations',
                  })}
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-[13.5px] text-[#102849] font-medium">
                  {recommendations.map((rec, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e60067] mt-2 shrink-0" />
                      <span>
                        <strong>{rec.age}:</strong> {rec.freq}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Ways to Prevent HPV Infection Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-pink-100 shadow-[0_2px_14px_-3px_rgba(230,0,103,0.06)] p-5 sm:p-7 flex flex-col justify-start">
            <div className="space-y-5">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#102849]">
                {t('cervicalCancerPage.prevention.title', {
                  defaultValue: 'Ways to Prevent HPV Infection',
                })}
              </h2>

              <ul className="space-y-3 text-xs sm:text-[13.5px] text-[#102849] font-medium">
                {preventionList.map((item, idx) => (
                  <li
                    key={idx}
                    className="p-3.5 rounded-xl bg-pink-50/60 border border-pink-100 flex items-start gap-2.5"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#e60067] mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 6. Vaccines for Prevention & Cervavac Doses (Paired with c5.jpg) */}
        <section className="bg-white rounded-2xl sm:rounded-3xl border border-pink-100 shadow-[0_2px_14px_-3px_rgba(230,0,103,0.06)] p-5 sm:p-7 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#102849] leading-tight">
                {t('cervicalCancerPage.vaccines.title', { defaultValue: 'Vaccines for Prevention' })}
              </h2>

              {/* Available HPV Vaccines */}
              <div>
                <h3 className="font-bold text-sm text-[#e60067] mb-2">
                  {t('cervicalCancerPage.vaccines.availableHeading', {
                    defaultValue: 'Available HPV Vaccines',
                  })}
                </h3>
                <ul className="space-y-2 text-xs sm:text-[13.5px] text-[#102849] font-medium">
                  {availableVaccines.map((vac, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e60067] mt-2 shrink-0" />
                      <span>
                        <strong>{vac.name}:</strong> {vac.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cervavac Highlights */}
              <div className="pt-1">
                <h3 className="font-bold text-sm text-[#e60067] mb-2">
                  {t('cervicalCancerPage.vaccines.highlightsHeading', {
                    defaultValue: 'Cervavac Highlights',
                  })}
                </h3>
                <ul className="space-y-1.5 text-xs sm:text-[13.5px] text-[#102849] font-medium">
                  {highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e60067] mt-2 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Doses Recommended for Cervavac */}
              <div className="pt-2">
                <h3 className="font-bold text-sm text-[#e60067] mb-2.5">
                  {t('cervicalCancerPage.vaccines.dosesHeading', {
                    defaultValue: 'Doses Recommended for Cervavac',
                  })}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-pink-50/60 border border-pink-100">
                    <span className="font-bold text-xs text-[#e60067] uppercase tracking-wider block mb-1.5">
                      {t('cervicalCancerPage.vaccines.group1.title', {
                        defaultValue: 'FOR GIRLS 9–14 YEARS',
                      })}
                    </span>
                    <p className="text-xs font-semibold text-[#102849] mb-1">
                      {t('cervicalCancerPage.vaccines.group1.subtitle', {
                        defaultValue: 'Two doses',
                      })}
                    </p>
                    <ul className="text-xs text-slate-700 space-y-1 font-medium">
                      {dosesGroup1.map((d, idx) => (
                        <li key={idx}>• {d}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-xl bg-pink-50/60 border border-pink-100">
                    <span className="font-bold text-xs text-[#e60067] uppercase tracking-wider block mb-1.5">
                      {t('cervicalCancerPage.vaccines.group2.title', {
                        defaultValue: 'FOR GIRLS 15–26 YEARS',
                      })}
                    </span>
                    <p className="text-xs font-semibold text-[#102849] mb-1">
                      {t('cervicalCancerPage.vaccines.group2.subtitle', {
                        defaultValue: 'Three doses',
                      })}
                    </p>
                    <ul className="text-xs text-slate-700 space-y-1 font-medium">
                      {dosesGroup2.map((d, idx) => (
                        <li key={idx}>• {d}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image (c5.jpg) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[420px] bg-white rounded-2xl border border-pink-100 p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={c5}
                  alt="Serum Institute Cervavac Vaccine"
                  className="w-full h-auto max-h-[320px] object-contain mx-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 7. Myths About Vaccination & Reality (Paired with c6.jpg) */}
        <section className="bg-white rounded-2xl sm:rounded-3xl border border-pink-100 shadow-[0_2px_14px_-3px_rgba(230,0,103,0.06)] p-5 sm:p-7 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Image (c6.jpg) */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
              <div className="w-full max-w-[420px] bg-white rounded-2xl border border-pink-100 p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={c6}
                  alt="WHO HPV Vaccination Guidance"
                  className="w-full h-auto max-h-[360px] object-contain mx-auto rounded-xl"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#102849] leading-tight">
                {t('cervicalCancerPage.myths.title', {
                  defaultValue: 'Myths About Vaccination & Reality',
                })}
              </h2>

              <div className="space-y-3 pt-1">
                {mythsList.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col gap-2"
                  >
                    <div className="flex items-start gap-2 text-rose-700 font-semibold text-xs sm:text-[13px]">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>{item.myth}</span>
                    </div>
                    <div className="flex items-start gap-2 text-emerald-800 font-medium text-xs sm:text-[13px] bg-emerald-50/70 p-2.5 rounded-lg border border-emerald-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item.reality}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 8. Benefits & Side Effects of Vaccine */}
        <section className="bg-white rounded-2xl sm:rounded-3xl border border-pink-100 shadow-[0_2px_14px_-3px_rgba(230,0,103,0.06)] p-5 sm:p-7 lg:p-8 space-y-6">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#102849] leading-tight">
            {t('cervicalCancerPage.benefitsSideEffects.title', {
              defaultValue: 'Benefits & Side Effects of Vaccine',
            })}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Benefits Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100">
              <h3 className="font-bold text-base text-emerald-800 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                {t('cervicalCancerPage.benefitsSideEffects.benefitsHeading', {
                  defaultValue: 'Benefits',
                })}
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-[13.5px] text-[#102849] font-medium">
                {benefits.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mild Side Effects Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/50 border border-amber-100">
              <h3 className="font-bold text-base text-amber-800 mb-3 flex items-center gap-2">
                <Info className="w-5 h-5 text-amber-600" />
                {t('cervicalCancerPage.benefitsSideEffects.sideEffectsHeading', {
                  defaultValue: 'Mild Side Effects',
                })}
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-[13.5px] text-[#102849] font-medium">
                {sideEffects.map((s, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Stay Informed, Stay Protected! Heading */}
        <div className="text-center py-3 sm:py-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#102849]">
            {t('cervicalCancerPage.cta', { defaultValue: 'Stay Informed, Stay Protected!' })}
          </h2>
        </div>
      </main>

      {/* Bottom Phone Banner */}
      <div>
        <PhoneBanner />
      </div>
    </div>
  )
}

export default CervicalCancer



