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
import ClaimShortSettled from './pages/services/ClaimShortSettled';
import HealthReimbursement from './pages/services/HealthReimbursement';
import PMSBY from './pages/services/PMSBY';
import PMJJBY from './pages/services/PMJJBY';
import StateCMScheme from './pages/services/StateCMScheme';
import BankingAtmInsurance from './pages/services/BankingAtmInsurance';
import PFAccidentalInsurance from './pages/services/PFAccidentalInsurance';
import LegalNotice from './pages/services/LegalNotice';
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
            <Route path="/claim-short-settled" element={<ClaimShortSettled />} />
            <Route path="/health-reimbursement" element={<HealthReimbursement />} />
            <Route path="/pmsby" element={<PMSBY />} />
            <Route path="/pmjjby" element={<PMJJBY />} />
            <Route path="/state-cm-scheme" element={<StateCMScheme />} />
            <Route path="/banking-atm-insurance" element={<BankingAtmInsurance />} />
            <Route path="/pf-accidental-insurance" element={<PFAccidentalInsurance />} />
            <Route path="/legal-notice" element={<LegalNotice />} />
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