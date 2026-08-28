import React from 'react';
import { CostCalculator } from '../components/CostCalculator';
import { FAQSection } from '../components/FAQSection';
import { Calculator, Banknote, ShieldCheck, CheckCircle2, ArrowRight, HelpCircle, PiggyBank, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CostCalculatorPage = ({ onOpenConsultation }) => {
  return (
    <div className="space-y-0 pt-20">
      
      {/* 1. Hero Header */}
      <section className="py-16 sm:py-20 bg-brand-navy text-white relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Calculator className="w-3.5 h-3.5" />
              <span>Financial Planning & Budget Simulator</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              European Living Cost & Blocked Account Calculator
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              Calculate your exact monthly budget for studying in Germany, Austria, Switzerland, or Latvia. Estimate living costs, health insurance, rent, and offset your expenses with legal 20 hrs/week part-time work.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="btn-shimmer px-6 py-3.5 rounded-2xl bg-gradient-to-r from-brand-orange to-amber-500 text-white font-bold text-xs sm:text-sm shadow-glow-orange flex items-center gap-2"
              >
                <span>Free Financial Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                to="/study-abroad"
                className="px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm border border-white/20 flex items-center gap-2 transition-colors"
              >
                <Banknote className="w-4 h-4 text-emerald-400" />
                <span>Explore 0€ Tuition Unis</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Facts Banner */}
      <section className="py-8 bg-[#070c18] border-b border-white/10 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-xl sm:text-2xl font-black text-brand-orange">€11,208</div>
              <div className="text-[11px] text-slate-300 font-semibold mt-0.5">German Blocked Account (1 Year)</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-xl sm:text-2xl font-black text-emerald-400">€934 / mo</div>
              <div className="text-[11px] text-slate-300 font-semibold mt-0.5">Monthly Living Allowance Released</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-xl sm:text-2xl font-black text-blue-400">€13.50+ / hr</div>
              <div className="text-[11px] text-slate-300 font-semibold mt-0.5">German Minimum Wage for Students</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-xl sm:text-2xl font-black text-amber-300">~₹40-60L</div>
              <div className="text-[11px] text-slate-300 font-semibold mt-0.5">Saved vs UK/USA Degree Costs</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Living Cost Calculator */}
      <CostCalculator onOpenConsultation={onOpenConsultation} />

      {/* 4. Financial FAQs */}
      <FAQSection />

      {/* 5. CTA Banner */}
      <section className="py-14 bg-brand-navy text-white text-center border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h2 className="text-2xl sm:text-4xl font-extrabold">
            Need Guidance on Blocked Account & Education Loans?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            OriZen assists with official German blocked account partners (Expatrio, Fintiba, Coracle) and collateral-free education loans through top Indian banks.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenConsultation}
              className="btn-shimmer px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-orange to-amber-500 text-white font-bold text-xs sm:text-sm shadow-glow-orange inline-flex items-center gap-2"
            >
              <span>Speak with a Financial Mentor</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
