import React from 'react';
import { ShieldCheck, Award, GraduationCap, MapPin, Users, HeartHandshake, CheckCircle2, ArrowRight, Sparkles, Building2, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage = ({ onOpenConsultation }) => {
  return (
    <div className="space-y-0 pt-20">
      
      {/* 1. Hero Header */}
      <section className="py-16 sm:py-20 bg-brand-navy text-white relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-brand-orange/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About OriZen Institute</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Empowering Indian Aspirants to Conquer European Horizons
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              OriZen is a premier foreign language academy and European overseas consultancy based in Vijayawada, Andhra Pradesh. We specialize in certified German language education, 0€ tuition public university admissions, and international healthcare placements.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="btn-shimmer px-6 py-3.5 rounded-2xl bg-gradient-to-r from-brand-orange to-amber-500 text-white font-bold text-xs sm:text-sm shadow-glow-orange flex items-center gap-2"
              >
                <span>Book Free 1-on-1 Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                to="/contact"
                className="px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm border border-white/20 flex items-center gap-2 transition-colors"
              >
                <MapPin className="w-4 h-4 text-brand-orange" />
                <span>Visit Vijayawada Center</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Trust Milestones */}
      <section className="py-10 bg-[#070c18] border-b border-white/10 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl sm:text-4xl font-black text-brand-orange">500+</div>
              <div className="text-xs text-slate-300 font-semibold mt-1">Students Placed in Europe</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl sm:text-4xl font-black text-emerald-400">99.4%</div>
              <div className="text-xs text-slate-300 font-semibold mt-1">Goethe Exam Pass Rate</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl sm:text-4xl font-black text-blue-400">100%</div>
              <div className="text-xs text-slate-300 font-semibold mt-1">Visa Success Record</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl sm:text-4xl font-black text-amber-300">0 €</div>
              <div className="text-xs text-slate-300 font-semibold mt-1">Tuition Public Unis Target</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Mission & Vision */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange font-bold text-xs uppercase tracking-wider">
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>Our Core Purpose</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-navy leading-tight">
                Democratizing World-Class European Higher Education & Global Careers
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Traditional study abroad agencies push students towards expensive private universities with high commissions and massive student loans. At OriZen, we do the exact opposite: we champion <strong>100% Tuition-Free German Public Universities</strong> and transparent career trajectories.
              </p>
              <div className="space-y-2.5 pt-2">
                {[
                  'Zero commission bias: We apply strictly to top-ranked state public universities.',
                  'Ethical mentorship: Native language trainers and European alumni mentors.',
                  'End-to-end guardianship: From A1 alphabet drills to post-landing city registration in Germany.',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Feature Card */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-6">
              <h3 className="text-xl font-extrabold text-brand-navy">
                Our Physical Center & Infrastructure
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Located centrally in Seetharampuram, Vijayawada, our academy provides high-tech classrooms equipped with smart interactive digital whiteboards, language listening labs, and dedicated 1-on-1 counseling suites.
              </p>

              <div className="grid grid-cols-2 gap-3.5 text-xs font-bold text-slate-700">
                <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-orange" />
                  <span>Smart Classrooms</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  <span>Language Audio Lab</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Visa Filing Desk</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span>German Library</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Leadership & Mentors */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-navy">
              Mentors Dedicated to Your Global Success
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Learn from certified language trainers and European university graduates who know the admissions and visa process inside-out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 text-brand-orange flex items-center justify-center font-bold text-lg">
                DE
              </div>
              <h4 className="font-extrabold text-brand-navy text-base">German Language Faculty</h4>
              <p className="text-xs text-slate-500">Goethe-Zertifikat C1/C2 Certified</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Specialized in accelerated CEFR A1-B2 methodology, phonetics drills, and official Goethe examination tactics.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold text-lg">
                EU
              </div>
              <h4 className="font-extrabold text-brand-navy text-base">European Admissions Council</h4>
              <p className="text-xs text-slate-500">TU9 & Public University Alumni</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Experts in APS certificate documentation, Uni-Assist SOP/LOM crafting, and university shortlisting without rejection risks.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold text-lg">
                HC
              </div>
              <h4 className="font-extrabold text-brand-navy text-base">Healthcare Relocation Board</h4>
              <p className="text-xs text-slate-500">German Anerkennung Specialists</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Handles sworn translations, German hospital interviews, Defizitbescheid analysis, and full nursing board licensing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Banner */}
      <section className="py-14 bg-brand-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h2 className="text-2xl sm:text-4xl font-extrabold">
            Meet Our Senior Counselors in Vijayawada
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Book an in-person meeting at our center or schedule an online Zoom video consultation.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenConsultation}
              className="btn-shimmer px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-orange to-amber-500 text-white font-bold text-xs sm:text-sm shadow-glow-orange inline-flex items-center gap-2"
            >
              <span>Schedule Free Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
