import React from 'react';
import { Hero } from '../components/Hero';
import { QuickEligibility } from '../components/QuickEligibility';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Testimonials } from '../components/Testimonials';
import { FAQSection } from '../components/FAQSection';
import { Link } from 'react-router-dom';
import { GraduationCap, Globe2, Briefcase, Calculator, ArrowRight, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';

export const HomePage = ({ onOpenConsultation }) => {
  return (
    <div className="space-y-0">
      
      {/* 1. Hero Section */}
      <Hero
        onOpenConsultation={onOpenConsultation}
        onNavigate={() => {}}
      />

      {/* 2. Three Pillar Quick-Access Cards */}
      <section className="py-12 bg-[#070c18] border-y border-white/10 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Language Academy */}
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-orange/40 transition-all hover:-translate-y-1 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-orange/20 border border-brand-orange/30 flex items-center justify-center text-brand-orange mb-4">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-white mb-2">
                  German & Foreign Languages
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  CEFR standardized German (A1-C2), French, Italian, and IELTS coaching with native certified mentors and Goethe mock exams.
                </p>
              </div>
              <Link
                to="/languages"
                className="inline-flex items-center gap-2 text-xs font-bold text-brand-orange group-hover:text-amber-400 transition-colors"
              >
                <span>Explore Language Hub</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 2: 0€ Tuition in Germany */}
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-400/40 transition-all hover:-translate-y-1 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
                  <Globe2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-white mb-2">
                  Study in Germany (0€ Tuition)
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  Admissions to top TU9 public universities (TUM, RWTH Aachen, TU Berlin) with APS verification and 18-month stay-back visa.
                </p>
              </div>
              <Link
                to="/study-abroad"
                className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 group-hover:text-blue-300 transition-colors"
              >
                <span>Discover Public Unis</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 3: Healthcare & Careers */}
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-400/40 transition-all hover:-translate-y-1 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-white mb-2">
                  Nursing & Tech Careers in Germany
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  Indian nurses earn €3,200 - €4,200/mo in German hospitals with free language coaching and Anerkennung license approval.
                </p>
              </div>
              <Link
                to="/jobs-abroad"
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors"
              >
                <span>Nursing & Jobs Guide</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Interactive Quick Eligibility Finder Wizard */}
      <QuickEligibility onOpenConsultation={onOpenConsultation} />

      {/* 4. Why Choose OriZen & Comparison */}
      <WhyChooseUs onOpenConsultation={onOpenConsultation} />

      {/* 5. Real Student Testimonials & Partner Marquee */}
      <Testimonials />

      {/* 6. Searchable FAQ Section */}
      <FAQSection />

      {/* 7. Bottom High-Impact Consultation Banner */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-brand-navy via-[#0d162b] to-brand-navy text-white border-t border-white/10 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Start Your European Journey Today</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            Ready to Study or Work in Germany & Europe?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Get your profile evaluated for 100% Tuition-Free German Universities, CEFR Language Batches, or German Nursing Jobs. Book your free 1-on-1 session with our senior counselor.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="btn-shimmer w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-orange to-amber-500 hover:from-brand-orange-dark hover:to-brand-orange text-white font-extrabold text-sm shadow-glow-orange flex items-center justify-center gap-2"
            >
              <span>Book Free 1-on-1 Counseling</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              to="/contact"
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/20 transition-colors text-center"
            >
              Visit Vijayawada Center
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
