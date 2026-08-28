import React, { useState } from 'react';
import { coursesData } from '../data/coursesData';
import { GraduationCap, Award, BookOpen, Clock, Users, CheckCircle2, ArrowRight, Sparkles, Layers } from 'lucide-react';

export const LanguageAcademy = ({ onOpenConsultation }) => {
  const [selectedLang, setSelectedLang] = useState('german');
  const [activeLevelIdx, setActiveLevelIdx] = useState(0);

  const currentCourse = coursesData[selectedLang];
  const activeLevel = currentCourse.levels[activeLevelIdx] || currentCourse.levels[0];

  return (
    <section id="languages" className="py-20 sm:py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-10 right-0 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-brand-blue-bright/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy/5 border border-brand-navy/10 text-brand-navy text-xs font-bold uppercase tracking-wider mb-3">
            <GraduationCap className="w-4 h-4 text-brand-orange" />
            <span>Center for Foreign Languages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight">
            Foreign Language Programs
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            Master global languages with standardized CEFR curriculum, certified native instructors, small interactive cohorts, and guaranteed official exam preparation.
          </p>

          {/* Language Switcher Tabs */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center p-1.5 rounded-2xl bg-white shadow-md border border-slate-200 gap-1.5 sm:gap-2">
            {[
              { id: 'german', label: 'German', flag: '🇩🇪', code: 'DE' },
              { id: 'french', label: 'French', flag: '🇫🇷', code: 'FR' },
              { id: 'italian', label: 'Italian', flag: '🇮🇹', code: 'IT' },
              { id: 'english', label: 'English / IELTS', flag: '🇬🇧', code: 'EN' },
            ].map((lang) => (
              <button
                key={lang.id}
                onClick={() => {
                  setSelectedLang(lang.id);
                  setActiveLevelIdx(0);
                }}
                className={`flex items-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                  selectedLang === lang.id
                    ? 'bg-brand-navy text-white shadow-md'
                    : 'text-slate-600 hover:text-brand-orange hover:bg-slate-50'
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Course Overview Banner */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-8 shadow-xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div className="lg:col-span-8 flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{currentCourse.flag}</span>
                <span className="px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange font-bold text-xs">
                  {currentCourse.subtitle}
                </span>
              </div>
              <h3 className="text-xl sm:text-3xl font-extrabold text-brand-navy">
                {currentCourse.title}
              </h3>
              <p className="mt-3 text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed">
                {currentCourse.description}
              </p>

              {/* Certifications Row */}
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1">
                  Official Exam Prep:
                </span>
                {currentCourse.certifications.map((cert) => (
                  <span
                    key={cert}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold"
                  >
                    ✓ {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-3">
              <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-center flex flex-col justify-center">
                <div className="text-lg sm:text-xl font-black text-brand-navy">{currentCourse.stats.successRate}</div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 font-semibold mt-0.5">Exam Pass Rate</div>
              </div>
              <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-center flex flex-col justify-center">
                <div className="text-lg sm:text-xl font-black text-brand-orange">{currentCourse.stats.batchSize}</div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 font-semibold mt-0.5">Small Batch Size</div>
              </div>
              <div className="col-span-2 p-3 sm:p-3.5 rounded-2xl bg-brand-blue-subtle border border-blue-100 flex items-center gap-2.5">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-brand-blue-bright shrink-0" />
                <span className="text-[11px] sm:text-xs text-brand-navy font-semibold">
                  {currentCourse.stats.trainerType}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive CEFR Levels Breakdown Section */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h4 className="text-lg sm:text-2xl font-bold text-brand-navy flex items-center gap-2">
                <Layers className="w-5 h-5 text-brand-orange" />
                <span>CEFR Curriculum Roadmap ({currentCourse.code})</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Select a level below to explore syllabus, duration, hours, and learning outcomes.
              </p>
            </div>
          </div>

          {/* Dynamic Level Pills Track */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-6">
            {currentCourse.levels.map((lvl, index) => {
              const isSelected = activeLevelIdx === index;
              return (
                <button
                  key={lvl.level}
                  onClick={() => setActiveLevelIdx(index)}
                  className={`p-3.5 sm:p-4 rounded-2xl border text-left transition-all relative overflow-hidden flex flex-col justify-between ${
                    isSelected
                      ? 'bg-brand-navy text-white border-brand-navy shadow-lg'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-brand-orange/40 hover:bg-slate-50'
                  }`}
                >
                  {isSelected && (
                    <div className="absolute top-0 right-0 w-10 h-10 bg-brand-orange/20 rounded-bl-full flex items-start justify-end p-1">
                      <Sparkles className="w-3 h-3 text-brand-orange" />
                    </div>
                  )}
                  <div>
                    <span className={`text-[10px] font-black uppercase tracking-wider block ${isSelected ? 'text-brand-orange' : 'text-slate-400'}`}>
                      Level
                    </span>
                    <div className="text-base sm:text-lg font-black mt-0.5">{lvl.level}</div>
                  </div>
                  <div className={`text-xs font-medium truncate mt-1 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                    {lvl.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Level Detail Card */}
          <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-8 lg:p-10 shadow-lg animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
              
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-brand-orange text-white text-[11px] font-black">
                      LEVEL {activeLevel.level}
                    </span>
                    <h5 className="text-xl sm:text-2xl font-extrabold text-brand-navy">
                      {activeLevel.name}
                    </h5>
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed">
                    {activeLevel.description}
                  </p>

                  <div className="pt-4">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2.5">
                      Core Learning Outcomes & Capabilities:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeLevel.outcomes.map((outc, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{outc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {activeLevel.idealFor && (
                  <div className="mt-4 p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-900">
                    <strong className="font-bold">Ideal for:</strong> {activeLevel.idealFor}
                  </div>
                )}
              </div>

              {/* Right Summary Column */}
              <div className="lg:col-span-5 flex flex-col justify-between bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200/80 space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-2.5 border-b border-slate-200">
                    <span className="text-xs text-slate-500 font-semibold flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-slate-400" />
                      Course Duration
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-brand-navy">{activeLevel.duration}</span>
                  </div>

                  <div className="flex items-center justify-between pb-2.5 border-b border-slate-200">
                    <span className="text-xs text-slate-500 font-semibold flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-slate-400" />
                      Total Training Hours
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-brand-navy">{activeLevel.hours}</span>
                  </div>

                  <div className="flex items-center justify-between pb-2.5 border-b border-slate-200">
                    <span className="text-xs text-slate-500 font-semibold flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-slate-400" />
                      Batch Format
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-brand-navy">Offline & Live Batches</span>
                  </div>
                </div>

                <div className="space-y-2.5 pt-2">
                  <button
                    onClick={onOpenConsultation}
                    className="btn-shimmer w-full py-3 rounded-xl bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-xs sm:text-sm shadow-glow-orange flex items-center justify-center gap-2"
                  >
                    <span>Enroll in Upcoming Batch</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="https://wa.me/919502264933?text=Hi%20OriZen,%20I%20want%20to%20inquire%20about%20the%20German/Foreign%20Language%20Course%20fees%20and%20upcoming%20batches."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors text-center"
                  >
                    <span>Ask Batch Timings on WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* 4 Feature Highlights Grid with Equal Heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {currentCourse.features.map((feat, idx) => (
            <div key={idx} className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange font-black text-sm mb-3">
                  0{idx + 1}
                </div>
                <h5 className="font-bold text-brand-navy text-sm sm:text-base">{feat.title}</h5>
                <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};



