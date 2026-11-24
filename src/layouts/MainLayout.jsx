import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageLoader from "../components/common/PageLoader";

function MainLayout() {
  const { pathname } = useLocation();
  const { i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);

    let active = true;
    let checkAttempts = 0;
    const maxAttempts = 10; // Check up to 500ms for images to mount in DOM

    const scanAndLoad = () => {
      if (!active) return;

      const mainEl = document.querySelector("main");
      if (!mainEl) {
        if (checkAttempts++ < maxAttempts) {
          setTimeout(scanAndLoad, 50);
        } else {
          setIsLoading(false);
        }
        return;
      }

      // Collect all actual <img> elements in the page content
      const domImgs = Array.from(mainEl.querySelectorAll("img"));

      // Also collect any CSS background-images
      const bgUrls = new Set();
      const allEls = mainEl.querySelectorAll("*");
      allEls.forEach((el) => {
        const bg = el.style?.backgroundImage;
        if (bg && bg !== "none") {
          const m = bg.match(/url\(["']?([^"')]+)["']?\)/);
          if (m && m[1] && !m[1].startsWith("data:")) bgUrls.add(m[1]);
        }
      });

      // If no images are found yet, wait for React to finish mounting the route components
      if (domImgs.length === 0 && bgUrls.size === 0 && checkAttempts++ < maxAttempts) {
        setTimeout(scanAndLoad, 50);
        return;
      }

      // Wait for every DOM <img> element to load AND decode before lifting the loader
      const imgPromises = domImgs.map((img) => {
        return new Promise((resolve) => {
          if (img.complete && img.naturalWidth > 0) {
            if (typeof img.decode === "function") {
              img.decode().catch(() => {}).then(resolve);
            } else {
              resolve();
            }
            return;
          }
          if (img.complete && img.naturalWidth === 0 && img.src) {
            // Broken or missing image, don't block
            resolve();
            return;
          }
          const onDone = () => {
            img.removeEventListener("load", onDone);
            img.removeEventListener("error", onDone);
            if (typeof img.decode === "function" && img.naturalWidth > 0) {
              img.decode().catch(() => {}).then(resolve);
            } else {
              resolve();
            }
          };
          img.addEventListener("load", onDone, { once: true });
          img.addEventListener("error", onDone, { once: true });
        });
      });

      // Wait for any CSS background-images
      const bgPromises = Array.from(bgUrls).map((url) => {
        return new Promise((resolve) => {
          const i = new Image();
          const onDone = () => {
            if (typeof i.decode === "function" && i.naturalWidth > 0) {
              i.decode().catch(() => {}).then(resolve);
            } else {
              resolve();
            }
          };
          i.onload = onDone;
          i.onerror = resolve;
          i.src = url;
          if (i.complete && i.naturalWidth > 0) {
            onDone();
          }
        });
      });

      const allPromises = [...imgPromises, ...bgPromises];

      if (allPromises.length === 0) {
        if (active) setIsLoading(false);
        return;
      }

      Promise.all(allPromises).then(() => {
        if (active) {
          // Double rAF ensures the browser has rendered the decoded images
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              if (active) setIsLoading(false);
            });
          });
        }
      });
    };

    // Initial check after React starts mounting
    const timer = setTimeout(scanAndLoad, 60);

    // Fallback safety timeout (3500ms) so users are never stuck permanently on slow connections
    const safetyTimeout = setTimeout(() => {
      if (active) setIsLoading(false);
    }, 3500);

    return () => {
      active = false;
      clearTimeout(timer);
      clearTimeout(safetyTimeout);
    };
  }, [pathname, i18n.language]);

  return (
    <div className="flex min-h-screen flex-col w-full max-w-full overflow-x-hidden bg-[var(--color-theme,#fceaf1)] relative">
      {isLoading && <PageLoader />}

      <Navbar />

      <main
        key={`${pathname}-${i18n.language}`}
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
