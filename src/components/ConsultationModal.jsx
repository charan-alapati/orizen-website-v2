import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Video, MapPin } from 'lucide-react';

export const ConsultationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [counselingMode, setCounselingMode] = useState('in-person'); // in-person or online
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Study in Germany (0€ Tuition)',
    intake: 'Winter (Fall) 2025/2026',
    timeSlot: 'Morning (10:00 AM - 1:00 PM)'
  });
  const [booked, setBooked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBooked(true);

    // Auto-open WhatsApp with pre-filled booking details
    const text = `🌟 *1-on-1 Free Counseling Booking Request*%0A%0A` +
      `👤 *Name:* ${encodeURIComponent(form.name)}%0A` +
      `📱 *Phone:* ${encodeURIComponent(form.phone)}%0A` +
      `📍 *Meeting Mode:* ${counselingMode === 'in-person' ? 'In-Person (Vijayawada Center)' : 'Online Video Call (Zoom/Meet)'}%0A` +
      `🎓 *Primary Service:* ${encodeURIComponent(form.service)}%0A` +
      `⏰ *Preferred Time Slot:* ${encodeURIComponent(form.timeSlot)}`;
    
    window.open(`https://wa.me/919502264933?text=${text}`, '_blank');
  };

  const handleWhatsAppConfirm = () => {
    const text = `🌟 *1-on-1 Free Counseling Booking Request*%0A%0A` +
      `👤 *Name:* ${encodeURIComponent(form.name)}%0A` +
      `📱 *Phone:* ${encodeURIComponent(form.phone)}%0A` +
      `📍 *Meeting Mode:* ${counselingMode === 'in-person' ? 'In-Person (Vijayawada Center)' : 'Online Video Call (Zoom/Meet)'}%0A` +
      `🎓 *Primary Service:* ${encodeURIComponent(form.service)}%0A` +
      `⏰ *Preferred Time Slot:* ${encodeURIComponent(form.timeSlot)}`;
    
    window.open(`https://wa.me/919502264933?text=${text}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-fadeIn" onClick={onClose}>
      <div
        className="relative bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-brand-navy text-white px-5 sm:px-8 py-5 rounded-t-3xl flex items-center justify-between border-b border-white/10 shadow-md">
          <div>
            <div className="inline-block px-2.5 py-0.5 rounded-full bg-brand-orange text-white text-[10px] font-black uppercase tracking-wider mb-1">
              100% Free • No Obligation
            </div>
            <h3 className="text-lg sm:text-2xl font-black">Book 1-on-1 Free Counseling</h3>
            <p className="text-xs text-slate-300">With Senior European Education Mentors</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-8">
          {booked ? (
            <div className="text-center py-4 space-y-4 animate-fadeIn">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl sm:text-2xl font-black text-brand-navy">Appointment Requested!</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                Thank you <strong>{form.name}</strong>. We have earmarked your session for <strong>{counselingMode === 'in-person' ? 'In-Person at Vijayawada' : 'Online Video Call'}</strong>.
              </p>
              
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-left text-xs space-y-1.5 max-w-sm mx-auto">
                <div><strong>Service:</strong> {form.service}</div>
                <div><strong>Preferred Slot:</strong> {form.timeSlot}</div>
                <div><strong>Phone:</strong> {form.phone}</div>
              </div>

              <div className="pt-3 space-y-2.5">
                <button
                  onClick={handleWhatsAppConfirm}
                  className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Confirm on WhatsApp for Instant Slot</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onClose}
                  className="text-xs text-slate-500 hover:text-slate-800 underline"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              
              {/* Mode Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  1. How would you like to meet?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setCounselingMode('in-person')}
                    className={`p-3 sm:p-3.5 rounded-2xl border text-left flex items-center gap-2.5 sm:gap-3 transition-all ${
                      counselingMode === 'in-person'
                        ? 'bg-brand-navy text-white border-brand-navy shadow-md'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-white'
                    }`}
                  >
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-brand-orange shrink-0" />
                    <div>
                      <div className="font-bold text-xs">Vijayawada Center</div>
                      <div className="text-[10px] opacity-75">In-Person Visit</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCounselingMode('online')}
                    className={`p-3 sm:p-3.5 rounded-2xl border text-left flex items-center gap-2.5 sm:gap-3 transition-all ${
                      counselingMode === 'online'
                        ? 'bg-brand-navy text-white border-brand-navy shadow-md'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-white'
                    }`}
                  >
                    <Video className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 shrink-0" />
                    <div>
                      <div className="font-bold text-xs">Online Video Call</div>
                      <div className="text-[10px] opacity-75">Zoom / Meet</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ananya Reddy"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Primary Service *
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  >
                    <option value="German Language Training (A1-C2)">German Language Training (A1-C2)</option>
                    <option value="Study in Germany (0€ Tuition Public Unis)">Study in Germany (0€ Tuition Public Unis)</option>
                    <option value="Study in Austria / Switzerland / Latvia">Study in Austria / Switzerland / Latvia</option>
                    <option value="Nursing & Healthcare Jobs in Germany">Nursing & Healthcare Jobs in Germany</option>
                    <option value="French / Italian / IELTS Coaching">French / Italian / IELTS Coaching</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred Time Slot *
                  </label>
                  <select
                    value={form.timeSlot}
                    onChange={(e) => setForm({ ...form, timeSlot: e.target.value })}
                    className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  >
                    <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                    <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2:00 PM - 5:00 PM)</option>
                    <option value="Evening (5:00 PM - 8:00 PM)">Evening (5:00 PM - 8:00 PM)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="btn-shimmer w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-orange to-amber-500 hover:from-brand-orange-dark hover:to-brand-orange text-white font-bold text-xs sm:text-sm shadow-glow-orange flex items-center justify-center gap-2"
              >
                <span>Confirm Free Counseling Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center text-[10px] sm:text-[11px] text-slate-400">
                🔒 We respect your privacy. No spam. 100% confidential profile evaluation.
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

