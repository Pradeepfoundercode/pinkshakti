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
import cardImg1 from "../assets/home/Untitled_design_(24).png"
import cardImg2 from "../assets/home/any1.png"
import cardImg3 from "../assets/home/Untitled_design_(20)1.png"
import cardImg4 from "../assets/home/sch1.png"
import cardImg5 from "../assets/home/rig1.png"

export const homeFeatures = [
  {
    title: "Women Safety",
    description: "Emergency Response Support System (ERSS) for women.",
    icon: womenSafetyIcon,
    path: "/highlights/women-safety",
  },
  {
    title: "Anonymous Crime Reporting",
    description: "Report incidents anonymously with map location & e-FIR.",
    icon: anonymousReportIcon,
    path: "/highlights/anonymous-crime-reporting",
  },
  {
    title: "Women Schemes",
    description: "Information about government schemes for women.",
    icon: womenSchemesIcon,
    path: "/highlights/pink-info/women-schemes",
  },
  {
    title: "Women Laws & Rights",
    description: "Know your rights, laws and PoSH Act 2013.",
    icon: womenLawsIcon,
    path: "/highlights/pink-info/women-laws",
  },
  {
    title: "Pink Health",
    description: "Mental health, menstrual health and cervical cancer awareness.",
    icon: pinkHealthIcon,
    path: "/highlights/pink-health",
  },
  {
    title: "E-FIR",
    description: "Direct access to UP Police e-FIR portal.",
    icon: eFirIcon,
    path: "/highlights/e-fir",
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

export const homeFeatureCards = [
  {
    id: 1,
    image: cardImg1,
    title: "PINK SHAKTI WOMEN SAFETY APP",
    description: "Introducing Pink Shakti-An Award-Winning Women Safety Tech Solution dedicated to the Women Folk of Uttar Pradesh. This Mobile App was developed after a thorough research of four years. Through Pink Shakti App we aim to create a Social Impact to achieve SDG-5, Gender Equality. With a holistic approach towards Women Empowerment, the App is a complete power-packed solution of Women Safety, Awareness & Empowerment.",
    buttonText: "Download Now",
    buttonLink: "https://play.google.com/store/apps/details?id=com.inaequalisconsulting.pinkshakti",
  },
  {
    id: 2,
    image: cardImg2,
    title: "Crime Data Analytics",
    description: "City-wise crime trend analytics generated through user inputs are securely stored with us. We do not share any user data with third parties. Anonymous, city-level insights derived from user activity help us identify unsafe zones, alert users in real time, and contribute to strengthening women’s safety measures across cities.",
  },
  {
    id: 3,
    image: cardImg3,
    title: "ANONYMOUS CRIME REPORTING AND SHARING",
    description: "Women can share crime type even the smallest ones by giving the full description manually. They can also share the crime type via map on their location. This can be done in a confidential manner. Not only this, if they want to report a crime to police, they can file an e-FIR through Pink Shakti App.",
  },
  {
    id: 4,
    image: cardImg4,
    title: "Women Specific Schemes",
    description: "Aiming to create a social impact, updating women about government schemes specifically for them would increase Women Beneficiary Enrollment in the schemes. Women can avail benefits of the schemes helping them to become economically independent. Economically weaker and destitute women and girls would also benefit from the schemes. All the information is available on the Pink Shakti App.",
  },
  {
    id: 5,
    image: cardImg5,
    title: "Women Rights",
    description: "We aim to provide simple and reliable information on women’s rights, laws, and safety resources. Our objective is to create awareness, empower women with knowledge, and help them understand their rights in everyday situations.",
  },
]

