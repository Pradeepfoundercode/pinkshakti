import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageLoader from "../components/common/PageLoader";

// Extract all image URLs from <img> tags and CSS background-images inside a container
function extractAllPageImages(container) {
  const urls = new Set();
  if (!container) return [];

  // 1. All <img> elements
  const imgs = container.querySelectorAll("img");
  imgs.forEach((img) => {
    const src = img.currentSrc || img.src;
    if (src && !src.startsWith("data:")) {
      urls.add(src);
    }
  });

  // Helper to extract URLs from background-image string
  const addFromBgString = (bgStr) => {
    if (!bgStr || bgStr === "none") return;
    const regex = /url\(["']?([^"')]+)["']?\)/g;
    let match;
    while ((match = regex.exec(bgStr)) !== null) {
      if (match[1] && !match[1].startsWith("data:")) {
        urls.add(match[1]);
      }
    }
  };

  // 2. All elements with CSS background-image (inline or computed)
  const allElements = container.querySelectorAll("*");
  allElements.forEach((el) => {
    addFromBgString(el.style?.backgroundImage);
    const computedBg = window.getComputedStyle(el).backgroundImage;
    addFromBgString(computedBg);
  });

  return Array.from(urls);
}

// Preload a single image URL and resolve when loaded or errored
function preloadImageUrl(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = url;
    if (img.complete && img.naturalWidth > 0) {
      resolve();
    } else {
      img.onload = () => resolve();
      img.onerror = () => resolve(); // never block on failed image
    }
  });
}

function MainLayout() {
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);

    let active = true;

    // Small delay so React mounts the new route's elements into the DOM
    const scanTimer = setTimeout(() => {
      if (!active) return;

      const mainEl = document.querySelector("main");
      const urls = extractAllPageImages(mainEl);

      if (urls.length === 0) {
        if (active) setIsLoading(false);
        return;
      }

      // Wait for all images (both <img> and CSS background-images) to fully load
      Promise.all(urls.map(preloadImageUrl)).then(() => {
        if (active) {
          // Small buffer to allow the browser to paint the loaded images
          setTimeout(() => {
            if (active) setIsLoading(false);
          }, 80);
        }
      });
    }, 60);

    // Fallback safety timeout (max 2500ms) so users never wait indefinitely on slow networks
    const safetyTimeout = setTimeout(() => {
      if (active) setIsLoading(false);
    }, 2500);

    return () => {
      active = false;
      clearTimeout(scanTimer);
      clearTimeout(safetyTimeout);
    };
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col w-full max-w-full overflow-x-hidden bg-[var(--color-theme,#fceaf1)] relative">
      {isLoading && <PageLoader />}

      <Navbar />

      <main
        className={`flex-1 w-full max-w-full overflow-x-hidden bg-transparent transition-opacity duration-200 ${
          isLoading ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
