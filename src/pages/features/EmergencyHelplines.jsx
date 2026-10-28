import React from 'react'
import { Phone, Clock } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import BannerSlider from '../../components/common/BannerSlider'
import emergencyBanner from '../../assets/banner/ashello.png'
import PhoneBanner from '../../components/common/PhoneBanner'
import {
  helplines,
  otherHelplines,
  safetyTipsIcons,
  defaultSafetyTips,
} from '../../constants/emergencyHelplinesData'

// --- ANIMATION VARIANTS ---
// Individual elements ke slide-up aur fade-in ke liye
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const popIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
}

function EmergencyHelplines() {
  const { t } = useTranslation()

  return (
    <div className="overflow-hidden">
      <BannerSlider
        images={[emergencyBanner]}
        autoPlay={false}
      />

      {/* Main Helplines Section */}
      <section className="bg-transparent px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {helplines.map((item, index) => {
              const itemTitle = t(`emergencyHelplines.items.${item.key}Title`, { defaultValue: item.title })
              const itemDesc = t(`emergencyHelplines.items.${item.key}Desc`, { defaultValue: item.description })

              return (
                <motion.div
                  key={item.number}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-5 shadow-xs transition-shadow duration-300 hover:shadow-lg sm:rounded-3xl sm:p-6 ${
                    item.cardTheme === 'blue'
                      ? 'border-blue-100/80 bg-gradient-to-b from-[#f3f8ff] via-[#fafcff] to-white'
                      : 'border-pink-100/80 bg-gradient-to-b from-[#fff5f8] via-[#fff9fb] to-white'
                  }`}
                >
                  {/* Top Row: Icon + Number & 24x7 Badge */}
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-3.5">
                        {/* Logo Icon Container with Rotate Hover */}
                        <motion.div 
                          whileHover={{ rotate: [-5, 5, -5, 0], scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#ffd9e6] p-2.5 shadow-2xs sm:h-16 sm:w-16 sm:p-3"
                        >
                          <img
                            src={item.logo}
                            alt={itemTitle}
                            className="h-full w-full object-contain"
                          />
                        </motion.div>

                        {/* Number */}
                        <span className="text-3xl font-extrabold tracking-tight text-[#e60067] sm:text-4xl">
                          {item.number}
                        </span>
                      </div>

                      {/* 24 x 7 Pill Badge */}
                      <span
                        className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-bold tracking-wide sm:text-xs ${
                          item.badgeType === 'blue'
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

                  {/* Call Button with Bouncy Tap Effect */}
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.95 }}
                    href={item.callLink}
                    className="mt-5 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl btn-pink-solid px-4 py-2.5 text-xs font-bold shadow-xs transition-shadow duration-300 hover:shadow-md hover:shadow-pink-500/25 sm:py-3 sm:text-sm"
                  >
                    <Phone className="h-4 w-4 fill-white" />
                    <span>{t("emergencyHelplines.callNow", { defaultValue: "Call" })} {item.number}</span>
                  </motion.a>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Other Important Helplines Section */}
      <section className="bg-transparent px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1400px]">
          <motion.h2 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-4 sm:mb-6 text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#102849]"
          >
            {t("emergencyHelplines.otherHelplinesHeading", { defaultValue: "Other" })}{' '}
            <span className="text-[#e60067]">{t("emergencyHelplines.otherHelplinesHeading2", { defaultValue: "Important Helplines" })}</span>
          </motion.h2>

          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:gap-4">
            {otherHelplines.map((item, index) => {
              const IconComponent = item.icon
              const itemTitle = t(`emergencyHelplines.otherSection.${item.key}Title`, { defaultValue: item.title })
              const itemDesc = t(`emergencyHelplines.otherSection.${item.key}Desc`, { defaultValue: item.description })

              return (
                <motion.a
                  variants={popIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  key={item.number}
                  href={item.callLink}
                  className="group flex flex-col justify-between rounded-2xl border border-pink-100 bg-[#fff7fa] p-3.5 sm:p-4 shadow-2xs transition-colors duration-300 hover:border-pink-200 hover:shadow-md cursor-pointer"
                >
                  <div>
                    {/* Top Row: Icon + Number + 24x7 Badge */}
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        {/* Circular Pink Icon Container */}
                        <motion.div 
                          whileHover={{ scale: 1.15 }}
                          className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#ffd9e6] text-[#e60067] shadow-2xs"
                        >
                          <IconComponent className="h-5 w-5 sm:h-6 sm:w-6" />
                        </motion.div>

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
                </motion.a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Safety Tips Section */}
      <section className="bg-transparent px-4 py-5 sm:px-6 lg:px-8 ">
        <div className="mx-auto max-w-[1400px]">
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#102849]">
              {t("emergencyHelplines.safetyTipsHeading", { defaultValue: "Safety" })}{' '}
              <span className="text-[#e60067]">{t("emergencyHelplines.safetyTipsHeading2", { defaultValue: "Tips" })}</span>
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              {t("emergencyHelplines.safetyTipsSubtitle", { defaultValue: "Stay alert, stay safe. Keep these tips in mind:" })}
            </p>
          </motion.div>

          <div className="mt-4 sm:mt-5 grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:gap-4">
            {safetyTipsIcons.map((IconComponent, index) => {
              const tipText = t(`emergencyHelplines.safetyTipsList.${index}`, { defaultValue: defaultSafetyTips[index] })

              return (
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  key={index}
                  className="flex items-center gap-3 rounded-2xl border border-pink-100 bg-[#fff7fa] p-3.5 sm:p-4 shadow-2xs transition-colors duration-300 hover:border-pink-200 hover:shadow-md"
                >
                  <motion.div 
                    whileHover={{ rotate: 15 }}
                    className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#ffd9e6] text-[#e60067] shadow-2xs"
                  >
                    <IconComponent className="h-5 w-5 sm:h-5.5 sm:w-5.5" />
                  </motion.div>
                  <p className="text-xs sm:text-[13px] font-medium leading-snug text-slate-700">
                    {tipText}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <PhoneBanner />
    </div>
  )
}

export default EmergencyHelplines