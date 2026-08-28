import React from 'react';
import { ShieldCheck, CheckCircle2, XCircle, Award, Users, BookOpen, Sparkles } from 'lucide-react';

export const WhyChooseUs = ({ onOpenConsultation }) => {
  const comparisonItems = [
    {
      feature: 'Foreign Language Training',
      orizen: 'Goethe & CEFR Aligned with C1/C2 Trainers & Mock Tests',
      others: 'Generic informal classes with non-certified trainers'
    },
    {
      feature: 'German Public University Access',
      orizen: 'Direct applications to 100% Tuition-Free Public Universities',
      others: 'Push only high-commission private colleges'
    },
    {
      feature: 'APS & Document Verification',
      orizen: 'Dedicated end-to-end guidance for Indian APS filing',
      others: 'Leave students to figure out APS on their own'
    },
    {
      feature: 'Class Batch Size',
      orizen: 'Strictly 8–12 students per batch for individual speaking attention',
      others: 'Crowded batches of 30+ students'
    },
    {
      feature: 'Post-Landing & Housing Support',
      orizen: 'Assistance with city registration (Anmeldung), SIM, & German bank accounts',
      others: 'Support ends immediately after visa stamping'
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-4 h-4 text-brand-orange" />
            <span>The OriZen Distinction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight">
            Why Students & Parents Trust OriZen
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            We are not just visa agents—we are language educators and international career mentors committed to transparent, student-first success.
          </p>
        </div>

        {/* 4 Value Pillars with Equal Heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-16">
          {[
            {
              title: 'Goethe Exam Certified',
              desc: 'Our faculty holds CEFR C1/C2 certifications, ensuring you pass Goethe-Zertifikat and TestDaF on your first attempt.',
              icon: BookOpen,
              color: 'text-brand-orange bg-brand-orange/10'
            },
            {
              title: 'Zero-Tuition Focus',
              desc: 'We prioritize public university admissions across Germany & Austria where tuition fees are zero or near-zero.',
              icon: ShieldCheck,
              color: 'text-emerald-600 bg-emerald-50'
            },
            {
              title: 'Small Interactive Batches',
              desc: 'Capped at 8-12 students per batch to guarantee active speaking time and personalized pronunciation correction.',
              icon: Users,
              color: 'text-brand-blue-bright bg-blue-50'
            },
            {
              title: 'End-to-End Support',
              desc: 'From German A1 and APS verification to city registration (Anmeldung) and accommodation in Europe.',
              icon: Sparkles,
              color: 'text-purple-600 bg-purple-50'
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all h-full flex flex-col justify-between">
                <div>
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-4 ${item.color}`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="font-extrabold text-base sm:text-lg text-brand-navy mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="bg-brand-navy text-white px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between">
            <h3 className="text-lg sm:text-2xl font-black">
              How OriZen Compares to Traditional Agents
            </h3>
            <span className="hidden sm:inline-block text-xs text-amber-300 font-bold">
              100% Student-First Approach
            </span>
          </div>

          <div className="divide-y divide-slate-200">
            {comparisonItems.map((item, idx) => (
              <div key={idx} className="p-5 sm:p-7 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center hover:bg-slate-50/80 transition-colors">
                
                <div className="md:col-span-4 font-bold text-sm text-brand-navy pb-1 md:pb-0">
                  {item.feature}
                </div>

                <div className="md:col-span-4 flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 bg-emerald-50/60 p-3 sm:p-3.5 rounded-xl border border-emerald-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-emerald-800 block text-[10px] sm:text-[11px] uppercase tracking-wider">OriZen Way</span>
                    <span className="mt-0.5 block">{item.orizen}</span>
                  </div>
                </div>

                <div className="md:col-span-4 flex items-start gap-2.5 text-xs sm:text-sm text-slate-500 bg-slate-50 p-3 sm:p-3.5 rounded-xl border border-slate-200">
                  <XCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-400 block text-[10px] sm:text-[11px] uppercase tracking-wider">Other Agencies</span>
                    <span className="mt-0.5 block">{item.others}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

