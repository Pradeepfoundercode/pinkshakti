import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  HeartPulse,
  AlertCircle,
  Sparkles,
  Apple,
  ShieldCheck,
  HelpCircle,
  AlertTriangle,
  Stethoscope,
  CheckCircle2,
  XCircle,
} from 'lucide-react'
import BannerSlider from '../../components/common/BannerSlider'
import menstrualBanner from '../../assets/pinkhealths/Menstrual 1.png'
import PhoneBanner from '../../components/common/PhoneBanner'

const defaultMyths = [
  {
    myth: "A menstruating woman shouldn’t be touched.",
    fact: "It is against human rights and reflects discrimination. One should never believe in this evil myth.",
  },
  {
    myth: "You shouldn’t enter the kitchen on your period.",
    fact: "It’s all about cleanliness and nothing else.",
  },
  {
    myth: "Any contact with a man can gets a woman pregnant.",
    fact: "Proper sexual intercourse between male and female can only make a woman pregnant. So, never believe this myth.",
  },
  {
    myth: "Women shouldn’t wash their hair while on their period.",
    fact: "Hygiene is most important during periods.",
  },
  {
    myth: "Don't apply kajal during your period.",
    fact: "If you can apply kajal on other days then why not during periods.",
  },
  {
    myth: "Don't consume curd during period.",
    fact: "Calcium is necessary for body but avoid taking curd at night or cold curd.",
  },
  {
    myth: "Stay out and don't sleep on beds.",
    fact: "You should think of every possible comfort during your periods to carry your daily activities smoothly.",
  },
  {
    myth: "Touching the pickle during period would spoil it.",
    fact: "It is also again about cleanliness. Touching it might give you craving to eat the spicy pickle but it won’t spoil it unless you touch it with dry and clean hands. Avoid consuming spicy foods during periods as it may cause acidity.",
  },
]

const defaultCervicalSymptoms = [
  { label: 'Pain areas:', text: 'in the pelvis.' },
  { label: 'Pain circumstances:', text: 'can occur during sexual intercourse.' },
  { label: 'Menstrual:', text: 'abnormal menstruation, heavy menstruation, irregular menstruation, or spotting.' },
  { label: 'Groin:', text: 'abnormal vaginal bleeding or abnormal vaginal discharge.' },
  { label: 'Also common:', text: 'fatigue, nausea, or weight loss.' },
]

const defaultHpvSymptoms = [
  'Flat lesions or skin injuries.',
  'Small cauliflower-like bumps or tiny stemlike protrusions.',
  'In women, genital warts appear mostly on the vulva but can also occur near the anus, on the cervix or in the vagina.',
]

function MenstrualHealth() {
  const { t } = useTranslation()

  const rawMyths = t('menstrualHealthPage.card6.myths', {
    returnObjects: true,
    defaultValue: defaultMyths,
  })
  const myths = Array.isArray(rawMyths) ? rawMyths : defaultMyths

  const rawCervical = t('menstrualHealthPage.card8.cervicalCancer.symptoms', {
    returnObjects: true,
    defaultValue: defaultCervicalSymptoms,
  })
  const cervicalSymptoms = Array.isArray(rawCervical) ? rawCervical : defaultCervicalSymptoms

  const rawHpv = t('menstrualHealthPage.card8.hpv.symptoms', {
    returnObjects: true,
    defaultValue: defaultHpvSymptoms,
  })
  const hpvSymptoms = Array.isArray(rawHpv) ? rawHpv : defaultHpvSymptoms

  return (
    <div className="w-full bg-[#FFF9FA] min-h-screen flex flex-col justify-between">
      {/* Top Banner Section */}
      <BannerSlider
        images={[menstrualBanner]}
        autoPlay={false}
      />

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 w-full">
        {/* Header Title Section */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#102849]">
            <span className="text-[#e60067]">
              {t('menstrualHealthPage.titlePink', { defaultValue: 'Menstrual' })}
            </span>{' '}
            {t('menstrualHealthPage.titleNavy', { defaultValue: 'Health' })}
          </h1>
        </div>

        {/* Vertical Stack of Cards */}
        <div className="flex flex-col gap-4 sm:gap-5">
          {/* Card 1: What do you mean by Menstrual Health? */}
          <div className="bg-white rounded-2xl border border-pink-100/90 shadow-[0_2px_12px_-3px_rgba(230,0,103,0.06)] hover:shadow-[0_4px_16px_-3px_rgba(230,0,103,0.1)] transition-all duration-300 p-5 sm:p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center shrink-0 mt-0.5">
              <HeartPulse className="w-5 h-5 text-[#e60067]" />
            </div>
            <div className="flex-1">
              <h3 className="font-serif font-bold text-[#e60067] text-[17px] sm:text-[18.5px] leading-tight mb-2">
                {t('menstrualHealthPage.card1.title', {
                  defaultValue: 'What do you mean by Menstrual Health?',
                })}
              </h3>
              <p className="text-[#102849] text-xs sm:text-[13.5px] font-medium leading-relaxed">
                {t('menstrualHealthPage.card1.desc', {
                  defaultValue:
                    'Menstrual health refers to the well-being of women during their menstrual cycle, encompassing physical, emotional, and social aspects. The menstrual cycle typically lasts about 28 days but can vary from 21 to 35 days. It involves hormonal changes that prepare the body for potential pregnancy, with menstruation marking the start of a new cycle.',
                })}
              </p>
            </div>
          </div>

          {/* Card 2: Problems women face */}
          <div className="bg-white rounded-2xl border border-pink-100/90 shadow-[0_2px_12px_-3px_rgba(230,0,103,0.06)] hover:shadow-[0_4px_16px_-3px_rgba(230,0,103,0.1)] transition-all duration-300 p-5 sm:p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center shrink-0 mt-0.5">
              <AlertCircle className="w-5 h-5 text-[#e60067]" />
            </div>
            <div className="flex-1">
              <h3 className="font-serif font-bold text-[#e60067] text-[17px] sm:text-[18.5px] leading-tight mb-2">
                {t('menstrualHealthPage.card2.title', {
                  defaultValue: 'What are the problems women face during Menstrual Cycle:',
                })}
              </h3>
              <p className="text-[#102849] text-xs sm:text-[13.5px] font-medium leading-relaxed">
                {t('menstrualHealthPage.card2.desc', {
                  defaultValue:
                    'Many women experience symptoms such as cramps, bloating, mood swings, lower abdominal pain and fatigue. Some Women face fever, acne, insomnia during the cycle.',
                })}
              </p>
            </div>
          </div>

          {/* Card 3: How to deal with the problems */}
          <div className="bg-white rounded-2xl border border-pink-100/90 shadow-[0_2px_12px_-3px_rgba(230,0,103,0.06)] hover:shadow-[0_4px_16px_-3px_rgba(230,0,103,0.1)] transition-all duration-300 p-5 sm:p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="w-5 h-5 text-[#e60067]" />
            </div>
            <div className="flex-1">
              <h3 className="font-serif font-bold text-[#e60067] text-[17px] sm:text-[18.5px] leading-tight mb-2">
                {t('menstrualHealthPage.card3.title', {
                  defaultValue: 'How to deal with the problems during Menstrual Cycle?',
                })}
              </h3>
              <p className="text-[#102849] text-xs sm:text-[13.5px] font-medium leading-relaxed">
                {t('menstrualHealthPage.card3.desc', {
                  defaultValue:
                    'The problems during Menstrual Cycle often be managed with lifestyle changes. Specific Yoga exercises during Menstrual relieves from Period Cramps as it loosens up the muscles. Using a hot water bottle may also help to decrease the abdominal pain. Consuming mild pain killers and paracetamol also helps in countering the problems during Menstrual Cycle.',
                })}
              </p>
            </div>
          </div>

          {/* Card 4: Diet during Menstrual Cycle */}
          <div className="bg-white rounded-2xl border border-pink-100/90 shadow-[0_2px_12px_-3px_rgba(230,0,103,0.06)] hover:shadow-[0_4px_16px_-3px_rgba(230,0,103,0.1)] transition-all duration-300 p-5 sm:p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center shrink-0 mt-0.5">
              <Apple className="w-5 h-5 text-[#e60067]" />
            </div>
            <div className="flex-1">
              <h3 className="font-serif font-bold text-[#e60067] text-[17px] sm:text-[18.5px] leading-tight mb-2">
                {t('menstrualHealthPage.card4.title', {
                  defaultValue: 'What type of diet one should follow during Menstrual Cycle?',
                })}
              </h3>
              <p className="text-[#102849] text-xs sm:text-[13.5px] font-medium leading-relaxed">
                {t('menstrualHealthPage.card4.desc', {
                  defaultValue:
                    'One should follow healthy diet during Menstrual Cycle such as fruits with high water content such as Water Melon which reduces swelling, bloating and keeps your body hydrated. Intake of large amount of green leafy vegetables helps in balancing the iron levels in the body. Healthy Caffeine substitutes and Green Tea also helps in relaxing the body pain.',
                })}
              </p>
            </div>
          </div>

          {/* Card 5: Menstrual Hygiene */}
          <div className="bg-white rounded-2xl border border-pink-100/90 shadow-[0_2px_12px_-3px_rgba(230,0,103,0.06)] hover:shadow-[0_4px_16px_-3px_rgba(230,0,103,0.1)] transition-all duration-300 p-5 sm:p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5 text-[#e60067]" />
            </div>
            <div className="flex-1">
              <h3 className="font-serif font-bold text-[#e60067] text-[17px] sm:text-[18.5px] leading-tight mb-2">
                {t('menstrualHealthPage.card5.title', {
                  defaultValue: 'What is the importance of Menstrual Hygiene?',
                })}
              </h3>
              <p className="text-[#102849] text-xs sm:text-[13.5px] font-medium leading-relaxed">
                {t('menstrualHealthPage.card5.desc', {
                  defaultValue:
                    'Proper menstrual hygiene management is crucial for preventing infections during periods. This includes using sanitary products like pads, tampons, or menstrual cups and changing them after every 4-5 hours. Taking bath and cleaning private parts with plain water is necessary to keep away the infections. Avoid using Vaginal washes as they destroy the good bacteria which helps in fighting the infections.',
                })}
              </p>
            </div>
          </div>

          {/* Card 6: Myths related to Menstrual Cycle */}
          <div className="bg-white rounded-2xl border border-pink-100/90 shadow-[0_2px_12px_-3px_rgba(230,0,103,0.06)] hover:shadow-[0_4px_16px_-3px_rgba(230,0,103,0.1)] transition-all duration-300 p-5 sm:p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center shrink-0 mt-0.5">
                <HelpCircle className="w-5 h-5 text-[#e60067]" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-[#e60067] text-[17px] sm:text-[18.5px] leading-tight mb-1">
                  {t('menstrualHealthPage.card6.title', {
                    defaultValue: 'What are the myths related to Menstrual Cycle and what should be done?',
                  })}
                </h3>
                <p className="text-xs sm:text-[13px] text-[#102849]/80 font-medium">
                  {t('menstrualHealthPage.card6.subtitle', {
                    defaultValue:
                      'These are the age-old myths which one should not believe but should follow healthy and hygienic practices:',
                  })}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2.5 sm:gap-3 mt-2">
              {myths.map((item, index) => (
                <div
                  key={index}
                  className="bg-pink-50/50 rounded-xl border border-pink-100/80 p-3.5 sm:p-4 hover:bg-pink-50/80 transition-colors"
                >
                  <div className="flex items-start gap-2.5 mb-1">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span className="font-bold text-[#102849] text-xs sm:text-[13.5px]">
                      {item.myth}
                    </span>
                  </div>
                  <div className="pl-6.5 text-xs sm:text-[13px] text-[#102849]/85 font-medium leading-relaxed">
                    {item.fact}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 7: Menstrual disorders due to hormonal imbalance */}
          <div className="bg-white rounded-2xl border border-pink-100/90 shadow-[0_2px_12px_-3px_rgba(230,0,103,0.06)] hover:shadow-[0_4px_16px_-3px_rgba(230,0,103,0.1)] transition-all duration-300 p-5 sm:p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center shrink-0 mt-0.5">
              <AlertTriangle className="w-5 h-5 text-[#e60067]" />
            </div>
            <div className="flex-1">
              <h3 className="font-serif font-bold text-[#e60067] text-[17px] sm:text-[18.5px] leading-tight mb-2">
                {t('menstrualHealthPage.card7.title', {
                  defaultValue:
                    'What menstrual disorders can be caused due to hormonal imbalance and symptoms?',
                })}
              </h3>
              <p className="text-[#102849] text-xs sm:text-[13.5px] font-medium leading-relaxed">
                {t('menstrualHealthPage.card7.desc', {
                  defaultValue:
                    "Hormonal fluctuations can affect mood and physical well-being. It's important to recognize and address these challenges. Women may face menstrual disorders, such as irregular periods, very less bleeding or heavy bleeding (menorrhagia), painful periods (dysmenorrhea), and conditions like polycystic ovary syndrome (PCOS). Often the symptoms for these kinds of disorders are weight gain, insomnia, skin problems, hair fall, excessive and smelly vaginal discharge, excessive body hair, intolerable abdominal pain during periods.",
                })}
              </p>
            </div>
          </div>

          {/* Card 8: Serious diseases that affect Women’s Reproductive Health */}
          <div className="bg-white rounded-2xl border border-pink-100/90 shadow-[0_2px_12px_-3px_rgba(230,0,103,0.06)] hover:shadow-[0_4px_16px_-3px_rgba(230,0,103,0.1)] transition-all duration-300 p-5 sm:p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center shrink-0 mt-0.5">
                <Stethoscope className="w-5 h-5 text-[#e60067]" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-[#e60067] text-[17px] sm:text-[18.5px] leading-tight mb-1">
                  {t('menstrualHealthPage.card8.title', {
                    defaultValue:
                      'What are the serious diseases that affect Women’s Reproductive Health and Symptoms?',
                  })}
                </h3>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:gap-5 mt-3">
              {/* Disease 1: Cervical Cancer */}
              <div className="bg-pink-50/40 rounded-xl border border-pink-100 p-4 sm:p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#e60067]"></span>
                  <h4 className="font-bold text-[#e60067] text-[15px] sm:text-[16px]">
                    {t('menstrualHealthPage.card8.cervicalCancer.title', {
                      defaultValue: 'Cervical Cancer',
                    })}
                  </h4>
                </div>
                <p className="text-xs sm:text-[13px] text-[#102849] font-medium mb-3 leading-relaxed">
                  {t('menstrualHealthPage.card8.cervicalCancer.desc', {
                    defaultValue:
                      'Cervical Cancer is a very serious disease which if not treated timely can affect a woman’s reproductive health.',
                  })}
                </p>

                <div className="mb-3">
                  <h5 className="font-bold text-[#102849] text-xs sm:text-[13px] mb-1.5">
                    {t('menstrualHealthPage.card8.cervicalCancer.symptomsHeading', {
                      defaultValue: 'Symptoms:',
                    })}
                  </h5>
                  <p className="text-xs sm:text-[12.5px] text-[#102849]/80 font-medium mb-2">
                    {t('menstrualHealthPage.card8.cervicalCancer.symptomsSub', {
                      defaultValue:
                        'Sometimes you may have no symptoms, but some woman may experience:',
                    })}
                  </p>
                  <ul className="space-y-1.5 text-xs sm:text-[12.5px] text-[#102849] font-medium">
                    {cervicalSymptoms.map((sym, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#e60067] font-bold">•</span>
                        <span>
                          <strong>{sym.label} </strong>
                          {sym.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-3 p-2.5 bg-white rounded-lg border border-pink-100 flex items-center gap-2 text-xs sm:text-[12.5px] text-[#e60067] font-bold">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-[#e60067]" />
                  <span>
                    {t('menstrualHealthPage.card8.cervicalCancer.footer', {
                      defaultValue:
                        'Vaccination, timely treatment and regular screening and may prevent the complications of Cervical Cancer.',
                    })}
                  </span>
                </div>
              </div>

              {/* Disease 2: HPV Infection */}
              <div className="bg-pink-50/40 rounded-xl border border-pink-100 p-4 sm:p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#e60067]"></span>
                  <h4 className="font-bold text-[#e60067] text-[15px] sm:text-[16px]">
                    {t('menstrualHealthPage.card8.hpv.title', {
                      defaultValue: 'HPV (Human Papilloma Virus) Infection',
                    })}
                  </h4>
                </div>
                <p className="text-xs sm:text-[13px] text-[#102849] font-medium mb-3 leading-relaxed">
                  {t('menstrualHealthPage.card8.hpv.desc', {
                    defaultValue:
                      'HPV (Human Papilloma Virus) Infection is also dangerous if not treated timely.',
                  })}
                </p>

                <div className="mb-3">
                  <h5 className="font-bold text-[#102849] text-xs sm:text-[13px] mb-1.5">
                    {t('menstrualHealthPage.card8.hpv.symptomsHeading', {
                      defaultValue: 'Symptoms:',
                    })}
                  </h5>
                  <ul className="space-y-1.5 text-xs sm:text-[12.5px] text-[#102849] font-medium">
                    {hpvSymptoms.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#e60067] font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-3 p-2.5 bg-white rounded-lg border border-pink-100 flex items-center gap-2 text-xs sm:text-[12.5px] text-[#e60067] font-bold">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-[#e60067]" />
                  <span>
                    {t('menstrualHealthPage.card8.hpv.footer', {
                      defaultValue:
                        'Vaccination, timely treatment and regular screening and may prevent the complications of HPV Infection.',
                    })}
                  </span>
                </div>
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

export default MenstrualHealth
