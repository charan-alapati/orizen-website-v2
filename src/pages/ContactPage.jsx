import React from 'react';
import { ContactAndMap } from '../components/ContactAndMap';
import { FAQSection } from '../components/FAQSection';
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export const ContactPage = ({ onOpenConsultation }) => {
  return (
    <div className="space-y-0 pt-20">
      
      {/* 1. Hero Header */}
      <section className="py-16 sm:py-20 bg-brand-navy text-white relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-brand-orange/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>Vijayawada Center & Online Counseling</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Get in Touch with OriZen Mentors
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              Visit our state-of-the-art academy in Seetharampuram, Vijayawada or book an online video counseling session. We are open Monday through Saturday from 8:00 AM to 9:00 PM IST.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="btn-shimmer px-6 py-3.5 rounded-2xl bg-gradient-to-r from-brand-orange to-amber-500 text-white font-bold text-xs sm:text-sm shadow-glow-orange flex items-center gap-2"
              >
                <span>Book 1-on-1 Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/919502264933?text=Hi%20OriZen,%20I%20want%20to%20visit%20your%20Vijayawada%20center%20for%20counseling."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md flex items-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Helpline</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Direct Contact Cards Grid */}
      <section className="py-10 bg-[#070c18] border-b border-white/10 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-brand-orange/20 text-brand-orange flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-xs space-y-1">
                <div className="font-extrabold text-white">Center Address</div>
                <p className="text-slate-300">Door No: 33-9-22, Barister Street, Seetharampuram, Vijayawada - 520002</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-xs space-y-1">
                <div className="font-extrabold text-white">Direct Phone</div>
                <a href="tel:+919502264933" className="text-slate-300 hover:text-brand-orange block">
                  +91 95022 64933
                </a>
                <span className="text-[10px] text-emerald-400">Available Mon-Sat</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-xs space-y-1">
                <div className="font-extrabold text-white">Official Email</div>
                <a href="mailto:info@orizen.co.in" className="text-slate-300 hover:text-brand-orange block">
                  info@orizen.co.in
                </a>
                <span className="text-[10px] text-slate-400">Response within 24h</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-xs space-y-1">
                <div className="font-extrabold text-white">Working Hours</div>
                <p className="text-slate-300">Mon - Sat: 8:00 AM - 9:00 PM</p>
                <span className="text-[10px] text-amber-300">Sunday: Prior Appointment</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Interactive Form & Map Embed */}
      <ContactAndMap />

      {/* 4. FAQ Section */}
      <FAQSection />

    </div>
  );
};
