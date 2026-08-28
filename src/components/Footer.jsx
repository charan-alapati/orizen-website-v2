import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ShieldCheck, HeartPulse } from 'lucide-react';

export const Footer = ({ onOpenConsultation }) => {
  return (
    <footer className="bg-[#070c18] text-white pt-16 sm:pt-20 pb-10 sm:pb-12 border-t border-white/10 relative overflow-hidden">
      
      {/* Background Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-blue-bright/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 sm:pb-16 border-b border-white/10">
          
          {/* Col 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3 cursor-pointer group select-none">
              <img
                src="/bird.png"
                alt="OriZen Logo"
                className="h-11 w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform"
              />
              <div className="text-2xl font-black tracking-tight">
                <span className="text-white">Ori</span>
                <span className="text-brand-orange">Z</span>
                <span className="text-slate-100">en</span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Your trusted partner for certified foreign language education, tuition-free German public university admissions, and international healthcare & engineering careers.
            </p>

            <div className="pt-1 flex items-center gap-2 text-xs font-semibold text-amber-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Goethe-Institut & CEFR Aligned Training Partner</span>
            </div>
          </div>

          {/* Col 2: Language Programs (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-extrabold text-xs sm:text-sm text-white uppercase tracking-wider">
              Languages
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link to="/languages" className="hover:text-brand-orange transition-colors">
                  German A1 to C2
                </Link>
              </li>
              <li>
                <Link to="/languages" className="hover:text-brand-orange transition-colors">
                  French (DELF / TEF)
                </Link>
              </li>
              <li>
                <Link to="/languages" className="hover:text-brand-orange transition-colors">
                  Italian (CILS Prep)
                </Link>
              </li>
              <li>
                <Link to="/languages" className="hover:text-brand-orange transition-colors">
                  English / IELTS 7.5+
                </Link>
              </li>
              <li>
                <Link to="/languages" className="hover:text-brand-orange transition-colors">
                  Goethe Exam Prep
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Study Abroad & Jobs (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-extrabold text-xs sm:text-sm text-white uppercase tracking-wider">
              Study & Careers
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link to="/study-abroad" className="hover:text-brand-orange transition-colors">
                  Study in Germany (0€ Tuition)
                </Link>
              </li>
              <li>
                <Link to="/study-abroad" className="hover:text-brand-orange transition-colors">
                  Study in Austria (€726/sem)
                </Link>
              </li>
              <li>
                <Link to="/study-abroad" className="hover:text-brand-orange transition-colors">
                  Study in Switzerland & Latvia
                </Link>
              </li>
              <li>
                <Link to="/jobs-abroad" className="hover:text-brand-orange transition-colors">
                  Nursing Jobs in Germany (€3.5L/mo)
                </Link>
              </li>
              <li>
                <Link to="/cost-calculator" className="hover:text-brand-orange transition-colors">
                  Living Cost & Budget Estimator
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Center (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-extrabold text-xs sm:text-sm text-white uppercase tracking-wider">
              Vijayawada Center
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <a href="tel:+919502264933" className="flex items-center gap-2 hover:text-brand-orange transition-colors">
                <Phone className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                <span>+91 95022 64933</span>
              </a>
              <a href="mailto:info@orizen.co.in" className="flex items-center gap-2 hover:text-brand-orange transition-colors">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>info@orizen.co.in</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Door No: 33-9-22 Barister Street, Seetharampuram, Vijayawada, AP - 520002
                </span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-brand-orange hover:text-white border border-white/20 text-white font-bold text-xs transition-all text-center"
              >
                Schedule Free Counseling Session
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3 sm:gap-4 text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} OriZen - Center for Foreign Languages & Overseas Consultancy. All rights reserved.
          </p>
          <div className="flex items-center gap-3 sm:gap-4 text-xs">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>•</span>
            <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-white transition-colors">Location Map</Link>
            <span>•</span>
            <a href="https://wa.me/919502264933" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp Support</a>
          </div>
        </div>

      </div>
    </footer>
  );
};


