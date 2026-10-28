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
  containerClassName = "bg-transparent px-4 py-10 sm:px-6 lg:px-8 lg:py-14",
}) {
  return (
    <section className={containerClassName}>
      <div className="group relative mx-auto overflow-hidden rounded-3xl border border-pink-100 bg-[#fff8fa] shadow-sm flex flex-col lg:block lg:aspect-[4.65/1] max-w-[1600px] transition-all duration-500 hover:shadow-lg">
        
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 h-full w-full lg:w-[35%] bg-cover lg:bg-contain bg-top lg:bg-left bg-no-repeat opacity-15 lg:opacity-100 transition-transform duration-1000 ease-in-out group-hover:scale-105"
          style={{ backgroundImage: `url("${backdrop}")` }}
        />

        <div
          className={`relative z-10 flex flex-col px-5 pt-8 sm:px-10 sm:pt-12 lg:absolute lg:left-[36%] lg:top-[15%] lg:block lg:p-0 ${
            quote ? "lg:w-[36%]" : "lg:w-[58%]"
          } text-[#102849]`}
        >
          {badge && (
            <div>
              <p className="inline-flex rounded-full bg-pink-100 px-3 py-1 text-[10px] sm:text-xs lg:text-[clamp(0.4rem,0.65vw,0.7rem)] font-bold uppercase tracking-wide text-[#e60067] shadow-sm">
                • {badge.replace(/^•\s*/, "")}
              </p>
            </div>
          )}

          {title && (
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-[clamp(1rem,2.05vw,2.25rem)] font-bold leading-[1.1] sm:leading-[1.08] transition-colors duration-300">
              {title}
            </h2>
          )}

          {subtitle && (
            <p className="mt-1.5 font-semibold text-sm sm:text-base lg:text-[clamp(0.55rem,1.05vw,1.05rem)] text-[#102849]">
              {subtitle}
            </p>
          )}

          {description && (
            <p className="mt-3 text-sm sm:text-[15px] lg:text-[clamp(0.5rem,0.9vw,0.95rem)] leading-[1.5] lg:leading-[1.45] text-slate-600">
              {description}
            </p>
          )}

          {name && (
            <p className="mt-4 lg:mt-3 text-sm sm:text-base lg:text-[clamp(0.6rem,1vw,1.05rem)] font-bold text-[#e60067]">
              {name}
            </p>
          )}

          {role && (
            <p className="text-xs sm:text-sm lg:text-[clamp(0.45rem,0.8vw,0.85rem)] font-medium text-slate-600">
              {role}
            </p>
          )}
        </div>

        {quote && (
          <figure className="relative z-10 mx-5 my-6 flex flex-col justify-center rounded-2xl bg-[#fff1f7]/90 p-5 sm:p-8 sm:mx-10 lg:absolute lg:right-[3%] lg:top-[12%] lg:m-0 lg:h-[76%] lg:w-[24%] lg:p-[clamp(0.75rem,1.8vw,2rem)] text-[#102849] shadow-sm backdrop-blur-sm lg:backdrop-blur-none transition-transform duration-500 ease-out hover:-translate-y-2 hover:shadow-md cursor-default">
            <Quote className="h-8 w-8 sm:h-10 sm:w-10 lg:h-[clamp(1.4rem,3vw,3.25rem)] lg:w-[clamp(1.4rem,3vw,3.25rem)] fill-pink-200 text-pink-200 transition-transform duration-300 hover:scale-110 hover:rotate-6" />
            <blockquote className="mt-2 text-sm sm:text-base lg:text-[clamp(0.55rem,1vw,1rem)] font-medium leading-[1.4] lg:leading-[1.3]">
              {quote.text || quote}
            </blockquote>
            {(quote.author || name) && (
              <figcaption className="mt-3 text-right text-xs sm:text-sm lg:text-[clamp(0.45rem,0.75vw,0.8rem)] font-medium text-slate-600">
                — {quote.author || name}
              </figcaption>
            )}
          </figure>
        )}

        <div className="relative z-10 flex w-full justify-center lg:absolute lg:bottom-0 lg:left-[7%] lg:block lg:h-[90%] lg:w-auto lg:max-w-[24%] mt-auto pt-4 lg:pt-0">
          <img
            src={portrait}
            alt={typeof title === "string" ? title : name || "Pink Shakti Visionary"}
            className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-full w-auto object-contain object-bottom"
          />
        </div>

      </div>
    </section>
  );
}