import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import defaultBanner from '../../assets/home/Empowered Women in Pink Horizons (1).png';


export default function BannerSlider({
  images = [],
  autoPlay = true,
  autoPlayInterval = 5000,
  showArrows = true,
  showDots = true,
  height = 'h-[250px] sm:h-[310px] md:h-[340px] lg:h-[450px]',
  objectFit = 'object-cover object-center lg:object-fill',
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

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

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
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white/75 backdrop-blur-sm text-[#102849] hover:text-white hover:bg-[#e60067] border border-pink-100/80 shadow-md transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          <button
            type="button"
            onClick={goToNext}
            aria-label="Next slide"
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white/75 backdrop-blur-sm text-[#102849] hover:text-white hover:bg-[#e60067] border border-pink-100/80 shadow-md transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </>
      )}

      {/* Bottom Dots Indicator (only if more than 1 image) */}
      {showDots && total > 1 && (
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-black/25 backdrop-blur-xs">
          {normalizedImages.map((_, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={index}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  isActive
                    ? 'w-6 sm:w-7 h-2 bg-[#e60067] shadow-xs'
                    : 'w-2 h-2 bg-white/75 hover:bg-white'
                }`}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}
