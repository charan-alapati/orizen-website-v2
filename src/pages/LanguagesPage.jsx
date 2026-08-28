import React from 'react';
import { LanguageAcademy } from '../components/LanguageAcademy';
import { FAQSection } from '../components/FAQSection';
import { GraduationCap, Award, BookOpen, Clock, Users, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, MessageCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export const LanguagesPage = ({ onOpenConsultation }) => {
  return (
    <div className="space-y-0 pt-20">
      
      {/* 1. Language Academy Header Hero */}
      <section className="py-16 sm:py-20 bg-brand-navy text-white relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-brand-orange/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-xs font-bold uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Certified Foreign Language Institute</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Master German, French, Italian & IELTS with Native Fluency
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              From absolute beginner (A1) to professional fluency (C2). Official Goethe-Institut, TestDaF, and DELF mock exam simulations with personalized speaking evaluations in Vijayawada.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="btn-shimmer px-6 py-3.5 rounded-2xl bg-gradient-to-r from-brand-orange to-amber-500 text-white font-bold text-xs sm:text-sm shadow-glow-orange flex items-center gap-2"
              >
                <span>Enroll in Upcoming Batch</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/919502264933?text=Hi%20OriZen,%20I%20want%20to%20know%20more%20about%20your%20language%20batches."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm border border-white/20 flex items-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Language Academy Curriculum & Levels */}
      <LanguageAcademy onOpenConsultation={onOpenConsultation} />

      {/* 3. Teaching Methodology & Quality Pillars */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-navy">
              Why Students Excel at OriZen Academy
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Our 4-Pillar Pedagogical System designed for rapid fluency and guaranteed Goethe exam clearance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="font-extrabold text-brand-navy text-base">Small Interactive Cohorts</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Max 8–12 students per batch to ensure every student gets daily 1-on-1 speaking time with the instructor.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="font-extrabold text-brand-navy text-base">Official Mock Simulations</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Weekly Goethe-Institut, TestDaF, and DELF mock examinations with detailed feedback on writing and oral modules.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="font-extrabold text-brand-navy text-base">Native Audio & Pronunciation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Intensive listening drills using native European speech patterns, accents, and everyday practical vocabulary.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center font-bold">
                04
              </div>
              <h3 className="font-extrabold text-brand-navy text-base">Comprehensive Study Material</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Original Netzwerk & Aspekte neu course books, digital flashcards, vocabulary packs, and recorded lecture access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Language FAQs */}
      <FAQSection />

      {/* 5. Next Steps Banner */}
      <section className="py-12 bg-[#0a0f1d] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Ready to Enroll in the Next Language Batch?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Classes available both in-person at our Seetharampuram center in Vijayawada and via live interactive Zoom cohorts.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenConsultation}
              className="btn-shimmer px-8 py-3.5 rounded-2xl bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-xs sm:text-sm shadow-glow-orange inline-flex items-center gap-2"
            >
              <span>Book Batch Counseling</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
