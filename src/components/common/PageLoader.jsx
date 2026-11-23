import React from 'react';

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/80 backdrop-blur-xs transition-opacity duration-200">
      {/* Simple small pink circle spinner */}
      <div className="w-8 h-8 border-3 border-pink-200 border-t-[#e60067] rounded-full animate-spin"></div>
    </div>
  );
}
