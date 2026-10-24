import {
  Phone,
  Smile,
  Ambulance,
  User,
  Laptop,
  Hand,
  Users,
  ShieldCheck,
  MapPin,
  BellRing,
} from 'lucide-react'

import bellLogo from '../assets/logo/bell.png'
import noteLogo from '../assets/logo/note.png'
import womenSafetyLogo from '../assets/logo/women_safety.png'

export const helplines = [
  {
    number: '112',
    key: 'h112',
    title: 'Emergency Services',
    description:
      'India all-in-one emergency helpline number 112 was launched by Union Home Minister Rajnath Singh in 16 states and Union Territories. The 112 emergency helpline number would provide immediate assistance for any kind of emergency services for citizens like police help, hospital emergency, fire case women safety issue and child protection. Any citizen in distress situation can dial 112 and immediate help will reach to him or her within minutes.',
    badge: '24 x 7',
    badgeType: 'pink',
    cardTheme: 'pink',
    logo: bellLogo,
    callLink: 'tel:112',
  },
  {
    number: '181',
    key: 'h181',
    title: 'Women Helpline for Domestic Violence',
    description:
      '181 is a National Helpline in India that serves as a dedicated support system for women facing adversity. With a focus on issues like domestic violence and harassment, it offers a safe space for women to seek help. Beyond immediate aid, Helpline 181 provides counselling, legal assistance, and rescue services, contributing significantly to women safety and well-being across the country.',
    badge: '24 x 7',
    badgeType: 'blue',
    cardTheme: 'blue',
    logo: noteLogo,
    callLink: 'tel:181',
  },
  {
    number: '1090',
    key: 'h1090',
    title: 'Women Power Line (Uttar Pradesh, India)',
    description:
      'Women Power Line 1090 in Uttar Pradesh is a proactive initiative combating crimes against women. This helpline offers a rapid response to reports of harassment, stalking, and abuse, reinforcing women safety. By empowering women to speak out and seek assistance, Women Power Line 1090 plays a crucial role in building a secure and supportive community for women in the region.',
    badge: '24 x 7',
    badgeType: 'pink',
    cardTheme: 'pink',
    logo: womenSafetyLogo,
    callLink: 'tel:1090',
  },
]

export const otherHelplines = [
  {
    number: '1098',
    key: 'h1098',
    title: 'Child Helpline',
    description: 'For children in need of care and protection',
    badge: '24 x 7',
    icon: Smile,
    callLink: 'tel:1098',
  },
  {
    number: '108',
    key: 'h108',
    title: 'Ambulance Service',
    description: 'For medical emergency assistance',
    badge: '24 x 7',
    icon: Ambulance,
    callLink: 'tel:108',
  },
  {
    number: '14567',
    key: 'h14567',
    title: 'Senior Citizen Helpline',
    description: 'Support for senior citizens in distress',
    badge: '24 x 7',
    icon: User,
    callLink: 'tel:14567',
  },
  {
    number: '1930',
    key: 'h1930',
    title: 'Cyber Crime Helpline',
    description: 'Report online fraud and cyber crime',
    badge: '24 x 7',
    icon: Laptop,
    callLink: 'tel:1930',
  },
  {
    number: '1091',
    key: 'h1091',
    title: 'Women Safety Helpline (UP)',
    description: 'For immediate assistance and security',
    badge: '24 x 7',
    icon: Hand,
    callLink: 'tel:1091',
  },
]

export const safetyTipsIcons = [
  Phone,
  Users,
  ShieldCheck,
  MapPin,
  BellRing,
]

export const defaultSafetyTips = [
  'Save important helpline numbers in your phone',
  'Share your live location with trusted family or friends',
  'Use the Pink Shakti app for additional safety features',
  'Stay aware of your surroundings while travelling',
  'Report any suspicious activity immediately',
]
