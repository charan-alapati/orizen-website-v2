import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight, RotateCcw, Compass, ArrowLeft } from 'lucide-react';

export const QuickEligibility = ({ onOpenConsultation }) => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    goal: '',
    education: '',
    budget: ''
  });

  const handleSelect = (key, value) => {
    const nextAnswers = { ...answers, [key]: value };
    setAnswers(nextAnswers);
    if (step < 3) {
      setStep(step + 1);
    } else {
      setStep(4); // Results state
    }
  };

  const resetQuiz = () => {
    setAnswers({ goal: '', education: '', budget: '' });
    setStep(1);
  };

  // Logic to determine customized pathway outcome
  const getRecommendation = () => {
    if (answers.goal === 'nursing' || answers.education === 'nursing') {
      return {
        title: '🇩🇪 Fast-Track German Nursing Licensure (Anerkennung)',
        country: 'Germany',
        timeline: '6 - 9 Months',
        cost: 'Near-Zero (Sponsored by German Hospital Employers)',
        startingSalary: '€3,200 - €4,200 / month',
        steps: ['German B1/B2 Training at OriZen', 'Certified Translation & Anerkennung Dossier', 'Hospital Interview & Fast-Track Visa'],
        ctaText: 'Get Nursing Fast-Track Roadmap'
      };
    }
    if (answers.goal === 'language') {
      return {
        title: '📚 Intensive German / French Fluency & Goethe Exam Prep',
        country: 'India & DACH Region',
        timeline: '3 - 6 Months',
        cost: 'Affordable Batch Fee with Mock Exam Pack',
        startingSalary: 'High Demand in MNCs & Translation',
        steps: ['CEFR Standardized Smart Classes', 'Daily Speaking & Pronunciation Drills', 'Goethe-Zertifikat Mock Exams'],
        ctaText: 'Enroll in Language Program'
      };
    }
    if (answers.budget === 'zero' || answers.goal === 'study-free') {
      return {
        title: '🎓 Tuition-Free Public Universities in Germany & Austria',
        country: 'Germany (0€ Tuition) or Austria (€726/sem)',
        timeline: 'Fall / Spring Intake (3-6 Months prep)',
        cost: '0 € Tuition + €11,208 Blocked Account for living',
        startingSalary: '€55,000 - €70,000 / year starting graduate salary',
        steps: ['APS Certificate & Uni-Assist Shortlisting', 'German A1/A2 Coaching', 'Blocked Account & Visa Filing'],
        ctaText: 'Download Free German University List'
      };
    }
    return {
      title: '🌍 Top European Master Degrees & 18-Month Stay-Back Visa',
      country: 'Germany, Switzerland, Austria or Latvia',
      timeline: 'Upcoming 2025/2026 Intake',
      cost: 'Highly Affordable EU Standard',
      startingSalary: '€48,000 - €75,000 / year',
      steps: ['Comprehensive Profile Assessment', 'SOP / Motivation Letter Drafting', 'End-to-End Visa & Accommodation Guidance'],
      ctaText: 'Book Customized 1-on-1 Strategy Session'
    };
  };

  const rec = getRecommendation();

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-brand-navy to-slate-900 text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Interactive Pathway Finder</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Find Your Ideal European Study or Career Route
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-2">
            Answer 3 quick questions to get an instant personalized timeline, tuition estimates, and visa roadmap.
          </p>
        </div>

        {/* Progress Tracker */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          {[1, 2, 3].map((num) => (
            <div key={num} className="flex items-center gap-2">
              <div
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  step === num
                    ? 'bg-brand-orange text-white shadow-glow-orange scale-110'
                    : step > num
                    ? 'bg-emerald-500 text-white'
                    : 'bg-white/10 text-slate-400'
                }`}
              >
                {step > num ? '✓' : num}
              </div>
              {num < 3 && <div className={`w-6 sm:w-12 h-1 rounded ${step > num ? 'bg-emerald-500' : 'bg-white/10'}`} />}
            </div>
          ))}
        </div>

        {/* Quiz Box */}
        <div className="bg-brand-navy-card/95 border border-white/15 rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl backdrop-blur-xl">
          
          {/* STEP 1 */}
          {step === 1 && (
            <div className="animate-fadeIn space-y-5">
              <h3 className="text-lg sm:text-xl font-bold text-center text-white">
                Step 1: What is your primary global aspiration?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  { key: 'study-free', title: '🎓 Study Tuition-Free in Germany / Austria', desc: 'Bachelor or Master degrees at top public universities' },
                  { key: 'language', title: '📚 Master German or French Language', desc: 'Learn A1 to C2 for job opportunities or Goethe/DELF exam' },
                  { key: 'nursing', title: '🏥 Work as a Registered Nurse in Germany', desc: 'Fast-track visa, hospital sponsorship & high European salary' },
                  { key: 'tech', title: '💻 Tech / Engineering Jobs & EU Blue Card', desc: 'Direct corporate careers in Germany, Netherlands & EU' }
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => handleSelect('goal', item.key)}
                    className="p-4 sm:p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-orange/50 text-left transition-all group flex flex-col justify-between h-full"
                  >
                    <div className="font-bold text-sm sm:text-base text-white group-hover:text-brand-orange transition-colors">
                      {item.title}
                    </div>
                    <div className="text-xs text-slate-400 mt-2">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="animate-fadeIn space-y-5">
              <h3 className="text-lg sm:text-xl font-bold text-center text-white">
                Step 2: What is your current highest qualification?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  { key: 'btech', title: 'B.Tech / B.E. / MCA / M.Sc.', desc: 'Engineering, Computer Science, IT, Sciences' },
                  { key: 'nursing', title: 'B.Sc Nursing / GNM Diploma', desc: 'Registered with State Nursing Council' },
                  { key: 'bachelors', title: 'B.Com / BBA / BA / Other Degree', desc: 'Business, Management, Commerce, Arts' },
                  { key: 'inter', title: '12th Grade / Intermediate Completed', desc: 'Looking for European Bachelor degrees / Studienkolleg' }
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => handleSelect('education', item.key)}
                    className="p-4 sm:p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-orange/50 text-left transition-all group flex flex-col justify-between h-full"
                  >
                    <div className="font-bold text-sm sm:text-base text-white group-hover:text-brand-orange transition-colors">
                      {item.title}
                    </div>
                    <div className="text-xs text-slate-400 mt-2">{item.desc}</div>
                  </button>
                ))}
              </div>
              <div className="pt-2 text-center">
                <button onClick={() => setStep(1)} className="text-xs text-slate-400 hover:text-white inline-flex items-center gap-1.5 transition-colors">
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to previous question</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="animate-fadeIn space-y-5">
              <h3 className="text-lg sm:text-xl font-bold text-center text-white">
                Step 3: What is your preferred budget for university tuition?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                {[
                  { key: 'zero', title: '0 € Tuition', desc: '100% Free Public Universities in Germany' },
                  { key: 'budget', title: 'Low Tuition (< €4,000/yr)', desc: 'Austria, Latvia, France Public Institutions' },
                  { key: 'private', title: 'Flexible / Top Tier', desc: 'Private & Elite Hospitality / Tech Programs' }
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => handleSelect('budget', item.key)}
                    className="p-4 sm:p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-orange/50 text-left transition-all group flex flex-col justify-between h-full"
                  >
                    <div className="font-bold text-sm sm:text-base text-white group-hover:text-brand-orange transition-colors">
                      {item.title}
                    </div>
                    <div className="text-xs text-slate-400 mt-2">{item.desc}</div>
                  </button>
                ))}
              </div>
              <div className="pt-2 text-center">
                <button onClick={() => setStep(2)} className="text-xs text-slate-400 hover:text-white inline-flex items-center gap-1.5 transition-colors">
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to previous question</span>
                </button>
              </div>
            </div>
          )}

          {/* RESULTS STATE */}
          {step === 4 && (
            <div className="animate-fadeIn space-y-5">
              <div className="flex items-center justify-between pb-3.5 border-b border-white/10">
                <div className="flex items-center gap-2 text-emerald-400 text-xs sm:text-sm font-bold">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Personalized Assessment Generated!</span>
                </div>
                <button
                  onClick={resetQuiz}
                  className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Restart Finder</span>
                </button>
              </div>

              <div className="bg-white/5 border border-white/15 rounded-2xl p-4 sm:p-6 space-y-4">
                <h4 className="text-lg sm:text-2xl font-black text-white">{rec.title}</h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-center">
                    <span className="text-[10px] sm:text-[11px] text-slate-400 uppercase font-semibold">Target Destination</span>
                    <div className="text-xs sm:text-sm font-bold text-white mt-1">{rec.country}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-center">
                    <span className="text-[10px] sm:text-[11px] text-slate-400 uppercase font-semibold">Estimated Prep Timeline</span>
                    <div className="text-xs sm:text-sm font-bold text-amber-300 mt-1">{rec.timeline}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-center">
                    <span className="text-[10px] sm:text-[11px] text-slate-400 uppercase font-semibold">Tuition & Financials</span>
                    <div className="text-xs sm:text-sm font-bold text-emerald-400 mt-1">{rec.cost}</div>
                  </div>
                </div>

                {/* Steps Roadmap */}
                <div className="pt-2">
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2.5">
                    Recommended 3-Step Execution Plan:
                  </span>
                  <div className="space-y-2">
                    {rec.steps.map((st, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                        <span className="w-5 h-5 rounded-full bg-brand-orange/20 text-brand-orange text-xs font-bold flex items-center justify-center shrink-0">
                          {i + 1}
                        </span>
                        <span>{st}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="btn-shimmer flex-1 py-3.5 px-5 rounded-xl bg-gradient-to-r from-brand-orange to-amber-500 text-white font-bold text-xs sm:text-sm shadow-glow-orange flex items-center justify-center gap-2"
                >
                  <span>{rec.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`https://wa.me/919502264933?text=Hi%20OriZen,%20I%20completed%20the%20Eligibility%20Quiz%20for%20${encodeURIComponent(rec.title)}.%20Please%20guide%20me!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Discuss on WhatsApp</span>
                </a>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

