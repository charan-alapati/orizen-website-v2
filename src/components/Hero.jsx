import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, GraduationCap, Globe2, Briefcase, Award, Star } from 'lucide-react';

export const Hero = ({ onOpenConsultation, onNavigate }) => {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-brand-navy text-white overflow-hidden">
      
      {/* Background Gradients & Tech Mesh */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-blue-bright/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-brand-orange/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Trust Pill */}
        <div className="flex justify-center lg:justify-start">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs sm:text-sm font-semibold text-amber-300 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            <span>Center for German Language & European Study Consultancy</span>
            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-white/40" />
            <span className="hidden sm:inline-block text-slate-300">Vijayawada, India</span>
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col justify-center">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
              Master Global Languages.{' '}
              <span className="text-gradient-orange block mt-1">Study & Work in Europe.</span>
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Unlock tuition-free degrees in <strong className="text-white font-semibold">Germany & Austria</strong>, master foreign languages with certified native instructors, and fast-track high-demand healthcare & tech careers.
            </p>

            {/* Quick Benefits Bullet Grid */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Goethe-Institut & TestDaF Curriculum</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>0€ Tuition at German Public Unis</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>18-Month Post-Study European Visa</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Full APS & Blocked Account Support</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 justify-center lg:justify-start">
              <button
                onClick={onOpenConsultation}
                className="btn-shimmer flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-orange to-amber-500 hover:from-brand-orange-dark hover:to-brand-orange text-white font-bold text-sm sm:text-base shadow-glow-orange hover:shadow-2xl transition-all transform hover:-translate-y-0.5 shrink-0"
              >
                <span>Book Free 1-on-1 Counseling</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center">
                <button
                  onClick={() => onNavigate('languages')}
                  className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-xs sm:text-sm transition-all"
                >
                  <GraduationCap className="w-4 h-4 text-brand-orange" />
                  <span>Languages</span>
                </button>
                
                <button
                  onClick={() => onNavigate('study-abroad')}
                  className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-xs sm:text-sm transition-all"
                >
                  <Globe2 className="w-4 h-4 text-blue-400" />
                  <span>Study Abroad</span>
                </button>
              </div>
            </div>

            {/* Micro Review Indicator */}
            <div className="mt-8 pt-5 border-t border-white/10 flex items-center gap-3 justify-center lg:justify-start">
              <div className="flex -space-x-2 shrink-0">
                {['m4', 'f3', 'm5', 'f4'].map((_, idx) => (
                  <img
                    key={idx}
                    src={`https://images.unsplash.com/photo-${
                      idx === 0 ? '1539571696357-5a69c17a67c6' :
                      idx === 1 ? '1573496359142-b8d87734a5a2' :
                      idx === 2 ? '1507003211169-0a1dd7228f2d' :
                      '1534528741775-53994a69daeb'
                    }?w=80&auto=format&fit=crop&q=80`}
                    alt="Student alumni"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-brand-navy object-cover"
                  />
                ))}
              </div>
              <div className="text-left text-xs">
                <div className="flex items-center text-amber-400 font-bold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-1 text-white font-extrabold">4.9 / 5.0</span>
                </div>
                <span className="text-slate-400 text-[11px]">500+ student visas & Goethe certifications</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Interactive Card */}
          <div className="lg:col-span-5">
            <div className="relative max-w-lg mx-auto lg:max-w-none">
              
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange to-brand-blue-bright rounded-3xl blur-xl opacity-30 animate-pulse-glow" />

              {/* Glass Card */}
              <div className="relative bg-brand-navy-card/95 border border-white/15 rounded-3xl p-5 sm:p-7 backdrop-blur-2xl shadow-2xl space-y-5">
                
                {/* Card Header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-brand-orange/20 border border-brand-orange/40 flex items-center justify-center text-brand-orange shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm sm:text-base">OriZen Pathway Guarantee</h3>
                      <p className="text-[11px] text-slate-400">German & EU Education Specialists</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] font-bold shrink-0">
                    Official Support
                  </span>
                </div>

                {/* 3 Core Fast Track Highlights */}
                <div className="space-y-2.5">
                  <div
                    onClick={() => onNavigate('languages')}
                    className="group p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center font-bold text-amber-300 text-xs shrink-0">
                        DE
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-brand-orange transition-colors">
                          German Language A1 to C2
                        </div>
                        <div className="text-[11px] text-slate-400">Goethe-Zertifikat & TestDaF Batches</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-brand-orange group-hover:translate-x-1 transition-all shrink-0" />
                  </div>

                  <div
                    onClick={() => onNavigate('study-abroad')}
                    className="group p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center font-bold text-blue-300 text-xs shrink-0">
                        0€
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                          Tuition-Free Public Universities
                        </div>
                        <div className="text-[11px] text-slate-400">Germany & Austria (TU Munich, RWTH, Vienna)</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all shrink-0" />
                  </div>

                  <div
                    onClick={() => onNavigate('jobs')}
                    className="group p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center font-bold text-emerald-300 text-xs shrink-0">
                        🏥
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                          Nursing & Tech Jobs in Germany
                        </div>
                        <div className="text-[11px] text-slate-400">Anerkennung Licensure & EU Blue Card</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all shrink-0" />
                  </div>
                </div>

                {/* Instant CTA inside card */}
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-blue-bright to-brand-blue font-bold text-xs sm:text-sm text-white hover:brightness-110 shadow-glow-blue transition-all"
                >
                  Start Your Profile Evaluation Today →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Numbers & Stat Badges with Equalized Heights */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm h-full flex flex-col justify-center items-center text-center">
            <div className="text-2xl sm:text-4xl font-black text-brand-orange">500+</div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Students Placed in Europe</div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm h-full flex flex-col justify-center items-center text-center">
            <div className="text-2xl sm:text-4xl font-black text-emerald-400">98.6%</div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Visa Approval Success</div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm h-full flex flex-col justify-center items-center text-center">
            <div className="text-2xl sm:text-4xl font-black text-blue-400">0 €</div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Tuition Fees at German Public Unis</div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm h-full flex flex-col justify-center items-center text-center">
            <div className="text-2xl sm:text-4xl font-black text-purple-400">10+</div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">European Countries Processed</div>
          </div>
        </div>

      </div>
    </section>
  );
};

