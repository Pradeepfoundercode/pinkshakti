import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { homeVideos } from '../../constants/homeData';

export default function VideoSlider({ videos = homeVideos, className = "" }) {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnailsContainerRef = useRef(null);
  const isFirstRender = useRef(true);

  const currentVideo = videos[currentIndex] || videos[0];

  // Auto-scroll active thumbnail horizontally within its container (without scrolling page)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (thumbnailsContainerRef.current) {
      const container = thumbnailsContainerRef.current;
      const activeThumb = container.children[currentIndex];
      if (activeThumb) {
        const scrollLeft =
          activeThumb.offsetLeft -
          container.offsetWidth / 2 +
          activeThumb.offsetWidth / 2;
        container.scrollTo({
          left: scrollLeft,
          behavior: 'smooth',
        });
      }
    }
  }, [currentIndex]);

  const handlePrev = () => {
    setIsPlaying(false);
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsPlaying(false);
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  const handleSelectVideo = (index) => {
    if (index === currentIndex) return;
    setIsPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className={`relative py-4 sm:py-6 lg:py-8 ${className}`}>
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-4 sm:mb-5">
          <h2 className="font-serif text-xl sm:text-2xl lg:text-[1.85rem] font-bold tracking-wider text-[#e60067] uppercase">
            {t("home.videoHeader", { defaultValue: "GOOD STORIES" })}
          </h2>
        </div>

        {/* ========================================================= */}
        {/* MAIN COMPACT VIDEO PLAYER (Centered & Clean)              */}
        {/* ========================================================= */}
        <div className="relative mx-auto w-full max-w-[680px] overflow-hidden rounded-xl sm:rounded-2xl border border-pink-200/80 bg-black shadow-lg shadow-pink-500/10">

          <div className="relative aspect-video w-full">
            {isPlaying ? (
              // Active YouTube Iframe (Loads strictly when user hits play)
              <div className="relative h-full w-full">
                <iframe
                  key={currentVideo.id}
                  className="h-full w-full border-0"
                  src={`https://www.youtube.com/embed/${currentVideo.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1&cc_lang_pref=hi`}
                  title={currentVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ) : (
              // Facade: HD YouTube Thumbnail + Beautiful Play Button (Zero lag on initial load!)
              <div
                onClick={() => setIsPlaying(true)}
                className="group relative h-full w-full cursor-pointer select-none"
              >
                {/* Thumbnail Image */}
                <img
                  src={`https://i.ytimg.com/vi/${currentVideo.id}/hqdefault.jpg`}
                  alt={currentVideo.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Center Normal Play Button (No Blur Behind, Solid Clean Look) */}
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white text-[#e60067] shadow-md border border-gray-100/80">
                    <Play className="h-5 w-5 sm:h-6 sm:w-6 fill-current ml-0.5" />
                  </div>
                </div>

              </div>
            )}

            {/* Left Chevron Slider Navigation Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              aria-label="Previous Video"
              className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110 hover:bg-[#e60067] hover:border-[#e60067] cursor-pointer shadow-md group/btn"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover/btn:-translate-x-0.5" />
            </button>

            {/* Right Chevron Slider Navigation Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label="Next Video"
              className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110 hover:bg-[#e60067] hover:border-[#e60067] cursor-pointer shadow-md group/btn"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover/btn:translate-x-0.5" />
            </button>

          </div>

        </div>

        {/* ========================================================= */}
        {/* BOTTOM THUMBNAILS GALLERY STRIP (Simple & Clean)          */}
        {/* ========================================================= */}
        <div className="mt-3.5 sm:mt-4 mx-auto max-w-[680px]">
          <div
            ref={thumbnailsContainerRef}
            className="flex gap-2 sm:gap-2.5 overflow-x-auto py-1.5 px-0.5 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {videos.map((video, idx) => {
              const isSelected = currentIndex === idx;
              return (
                <button
                  key={video.id}
                  onClick={() => handleSelectVideo(idx)}
                  className={`group relative shrink-0 aspect-video w-20 sm:w-24 md:w-28 rounded-lg overflow-hidden transition-all duration-300 cursor-pointer text-left ${isSelected
                      ? 'ring-2.5 ring-[#e60067] border-2 border-white scale-105 shadow-md shadow-pink-500/25 z-10'
                      : 'opacity-70 hover:opacity-100 border border-pink-100/80 shadow-xs'
                    }`}
                >
                  {/* Thumbnail Image */}
                  <img
                    src={`https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`}
                    alt={video.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
