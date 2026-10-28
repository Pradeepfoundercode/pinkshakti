import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'lucide-react';
import morphedImg from '../../assets/women-rights/download (1).png';
import PhoneBanner from '../../components/common/PhoneBanner';

export default function DeleteMorphedPhotos() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-[#102849]">
      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Main Content Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl shadow-pink-500/5 border border-pink-100">
          {/* 1. Top Infographic Image */}
          <div className="w-full flex justify-center mb-6 sm:mb-8">
            <div className="w-full max-w-[620px] rounded-2xl overflow-hidden border border-pink-200/80 shadow-md bg-pink-50">
              <img
                src={morphedImg}
                alt={t('deleteMorphedPhotosPage.imageAlt', { defaultValue: 'Delete and Report Morphed Images - Your Digital Self-Defense' })}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* 2. Main Heading */}
          <div className="text-center sm:text-left mb-8 border-b border-pink-100 pb-5">
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#e60067] leading-tight">
              {t('deleteMorphedPhotosPage.mainHeading', { defaultValue: 'IMMEDIATE ACTIONS TO DELETE MORPHED PHOTOS FROM THE INTERNET' })}
            </h1>
          </div>

          {/* Description */}
          <p className="text-slate-700 font-medium text-sm sm:text-[15px] mb-6 leading-relaxed">
            {t('deleteMorphedPhotosPage.mainDesc', { defaultValue: "Report to the Platform Hosting the Image Whether it's a social media site, website, forum, or Google, each has a mechanism to report such content:" })}
          </p>

          {/* 3. Steps & Content in exact sequence */}
          <div className="space-y-8 sm:space-y-10 text-slate-700 text-sm sm:text-[15px] leading-relaxed">
            {/* 1. Social Media (Facebook, Instagram, Twitter, etc.) */}
            <section className="space-y-3">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-[#102849] flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-pink-100 text-[#e60067] font-bold text-sm flex items-center justify-center shrink-0">
                  1
                </span>
                <span>{t('deleteMorphedPhotosPage.step1.title', { defaultValue: 'Social Media (Facebook, Instagram, Twitter, etc.)' })}</span>
              </h2>

              <div className="pl-0 sm:pl-9">
                <ol className="list-decimal list-inside space-y-1.5 font-medium text-slate-700 pl-1">
                  <li>{t('deleteMorphedPhotosPage.step1.p1', { defaultValue: 'Go to the post/photo → Click “Report”' })}</li>
                  <li>{t('deleteMorphedPhotosPage.step1.p2', { defaultValue: 'Select “Non-consensual intimate image”, “Harassment”, or “Inappropriate content”' })}</li>
                  <li>{t('deleteMorphedPhotosPage.step1.p3', { defaultValue: 'Use their support form if available (especially for image-based abuse)' })}</li>
                  <li>{t('deleteMorphedPhotosPage.step1.p4', { defaultValue: 'Facebook: Report Non-Consensual Intimate Image' })}</li>
                  <li>{t('deleteMorphedPhotosPage.step1.p5', { defaultValue: 'Instagram: Report Abuse' })}</li>
                  <li>{t('deleteMorphedPhotosPage.step1.p6', { defaultValue: 'Twitter/X: Report Non-consensual nudity' })}</li>
                </ol>
              </div>
            </section>

            {/* 2. File a Complaint on the National Cyber Crime Portal (India) */}
            <section className="space-y-3 pt-2 border-t border-slate-100">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-[#102849] flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-pink-100 text-[#e60067] font-bold text-sm flex items-center justify-center shrink-0">
                  2
                </span>
                <span>{t('deleteMorphedPhotosPage.step2.title', { defaultValue: 'File a Complaint on the National Cyber Crime Portal (India)' })}</span>
              </h2>

              <div className="pl-0 sm:pl-9 space-y-3">
                <ol className="list-decimal list-inside space-y-1.5 font-medium text-slate-700 pl-1">
                  <li>
                    <a
                      href="https://cybercrime.gov.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0284c7] font-bold hover:underline inline-flex items-center gap-1"
                    >
                      https://cybercrime.gov.in/ <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </li>
                  <li>{t('deleteMorphedPhotosPage.step2.p1', { defaultValue: 'Select “Report Women/Child Related Crime”' })}</li>
                  <li>{t('deleteMorphedPhotosPage.step2.p2', { defaultValue: 'File an official complaint (anonymous option available)' })}</li>
                  <li>{t('deleteMorphedPhotosPage.step2.p3', { defaultValue: 'Attach screenshots, URLs, date/time, and description' })}</li>
                </ol>

                {/* Benefits */}
                <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-1.5 mt-2">
                  <h3 className="font-bold text-emerald-900 text-sm sm:text-base">
                    {t('deleteMorphedPhotosPage.benefitsHeading', { defaultValue: 'Benefits:' })}
                  </h3>
                  <ol className="list-decimal list-inside space-y-1 text-emerald-950 font-medium text-xs sm:text-sm pl-1">
                    <li>{t('deleteMorphedPhotosPage.step2.b1', { defaultValue: 'The National Cyber Crime Portal is Free to use' })}</li>
                    <li>{t('deleteMorphedPhotosPage.step2.b2', { defaultValue: 'Fastest response for Indian citizens, especially for women-related crimes' })}</li>
                    <li>{t('deleteMorphedPhotosPage.step2.b3', { defaultValue: 'Offers assistance in getting content removed from platforms' })}</li>
                    <li>{t('deleteMorphedPhotosPage.step2.b4', { defaultValue: 'Leads to legal action + removal orders for websites' })}</li>
                    <li>{t('deleteMorphedPhotosPage.step2.b5', { defaultValue: 'This can result in removal of content + legal action against the uploader.' })}</li>
                  </ol>
                </div>
              </div>
            </section>

            {/* 3. You can request Google to remove such images from its search results */}
            <section className="space-y-3 pt-2 border-t border-slate-100">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-[#102849] flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-pink-100 text-[#e60067] font-bold text-sm flex items-center justify-center shrink-0">
                  3
                </span>
                <span>{t('deleteMorphedPhotosPage.step3.title', { defaultValue: 'You can request Google to remove such images from its search results:' })}</span>
              </h2>

              <div className="pl-0 sm:pl-9 space-y-2">
                <ol className="list-decimal list-inside space-y-1.5 font-medium text-slate-700 pl-1">
                  <li>
                    <a
                      href="https://support.google.com/websearch/troubleshooter/3111061"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0284c7] font-bold hover:underline inline-flex items-center gap-1"
                    >
                      {t('deleteMorphedPhotosPage.step3.linkText', { defaultValue: 'Google Content Removal Request' })} <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </li>
                  <li>{t('deleteMorphedPhotosPage.step3.p1', { defaultValue: 'Choose “Nude or sexually explicit content that was shared without my consent”' })}</li>
                  <li>{t('deleteMorphedPhotosPage.step3.p2', { defaultValue: 'Fill the form and attach evidence' })}</li>
                  <li>{t('deleteMorphedPhotosPage.step3.p3', { defaultValue: "This doesn't delete the image from the host site, but removes it from search results, making it harder to find." })}</li>
                </ol>
              </div>
            </section>

            {/* 4. Contact the Website Directly */}
            <section className="space-y-3 pt-2 border-t border-slate-100">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-[#102849] flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-pink-100 text-[#e60067] font-bold text-sm flex items-center justify-center shrink-0">
                  4
                </span>
                <span>{t('deleteMorphedPhotosPage.step4.title', { defaultValue: 'Contact the Website Directly' })}</span>
              </h2>

              <div className="pl-0 sm:pl-9 space-y-1.5 font-medium text-slate-700">
                <ol className="list-decimal list-inside space-y-1 pl-1">
                  <li>{t('deleteMorphedPhotosPage.step4.p1', { defaultValue: 'If the image is on an independent site or forum:' })}</li>
                  <li>{t('deleteMorphedPhotosPage.step4.p2', { defaultValue: 'Look for “Contact Us”, “Report Abuse”, or DMCA takedown request' })}</li>
                  <li>{t('deleteMorphedPhotosPage.step4.p3', { defaultValue: 'Send a formal removal request with a legal tone and evidence' })}</li>
                </ol>
              </div>
            </section>

            {/* 5. File an FIR or Legal Complaint */}
            <section className="space-y-3 pt-2 border-t border-slate-100">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-[#102849] flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-pink-100 text-[#e60067] font-bold text-sm flex items-center justify-center shrink-0">
                  5
                </span>
                <span>{t('deleteMorphedPhotosPage.step5.title', { defaultValue: 'File an FIR or Legal Complaint' })}</span>
              </h2>

              <div className="pl-0 sm:pl-9 space-y-2 font-medium text-slate-700">
                <ol className="list-decimal list-inside space-y-1 pl-1">
                  <li>{t('deleteMorphedPhotosPage.step5.p1', { defaultValue: 'Visit your nearest Cyber Crime Cell or Police Station' })}</li>
                  <li>{t('deleteMorphedPhotosPage.step5.p2', { defaultValue: 'Laws applicable in India:' })}</li>
                  <li>{t('deleteMorphedPhotosPage.step5.p3', { defaultValue: 'Section 66E, 67, 67A of the IT Act' })}</li>
                  <li>{t('deleteMorphedPhotosPage.step5.p4', { defaultValue: 'IPC 354C (voyeurism), 509 (insulting modesty)' })}</li>
                  <li>{t('deleteMorphedPhotosPage.step5.p5', { defaultValue: 'With a police complaint, you can legally force the site to remove content and prosecute the offender.' })}</li>
                </ol>
              </div>
            </section>

            {/* 6. Seek Help from Cyber NGOs or Legal Support */}
            <section className="space-y-3 pt-2 border-t border-slate-100">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-[#102849] flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-pink-100 text-[#e60067] font-bold text-sm flex items-center justify-center shrink-0">
                  6
                </span>
                <span>{t('deleteMorphedPhotosPage.step6.title', { defaultValue: 'Seek Help from Cyber NGOs or Legal Support' })}</span>
              </h2>

              <div className="pl-0 sm:pl-9 space-y-1.5 font-medium text-slate-700">
                <ol className="list-decimal list-inside space-y-1 pl-1">
                  <li>
                    Cyber Saathi –{' '}
                    <a
                      href="https://cybersaathi.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0284c7] font-bold hover:underline inline-flex items-center gap-1"
                    >
                      https://cybersaathi.org <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </li>
                  <li>{t('deleteMorphedPhotosPage.step6.p2', { defaultValue: 'Red Dot Foundation (Safecity)' })}</li>
                  <li>{t('deleteMorphedPhotosPage.step6.p3', { defaultValue: 'Free Legal Aid Clinics – Law colleges or legal NGOs in your city' })}</li>
                </ol>
              </div>
            </section>

            {/* 7. StopNCII.org (Trusted, Free, Global) */}
            <section className="space-y-3 pt-2 border-t border-slate-100">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-[#102849] flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-pink-100 text-[#e60067] font-bold text-sm flex items-center justify-center shrink-0">
                  7
                </span>
                <span>{t('deleteMorphedPhotosPage.step7.title', { defaultValue: 'StopNCII.org (Trusted, Free, Global)' })}</span>
              </h2>

              <div className="pl-0 sm:pl-9 space-y-2 font-medium text-slate-700">
                <ol className="list-decimal list-inside space-y-1 pl-1">
                  <li>
                    <a
                      href="https://stopncii.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0284c7] font-bold hover:underline inline-flex items-center gap-1"
                    >
                      https://stopncii.org/ <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </li>
                  <li>{t('deleteMorphedPhotosPage.step7.p1', { defaultValue: 'Helps remove non-consensual intimate images (NCII) shared online (including morphed photos)' })}</li>
                  <li>{t('deleteMorphedPhotosPage.step7.p2', { defaultValue: 'Created by the Revenge Porn Helpline UK with global tech support (Meta, TikTok, Bumble, etc.)' })}</li>
                  <li>{t('deleteMorphedPhotosPage.step7.p3', { defaultValue: 'Uses a secure digital fingerprinting system to identify and block the image from being uploaded again' })}</li>
                  <li>{t('deleteMorphedPhotosPage.step7.p4', { defaultValue: 'Privacy focused: You don’t need to upload the image to the site' })}</li>
                  <li>{t('deleteMorphedPhotosPage.step7.p5', { defaultValue: 'Supports: Facebook, Instagram, Reddit, TikTok, OnlyFans, and more' })}</li>
                </ol>
              </div>
            </section>

            {/* 8. DMCA.com (Paid Service) */}
            <section className="space-y-3 pt-2 border-t border-slate-100">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-[#102849] flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-pink-100 text-[#e60067] font-bold text-sm flex items-center justify-center shrink-0">
                  8
                </span>
                <span>{t('deleteMorphedPhotosPage.step8.title', { defaultValue: 'DMCA.com (Paid Service)' })}</span>
              </h2>

              <div className="pl-0 sm:pl-9 space-y-3 font-medium text-slate-700">
                <ol className="list-decimal list-inside space-y-1 pl-1">
                  <li>
                    <a
                      href="https://www.dmca.com/takedowns.aspx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0284c7] font-bold hover:underline inline-flex items-center gap-1"
                    >
                      https://www.dmca.com/takedowns.aspx <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </li>
                  <li>{t('deleteMorphedPhotosPage.step8.p1', { defaultValue: 'Professional takedown service for copyright and personal privacy violations' })}</li>
                  <li>{t('deleteMorphedPhotosPage.step8.p2', { defaultValue: 'You submit the image + URLs, and they send official legal takedown requests to websites and hosts' })}</li>
                </ol>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h3 className="font-bold text-[#102849] text-xs sm:text-sm">
                    {t('deleteMorphedPhotosPage.benefitsHeading', { defaultValue: 'Benefits :' })}
                  </h3>
                  <ol className="list-decimal list-inside space-y-0.5 text-xs sm:text-sm pl-1">
                    <li>{t('deleteMorphedPhotosPage.step8.b1', { defaultValue: 'Has a reputation-based advantage, especially with global web hosts' })}</li>
                    <li>{t('deleteMorphedPhotosPage.step8.b2', { defaultValue: 'Paid service, but they manage everything for you' })}</li>
                  </ol>
                </div>
              </div>
            </section>

            {/* 9. Reputation Defender / NetReputation / Incogni (Paid, Professional Tools) */}
            <section className="space-y-3 pt-2 border-t border-slate-100">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-[#102849] flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-pink-100 text-[#e60067] font-bold text-sm flex items-center justify-center shrink-0">
                  9
                </span>
                <span>{t('deleteMorphedPhotosPage.step9.title', { defaultValue: 'Reputation Defender / NetReputation / Incogni (Paid, Professional Tools)' })}</span>
              </h2>

              <div className="pl-0 sm:pl-9 space-y-3 font-medium text-slate-700">
                <p>{t('deleteMorphedPhotosPage.step9.intro', { defaultValue: 'These companies specialize in removing negative or harmful content about individuals online:' })}</p>
                <ol className="list-decimal list-inside space-y-1 pl-1">
                  <li>
                    <a
                      href="https://www.reputationdefender.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0284c7] font-bold hover:underline inline-flex items-center gap-1"
                    >
                      https://www.reputationdefender.com <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.netreputation.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0284c7] font-bold hover:underline inline-flex items-center gap-1"
                    >
                      https://www.netreputation.com <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://incogni.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0284c7] font-bold hover:underline inline-flex items-center gap-1"
                    >
                      https://incogni.com <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </li>
                </ol>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h3 className="font-bold text-[#102849] text-xs sm:text-sm">
                    {t('deleteMorphedPhotosPage.benefitsHeading', { defaultValue: 'Benefits :' })}
                  </h3>
                  <ol className="list-decimal list-inside space-y-0.5 text-xs sm:text-sm pl-1">
                    <li>{t('deleteMorphedPhotosPage.step9.b1', { defaultValue: 'Best for: High-profile cases or wide-spread content' })}</li>
                    <li>{t('deleteMorphedPhotosPage.step9.b2', { defaultValue: 'Paid services (cost varies based on how much content is out there)' })}</li>
                  </ol>
                </div>
              </div>
            </section>

            {/* 10. Google Removal Tools */}
            <section className="space-y-3 pt-2 border-t border-slate-100">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-[#102849] flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-pink-100 text-[#e60067] font-bold text-sm flex items-center justify-center shrink-0">
                  10
                </span>
                <span>{t('deleteMorphedPhotosPage.step10.title', { defaultValue: 'Google Removal Tools' })}</span>
              </h2>

              <div className="pl-0 sm:pl-9 space-y-1.5 font-medium text-slate-700">
                <ol className="list-decimal list-inside space-y-1 pl-1">
                  <li>
                    <a
                      href="https://support.google.com/websearch/troubleshooter/3111061"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0284c7] font-bold hover:underline inline-flex items-center gap-1"
                    >
                      https://support.google.com/websearch/troubleshooter/3111061 <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </li>
                  <li>{t('deleteMorphedPhotosPage.step10.p1', { defaultValue: 'If your morphed photo appears in Google Search results' })}</li>
                  <li>{t('deleteMorphedPhotosPage.step10.p2', { defaultValue: 'Google won’t delete the image from the host site, but will de-index it, making it harder to find' })}</li>
                </ol>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Mobile Download Banner */}
      <div className="mt-8">
        <PhoneBanner />
      </div>
    </div>
  );
}
