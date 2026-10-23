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
import WomenSchemsDetails from '../pages/pinkInfo/WomenSchemsDetails'
import WomenLaws from '../pages/pinkInfo/WomenLaws'
import WomenRights from '../pages/pinkInfo/WomenRights'
import PoshAct from '../pages/pinkInfo/PoshAct'

import BnsSection from '../pages/pinkInfo/BnsSection'
import EqualPay from '../pages/pinkInfo/EqualPay'
import DeleteMorphedPhotos from '../pages/pinkInfo/DeleteMorphedPhotos'
import StateWomenCommission from '../pages/features/StateWomenCommission'
import Blogs from '../pages/blogs/Blogs'
import OurVision from '../pages/our-vision/OurVision'
import MentalHealth from '../pages/pinkHealth/MentalHealth'
import MenstrualHealth from '../pages/pinkHealth/MenstrualHealth'
import CervicalCancer from '../pages/pinkHealth/CervicalCancer'


function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* highlights */}
        <Route path="/highlights" element={<Feature />} />
        <Route path="/highlights/pink-info" element={<PinkInfo />} />
        <Route path="/highlights/anonymous-crime-reporting" element={<AnonymousCrimeReporting />} />
        <Route path="/highlights/emergency-helplines" element={<EmergencyHelplines />} />
        <Route path="/highlights/one-stop-centers" element={<OneStopCenter />} />
        <Route path="/highlights/city-scan" element={<CityScan />} />
        <Route path="/highlights/women-safety" element={<WomenSafety />} />
        <Route path="/highlights/e-fir" element={<EFIR />} />
        <Route path="/highlights/pink-health" element={<PinkHealth />} />
        <Route path="/highlights/pink-health/mental-health" element={<MentalHealth />} />
        <Route path="/highlights/pink-health/menstrual-health" element={<MenstrualHealth />} />
        <Route path="/highlights/pink-health/cervical-cancer" element={<CervicalCancer />} />
        <Route path="/highlights/state-women-commission" element={<StateWomenCommission />} />

        {/* pinkinfo */}
        <Route path="/highlights/pink-info/women-schemes" element={<WomenSchemes />} />
        <Route path="/highlights/pink-info/women-schemes/:id" element={<WomenSchemsDetails />} />
        <Route path="/highlights/pink-info/women-laws" element={<WomenLaws />} />
        <Route path="/highlights/pink-info/women-laws/bns-section79" element={<BnsSection />} />
        <Route path="/highlights/pink-info/women-rights" element={<WomenRights />} />
        <Route path="/highlights/pink-info/women-rights/delete-morphed-photos" element={<DeleteMorphedPhotos />} />
        <Route path="/highlights/pink-info/women-rights/:id" element={<EqualPay />} />
        <Route path="/highlights/pink-info/posh-act2013" element={<PoshAct />} />



        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/our-vision" element={<OurVision />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/our-feedback" element={<Feedback />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
