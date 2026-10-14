import React from 'react'
import PageBanner from '../components/common/PageBanner'
import homeBanner from "../assets/home/Empowered_Women.png"


import communities from "../assets/home/Pink Shakti Community Portrait.png"
import cameralogo from "../assets/home/Pink Target and Binoculars Icons1.png"
import targetlogo from "../assets/home/Pink Target and Binoculars Icons.png"

import leader1 from "../assets/home/Elegant Indian Woman in Purple Sari (1).png"
import leader2 from "../assets/iloveimg-compressed (1) (1)/Polished Corporate Portrait in Pink Circle.png"
import leader3 from "../assets/iloveimg-compressed (1) (1)/Pastel Pink Circle Portrait.png"
import leader4 from "../assets/iloveimg-compressed (1) (1)/Professional Portrait in Pink Circle.png"
import leader5 from "../assets/iloveimg-compressed (1) (1)/Elegant Indian Saree Portrait.png"
import leader6 from "../assets/iloveimg-compressed (1) (1)/Elegant Indian Woman in Pink Circle.png"
import leader7 from "../assets/iloveimg-compressed (1) (1)/Dignified Woman in Teal Saree.png"
import leader8 from "../assets/iloveimg-compressed (1) (1)/Elegant Portrait with Pink Backdrop.png"
import leader9 from "../assets/iloveimg-compressed (1) (1)/Polished Pink Circle Portrait.png"
import leader10 from "../assets/iloveimg-compressed (1) (1)/Professional Portrait on Pink Circle.png"
import leader11 from "../assets/iloveimg-compressed (1) (1)/Elegant Indian Saree Portrait (1).png"
import leader12 from "../assets/iloveimg-compressed (1) (1)/Elegant Circular Portrait of an Indian Woman.png"
import drShabnam from "../assets/iloveimg-compressed (1) (1)/Elegant Indian Saree Portrait.png"
import msKavita from "../assets/iloveimg-compressed (1) (1)/Elegant Indian Woman in Pink Circle.png"
import partner1 from "../assets/home/jj.jpg"
import partner2 from "../assets/home/RPP-300x2921.jpg"
import partner3 from "../assets/home/st.jpg"
import partner4 from "../assets/home/Untitled_design_(11).png"
import VisionBanner from '../components/common/VisionBanner'
import PhoneBanner from '../components/common/PhoneBanner'

function About() {
  const impactPartners = [
    { image: partner4, name: "Partner 1" },
    { image: partner2, name: "Partner 2" },
    { image: partner3, name: "Partner 3" },
    { image: partner1, name: "Partner 4" },
  ]

  const enrichmentPanel = [
    {
      name: "Dr. Shabnam Panday",
      image: leader11,
    },
    {
      name: "Ms. Kavita Mishra",
      image: leader12,
    },
  ]

  const leadershipPanel = [
    {
      name: "Ms. Snigdhaa Ritesh",
      role: "CEO & Managing Director",
      image: leader1,
    },
    {
      name: "Mr. Ritesh Saxena",
      role: "COO & Strategic Director",
      image: leader2,
    },
    {
      name: "Mr. Sahil Jaiswal",
      role: "CTO & Tech Advisor",
      image: leader3,
    },
    {
      name: "Mr. Abhishek Bajpai",
      role: "Social Media Advisor",
      image: leader4,
    },
  ]
  const leadershipPanel1 = [
    {
      name: "Ms. Neha Anand",
      role: "Consultant Psychologist",
      image: leader5,
    },
    {
      name: "Ms. Manjary Upadhyay",
      role: "PoSH Trainer",
      image: leader6,
    },
    {
      name: "Dr. Nutan Srivastava",
      role: "Gynaecologist, Homeopathy",
      image: leader7,
    },
    {
      name: "Dr. Asma Nigar",
      role: "Gynaecologist, Allopathy",
      image: leader8,
    },
    {
      name: "Ms. Ritika Bhargava",
      role: "Development Professional",
      image: leader9,
    },
    {
      name: "Ms. Mini Shrivastava",
      role: "Training Consultant",
      image: leader10,
    },
  ]

  return (
    <div>
      <PageBanner
        
        alt="Women from diverse professions representing Pink Shakti"
        title={
          <>
            About
            <span className="block">
              <span className="text-[#e60067]">Pink Shakti</span>
            </span>
          </>
        }
        description="An award-winning social startup working towards SDG-5 (Gender Equality), Pink Shakti is a one-stop technology solution for women's safety, awareness and empowerment."
      />

      {/* Our Journey Section */}
      <section className="bg-white px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-[1600px]">
          <div className="relative overflow-hidden rounded-3xl border border-pink-100 bg-[#fff5f8] p-5 shadow-sm sm:p-6 lg:px-9 lg:py-6">
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8">
              
              {/* Left Column: Journey Details */}
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-pink-100/90 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-[#e60067]">
                  • OUR JOURNEY
                </span>

                <h2 className="mt-2 font-serif text-2xl font-bold leading-tight sm:text-3xl lg:text-[2rem]">
                  <span className="text-[#102849]">A Step Towards</span>
                  <span className="block text-[#e60067]">A Safer &amp; Stronger Society.</span>
                </h2>

                <p className="mt-2.5 max-w-2xl text-xs sm:text-sm lg:text-[0.95rem] leading-relaxed text-slate-600">
                  The Pink Shakti app has been developed after four years of extensive research and was launched on Women's Day 2024 by the Mayor of Lucknow, Ms. Sushma Kharkwal.
                </p>
              </div>

              {/* Right Column: Launch Image */}
              <div className="flex justify-center lg:col-span-4 lg:justify-end">
                <div className="group relative h-[180px] sm:h-[200px] md:h-[220px] w-full max-w-lg overflow-hidden rounded-2xl border border-pink-100 bg-white shadow-sm transition-transform duration-300 hover:scale-[1.02]">
                  <img
                    src={communities}
                    alt="Pink Shakti"
                    className="h-[100%] w-[100%] object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

 
      <section className="bg-white px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            
            {/* Our Vision Card */}
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-5 sm:gap-6 rounded-3xl border border-pink-100 bg-[#fff5f8] p-6 shadow-sm sm:p-7 transition-all duration-300 hover:shadow-md">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-pink-100/80 p-4 sm:h-24 sm:w-24 sm:p-4.5">
                <img
                  src={cameralogo}
                  alt="Our Vision"
                  className="h-[70px] w-[120px] object-fill"
                />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-pink-100/90 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-[#e60067]">
                  • OUR VISION
                </span>
                <p className="mt-2.5 text-xs sm:text-sm lg:text-[0.95rem] font-medium sm:font-semibold leading-relaxed text-[#102849]">
                  Promoting Holistic Women Empowerment through Technology-driven Aids to ensure Safety, Awareness &amp; Empowerment of Women Populace in a Violence-Free Environment.
                </p>
              </div>
            </div>

            {/* Our Mission Card */}
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-5 sm:gap-6 rounded-3xl border border-pink-100 bg-[#fff5f8] p-6 shadow-sm sm:p-7 transition-all duration-300 hover:shadow-md">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-pink-100/80 p-4 sm:h-24 sm:w-24 sm:p-4.5">
                <img
                  src={targetlogo}
                  alt="Our Mission"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-pink-100/90 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-[#e60067]">
                  • OUR MISSION
                </span>
                <p className="mt-2.5 text-xs sm:text-sm lg:text-[0.95rem] font-medium sm:font-semibold leading-relaxed text-[#102849]">
                  To achieve SDG 5 by Empowering Women Populace of India and giving them a fair chance to contribute to Nation-Building with dignity, in a Discrimination-Free Environment with equal opportunities.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Founder Section */}
      <VisionBanner
        badge="OUR FOUNDER"
        title="Ms. Snigdhaa Ritesh"
        subtitle="Chief Visionary, Pink Shakti"
        description="Ms. Snigdhaa Ritesh is a journalist with 16 years of experience in electronic and print media. Through her work, she has closely witnessed the challenges that women face in society. Her passion for creating a safer, more aware and empowered community of women led to the inception of Pink Shakti."
      />

      {/* Leadership Panel Section */}
      <section className="bg-white  py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px]">
          <div className="rounded-3xl border border-pink-100 bg-[#fff5f8] p-6 shadow-sm sm:p-8 lg:p-10">
            {/* Header */}
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-pink-100/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#e60067]">
                • LEADERSHIP PANEL
              </span>
              <div className="mt-2.5 flex items-center gap-3">
                <h2 className="font-bold text-2xl sm:text-3xl lg:text-[2rem] text-[#102849]">
                  Our Leadership Panel
                </h2>
                <span className="h-[2px] w-8 bg-pink-300 rounded-full inline-block"></span>
              </div>
            </div>

            {/* Leadership Cards Grid */}
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
              {leadershipPanel.map((leader, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center rounded-2xl border border-pink-100 bg-white p-6 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="h-28 w-28 sm:h-32 sm:w-32 overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-105">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-4 font-bold text-base sm:text-lg text-[#102849]">
                    {leader.name}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm font-medium text-slate-500">
                    {leader.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white  py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px]">
          <div className="rounded-3xl border border-pink-100 bg-[#fff5f8] p-6 shadow-sm sm:p-8 lg:p-10">
            {/* Header */}
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-pink-100/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#e60067]">
                • WISDOM PANEL
              </span>
              <div className="mt-2.5 flex items-center gap-3">
                <h2 className="font-bold text-2xl sm:text-3xl lg:text-[2rem] text-[#102849]">
                  Our Wisdom Panel
                </h2>
                <span className="h-[2px] w-8 bg-pink-300 rounded-full inline-block"></span>
              </div>
            </div>

            {/* Leadership Cards Grid */}
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-6 sm:gap-5">
              {leadershipPanel1.map((leader, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center rounded-2xl border border-pink-100 bg-white p-5 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="h-28 w-28  overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-105">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-4 font-bold text-base sm:text-lg text-[#102849]">
                    {leader.name}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm font-medium text-slate-500">
                    {leader.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enrichment Panel Section */}
      <section className="bg-white py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px]">
          <div className="rounded-3xl border border-pink-100 bg-[#fff5f8] p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row  gap-8 lg:gap-14">
              {/* Header */}
              <div className="w-[400px] mt-5">
                <span className="inline-flex items-center gap-2 rounded-full bg-pink-100/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#e60067] shadow-xs">
                  • ENRICHMENT PANEL
                </span>
                <div className="mt-5 flex items-center">
                  <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-[#102849]">
                    Our Enrichment Panel
                  </h2>
          
                </div>
              </div>

              {/* Members Cards */}
              <div className="flex flex-wrap items-center gap-6 sm:gap-8">
                {enrichmentPanel.map((member, index) => (
                  <div
                    key={index}
                    className="group flex w-full flex-col items-center justify-center rounded-2xl border border-pink-200/60 bg-white px-8 py-6 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:w-[290px] lg:w-[320px]"
                  >
                    <div className="h-28 w-28 sm:h-32 sm:w-32 overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-105">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h3 className="mt-4 whitespace-nowrap text-base sm:text-lg font-bold text-[#102849]">
                      {member.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Impact Partners Section */}
      <section className="bg-white py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px]">
          <div className="rounded-3xl border border-pink-100 bg-[#fff5f8] p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
              {/* Left Header */}
              <div className="shrink-0 lg:max-w-md">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-pink-100/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#e60067]">
                  • SOCIAL IMPACT PARTNERS
                </span>
                <h2 className="mt-3 text-2xl sm:text-3xl lg:text-[2rem] font-bold leading-tight text-[#102849]">
                  Our Partners
                  <span className="block">In Creating A Safer Society</span>
                </h2>
              </div>

              {/* 4 Partner Logo Cards */}
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5 flex-1 lg:max-w-3xl">
                {impactPartners.map((partner, index) => (
                  <div
                    key={index}
                    className="group flex h-28 sm:h-32 items-center justify-center rounded-2xl border border-pink-100 bg-white p-4 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <img
                      src={partner.image}
                      alt={partner.name || `Partner ${index + 1}`}
                      className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <PhoneBanner />
    </div>
  )
}

export default About
