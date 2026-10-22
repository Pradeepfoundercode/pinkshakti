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
      className={`group relative isolate overflow-hidden rounded-2xl bg-white [transform:translateZ(0)] shadow-sm transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-[1.06] hover:mx-2 hover:z-20 hover:-translate-y-1.5 hover:shadow-xl cursor-pointer origin-center first:origin-left last:origin-right ${isTouchActive ? "  sm:scale-[1.06] mx-2 z-20 shadow-xl " : ""
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

      {/* Idle Title at bottom (visible before hover, fades out smoothly on hover) */}
      {showIdleTitle && (
        <div
          className={`absolute inset-x-0 bottom-0 p-3.5 sm:p-4 flex flex-col justify-end transition-opacity duration-300 pointer-events-none ${isTouchActive ? "opacity-0" : "opacity-100 group-hover:opacity-0"
            }`}
        >
          <h4 className="font-serif text-[13px] sm:text-[14px] font-bold text-white leading-snug drop-shadow-md">
            {title}
          </h4>
        </div>
      )}

      {/* Warm Orange Hover Overlay (Backdrop Blur + Vibrant Orange Gradient + Complete Text) */}
      <div
  className={`absolute inset-0 flex flex-col justify-start p-3.5 sm:px-4  backdrop-blur-[2px] bg-[#c94e41] text-white transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
    isTouchActive
      ? "opacity-100 pointer-events-auto"
      : "opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto"
  }`}
>
  <div className="h-full w-full flex flex-col overflow-y-auto [&::-webkit-scrollbar]:hidden pr-0.5">
    
    {/* Heading - Slight slide down & fade in */}
    <h3
      className={`font-serif text-[13px] sm:text-[14px] font-bold tracking-tight text-white leading-snug shrink-0 pb-1.5 border-b border-white/20 transform transition-all duration-500 ease-out ${
        isTouchActive
          ? "translate-y-0 opacity-100"
          : "-translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 delay-100"
      }`}
    >
      {title}
    </h3>

    {/* Complete Description - Slide up & fade in with a delay */}
    <p
      className={`mt-2 text-[10.5px] sm:text-[11.5px] text-slate-100 leading-relaxed font-semibold whitespace-pre-line transform transition-all duration-500 ease-out ${
        isTouchActive
          ? "translate-y-0 opacity-100"
          : "translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 delay-200"
      }`}
    >
      {description}
    </p>

    {/* Cute Download Button (Appears only on cards with buttonText & buttonLink, like Card 1) */}
    {buttonText && buttonLink && (
      <div
        className={`pt-1 pb-1 shrink-0 transform transition-all duration-500 ease-out ${
          isTouchActive
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 delay-300"
        }`}
      >
        <a
          href={buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="group/btn inline-flex items-center gap-1.5 rounded-full bg-white p-1 text-[10px] sm:text-xs font-bold text-[#c94e41] shadow-md transition-all duration-300 hover:bg-neutral-50 hover:shadow-lg hover:scale-105 active:scale-95"
        >
          <Download className="h-3 w-3 transition-transform duration-300 group-hover/btn:-translate-y-0.5" />
          <span>{buttonText}</span>
        </a>
      </div>
    )}

  </div>
</div>
    </div>
  );
}
