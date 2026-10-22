import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { womenRightsList } from '../../constants/womenRightsData';
import PhoneBanner from '../../components/common/PhoneBanner';

export default function EqualPay() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find by numeric ID or slug (e.g. 'equal-pay')
  const right =
    womenRightsList.find((r) => r.id === parseInt(id, 10) || r.slug === id) ||
    womenRightsList[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!right) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-bold text-[#102849]">Right Not Found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fff7fa] text-[#102849] flex flex-col justify-between">
      {/* Main Details Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl shadow-pink-500/5 border border-pink-100">
          {/* 2-Column Layout: Left Image, Right Content (Top-aligned) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Image */}
            <div className="lg:col-span-6 flex items-start justify-center pt-2">
              <img
                src={right.image}
                alt={right.title}
                className="w-full max-w-[660px] h-auto sm:h-[385px] object-fill rounded-2xl border border-pink-100/80 shadow-xs"
              />
            </div>

            {/* Right Column: Title & Content */}
            <div className="lg:col-span-6 flex flex-col justify-start space-y-4">
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#824497] leading-tight">
                {right.title}
              </h1>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal whitespace-pre-line">
                {right.desc}
              </p>
            </div>
          </div>

          {/* Quick Pagination to Previous / Next Right */}
          <div className="mt-10 pt-6 border-t border-pink-100 flex items-center justify-between gap-4">
            {right.id > 1 ? (
              <button
                type="button"
                onClick={() =>
                  navigate(`/highlights/pink-info/women-rights/${right.id - 1}`)
                }
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#e60067] transition cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" /> Previous Right
              </button>
            ) : (
              <div />
            )}

            {right.id < womenRightsList.length ? (
              <button
                type="button"
                onClick={() =>
                  navigate(`/highlights/pink-info/women-rights/${right.id + 1}`)
                }
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#e60067] transition cursor-pointer ml-auto"
              >
                Next Right <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <div />
            )}
          </div>
        </div>
      </main>

      {/* Mobile Download Banner */}
      <div className="mt-8">
        <PhoneBanner />
      </div>
    </div>
  );
}
