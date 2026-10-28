import React, { useState } from 'react';
import { Download } from 'lucide-react';
import defaultCardImage from '../../assets/home/any1.png';

/**
 * HoverProductCard
 * Framer-inspired interactive card:
 * - Shows Title & Complete Description
 * - Optional cute download button when buttonText & buttonLink are passed
 * - Warm backdrop color on hover
 * - Mobile friendly tap-to-toggle
 */
export default function HoverProductCard({
  image = defaultCardImage,
  imageAlt = "Pink Shakti",
  title = "PINK SHAKTI WOMEN SAFETY APP",
  description = "",
  buttonText = "",
  buttonLink = "",
  showIdleTitle = true,
  className = "",
}) {
  const [isTouchActive, setIsTouchActive] = useState(false);

  return (
    <div
      tabIndex={0}
      role="region"
      aria-label={title}
      onClick={() => setIsTouchActive((prev) => !prev)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          setIsTouchActive((prev) => !prev);
        }
      }}
      // Added hover:mx-2 and mx-2 in the touch active state to push adjacent cards
      className={`group relative isolate overflow-hidden rounded-2xl bg-white [transform:translateZ(0)] shadow-none transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-[1.06] hover:mx-2 hover:z-20 hover:-translate-y-1.5 hover:shadow-none cursor-pointer origin-center first:origin-left last:origin-right ${isTouchActive ? "  sm:scale-[1.06] mx-2 z-20 shadow-none " : ""
        } ${className}`}
    >
      {/* Background Image with smooth zoom & subtle blur on hover */}
      <img
        src={image}
        alt={imageAlt || title}
        className={`absolute inset-0 h-full w-full object-cover object-center transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isTouchActive ? "scale-[1.08] filter blur-[1px]" : "group-hover:scale-[1.08] group-hover:filter group-hover:blur-[1px]"
          }`}
      />

      {/* Default Subtle Vignette for title readability when idle */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none transition-opacity duration-300" />

      {/* Idle Title at top (visible before hover, fades out smoothly on hover) */}
      {showIdleTitle && (
        <div
          className={`absolute inset-x-0 top-0 px-2.5 pt-[2px] sm:pt-[3px] pb-2 sm:px-3.5 flex flex-col items-center justify-start text-center transition-opacity duration-300 pointer-events-none ${isTouchActive ? "opacity-0" : "opacity-100 group-hover:opacity-0"
            }`}
        >
          <h4 className="font-serif text-[12.5px] sm:text-[13.5px] font-bold uppercase tracking-tight text-center leading-snug drop-shadow-md w-full px-1">
            {title}
          </h4>
        </div>
      )}

      {/* Warm Hover Overlay on Lavender Background */}
      <div
        className={`absolute inset-0 flex flex-col justify-start p-3.5 sm:px-4 backdrop-blur-[2px] bg-lavender text-[#3b082a] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isTouchActive
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto"
          }`}
      >
        <div className="h-full w-full flex flex-col overflow-y-auto [&::-webkit-scrollbar]:hidden pr-0.5">

          {/* Heading - Slight slide down & fade in */}
          <h3
            className={`font-serif text-[13px] sm:text-[14px] font-bold uppercase tracking-tight text-[#3b082a] text-center leading-snug shrink-0 pt-[1px] pb-1.5 border-b border-[#3b082a]/20 transform transition-all duration-500 ease-out ${isTouchActive
                ? "translate-y-0 opacity-100"
                : "-translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 delay-100"
              }`}
          >
            {title}
          </h3>

          {/* Complete Description - Slide up & fade in with a delay */}
          <p
            className={`mt-2 text-[10.5px] sm:text-[11.5px] text-[#421235] leading-relaxed font-semibold whitespace-pre-line transform transition-all duration-500 ease-out ${isTouchActive
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 delay-200"
              }`}
          >
            {description}
          </p>

          {/* Cute Download Button (Appears only on cards with buttonText & buttonLink, like Card 1) */}
          {buttonText && buttonLink && (
            <div
              className={`pt-1.5 pb-1 shrink-0 transform transition-all duration-500 ease-out ${isTouchActive
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 delay-300"
                }`}
            >
              <a
                href={buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="group/btn inline-flex items-center gap-1.5 rounded-full bg-[#7a0f4e] px-2.5 py-1 text-[10px] sm:text-xs font-semibold text-white border border-white/20 shadow-md transition-all duration-300 hover:bg-[#600a3d] hover:shadow-lg hover:scale-105 active:scale-95"
              >
                <Download className="h-3 w-3 text-white transition-transform duration-300 group-hover/btn:-translate-y-0.5" />
                <span>{buttonText}</span>
              </a>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
