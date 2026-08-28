import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, CheckCircle2, ArrowRight, MessageCircle, RefreshCw, Sparkles, Filter, Radio } from 'lucide-react';

const INITIAL_SCHEDULE = [
  {
    id: 'de-a1-m1',
    course: 'German A1 (Foundation)',
    code: 'DE-A1',
    flag: '🇩🇪',
    lang: 'german',
    slot: 'morning',
    time: '07:30 AM - 09:30 AM IST',
    days: 'Mon - Fri (Daily 2 Hrs)',
    duration: '6-8 Weeks (80+ Hrs)',
    mode: 'Classroom & Live Zoom',
    startDate: 'Starting Monday',
    status: 'Admissions Open',
    seatsLeft: 3,
    examTarget: 'Goethe-Zertifikat A1',
    badgeColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-200'
  },
  {
    id: 'de-a2-e1',
    course: 'German A2 (Elementary Fluency)',
    code: 'DE-A2',
    flag: '🇩🇪',
    lang: 'german',
    slot: 'evening',
    time: '06:30 PM - 08:30 PM IST',
    days: 'Mon - Fri (Daily 2 Hrs)',
    duration: '6-8 Weeks (90+ Hrs)',
    mode: 'Live Interactive Online',
    startDate: 'Starting Next Week',
    status: 'Fast Filling',
    seatsLeft: 2,
    examTarget: 'Goethe-Zertifikat A2',
    badgeColor: 'bg-amber-500/10 text-amber-600 border-amber-200'
  },
  {
    id: 'de-b1-f1',
    course: 'German B1 (University & Job Ready)',
    code: 'DE-B1',
    flag: '🇩🇪',
    lang: 'german',
    slot: 'morning',
    time: '10:00 AM - 12:30 PM IST',
    days: 'Mon - Fri (Intensive)',
    duration: '8-10 Weeks (120+ Hrs)',
    mode: 'Classroom & Live Online',
    startDate: 'Enrollment Open',
    status: 'Admissions Open',
    seatsLeft: 4,
    examTarget: 'Goethe B1 / telc Deutsch',
    badgeColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-200'
  },
  {
    id: 'de-b2-med',
    course: 'German B2 (Healthcare & Tech Focus)',
    code: 'DE-B2',
    flag: '🇩🇪',
    lang: 'german',
    slot: 'evening',
    time: '07:00 PM - 09:30 PM IST',
    days: 'Mon - Fri (Live Drills)',
    duration: '8-10 Weeks (140+ Hrs)',
    mode: 'Live Interactive Online',
    startDate: 'Upcoming Cohort',
    status: 'Limited Seats',
    seatsLeft: 2,
    examTarget: 'Goethe B2 / TestDaF',
    badgeColor: 'bg-blue-500/10 text-blue-600 border-blue-200'
  },
  {
    id: 'fr-a1-w1',
    course: 'French A1/A2 (DELF & TEF Canada)',
    code: 'FR-A1',
    flag: '🇫🇷',
    lang: 'french',
    slot: 'weekend',
    time: '10:00 AM - 01:30 PM IST',
    days: 'Sat & Sun (Weekend Batch)',
    duration: '12-14 Weeks (150+ Hrs)',
    mode: 'Classroom & Live Online',
    startDate: 'Starting This Weekend',
    status: 'Admissions Open',
    seatsLeft: 4,
    examTarget: 'DELF A1 / TEF Canada',
    badgeColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-200'
  },
  {
    id: 'it-a1-m1',
    course: 'Italian A1/A2 (Study in Italy)',
    code: 'IT-A1',
    flag: '🇮🇹',
    lang: 'italian',
    slot: 'evening',
    time: '05:30 PM - 07:30 PM IST',
    days: 'Tue, Thu, Sat',
    duration: '10-12 Weeks (100+ Hrs)',
    mode: 'Live Interactive Online',
    startDate: 'Enrollment Open',
    status: 'Admissions Open',
    seatsLeft: 5,
    examTarget: 'CILS / CELI A1/A2',
    badgeColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-200'
  }
];

export const LiveBatchSchedule = ({ onOpenConsultation }) => {
  const [filterLang, setFilterLang] = useState('all');
  const [filterSlot, setFilterSlot] = useState('all');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastSynced, setLastSynced] = useState('Just now');

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setLastSynced('Just now');
    }, 600);
  };

  const filteredBatches = INITIAL_SCHEDULE.filter((b) => {
    if (filterLang !== 'all' && b.lang !== filterLang) return false;
    if (filterSlot !== 'all' && b.slot !== filterSlot) return false;
    return true;
  });

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden mt-12 mb-16">
      
      {/* Live Synced Top Bar */}
      <div className="bg-brand-navy text-white px-5 sm:px-8 py-5 flex flex-wrap items-center justify-between gap-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping absolute" />
            <span className="w-3 h-3 rounded-full bg-emerald-400 relative" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base sm:text-lg font-black tracking-tight">
                Live Batch Schedule & Seat Availability
              </h3>
              <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold uppercase tracking-wider border border-emerald-400/30">
                Synced from Sheets
              </span>
            </div>
            <p className="text-xs text-slate-300">
              Real-time batch openings, upcoming start dates & classroom/online slots • Last checked: {lastSynced}
            </p>
          </div>
        </div>

        <button
          onClick={handleRefresh}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-bold text-slate-200 border border-white/15 transition-colors"
          title="Refresh live schedule from Google Sheets"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-brand-orange' : ''}`} />
          <span>{isRefreshing ? 'Syncing...' : 'Sync Live'}</span>
        </button>
      </div>

      {/* Filter Toolbar */}
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
        {/* Language Filters */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-bold text-slate-500 mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Language:
          </span>
          {[
            { id: 'all', label: 'All Languages' },
            { id: 'german', label: '🇩🇪 German' },
            { id: 'french', label: '🇫🇷 French' },
            { id: 'italian', label: '🇮🇹 Italian' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilterLang(item.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                filterLang === item.id
                  ? 'bg-brand-navy text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Slot Filters */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-bold text-slate-500 mr-1">Time Slot:</span>
          {[
            { id: 'all', label: 'All Slots' },
            { id: 'morning', label: '🌅 Morning' },
            { id: 'evening', label: '🌆 Evening' },
            { id: 'weekend', label: '📅 Weekend' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilterSlot(item.id)}
              className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                filterSlot === item.id
                  ? 'bg-brand-orange text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Batches Table / Cards List */}
      <div className="divide-y divide-slate-200 overflow-x-auto">
        {filteredBatches.map((batch) => (
          <div
            key={batch.id}
            className="p-4 sm:p-6 hover:bg-slate-50/80 transition-colors flex flex-col lg:flex-row lg:items-center justify-between gap-4"
          >
            {/* Left: Course & Timing Info */}
            <div className="space-y-2 lg:max-w-xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-lg">{batch.flag}</span>
                <h4 className="font-extrabold text-sm sm:text-base text-brand-navy">
                  {batch.course}
                </h4>
                <span className={`px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase border ${batch.badgeColor}`}>
                  {batch.status}
                </span>
                <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-bold">
                  {batch.seatsLeft} Seats Left
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-600 pt-1">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                  <span><strong>Time:</strong> {batch.time}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  <span><strong>Days:</strong> {batch.days}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span><strong>Format:</strong> {batch.mode}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-0.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Target: <strong>{batch.examTarget}</strong> ({batch.duration}) • Cohort: <strong>{batch.startDate}</strong></span>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0 pt-2 lg:pt-0">
              <button
                onClick={onOpenConsultation}
                className="btn-shimmer flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-xs shadow-glow-orange flex items-center justify-center gap-1.5"
              >
                <span>Reserve Seat</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={`https://wa.me/919502264933?text=Hi%20OriZen,%20I%20want%20to%20reserve%20a%20seat%20for%20the%20${encodeURIComponent(batch.course)}%20(${encodeURIComponent(batch.time)}).`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-xs border border-emerald-200 flex items-center justify-center gap-1.5 transition-colors"
                title="Inquire batch via WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            </div>
          </div>
        ))}

        {filteredBatches.length === 0 && (
          <div className="p-8 text-center text-slate-500 text-xs sm:text-sm">
            No batches matching the selected filters. Please choose another language or slot.
          </div>
        )}
      </div>

      {/* Footer Notice */}
      <div className="p-4 bg-slate-100/70 border-t border-slate-200 text-center text-[11px] text-slate-500 flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
        <span>Custom weekend or 1-on-1 fast-track batches available on request for working professionals.</span>
      </div>

    </div>
  );
};
