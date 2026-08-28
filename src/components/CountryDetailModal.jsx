import React from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, GraduationCap, Building2, BookOpen } from 'lucide-react';

export const CountryDetailModal = ({ country, onClose, onOpenConsultation }) => {
  if (!country) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-fadeIn" onClick={onClose}>
      <div
        className="relative bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 bg-brand-navy text-white px-5 sm:px-8 py-5 rounded-t-3xl flex items-center justify-between border-b border-white/10 shadow-md">
          <div className="flex items-center gap-3">
            <span className="text-3xl shrink-0">{country.flag}</span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-black">{country.name}</h3>
                <span className="px-2 py-0.5 rounded-full bg-brand-orange text-white text-[10px] sm:text-[11px] font-bold">
                  {country.code}
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">{country.tagline}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8 space-y-6 sm:space-y-8">
          
          {/* Key Facts Matrix with Equal Heights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center flex flex-col justify-center">
              <span className="text-[10px] sm:text-[11px] text-slate-400 font-bold uppercase block">Tuition Fee</span>
              <span className="text-xs sm:text-sm font-black text-brand-navy mt-1 block">{country.tuitionFee}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center flex flex-col justify-center">
              <span className="text-[10px] sm:text-[11px] text-slate-400 font-bold uppercase block">Living Expenses</span>
              <span className="text-xs sm:text-sm font-black text-brand-orange mt-1 block">{country.livingCost}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center flex flex-col justify-center">
              <span className="text-[10px] sm:text-[11px] text-slate-400 font-bold uppercase block">Post-Study Visa</span>
              <span className="text-xs sm:text-sm font-black text-emerald-600 mt-1 block">{country.postStudyVisa}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center flex flex-col justify-center">
              <span className="text-[10px] sm:text-[11px] text-slate-400 font-bold uppercase block">Intakes</span>
              <span className="text-xs sm:text-sm font-black text-blue-600 mt-1 block">{country.intakes}</span>
            </div>
          </div>

          {/* Core Advantages */}
          <div>
            <h4 className="text-sm sm:text-base font-extrabold text-brand-navy mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-brand-orange" />
              <span>Key Advantages & Why Choose {country.name}</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {country.highlights.map((hl, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top Universities & Popular Programs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/50 border border-blue-100 flex flex-col justify-between">
              <div>
                <h5 className="font-bold text-brand-navy text-xs sm:text-sm mb-3 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-brand-blue-bright" />
                  <span>Top Ranked Universities</span>
                </h5>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {country.topUniversities.map((uni, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-bright shrink-0" />
                      <span>{uni}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/50 border border-amber-100 flex flex-col justify-between">
              <div>
                <h5 className="font-bold text-brand-navy text-xs sm:text-sm mb-3 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-brand-orange" />
                  <span>Popular Disciplines</span>
                </h5>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {country.popularCourses.map((crs, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" />
                      <span>{crs}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Step by Step Process */}
          <div>
            <h4 className="text-sm sm:text-base font-extrabold text-brand-navy mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-brand-orange" />
              <span>OriZen End-to-End Application & Visa Roadmap</span>
            </h4>
            <div className="space-y-2">
              {country.processSteps.map((step, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700">
                  <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-brand-navy text-white text-[11px] sm:text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Financial Requirement Info Box */}
          <div className="p-4 rounded-2xl bg-slate-100 border border-slate-300 text-xs text-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="font-bold text-slate-900 block">Financial Proof / Blocked Account:</span>
              <span>{country.blockedAccount}</span>
            </div>
            <div className="sm:text-right">
              <span className="font-bold text-slate-900 block">Language Requirement:</span>
              <span>{country.languageReq}</span>
            </div>
          </div>

          {/* Modal Action CTA */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3 border-t border-slate-200">
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="btn-shimmer flex-1 py-3.5 rounded-xl bg-gradient-to-r from-brand-orange to-amber-500 text-white font-bold text-xs sm:text-sm shadow-glow-orange flex items-center justify-center gap-2"
            >
              <span>Apply for {country.name} Intake Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/919502264933?text=Hi%20OriZen,%20I%20am%20interested%20in%20studying%20in%20${encodeURIComponent(country.name)}.%20Please%20guide%20me.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors text-center"
            >
              <span>WhatsApp Counselor</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

