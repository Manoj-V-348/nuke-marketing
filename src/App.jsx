import {BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css'

import Home from "./pages/Home";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Projects from "./pages/Projects";
import Services from "./pages/Services";

import Header from "./components/Header";
import OurWorks from "./pages/OurWorks";
import Testimonials from "./pages/Testimonials";

function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/our-works" element={<OurWorks />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
