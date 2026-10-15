import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageBanner from '../components/common/PageBanner'
import homeBanner from "../assets/home/Empowered_Women.png"
import PhoneBanner from '../components/common/PhoneBanner'
import healthLogo from "../assets/logo/healths.png"
import cardBgImage from "../assets/features/Smiling Woman with Pink Shield Design.png"
import cardBgImage2 from "../assets/features/Pink Security Alert with Hidden Figure.png"
import cardBgImage3 from "../assets/features/Glossy Pink E-FIR Legal Laptop Illustration.png"
import cardBgImage4 from "../assets/features/Glossy Pink City Map Banner.png"
import cardBgImage5 from "../assets/features/Pink Shield of Knowledge Books.png"
import cardBgImage6 from "../assets/features/Serene Pink Wellness Woman with Health Icons.png"
import cardBgImage7 from "../assets/features/Pink India Map Analytics Banner.png"
import cardBgImage8 from "../assets/features/Pink Emergency Call Safety Illustration.png"
import cardBgImage9 from "../assets/features/Pink One-Stop Center Building.png"

function Feature() {
  const featuresList = [
    {
      title: "Women Safety",
      description: "Emergency Response Support System (ERSS) and safety resources for women.",
      link: "/features",
      bgImage: cardBgImage,
    },
    {
      title: "Anonymous Crime Reporting",
      description: "Report incidents anonymously with map location & e-FIR information.",
      link: "/features",
      bgImage: cardBgImage2,
    },
    {
      title: "E-FIR",
      description: "E-FIR information and official link to UP Police e-FIR portal.",
      dedicatedLink: {
        text: "View dedicated E-FIR page →",
        to: "/features",
      },
      link: "/features",
      bgImage: cardBgImage3,
    },
    {
      title: "City Scan",
      description: "Check safety information and report unsafe areas in your city.",
      dedicatedLink: {
        text: "View dedicated City Scan page →",
        to: "/features",
      },
      link: "/features",
      bgImage: cardBgImage4,
    },
    {
      title: "Pink Info",
      description: "Important information and resources for a brighter tomorrow.",
      bullets: [
        "Government Schemes",
        "Women Laws & Rights",
        "PoSH Act 2013",
      ],
      link: "/features",
      bgImage: cardBgImage5,
    },
    {
      title: "Pink Health",
      description: "Health awareness and resources for women's well-being.",
      bullets: [
        "Mental Health",
        "Menstrual Health",
        "Cervical Cancer Awareness",
      ],
      link: "/features",
      bgImage: cardBgImage6,
    },
    {
      title: "Crime Data Analytics",
      description: "View crime data, trends and safety insights for a safer Uttar Pradesh.",
      link: "/features",
      bgImage: cardBgImage7,
    },
    {
      title: "Emergency Helplines",
      description: "Access important helpline numbers like 112, 181, 1090 and more.",
      link: "/features",
      bgImage: cardBgImage8,
    },
    {
      title: "One Stop Centers",
      description: "Find One Stop Centers near you for support and assistance.",
      link: "/features",
      bgImage: cardBgImage9,
    },
  ]

  return (
    <>
      <PageBanner
       
        alt="A Safer, Stronger and Empowered Women"
        badge="OUR FEATURES"
        title={
          <>
            A <span className="text-[#e60067]">Safer, Stronger</span>
            <span className="block text-[#102849]">and Empowered Women</span>
          </>
        }
        description="Pink Shakti brings together safety, awareness, health and opportunities for women in one platform."
      />

      {/* 9 Features Cards Grid Section */}
      <section className="bg-white px-4 py-6 sm:px-6  lg:py-8">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 sm:gap-5">
            {featuresList.map((feature, index) => (
              <div
                key={index}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-pink-100/90 bg-pink-100/50 bg-no-repeat p-3.5 sm:px-5 sm:py-3.5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md min-h-[165px] sm:min-h-[175px]"
                style={{
                  backgroundImage: `url("${feature.bgImage}")`,
                  backgroundSize: "contain",
                  backgroundPosition: "right center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* Content - strictly left-aligned so the illustration on the right is never hidden */}
                <div className="relative z-10 flex items-start gap-2.5 sm:gap-3 max-w-[58%] sm:max-w-[54%] lg:max-w-[50%]">
                  {/* Left Logo (healths.png) */}
                  <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-pink-100/80 p-2 border border-pink-200/50 transition-transform duration-300 group-hover:scale-105">
                    <img
                      src={healthLogo}
                      alt={feature.title}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Text Details */}
                  <div className="flex-1 min-w-0 pr-1">
                    <h3 className="font-bold text-sm sm:text-base text-[#102849] leading-snug">
                      {feature.title}
                    </h3>

                    <p className="mt-0.5 text-xs text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Dedicated Page Link (if present) */}
                    {feature.dedicatedLink && (
                      <Link
                        to={feature.dedicatedLink.to}
                        className="mt-1 inline-block text-xs font-semibold text-[#e60067] hover:underline"
                      >
                        {feature.dedicatedLink.text}
                      </Link>
                    )}

                    {/* Bullet Points (if present) */}
                    {feature.bullets && (
                      <ul className="mt-1 space-y-0.5">
                        {feature.bullets.map((bullet, bIndex) => (
                          <li
                            key={bIndex}
                            className="flex items-center gap-1.5 text-xs font-semibold text-[#102849]"
                          >
                            <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#e60067] text-[9px] text-white font-bold leading-none shrink-0">
                              ›
                            </span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Explore Feature CTA Button */}
                    <div className="mt-2.5">
                      <Link
                        to={feature.link}
                        className="button-motion inline-flex items-center gap-1.5 rounded-full bg-[#e60067] px-3 py-1 text-xs font-semibold text-white shadow-xs transition hover:bg-[#d0005a] active:scale-95"
                      >
                        <span>Explore Feature</span>
                        <ArrowRight className="h-3 w-3 stroke-[2.5]" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PhoneBanner />
    </>
  )
}

export default Feature
