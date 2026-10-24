import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowRight } from 'lucide-react'
import BannerSlider from '../../components/common/BannerSlider'
import womenRightsBanner from '../../assets/women-rights/women_rights.png'
import morphedDefenseImg from '../../assets/women-rights/download (1).png'
import PhoneBanner from '../../components/common/PhoneBanner'
import { womenRightsList } from '../../constants/womenRightsData'

function WomenRights() {
  const { t, i18n } = useTranslation()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-[#FFF9FA]">
      <BannerSlider
        images={[womenRightsBanner]}
        autoPlay={false}
      />

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-3 sm:pb-4">
        {/* Section Heading */}
        <div className="mb-6 sm:mb-8">
          <h2 className="font-serif text-xl sm:text-2xl lg:text-[28px] font-bold text-[#e60067] tracking-wide uppercase">
            {t('womenRightsPage.heading', { defaultValue: 'WOMEN – SPECIFIC RIGHTS' })}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#e60067] to-[#824497] rounded-full mt-2 sm:mt-2.5"></div>
        </div>

        {/* 13 Rights Cards - 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {womenRightsList.map((card) => {
            const title = t(`womenRightsPage.items.${card.id}.title`, { defaultValue: card.title })
            const desc = t(`womenRightsPage.items.${card.id}.desc`, { defaultValue: card.desc })
            const isHi = i18n.language === 'hi'
            const cardImg = (isHi && card.imageHi) ? card.imageHi : card.image

            return (
              <div
                key={card.id}
                className="bg-white rounded-2xl border border-pink-100/90 shadow-[0_2px_12px_-3px_rgba(230,0,103,0.06)] hover:shadow-[0_8px_24px_-4px_rgba(230,0,103,0.12)] transition-all duration-300 p-3 sm:p-4 flex flex-col sm:flex-row items-center sm:items-stretch gap-4 sm:gap-5 group"
              >
                {/* Left Image (slightly wider, same height) */}
                <div className="w-full sm:w-[50%] lg:w-[48%] aspect-[1.38/1] sm:aspect-auto rounded-xl overflow-hidden bg-pink-50 relative shrink-0 shadow-inner border border-pink-100/70">
                  <img
                    src={cardImg}
                    alt={title}
                    className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Right Content: Heading, Text snippet, and Know More button */}
                <div className="flex-1 flex flex-col justify-start items-start py-1 sm:py-1.5 w-full">
                  <div>
                    {/* Heading */}
                    <h3 className="font-serif font-bold text-[#e60067] text-[15px] sm:text-[16px] lg:text-[17px] leading-snug mb-1.5 sm:mb-2">
                      {title}
                    </h3>

                    {/* 3-line description snippet */}
                    <p className="text-slate-700 text-xs sm:text-[13px] font-medium leading-relaxed mb-2.5 line-clamp-3">
                      {desc}
                    </p>
                  </div>

                  {/* Know More Button placed higher up */}
                  <div className="mt-0.5">
                    <Link
                      to={`/highlights/pink-info/women-rights/${card.slug || card.id}`}
                      className="inline-flex items-center gap-1.5 rounded-lg btn-pink py-1.5 px-3.5 text-xs font-semibold shadow-xs shadow-pink-500/20 active:scale-95 transition-all cursor-pointer"
                    >
                      <span>
                        {t('womenRightsPage.knowMore', { defaultValue: 'Know More' })}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Special Highlight: Immediate Actions to Delete Morphed Photos */}
        <div className="mt-7 sm:mt-8 bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-5 lg:p-6 border border-pink-200/90 shadow-[0_4px_20px_-4px_rgba(230,0,103,0.10)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-center">
            {/* Left Infographic Thumbnail - Badi image with minimal outer spacing */}
            <div className="lg:col-span-6 w-full flex justify-center">
              <div className="w-full rounded-xl sm:rounded-2xl overflow-hidden border border-pink-200/80 shadow-sm bg-pink-50/50 group">
                <img
                  src={morphedDefenseImg}
                  alt={t('womenRightsPage.morphedSection.title', { defaultValue: 'Delete and Report Morphed Images - Your Digital Self-Defense' })}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Information */}
            <div className="lg:col-span-6 flex flex-col items-start justify-center py-1 sm:py-2">
              <h3 className="font-serif text-xl sm:text-2xl lg:text-[25px] font-extrabold text-[#e60067] leading-snug mb-2.5">
                {t('womenRightsPage.morphedSection.title', { defaultValue: 'IMMEDIATE ACTIONS TO DELETE MORPHED PHOTOS FROM THE INTERNET' })}
              </h3>

              <div className="text-slate-700 text-xs sm:text-[13.5px] leading-relaxed mb-4 space-y-1.5">
                <p className="font-medium">
                  {t('womenRightsPage.morphedSection.lead', { defaultValue: "Report to the Platform Hosting the Image Whether it's a social media site, website, forum, or Google, each has a mechanism to report such content:" })}
                </p>
                <div className="pl-1 pt-0.5">
                  <p className="font-semibold text-[#102849] mb-1">
                    {t('womenRightsPage.morphedSection.platformTitle', { defaultValue: 'Social Media (Facebook, Instagram, Twitter, etc.)' })}
                  </p>
                  <ol className="list-decimal list-inside space-y-0.5 text-slate-600 pl-1 font-medium">
                    <li>{t('womenRightsPage.morphedSection.steps.0', { defaultValue: 'Go to the post/photo → Click “Report”' })}</li>
                    <li>{t('womenRightsPage.morphedSection.steps.1', { defaultValue: 'Select “Non-consensual intimate image”, “Harassment”, or “Inappropriate content”' })}</li>
                    <li>{t('womenRightsPage.morphedSection.steps.2', { defaultValue: 'Use their support form if available (especially for image-based abuse).....' })}</li>
                  </ol>
                </div>
              </div>

              <Link
                to="/highlights/pink-info/women-rights/delete-morphed-photos"
                className="inline-flex items-center gap-2 rounded-xl btn-pink py-2.5 px-5 text-xs sm:text-sm font-bold shadow-md shadow-pink-500/20 active:scale-95 transition-all cursor-pointer group"
              >
                <span>{t('womenRightsPage.morphedSection.viewGuide', { defaultValue: 'View Complete Step-by-Step Guide' })}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right to Disconnect Details */}
        <div className="mt-5 sm:mt-6 bg-white rounded-2xl p-4 sm:p-5 border border-pink-100 shadow-sm space-y-4">
          {/* Section 1: How It Benefits Women */}
          <div>
            <h3 className="font-serif text-base sm:text-lg lg:text-xl font-bold text-[#e60067] mb-1.5">
              {t('womenRightsPage.disconnectBenefits.title', { defaultValue: 'How It Benefits Women' })}
            </h3>
            <p className="text-slate-700 text-xs sm:text-sm font-medium leading-normal mb-2">
              {t('womenRightsPage.disconnectBenefits.lead', { defaultValue: 'Women often shoulder dual responsibilities — professional work and unpaid household/caregiving work. This law directly supports them by:' })}
            </p>
            <ol className="list-decimal list-inside space-y-1 text-xs sm:text-sm font-semibold text-[#102849] pl-1">
              <li>{t('womenRightsPage.disconnectBenefits.points.0', { defaultValue: 'Reducing Mental Load' })}</li>
              <li>{t('womenRightsPage.disconnectBenefits.points.1', { defaultValue: 'Supporting Working Mothers' })}</li>
              <li>{t('womenRightsPage.disconnectBenefits.points.2', { defaultValue: 'Encouraging Fair Work Culture' })}</li>
            </ol>
          </div>

          <div>
            {/* Section 2: How Women Can Use This Law if a Boss Misuses Power */}
            <h3 className="font-serif text-base sm:text-lg lg:text-xl font-bold text-[#e60067] mb-0.5">
              {t('womenRightsPage.bossMisuse.title', { defaultValue: 'How Women Can Use This Law if a Boss Misuses Power' })}
            </h3>
            <p className="text-[11.5px] sm:text-xs font-semibold text-[#824497] mb-0.5">
              {t('womenRightsPage.bossMisuse.badge', { defaultValue: 'Important: It should be used for protection, not confrontation' })}
            </p>
            <p className="text-slate-600 text-xs sm:text-sm font-medium mb-2.5">
              {t('womenRightsPage.bossMisuse.lead', { defaultValue: 'Here’s how women can assert their rights professionally and safely' })}
            </p>

            <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-snug">
              {/* 1 */}
              <div>
                <p>
                  <strong className="text-[#102849]">
                    {t('womenRightsPage.bossMisuse.p1Title', { defaultValue: '1. Respond Politely Using the Law' })}
                  </strong>{' '}
                  {t('womenRightsPage.bossMisuse.p1Text', { defaultValue: '- If the boss messages after work hours:' })}{' '}
                  <span className="font-semibold text-[#824497]">
                    {t('womenRightsPage.bossMisuse.p1Quote', { defaultValue: '“As per the Right to Disconnect guidelines, I will take this up during working hours tomorrow.”' })}
                  </span>{' '}
                  {t('womenRightsPage.bossMisuse.p1Note', { defaultValue: 'A polite reminder, not a conflict.' })}
                </p>
              </div>

              {/* 2 */}
              <div className="space-y-0.5">
                <p>
                  <strong className="text-[#102849]">
                    {t('womenRightsPage.bossMisuse.p2Title', { defaultValue: '2. Keep Proof' })}
                  </strong>{' '}
                  {t('womenRightsPage.bossMisuse.p2Text', { defaultValue: '- If late-night messages or calls are frequent, women can:' })}
                </p>
                <ul className="list-disc list-inside space-y-0.5 text-slate-600 pl-4 font-medium">
                  <li>{t('womenRightsPage.bossMisuse.p2List.0', { defaultValue: 'Take screenshots' })}</li>
                  <li>{t('womenRightsPage.bossMisuse.p2List.1', { defaultValue: 'Note dates/times' })}</li>
                  <li>{t('womenRightsPage.bossMisuse.p2List.2', { defaultValue: 'Maintain a simple log' })}</li>
                </ul>
                <p className="text-slate-600 text-[11.5px] sm:text-xs">
                  {t('womenRightsPage.bossMisuse.p2Note', { defaultValue: 'This becomes evidence if the behaviour continues.' })}
                </p>
              </div>

              {/* 3 */}
              <div>
                <p>
                  <strong className="text-[#102849]">
                    {t('womenRightsPage.bossMisuse.p3Title', { defaultValue: '3. Request Written Clarification of Work Hours' })}
                  </strong>{' '}
                  {t('womenRightsPage.bossMisuse.p3Text', { defaultValue: '- Ask HR or the reporting officer:' })}{' '}
                  <span className="font-semibold text-[#824497]">
                    {t('womenRightsPage.bossMisuse.p3Quote', { defaultValue: '“Can you please clarify official working hours as per the Right to Disconnect policy?”' })}
                  </span>{' '}
                  {t('womenRightsPage.bossMisuse.p3Note', { defaultValue: 'This puts gentle pressure on the organisation to follow rules.' })}
                </p>
              </div>

              {/* 4 */}
              <div className="space-y-0.5">
                <p>
                  <strong className="text-[#102849]">
                    {t('womenRightsPage.bossMisuse.p4Title', { defaultValue: '4. Report Extreme Cases' })}
                  </strong>{' '}
                  {t('womenRightsPage.bossMisuse.p4Text', { defaultValue: '- If the boss:' })}
                </p>
                <ul className="list-disc list-inside space-y-0.5 text-slate-600 pl-4 font-medium">
                  <li>{t('womenRightsPage.bossMisuse.p4List.0', { defaultValue: 'Repeatedly sending messages at night' })}</li>
                  <li>{t('womenRightsPage.bossMisuse.p4List.1', { defaultValue: 'Threatens consequences' })}</li>
                  <li>{t('womenRightsPage.bossMisuse.p4List.2', { defaultValue: 'Creates discomfort through late calls' })}</li>
                </ul>
                <p className="text-slate-600 text-[11.5px] sm:text-xs">
                  {t('womenRightsPage.bossMisuse.p4Note', { defaultValue: 'Women can raise it to HR - Internal Complaints Committee (for behaviour amounting to harassment) or to Labour authorities (if it becomes exploitation)' })}
                </p>
              </div>

              {/* 5 */}
              <div>
                <p>
                  <strong className="text-[#102849]">
                    {t('womenRightsPage.bossMisuse.p5Title', { defaultValue: '5. Use Team Language, Not Personal' })}
                  </strong>{' '}
                  {t('womenRightsPage.bossMisuse.p5Text', { defaultValue: '- Instead of saying “You disturb me”, say:' })}{' '}
                  <span className="font-semibold text-[#824497]">
                    {t('womenRightsPage.bossMisuse.p5Quote', { defaultValue: '“Our team should follow the Right to Disconnect policy for everyone.”' })}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Phone Banner */}
      <div className="mt-4 sm:mt-6">
        <PhoneBanner />
      </div>
    </div>
  )
}

export default WomenRights

