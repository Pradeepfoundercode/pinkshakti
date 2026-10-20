import womenSafetyIcon from "../assets/logo/women_safety.png"
import anonymousReportIcon from "../assets/logo/bell.png"
import womenSchemesIcon from "../assets/logo/women_schems.png"
import womenLawsIcon from "../assets/logo/laws&rights.png"
import pinkHealthIcon from "../assets/logo/healths.png"
import eFirIcon from "../assets/logo/note.png"
import communityIcon from "../assets/logo/communities.png"

import image1 from "../assets/home/1fourth.png"
import image2 from "../assets/home/2fourth.png"
import image3 from "../assets/home/3fourth.png"
import image4 from "../assets/home/3th.png"

export const homeFeatures = [
  {
    title: "Women Safety",
    description: "Emergency Response Support System (ERSS) for women.",
    icon: womenSafetyIcon,
    path: "/features/women-safety",
  },
  {
    title: "Anonymous Crime Reporting",
    description: "Report incidents anonymously with map location & e-FIR.",
    icon: anonymousReportIcon,
    path: "/features/anonymous-crime-reporting",
  },
  {
    title: "Women Schemes",
    description: "Information about government schemes for women.",
    icon: womenSchemesIcon,
    path: "/features/pink-info/women-schemes",
  },
  {
    title: "Women Laws & Rights",
    description: "Know your rights, laws and PoSH Act 2013.",
    icon: womenLawsIcon,
    path: "/features/pink-info/women-laws",
  },
  {
    title: "Pink Health",
    description: "Mental health, menstrual health and cervical cancer awareness.",
    icon: pinkHealthIcon,
    path: "/features/pink-health",
  },
  {
    title: "E-FIR",
    description: "Direct access to UP Police e-FIR portal.",
    icon: eFirIcon,
    path: "/features/e-fir",
  },
]

export const homeImpactItems = [
  { title: "Women's Safety", icon: womenSafetyIcon },
  { title: "Community Awareness", icon: communityIcon },
  { title: "Access to Rights", icon: eFirIcon },
  { title: "Health & Wellbeing", icon: pinkHealthIcon },
]

export const homeGalleryItems = [
  { id: 1, src: image1, alt: "Community Awareness" },
  { id: 2, src: image2, alt: "Pink Shakti Outreach" },
  { id: 3, src: image3, alt: "Women Workshop" },
  { id: 4, src: image4, alt: "Awareness Drive" },
]
