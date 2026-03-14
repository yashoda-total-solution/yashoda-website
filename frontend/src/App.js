import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import MisSelling from './pages/services/MisSelling';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/mis-selling" element={<MisSelling />} />
            <Route path="/services/claim-rejection" element={<Services />} />
            <Route path="/services/claim-delay" element={<Services />} />
            <Route path="/services/claim-short-settled" element={<Services />} />
            <Route path="/services/health-reimbursement" element={<Services />} />
            <Route path="/services/pmsby" element={<Services />} />
            <Route path="/services/pmjjby" element={<Services />} />
            <Route path="/services/state-cm-scheme" element={<Services />} />
            <Route path="/services/banking-atm-insurance" element={<Services />} />
            <Route path="/services/pf-accidental-insurance" element={<Services />} />
            <Route path="/services/legal-notice" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;