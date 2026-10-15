import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import About from '../pages/About'
import Feature from '../pages/Feature'
import Contact from '../pages/Contact'
import Gallery from '../pages/Gallery'
import OneStopCenter from '../pages/OneStopCenter'
import EmergencyHelplines from '../pages/EmergencyHelplines'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Feature />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/one-stop-centers" element={<OneStopCenter />} />
        <Route path="/emergency-helplines" element={<EmergencyHelplines />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
