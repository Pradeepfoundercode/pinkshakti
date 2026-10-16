import React from 'react'
import {
  Phone,
  Clock,
  Smile,
  Ambulance,
  User,
  Laptop,
  Hand,
  Users,
  ShieldCheck,
  MapPin,
  BellRing,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import PageBanner from '../../components/common/PageBanner'
import PhoneBanner from '../../components/common/PhoneBanner'

import bellLogo from '../../assets/logo/bell.png'
import noteLogo from '../../assets/logo/note.png'
import womenSafetyLogo from '../../assets/logo/women_safety.png'

const helplines = [
  {
    number: '112',
    key: 'h112',
    title: 'Emergency Services',
    description:
      'India all-in-one emergency helpline number 112 was launched by Union Home Minister Rajnath Singh in 16 states and Union Territories. The 112 emergency helpline number would provide immediate assistance for any kind of emergency services for citizens like police help, hospital emergency, fire case women safety issue and child protection. Any citizen in distress situation can dial 112 and immediate help will reach to him or her within minutes.',
    badge: '24 x 7',
    badgeType: 'pink',
    cardTheme: 'pink',
    logo: bellLogo,
    callLink: 'tel:112',
  },
  {
    number: '181',
    key: 'h181',
    title: 'Women Helpline for Domestic Violence',
    description:
      '181 is a National Helpline in India that serves as a dedicated support system for women facing adversity. With a focus on issues like domestic violence and harassment, it offers a safe space for women to seek help. Beyond immediate aid, Helpline 181 provides counselling, legal assistance, and rescue services, contributing significantly to women safety and well-being across the country.',
    badge: '24 x 7',
    badgeType: 'blue',
    cardTheme: 'blue',
    logo: noteLogo,
    callLink: 'tel:181',
  },
  {
    number: '1090',
    key: 'h1090',
    title: 'Women Power Line (Uttar Pradesh, India)',
    description:
      'Women Power Line 1090 in Uttar Pradesh is a proactive initiative combating crimes against women. This helpline offers a rapid response to reports of harassment, stalking, and abuse, reinforcing women safety. By empowering women to speak out and seek assistance, Women Power Line 1090 plays a crucial role in building a secure and supportive community for women in the region.',
    badge: '24 x 7',
    badgeType: 'pink',
    cardTheme: 'pink',
    logo: womenSafetyLogo,
    callLink: 'tel:1090',
  },
]

const otherHelplines = [
  {
    number: '1098',
    key: 'h1098',
    title: 'Child Helpline',
    description: 'For children in need of care and protection',
    badge: '24 x 7',
    icon: Smile,
    callLink: 'tel:1098',
  },
  {
    number: '108',
    key: 'h108',
    title: 'Ambulance Service',
    description: 'For medical emergency assistance',
    badge: '24 x 7',
    icon: Ambulance,
    callLink: 'tel:108',
  },
  {
    number: '14567',
    key: 'h14567',
    title: 'Senior Citizen Helpline',
    description: 'Support for senior citizens in distress',
    badge: '24 x 7',
    icon: User,
    callLink: 'tel:14567',
  },
  {
    number: '1930',
    key: 'h1930',
    title: 'Cyber Crime Helpline',
    description: 'Report online fraud and cyber crime',
    badge: '24 x 7',
    icon: Laptop,
    callLink: 'tel:1930',
  },
  {
    number: '1091',
    key: 'h1091',
    title: 'Women Safety Helpline (UP)',
    description: 'For immediate assistance and security',
    badge: '24 x 7',
    icon: Hand,
    callLink: 'tel:1091',
  },
]

const safetyTipsIcons = [
  Phone,
  Users,
  ShieldCheck,
  MapPin,
  BellRing,
]

const defaultSafetyTips = [
  'Save important helpline numbers in your phone',
  'Share your live location with trusted family or friends',
  'Use the Pink Shakti app for additional safety features',
  'Stay aware of your surroundings while travelling',
  'Report any suspicious activity immediately',
]

function EmergencyHelplines() {
  const { t } = useTranslation()

  return (
    <>
      <PageBanner
        alt="Emergency Helplines - Pink Shakti"
        title={
          <>
            <span className="text-[#e60067]">{t("emergencyHelplines.banner.titlePink", { defaultValue: "Emergency" })}</span>{' '}
            <span className="text-[#102849]">{t("emergencyHelplines.banner.titleNavy", { defaultValue: "Helplines" })}</span>
          </>
        }
        description={
          <>
            <span className="block font-bold text-[#102849] text-sm sm:text-base lg:text-[1.1rem] mb-1.5 sm:mb-2">
              {t("emergencyHelplines.banner.subtitleBold", { defaultValue: "Immediate Assistance When You Need It Most" })}
            </span>
            <span>
              {t("emergencyHelplines.banner.subtitleDesc", { defaultValue: "Access 24x7 emergency helpline numbers for immediate help, protection, medical assistance, and legal support across India and Uttar Pradesh." })}
            </span>
          </>
        }
      />


      <section className="bg-white px-4 py-5 sm:px-6  lg:px-8">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {helplines.map((item) => {
              const itemTitle = t(`emergencyHelplines.items.${item.key}Title`, { defaultValue: item.title })
              const itemDesc = t(`emergencyHelplines.items.${item.key}Desc`, { defaultValue: item.description })

              return (
                <div
                  key={item.number}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:rounded-3xl sm:p-6 ${item.cardTheme === 'blue'
                    ? 'border-blue-100/80 bg-gradient-to-b from-[#f3f8ff] via-[#fafcff] to-white hover:border-blue-200'
                    : 'border-pink-100/80 bg-gradient-to-b from-[#fff5f8] via-[#fff9fb] to-white hover:border-pink-200'
                    }`}
                >
                  {/* Top Row: Icon + Number & 24x7 Badge */}
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-3.5">
                        {/* Logo Icon Container */}
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#ffd9e6] p-2.5 shadow-2xs sm:h-16 sm:w-16 sm:p-3">
                          <img
                            src={item.logo}
                            alt={itemTitle}
                            className="h-full w-full object-contain"
                          />
                        </div>

                        {/* Number */}
                        <span className="text-3xl font-extrabold tracking-tight text-[#e60067] sm:text-4xl">
                          {item.number}
                        </span>
                      </div>

                      {/* 24 x 7 Pill Badge */}
                      <span
                        className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-bold tracking-wide sm:text-xs ${item.badgeType === 'blue'
                          ? 'border border-blue-200/80 bg-[#e8f2ff] text-[#0070f3]'
                          : 'border border-pink-200/80 bg-[#ffe8f0] text-[#e60067]'
                          }`}
                      >
                        <Clock className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                        <span>{t("emergencyHelplines.badge24x7", { defaultValue: item.badge })}</span>
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div className="mt-3.5 sm:mt-4">
                      <h3 className="text-base font-bold text-[#102849] sm:text-lg">
                        {itemTitle}
                      </h3>
                      <p className="mt-1.5 min-h-[38px] text-xs leading-relaxed text-slate-600 sm:text-sm">
                        {itemDesc}
                      </p>
                    </div>
                  </div>

                  {/* Call Button */}
                  <a
                    href={item.callLink}
                    className="mt-5 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#e60067] px-4 py-2.5 text-xs font-bold text-white shadow-xs transition-all duration-300 hover:bg-[#c40057] hover:shadow-md hover:shadow-pink-500/25 active:scale-[0.98] sm:py-3 sm:text-sm"
                  >
                    <Phone className="h-4 w-4 fill-white" />
                    <span>{t("emergencyHelplines.callNow", { defaultValue: "Call" })} {item.number}</span>
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="mb-4 sm:mb-6 text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#102849]">
            {t("emergencyHelplines.otherHelplinesHeading", { defaultValue: "Other" })}{' '}
            <span className="text-[#e60067]">{t("emergencyHelplines.otherHelplinesHeading2", { defaultValue: "Important Helplines" })}</span>
          </h2>

          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:gap-4">
            {otherHelplines.map((item) => {
              const IconComponent = item.icon
              const itemTitle = t(`emergencyHelplines.otherSection.${item.key}Title`, { defaultValue: item.title })
              const itemDesc = t(`emergencyHelplines.otherSection.${item.key}Desc`, { defaultValue: item.description })

              return (
                <a
                  key={item.number}
                  href={item.callLink}
                  className="group flex flex-col justify-between rounded-2xl border border-pink-100 bg-[#fff7fa] p-3.5 sm:p-4 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-pink-200  hover:shadow-md cursor-pointer"
                >
                  <div>
                    {/* Top Row: Icon + Number + 24x7 Badge */}
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        {/* Circular Pink Icon Container */}
                        <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#ffd9e6] text-[#e60067] shadow-2xs transition-transform duration-300 group-hover:scale-105">
                          <IconComponent className="h-5 w-5 sm:h-6 sm:w-6" />
                        </div>

                        {/* Large Number */}
                        <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#e60067]">
                          {item.number}
                        </span>
                      </div>

                      {/* 24 x 7 Badge */}
                      <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-pink-200/60 bg-[#ffe8f0] px-2 py-0.5 text-[10px] sm:text-[11px] font-bold text-[#e60067]">
                        <Clock className="h-3 w-3" />
                        <span>{t("emergencyHelplines.badge24x7", { defaultValue: item.badge })}</span>
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div className="mt-3">
                      <h3 className="text-xs sm:text-[13px] font-bold leading-snug text-[#102849] group-hover:text-[#e60067] transition-colors">
                        {itemTitle}
                      </h3>
                      <p className="mt-1 text-[11px] sm:text-xs leading-snug text-slate-500">
                        {itemDesc}
                      </p>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-5 sm:px-6  lg:px-8 ">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#102849]">
            {t("emergencyHelplines.safetyTipsHeading", { defaultValue: "Safety" })}{' '}
            <span className="text-[#e60067]">{t("emergencyHelplines.safetyTipsHeading2", { defaultValue: "Tips" })}</span>
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600">
            {t("emergencyHelplines.safetyTipsSubtitle", { defaultValue: "Stay alert, stay safe. Keep these tips in mind:" })}
          </p>

          <div className="mt-4 sm:mt-5 grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:gap-4">
            {safetyTipsIcons.map((IconComponent, index) => {
              const tipText = t(`emergencyHelplines.safetyTipsList.${index}`, { defaultValue: defaultSafetyTips[index] })

              return (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-2xl border border-pink-100 bg-[#fff7fa] p-3.5 sm:p-4 shadow-2xs transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-200  hover:shadow-md"
                >
                  <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#ffd9e6] text-[#e60067] shadow-2xs">
                    <IconComponent className="h-5 w-5 sm:h-5.5 sm:w-5.5" />
                  </div>
                  <p className="text-xs sm:text-[13px] font-medium leading-snug text-slate-700">
                    {tipText}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <PhoneBanner />
    </>
  )
}

export default EmergencyHelplines



