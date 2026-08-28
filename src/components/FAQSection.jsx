import React, { useState } from 'react';
import { faqData } from '../data/faqData';
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageCircle, X } from 'lucide-react';

export const FAQSection = () => {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0);
  const [openQuestionIdx, setOpenQuestionIdx] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const currentCategory = faqData[activeCategoryIdx];

  // If search query exists, search across all categories
  const filteredQuestions = searchQuery.trim() === ''
    ? currentCategory.questions
    : faqData.flatMap(cat => cat.questions).filter(
        q => q.q.toLowerCase().includes(searchQuery.toLowerCase()) || q.a.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <section className="py-20 sm:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-brand-blue-bright text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-4 h-4 text-brand-blue-bright" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight">
            Got Questions? We Have Answers.
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base lg:text-lg">
            Everything you need to know about German public universities, APS verification, language levels, and visa timelines.
          </p>

          {/* Search Bar */}
          <div className="mt-6 sm:mt-8 relative max-w-lg mx-auto">
            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by keyword (e.g., APS, Blocked Account, Goethe, Visa)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3 sm:py-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Tabs (shown when not actively searching) */}
          {searchQuery.trim() === '' && (
            <div className="mt-6 inline-flex flex-wrap items-center justify-center p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm gap-1 sm:gap-2">
              {faqData.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveCategoryIdx(idx);
                    setOpenQuestionIdx(0);
                  }}
                  className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                    activeCategoryIdx === idx
                      ? 'bg-brand-navy text-white shadow-sm'
                      : 'text-slate-600 hover:text-brand-orange hover:bg-slate-50'
                  }`}
                >
                  {cat.category}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Questions Accordion List */}
        <div className="space-y-3 sm:space-y-4">
          {filteredQuestions.length === 0 ? (
            <div className="p-8 text-center bg-white rounded-3xl border border-slate-200 text-slate-500 text-sm">
              No matching questions found for "{searchQuery}". Ask our counselors directly on WhatsApp!
            </div>
          ) : (
            filteredQuestions.map((item, idx) => {
              const isOpen = openQuestionIdx === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenQuestionIdx(isOpen ? -1 : idx)}
                    className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-3 font-bold text-xs sm:text-base text-brand-navy hover:text-brand-orange transition-colors"
                  >
                    <span>{item.q}</span>
                    <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-brand-orange text-white' : 'bg-slate-100 text-slate-500'}`}>
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-fadeIn">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* WhatsApp Help Trigger */}
        <div className="mt-10 sm:mt-12 p-5 sm:p-6 rounded-3xl bg-brand-blue-subtle border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-extrabold text-brand-navy text-sm sm:text-base">Still have specific questions?</h4>
            <p className="text-xs text-slate-600 mt-0.5">
              Chat directly with our senior study abroad mentors in Vijayawada.
            </p>
          </div>
          <a
            href="https://wa.me/919502264933?text=Hi%20OriZen,%20I%20have%20a%20question%20regarding%20courses%20or%20study%20abroad."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-colors text-center"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Instant WhatsApp Chat</span>
          </a>
        </div>

      </div>
    </section>
  );
};

