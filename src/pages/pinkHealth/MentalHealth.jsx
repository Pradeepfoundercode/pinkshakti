import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { BookOpen, Smile, Activity, Lightbulb } from 'lucide-react'
import BannerSlider from '../../components/common/BannerSlider'
import mentalBanner from '../../assets/pinkhealths/Mental.jpg'
import PhoneBanner from '../../components/common/PhoneBanner'

const defaultCard4Items = [
  {
    title: 'Seeking Professional Help:',
    desc: 'Therapists, counselors, and psychiatrists can provide valuable support and treatment.',
  },
  {
    title: 'Building a Support System:',
    desc: 'Friends, family, and support groups can offer emotional support and understanding.',
  },
  {
    title: 'Healthy Lifestyle Choices:',
    desc: 'Regular exercise, a balanced diet, adequate sleep, and avoiding harmful substances can improve mental well-being.',
  },
  {
    title: 'Stress Management:',
    desc: 'Techniques like mindfulness, meditation, and relaxation exercises can help manage stress.',
  },
  {
    title: 'Engaging in Activities:',
    desc: 'Hobbies and activities that bring joy and a sense of accomplishment can enhance mental health.',
  },
]

function MentalHealth() {
  const { t } = useTranslation()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const rawCard4Items = t('mentalHealthPage.card4.items', {
    returnObjects: true,
    defaultValue: defaultCard4Items,
  })
  const card4Items = Array.isArray(rawCard4Items) ? rawCard4Items : defaultCard4Items

  return (
    <div className="w-full bg-transparent min-h-screen flex flex-col justify-between">
      {/* Top Banner Section */}
      <BannerSlider
        images={[mentalBanner]}
        autoPlay={false}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 w-full">
        {/* Header Title Section */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#102849]">
            <span className="text-[#e60067]">
              {t('mentalHealthPage.titlePink', { defaultValue: 'Mental' })}
            </span>{' '}
            {t('mentalHealthPage.titleNavy', { defaultValue: 'Health' })}
          </h1>
        </div>

        {/* Vertical Stack of Cards */}
        <div className="flex flex-col gap-4 sm:gap-5">
          {/* Card 1: What do you mean by mental health? */}
          <div className="bg-white rounded-2xl border border-pink-100/90 shadow-[0_2px_12px_-3px_rgba(230,0,103,0.06)] hover:shadow-[0_4px_16px_-3px_rgba(230,0,103,0.1)] transition-all duration-300 p-5 sm:p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center shrink-0 mt-0.5">
              <BookOpen className="w-5 h-5 text-[#e60067]" />
            </div>
            <div className="flex-1">
              <h3 className="font-serif font-bold text-[#e60067] text-[17px] sm:text-[18.5px] leading-tight mb-2">
                {t('mentalHealthPage.card1.title', {
                  defaultValue: 'What do you mean by mental health?',
                })}
              </h3>
              <p className="text-[#102849] text-xs sm:text-[13.5px] font-medium leading-relaxed">
                {t('mentalHealthPage.card1.desc', {
                  defaultValue:
                    'Mental health refers to our emotional, psychological, and social well-being. It affects how we think, feel, and act, and it also influences how we handle stress, relate to others, and make decisions.',
                })}
              </p>
            </div>
          </div>

          {/* Card 2: What is Good Mental Health? */}
          <div className="bg-white rounded-2xl border border-pink-100/90 shadow-[0_2px_12px_-3px_rgba(230,0,103,0.06)] hover:shadow-[0_4px_16px_-3px_rgba(230,0,103,0.1)] transition-all duration-300 p-5 sm:p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center shrink-0 mt-0.5">
              <Smile className="w-5 h-5 text-[#e60067]" />
            </div>
            <div className="flex-1">
              <h3 className="font-serif font-bold text-[#e60067] text-[17px] sm:text-[18.5px] leading-tight mb-2">
                {t('mentalHealthPage.card2.title', {
                  defaultValue: 'What is Good Mental Health?',
                })}
              </h3>
              <p className="text-[#102849] text-xs sm:text-[13.5px] font-medium leading-relaxed">
                {t('mentalHealthPage.card2.desc', {
                  defaultValue:
                    "Good mental health is not just the absence of mental illness but also includes the presence of positive characteristics such as the ability to cope with life's challenges, maintain fulfilling relationships, and adapt to change.",
                })}
              </p>
            </div>
          </div>

          {/* Card 3: What affects your Mental Health? */}
          <div className="bg-white rounded-2xl border border-pink-100/90 shadow-[0_2px_12px_-3px_rgba(230,0,103,0.06)] hover:shadow-[0_4px_16px_-3px_rgba(230,0,103,0.1)] transition-all duration-300 p-5 sm:p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center shrink-0 mt-0.5">
              <Activity className="w-5 h-5 text-[#e60067]" />
            </div>
            <div className="flex-1">
              <h3 className="font-serif font-bold text-[#e60067] text-[17px] sm:text-[18.5px] leading-tight mb-2">
                {t('mentalHealthPage.card3.title', {
                  defaultValue: 'What affects your Mental Health?',
                })}
              </h3>
              <p className="text-[#102849] text-xs sm:text-[13.5px] font-medium leading-relaxed">
                {t('mentalHealthPage.card3.desc', {
                  defaultValue:
                    'Factors that contribute to mental health include genetics, life experiences (such as trauma or abuse), and family history of mental health problems. Mental health conditions, such as depression, anxiety disorders, bipolar disorder, and schizophrenia, are common and can affect anyone, regardless of age, gender, or background.',
                })}
              </p>
            </div>
          </div>

          {/* Card 4: How to deal with Mental Health issues? */}
          <div className="bg-white rounded-2xl border border-pink-100/90 shadow-[0_2px_12px_-3px_rgba(230,0,103,0.06)] hover:shadow-[0_4px_16px_-3px_rgba(230,0,103,0.1)] transition-all duration-300 p-5 sm:p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center shrink-0 mt-0.5">
              <Lightbulb className="w-5 h-5 text-[#e60067]" />
            </div>
            <div className="flex-1">
              <h3 className="font-serif font-bold text-[#e60067] text-[17px] sm:text-[18.5px] leading-tight mb-2.5">
                {t('mentalHealthPage.card4.title', {
                  defaultValue: 'How to deal with Mental Health issues?',
                })}
              </h3>
              <ul className="space-y-2 text-xs sm:text-[13.5px] text-[#102849] font-medium leading-relaxed">
                {card4Items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#e60067] font-bold text-sm leading-none mt-1">•</span>
                    <span>
                      <strong className="text-[#102849]">{item.title} </strong>
                      {item.desc}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-3.5 p-3.5 bg-pink-50/70 rounded-xl border border-pink-100 text-xs sm:text-[13px] text-[#102849] font-medium leading-relaxed">
                {t('mentalHealthPage.card4.footer', {
                  defaultValue:
                    'Reducing stigma around mental health and promoting open conversations are crucial steps towards a healthier society.',
                })}
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

export default MentalHealth
