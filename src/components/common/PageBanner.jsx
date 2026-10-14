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
    <section className="relative isolate overflow-hidden w-full">
      <img
        src={bannerImage}
        alt={alt}
        className="absolute inset-0 h-[340px] sm:h-[400px] md:h-[460px] lg:h-[550px] w-full object-cover object-center md:object-right -z-10"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/10 md:hidden z-0"></div>

      <div className="hero-content relative z-10 flex flex-col justify-center h-[340px] sm:h-[400px] md:h-[460px] lg:h-[550px] px-[5%] sm:px-[8%] w-[95%] sm:w-[85%] md:w-[65%] lg:w-[55%] text-[#102849]">
        
        {breadcrumb && (
          <div className="mb-2 sm:mb-3">
            {React.isValidElement(breadcrumb) ? (
              breadcrumb
            ) : (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[10px] sm:text-xs font-semibold text-[#102849] shadow-xs">
                <Home className="h-3 sm:h-3.5 w-3 sm:w-3.5 text-[#e60067]" />
                <Link to="/" className="text-[#e60067] hover:underline">
                  Home
                </Link>
                <span className="text-[#e60067] font-bold text-[10px] sm:text-[11px]">&gt;</span>
                <span className="text-slate-700 truncate">{breadcrumb}</span>
              </span>
            )}
          </div>
        )}

        {badge && (
          <div className="mb-1">
            <p className="inline-flex items-center gap-1.5 sm:gap-3 rounded-full bg-pink-100/90 px-2.5 py-1 sm:px-3 sm:py-1 text-[10px] sm:text-[12px] font-bold text-[#e60067] flex-wrap">
              {Array.isArray(badge) ? (
                badge.map((item, index) => (
                  <span key={index} className="flex items-center">
                    {index !== 0 && <span className="mx-1">•</span>} {item}
                  </span>
                ))
              ) : typeof badge === "string" ? (
                <span>• {badge}</span>
              ) : (
                badge
              )}
            </p>
          </div>
        )}

        {title && (
          <h1 className="mt-2 sm:mt-4 font-serif text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-bold leading-[1.15] sm:leading-[1.2] tracking-tight">
            {title}
          </h1>
        )}

        {description && (
          <p className="mt-2.5 sm:mt-4 max-w-[36rem] text-[13px] sm:text-[15px] lg:text-[17px] font-medium sm:font-semibold leading-relaxed text-slate-700 line-clamp-3 sm:line-clamp-none">
            {description}
          </p>
        )}

        {(primaryButton || secondaryButton || children) && (
          <div className="mt-4 sm:mt-6 lg:mt-8 flex flex-wrap items-center gap-2.5 sm:gap-4 lg:gap-5">
            {primaryButton && (
              primaryButton.to ? (
                <Link
                  to={primaryButton.to}
                  onClick={primaryButton.onClick}
                  className="button-motion inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl bg-[#e60067] px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md shadow-pink-500/25 transition hover:bg-[#d0005a] w-auto"
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
                  className="button-motion inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl bg-[#e60067] px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md shadow-pink-500/25 transition hover:bg-[#d0005a] w-auto"
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

            {secondaryButton && (
              secondaryButton.to ? (
                <Link
                  to={secondaryButton.to}
                  onClick={secondaryButton.onClick}
                  className="button-motion inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl border-2 border-[#e60067] bg-white/80 px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-semibold text-[#e60067] transition hover:bg-pink-50 w-auto"
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
                  className="button-motion inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl border-2 border-[#e60067] bg-white/80 px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-semibold text-[#e60067] transition hover:bg-pink-50 w-auto"
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

            {children}
          </div>
        )}
      </div>
    </section>
  );
}