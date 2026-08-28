import React from 'react';
import { JobPathways } from '../components/JobPathways';
import { FAQSection } from '../components/FAQSection';
import { Briefcase, HeartPulse, ShieldCheck, CheckCircle2, ArrowRight, Banknote, Building, FileCheck2, Sparkles, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const JobsPage = ({ onOpenConsultation }) => {
  return (
    <div className="space-y-0 pt-20">
      
      {/* 1. Hero Header */}
      <section className="py-16 sm:py-20 bg-brand-navy text-white relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <HeartPulse className="w-3.5 h-3.5 text-emerald-400" />
              <span>Healthcare & Skilled Career Mobility</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Nursing & Tech Careers in Germany
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              Fast-track your nursing or tech career to Germany. High starting salaries from <strong className="text-white">€3,200 to €4,200/month (~₹3.5 Lakhs/month)</strong>, German hospital placement, sponsored language coaching, and official German Anerkennung licensure support.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="btn-shimmer px-6 py-3.5 rounded-2xl bg-gradient-to-r from-brand-orange to-amber-500 text-white font-bold text-xs sm:text-sm shadow-glow-orange flex items-center gap-2"
              >
                <span>Check Nursing/Job Eligibility</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/919502264933?text=Hi%20OriZen,%20I%20am%20a%20Nurse/Professional%20interested%20in%20working%20in%20Germany."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md flex items-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat with Healthcare Advisor</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Highlights Ribbon */}
      <section className="py-8 bg-[#070c18] border-b border-white/10 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-xl sm:text-2xl font-black text-emerald-400">€3,200 - €4,200</div>
              <div className="text-[11px] text-slate-300 font-semibold mt-0.5">Starting Monthly Salary</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-xl sm:text-2xl font-black text-brand-orange">B1 / B2</div>
              <div className="text-[11px] text-slate-300 font-semibold mt-0.5">Required German Level</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-xl sm:text-2xl font-black text-blue-400">100% Free</div>
              <div className="text-[11px] text-slate-300 font-semibold mt-0.5">Hospital Sponsorships Available</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-xl sm:text-2xl font-black text-amber-300">Permanent PR</div>
              <div className="text-[11px] text-slate-300 font-semibold mt-0.5">Fast-Track German Citizenship</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Job Pathways & Anerkennung Deep Dive */}
      <JobPathways onOpenConsultation={onOpenConsultation} />

      {/* 4. FAQ Section */}
      <FAQSection />

      {/* 5. CTA Banner */}
      <section className="py-14 bg-gradient-to-r from-[#070c18] to-brand-navy text-white text-center border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h2 className="text-2xl sm:text-4xl font-extrabold">
            Are You a Qualified Nurse or IT Professional?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Submit your resume for an instant eligibility evaluation. We coordinate document translations, hospital interviews, and official nursing board approvals.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenConsultation}
              className="btn-shimmer px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-orange to-amber-500 text-white font-bold text-xs sm:text-sm shadow-glow-orange inline-flex items-center gap-2"
            >
              <span>Submit Profile for Evaluation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
