import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";


function MainLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col w-full max-w-full overflow-x-hidden">
      <Navbar />

      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;