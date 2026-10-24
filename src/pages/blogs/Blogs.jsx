import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion' // Added Framer Motion
import BannerSlider from '../../components/common/BannerSlider'
import blogBanner from '../../assets/banner/dblog-tips.jpg'
import PhoneBanner from '../../components/common/PhoneBanner'
import { defaultBlogPoints } from '../../constants/blogsData'

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

export default function Blogs() {
  const { t } = useTranslation();

  const points = t('blogs.points', { returnObjects: true, defaultValue: defaultBlogPoints });

  return (
    <div className="w-full bg-[#FFF9FA] text-[#102849] overflow-hidden">
      {/* Top Banner */}
      <BannerSlider
        images={[blogBanner]}
        autoPlay={false}
        height="h-[250px] sm:h-[310px] md:h-[350px] lg:h-[470px]"
      />

      {/* Main Single Card Section */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header Badge & Title with Scroll Reveal */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center my-5"
        >
          <motion.h1 
            variants={fadeInUp}
            className="mt-10 font-serif text-2xl sm:text-3xl lg:text-[23px] font-extrabold leading-tight sm:leading-snug text-[#102849] max-w-4xl mx-auto"
          >
            <span className="text-[#e60067] mr-2">{t('blogs.titleLabel', { defaultValue: 'Title:' })}</span>
            {t('blogs.fullTitle', { defaultValue: "Empowering Women: A Guide to Ensuring Safety in Today's World" })}
          </motion.h1>

          <motion.div 
            variants={fadeInUp}
            className="mx-auto mt-3.5 h-1 w-20 rounded-full bg-gradient-to-r from-pink-300 via-[#e60067] to-pink-300"
          ></motion.div>
        </motion.div>

        {/* Single Main Card (Wrapper) */}
        <div className="rounded-3xl border border-pink-200/90 bg-white p-6 sm:p-9 lg:p-11 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-pink-500/10">
          
          {/* Introductory Paragraphs - Staggered Fade Up */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4 text-sm sm:text-[15px] leading-relaxed text-slate-700"
          >
            <motion.p variants={fadeInUp}>
              {t('blogs.introP1', { defaultValue: "In a world where empowerment and equality are at the forefront of discussions, ensuring women's safety remains a critical aspect of achieving true progress. Every woman deserves to feel safe and secure in her daily life, whether she's walking down the street, working late at the office, or socializing with friends." })}
            </motion.p>
            <motion.p variants={fadeInUp}>
              {t('blogs.introP2', { defaultValue: "However, the reality is that women still face numerous challenges and threats to their safety. From street harassment to domestic violence, the spectrum of dangers women encounter is vast and often daunting. But fear not, because there are steps that every woman can take to enhance her safety and reclaim her sense of security." })}
            </motion.p>
            <motion.p variants={fadeInUp} className="font-semibold text-black pt-1">
              {t('blogs.introLead', { defaultValue: "Let's delve into some practical strategies for women to navigate the world safely:" })}
            </motion.p>
          </motion.div>

          {/* 10 Points List - Staggered Line by Line Reveal */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-6 space-y-4 pt-6 border-t border-pink-100 text-sm sm:text-[14px] leading-relaxed text-slate-700"
          >
            {Array.isArray(points) && points.map((point, index) => (
              <motion.p 
                key={index}
                variants={fadeInUp}
                whileHover={{ x: 5, color: "#102849" }} // Subtle right slide on hover
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="font-bold text-black">{point.title}</span> {point.desc}
              </motion.p>
            ))}
          </motion.div>

          {/* Conclusion Box with Pop-up & Hover Effect */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            whileHover={{ scale: 1.01, backgroundColor: "#ffe8f0" }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="mt-6 pt-5 border border-transparent hover:border-pink-200 border-t-pink-100 bg-[#fff5f8] rounded-2xl p-4 sm:p-5 text-sm sm:text-[15px] leading-relaxed text-slate-800 cursor-default"
          >
            <span className="font-bold text-black block mb-1">
              {t('blogs.conclusionLabel', { defaultValue: 'Conclusion:' })}
            </span>
            {t('blogs.conclusionP', { defaultValue: "In conclusion, women's safety is a collective responsibility that requires proactive measures from individuals, communities, and society as a whole. By equipping ourselves with knowledge, skills, and support networks, we can create a world where every woman feels safe, respected, and empowered to live her life to the fullest. Together, we can make safety a reality for all women." })}
          </motion.div>

        </div>
      </main>

      {/* Phone Banner at Bottom */}
      <PhoneBanner />
    </div>
  )
}