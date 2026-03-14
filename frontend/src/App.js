import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import MisSelling from './pages/services/MisSelling';
import ClaimRejection from './pages/services/ClaimRejection';
import ClaimDelay from './pages/services/ClaimDelay';
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
            <Route path="/mis-selling" element={<MisSelling />} />
            <Route path="/claim-rejection" element={<ClaimRejection />} />
            <Route path="/claim-delay" element={<ClaimDelay />} />
            <Route path="/claim-short-settled" element={<Home />} />
            <Route path="/health-reimbursement" element={<Home />} />
            <Route path="/pmsby" element={<Home />} />
            <Route path="/pmjjby" element={<Home />} />
            <Route path="/state-cm-scheme" element={<Home />} />
            <Route path="/banking-atm-insurance" element={<Home />} />
            <Route path="/pf-accidental-insurance" element={<Home />} />
            <Route path="/legal-notice" element={<Home />} />
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