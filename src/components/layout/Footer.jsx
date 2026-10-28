import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { MapPin, Globe, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion, useInView, animate } from "framer-motion"; 
import logo from "../../assets/logo/image.png";
import googlePlayBadge from "../../assets/logo/play_store.png";
import communitiesLogo from "../../assets/logo/communities.png";
import { getSocialMediaContent } from "../../services/social.service";

// --- Animated Counter Component (Fast Speed) ---
const AnimatedCounter = ({ from = 0, to }) => {
  const nodeRef = useRef(null);
  // Trigger animation when element comes into view
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration: 1.2, // Fast counting duration
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            // Local string (comma format) add karne ke liye
            nodeRef.current.textContent = Math.round(value).toLocaleString();
          }
        },
      });
      return () => controls.stop();
    }
  }, [from, to, inView]);

  return <span ref={nodeRef}>{from}</span>;
};

const cleanUrl = (url) => {
  if (!url) return "#";
  const match = url.match(/\((https?:\/\/[^\)]+)\)/);
  if (match) return match[1];
  return url.replace(/[\[\]]/g, "").trim();
};

const getSocialIcon = (platform = "", icon = "") => {
  const p = (platform || "").toLowerCase();
  const i = (icon || "").toLowerCase();
  
  if (p.includes("link") || i.includes("link")) {
    return <svg className="h-4 w-4 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>;
  }
  if (p.includes("face") || i.includes("face")) {
    return <svg className="h-4 w-4 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>;
  }
  if (p.includes("insta") || i.includes("insta")) {
    return <svg className="h-4 w-4 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>;
  }
  if (p.includes("you") || i.includes("you") || p.includes("yt") || i.includes("yt")) {
    return <svg className="h-4 w-4 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>;
  }
  if (p.trim() === "x" || p.includes("twit") || i.includes("twit") || i.includes("x-")) {
    return <svg className="h-3.5 w-3.5 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>;
  }
  return <Globe className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />;
};

const defaultSocialLinks = [
  { id: "1", name: "Facebook", url: "https://www.facebook.com/profile.php?id=100095187632474", iconName: "facebook" },
  { id: "2", name: "Instagram", url: "https://instagram.com/pink_shakti?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D", iconName: "instagram" },
  { id: "3", name: "Linked In", url: "https://www.linkedin.com/showcase/97847617/admin/feed/posts/", iconName: "linkedin" },
  { id: "4", name: "YouTube", url: "https://youtube.com/@PINKSHAKTIOFFICIAL-bj1st?si=n_D0Dzc1XgsKr0K0", iconName: "youtube" },
  { id: "5", name: "X", url: "https://x.com/TechSolWomenApp?t=h7GF24UTf07iuhPHLwensQ&s=08", iconName: "x-twitter" },
];

// --- Animation Variants ---
const footerStagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Footer() {
  const { t } = useTranslation();
  const [socialLinks, setSocialLinks] = useState(defaultSocialLinks);
  const [visitorCount, setVisitorCount] = useState(93211);

  useEffect(() => {
    const cachedData = sessionStorage.getItem("pinkshakti_footer_data");
    if (cachedData) {
      try {
        const { links, visitors } = JSON.parse(cachedData);
        if (links?.length) setSocialLinks(links);
        if (visitors) setVisitorCount(visitors);
        return;
      } catch (err) {
        console.error("Cache parsing error:", err);
      }
    }

    let isMounted = true;
    getSocialMediaContent()
      .then((res) => {
        if (!isMounted) return;
        let formattedLinks = [];
        let totalVisitors = null;
        if (res?.status && res?.social_media?.data?.length > 0) {
          formattedLinks = res.social_media.data
            .filter((item) => item.status === "1" || item.status === 1 || item.status === undefined)
            .sort((a, b) => Number(a.sort_order || 0) - Number(b.sort_order || 0))
            .map((item) => ({
              id: item.id,
              name: item.platform_name,
              url: cleanUrl(item.platform_url),
              iconName: item.icon,
            }));
          if (formattedLinks.length > 0) setSocialLinks(formattedLinks);
        }
        if (res?.status && res?.visitors?.total) {
          totalVisitors = res.visitors.total;
          setVisitorCount(totalVisitors);
        }
        sessionStorage.setItem("pinkshakti_footer_data", JSON.stringify({
          links: formattedLinks.length > 0 ? formattedLinks : defaultSocialLinks,
          visitors: totalVisitors || 93211,
        }));
      })
      .catch((err) => console.error("Failed to fetch social media & visitors:", err));
    return () => { isMounted = false; };
  }, []);

  const quickLinks = [
    { name: t("footer.oneStopCenters", { defaultValue: "One Stop Centers" }), path: "/highlights/one-stop-centers" },
    { name: t("footer.emergencyHelplines", { defaultValue: "Emergency Helplines" }), path: "/highlights/emergency-helplines" },
    { name: t("footer.contactUs", { defaultValue: "Contact Us" }), path: "/contact" },
    { name: t("footer.ourFeedback", { defaultValue: "Our Feedback" }), path: "/feedback" },
  ];

  return (
    <footer className="w-full bg-[#ea2163] text-white overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 py-8 lg:py-10">
        
        {/* Animated Staggered Grid */}
        <motion.div 
          variants={footerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 items-start"
        >
          {/* Brand & Socials */}
          <motion.div variants={fadeInUp} className="lg:col-span-4 flex flex-col">
            <div className="group flex cursor-pointer items-center gap-3 w-fit">
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                src={logo}
                alt="Pink Shakti Logo"
                className="h-12 w-12 object-contain rounded-full bg-white p-1 shadow-md shrink-0"
              />
              <div>
                <h3 className="font-serif text-lg font-bold tracking-wider text-white leading-none">
                  PINK SHAKTI
                </h3>
                <p className="text-[10px] font-medium text-pink-200 uppercase tracking-widest mt-1">
                  {t("footer.tagline", { defaultValue: "WOMEN SAFETY | AWARENESS | EMPOWERMENT" })}
                </p>
              </div>
            </div>
            <p className="mt-3 text-xs text-pink-100/85 leading-relaxed max-w-xs">
              {t("footer.description", { defaultValue: "Empowering women through awareness, rapid response helplines, and dedicated one-stop support centers." })}
            </p>

            <div className="mt-4 flex gap-2.5">
              {socialLinks.map((item) => (
                <motion.a
                  whileHover={{ y: -5, scale: 1.15, backgroundColor: "#fff", color: "#940040" }}
                  whileTap={{ scale: 0.9 }}
                  key={item.id || item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="group flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white border border-white/5 shadow-lg"
                >
                  {getSocialIcon(item.name, item.iconName)}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp} className="lg:col-span-3">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-pink-200 mb-3">
              {t("footer.quickLinksTitle", { defaultValue: "Quick Links" })}
            </h4>
            <ul className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="group flex items-center text-xs font-medium text-pink-50 transition-all hover:translate-x-1 hover:text-white"
                  >
                    <ChevronRight className="h-3 w-3 opacity-0 -ml-3 mr-1 transition-all group-hover:opacity-100 group-hover:ml-0" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Us */}
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-pink-200 mb-3">
              {t("footer.contactTitle", { defaultValue: "Contact" })}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-xs text-pink-50">
                <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0 text-pink-200" />
                <span>{t("footer.location", { defaultValue: "Uttar Pradesh, India" })}</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-pink-50 hover:text-white transition-colors">
                <Globe className="h-3.5 w-3.5 mt-0.5 shrink-0 text-pink-200" />
                <a href="/" target="_blank" rel="noreferrer" className="hover:underline underline-offset-2">
                  {t("footer.website", { defaultValue: "www.pinkshakti.in" })}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* App & Visitors */}
          <motion.div variants={fadeInUp} className="lg:col-span-3 flex flex-col space-y-4 pt-1 lg:pt-0">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden group flex items-center gap-3.5 bg-gradient-to-br from-white/20 to-white/5 rounded-xl px-4 py-3 border border-white/30 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-md w-fit cursor-default"
            >
              <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-white/20 blur-xl transition-all duration-500 group-hover:bg-white/30 group-hover:scale-150"></div>
              <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 shadow-inner">
                <motion.img
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  src={communitiesLogo}
                  alt="Visitors"
                  className="h-6 w-6 object-contain brightness-0 invert drop-shadow-md"
                />
              </div>
              <div className="relative z-10">
                <div className="text-[9px] text-pink-100 uppercase tracking-widest font-bold mb-0.5 opacity-90">{t("footer.totalVisitors", { defaultValue: "Total Visitors" })}</div>
                <div className="font-extrabold text-white text-xl leading-none tracking-tight drop-shadow-sm flex items-center">
                  {/* Fast Animated Counter */}
                  <AnimatedCounter from={0} to={Number(visitorCount)} />
                  <span className="text-pink-300 ml-0.5">+</span>
                </div>
              </div>
            </motion.div>

            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://play.google.com/store/apps/details?id=com.inaequalisconsulting.pinkshakti"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get Pink Shakti on Google Play"
              className="flex items-center gap-2.5 btn-playstore rounded-lg px-3.5 py-2.5 w-fit shadow-lg bg-black/30 hover:bg-black/40 transition-colors border border-white/10"
            >
              <img src={googlePlayBadge} alt="Play Store" className="h-5 w-5 object-contain" />
              <div>
                <div className="text-[8px] uppercase tracking-wider text-neutral-300 leading-none mb-0.5">{t("footer.getItOn", { defaultValue: "Get it on" })}</div>
                <div className="text-[13px] font-semibold text-white leading-none tracking-wide">{t("footer.googlePlay", { defaultValue: "Google Play" })}</div>
              </div>
            </motion.a>
          </motion.div>

        </motion.div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-center gap-4 px-6 py-4 text-[12px] font-medium text-pink-200/90 sm:flex-row sm:gap-12 sm:px-8">
          <p>© {new Date().getFullYear()} {t("footer.allRightsReserved", { defaultValue: "Pink Shakti. All Rights Reserved." })}</p>
        </div>
      </div>
    </footer>
  );
}