import React from "react";
import { Link } from "react-router-dom";
import { Download, ArrowRight, Home } from "lucide-react";
import defaultBanner from "../../assets/home/Empowered Women Shaping Tomorrow.png";


export default function PageBanner({
  bannerImage = defaultBanner,
  alt = "Pink Shakti Banner",
  breadcrumb,
  badge,
  title,
  description,
  primaryButton,
  secondaryButton,
  children,
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={bannerImage}
        alt={alt}
        className="h-[320px] sm:h-[400px] md:h-[460px] lg:h-[550px] w-full object-fill object-right "
      />

      <div className="hero-content absolute left-[5%] sm:left-[8%] top-[8%] sm:top-[10%] lg:top-[13%] z-10 w-[90%] sm:w-[75%] md:w-[60%] lg:w-[50%] text-[#102849]">
        {/* Optional Breadcrumb */}
        {breadcrumb && (
          <div className="mb-2 sm:mb-2.5">
            {React.isValidElement(breadcrumb) ? (
              breadcrumb
            ) : (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[#102849] shadow-xs">
                <Home className="h-3.5 w-3.5 text-[#e60067]" />
                <Link to="/" className="text-[#e60067] hover:underline">
                  Home
                </Link>
                <span className="text-[#e60067] font-bold text-[11px]">&gt;</span>
                <span className="text-slate-700">{breadcrumb}</span>
              </span>
            )}
          </div>
        )}

        {/* Badge */}
        {badge && (
          <p className="inline-flex items-center gap-2 sm:gap-4 rounded-full bg-pink-100/90 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[clamp(0.6rem,0.75vw,0.75rem)] font-bold text-[#e60067]">
            {Array.isArray(badge) ? (
              badge.map((item, index) => (
                <span key={index}>•&nbsp; {item}</span>
              ))
            ) : typeof badge === "string" ? (
              <span>•&nbsp; {badge}</span>
            ) : (
              badge
            )}
          </p>
        )}

        {/* Title */}
        {title && (
          <h1 className="mt-2.5 sm:mt-5 lg:mt-8 font-serif text-[50px] font-bold leading-[1.18] sm:leading-[1.25] tracking-tight">
            {title}
          </h1>
        )}

        {/* Description */}
        {description && (
          <p className="mt-2 sm:mt-4 lg:mt-5 max-w-[36rem] text-[13px] sm:text-[15px] md:text-[17px] font-semibold leading-snug sm:leading-relaxed text-slate-700">
            {description}
          </p>
        )}

        {/* Buttons / Actions */}
        {(primaryButton || secondaryButton || children) && (
          <div className="mt-3.5 sm:mt-6 lg:mt-8 flex flex-wrap items-center gap-3 sm:gap-5 lg:gap-7">
            {/* Primary Button */}
            {primaryButton && (
              primaryButton.to ? (
                <Link
                  to={primaryButton.to}
                  onClick={primaryButton.onClick}
                  className="button-motion inline-flex items-center justify-center gap-2 rounded-xl bg-[#e60067] px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md shadow-pink-500/25 transition hover:bg-[#d0005a]"
                >
                  {primaryButton.icon ? (
                    <primaryButton.icon className="h-4 w-4" />
                  ) : (
                    <Download className="h-4 w-4" />
                  )}
                  <span>{primaryButton.text || "Get The App"}</span>
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={primaryButton.onClick}
                  className="button-motion inline-flex items-center justify-center gap-2 rounded-xl bg-[#e60067] px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md shadow-pink-500/25 transition hover:bg-[#d0005a]"
                >
                  {primaryButton.icon ? (
                    <primaryButton.icon className="h-4 w-4" />
                  ) : (
                    <Download className="h-4 w-4" />
                  )}
                  <span>{primaryButton.text || "Get The App"}</span>
                </button>
              )
            )}

            {/* Secondary Button */}
            {secondaryButton && (
              secondaryButton.to ? (
                <Link
                  to={secondaryButton.to}
                  onClick={secondaryButton.onClick}
                  className="button-motion inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#e60067] bg-white/80 px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-[#e60067] transition hover:bg-pink-50"
                >
                  <span>{secondaryButton.text || "Know More"}</span>
                  {secondaryButton.icon ? (
                    <secondaryButton.icon className="h-4 w-4" />
                  ) : (
                    <ArrowRight className="h-4 w-4" />
                  )}
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={secondaryButton.onClick}
                  className="button-motion inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#e60067] bg-white/80 px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-[#e60067] transition hover:bg-pink-50"
                >
                  <span>{secondaryButton.text || "Know More"}</span>
                  {secondaryButton.icon ? (
                    <secondaryButton.icon className="h-4 w-4" />
                  ) : (
                    <ArrowRight className="h-4 w-4" />
                  )}
                </button>
              )
            )}

            {/* Any custom children/buttons */}
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
