import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslation } from 'react-i18next'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  ChevronDown,
  Shield,
  Users,
  Leaf,
  ExternalLink,
  MessageSquare,
  AtSign,
  Globe,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react'
import PageBanner from '../../components/common/PageBanner'
import PhoneBanner from '../../components/common/PhoneBanner'
import { subjectOptions, officeLocation } from '../../constants/contactData'
import { getContactUs, submitContactUs } from '../../services/contact.service'
import { contactSchema } from '../../schemas/contact.schema'

export default function Contact() {
  const { t } = useTranslation()
  const [contactDetails, setContactDetails] = useState([])
  const [serverMessage, setServerMessage] = useState({ type: '', text: '' })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
    mode: 'onTouched',
  })

  useEffect(() => {
    const fetchContactDetails = async () => {
      try {
        const res = await getContactUs()
        if (res?.data && Array.isArray(res.data)) {
          setContactDetails(res.data)
        }
      } catch (error) {
        console.error('Error fetching contact details:', error)
      }
    }
    fetchContactDetails()
  }, [])

  const onSubmit = async (data) => {
    try {
      const payload = {
        full_name: data.name,
        email: data.email,
        phone: data.phone ? `+91${data.phone}` : '',
        subject: data.subject,
        message: data.message,
      }
      const res = await submitContactUs(payload)
      if (res?.status) {
        setServerMessage({
          type: 'success',
          text: res.message,
        })
        reset()
        setTimeout(() => {
          setServerMessage({ type: '', text: '' })
        }, 5000)
      } else {
        setServerMessage({
          type: 'error',
          text: res?.message || 'Something went wrong. Please try again.',
        })
      }
    } catch (error) {
      console.error('Contact submit error:', error)
      setServerMessage({
        type: 'error',
        text: error?.response?.data?.message || 'Failed to submit your message. Please try again later.',
      })
    }
  }

  return (
    <>
      <PageBanner
        alt="Contact Us - Pink Shakti"
        title={
          <>
            <span className="text-[#e60067]">{t("contact.banner.titlePink", "Contact")}</span>{" "}
            <span className="text-[#102849]">{t("contact.banner.titleNavy", "Us")}</span>
          </>
        }
        description={
          <>
            <span className="block font-bold text-[#102849] text-sm sm:text-base lg:text-[1.1rem] mb-1.5 sm:mb-2">
              {t("contact.banner.subtitleBold", "We're here to help you connect with Pink Shakti.")}
            </span>
            <span>
              {t("contact.banner.subtitleDesc", "For any inquiries, collaborations, support or information, please reach out to us. We would love to hear from you.")}
            </span>
          </>
        }
      />

      {/* Exact Match Contact Section (Balanced Sleek Size, Pure Background Color) */}
      <section className="bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6 items-stretch">

            {/* Left Card: Contact Information */}
            <div className="group/formcard flex flex-col justify-between rounded-3xl border border-pink-100 bg-[#fff5f8] p-5 sm:p-6 lg:p-7 shadow-xs transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/10">
              <div>
                {/* Badge */}
                <div>
                  <span className="inline-flex cursor-default items-center gap-1.5 rounded-full bg-[#ffd8e6] px-2.5 py-0.5 text-[11px] font-bold text-[#e60067] transition-transform duration-300 hover:scale-105">
                    <Phone className="h-2.5 w-2.5" />
                    <span>{t("contact.info.badge", "GET IN TOUCH")}</span>
                  </span>
                </div>

                {/* Title - Matched with the Form Box heading size */}
                <h2 className="mt-2 font-bold text-2xl sm:text-[1.75rem] lg:text-[1.85rem] leading-tight">
                  <span className="text-[#e60067]">{t("contact.info.titlePink", "Contact")}</span>{" "}
                  <span className="text-[#102849]">{t("contact.info.titleNavy", "Information")}</span>
                </h2>

                {/* Subtitle */}
                <p className="mt-1 text-xs sm:text-[13px] text-slate-600">
                  {t("contact.info.subtitle", "You can reach out to us through the following details:")}
                </p>

                {/* Contact Items */}
                <div className="mt-5 space-y-3.5">

                  {/* Item 1: Contact Person */}
                  <div className="group flex items-start gap-3 transition-all duration-300">
                    <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-[#ffd8e6] text-[#e60067] shadow-sm transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110 group-hover:bg-[#ffc2d8] group-hover:shadow-md">
                      <User className="h-4 w-4 fill-[#e60067]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[13px] sm:text-sm text-[#102849] leading-snug transition-colors duration-300 group-hover:text-[#e60067]">
                        {contactDetails[0]?.name}
                      </h3>
                      {contactDetails[0]?.designation?.split(';').map((desig, i) => (
                        <p key={i} className="mt-0.5 text-[11px] sm:text-[12px] text-slate-600 leading-tight">
                          {desig.trim()}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Item 2: Office Address */}
                  <div className="group flex items-start gap-3 transition-all duration-300">
                    <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-[#ffd8e6] text-[#e60067] shadow-sm transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110 group-hover:bg-[#ffc2d8] group-hover:shadow-md">
                      <MapPin className="h-4 w-4 fill-[#e60067] text-[#ffd8e6]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[13px] sm:text-sm text-[#e60067] leading-snug transition-colors duration-300 group-hover:text-[#e60067]">
                        {contactDetails[1]?.title}
                      </h3>
                      <p className="mt-0.5 text-[11px] sm:text-[12px] text-slate-600 leading-snug whitespace-pre-line">
                        {contactDetails[1]?.address}
                      </p>
                    </div>
                  </div>

                  {/* Item 3: Call / WhatsApp */}
                  <div className="group flex items-start gap-3 transition-all duration-300">
                    <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-[#ffd8e6] text-[#e60067] shadow-sm transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110 group-hover:bg-[#ffc2d8] group-hover:shadow-md">
                      <Phone className="h-4 w-4 fill-[#e60067] text-[#ffd8e6]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[13px] sm:text-sm text-[#102849] leading-snug transition-colors duration-300 group-hover:text-[#e60067]">
                        {contactDetails[2]?.title}
                      </h3>
                      <p className="mt-0.5 text-[11px] sm:text-[13px] font-medium text-slate-600">
                        {contactDetails[2]?.phone}
                      </p>
                    </div>
                  </div>

                  {/* Item 4: Email Address */}
                  <div className="group flex items-start gap-3 transition-all duration-300">
                    <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-[#ffd8e6] text-[#e60067] shadow-sm transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110 group-hover:bg-[#ffc2d8] group-hover:shadow-md">
                      <Mail className="h-4 w-4 fill-[#e60067] text-[#ffd8e6]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[13px] sm:text-sm text-[#102849] leading-snug transition-colors duration-300 group-hover:text-[#e60067]">
                        {contactDetails[3]?.title}
                      </h3>
                      {contactDetails[3]?.email?.split(',').map((email, i) => (
                        <p
                          key={i}
                          className="mt-0.5 text-[11px] sm:text-[13px] font-medium text-slate-600"
                        >
                          {email.trim()}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Item 5 */}
                  {contactDetails[4] && (
                    <div className="group flex items-start gap-3 transition-all duration-300">
                      <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-[#ffd8e6] text-[#e60067] shadow-sm transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110 group-hover:bg-[#ffc2d8] group-hover:shadow-md">
                        <MessageSquare className="h-4 w-4 fill-[#e60067] text-[#ffd8e6]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[13px] sm:text-sm text-[#102849] leading-snug transition-colors duration-300 group-hover:text-[#e60067]">
                          {contactDetails[4]?.title}
                        </h3>
                        {contactDetails[4]?.email ? (
                          contactDetails[4]?.email.split(',').map((email, i) => (
                            <p
                              key={i}
                              className="mt-0.5 text-[11px] sm:text-[13px] font-medium text-slate-600"
                            >
                              {email.trim()}
                            </p>
                          ))
                        ) : contactDetails[4]?.phone ? (
                          <p className="mt-0.5 text-[11px] sm:text-[13px] font-medium text-slate-600">
                            {contactDetails[4]?.phone}
                          </p>
                        ) : (
                          <p className="mt-0.5 text-[11px] sm:text-[12px] text-slate-600 leading-snug">
                            {contactDetails[4]?.address}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Item 6: Pink Shakti Contact */}
                  {contactDetails[5] && (
                    <div className="group flex items-start gap-3 transition-all duration-300">
                      <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-[#ffd8e6] text-[#e60067] shadow-sm transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110 group-hover:bg-[#ffc2d8] group-hover:shadow-md">
                        <AtSign className="h-4 w-4 text-[#e60067]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[13px] sm:text-sm text-[#102849] leading-snug transition-colors duration-300 group-hover:text-[#e60067]">
                          {contactDetails[5]?.title}
                        </h3>
                        {contactDetails[5]?.email ? (
                          contactDetails[5]?.email.split(',').map((email, i) => (
                            <p
                              key={i}
                              className="mt-0.5 text-[11px] sm:text-[13px] font-medium text-slate-600"
                            >
                              {email.trim()}
                            </p>
                          ))
                        ) : contactDetails[5]?.phone ? (
                          <p className="mt-0.5 text-[11px] sm:text-[13px] font-medium text-slate-600">
                            {contactDetails[5]?.phone}
                          </p>
                        ) : (
                          <p className="mt-0.5 text-[11px] sm:text-[12px] text-slate-600 leading-snug">
                            {contactDetails[5]?.address}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Additional items from API if any */}
                  {contactDetails.slice(6).map((item, idx) => (
                    <div key={item.id || idx} className="group flex items-start gap-3 transition-all duration-300">
                      <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-[#ffd8e6] text-[#e60067] shadow-sm transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110 group-hover:bg-[#ffc2d8] group-hover:shadow-md">
                        <Globe className="h-4 w-4 text-[#e60067]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[13px] sm:text-sm text-[#102849] leading-snug transition-colors duration-300 group-hover:text-[#e60067]">
                          {item.title}
                        </h3>
                        {item.email ? (
                          item.email.split(',').map((email, i) => (
                            <p
                              key={i}
                              className="mt-0.5 text-[11px] sm:text-[13px] font-medium text-slate-600"
                            >
                              {email.trim()}
                            </p>
                          ))
                        ) : item.phone ? (
                          <p className="mt-0.5 text-[11px] sm:text-[13px] font-medium text-slate-600">
                            {item.phone}
                          </p>
                        ) : (
                          <p className="mt-0.5 text-[11px] sm:text-[12px] text-slate-600 leading-snug">
                            {item.address}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}

                </div>
              </div>
            </div>

            <div className="group/formcard flex flex-col justify-between rounded-3xl border border-pink-100 bg-[#fff5f8] p-5 sm:p-6 lg:p-7 shadow-xs transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/10">
              <div>
                {/* Badge */}
                <div>
                  <span className="inline-flex cursor-default items-center gap-1 rounded-full bg-[#ffd8e6] px-2.5 py-0.5 text-[11px] font-bold text-[#e60067] shadow-sm transition-transform duration-300 hover:scale-105 hover:bg-[#ffc2d8]">
                    <Send className="h-2.5 w-2.5" />
                    <span>{t("contact.form.badge", "SEND US A MESSAGE")}</span>
                  </span>
                </div>

                {/* Title */}
                <h2 className="mt-2 font-bold text-2xl sm:text-[1.75rem] lg:text-[1.85rem] leading-tight">
                  <span className="text-[#e60067]">{t("contact.form.titlePink", "Send Us")}</span>{" "}
                  <span className="text-[#102849]">{t("contact.form.titleNavy", "a Message")}</span>
                </h2>

                {/* Subtitle */}
                <p className="mt-1 text-xs sm:text-[13px] text-slate-600 transition-colors duration-300 group-hover/formcard:text-slate-800">
                  {t("contact.form.subtitle", "Fill in the form below and we will get back to you as soon as possible.")}
                </p>

                {serverMessage.text && (
                  <div className={`mt-3 flex items-center gap-2 rounded-xl p-3 text-xs font-semibold shadow-xs ${serverMessage.type === 'success'
                    ? 'bg-pink-100 border border-pink-300/80 text-[#e60067]'
                    : 'bg-red-50 border border-red-200 text-red-600'
                    }`}>
                    {serverMessage.type === 'success' ? (
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#e60067]" />
                    ) : (
                      <AlertCircle className="h-4 w-4 shrink-0 text-red-500" />
                    )}
                    <span>{serverMessage.text}</span>
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-3">
                  {/* Full Name & Email Address */}
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {/* Full Name */}
                    <div className="group/field">
                      <label className="block text-[11px] sm:text-xs font-semibold text-[#102849] mb-1 transition-colors duration-300 group-focus-within/field:text-[#e60067]">
                        {t("contact.form.nameLabel", "Full Name")} <span className="text-[#e60067]">*</span>
                      </label>
                      <input
                        type="text"
                        {...register('name')}
                        placeholder={t("contact.form.namePlaceholder", "Enter your full name")}
                        className={`w-full rounded-xl border bg-white px-3.5 py-2 text-[13px] sm:text-sm text-slate-700 placeholder-slate-400 outline-none transition-all duration-300 hover:shadow-xs focus:ring-1 ${errors.name
                          ? 'border-red-400 focus:border-red-500 focus:ring-red-100'
                          : 'border-pink-200/80 hover:border-pink-300 focus:border-[#e60067] focus:shadow-md focus:shadow-pink-100 focus:ring-pink-200'
                          }`}
                      />
                      {errors.name && (
                        <p className="mt-1 flex items-center gap-1 text-[11px] font-medium text-red-500">
                          <AlertCircle className="h-3 w-3 shrink-0" />
                          <span>{errors.name.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div className="group/field">
                      <label className="block text-[11px] sm:text-xs font-semibold text-[#102849] mb-1 transition-colors duration-300 group-focus-within/field:text-[#e60067]">
                        {t("contact.form.emailLabel", "Email Address")} <span className="text-[#e60067]">*</span>
                      </label>
                      <input
                        type="email"
                        {...register('email')}
                        placeholder={t("contact.form.emailPlaceholder", "Enter your email address")}
                        className={`w-full rounded-xl border bg-white px-3.5 py-2 text-[13px] sm:text-sm text-slate-700 placeholder-slate-400 outline-none transition-all duration-300 hover:shadow-xs focus:ring-1 ${errors.email
                          ? 'border-red-400 focus:border-red-500 focus:ring-red-100'
                          : 'border-pink-200/80 hover:border-pink-300 focus:border-[#e60067] focus:shadow-md focus:shadow-pink-100 focus:ring-pink-200'
                          }`}
                      />
                      {errors.email && (
                        <p className="mt-1 flex items-center gap-1 text-[11px] font-medium text-red-500">
                          <AlertCircle className="h-3 w-3 shrink-0" />
                          <span>{errors.email.message}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="group/field">
                    <label className="block text-[11px] sm:text-xs font-semibold text-[#102849] mb-1 transition-colors duration-300 group-focus-within/field:text-[#e60067]">
                      {t("contact.form.phoneLabel", "Phone Number")}
                    </label>
                    <div className="relative flex items-center">
                      <span className="pointer-events-none absolute left-3.5 inset-y-0 z-20 flex items-center text-xs sm:text-[13px] font-semibold text-[#102849] select-none border-r border-pink-200/90 pr-2 h-4 my-auto">
                        +91
                      </span>
                      <input
                        type="tel"
                        inputMode="numeric"
                        maxLength={10}
                        {...register('phone', {
                          onChange: (e) => {
                            e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10)
                          },
                        })}
                        onKeyDown={(e) => {
                          if (
                            !/[0-9]/.test(e.key) &&
                            !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.key)
                          ) {
                            e.preventDefault()
                          }
                        }}
                        placeholder={t("contact.form.phonePlaceholder", "Enter 10-digit number")}
                        className={`w-full rounded-xl border bg-white py-2 pl-15 pr-3.5 text-[13px] sm:text-sm text-slate-700 placeholder-slate-400 outline-none transition-all duration-300 hover:shadow-xs focus:ring-1 ${errors.phone
                          ? 'border-red-400 focus:border-red-500 focus:ring-red-100'
                          : 'border-pink-200/80 hover:border-pink-300 focus:border-[#e60067] focus:shadow-md focus:shadow-pink-100 focus:ring-pink-200'
                          }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 flex items-center gap-1 text-[11px] font-medium text-red-500">
                        <AlertCircle className="h-3 w-3 shrink-0" />
                        <span>{errors.phone.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Subject Field */}
                  <div className="group/field">
                    <label className="block text-[11px] sm:text-xs font-semibold text-[#102849] mb-1 transition-colors duration-300 group-focus-within/field:text-[#e60067]">
                      {t("contact.form.subjectLabel", "Subject")} <span className="text-[#e60067]">*</span>
                    </label>
                    <input
                      type="text"
                      {...register('subject')}
                      placeholder={t("contact.form.subjectPlaceholder", "Enter subject")}
                      className={`w-full rounded-xl border bg-white px-3.5 py-2 text-[13px] sm:text-sm text-slate-700 placeholder-slate-400 outline-none transition-all duration-300 hover:shadow-xs focus:ring-1 ${errors.subject
                        ? 'border-red-400 focus:border-red-500 focus:ring-red-100'
                        : 'border-pink-200/80 hover:border-pink-300 focus:border-[#e60067] focus:shadow-md focus:shadow-pink-100 focus:ring-pink-200'
                        }`}
                    />
                    {errors.subject && (
                      <p className="mt-1 flex items-center gap-1 text-[11px] font-medium text-red-500">
                        <AlertCircle className="h-3 w-3 shrink-0" />
                        <span>{errors.subject.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="group/field">
                    <label className="block text-[11px] sm:text-xs font-semibold text-[#102849] mb-1 transition-colors duration-300 group-focus-within/field:text-[#e60067]">
                      {t("contact.form.messageLabel", "Message")} <span className="text-[#e60067]">*</span>
                    </label>
                    <textarea
                      rows="3"
                      {...register('message')}
                      placeholder={t("contact.form.messagePlaceholder", "Type your message here...")}
                      className={`w-full rounded-xl border bg-white px-3.5 py-2 text-[13px] sm:text-sm text-slate-700 placeholder-slate-400 outline-none transition-all duration-300 hover:shadow-xs focus:ring-1 resize-none ${errors.message
                        ? 'border-red-400 focus:border-red-500 focus:ring-red-100'
                        : 'border-pink-200/80 hover:border-pink-300 focus:border-[#e60067] focus:shadow-md focus:shadow-pink-100 focus:ring-pink-200'
                        }`}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 flex items-center gap-1 text-[11px] font-medium text-red-500">
                        <AlertCircle className="h-3 w-3 shrink-0" />
                        <span>{errors.message.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Send Message Button */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group flex w-full items-center justify-center gap-1.5 rounded-xl btn-pink-solid py-2.5 text-[13px] sm:text-sm font-bold shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md hover:shadow-pink-500/40 active:scale-[0.98] cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <Send className="h-3.5 w-3.5 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      <span>{isSubmitting ? t("contact.form.sendingButton", "Sending...") : t("contact.form.sendButton", "Send Message")}</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Location Section: Find Us Here (Pure Background Color Matching Design) */}
      <section className="bg-white px-4 pb-4 sm:px-6  lg:px-8  pt-0">
        <div className="mx-auto max-w-[1600px]">
          {/* Main Container - Reduced padding (p-4 sm:p-5 lg:p-6) and added Hover Lift */}
          <div className="group/location relative overflow-hidden rounded-2xl sm:rounded-3xl border border-pink-100 bg-[#fff5f8] px-2 md:px-8  py-4 shadow-xs transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/10">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:items-center">

              {/* Left Details */}
              <div className="lg:col-span-5">
                {/* Badge */}
                <div>
                  <span className="inline-flex cursor-default items-center gap-1.5 rounded-full bg-[#ffd8e6] px-2.5 py-0.5 text-[11px] font-bold text-[#e60067] shadow-sm transition-transform duration-300 hover:scale-105 hover:bg-[#ffc2d8]">
                    <MapPin className="h-2.5 w-2.5 fill-[#e60067]" />
                    <span>{t("contact.location.badge", officeLocation.badge)}</span>
                  </span>
                </div>

                {/* Heading - Reduced top margin (mt-1.5) */}
                <h2 className="mt-1.5 font-bold text-xl sm:text-2xl lg:text-[1.75rem] leading-tight">
                  <span className="text-[#e60067] transition-colors duration-300 group-hover/location:text-[#c9005a]">
                    {t("contact.location.titlePink", officeLocation.titlePink)}
                  </span>{" "}
                  <span className="text-[#102849]">{t("contact.location.titleNavy", officeLocation.titleNavy)}</span>
                </h2>

                {/* Address - Reduced top margin (mt-1.5) */}
                <p className="mt-1.5 text-[11px] sm:text-xs font-semibold text-[#102849] leading-relaxed transition-colors duration-300 group-hover/location:text-slate-800">
                  {officeLocation.addressLine1}<br />
                  {officeLocation.addressLine2}
                </p>

                {/* Get Directions Link Button - Reduced top margin (mt-3) and added icon animation */}
                <div className="mt-3">
                  <a
                    href={officeLocation.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 rounded-xl btn-pink-solid px-4 py-2 text-[11px] sm:text-xs font-semibold shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-pink-500/30 active:scale-[0.98]"
                  >
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{t("contact.location.getDirections", "Get Directions")}</span>
                    {/* Icon slide animation on hover */}
                    <ExternalLink className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>

              {/* Right Map View - Reduced heights (h-[180px] to h-[240px]) */}
              <div className="lg:w-[700px] lg:h-[210px]">
                <div className="relative h-[180px] sm:h-[220px] md:h-[210px] w-full overflow-hidden rounded-2xl border border-pink-200/80 shadow-xs transition-all duration-500 hover:shadow-lg hover:shadow-pink-200">
                  <iframe
                    src={officeLocation.mapEmbedSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="AKTU New Campus - Navachar Incubation Centre, FOAP"
                    className="h-full w-full border-0 transition-transform duration-700 hover:scale-[1.02]"
                  ></iframe>

                  {/* Marker Tooltip Overlay - Added hover scale effect */}
                  <div className="absolute left-3 top-3 sm:left-4 sm:top-4 z-10 flex cursor-default items-center gap-2 rounded-xl border border-pink-100 bg-white/95 px-3 py-2 shadow-md backdrop-blur-xs transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ffd8e6] text-[#e60067]">
                      <MapPin className="h-3.5 w-3.5 fill-[#e60067]" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-[#102849] leading-tight">
                        {officeLocation.name}
                      </p>
                      <p className="text-[10px] text-slate-500 leading-tight">
                        {officeLocation.addressLine2}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Pillars Strip: Safety | Awareness | Empowerment */}
      <section className="bg-white px-2 sm:px-4 py-6 sm:px-6 lg:py-6 ">
        <div className="mx-auto max-w-[1600px]">
          {/* Main Container - Reduced mobile horizontal padding (px-3) to give more room */}
          <div className="group/banner relative overflow-hidden rounded-2xl sm:rounded-3xl border border-pink-100 bg-[#fff5f8] py-3.5 sm:py-5 px-3 sm:px-12 shadow-xs transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/10">

            {/* Changed to flex-nowrap and justify-between for mobile, justify-center for desktop */}
            <div className="flex w-full flex-nowrap items-center justify-between gap-1 sm:justify-center sm:gap-10 md:gap-20">

              {/* Safety */}
              <div className="group flex cursor-pointer items-center gap-1 sm:gap-2.5 transition-transform duration-300 ease-out hover:scale-105">
                <Shield className="h-3.5 w-3.5 sm:h-7 sm:w-7 shrink-0 fill-[#e60067] text-[#e60067] transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-110" />
                <span className="whitespace-nowrap font-extrabold text-[#e60067] text-[11px] min-[375px]:text-[13px] sm:text-xl lg:text-2xl tracking-tight transition-colors duration-300 group-hover:text-[#c9005a]">
                  {t("contact.pillars.safety", "Safety")}
                </span>
              </div>

              {/* Divider 1 - Now visible on mobile as a small line */}
              <div className="block h-4 sm:h-7 w-[1px] sm:w-[1.5px] shrink-0 bg-pink-300/80 transition-colors duration-500 group-hover/banner:bg-pink-400"></div>

              {/* Awareness */}
              <div className="group flex cursor-pointer items-center gap-1 sm:gap-2.5 transition-transform duration-300 ease-out hover:scale-105">
                <Users className="h-3.5 w-3.5 sm:h-7 sm:w-7 shrink-0 fill-[#e60067] text-[#e60067] transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-110" />
                <span className="whitespace-nowrap font-extrabold text-[#e60067] text-[11px] min-[375px]:text-[13px] sm:text-xl lg:text-2xl tracking-tight transition-colors duration-300 group-hover:text-[#c9005a]">
                  {t("contact.pillars.awareness", "Awareness")}
                </span>
              </div>

              {/* Divider 2 - Now visible on mobile as a small line */}
              <div className="block h-4 sm:h-7 w-[1px] sm:w-[1.5px] shrink-0 bg-pink-300/80 transition-colors duration-500 group-hover/banner:bg-pink-400"></div>

              {/* Empowerment */}
              <div className="group flex cursor-pointer items-center gap-1 sm:gap-2.5 transition-transform duration-300 ease-out hover:scale-105">
                <Leaf className="h-3.5 w-3.5 sm:h-7 sm:w-7 shrink-0 fill-[#e60067] text-[#e60067] transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-110 group-hover:-rotate-3" />
                <span className="whitespace-nowrap font-extrabold text-[#e60067] text-[11px] min-[375px]:text-[13px] sm:text-xl lg:text-2xl tracking-tight transition-colors duration-300 group-hover:text-[#c9005a]">
                  {t("contact.pillars.empowerment", "Empowerment")}
                </span>
              </div>

            </div>
          </div>
        </div>
      </section>


    </>
  )
}
