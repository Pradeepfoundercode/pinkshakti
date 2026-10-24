import React from 'react'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import BannerSlider from '../../components/common/BannerSlider'
import highlightsBanner from '../../assets/home/Home Page 1st image alternative (2).png'
import PhoneBanner from '../../components/common/PhoneBanner'
import { featuresList } from '../../constants/featuresData'

// --- ANIMATION VARIANTS ---
// Individual card ke liye slide-up animation
const fadeInUp = {
  hidden: { opacity: 0, y: 50 }, // Thoda aur niche se aayega better effect ke liye
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

function Feature() {
  const { t } = useTranslation()

  const featureTranslations = {
    "Women Safety": {
      title: t("features.items.womenSafety.title", { defaultValue: "Women Safety" }),
      desc: t("features.items.womenSafety.desc", { defaultValue: "Emergency Response Support System (ERSS) and safety resources for women." })
    },
    "Anonymous Crime Reporting": {
      title: t("features.items.anonymousCrime.title", { defaultValue: "Anonymous Crime Reporting" }),
      desc: t("features.items.anonymousCrime.desc", { defaultValue: "Report incidents anonymously with map location & e-FIR information." })
    },
    "E-FIR": {
      title: t("features.items.eFir.title", { defaultValue: "E-FIR" }),
      desc: t("features.items.eFir.desc", { defaultValue: "E-FIR information and official link to UP Police e-FIR portal." }),
      dedicated: t("features.dedicatedEfir", { defaultValue: "View dedicated E-FIR page →" })
    },
    "City Scan": {
      title: t("features.items.cityScan.title", { defaultValue: "City Scan" }),
      desc: t("features.items.cityScan.desc", { defaultValue: "Check safety information and report unsafe areas in your city." }),
      dedicated: t("features.dedicatedCityScan", { defaultValue: "View dedicated City Scan page →" })
    },
    "Pink Info": {
      title: t("features.items.pinkInfo.title", { defaultValue: "Pink Info" }),
      desc: t("features.items.pinkInfo.desc", { defaultValue: "Important information and resources for a brighter tomorrow." }),
      bullets: [
        t("features.items.pinkInfo.b1", { defaultValue: "Women Schemes" }),
        t("features.items.pinkInfo.b2", { defaultValue: "Women Laws & Rights" }),
        t("features.items.pinkInfo.b3", { defaultValue: "PoSH Act 2013" })
      ]
    },
    "Pink Health": {
      title: t("features.items.pinkHealth.title", { defaultValue: "Pink Health" }),
      desc: t("features.items.pinkHealth.desc", { defaultValue: "Health awareness and resources for women's well-being." }),
      bullets: [
        t("features.items.pinkHealth.b1", { defaultValue: "Mental Health" }),
        t("features.items.pinkHealth.b2", { defaultValue: "Menstrual Health" }),
        t("features.items.pinkHealth.b3", { defaultValue: "Cervical Cancer Awareness" })
      ]
    },
    "Crime Data Analytics": {
      title: t("features.items.analytics.title", { defaultValue: "Crime Data Analytics" }),
      desc: t("features.items.analytics.desc", { defaultValue: "View crime data, trends and safety insights for a safer Uttar Pradesh." })
    },
    "Emergency Helplines": {
      title: t("features.items.helplines.title", { defaultValue: "Emergency Helplines" }),
      desc: t("features.items.helplines.desc", { defaultValue: "Access important helpline numbers like 112, 181, 1090 and more." })
    },
    "One Stop Centers": {
      title: t("features.items.oneStop.title", { defaultValue: "One Stop Centers" }),
      desc: t("features.items.oneStop.desc", { defaultValue: "Find One Stop Centers near you for support and assistance." })
    }
  }

  return (
    <div className="overflow-hidden">
      {/* Top Banner Section */}
      <BannerSlider
        images={[highlightsBanner]}
        autoPlay={false}
      />

      {/* 9 Features Cards Grid Section */}
      <section className="bg-white px-6 sm:px-10 lg:px-16 py-6 lg:py-8">
        <div className="mx-auto max-w-[1440px]">
          {/* Normal Grid Container (Parent) */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 sm:gap-6 lg:gap-7">
            {featuresList.map((feature, index) => {
              const trans = featureTranslations[feature.title] || { title: feature.title, desc: feature.description }

              return (
                // Individual Card par whileInView lagaya gaya hai
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }} // Jab 15% card screen par aayega tab trigger hoga
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-pink-200/90 bg-pink-100/50 bg-no-repeat p-2.5 sm:px-4 sm:py-2.5 shadow-xs transition-shadow duration-300 hover:shadow-lg min-h-[136px] sm:min-h-[144px]"
                  style={{
                    backgroundImage: `url("${feature.bgImage}")`,
                    backgroundSize: "contain",
                    backgroundPosition: "right center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  {/* Content */}
                  <div className="relative z-10 flex items-start gap-2 sm:gap-2.5 max-w-[65%] sm:max-w-[60%] lg:max-w-[56%]">
                    
                    {/* Left Icon with bouncy hover */}
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                      className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-pink-100/90 border border-pink-200/80 shadow-2xs text-[#e60067]"
                    >
                      {feature.icon && (typeof feature.icon === 'function' || typeof feature.icon === 'object') ? (
                        <feature.icon className="h-5.5 w-5.5 sm:h-6 sm:w-6 stroke-[2.7]" strokeWidth={2.7} />
                      ) : (
                        <img
                          src={feature.icon}
                          alt={trans.title}
                          className="h-full w-full object-contain"
                        />
                      )}
                    </motion.div>

                    {/* Text Details */}
                    <div className="flex-1 min-w-0 pr-1">
                      <h3 className="font-bold text-xs sm:text-[14px] text-[#102849] leading-snug">
                        <a href={feature.link} className="hover:text-[#e60067] transition-colors">
                          {trans.title}
                        </a>
                      </h3>

                      <p className="mt-0.5 text-[10px] md:text-[11.5px] text-slate-600 leading-relaxed">
                        {trans.desc}
                      </p>

                      {/* Dedicated Page Link (if present) */}
                      {feature.dedicatedLink && (
                        <a
                          href={feature.dedicatedLink.to}
                          className="mt-0.5 inline-block text-[11px] sm:text-xs font-semibold text-[#e60067] hover:underline transition-all"
                        >
                          {trans.dedicated || feature.dedicatedLink.text}
                        </a>
                      )}

                      {/* Bullet Points (if present) */}
                      {(trans.bullets || feature.bullets) && (
                        <ul className="mt-0.5 space-y-0.5">
                          {(trans.bullets || feature.bullets).map((bullet, bIndex) => (
                            <li
                              key={bIndex}
                              className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-[#102849]"
                            >
                              <span className="flex h-3 w-3 items-center justify-center rounded-full bg-[#e60067] text-[8px] text-white font-bold leading-none shrink-0">
                                ›
                              </span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Know More CTA Button with Animation */}
                      <div className="mt-1.5 sm:mt-2">
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={feature.link}
                          className="button-motion inline-flex items-center whitespace-nowrap gap-1.5 rounded-full btn-pink px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-semibold shadow-xs"
                        >
                          <span>{t("features.knowMore", { defaultValue: "Know More" })}</span>
                          <motion.div whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 400 }}>
                            <ArrowRight className="h-3 w-3 shrink-0 stroke-[2.5]" />
                          </motion.div>
                        </motion.a>
                      </div>
                    </div>
                  </div>
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

export default Feature