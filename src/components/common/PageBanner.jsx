import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Download, ArrowRight, Home } from "lucide-react";
import defaultBanner from "../../assets/home/Empowered Women in Pink Horizons (1).png"

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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative isolate overflow-hidden w-full h-[250px] sm:h-[310px] md:h-[340px] lg:h-[430px]">
      {/* Background Image without animation */}
      <img
        src={bannerImage}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover object-right lg:object-fill -z-10"
      />

      {(title || description || breadcrumb || badge || primaryButton || secondaryButton || children) && (
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/10 md:hidden z-0"></div>
      )}

      {(title || description || breadcrumb || badge || primaryButton || secondaryButton || children) && (
        <div className="hero-content relative z-10 flex flex-col justify-center h-full px-[5%] sm:px-[8%] w-[95%] sm:w-[85%] md:w-[65%] lg:w-[55%] text-[#102849]">

        {/* Breadcrumb / Badge */}
        <div
          className={`transition-all duration-700 ease-out delay-100 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {breadcrumb && (
            <div className="mb-1.5 sm:mb-2">
              {React.isValidElement(breadcrumb) ? (
                breadcrumb
              ) : (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-semibold text-[#102849] shadow-sm transition-all hover:shadow-md">
                  <Home className="h-3 sm:h-3.5 w-3 sm:w-3.5 text-[#e60067]" />
                  <Link to="/" className="text-[#e60067] transition-colors hover:text-[#c00055]">
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
              <p className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-pink-100/90 px-2.5 py-0.5 sm:px-3 sm:py-0.5 text-[10px] sm:text-[11px] font-bold text-[#e60067] flex-wrap shadow-sm">
                {Array.isArray(badge) ? (
                  badge.map((item, index) => (
                    <span key={index} className="flex items-center">
                      {index !== 0 && <span className="mx-1 opacity-50">•</span>} {item}
                    </span>
                  ))
                ) : typeof badge === "string" ? (
                  <span>{badge}</span>
                ) : (
                  badge
                )}
              </p>
            </div>
          )}
        </div>

        {/* Title */}
        {title && (
          <h1
            className={`mt-1 sm:mt-1.5 font-serif text-[22px] sm:text-[28px] md:text-[34px] lg:text-[38px] font-bold leading-[1.15] sm:leading-[1.18] tracking-tight transition-all duration-700 ease-out delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            {title}
          </h1>
        )}

        {/* Description */}
        {description && (
          <p
            className={`mt-1.5 sm:mt-2 max-w-[34rem] text-[12px] sm:text-[13px] lg:text-[14px] font-medium leading-snug sm:leading-relaxed text-slate-700 line-clamp-3 transition-all duration-700 ease-out delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            {description}
          </p>
        )}

        {/* Buttons */}
        {(primaryButton || secondaryButton || children) && (
          <div
            className={`mt-2.5 sm:mt-3.5 lg:mt-4 flex flex-wrap items-center gap-2.5 sm:gap-3 transition-all duration-700 ease-out delay-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            {/* Primary Button (Exact same animation classes as Navbar) */}
            {primaryButton && (
              primaryButton.to ? (
                primaryButton.to.startsWith("http") ? (
                  <a
                    href={primaryButton.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={primaryButton.onClick}
                    className="group inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full btn-pink-gradient px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold shadow-md transition-all duration-300 hover:shadow-[0_8px_20px_rgba(230,0,103,0.3)] hover:scale-[1.03] active:scale-95 w-auto"
                  >
                    {primaryButton.icon ? (
                      <primaryButton.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    ) : (
                      <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    )}
                    <span>{primaryButton.text || "Get The App"}</span>
                  </a>
                ) : (
                  <Link
                    to={primaryButton.to}
                    onClick={primaryButton.onClick}
                    className="group inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full btn-pink-gradient px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold shadow-md transition-all duration-300 hover:shadow-[0_8px_20px_rgba(230,0,103,0.3)] hover:scale-[1.03] active:scale-95 w-auto"
                  >
                    {primaryButton.icon ? (
                      <primaryButton.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    ) : (
                      <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    )}
                    <span>{primaryButton.text || "Get The App"}</span>
                  </Link>
                )
              ) : (
                <button
                  type="button"
                  onClick={primaryButton.onClick}
                  className="group inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full btn-pink-gradient px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold shadow-md transition-all duration-300 hover:shadow-[0_8px_20px_rgba(230,0,103,0.3)] hover:scale-[1.03] active:scale-95 w-auto"
                >
                  {primaryButton.icon ? (
                    <primaryButton.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:-translate-y-1" />
                  ) : (
                    <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:-translate-y-1" />
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
                  className="group inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full btn-pink-outline backdrop-blur-sm px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:scale-[1.03] active:scale-95 w-auto"
                >
                  <span>{secondaryButton.text || "Know More"}</span>
                  {secondaryButton.icon ? (
                    <secondaryButton.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  ) : (
                    <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  )}
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={secondaryButton.onClick}
                  className="group inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full btn-pink-outline backdrop-blur-sm px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:scale-[1.03] active:scale-95 w-auto"
                >
                  <span>{secondaryButton.text || "Know More"}</span>
                  {secondaryButton.icon ? (
                    <secondaryButton.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  ) : (
                    <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  )}
                </button>
              )
            )}

            {children}
          </div>
        )}
      </div>
      )}
    </section>
  );
}