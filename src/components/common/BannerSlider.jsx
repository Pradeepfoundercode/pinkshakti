import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import defaultBanner from '../../assets/home/Empowered Women in Pink Horizons (1).png';


export default function BannerSlider({
  images = [],
  autoPlay = true,
  autoPlayInterval = 5000,
  showArrows = true,
  height = 'h-[220px] sm:h-[300px] md:h-[330px] lg:h-[450px]',
  objectFit = 'object-cover object-fill lg:object-fill',
  className = '',
}) {
  // Normalize images to array of objects: { src, alt }
  const normalizedImages = (images && images.length > 0 ? images : [defaultBanner]).map(
    (item, index) => {
      if (typeof item === 'string') {
        return { src: item, alt: `Banner slide ${index + 1}` };
      }
      return {
        src: item.src || item.image || item.url || defaultBanner,
        alt: item.alt || item.title || `Banner slide ${index + 1}`,
      };
    }
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const total = normalizedImages.length;

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  }, [total]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  // Auto-play effect
  useEffect(() => {
    if (!autoPlay || total <= 1 || isPaused) return;

    const timer = setInterval(() => {
      goToNext();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [autoPlay, autoPlayInterval, total, isPaused, goToNext]);

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
  };

  return (
    <section
      className={`relative isolate overflow-hidden w-full select-none ${height} ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Banner Slider"
    >
      {/* Slides Container */}
      <div className="relative w-full h-full overflow-hidden">
        {normalizedImages.map((image, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
              aria-hidden={!isActive}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading={index === 0 ? 'eager' : 'lazy'}
                className={`w-full h-full ${objectFit}`}
              />
            </div>
          );
        })}
      </div>

      {/* Prev / Next Arrows (only if more than 1 image) */}
      {showArrows && total > 1 && (
        <>
          <button
            type="button"
            onClick={goToPrev}
            aria-label="Previous slide"
            className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center text-white/75 hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)] transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer p-1"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 stroke-[2]" />
          </button>

          <button
            type="button"
            onClick={goToNext}
            aria-label="Next slide"
            className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center text-white/75 hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)] transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer p-1"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 stroke-[2]" />
          </button>
        </>
      )}
    </section>
  );
}
