import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Menu, X, ArrowRight, Sparkles, GraduationCap, Globe2, Briefcase, Calculator, Mail, Info } from 'lucide-react';

export const Navbar = ({ onOpenConsultation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { to: '/', label: 'Home', icon: Sparkles },
    { to: '/languages', label: 'Languages', icon: GraduationCap },
    { to: '/study-abroad', label: 'Study Abroad', icon: Globe2 },
    { to: '/jobs-abroad', label: 'Jobs & PR', icon: Briefcase },
    { to: '/cost-calculator', label: 'Cost Estimator', icon: Calculator },
    { to: '/about', label: 'About', icon: Info },
    { to: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#070c18]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl py-2.5 sm:py-3'
            : 'bg-[#0a0f1d]/85 backdrop-blur-lg border-b border-white/10 shadow-lg py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Brand Logo with Official Hummingbird Mascot */}
          <Link
            to="/"
            className="flex items-center gap-2.5 sm:gap-3.5 cursor-pointer group select-none shrink-0"
          >
            <div className="relative flex items-center justify-center">
              <img
                src="/bird.png"
                alt="OriZen Logo"
                className="h-10 sm:h-12 w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="text-xl sm:text-2xl font-black tracking-tight leading-tight flex items-baseline">
                <span className="text-white">Ori</span>
                <span className="text-brand-orange">Z</span>
                <span className="text-slate-100">en</span>
              </div>
              <span className="text-[9px] sm:text-[10px] font-semibold tracking-wider text-slate-300 uppercase whitespace-nowrap hidden min-[420px]:block">
                Languages & Overseas Study
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links Pill Container */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/5 backdrop-blur-md p-1 rounded-full border border-white/10 shadow-inner">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 whitespace-nowrap ${
                      isActive
                        ? 'bg-gradient-to-r from-brand-orange to-amber-500 text-white font-bold shadow-md'
                        : 'text-slate-300 hover:text-white hover:bg-white/10'
                    }`
                  }
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </nav>

          {/* Quick Contact & Action Buttons */}
          <div className="hidden md:flex items-center gap-2.5 lg:gap-3 shrink-0">
            <a
              href="tel:+919502264933"
              className="flex items-center gap-2 text-xs font-bold px-3.5 py-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-slate-200 transition-all whitespace-nowrap shrink-0 hover:border-brand-orange/40"
            >
              <Phone className="w-3.5 h-3.5 text-brand-orange shrink-0" />
              <span>+91 95022 64933</span>
            </a>

            <button
              onClick={onOpenConsultation}
              className="btn-shimmer flex items-center gap-1.5 text-xs font-bold bg-gradient-to-r from-brand-orange to-amber-500 hover:from-brand-orange-dark hover:to-brand-orange text-white px-4 py-2 rounded-full shadow-glow-orange hover:shadow-lg transition-all transform hover:-translate-y-0.5 whitespace-nowrap shrink-0"
            >
              <span>Free Counseling</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenConsultation}
              className="hidden min-[480px]:flex sm:hidden btn-shimmer items-center gap-1 text-[11px] font-bold bg-brand-orange text-white px-3 py-1.5 rounded-full shadow-sm"
            >
              <span>Free Counseling</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md lg:hidden animate-fadeIn" onClick={() => setMobileMenuOpen(false)}>
          <div
            className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-gradient-to-b from-[#0a0f1d] to-[#070c18] text-white p-6 shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <Link to="/" className="flex items-center gap-2.5">
                  <img
                    src="/bird.png"
                    alt="OriZen Logo"
                    className="h-9 w-auto object-contain"
                  />
                  <div className="text-xl font-black">
                    <span className="text-white">Ori</span>
                    <span className="text-brand-orange">Z</span>
                    <span className="text-slate-200">en</span>
                  </div>
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-5 space-y-1.5">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className={({ isActive }) =>
                        `w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm font-semibold transition-all ${
                          isActive
                            ? 'bg-gradient-to-r from-brand-orange to-amber-500 text-white shadow-glow-orange font-bold'
                            : 'text-slate-300 hover:bg-white/5 hover:text-white'
                        }`
                      }
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span>{item.label}</span>
                    </NavLink>
                  );
                })}
              </div>
            </div>

            <div className="pt-5 border-t border-white/10 space-y-2.5">
              <a
                href="tel:+919502264933"
                className="flex items-center justify-center gap-2 w-full py-3 bg-white/10 hover:bg-white/15 text-white rounded-xl font-bold text-xs border border-white/20 transition-colors text-center"
              >
                <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                <span>Call +91 95022 64933</span>
              </a>

              <a
                href="https://wa.me/919502264933"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs shadow-md transition-colors text-center"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3.5 bg-gradient-to-r from-brand-orange to-amber-500 text-white rounded-xl font-bold text-xs shadow-glow-orange transition-transform text-center"
              >
                Book Free Consultation
              </button>

              <div className="text-center text-[10px] text-slate-400 pt-1">
                📍 Seetharampuram, Vijayawada, AP
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};



