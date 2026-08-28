import React from 'react';
import { testimonialsData, universityPartners } from '../data/testimonialsData';
import { Star, Quote, Building2 } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section className="py-20 sm:py-24 bg-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>Real Student Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight">
            Loved by 500+ Students & Professionals
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            Read how our students achieved Goethe language certifications, secured tuition-free European university seats, and launched nursing & engineering careers.
          </p>
        </div>

        {/* Testimonials Grid Showcase with Equal Heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 sm:mb-20">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 hover:bg-white rounded-3xl border border-slate-200/80 hover:border-brand-orange/40 p-5 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div>
                {/* Top Row: Stars + Quote Icon */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-brand-orange/30 shrink-0" />
                </div>

                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic mb-5">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Row */}
              <div className="pt-3.5 border-t border-slate-200/80 flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-brand-orange shadow-sm shrink-0"
                />
                <div className="overflow-hidden">
                  <h4 className="font-extrabold text-xs sm:text-sm text-brand-navy truncate">{item.name}</h4>
                  <div className="text-[11px] sm:text-xs font-semibold text-brand-orange truncate">{item.destination}</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 truncate">{item.program}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* University Placements Marquee with Edge Fade */}
        <div className="pt-10 sm:pt-12 border-t border-slate-200">
          <div className="text-center text-[11px] sm:text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
            Where Our Alumni Study & Work Across Europe:
          </div>
          
          <div className="overflow-hidden relative py-2 mask-edge-fade">
            <div className="flex gap-3 sm:gap-4 animate-marquee whitespace-nowrap">
              {[...universityPartners, ...universityPartners, ...universityPartners].map((partner, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold shadow-sm"
                >
                  <Building2 className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                  <span>{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

