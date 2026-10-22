import React from 'react';
import HoverProductCard from './HoverProductCard';
import { homeFeatureCards } from '../../constants/homeData';

/**
 * HoverCardsSlider
 * Reusable dynamic cards slider.
 * Uses first:origin-left to ensure the first card's rounded border never gets clipped on scale-up.
 */
export default function HoverCardsSlider({
  items = homeFeatureCards,
  className = "",
  cardClassName = "w-[310px] sm:w-[375px] lg:w-[calc(26%-0.6rem)] h-[240px] sm:h-[257px] shrink-0 snap-start origin-center first:origin-left last:origin-right",
}) {
  return (
    <div className={`mt-2 ${className}`}>
      <div
        className="
          flex gap-4 sm:gap-5.5
          overflow-x-auto overflow-y-hidden
          px-4 sm:px-6 pt-5 pb-8
          snap-x snap-mandatory scroll-smooth
          [&::-webkit-scrollbar]:hidden
          [-ms-overflow-style:none]
          [scrollbar-width:none]
        "
      >
        {items.map((item, index) => (
          <HoverProductCard
            key={item.id || index}
            image={item.image}
            imageAlt={item.imageAlt || item.title}
            title={item.title}
            description={item.description}
            buttonText={item.buttonText}
            buttonLink={item.buttonLink}
            className={cardClassName}
          />
        ))}

        {/* Small spacer at the end */}
        <div className="shrink-0 w-3 lg:w-4" />
      </div>
    </div>
  );
}
