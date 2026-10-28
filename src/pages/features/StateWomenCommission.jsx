import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import {
  FileText,
  Phone,
  Mail,
  Printer,
  Globe,
  MapPin,
} from 'lucide-react'
import BannerSlider from '../../components/common/BannerSlider'
import commissionBanner from '../../assets/banner/STATE_WOMEN_COMMISSION-transformed.jpeg'
import PhoneBanner from '../../components/common/PhoneBanner'

// WhatsApp SVG Icon
function WhatsAppIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  )
}

function StateWomenCommission() {
  const { t } = useTranslation()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="w-full bg-transparent min-h-screen flex flex-col justify-between">
      {/* Top Banner Section */}
      <BannerSlider
        images={[commissionBanner]}
        autoPlay={false}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
        {/* FILE YOUR COMPLAINT HERE Container */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-pink-100/90 p-5 sm:p-7 lg:p-9 shadow-[0_4px_24px_-6px_rgba(230,0,103,0.06)]">
          {/* Header */}
          <div className="flex items-start gap-3.5 sm:gap-4 mb-6 sm:mb-8">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#e60067] flex items-center justify-center shrink-0 shadow-xs text-white">
              <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-[#e60067] text-[18px] sm:text-[20px] md:text-[22px] tracking-wide leading-tight">
                {t('stateWomenCommissionPage.complaintSection.heading', {
                  defaultValue: 'FILE YOUR COMPLAINT HERE',
                })}
              </h2>
              <p className="text-[#102849] text-xs sm:text-[13px] md:text-[13.5px] font-medium mt-1 leading-snug">
                {t('stateWomenCommissionPage.complaintSection.subheading', {
                  defaultValue:
                    'You can file your complaint with the State Women Commission, Uttar Pradesh through the following ways:',
                })}
              </p>
            </div>
          </div>

          {/* 8 Complaint Channels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-5">
            {/* 1. Download Form */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-pink-100/90 p-3.5 sm:p-4 flex items-center gap-3.5 shadow-xs hover:shadow-md transition-all group">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-pink-50/90 border border-pink-100/80 flex items-center justify-center shrink-0 text-[#e60067] group-hover:scale-105 transition-transform">
                <FileText className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-[12.5px] text-[#102849] font-medium leading-tight">
                  {t(
                    'stateWomenCommissionPage.complaintSection.formDownload.title',
                    { defaultValue: 'To submit your application personally' }
                  )}
                </p>
                <a
                  href="https://mahilaayog.up.gov.in/pdf/complaint_form.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block font-bold text-xs sm:text-[13px] text-[#e60067] underline hover:text-[#c9005a] transition-colors"
                >
                  {t(
                    'stateWomenCommissionPage.complaintSection.formDownload.action',
                    { defaultValue: 'Click to download the form' }
                  )}
                </a>
              </div>
            </div>

            {/* 2. Toll Free No. */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-pink-100/90 p-3.5 sm:p-4 flex items-center gap-3.5 shadow-xs hover:shadow-md transition-all group">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-pink-50/90 border border-pink-100/80 flex items-center justify-center shrink-0 text-[#e60067] group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5 fill-current" />
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-[12.5px] text-[#102849] font-medium leading-tight">
                  {t(
                    'stateWomenCommissionPage.complaintSection.tollFree.title',
                    { defaultValue: 'Toll Free No.' }
                  )}
                </p>
                <a
                  href="tel:18001805220"
                  className="mt-1 block font-bold text-sm sm:text-[15px] md:text-[16px] text-[#e60067] tracking-wide hover:underline"
                >
                  1800-180-5220
                </a>
              </div>
            </div>

            {/* 3. Phone No. */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-pink-100/90 p-3.5 sm:p-4 flex items-center gap-3.5 shadow-xs hover:shadow-md transition-all group">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-pink-50/90 border border-pink-100/80 flex items-center justify-center shrink-0 text-[#e60067] group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5 fill-current" />
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-[12.5px] text-[#102849] font-medium leading-tight">
                  {t('stateWomenCommissionPage.complaintSection.phone.title', {
                    defaultValue: 'Phone No.',
                  })}
                </p>
                <a
                  href="tel:05222306403"
                  className="mt-1 block font-bold text-sm sm:text-[15px] md:text-[16px] text-[#e60067] tracking-wide hover:underline"
                >
                  0522-2306403
                </a>
              </div>
            </div>

            {/* 4. Email */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-pink-100/90 p-3.5 sm:p-4 flex items-center gap-3.5 shadow-xs hover:shadow-md transition-all group">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-pink-50/90 border border-pink-100/80 flex items-center justify-center shrink-0 text-[#e60067] group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-[12.5px] text-[#102849] font-medium leading-tight">
                  {t('stateWomenCommissionPage.complaintSection.email.title', {
                    defaultValue: 'File Complaint Via E-Mail',
                  })}
                </p>
                <a
                  href="mailto:up.mahilaayog@yahoo.com"
                  className="mt-1 block font-bold text-xs sm:text-[13px] text-[#e60067] underline hover:text-[#c9005a] truncate transition-colors"
                >
                  up.mahilaayog@yahoo.com
                </a>
              </div>
            </div>

            {/* 5. WhatsApp */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-pink-100/90 p-3.5 sm:p-4 flex items-center gap-3.5 shadow-xs hover:shadow-md transition-all group">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-pink-50/90 border border-pink-100/80 flex items-center justify-center shrink-0 text-[#e60067] group-hover:scale-105 transition-transform">
                <WhatsAppIcon className="w-5 h-5 fill-current" />
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-[12.5px] text-[#102849] font-medium leading-tight">
                  {t(
                    'stateWomenCommissionPage.complaintSection.whatsapp.title',
                    { defaultValue: 'File Complaint Via WhatsApp' }
                  )}
                </p>
                <a
                  href="https://wa.me/916306511708"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block font-bold text-sm sm:text-[15px] md:text-[16px] text-[#e60067] tracking-wide hover:underline"
                >
                  6306511708
                </a>
              </div>
            </div>

            {/* 6. Fax */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-pink-100/90 p-3.5 sm:p-4 flex items-center gap-3.5 shadow-xs hover:shadow-md transition-all group">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-pink-50/90 border border-pink-100/80 flex items-center justify-center shrink-0 text-[#e60067] group-hover:scale-105 transition-transform">
                <Printer className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-[12.5px] text-[#102849] font-medium leading-tight">
                  {t('stateWomenCommissionPage.complaintSection.fax.title', {
                    defaultValue: 'File Complaint Via Fax',
                  })}
                </p>
                <p className="mt-1 font-bold text-sm sm:text-[15px] md:text-[16px] text-[#e60067] tracking-wide">
                  0522-2728671
                </p>
              </div>
            </div>

            {/* 7. Online Complaint */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-pink-100/90 p-3.5 sm:p-4 flex items-center gap-3.5 shadow-xs hover:shadow-md transition-all group">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-pink-50/90 border border-pink-100/80 flex items-center justify-center shrink-0 text-[#e60067] group-hover:scale-105 transition-transform">
                <Globe className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-[12.5px] text-[#102849] font-medium leading-tight">
                  {t('stateWomenCommissionPage.complaintSection.online.title', {
                    defaultValue: 'To file Online Complaint',
                  })}
                </p>
                <a
                  href="https://mahilaayog.up.gov.in/complaint.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block font-bold text-xs sm:text-[13px] text-[#e60067] underline hover:text-[#c9005a] transition-colors"
                >
                  {t(
                    'stateWomenCommissionPage.complaintSection.online.action',
                    { defaultValue: 'Click here' }
                  )}
                </a>
              </div>
            </div>

            {/* 8. In person / Registered Post (2 Columns on tablet/desktop) */}
            <div className="md:col-span-2 lg:col-span-2 bg-white rounded-xl sm:rounded-2xl border border-pink-100/90 p-3.5 sm:p-4 flex items-start gap-3.5 shadow-xs hover:shadow-md transition-all group">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-pink-50/90 border border-pink-100/80 flex items-center justify-center shrink-0 text-[#e60067] mt-0.5 group-hover:scale-105 transition-transform">
                <MapPin className="w-5 h-5 fill-[#e60067] text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-[13px] text-[#102849] font-semibold leading-snug">
                  {t(
                    'stateWomenCommissionPage.complaintSection.address.title',
                    {
                      defaultValue:
                        'To submit the complaint in person or via registered post',
                    }
                  )}
                </p>
                <div className="mt-1 text-xs sm:text-[12.5px] text-[#102849] leading-snug font-medium space-y-0.5">
                  <p>
                    {t(
                      'stateWomenCommissionPage.complaintSection.address.line1',
                      {
                        defaultValue:
                          "State Women's Commission, Uttar Pradesh,",
                      }
                    )}
                  </p>
                  <p>
                    {t(
                      'stateWomenCommissionPage.complaintSection.address.line2',
                      {
                        defaultValue: 'Third Floor, Manav Adhikar Bhawan,',
                      }
                    )}
                  </p>
                  <p>
                    {t(
                      'stateWomenCommissionPage.complaintSection.address.line3',
                      {
                        defaultValue:
                          'TC-34 V.-1 Vibhuti Khand, Gomti Nagar, Lucknow.',
                      }
                    )}
                  </p>
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

export default StateWomenCommission
