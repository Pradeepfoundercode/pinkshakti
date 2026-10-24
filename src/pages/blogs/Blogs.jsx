import React from 'react'
import { useTranslation } from 'react-i18next'
import BannerSlider from '../../components/common/BannerSlider'
import blogBanner from '../../assets/banner/dblog-tips.jpg'
import PhoneBanner from '../../components/common/PhoneBanner'

const defaultPoints = [
  {
    title: "1. Trust Your Instincts:",
    desc: "Your intuition is a powerful tool. If something feels off or unsafe, trust your gut and remove yourself from the situation. Whether it's a dark alley or a questionable encounter with a stranger, prioritize your instincts above all else."
  },
  {
    title: "2. Stay Aware of Your Surroundings:",
    desc: "Being aware of your surroundings can prevent potential threats. Avoid walking with headphones on or being engrossed in your phone, as this can distract you from potential dangers. Instead, stay vigilant and observant of the people and environment around you."
  },
  {
    title: "3. Learn Self-Defense Techniques:",
    desc: "Taking self-defense classes can equip you with valuable skills to protect yourself in threatening situations. Knowing how to defend yourself physically can provide a sense of empowerment and confidence."
  },
  {
    title: "4. Create Safety Networks:",
    desc: "Build a network of trusted friends, family members, and coworkers who you can rely on in times of need. Share your whereabouts with them when going out alone and establish a system for checking in with each other regularly."
  },
  {
    title: "5. Utilize Safety Apps and Tools:",
    desc: "Technology can be a powerful ally in ensuring your safety. There are numerous safety apps available that allow you to share your location with trusted contacts, call for help in emergencies, and even record audio or video evidence of incidents."
  },
  {
    title: "6. Educate Yourself on Your Rights:",
    desc: "Familiarize yourself with your legal rights regarding harassment, assault, and other forms of violence. Knowing what constitutes unlawful behavior and how to report incidents can empower you to take action against perpetrators."
  },
  {
    title: "7. Speak Up and Support Others:",
    desc: "If you witness harassment or violence against another woman, don't hesitate to intervene or offer support. Solidarity among women is crucial in combating misogyny and creating safer communities for all."
  },
  {
    title: "8. Advocate for Change:",
    desc: "Get involved in initiatives and organizations that work towards gender equality and women's safety. Whether it's volunteering at a local shelter, participating in advocacy campaigns, or lobbying for policy changes, your voice and actions can make a difference."
  },
  {
    title: "9. Practice Self-Care:",
    desc: "Taking care of your physical and mental well-being is essential for navigating the challenges of the world. Prioritize activities that promote relaxation, stress reduction, and self-reflection to maintain resilience in the face of adversity."
  },
  {
    title: "10. Never Blame Yourself:",
    desc: "Remember that no matter the circumstances, you are never to blame for someone else's actions against you. Whether it's street harassment, assault, or any other form of violence, the fault lies solely with the perpetrator. Seek support from trusted individuals and resources to process your experiences and heal."
  }
];

export default function Blogs() {
  const { t } = useTranslation();

  const points = t('blogs.points', { returnObjects: true, defaultValue: defaultPoints });

  return (
    <div className="w-full bg-[#FFF9FA] text-[#102849]">
      {/* Top Banner */}
      <BannerSlider
        images={[blogBanner]}
        autoPlay={false}
        height="h-[250px] sm:h-[310px] md:h-[350px] lg:h-[470px]"
      />

      {/* Main Single Card Section */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
        
        {/* Header Badge & Title */}
        <div className="text-center my-5">
          <h1 className="mt-10 font-serif text-2xl sm:text-3xl lg:text-[23px] font-extrabold leading-tight sm:leading-snug text-[#102849] max-w-4xl mx-auto">
            <span className="text-[#e60067] mr-2">{t('blogs.titleLabel', { defaultValue: 'Title:' })}</span>
            {t('blogs.fullTitle', { defaultValue: "Empowering Women: A Guide to Ensuring Safety in Today's World" })}
          </h1>

          <div className="mx-auto mt-3.5 h-1 w-20 rounded-full bg-gradient-to-r from-pink-300 via-[#e60067] to-pink-300"></div>
        </div>

        {/* Single Main Card */}
        <div className="rounded-3xl border border-pink-200/90 bg-white p-6 sm:p-9 lg:p-11 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/10">
          
          {/* Introductory Paragraphs */}
          <div className="space-y-4 text-sm sm:text-[15px] leading-relaxed text-slate-700">
            <p>
              {t('blogs.introP1', { defaultValue: "In a world where empowerment and equality are at the forefront of discussions, ensuring women's safety remains a critical aspect of achieving true progress. Every woman deserves to feel safe and secure in her daily life, whether she's walking down the street, working late at the office, or socializing with friends." })}
            </p>
            <p>
              {t('blogs.introP2', { defaultValue: "However, the reality is that women still face numerous challenges and threats to their safety. From street harassment to domestic violence, the spectrum of dangers women encounter is vast and often daunting. But fear not, because there are steps that every woman can take to enhance her safety and reclaim her sense of security." })}
            </p>
            <p className="font-semibold text-black pt-1">
              {t('blogs.introLead', { defaultValue: "Let's delve into some practical strategies for women to navigate the world safely:" })}
            </p>
          </div>

          {/* 10 Points List */}
          <div className="mt-6 space-y-4 pt-6 border-t border-pink-100 text-sm sm:text-[14px] leading-relaxed text-slate-700">
            {Array.isArray(points) && points.map((point, index) => (
              <p key={index}>
                <span className="font-bold text-black">{point.title}</span> {point.desc}
              </p>
            ))}
          </div>

          {/* Conclusion */}
          <div className="mt-6 pt-5 border-t border-pink-100 bg-[#fff5f8] rounded-2xl p-4 sm:p-5 text-sm sm:text-[15px] leading-relaxed text-slate-800">
            <span className="font-bold text-black block mb-1">
              {t('blogs.conclusionLabel', { defaultValue: 'Conclusion:' })}
            </span>
            {t('blogs.conclusionP', { defaultValue: "In conclusion, women's safety is a collective responsibility that requires proactive measures from individuals, communities, and society as a whole. By equipping ourselves with knowledge, skills, and support networks, we can create a world where every woman feels safe, respected, and empowered to live her life to the fullest. Together, we can make safety a reality for all women." })}
          </div>

        </div>
      </main>

      {/* Phone Banner at Bottom */}
      <PhoneBanner />
    </div>
  )
}
