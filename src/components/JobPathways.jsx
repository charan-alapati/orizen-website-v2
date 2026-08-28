import React, { useState } from 'react';
import { jobsData } from '../data/jobsData';
import { Briefcase, HeartPulse, Code2, Zap, Utensils, CheckCircle2, ArrowRight, ShieldCheck, FileCheck, Award, Users } from 'lucide-react';

export const JobPathways = ({ onOpenConsultation }) => {
  const [activeSectorId, setActiveSectorId] = useState('healthcare');

  const iconMap = {
    HeartPulse: HeartPulse,
    Code2: Code2,
    Zap: Zap,
    Utensils: Utensils
  };

  const activeSector = jobsData.sectors.find(s => s.id === activeSectorId) || jobsData.sectors[0];
  const ActiveIcon = iconMap[activeSector.icon] || Briefcase;

  return (
    <section id="jobs" className="py-20 sm:py-24 bg-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Briefcase className="w-4 h-4 text-emerald-600" />
            <span>Direct European Career Pathways</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight">
            Job Opportunities & Anerkennung
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            Transition your professional degree into a high-paying European career with official German recognition (Anerkennung), hospital employer sponsorship, and EU Blue Card fast-tracks.
          </p>

          {/* Sector Selector Tabs */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
            {jobsData.sectors.map((sec) => {
              const Icon = iconMap[sec.icon] || Briefcase;
              const isSelected = activeSectorId === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => setActiveSectorId(sec.id)}
                  className={`p-3.5 sm:p-4 rounded-2xl border text-left transition-all flex flex-col justify-between h-full ${
                    isSelected
                      ? 'bg-brand-navy text-white border-brand-navy shadow-lg'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-brand-orange/40 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isSelected ? 'bg-brand-orange text-white' : 'bg-slate-200 text-slate-700'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    {isSelected && <span className="text-[10px] font-bold text-brand-orange">ACTIVE</span>}
                  </div>
                  <div>
                    <div className="font-extrabold text-xs sm:text-sm">{sec.title}</div>
                    <div className={`text-[11px] mt-0.5 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>{sec.country}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Sector Deep-Dive Card */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200 p-5 sm:p-8 lg:p-10 shadow-xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* Left Info Column */}
            <div className="lg:col-span-8 space-y-5 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-3">
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                    {activeSector.tag}
                  </span>
                  <span className="text-xs font-bold text-slate-500">
                    Target Countries: <strong>{activeSector.country}</strong>
                  </span>
                </div>

                <h3 className="text-xl sm:text-3xl font-black text-brand-navy flex items-center gap-3">
                  <ActiveIcon className="w-6 h-6 sm:w-7 sm:h-7 text-brand-orange" />
                  <span>{activeSector.title}</span>
                </h3>

                {/* Salary & Demand Banner */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4">
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200 flex flex-col justify-center">
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase">Average Salary Package</span>
                    <div className="text-base sm:text-lg font-black text-emerald-600 mt-0.5">{activeSector.salaryRange}</div>
                  </div>
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200 flex flex-col justify-center">
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase">Current Market Demand</span>
                    <div className="text-xs sm:text-sm font-bold text-brand-navy mt-0.5">{activeSector.demandLevel}</div>
                  </div>
                </div>

                {/* Eligibility Criteria */}
                <div className="mt-5">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    Mandatory Candidate Requirements:
                  </span>
                  <div className="space-y-2">
                    {activeSector.requirements.map((req, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="mt-4">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    European Employer Perks & PR Pathway:
                  </span>
                  <div className="space-y-2">
                    {activeSector.benefits.map((ben, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{ben}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Summary / Action Box */}
            <div className="lg:col-span-4 bg-white p-5 sm:p-7 rounded-3xl border border-slate-200 shadow-md space-y-5 flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-3">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="font-extrabold text-base sm:text-lg text-brand-navy">
                  OriZen Placement Support
                </h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  We handle your sworn document translations, state authority licensure applications, employer video interviews, and work visa stamping.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
                <div className="flex items-center gap-2 font-bold text-brand-navy">
                  <FileCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Anerkennung Recognition Included</span>
                </div>
                <div className="flex items-center gap-2 font-bold text-brand-navy">
                  <Users className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Direct Hospital / Corporate Interviews</span>
                </div>
                <div className="flex items-center gap-2 font-bold text-brand-navy">
                  <Award className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>German Language Training up to B2</span>
                </div>
              </div>

              <button
                onClick={onOpenConsultation}
                className="btn-shimmer w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-orange to-amber-500 text-white font-bold text-xs sm:text-sm shadow-glow-orange flex items-center justify-center gap-2"
              >
                <span>Submit CV for Free Evaluation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        {/* Anerkennung (Recognition) Process Section */}
        <div className="bg-brand-navy text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
            <span className="px-3 py-1 rounded-full bg-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider inline-block mb-3">
              Official German Licensure
            </span>
            <h3 className="text-2xl sm:text-3xl font-black">
              Understanding the German Anerkennung Process
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-2">
              How Indian medical, nursing, and engineering degrees are legally validated for practice in Germany.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {jobsData.anerkennungSteps.map((st) => (
              <div key={st.step} className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 relative h-full flex flex-col justify-between">
                <div>
                  <div className="text-3xl font-black text-brand-orange mb-2.5">{st.step}</div>
                  <h4 className="font-bold text-sm sm:text-base text-white mb-2">{st.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

