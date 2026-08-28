import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { SmartChatbot } from './components/SmartChatbot';
import { MessageCircle } from 'lucide-react';

// Multi-Page Routes
import { HomePage } from './pages/HomePage';
import { LanguagesPage } from './pages/LanguagesPage';
import { StudyAbroadPage } from './pages/StudyAbroadPage';
import { JobsPage } from './pages/JobsPage';
import { CostCalculatorPage } from './pages/CostCalculatorPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <BrowserRouter basename="/orizen-website-v2">
      <ScrollToTop />

      <div className="min-h-screen bg-brand-slate-bg flex flex-col text-slate-800 selection:bg-brand-orange selection:text-white">
        
        {/* Sticky Frosted Header with Multi-Page Links */}
        <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* Dynamic Route Pages */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenConsultation={() => setIsConsultationOpen(true)} />} />
            <Route path="/languages" element={<LanguagesPage onOpenConsultation={() => setIsConsultationOpen(true)} />} />
            <Route path="/study-abroad" element={<StudyAbroadPage onOpenConsultation={() => setIsConsultationOpen(true)} />} />
            <Route path="/jobs-abroad" element={<JobsPage onOpenConsultation={() => setIsConsultationOpen(true)} />} />
            <Route path="/cost-calculator" element={<CostCalculatorPage onOpenConsultation={() => setIsConsultationOpen(true)} />} />
            <Route path="/about" element={<AboutPage onOpenConsultation={() => setIsConsultationOpen(true)} />} />
            <Route path="/contact" element={<ContactPage onOpenConsultation={() => setIsConsultationOpen(true)} />} />
            <Route path="*" element={<HomePage onOpenConsultation={() => setIsConsultationOpen(true)} />} />
          </Routes>
        </main>

        {/* Global Deep Footer */}
        <Footer onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* Floating Smart AI Chatbot (Bottom Right) */}
        <SmartChatbot onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* Floating Direct WhatsApp Quick Action Pill (Bottom Left) */}
        <a
          href="https://wa.me/919502264933?text=Hi%20OriZen,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 flex items-center gap-2 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-2xl transition-all transform hover:scale-105 active:scale-95"
          aria-label="Direct WhatsApp Chat with OriZen"
        >
          <MessageCircle className="w-4 h-4 fill-white shrink-0" />
          <span className="hidden sm:inline">WhatsApp Us</span>
        </a>

        {/* 1-on-1 Consultation Booking Modal */}
        <ConsultationModal
          isOpen={isConsultationOpen}
          onClose={() => setIsConsultationOpen(false)}
        />

      </div>
    </BrowserRouter>
  );
}

export default App;


