import React, { useState, useEffect } from "react";
import { Camera, X } from "lucide-react";
import PhoneBanner from "../components/common/PhoneBanner";
import galleryBanner from "../assets/gallery/Pink Community Leadership Photo Collage (1).png";
import { getGalleryImage } from "../services/gallery.service";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const [galleryData, setGalleryData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    let isMounted = true;

    const fetchImages = async () => {
      try {
        setIsLoading(true);
        const response = await getGalleryImage();
        
        if (isMounted && response?.status && response?.data) {
          setGalleryData(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch gallery images:", error);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchImages();

    return () => {
      isMounted = false;
    };
  }, []);

  const formatSectionTitle = (key) => {
    return key.charAt(0).toUpperCase() + key.slice(1);
  };

  return (
    <>
      <section className="relative isolate h-[200px] w-full overflow-hidden sm:h-[260px] md:h-[320px] lg:h-[350px]">
        <img
          src={galleryBanner}
          alt="Pink Shakti Gallery - Moments of Change, Stories of Strength"
          className={`absolute inset-0 -z-10 h-full w-full object-cover object-center lg:object-fill transition-transform duration-[2000ms] ease-out ${
            isLoaded ? "scale-100" : "scale-110"
          }`}
        />

        <div className="absolute inset-0 z-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent md:hidden" />

        <div className="hero-content relative z-10 flex h-full w-[95%] flex-col justify-center px-[5%] text-[#102849] sm:w-[85%] sm:px-[8%] md:w-[65%] lg:w-[55%]">
          <h1
            className={`font-serif text-[28px] font-bold leading-tight tracking-tight text-[#102849] transition-all duration-700 ease-out delay-300 sm:text-[34px] md:text-[40px] lg:text-[46px] ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            Gallery
          </h1>

          <h2
            className={`mt-1.5 text-base font-bold leading-snug text-[#e60067] transition-all duration-700 ease-out delay-400 sm:mt-2 sm:text-lg lg:text-[1.2rem] ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            Moments of Change, Stories of Strength
          </h2>

          <p
            className={`mt-1.5 max-w-lg text-[12px] font-medium leading-relaxed text-slate-700 transition-all duration-700 ease-out delay-500 sm:mt-2 sm:text-[13px] lg:text-[14px] ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            A glimpse of our awareness programs, community engagements,
            events, and initiatives towards a safer, stronger society.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-[1600px] flex flex-col gap-10">
          
          {isLoading ? (
            <div className="flex h-60 items-center justify-center">
              <div className="flex flex-col items-center gap-3">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-pink-200 border-t-[#e60067]"></div>
                <p className="text-sm font-medium text-slate-500">Loading gallery...</p>
              </div>
            </div>
          ) : (
            <>
              {Object.entries(galleryData).map(([categoryKey, images]) => {
                if (!images || images.length === 0) return null;

                return (
                  <div 
                    key={categoryKey} 
                    className="relative overflow-hidden rounded-[24px] border border-pink-100 bg-[#fff5f8] p-5 sm:p-6 lg:p-7 shadow-sm"
                  >
                    <div className="mb-6 flex flex-col gap-4">
                      <div>
                        <span className="inline-flex cursor-default items-center gap-1.5 rounded-full bg-[#ffd8e6] px-2.5 py-0.5 text-[11px] font-bold text-[#e60067] shadow-sm uppercase tracking-wide">
                          <Camera className="h-3 w-3 fill-[#e60067]" />
                          <span>PHOTO GALLERY</span>
                        </span>

                        <h2 className="mt-2 text-2xl font-bold leading-tight text-[#e60067] sm:text-3xl">
                          {formatSectionTitle(categoryKey)}{" "}
                        </h2>

                        <p className="mt-1 max-w-3xl text-[13px] leading-relaxed text-slate-600 sm:text-sm">
                          Snapshots from our events, awareness campaigns, workshops and community outreach programs.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 sm:gap-5 lg:gap-6">
                      {images.map((image, index) => (
                        <button
                          type="button"
                          key={image.id || `${categoryKey}-${index}`}
                          onClick={() => setSelectedImage(image)}
                          aria-label={`View ${image.gallery_name}`}
                          className="group relative aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-xl border border-white bg-white text-left shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md hover:shadow-pink-300/40"
                        >
                          <img
                            src={image.image_url}
                            alt={image.image_title || image.gallery_name}
                            loading="lazy"
                            onError={(e) => {
                              e.currentTarget.style.visibility = "hidden";
                            }}
                            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                          />
                          
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-3">
                            <p className="translate-y-4 text-[11px] font-medium leading-tight text-white transition-transform duration-300 group-hover:translate-y-0 line-clamp-2">
                              {image.image_title || image.gallery_name}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </>
          )}
          
          {!isLoading && Object.keys(galleryData).length === 0 && (
            <div className="rounded-2xl border border-slate-200 bg-white py-16 text-center shadow-sm">
              <Camera className="mx-auto mb-4 h-12 w-12 text-slate-300" />
              <h3 className="text-lg font-medium text-slate-700">No gallery images found</h3>
              <p className="mt-1 text-sm text-slate-500">Check back later for new updates.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox / Modal */}
      {selectedImage && (
        <div
          className="animate-in fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm duration-200"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          {/* Close button FIXED to screen's top-right corner on ALL devices */}
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="fixed right-4 top-4 z-[60] flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-colors hover:bg-[#e60067] sm:right-6 sm:top-6 lg:right-8 lg:top-8 lg:h-10 lg:w-10"
          >
            <X className="h-5 w-5 lg:h-6 lg:w-6" />
          </button>

          <div
            className="relative flex max-h-[90vh] max-w-5xl flex-col overflow-hidden rounded-xl bg-black/50 p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex h-full items-center justify-center overflow-hidden rounded-lg">
              <img
                src={selectedImage.image_url}
                alt={selectedImage.image_title}
                className="max-h-[75vh] max-w-full object-contain"
              />
            </div>
            
            {(selectedImage.image_title || selectedImage.gallery_name) && (
              <div className="mt-4 px-2 text-center sm:px-6">
                <span className="mb-2 inline-block rounded-full bg-[#e60067] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  {formatSectionTitle(selectedImage.type)}
                </span>
                {selectedImage.gallery_name && (
                  <h3 className="text-base font-semibold text-white sm:text-lg">
                    {selectedImage.gallery_name}
                  </h3>
                )}
                {selectedImage.image_title && (
                  <p className="mt-1 text-xs text-gray-300 sm:text-sm">
                    {selectedImage.image_title}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      <PhoneBanner />
    </>
  );
}

export default Gallery;