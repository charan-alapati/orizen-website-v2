import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle2 } from 'lucide-react';

export const ContactAndMap = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'German Language Training (A1-C2)',
    destination: 'Germany (0€ Tuition)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Auto-open WhatsApp with pre-filled structured message
    const text = `🌟 *New Inquiry via OriZen Website*%0A%0A` +
      `👤 *Name:* ${encodeURIComponent(formState.name)}%0A` +
      `📱 *Phone:* ${encodeURIComponent(formState.phone)}%0A` +
      `📧 *Email:* ${encodeURIComponent(formState.email || 'Not provided')}%0A` +
      `🎓 *Program:* ${encodeURIComponent(formState.service)}%0A` +
      `📝 *Query / Background:* ${encodeURIComponent(formState.message || 'I would like to know more about this program.')}`;
    
    window.open(`https://wa.me/919502264933?text=${text}`, '_blank');
  };

  const handleSendWhatsApp = () => {
    const text = `🌟 *New Inquiry via OriZen Website*%0A%0A` +
      `👤 *Name:* ${encodeURIComponent(formState.name)}%0A` +
      `📱 *Phone:* ${encodeURIComponent(formState.phone)}%0A` +
      `📧 *Email:* ${encodeURIComponent(formState.email || 'Not provided')}%0A` +
      `🎓 *Program:* ${encodeURIComponent(formState.service)}%0A` +
      `📝 *Query / Background:* ${encodeURIComponent(formState.message || 'I would like to know more about this program.')}`;
    
    window.open(`https://wa.me/919502264933?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-4 h-4 text-brand-orange" />
            <span>Connect with OriZen</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight">
            Visit Our Center or Send an Inquiry
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            Begin your European journey today. Meet our certified mentors at our Vijayawada center or book an online video counseling session.
          </p>
        </div>

        {/* Contact Grid with Equal Heights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch mb-12 sm:mb-16">
          
          {/* Contact Details & Info (Left) */}
          <div className="lg:col-span-5 bg-brand-navy text-white rounded-3xl p-5 sm:p-8 shadow-2xl space-y-5 flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-black">Center for German Language</h3>
              <p className="text-xs text-slate-300 mt-1">
                Authorized European Education & Foreign Language Academy
              </p>

              {/* Info Items List */}
              <div className="space-y-3.5 pt-4">
                <a
                  href="tel:+919502264933"
                  className="flex items-start gap-3 p-3 sm:p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand-orange/20 flex items-center justify-center text-brand-orange shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-[11px] text-slate-400 font-bold uppercase block">Phone / WhatsApp</span>
                    <span className="text-xs sm:text-sm font-extrabold text-white group-hover:text-brand-orange transition-colors">
                      +91 950 22 649 33
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:mail2orizen@gmail.com"
                  className="flex items-start gap-3 p-3 sm:p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-[11px] text-slate-400 font-bold uppercase block">Official Email</span>
                    <span className="text-xs sm:text-sm font-extrabold text-white group-hover:text-blue-400 transition-colors">
                      mail2orizen@gmail.com
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-[11px] text-slate-400 font-bold uppercase block">Physical Center Address</span>
                    <span className="text-xs text-slate-200 leading-relaxed block mt-0.5">
                      Door No: 33-9-22, Barister Street, Seetharampuram, Vijayawada, 520002, Andhra Pradesh, India.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-[11px] text-slate-400 font-bold uppercase block">Center Working Hours</span>
                    <span className="text-xs text-slate-200 leading-relaxed block mt-0.5">
                      Monday to Saturday: 8:00 AM – 9:00 PM<br />
                      Sunday: Online Inquiries & By Appointment
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Action inside card */}
            <div className="pt-2">
              <a
                href="https://wa.me/919502264933?text=Hi%20OriZen,%20I%20would%20like%20to%20visit%20your%20Vijayawada%20center."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-colors text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Request Direct Location on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Inquiry Form (Right) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200/90 rounded-3xl p-5 sm:p-8 shadow-lg flex flex-col justify-between">
            
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-brand-navy mb-1">Send an Official Inquiry</h3>
              <p className="text-xs text-slate-500 mb-5">
                Fill out your details below. Our senior counselor will connect with you within 2 business hours.
              </p>

              {submitted ? (
                <div className="p-6 sm:p-8 text-center bg-white rounded-2xl border border-emerald-200 shadow-sm animate-fadeIn space-y-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-brand-navy">Thank You, {formState.name}!</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                    Your inquiry regarding <strong>{formState.service}</strong> has been received by our Vijayawada team.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleSendWhatsApp}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md text-center"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send details to WhatsApp for Instant Reply</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-slate-500 underline hover:text-slate-800"
                    >
                      Submit another response
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. rahul@example.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Program of Interest *
                      </label>
                      <select
                        value={formState.service}
                        onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
                      >
                        <option value="German Language Training (A1-C2)">German Language Training (A1-C2)</option>
                        <option value="French Language (DELF / TEF Canada)">French Language (DELF / TEF Canada)</option>
                        <option value="Study in Germany (0€ Tuition Public Unis)">Study in Germany (0€ Tuition Public Unis)</option>
                        <option value="Study in Austria / Switzerland / Latvia">Study in Austria / Switzerland / Latvia</option>
                        <option value="Nursing & Healthcare Jobs in Germany">Nursing & Healthcare Jobs in Germany</option>
                        <option value="Tech & Engineering Jobs Abroad">Tech & Engineering Jobs Abroad</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Your Questions / Academic Background
                    </label>
                    <textarea
                      rows="3"
                      placeholder="Tell us about your qualification (e.g. B.Tech / B.Sc Nursing / 12th) and any questions..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-shimmer w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send Inquiry to WhatsApp</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

        {/* Embedded Google Map */}
        <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
          <div className="bg-slate-100 px-5 py-3 flex items-center justify-between border-b border-slate-200">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
              <MapPin className="w-4 h-4 text-brand-orange shrink-0" />
              <span className="truncate">Center for German Language • Seetharampuram, Vijayawada</span>
            </div>
            <a
              href="https://www.google.com/maps/place/Center+for+German+Language/@16.5140633,80.6378732,1088m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a35faab00000067:0xf403359a0d598df6!8m2!3d16.5140582!4d80.6404481!16s%2Fg%2F11fxdt8gkx?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-brand-blue-bright hover:underline shrink-0 ml-2"
            >
              Open in Google Maps ↗
            </a>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3865.084625560758!2d80.6404481!3d16.514058199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35faab00000067%3A0xf403359a0d598df6!2sCenter%20for%20German%20Language!5e1!3m2!1sen!2sin!4v1766399735504!5m2!1sen!2sin"
            width="100%"
            height="380"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="OriZen Center for German Language Location"
          />
        </div>

      </div>
    </section>
  );
};

