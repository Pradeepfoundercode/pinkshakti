import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/home/Home'
import About from '../pages/About/About'
import Feature from '../pages/features/Feature'
import Contact from '../pages/contact us/Contact'
import Gallery from '../pages/gallery/Gallery'
import OneStopCenter from '../pages/features/OneStopCenter'
import EmergencyHelplines from '../pages/features/EmergencyHelplines'
import Feedback from '../pages/feedback/Feedback'
import PinkInfo from '../pages/features/PinkInfo'
import AnonymousCrimeReporting from '../pages/features/AnonymousCrimeReporting'
import CityScan from '../pages/features/CityScan'
import WomenSafety from '../pages/features/WomenSafety'
import EFIR from '../pages/features/EFIR'
import PinkHealth from '../pages/features/PinkHealth'
import WomenSchemes from '../pages/pinkInfo/WomenSchemes'
import WomenLaws from '../pages/pinkInfo/WomenLaws'
import WomenRights from '../pages/pinkInfo/WomenRights'
import PoshAct from '../pages/pinkInfo/PoshAct'
import MentalHealth from '../pages/features/MentalHealth'
import BnsSection from '../pages/pinkInfo/BnsSection'
import EqualPay from '../pages/pinkInfo/EqualPay'
import StateWomenCommission from '../pages/features/StateWomenCommission'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* features */}
        <Route path="/features" element={<Feature />} />
        <Route path="/features/pink-info" element={<PinkInfo />} />
        <Route path="/features/anonymous-crime-reporting" element={<AnonymousCrimeReporting />} />
        <Route path="/features/emergency-helplines" element={<EmergencyHelplines />} />
        <Route path="/features/one-stop-centers" element={<OneStopCenter />} />
        <Route path="/features/city-scan" element={<CityScan />} />
        <Route path="/features/women-safety" element={<WomenSafety />} />
        <Route path="/features/e-fir" element={<EFIR />} />
        <Route path="/features/pink-health" element={<PinkHealth />} />
        <Route path="/features/pink-health/mental-health" element={<MentalHealth />} />
        <Route path="/features/state-women-commission" element={<StateWomenCommission />} />

        {/* pinkinfo */}
        <Route path="/features/pink-info/women-schemes" element={<WomenSchemes />} />
        <Route path="/features/pink-info/women-laws" element={<WomenLaws />} />
        <Route path="/features/pink-info/women-laws/bns-section79" element={<BnsSection />} />
        <Route path="/features/pink-info/women-rights" element={<WomenRights />} />
        <Route path="/features/pink-info/women-rights/equal-pay" element={<EqualPay />} />
        <Route path="/features/pink-info/posh-act2013" element={<PoshAct />} />



        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/our-feedback" element={<Feedback />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
