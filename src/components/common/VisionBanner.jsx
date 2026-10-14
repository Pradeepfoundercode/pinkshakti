import React from "react";
import { Quote } from "lucide-react";
import defaultBackdrop from "../../assets/home/Pastel Pink Botanical Frame.png";
import defaultPortrait from "../../assets/home/Elegant Indian Woman in Purple Saree (1).png";


export default function VisionBanner({
  badge = "Our Vision",
  title,
  subtitle,
  description,
  name,
  role,
  quote,
  portrait = defaultPortrait,
  backdrop = defaultBackdrop,
  containerClassName = "bg-white px-4 py-10 sm:px-6 lg:px-8 lg:py-14",
}) {
  return (
    <section className={containerClassName}>
      <div className="relative mx-auto aspect-[4.65/1] max-w-[1600px] overflow-hidden rounded-3xl border border-pink-100 bg-[#fff8fa] shadow-sm">
        {/* Backdrop Wave/Leaf graphic */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 h-full w-[35%] bg-contain bg-left bg-no-repeat"
          style={{ backgroundImage: `url("${backdrop}")` }}
        />

        {/* Visionary / Founder Portrait */}
        <img
          src={portrait}
          alt={typeof title === "string" ? title : name || "Pink Shakti Visionary"}
          className="absolute bottom-0 left-[7%] h-[90%] w-auto max-w-[24%] object-contain object-bottom"
        />

        {/* Text Area */}
        <div
          className={`absolute left-[36%] top-[15%] ${
            quote ? "w-[36%]" : "w-[58%]"
          } text-[#102849]`}
        >
          {badge && (
            <p className="inline-flex rounded-full bg-pink-100 px-3 py-1 text-[clamp(0.4rem,0.65vw,0.7rem)] font-bold uppercase tracking-wide text-[#e60067]">
              • {badge.replace(/^•\s*/, "")}
            </p>
          )}

          {title && (
            <h2 className="mt-3 font-serif text-[clamp(1rem,2.05vw,2.25rem)] font-bold leading-[1.08]">
              {title}
            </h2>
          )}

          {subtitle && (
            <p className="mt-1.5 font-semibold text-[clamp(0.55rem,1.05vw,1.05rem)] text-[#102849]">
              {subtitle}
            </p>
          )}

          {description && (
            <p className="mt-3 text-[clamp(0.5rem,0.9vw,0.95rem)] leading-[1.45] text-slate-600">
              {description}
            </p>
          )}

          {name && (
            <p className="mt-3 text-[clamp(0.6rem,1vw,1.05rem)] font-bold text-[#e60067]">
              {name}
            </p>
          )}

          {role && (
            <p className="text-[clamp(0.45rem,0.8vw,0.85rem)] font-medium text-slate-600">
              {role}
            </p>
          )}
        </div>

        {/* Right Quote Card (Rendered only if quote prop is passed) */}
        {quote && (
          <figure className="absolute right-[3%] top-[12%] flex h-[76%] w-[24%] flex-col justify-center rounded-2xl bg-[#fff1f7]/90 p-[clamp(0.75rem,1.8vw,2rem)] text-[#102849] shadow-sm">
            <Quote className="h-[clamp(1.4rem,3vw,3.25rem)] w-[clamp(1.4rem,3vw,3.25rem)] fill-pink-200 text-pink-200" />
            <blockquote className="mt-2 text-[clamp(0.55rem,1vw,1rem)] font-medium leading-[1.3]">
              {quote.text || quote}
            </blockquote>
            {(quote.author || name) && (
              <figcaption className="mt-3 text-right text-[clamp(0.45rem,0.75vw,0.8rem)] font-medium text-slate-600">
                — {quote.author || name}
              </figcaption>
            )}
          </figure>
        )}
      </div>
    </section>
  );
}
