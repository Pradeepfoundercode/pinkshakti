import healthLogo from "../assets/logo/healths.png"
import womenSafetyIcon from "../assets/logo/women_safety.png"
import anonymousReportIcon from "../assets/logo/bell.png"
import womenSchemesIcon from "../assets/logo/women_schems.png"
import womenLawsIcon from "../assets/logo/laws&rights.png"
import eFirIcon from "../assets/logo/note.png"
import communityIcon from "../assets/logo/communities.png"
import mapIcon from "../assets/logo/Glossy Magenta Location Pin.png"
import helpline from "../assets/logo/Glossy Pink Telephone Handset.png"
import dataAnalytics from "../assets/logo/Glossy Rising Magenta Chart Icon.png"

import cardBgImage from "../assets/features/Smiling Woman with Pink Shield Design.png"
import cardBgImage2 from "../assets/features/Pink Security Alert with Hidden Figure.png"
import cardBgImage3 from "../assets/features/Glossy Pink E-FIR Legal Laptop Illustration.png"
import cardBgImage4 from "../assets/features/Glossy Pink City Map Banner.png"
import cardBgImage5 from "../assets/features/Pink Shield of Knowledge Books.png"
import cardBgImage6 from "../assets/features/Serene Pink Wellness Woman with Health Icons.png"
import cardBgImage7 from "../assets/features/Pink India Map Analytics Banner.png"
import cardBgImage8 from "../assets/features/Pink Emergency Call Safety Illustration.png"
import cardBgImage9 from "../assets/features/Pink One-Stop Center Building.png"

export {
  healthLogo,
  womenSafetyIcon,
  anonymousReportIcon,
  womenSchemesIcon,
  womenLawsIcon,
  eFirIcon,
  communityIcon,
  mapIcon,
  helpline,
  dataAnalytics,
}

export const featuresList = [
  {
    title: "Women Safety",
    description: "Emergency Response Support System (ERSS) and safety resources for women.",
    link: "/features/women-safety",
    bgImage: cardBgImage,
    icon: womenSafetyIcon,
  },
  {
    title: "Anonymous Crime Reporting",
    description: "Report incidents anonymously with map location & e-FIR information.",
    link: "/features/anonymous-crime-reporting",
    bgImage: cardBgImage2,
    icon: anonymousReportIcon,
  },
  {
    title: "E-FIR",
    description: "E-FIR information and official link to UP Police e-FIR portal.",
    dedicatedLink: {
      text: "View dedicated E-FIR page →",
      to: "/features/e-fir",
    },
    link: "/features/e-fir",
    bgImage: cardBgImage3,
    icon: eFirIcon,
  },
  {
    title: "City Scan",
    description: "Check safety information and report unsafe areas in your city.",
    dedicatedLink: {
      text: "View dedicated City Scan page →",
      to: "/features/city-scan",
    },
    link: "/features/city-scan",
    bgImage: cardBgImage4,
    icon: mapIcon,
  },
  {
    title: "Pink Info",
    description: "Important information and resources for a brighter tomorrow.",
    bullets: [
      "Women Schemes",
      "Women Laws & Rights",
      "PoSH Act 2013",
    ],
    link: "/features/pink-info",
    bgImage: cardBgImage5,
    icon: womenLawsIcon,
  },
  {
    title: "Pink Health",
    description: "Health awareness and resources for women's well-being.",
    bullets: [
      "Mental Health",
      "Menstrual Health",
      "Cervical Cancer Awareness",
    ],
    link: "/features/pink-health",
    bgImage: cardBgImage6,
    icon: healthLogo,
  },
  {
    title: "State Women Commission",
    description: "View crime data, trends and safety insights for a safer Uttar Pradesh.",
    link: "/features/state-women-commission",
    bgImage: cardBgImage7,
    icon: dataAnalytics,
  },
  {
    title: "Emergency Helplines",
    description: "Access important helpline numbers like 112, 181, 1090 and more.",
    link: "/features/emergency-helplines",
    bgImage: cardBgImage8,
    icon: helpline,
  },
  {
    title: "One Stop Centers",
    description: "Find One Stop Centers near you for support and assistance.",
    link: "/features/one-stop-centers",
    bgImage: cardBgImage9,
    icon: communityIcon,
  },
]
