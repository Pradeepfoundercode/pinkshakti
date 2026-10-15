import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, User, ChevronDown, Shield, Users, Leaf, ExternalLink } from 'lucide-react'
import PageBanner from '../components/common/PageBanner'
import PhoneBanner from '../components/common/PhoneBanner'
import { subjectOptions, officeLocation } from '../constants/contactData'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 4000)
  }

  return (
    <>
      <PageBanner
        alt="Contact Us - Pink Shakti"
        title={
          <>
            <span className="text-[#e60067]">Contact</span>{" "}
            <span className="text-[#102849]">Us</span>
          </>
        }
        description={
          <>
            <span className="block font-bold text-[#102849] text-sm sm:text-base lg:text-[1.1rem] mb-1.5 sm:mb-2">
              We're here to help you connect with Pink Shakti.
            </span>
            <span>
              For any inquiries, collaborations, support or information, please reach out to us. We would love to hear from you.
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
        <span>GET IN TOUCH</span>
      </span>
    </div>

    {/* Title - Matched with the Form Box heading size */}
    <h2 className="mt-2 font-bold text-2xl sm:text-[1.75rem] lg:text-[1.85rem] leading-tight">
      <span className="text-[#e60067]">Contact</span>{" "}
      <span className="text-[#102849]">Information</span>
    </h2>

    {/* Subtitle */}
    <p className="mt-1 text-xs sm:text-[13px] text-slate-600">
      You can reach out to us through the following details:
    </p>

    {/* 5 Contact Items */}
    <div className="mt-5 space-y-3.5">
      
      {/* Item 1: Snigdhaa Ritesh */}
      <div className="group flex items-start gap-3 transition-all duration-300">
        {/* Animated Icon */}
        <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-[#ffd8e6] text-[#e60067] shadow-sm transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110 group-hover:bg-[#ffc2d8] group-hover:shadow-md">
          <User className="h-4 w-4 fill-[#e60067]" />
        </div>
        <div>
          {/* Animated Heading */}
          <h3 className="font-bold text-[13px] sm:text-sm text-[#102849] leading-snug transition-colors duration-300 group-hover:text-[#e60067]">
            Snigdhaa Ritesh
          </h3>
          <p className="mt-0.5 text-[11px] sm:text-[12px] text-slate-600 leading-tight">
            Chief Visionary, Pink Shakti
          </p>
          <p className="text-[11px] sm:text-[12px] text-slate-600 leading-tight">
            Founder, CEO &amp; Managing Director, Inaequalis Consulting Pvt. Ltd.
          </p>
        </div>
      </div>

      {/* Item 2: Office Address */}
      <div className="group flex items-start gap-3 transition-all duration-300">
        <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-[#ffd8e6] text-[#e60067] shadow-sm transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110 group-hover:bg-[#ffc2d8] group-hover:shadow-md">
          <MapPin className="h-4 w-4 fill-[#e60067] text-[#ffd8e6]" />
        </div>
        <div>
          <h3 className="font-bold text-[13px] sm:text-sm text-[#102849] leading-snug transition-colors duration-300 group-hover:text-[#e60067]">
            Office Address
          </h3>
          <p className="mt-0.5 text-[11px] sm:text-[12px] text-slate-600 leading-snug">
            Navachar Incubation Centre FOAP,<br />
            AKTU, Lucknow, Uttar Pradesh
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
            Call / WhatsApp
          </h3>
          {/* Sliding Link Animation */}
          <a
            href="tel:+919305076654"
            className="mt-0.5 inline-block text-[11px] sm:text-[13px] font-medium text-slate-600 transition-all duration-300 ease-out hover:translate-x-1 hover:text-[#e60067]"
          >
            +91 93050 76654
          </a>
        </div>
      </div>

      {/* Item 4: Email Address */}
      <div className="group flex items-start gap-3 transition-all duration-300">
        <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-[#ffd8e6] text-[#e60067] shadow-sm transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110 group-hover:bg-[#ffc2d8] group-hover:shadow-md">
          <Mail className="h-4 w-4 fill-[#e60067] text-[#ffd8e6]" />
        </div>
        <div>
          <h3 className="font-bold text-[13px] sm:text-sm text-[#102849] leading-snug transition-colors duration-300 group-hover:text-[#e60067]">
            Email Address
          </h3>
          {/* Sliding Link Animations */}
          <a
            href="mailto:inaequalis.consulting@gmail.com"
            className="mt-0.5 block w-fit text-[11px] sm:text-[13px] font-medium text-slate-600 transition-all duration-300 ease-out hover:translate-x-1 hover:text-[#e60067]"
          >
            inaequalis.consulting@gmail.com
          </a>
          <a
            href="mailto:ceo@pinkshakti.in"
            className="block w-fit text-[11px] sm:text-[13px] font-medium text-slate-600 transition-all duration-300 ease-out hover:translate-x-1 hover:text-[#e60067]"
          >
            ceo@pinkshakti.in
          </a>
        </div>
      </div>

      {/* Item 5: Pink Shakti Contact */}
      <div className="group flex items-start gap-3 transition-all duration-300">
        <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-[#ffd8e6] text-[#e60067] shadow-sm transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110 group-hover:bg-[#ffc2d8] group-hover:shadow-md">
          <Mail className="h-4 w-4 fill-[#e60067] text-[#ffd8e6]" />
        </div>
        <div>
          <h3 className="font-bold text-[13px] sm:text-sm text-[#102849] leading-snug transition-colors duration-300 group-hover:text-[#e60067]">
            Pink Shakti Contact
          </h3>
          {/* Sliding Link Animation */}
          <a
            href="mailto:impact.pinkshakti@gmail.com"
            className="mt-0.5 inline-block text-[11px] sm:text-[13px] font-medium text-slate-600 transition-all duration-300 ease-out hover:translate-x-1 hover:text-[#e60067]"
          >
            impact.pinkshakti@gmail.com
          </a>
        </div>
      </div>
      
    </div>
  </div>
</div>

            {/* Right Card: Send Us a Message */}
           {/* Added group/formcard and hover lift/shadow to the main container */}
<div className="group/formcard flex flex-col justify-between rounded-3xl border border-pink-100 bg-[#fff5f8] p-5 sm:p-6 lg:p-7 shadow-xs transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/10">
  <div>
    {/* Badge */}
    <div>
      <span className="inline-flex cursor-default items-center gap-1 rounded-full bg-[#ffd8e6] px-2.5 py-0.5 text-[11px] font-bold text-[#e60067] shadow-sm transition-transform duration-300 hover:scale-105 hover:bg-[#ffc2d8]">
        <Send className="h-2.5 w-2.5" />
        <span>SEND US A MESSAGE</span>
      </span>
    </div>

    {/* Title */}
    <h2 className="mt-2 font-bold text-2xl sm:text-[1.75rem] lg:text-[1.85rem] leading-tight">
      <span className="text-[#e60067]">Send Us</span>{" "}
      <span className="text-[#102849]">a Message</span>
    </h2>

    {/* Subtitle */}
    <p className="mt-1 text-xs sm:text-[13px] text-slate-600 transition-colors duration-300 group-hover/formcard:text-slate-800">
      Fill in the form below and we will get back to you as soon as possible.
    </p>

    {submitted && (
      <div className="mt-3 animate-pulse rounded-xl bg-pink-200/60 p-2.5 text-xs font-semibold text-[#e60067] border border-pink-300/60">
        Thank you! Your message has been sent successfully. We will get back to you soon.
      </div>
    )}

    {/* Form */}
    <form onSubmit={handleSubmit} className="mt-4 space-y-3">
      {/* Full Name & Email Address */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {/* Input Wrapper with group/field for Smart Labels */}
        <div className="group/field">
          <label className="block text-[11px] sm:text-xs font-semibold text-[#102849] mb-1 transition-colors duration-300 group-focus-within/field:text-[#e60067]">
            Full Name <span className="text-[#e60067]">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full rounded-xl border border-pink-200/80 bg-white px-3.5 py-2 text-[13px] sm:text-sm text-slate-700 placeholder-slate-400 outline-none transition-all duration-300 hover:border-pink-300 hover:shadow-sm focus:-translate-y-0.5 focus:border-[#e60067] focus:shadow-md focus:shadow-pink-100 focus:ring-1 focus:ring-pink-200"
          />
        </div>

        <div className="group/field">
          <label className="block text-[11px] sm:text-xs font-semibold text-[#102849] mb-1 transition-colors duration-300 group-focus-within/field:text-[#e60067]">
            Email Address <span className="text-[#e60067]">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            className="w-full rounded-xl border border-pink-200/80 bg-white px-3.5 py-2 text-[13px] sm:text-sm text-slate-700 placeholder-slate-400 outline-none transition-all duration-300 hover:border-pink-300 hover:shadow-sm focus:-translate-y-0.5 focus:border-[#e60067] focus:shadow-md focus:shadow-pink-100 focus:ring-1 focus:ring-pink-200"
          />
        </div>
      </div>

      {/* Phone Number */}
      <div className="group/field">
        <label className="block text-[11px] sm:text-xs font-semibold text-[#102849] mb-1 transition-colors duration-300 group-focus-within/field:text-[#e60067]">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          className="w-full rounded-xl border border-pink-200/80 bg-white px-3.5 py-2 text-[13px] sm:text-sm text-slate-700 placeholder-slate-400 outline-none transition-all duration-300 hover:border-pink-300 hover:shadow-sm focus:-translate-y-0.5 focus:border-[#e60067] focus:shadow-md focus:shadow-pink-100 focus:ring-1 focus:ring-pink-200"
        />
      </div>

      {/* Subject Dropdown */}
      <div className="group/field">
        <label className="block text-[11px] sm:text-xs font-semibold text-[#102849] mb-1 transition-colors duration-300 group-focus-within/field:text-[#e60067]">
          Subject <span className="text-[#e60067]">*</span>
        </label>
        <div className="relative group/select">
          <select
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full appearance-none rounded-xl border border-pink-200/80 bg-white px-3.5 py-2 pr-8 text-[13px] sm:text-sm text-slate-700 outline-none transition-all duration-300 hover:border-pink-300 hover:shadow-sm focus:-translate-y-0.5 focus:border-[#e60067] focus:shadow-md focus:shadow-pink-100 focus:ring-1 focus:ring-pink-200 cursor-pointer"
          >
            <option value="" disabled>Select a subject</option>
            {subjectOptions.map((subj) => (
              <option key={subj} value={subj}>{subj}</option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500 transition-colors duration-300 group-hover/select:text-[#e60067] group-focus-within/field:text-[#e60067]" />
        </div>
      </div>

      {/* Message */}
      <div className="group/field">
        <label className="block text-[11px] sm:text-xs font-semibold text-[#102849] mb-1 transition-colors duration-300 group-focus-within/field:text-[#e60067]">
          Message <span className="text-[#e60067]">*</span>
        </label>
        <textarea
          name="message"
          rows="3" 
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Type your message here..."
          className="w-full rounded-xl border border-pink-200/80 bg-white px-3.5 py-2 text-[13px] sm:text-sm text-slate-700 placeholder-slate-400 outline-none transition-all duration-300 hover:border-pink-300 hover:shadow-sm focus:-translate-y-0.5 focus:border-[#e60067] focus:shadow-md focus:shadow-pink-100 focus:ring-1 focus:ring-pink-200 resize-none"
        ></textarea>
      </div>

      {/* Send Message Button */}
      <div className="pt-1">
        <button
          type="submit"
          className="group flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#e60067] py-2.5 text-[13px] sm:text-sm font-bold text-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#c9005a] hover:shadow-md hover:shadow-pink-500/40 active:scale-[0.98] cursor-pointer"
        >
          <Send className="h-3.5 w-3.5 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          <span>Send Message</span>
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
              <span>{officeLocation.badge}</span>
            </span>
          </div>

          {/* Heading - Reduced top margin (mt-1.5) */}
          <h2 className="mt-1.5 font-bold text-xl sm:text-2xl lg:text-[1.75rem] leading-tight">
            <span className="text-[#e60067] transition-colors duration-300 group-hover/location:text-[#c9005a]">
              {officeLocation.titlePink}
            </span>{" "}
            <span className="text-[#102849]">{officeLocation.titleNavy}</span>
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
              className="group inline-flex items-center gap-1.5 rounded-xl bg-[#e60067] px-4 py-2 text-[11px] sm:text-xs font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c9005a] hover:shadow-md hover:shadow-pink-500/30 active:scale-[0.98]"
            >
              <MapPin className="h-3.5 w-3.5" />
              <span>Get Directions</span>
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
    <section className="bg-white px-2 sm:px-4 py-6 sm:px-6 lg:py-6">
  <div className="mx-auto max-w-[1600px]">
    {/* Main Container - Reduced mobile horizontal padding (px-3) to give more room */}
    <div className="group/banner relative overflow-hidden rounded-2xl sm:rounded-3xl border border-pink-100 bg-[#fff5f8] py-3.5 sm:py-5 px-3 sm:px-12 shadow-xs transition-all duration-500 hover:shadow-md hover:shadow-pink-500/15">
      
      {/* Changed to flex-nowrap and justify-between for mobile, justify-center for desktop */}
      <div className="flex w-full flex-nowrap items-center justify-between gap-1 sm:justify-center sm:gap-10 md:gap-20">
        
        {/* Safety */}
        <div className="group flex cursor-pointer items-center gap-1 sm:gap-2.5 transition-transform duration-300 ease-out hover:scale-105">
          <Shield className="h-3.5 w-3.5 sm:h-7 sm:w-7 shrink-0 fill-[#e60067] text-[#e60067] transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-110" />
          <span className="whitespace-nowrap font-extrabold text-[#e60067] text-[11px] min-[375px]:text-[13px] sm:text-xl lg:text-2xl tracking-tight transition-colors duration-300 group-hover:text-[#c9005a]">
            Safety
          </span>
        </div>

        {/* Divider 1 - Now visible on mobile as a small line */}
        <div className="block h-4 sm:h-7 w-[1px] sm:w-[1.5px] shrink-0 bg-pink-300/80 transition-colors duration-500 group-hover/banner:bg-pink-400"></div>

        {/* Awareness */}
        <div className="group flex cursor-pointer items-center gap-1 sm:gap-2.5 transition-transform duration-300 ease-out hover:scale-105">
          <Users className="h-3.5 w-3.5 sm:h-7 sm:w-7 shrink-0 fill-[#e60067] text-[#e60067] transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-110" />
          <span className="whitespace-nowrap font-extrabold text-[#e60067] text-[11px] min-[375px]:text-[13px] sm:text-xl lg:text-2xl tracking-tight transition-colors duration-300 group-hover:text-[#c9005a]">
            Awareness
          </span>
        </div>

        {/* Divider 2 - Now visible on mobile as a small line */}
        <div className="block h-4 sm:h-7 w-[1px] sm:w-[1.5px] shrink-0 bg-pink-300/80 transition-colors duration-500 group-hover/banner:bg-pink-400"></div>

        {/* Empowerment */}
        <div className="group flex cursor-pointer items-center gap-1 sm:gap-2.5 transition-transform duration-300 ease-out hover:scale-105">
          <Leaf className="h-3.5 w-3.5 sm:h-7 sm:w-7 shrink-0 fill-[#e60067] text-[#e60067] transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-110 group-hover:-rotate-3" />
          <span className="whitespace-nowrap font-extrabold text-[#e60067] text-[11px] min-[375px]:text-[13px] sm:text-xl lg:text-2xl tracking-tight transition-colors duration-300 group-hover:text-[#c9005a]">
            Empowerment
          </span>
        </div>

      </div>
    </div>
  </div>
</section>

      <PhoneBanner />
    </>
  )
}
