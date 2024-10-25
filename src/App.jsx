import React from 'react'
import {Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from "./pages/Home";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Projects from "./pages/Projects";
import OurWorks from "./pages/OurWorks";
import Testimonials from "./pages/Testimonials";
import Unlocked from "./pages/Unlocked";

import './App.css'

import Header from "./components/Header";

function App() {

  const location = useLocation();

  return (
    <>
        <Header />
        
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route index path="/" element={<Home/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/services" element={<Unlocked/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/our-works" element={<OurWorks />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/unlocked" element={<Unlocked />} />
          </Routes>
        </AnimatePresence>
    </>
  )
}

export default App
