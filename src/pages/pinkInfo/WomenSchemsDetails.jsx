import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink, PhoneCall } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { womenSchemesList } from '../../constants/womenSchemesData';
import PhoneBanner from '../../components/common/PhoneBanner';

export default function WomenSchemsDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    const scheme = womenSchemesList.find((s) => s.id === parseInt(id, 10)) || womenSchemesList[0];

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [id]);

    if (!scheme) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
                <h2 className="text-2xl font-bold text-[#102849]">
                    {t('womenSchemesPage.schemeNotFound', { defaultValue: 'Scheme Not Found' })}
                </h2>
            </div>
        );
    }

    const title = t(`womenSchemesPage.items.${scheme.id}.title`, { defaultValue: scheme.title });
    const desc = t(`womenSchemesPage.items.${scheme.id}.desc`, { defaultValue: scheme.desc });
    const schemeText = t(`womenSchemesPage.items.${scheme.id}.schemeText`, { defaultValue: scheme.schemeText });
    const scholarshipInfo = t(`womenSchemesPage.items.${scheme.id}.scholarshipInfo`, { defaultValue: scheme.scholarshipInfo });

    const isExternalUrl = scheme.applyUrl && (scheme.applyUrl.startsWith('http://') || scheme.applyUrl.startsWith('https://'));
    const isPhoneUrl = scheme.applyUrl && scheme.applyUrl.startsWith('tel:');

    const isHi = i18n.language?.startsWith('hi');
    const displayImage = isHi
        ? (scheme.detailImageHi || scheme.imageHi || scheme.detailImage || scheme.detailImageEn || scheme.image)
        : (scheme.detailImageEn || scheme.detailImage || scheme.imageEn || scheme.image);

    const [imgLoaded, setImgLoaded] = React.useState(false);

    useEffect(() => {
        setImgLoaded(false);
        if (!displayImage) return;
        const img = new Image();
        img.src = displayImage;
        if (img.complete && img.naturalWidth > 0) {
            setImgLoaded(true);
        } else {
            img.onload = () => setImgLoaded(true);
            img.onerror = () => setImgLoaded(true);
        }
    }, [displayImage]);

    return (
        <div className="min-h-screen bg-transparent text-[#102849] flex flex-col justify-between">
            {/* Main Details Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
                <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl shadow-pink-500/5 border border-pink-100">

                    {/* 2-Column Layout: Left Image, Right Content (Top-aligned) */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                        {/* Left Column: Image (wider width, same height) */}
                        <div className="lg:col-span-6 flex items-start justify-center pt-2 relative min-h-[260px] sm:min-h-[385px] w-full">
                            {!imgLoaded && (
                                <div className="w-full max-w-[660px] h-[260px] sm:h-[385px] rounded-2xl bg-pink-100/40 animate-pulse flex flex-col items-center justify-center border border-pink-200/40">
                                    <div className="w-8 h-8 border-3 border-pink-300 border-t-[#e60067] rounded-full animate-spin"></div>
                                </div>
                            )}
                            <img
                                src={displayImage}
                                alt={title}
                                onLoad={() => setImgLoaded(true)}
                                className={`w-full max-w-[660px] h-auto sm:h-[385px] object-fill rounded-2xl transition-opacity duration-300 ${
                                    imgLoaded ? 'opacity-100 block' : 'opacity-0 hidden'
                                }`}
                            />
                        </div>

                        {/* Right Column: Title, Content & Apply Button */}
                        <div className="lg:col-span-6 flex flex-col justify-start">
                            {scheme.schemeText ? (
                                <div className="space-y-5">
                                    <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#824497] leading-snug pt-1 text-center">
                                        {title}
                                    </h1>

                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-base sm:text-lg font-bold text-[#102849] mb-1.5">
                                                {t('womenSchemesPage.schemeLabel', { defaultValue: 'Scheme:' })}
                                            </h3>
                                            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                                                {schemeText}
                                            </p>
                                        </div>

                                        {scheme.scholarshipInfo && (
                                            <div>
                                                <h3 className="text-base sm:text-lg font-bold text-[#102849] mb-1.5">
                                                    {t('womenSchemesPage.scholarshipLabel', { defaultValue: 'Scholarship:' })}
                                                </h3>
                                                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                                                    {scholarshipInfo}
                                                </p>
                                            </div>
                                        )}

                                        {scheme.applyUrl && (
                                            <div className="pt-2 text-sm sm:text-base leading-relaxed">
                                                <span className="text-[#e60067] font-bold">
                                                    {t('womenSchemesPage.applyOnlineLabel', { defaultValue: 'APPLY ONLINE: ' })}
                                                </span>
                                                <a
                                                    href={scheme.applyUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-[#0284c7] hover:underline font-medium break-all"
                                                >
                                                    {scheme.portalText || scheme.applyUrl}
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-5">
                                    <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#102849] leading-snug pt-1 text-center">
                                        {title}
                                    </h1>

                                    <div className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal whitespace-pre-line">
                                        {desc}
                                    </div>

                                    {/* Apply / Helpline Button */}
                                    {scheme.applyUrl && (
                                        <div className="pt-2 flex items-center gap-4 flex-wrap">
                                            {isPhoneUrl ? (
                                                <a
                                                    href={scheme.applyUrl}
                                                    className="inline-flex items-center gap-2 rounded-xl btn-pink py-2.5 px-5 text-sm font-bold shadow-md shadow-pink-500/20 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
                                                >
                                                    <PhoneCall className="w-4 h-4" />
                                                    <span>{t('womenSchemesPage.call181', { defaultValue: 'Call 181 (Toll Free 24x7)' })}</span>
                                                </a>
                                            ) : isExternalUrl ? (
                                                <a
                                                    href={scheme.applyUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 rounded-xl btn-pink py-2.5 px-5 text-sm font-bold shadow-md shadow-pink-500/20 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
                                                >
                                                    <span>{t('womenSchemesPage.applyOnlineBtn', { defaultValue: 'Apply Online' })}</span>
                                                    <ArrowRight className="w-4 h-4" />
                                                </a>
                                            ) : (
                                                <a
                                                    href={scheme.applyUrl}
                                                    className="inline-flex items-center gap-2 rounded-xl btn-pink py-2.5 px-5 text-sm font-bold shadow-md shadow-pink-500/20 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
                                                >
                                                    <span>{t('womenSchemesPage.explorePortal', { defaultValue: 'Explore Portal' })}</span>
                                                    <ArrowRight className="w-4 h-4" />
                                                </a>
                                            )}

                                            {scheme.portalUrl && isExternalUrl && (
                                                <a
                                                    href={scheme.portalUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#e60067] hover:underline"
                                                >
                                                    <ExternalLink className="w-3.5 h-3.5" />
                                                    <span>{scheme.portalText}</span>
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                    </div>

                    {/* Quick Pagination to Previous / Next Scheme */}
                    <div className="mt-10 pt-6 border-t border-pink-100 flex items-center justify-between gap-4">
                        {scheme.id > 1 ? (
                            <button
                                type="button"
                                onClick={() => navigate(`/highlights/pink-info/women-schemes/${scheme.id - 1}`)}
                                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#e60067] transition cursor-pointer"
                            >
                                <ArrowLeft className="w-4 h-4" /> {t('womenSchemesPage.prevScheme', { defaultValue: 'Previous Scheme' })}
                            </button>
                        ) : <div />}

                        {scheme.id < womenSchemesList.length ? (
                            <button
                                type="button"
                                onClick={() => navigate(`/highlights/pink-info/women-schemes/${scheme.id + 1}`)}
                                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#e60067] transition cursor-pointer ml-auto"
                            >
                                {t('womenSchemesPage.nextScheme', { defaultValue: 'Next Scheme' })} <ArrowRight className="w-4 h-4" />
                            </button>
                        ) : <div />}
                    </div>

                </div>
            </div>

            {/* Mobile Download Banner */}
            <div className="mt-8">
                <PhoneBanner />
            </div>
        </div>
    );
}
