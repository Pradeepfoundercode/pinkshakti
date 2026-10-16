import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/home/Home'
import About from '../pages/About/About'
import Feature from '../pages/features/Feature'
import Contact from '../pages/contact us/Contact'
import Gallery from '../pages/gallery/Gallery'
import OneStopCenter from '../pages/one stop centers/OneStopCenter'
import EmergencyHelplines from '../pages/emergency helpline/EmergencyHelplines'
import Feedback from '../pages/feedback/Feedback'
import PinkInfo from '../pages/features/PinkInfo'
import AnonymousCrimeReporting from '../pages/features/AnonymousCrimeReporting'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* features */}
        <Route path="/features" element={<Feature />} />
        <Route path="/features/pink-info" element={<PinkInfo />} />
        <Route path="/pink-info" element={<PinkInfo />} />
        <Route path="/features/anonymous-crime-reporting" element={<AnonymousCrimeReporting />} />
        <Route path="/anonymous-crime-reporting" element={<AnonymousCrimeReporting />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/one-stop-centers" element={<OneStopCenter />} />
        <Route path="/emergency-helplines" element={<EmergencyHelplines />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/our-feedback" element={<Feedback />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
