import React from 'react';
import { StudyAbroad } from '../components/StudyAbroad';
import { FAQSection } from '../components/FAQSection';
import { Globe2, GraduationCap, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Building2, Banknote, FileCheck2, PlaneTakeoff } from 'lucide-react';
import { Link } from 'react-router-dom';

export const StudyAbroadPage = ({ onOpenConsultation }) => {
  return (
    <div className="space-y-0 pt-20">
      
      {/* 1. Hero Header */}
      <section className="py-16 sm:py-20 bg-brand-navy text-white relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-bold uppercase tracking-wider">
              <Globe2 className="w-3.5 h-3.5" />
              <span>European Education Specialists</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Study in Germany & Europe with 0€ Tuition Fees
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              Gain world-renowned Bachelors and Masters degrees from top-ranked public universities in Germany, Austria, Switzerland, and Latvia. Full APS certificate, Uni-Assist application, Blocked Account, and student visa handling.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="btn-shimmer px-6 py-3.5 rounded-2xl bg-gradient-to-r from-brand-orange to-amber-500 text-white font-bold text-xs sm:text-sm shadow-glow-orange flex items-center gap-2"
              >
                <span>Free Profile Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                to="/cost-calculator"
                className="px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm border border-white/20 flex items-center gap-2 transition-colors"
              >
                <Banknote className="w-4 h-4 text-emerald-400" />
                <span>Estimate Living Costs</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Germany Advantages Quick Ribbon */}
      <section className="py-8 bg-[#070c18] border-b border-white/10 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-xl sm:text-2xl font-black text-brand-orange">0 €</div>
              <div className="text-[11px] text-slate-300 font-semibold mt-0.5">Tuition at 95% Public Unis</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-xl sm:text-2xl font-black text-blue-400">18 Months</div>
              <div className="text-[11px] text-slate-300 font-semibold mt-0.5">Post-Study Job Search Visa</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-xl sm:text-2xl font-black text-emerald-400">20 Hrs/Wk</div>
              <div className="text-[11px] text-slate-300 font-semibold mt-0.5">Part-Time Work Rights</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-xl sm:text-2xl font-black text-amber-300">100%</div>
              <div className="text-[11px] text-slate-300 font-semibold mt-0.5">APS & Visa Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Study Abroad Country Destinations & 6-Stage Roadmap */}
      <StudyAbroad onOpenConsultation={onOpenConsultation} />

      {/* 4. APS Certificate & Admission FAQ */}
      <FAQSection />

      {/* 5. CTA Banner */}
      <section className="py-14 bg-gradient-to-r from-brand-navy to-[#0d162b] text-white text-center border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h2 className="text-2xl sm:text-4xl font-extrabold">
            Ready to Shortlist Top European Universities?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Our experienced counselors have guided 500+ Indian students into TU Munich, RWTH Aachen, TU Berlin, University of Vienna, and more.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenConsultation}
              className="btn-shimmer px-8 py-4 rounded-2xl bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-xs sm:text-sm shadow-glow-orange inline-flex items-center gap-2"
            >
              <span>Book University Shortlisting Session</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
