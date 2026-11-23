import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageLoader from "../components/common/PageLoader";

function MainLayout() {
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);

    let active = true;

    // Give DOM a frame to render the new route's elements
    const timer = setTimeout(() => {
      const mainEl = document.querySelector("main");
      if (!mainEl) {
        if (active) setIsLoading(false);
        return;
      }

      const images = Array.from(mainEl.querySelectorAll("img"));
      if (images.length === 0) {
        if (active) setIsLoading(false);
        return;
      }

      const pendingImages = images.filter((img) => !img.complete);
      if (pendingImages.length === 0) {
        if (active) setIsLoading(false);
        return;
      }

      let loadedCount = 0;
      const totalPending = pendingImages.length;

      const handleImageDone = () => {
        loadedCount++;
        if (loadedCount >= totalPending && active) {
          setIsLoading(false);
        }
      };

      pendingImages.forEach((img) => {
        img.addEventListener("load", handleImageDone, { once: true });
        img.addEventListener("error", handleImageDone, { once: true });
      });
    }, 50);

    // Fallback safety timeout (max 650ms) so users never wait unnecessarily
    const safetyTimeout = setTimeout(() => {
      if (active) setIsLoading(false);
    }, 650);

    return () => {
      active = false;
      clearTimeout(timer);
      clearTimeout(safetyTimeout);
    };
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col w-full max-w-full overflow-x-hidden bg-[var(--color-theme,#fceaf1)] relative">
      {isLoading && <PageLoader />}

      <Navbar />

      <main
        className={`flex-1 w-full max-w-full overflow-x-hidden bg-transparent transition-opacity duration-200 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;