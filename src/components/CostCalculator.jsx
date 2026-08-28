import React, { useState } from 'react';
import { Calculator, ArrowRight, TrendingDown } from 'lucide-react';

export const CostCalculator = ({ onOpenConsultation }) => {
  const [country, setCountry] = useState('germany');
  const [durationYears, setDurationYears] = useState(2); // standard master's duration
  const [accommodation, setAccommodation] = useState('wg'); // dorm, wg, studio
  const [partTimeHours, setPartTimeHours] = useState(20); // max 20h/wk

  const EUR_TO_INR = 92; // approximate conversion rate

  const countryDataMap = {
    germany: {
      name: 'Germany 🇩🇪',
      annualTuitionEur: 0, // 0 tuition at public universities
      semesterTicketEur: 600, // €300 x 2 semesters (includes statewide transit)
      blockedAccountEur: 11208,
      hourlyMinWageEur: 13.50,
      note: 'Zero tuition at all top public universities (TUM, RWTH Aachen, Stuttgart)'
    },
    austria: {
      name: 'Austria 🇦🇹',
      annualTuitionEur: 1452, // €726 x 2 semesters
      semesterTicketEur: 400,
      blockedAccountEur: 10500,
      hourlyMinWageEur: 12.50,
      note: 'Very low public tuition and highest living quality ranking in Vienna'
    },
    switzerland: {
      name: 'Switzerland 🇨🇭',
      annualTuitionEur: 1600, // public universities ~ CHF 1500
      semesterTicketEur: 500,
      blockedAccountEur: 18000,
      hourlyMinWageEur: 22.00,
      note: 'World #1 rankings (ETH Zurich) with highest part-time student wages'
    },
    latvia: {
      name: 'Latvia 🇱🇻',
      annualTuitionEur: 3200,
      semesterTicketEur: 200,
      blockedAccountEur: 5800,
      hourlyMinWageEur: 8.50,
      note: 'Budget-friendly EU Schengen study option with affordable living'
    },
    france: {
      name: 'France 🇫🇷',
      annualTuitionEur: 3770,
      semesterTicketEur: 350,
      blockedAccountEur: 7380,
      hourlyMinWageEur: 11.65,
      note: 'Eligible for French CAF rent subsidy (reimburses up to 40% of housing)'
    }
  };

  const selected = countryDataMap[country];

  // Base Blocked Account living cost
  const annualLivingEur = selected.blockedAccountEur;
  
  // Annual Part-time Earnings (48 working weeks * hours * hourly rate)
  const annualPartTimeEarningsEur = Math.round(48 * partTimeHours * selected.hourlyMinWageEur);

  // Total Gross Cost per year
  const totalAnnualGrossEur = selected.annualTuitionEur + selected.semesterTicketEur + annualLivingEur;

  // Net Out of Pocket per year after part-time offset
  const netAnnualCostEur = Math.max(0, totalAnnualGrossEur - annualPartTimeEarningsEur);

  // Totals for full duration
  const totalProgramCostEur = netAnnualCostEur * durationYears;
  const totalProgramCostInr = Math.round(totalProgramCostEur * EUR_TO_INR);
  const totalSavingsInr = Math.round(annualPartTimeEarningsEur * durationYears * EUR_TO_INR);

  return (
    <section id="calculator" className="py-20 sm:py-24 bg-gradient-to-b from-slate-900 to-brand-navy text-white relative overflow-hidden">
      
      {/* Glow Circles */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-blue-bright/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-4 h-4 text-brand-orange" />
            <span>Interactive Financial Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            European Study & Living Cost Estimator
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">
            Estimate tuition fees, blocked account living expenses, and see how much you can offset through legally permitted student part-time jobs.
          </p>
        </div>

        {/* Main Calculator Layout with Equal Heights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Controls Box (Left) */}
          <div className="lg:col-span-7 bg-brand-navy-card/95 border border-white/15 rounded-3xl p-5 sm:p-8 backdrop-blur-xl space-y-6 flex flex-col justify-between">
            
            {/* Country Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5">
                1. Select Target Study Destination
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
                {Object.keys(countryDataMap).map((key) => (
                  <button
                    key={key}
                    onClick={() => setCountry(key)}
                    className={`py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all text-left ${
                      country === key
                        ? 'bg-brand-orange text-white border-brand-orange shadow-glow-orange'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    {countryDataMap[key].name}
                  </button>
                ))}
              </div>
              <p className="text-xs text-amber-300/90 mt-2 font-medium">
                💡 {selected.note}
              </p>
            </div>

            {/* Degree Duration */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5">
                2. Program Duration
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setDurationYears(1)}
                  className={`py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                    durationYears === 1
                      ? 'bg-white text-brand-navy border-white shadow-md'
                      : 'bg-white/5 border-white/10 text-slate-300'
                  }`}
                >
                  1 Year (Specialized Master)
                </button>
                <button
                  onClick={() => setDurationYears(2)}
                  className={`py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                    durationYears === 2
                      ? 'bg-white text-brand-navy border-white shadow-md'
                      : 'bg-white/5 border-white/10 text-slate-300'
                  }`}
                >
                  2 Years (Standard Master / M.Sc.)
                </button>
              </div>
            </div>

            {/* Accommodation Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5">
                3. Preferred Housing Style
              </label>
              <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
                {[
                  { id: 'dorm', label: 'Student Dorm', cost: '€350/mo' },
                  { id: 'wg', label: 'Shared Flat', cost: '€480/mo' },
                  { id: 'studio', label: 'Private Studio', cost: '€720/mo' }
                ].map((acc) => (
                  <button
                    key={acc.id}
                    onClick={() => setAccommodation(acc.id)}
                    className={`p-2.5 sm:p-3 rounded-xl text-xs font-bold border transition-all text-center ${
                      accommodation === acc.id
                        ? 'bg-brand-blue-bright text-white border-brand-blue-bright'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    <div>{acc.label}</div>
                    <div className="text-[10px] opacity-75 mt-0.5">{acc.cost}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Part-Time Work Hours Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  4. Planned Part-Time Student Work (per week)
                </label>
                <span className="text-xs sm:text-sm font-black text-emerald-400">
                  {partTimeHours} Hrs/Wk (~€{Math.round(partTimeHours * selected.hourlyMinWageEur * 4)}/mo)
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="20"
                step="5"
                value={partTimeHours}
                onChange={(e) => setPartTimeHours(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer custom-range"
              />
              <div className="flex justify-between text-[10px] sm:text-[11px] text-slate-400 mt-1">
                <span>0 hrs (No part-time)</span>
                <span>10 hrs/wk</span>
                <span>20 hrs/wk (Permitted Max)</span>
              </div>
            </div>

          </div>

          {/* Real-time Summary Card (Right) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-brand-navy-card to-slate-950 border border-white/20 rounded-3xl p-5 sm:p-8 shadow-2xl space-y-5 flex flex-col justify-between">
            
            <div>
              <div className="pb-3.5 border-b border-white/10 flex items-center justify-between">
                <h3 className="font-extrabold text-base sm:text-lg text-white">Estimated Budget Overview</h3>
                <span className="text-xs text-brand-orange font-bold uppercase tracking-wider">
                  {durationYears} Year Program
                </span>
              </div>

              {/* Breakdown Items */}
              <div className="space-y-3 text-xs sm:text-sm pt-4">
                <div className="flex items-center justify-between text-slate-300">
                  <span>University Tuition Fees:</span>
                  <span className="font-bold text-white">
                    {selected.annualTuitionEur === 0 ? (
                      <span className="text-emerald-400 font-black">0 € (Free Tuition)</span>
                    ) : (
                      `€${(selected.annualTuitionEur * durationYears).toLocaleString()}`
                    )}
                  </span>
                </div>

                <div className="flex items-center justify-between text-slate-300">
                  <span>Living / Blocked Account Deposit:</span>
                  <span className="font-bold text-white">
                    €{(annualLivingEur * durationYears).toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center justify-between text-slate-300">
                  <span>Semester Transit & Union Fees:</span>
                  <span className="font-bold text-white">
                    €{(selected.semesterTicketEur * durationYears).toLocaleString()}
                  </span>
                </div>

                {partTimeHours > 0 && (
                  <div className="flex items-center justify-between text-emerald-400 pt-2 border-t border-white/10 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <TrendingDown className="w-4 h-4" />
                      Part-Time Work Potential:
                    </span>
                    <span>- €{(annualPartTimeEarningsEur * durationYears).toLocaleString()}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Total Estimated Net Investment */}
            <div className="space-y-4">
              <div className="pt-4 border-t border-white/15 bg-white/5 p-4 rounded-2xl">
                <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Net Estimated Out-of-Pocket Budget:
                </div>
                
                <div className="mt-1.5 flex items-baseline gap-2">
                  <div className="text-2xl sm:text-4xl font-black text-gradient-orange">
                    ₹{(totalProgramCostInr / 100000).toFixed(1)} Lakhs
                  </div>
                  <div className="text-xs font-bold text-slate-400">
                    (~€{totalProgramCostEur.toLocaleString()})
                  </div>
                </div>

                {partTimeHours > 0 && (
                  <p className="text-[11px] text-emerald-300 mt-2 font-medium leading-relaxed">
                    ✓ You can potentially offset up to ₹{(totalSavingsInr / 100000).toFixed(1)} Lakhs through permitted 20h/wk student jobs!
                  </p>
                )}
              </div>

              {/* Call to Action inside Calculator */}
              <div className="space-y-2.5">
                <button
                  onClick={onOpenConsultation}
                  className="btn-shimmer w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-orange to-amber-500 text-white font-bold text-xs sm:text-sm shadow-glow-orange flex items-center justify-center gap-2"
                >
                  <span>Get Full Financial Plan on WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="text-center text-[10px] text-slate-400">
                  *Estimates based on official German Blocked Account (€11,208/yr) & current conversion rates.
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

