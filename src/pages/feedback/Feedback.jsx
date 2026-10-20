import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslation } from 'react-i18next'
import PageBanner from '../../components/common/PageBanner'
import PhoneBanner from '../../components/common/PhoneBanner'
import {
  feedbackSchema,
  ratingOptions,
  subjectOptions,
} from '../../schemas/feedback.schema'
import { submitFeedback } from '../../services/feedback.service'
import {
  Megaphone,
  User,
  Mail,
  Phone,
  Star,
  ChevronDown,
  PenLine,
  Send,
  Heart,
  Settings,
  Users,
  BarChart2,
  Siren,
  Headphones,
  ShieldAlert,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react'

export default function Feedback() {
  const { t } = useTranslation()
  const [hoveredRating, setHoveredRating] = useState(0)
  const [serverMessage, setServerMessage] = useState({ type: '', text: '' })

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      rating: 0,
      subject: '',
      message: '',
    },
    mode: 'onTouched',
  })

  const currentRating = watch('rating') || 0
  const messageValue = watch('message') || ''

  const handleRatingClick = (val) => {
    setValue('rating', val, { shouldValidate: true, shouldDirty: true })
  }

  const onSubmit = async (data) => {
    try {
      const payload = {
        full_name: data.name,
        email: data.email,
        phone: data.phone ? `+91${data.phone}` : '',
        rating: String(data.rating),
        subject: data.subject,
        message: data.message,
      }
      const res = await submitFeedback(payload)
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
      console.error('Feedback submit error:', error)
      setServerMessage({
        type: 'error',
        text:
          error?.response?.data?.message ||
          'Failed to submit your feedback. Please try again later.',
      })
    }
  }

  return (
    <>
      {/* Top Banner */}
      <PageBanner
        alt="Your Feedback - Pink Shakti"
        title={
          <>
            <span className="text-[#e60067]">{t("feedback.banner.titlePink", { defaultValue: "Your" })}</span>{' '}
            <span className="text-[#102849]">{t("feedback.banner.titleNavy", { defaultValue: "Feedback" })}</span>
          </>
        }
        description={
          <>
            <span className="block font-bold text-[#102849] text-sm sm:text-base lg:text-[1.1rem] mb-1">
              {t("feedback.banner.subtitleBold", { defaultValue: "Your Voice Matters to Us" })}
            </span>
            <span className="block text-slate-700 text-xs sm:text-sm">
              {t("feedback.banner.subtitleDesc", { defaultValue: "Help us improve and make Pink Shakti more useful, accessible and impactful for every woman. Share your feedback, suggestions or experience with us." })}
            </span>
          </>
        }
      />

      {/* Main Feedback Section - Sleek & Compact Profile */}
      <section className="bg-white px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <div className="mx-auto max-w-[1080px]">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5 items-start">

            {/* Left Card: Share Your Feedback Form */}
            <div className="group/formcard rounded-2xl sm:rounded-3xl border border-pink-100 bg-[#fff5f8] p-4 sm:p-5 lg:p-5.5 shadow-xs transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-pink-500/10">
              {/* Badge */}
              <div>
                <span className="inline-flex cursor-default items-center gap-1.5 rounded-full bg-[#ffd8e6] px-2.5 py-0.5 text-[10.5px] font-bold text-[#e60067]">
                  <Megaphone className="h-2.5 w-2.5" />
                  <span>{t("feedback.form.badge", { defaultValue: "SEND US YOUR FEEDBACK" })}</span>
                </span>
              </div>

              {/* Title */}
              <h2 className="mt-1.5 font-bold text-xl sm:text-[1.45rem] leading-tight">
                <span className="text-[#e60067]">{t("feedback.form.titlePink", { defaultValue: "Share" })}</span>{' '}
                <span className="text-[#102849]">{t("feedback.form.titleNavy", { defaultValue: "Your Feedback" })}</span>
              </h2>

              {/* Subtitle */}
              <p className="mt-0.5 text-[11px]  text-slate-600">
                {t("feedback.form.subtitle", { defaultValue: "Your feedback helps us serve you better. Please fill in the details below." })}
              </p>

              {/* Server Message Alert */}
              {serverMessage.text && (
                <div
                  className={`mt-2.5 flex items-center gap-2 rounded-xl border p-2.5 text-xs font-semibold animate-in fade-in duration-300 ${
                    serverMessage.type === 'success'
                      ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
                      : 'border-red-200 bg-red-50 text-red-600'
                  }`}
                >
                  {serverMessage.type === 'success' ? (
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                  ) : (
                    <AlertCircle className="h-4 w-4 shrink-0 text-red-500" />
                  )}
                  <span>{serverMessage.text}</span>
                </div>
              )}

              {/* Form with React Hook Form & Zod */}
              <form onSubmit={handleSubmit(onSubmit)} className="mt-3 space-y-2.5" noValidate>

                {/* Row 1: Full Name & Email Address */}
                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  <div className="group/field">
                    <label className="block text-[11px] font-semibold text-[#102849] mb-0.5">
                      {t("feedback.form.nameLabel", { defaultValue: "Full Name" })} <span className="text-[#e60067]">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2.5 text-slate-400">
                        <User className="h-3.5 w-3.5" />
                      </div>
                      <input
                        type="text"
                        {...register('name')}
                        placeholder={t("feedback.form.namePlaceholder", { defaultValue: "Enter your full name" })}
                        className={`w-full rounded-xl border bg-white py-1.5 pl-8 pr-2.5 text-xs sm:text-[13px] text-slate-700 placeholder-slate-400 outline-none transition-all duration-300 hover:shadow-xs focus:ring-1 ${errors.name
                          ? 'border-red-400 focus:border-red-500 focus:ring-red-100'
                          : 'border-pink-200/80 hover:border-pink-300 focus:border-[#e60067] focus:ring-pink-200'
                          }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-0.5 flex items-center gap-1 text-[10px] font-medium text-red-500">
                        <AlertCircle className="h-2.5 w-2.5 shrink-0" />
                        <span>{errors.name.message}</span>
                      </p>
                    )}
                  </div>

                  <div className="group/field">
                    <label className="block text-[11px] font-semibold text-[#102849] mb-0.5">
                      {t("feedback.form.emailLabel", { defaultValue: "Email Address" })} <span className="text-[#e60067]">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2.5 text-slate-400">
                        <Mail className="h-3.5 w-3.5" />
                      </div>
                      <input
                        type="email"
                        {...register('email')}
                        placeholder={t("feedback.form.emailPlaceholder", { defaultValue: "Enter your email address" })}
                        className={`w-full rounded-xl border bg-white py-1.5 pl-8 pr-2.5 text-xs sm:text-[13px] text-slate-700 placeholder-slate-400 outline-none transition-all duration-300 hover:shadow-xs focus:ring-1 ${errors.email
                          ? 'border-red-400 focus:border-red-500 focus:ring-red-100'
                          : 'border-pink-200/80 hover:border-pink-300 focus:border-[#e60067] focus:ring-pink-200'
                          }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-0.5 flex items-center gap-1 text-[10px] font-medium text-red-500">
                        <AlertCircle className="h-2.5 w-2.5 shrink-0" />
                        <span>{errors.email.message}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2: Phone Number */}
                <div className="group/field">
                  <label className="block text-[11px] font-semibold text-[#102849] mb-0.5">
                    {t("feedback.form.phoneLabel", { defaultValue: "Phone Number" })}
                  </label>
                  <div className="relative flex items-center">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2.5 text-slate-400">
                      <Phone className="h-3.5 w-3.5" />
                    </div>
                    <span className="pointer-events-none absolute left-7 inset-y-0 flex items-center text-xs sm:text-[12.5px]  text-[#102849] select-none border-r border-pink-200/90 pr-1.5 h-4 my-auto">
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
                      placeholder={t("feedback.form.phonePlaceholder", { defaultValue: "Enter 10-digit number" })}
                      className={`w-full rounded-xl border bg-white py-1.5 pl-16 pr-2.5 text-xs sm:text-[13px] text-slate-700 placeholder-slate-400 outline-none transition-all duration-300 hover:shadow-xs focus:ring-1 ${errors.phone
                        ? 'border-red-400 focus:border-red-500 focus:ring-red-100'
                        : 'border-pink-200/80 hover:border-pink-300 focus:border-[#e60067] focus:ring-pink-200'
                        }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-0.5 flex items-center gap-1 text-[10px] font-medium text-red-500">
                      <AlertCircle className="h-2.5 w-2.5 shrink-0" />
                      <span>{errors.phone.message}</span>
                    </p>
                  )}
                </div>

                {/* Rating Section with Stars and Labels */}
                <div>
                  <label className="block text-[11px] font-semibold text-[#102849] mb-1">
                    {t("feedback.form.ratingQuestion", { defaultValue: "How would you rate your experience with Pink Shakti?" })} <span className="text-[#e60067]">*</span>
                  </label>

                  <div className="grid grid-cols-5 gap-1">
                    {ratingOptions.map((opt) => {
                      const activeLevel = hoveredRating || currentRating
                      const isSelected = opt.value <= activeLevel
                      const ratingKeys = ['poor', 'fair', 'good', 'veryGood', 'excellent']
                      const translatedOptLabel = t(`feedback.form.ratings.${ratingKeys[opt.value - 1]}`, { defaultValue: opt.label })

                      return (
                        <button
                          type="button"
                          key={opt.value}
                          onClick={() => handleRatingClick(opt.value)}
                          onMouseEnter={() => setHoveredRating(opt.value)}
                          onMouseLeave={() => setHoveredRating(0)}
                          className="group flex flex-col items-center justify-center p-1 rounded-lg transition-all duration-200 hover:bg-pink-100/60 focus:outline-none"
                        >
                          <Star
                            className={`h-4.5 w-4.5 sm:h-5 sm:w-5 transition-transform duration-200 group-hover:scale-110 ${isSelected
                              ? 'text-[#e60067] fill-[#e60067]'
                              : 'text-[#e60067] fill-transparent'
                              }`}
                            strokeWidth={1.5}
                          />
                          <span
                            className={`mt-0.5 text-[9.5px] text-center leading-tight transition-colors duration-200 ${isSelected
                              ? 'font-bold text-[#e60067]'
                              : 'font-medium text-slate-600'
                              }`}
                          >
                            {translatedOptLabel}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                  {errors.rating && (
                    <p className="mt-1 flex items-center gap-1 text-[10px] font-medium text-red-500">
                      <AlertCircle className="h-2.5 w-2.5 shrink-0" />
                      <span>{errors.rating.message}</span>
                    </p>
                  )}
                </div>

                {/* Subject Field */}
                <div className="group/field">
                  <label className="block text-[11px] font-semibold text-[#102849] mb-0.5">
                    {t("feedback.form.subjectLabel", { defaultValue: "Subject" })} <span className="text-[#e60067]">*</span>
                  </label>
                  <input
                    type="text"
                    {...register('subject')}
                    placeholder={t("feedback.form.subjectPlaceholder", { defaultValue: "Enter subject" })}
                    className={`w-full rounded-xl border bg-white py-1.5 px-3 text-xs sm:text-[13px] text-slate-700 placeholder-slate-400 outline-none transition-all duration-300 hover:shadow-xs focus:ring-1 ${errors.subject
                      ? 'border-red-400 focus:border-red-500 focus:ring-red-100'
                      : 'border-pink-200/80 hover:border-pink-300 focus:border-[#e60067] focus:ring-pink-200'
                      }`}
                  />
                  {errors.subject && (
                    <p className="mt-0.5 flex items-center gap-1 text-[10px] font-medium text-red-500">
                      <AlertCircle className="h-2.5 w-2.5 shrink-0" />
                      <span>{errors.subject.message}</span>
                    </p>
                  )}
                </div>

                {/* Feedback Textarea */}
                <div className="group/field">
                  <label className="block text-[11px] font-semibold text-[#102849] mb-0.5">
                    {t("feedback.form.messageLabel", { defaultValue: "Your Feedback / Suggestions" })} <span className="text-[#e60067]">*</span>
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute left-2.5 top-2 text-slate-400">
                      <PenLine className="h-3.5 w-3.5" />
                    </div>
                    <textarea
                      {...register('message')}
                      rows={2.5}
                      placeholder={t("feedback.form.messagePlaceholder", { defaultValue: "Type your feedback or suggestion here..." })}
                      className={`w-full rounded-xl border bg-white py-1.5 pl-8 pr-2.5 text-xs sm:text-[13px] text-slate-700 placeholder-slate-400 outline-none transition-all duration-300 hover:shadow-xs focus:ring-1 resize-none ${errors.message
                        ? 'border-red-400 focus:border-red-500 focus:ring-red-100'
                        : 'border-pink-200/80 hover:border-pink-300 focus:border-[#e60067] focus:ring-pink-200'
                        }`}
                    />
                  </div>
                  <div className="flex items-center justify-between mt-0.5">
                    {errors.message ? (
                      <p className="flex items-center gap-1 text-[10px] font-medium text-red-500">
                        <AlertCircle className="h-2.5 w-2.5 shrink-0" />
                        <span>{errors.message.message}</span>
                      </p>
                    ) : (
                      <span />
                    )}
                    <span className="text-[9.5px] text-slate-400">
                      {messageValue.length}/500
                    </span>
                  </div>
                </div>

                {/* Submit Feedback Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex w-full items-center justify-center gap-2 rounded-xl btn-pink-solid py-2 px-4 text-xs sm:text-[13px] font-bold shadow-md shadow-pink-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/30 active:scale-[0.99] disabled:opacity-70 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <div className="h-3.5 w-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Send className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    )}
                    <span>{isSubmitting ? t("feedback.form.submittingButton", { defaultValue: "Submitting..." }) : t("feedback.form.submitButton", { defaultValue: "Submit Feedback" })}</span>
                  </button>
                </div>

              </form>
            </div>

            {/* Right Column: Top (Why Feedback Matters) & Bottom (Need Immediate Assistance) */}
            <div className="flex flex-col gap-3.5 sm:gap-4">

              {/* Card 1: Why Your Feedback Matters */}
              <div className="group/formcard rounded-2xl sm:rounded-3xl border border-pink-100 bg-[#fff5f8] p-4 sm:p-5 lg:p-5.5 shadow-xs transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-pink-500/10">

                {/* Badge */}
                <div>
                  <span className="inline-flex cursor-default items-center gap-1.5 rounded-full bg-[#ffd8e6] px-2.5 py-0.5 text-[10.5px] font-bold text-[#e60067]">
                    <Heart className="h-2.5 w-2.5 fill-current text-[#e60067]" />
                    <span>{t("feedback.whyMatters.badge", { defaultValue: "WHY YOUR FEEDBACK MATTERS" })}</span>
                  </span>
                </div>

                {/* Heading */}
                <h2 className="mt-1.5 font-bold text-xl sm:text-[1.45rem] leading-tight">
                  <span className="text-[#e60067]">{t("feedback.whyMatters.titlePink", { defaultValue: "Together" })}</span>{' '}
                  <span className="text-[#102849]">{t("feedback.whyMatters.titleNavy", { defaultValue: "for a Safer Tomorrow" })}</span>
                </h2>

                {/* Description */}
                <p className="mt-0.5 text-[11px]  text-slate-600 leading-snug">
                  {t("feedback.whyMatters.desc", { defaultValue: "Your feedback helps us understand what's working well and what can be improved to create a safer, more supportive platform." })}
                </p>

                {/* 2x2 Feature Grid */}
                <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">

                  {/* Feature 1: Improve Services */}
                  <div className="rounded-xl border border-pink-100/80 bg-white p-2 sm:p-2.5 flex items-start gap-2 shadow-2xs">
                    <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-[#e60067] text-white">
                      <Settings className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <h3 className="text-[11.5px] sm:text-xs font-bold text-[#102849] leading-snug">
                        {t("feedback.whyMatters.f1Title", { defaultValue: "Improve Services" })}
                      </h3>
                      <p className="mt-0.5 text-[10px] leading-tight text-slate-600">
                        {t("feedback.whyMatters.f1Desc", { defaultValue: "Help us enhance features and services based on input." })}
                      </p>
                    </div>
                  </div>

                  {/* Feature 2: Better Support */}
                  <div className="rounded-xl border border-pink-100/80 bg-white p-2 sm:p-2.5 flex items-start gap-2 shadow-2xs">
                    <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-[#e60067] text-white">
                      <Users className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <h3 className="text-[11.5px] sm:text-xs font-bold text-[#102849] leading-snug">
                        {t("feedback.whyMatters.f2Title", { defaultValue: "Better Support" })}
                      </h3>
                      <p className="mt-0.5 text-[10px] leading-tight text-slate-600">
                        {t("feedback.whyMatters.f2Desc", { defaultValue: "Your suggestions help provide timely and effective support." })}
                      </p>
                    </div>
                  </div>

                  {/* Feature 3: Stronger Community */}
                  <div className="rounded-xl border border-pink-100/80 bg-white p-2 sm:p-2.5 flex items-start gap-2 shadow-2xs">
                    <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-[#e60067] text-white">
                      <Users className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <h3 className="text-[11.5px] sm:text-xs font-bold text-[#102849] leading-snug">
                        {t("feedback.whyMatters.f3Title", { defaultValue: "Stronger Community" })}
                      </h3>
                      <p className="mt-0.5 text-[10px] leading-tight text-slate-600">
                        {t("feedback.whyMatters.f3Desc", { defaultValue: "Build a safer and more empowered community together." })}
                      </p>
                    </div>
                  </div>

                  {/* Feature 4: Real Impact */}
                  <div className="rounded-xl border border-pink-100/80 bg-white p-2 sm:p-2.5 flex items-start gap-2 shadow-2xs">
                    <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-[#e60067] text-white">
                      <BarChart2 className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <h3 className="text-[11.5px] sm:text-xs font-bold text-[#102849] leading-snug">
                        {t("feedback.whyMatters.f4Title", { defaultValue: "Real Impact" })}
                      </h3>
                      <p className="mt-0.5 text-[10px] leading-tight text-slate-600">
                        {t("feedback.whyMatters.f4Desc", { defaultValue: "Drive positive change and greater impact across UP." })}
                      </p>
                    </div>
                  </div>

                </div>

              </div>

              {/* Card 2: Need Immediate Assistance? */}
              <div className="group/formcard rounded-2xl sm:rounded-3xl border border-pink-100 bg-[#fff5f8] p-4 sm:p-5 lg:p-5.5 shadow-xs transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-pink-500/10">

                {/* Badge */}
                <div>
                  <span className="inline-flex cursor-default items-center gap-1.5 rounded-full bg-[#ffd8e6] px-2.5 py-0.5 text-[10.5px] font-bold text-[#e60067]">
                    <Phone className="h-2.5 w-2.5" />
                    <span>{t("feedback.immediate.badge", { defaultValue: "OTHER WAYS TO REACH US" })}</span>
                  </span>
                </div>

                {/* Heading */}
                <h2 className="mt-1.5 font-bold text-xl sm:text-[1.45rem] leading-tight">
                  <span className="text-[#e60067]">{t("feedback.immediate.titlePink", { defaultValue: "Need" })}</span>{' '}
                  <span className="text-[#102849]">{t("feedback.immediate.titleNavy", { defaultValue: "Immediate Assistance?" })}</span>
                </h2>

                {/* Subtitle */}
                <p className="mt-0.5 text-[11px]  text-slate-600">
                  {t("feedback.immediate.subtitle", { defaultValue: "For urgent support, please use our emergency helplines." })}
                </p>

                {/* 3 Helplines Grid */}
                <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">

                  {/* Helpline 1: 112 */}
                  <a
                    href="tel:112"
                    className="group rounded-xl border border-pink-100/80 bg-white p-2 sm:p-2.5 flex items-center gap-2 shadow-2xs transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-pink-200"
                  >
                    <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-[#e60067] text-white transition-transform duration-300 group-hover:scale-105">
                      <Siren className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-lg sm:text-xl font-black text-[#e60067] leading-none">
                        112
                      </div>
                      <p className="mt-0.5 text-[9.5px] sm:text-[10px] font-bold text-[#102849] leading-tight">
                        {t("feedback.immediate.h1Title", { defaultValue: "Emergency Response" })}
                      </p>
                    </div>
                  </a>

                  {/* Helpline 2: 181 */}
                  <a
                    href="tel:181"
                    className="group rounded-xl border border-pink-100/80 bg-white p-2 sm:p-2.5 flex items-center gap-2 shadow-2xs transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-pink-200"
                  >
                    <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-[#e60067] text-white transition-transform duration-300 group-hover:scale-105">
                      <Headphones className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-lg sm:text-xl font-black text-[#e60067] leading-none">
                        181
                      </div>
                      <p className="mt-0.5 text-[9.5px] sm:text-[10px] font-bold text-[#102849] leading-tight">
                        {t("feedback.immediate.h2Title", { defaultValue: "Women Helpline" })}
                      </p>
                    </div>
                  </a>

                  {/* Helpline 3: 1090 */}
                  <a
                    href="tel:1090"
                    className="group rounded-xl border border-pink-100/80 bg-white p-2 sm:p-2.5 flex items-center gap-2 shadow-2xs transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-pink-200"
                  >
                    <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-[#e60067] text-white transition-transform duration-300 group-hover:scale-105">
                      <ShieldAlert className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-lg sm:text-xl font-black text-[#e60067] leading-none">
                        1090
                      </div>
                      <p className="mt-0.5 text-[9.5px] sm:text-[10px] font-bold text-[#102849] leading-tight">
                        {t("feedback.immediate.h3Title", { defaultValue: "UP Power Line" })}
                      </p>
                    </div>
                  </a>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>


    </>
  )
}
