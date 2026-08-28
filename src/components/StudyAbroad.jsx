import React, { useState } from 'react';
import { countriesData } from '../data/countriesData';
import { CountryDetailModal } from './CountryDetailModal';
import { Globe2, ArrowRight, ShieldCheck, Award, FileText, Landmark, Plane, UserCheck } from 'lucide-react';

export const StudyAbroad = ({ onOpenConsultation }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const roadmapSteps = [
    {
      num: '01',
      title: 'Free 360° Profile Evaluation',
      desc: 'Our senior European education counselors analyze your academic transcripts, CGPA, backlogs (if any), and budget.',
      icon: UserCheck
    },
    {
      num: '02',
      title: 'University & Course Shortlisting',
      desc: 'Selection of 5-8 tailored European public & top-ranked universities maximizing your admission chances.',
      icon: Landmark
    },
    {
      num: '03',
      title: 'APS & Document Curation',
      desc: 'Assistance with German APS verification, notarization, professional SOP & CV drafting, and LOR formatting.',
      icon: FileText
    },
    {
      num: '04',
      title: 'Application & Admission Offer',
      desc: 'Submission through official portals (Uni-Assist / Direct University Portals) and securing your official Zulassungsbescheid.',
      icon: Award
    },
    {
      num: '05',
      title: 'Blocked Account & Health Insurance',
      desc: 'Opening German Sperrkonto (Expatrio/Coracle/Fintiba) and mandatory statutory European health insurance.',
      icon: ShieldCheck
    },
    {
      num: '06',
      title: 'VFS Visa Filing & Pre-Departure',
      desc: 'Embassy interview mock sessions, accommodation search assistance, Forex card, and airport pickup orientation.',
      icon: Plane
    }
  ];

  return (
    <section id="study-abroad" className="py-20 sm:py-24 bg-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/5 border border-brand-blue/10 text-brand-blue-bright text-xs font-bold uppercase tracking-wider mb-3">
            <Globe2 className="w-4 h-4 text-brand-blue-bright" />
            <span>Study in Europe Consultancy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight">
            Explore Study Abroad Destinations
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            Navigate your international education with 100% transparent guidance, zero-tuition German public universities, and guaranteed visa support.
          </p>
        </div>

        {/* Country Cards Grid with Equal Heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {countriesData.map((country) => (
            <div
              key={country.id}
              onClick={() => setSelectedCountry(country)}
              className="group bg-slate-50 hover:bg-white rounded-3xl border border-slate-200/90 hover:border-brand-orange/50 p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between h-full transform hover:-translate-y-1 relative"
            >
              <div>
                {/* Flag + Code Top Row */}
                <div className="flex items-start justify-between gap-2 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl sm:text-4xl shrink-0">{country.flag}</span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-brand-navy group-hover:text-brand-orange transition-colors leading-tight">
                        {country.name}
                      </h3>
                      <span className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider block mt-0.5">
                        {country.code} • Schengen Area
                      </span>
                    </div>
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold border shrink-0 ${country.badgeColor}`}>
                    {country.popularRank}
                  </span>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 font-medium">
                  {country.tagline}
                </p>

                {/* Quick Snapshot Metrics */}
                <div className="space-y-2 pt-3.5 border-t border-slate-200/80 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-semibold">Tuition Fee:</span>
                    <span className="font-bold text-brand-navy">{country.tuitionFee}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-semibold">Post-Study Visa:</span>
                    <span className="font-bold text-emerald-600">{country.postStudyVisa}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-semibold">Living Cost:</span>
                    <span className="font-bold text-slate-700">{country.livingCost}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="mt-5 pt-3.5 border-t border-slate-200/60 flex items-center justify-between">
                <span className="text-xs font-bold text-brand-orange group-hover:underline flex items-center gap-1.5">
                  <span>View Requirements & Universities</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="w-7 h-7 rounded-full bg-white group-hover:bg-brand-orange group-hover:text-white border border-slate-200 flex items-center justify-center text-xs font-bold transition-colors">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 6-Step Admission & Visa Roadmap */}
        <div className="bg-gradient-to-br from-brand-navy via-slate-900 to-brand-navy rounded-3xl p-6 sm:p-10 lg:p-12 text-white shadow-2xl relative overflow-hidden">
          
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="px-3.5 py-1.5 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-xs font-bold uppercase tracking-wider inline-block mb-3">
              Guaranteed Process
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black">
              Your 6-Step European Admission & Visa Roadmap
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-2">
              From your initial profile check in Vijayawada to landing at your university in Munich, Vienna, or Zurich.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 relative z-10">
            {roadmapSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-5 sm:p-6 transition-all h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl font-black text-brand-orange">{step.num}</span>
                      <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-amber-300">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white mb-1.5">{step.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Roadmap Bottom CTA */}
          <div className="mt-10 sm:mt-12 text-center pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={onOpenConsultation}
              className="btn-shimmer w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-orange to-amber-500 text-white font-bold text-xs sm:text-sm shadow-glow-orange flex items-center justify-center gap-2"
            >
              <span>Schedule Free Profile Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="https://wa.me/919502264933?text=Hi%20OriZen,%20I%20want%20to%20know%20my%20eligibility%20for%20European%20Universities."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-xs sm:text-sm transition-colors text-center"
            >
              Ask Our Experts on WhatsApp
            </a>
          </div>

        </div>

      </div>

      {/* Country Detail Modal */}
      {selectedCountry && (
        <CountryDetailModal
          country={selectedCountry}
          onClose={() => setSelectedCountry(null)}
          onOpenConsultation={onOpenConsultation}
        />
      )}
    </section>
  );
};

