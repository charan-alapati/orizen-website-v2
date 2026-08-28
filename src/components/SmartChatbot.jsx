import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Bot, ArrowRight } from 'lucide-react';

export const SmartChatbot = ({ onOpenConsultation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Hallo! 👋 Welcome to OriZen. I am your European Education & Language Assistant. What would you like to explore today?',
      options: [
        { label: '🇩🇪 German Language (A1-C2)', target: 'german' },
        { label: '🎓 Study in Germany (0€ Tuition)', target: 'study-germany' },
        { label: '🏥 Nursing & Healthcare Jobs', target: 'nursing' },
        { label: '📍 Vijayawada Center & Fees', target: 'center-fees' }
      ]
    }
  ]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const botResponses = {
    german: {
      text: 'Our German training follows CEFR standards (A1 to C2) with native & certified instructors. We have small cohorts (8-12 students), daily speaking drills, and official Goethe-Institut mock tests. Would you like to check levels or batch schedules?',
      options: [
        { label: 'A1 & A2 (Beginners)', target: 'german-a1-a2' },
        { label: 'B1 & B2 (University/Visa)', target: 'german-b1-b2' },
        { label: 'Book Course Counseling', action: 'consult' },
        { label: '← Main Menu', target: 'main' }
      ]
    },
    'german-a1-a2': {
      text: 'Levels A1 & A2 each take 6–8 weeks (80+ hours of live training). Covers essential grammar, daily communication, and basic Goethe A1/A2 exam simulations. Ideal for bachelor/master aspirants and spouse visas.',
      options: [
        { label: 'Check B1/B2 Levels', target: 'german-b1-b2' },
        { label: 'Ask Course Fees on WhatsApp', action: 'whatsapp' },
        { label: '← Back to German', target: 'german' }
      ]
    },
    'german-b1-b2': {
      text: 'B1 and B2 provide professional fluency required for direct German university admissions, Nursing licensures, and job seeker visas. Includes intensive technical vocabulary and Goethe/TestDaF preparation.',
      options: [
        { label: 'Book Free Counseling', action: 'consult' },
        { label: 'Discuss on WhatsApp', action: 'whatsapp' },
        { label: '← Back to German', target: 'german' }
      ]
    },
    'study-germany': {
      text: 'Over 95% of public universities in Germany offer 100% Tuition-Free education! You only pay ~€300/semester for transport. We guide you through APS verification, Uni-Assist applications, Blocked Account setup (€11,208), and the 18-month stay-back visa.',
      options: [
        { label: 'What is APS Certificate?', target: 'aps-info' },
        { label: 'Top Universities (TUM, RWTH)', target: 'top-unis' },
        { label: 'Book Free Profile Assessment', action: 'consult' },
        { label: '← Main Menu', target: 'main' }
      ]
    },
    'aps-info': {
      text: 'The APS certificate is mandatory for Indian students before applying for a German student visa. It verifies that your 10th, 12th, and Bachelor degree transcripts are authentic. OriZen handles your complete APS filing!',
      options: [
        { label: 'Study in Germany Overview', target: 'study-germany' },
        { label: 'WhatsApp an APS Specialist', action: 'whatsapp' },
        { label: '← Main Menu', target: 'main' }
      ]
    },
    'top-unis': {
      text: 'We help students gain admissions into TU Munich (TUM), RWTH Aachen, TU Berlin, KIT, University of Stuttgart, and University of Vienna (Austria).',
      options: [
        { label: 'Schedule University Shortlist Session', action: 'consult' },
        { label: '← Study in Germany', target: 'study-germany' }
      ]
    },
    nursing: {
      text: 'Indian B.Sc. Nurses and GNM diploma holders can work in Germany starting at €3,200 - €4,200/month (~₹3.5L/mo). We assist with German B1/B2 training, translation, German hospital interviews, and official Anerkennung nursing licensure.',
      options: [
        { label: 'Submit Nursing Profile', action: 'consult' },
        { label: 'Chat with Healthcare Advisor', action: 'whatsapp' },
        { label: '← Main Menu', target: 'main' }
      ]
    },
    'center-fees': {
      text: 'Our center is located at Door No: 33-9-22 Barister Street, Seetharampuram, Vijayawada. Open Mon-Sat 8:00 AM - 9:00 PM. We offer transparent fee structures with no hidden costs for language batches and European admissions.',
      options: [
        { label: 'Get Location Map & Timings', action: 'whatsapp' },
        { label: 'Book In-Person Center Visit', action: 'consult' },
        { label: '← Main Menu', target: 'main' }
      ]
    },
    main: {
      text: 'How else can I assist you with your European journey?',
      options: [
        { label: '🇩🇪 German Language (A1-C2)', target: 'german' },
        { label: '🎓 Study in Germany (0€ Tuition)', target: 'study-germany' },
        { label: '🏥 Nursing & Healthcare Jobs', target: 'nursing' },
        { label: '📍 Vijayawada Center & Fees', target: 'center-fees' }
      ]
    }
  };

  const handleOptionClick = (opt) => {
    // User message
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: opt.label
    };

    setMessages((prev) => [...prev, userMsg]);

    if (opt.action === 'consult') {
      onOpenConsultation();
      return;
    }

    if (opt.action === 'whatsapp') {
      window.open('https://wa.me/919502264933?text=Hi%20OriZen,%20I%20am%20chatting%20with%20your%20website%20bot%20and%20need%20expert%20guidance.', '_blank');
      return;
    }

    const nextResponse = botResponses[opt.target] || botResponses['main'];

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          text: nextResponse.text,
          options: nextResponse.options
        }
      ]);
    }, 400);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      
      {/* Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="btn-shimmer relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-brand-orange to-amber-400 text-white shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-transform cursor-pointer border-2 border-white"
          aria-label="Open OriZen Smart Assistant"
        >
          <Bot className="w-6 h-6 sm:w-7 sm:h-7" />
          <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white animate-pulse" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[calc(100vw-2rem)] sm:w-[380px] h-[480px] sm:h-[520px] max-h-[85vh] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-fadeIn">
          
          {/* Header */}
          <div className="bg-brand-navy text-white px-4 sm:px-5 py-3.5 sm:py-4 flex items-center justify-between border-b border-white/10 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-brand-orange/20 border border-brand-orange/40 flex items-center justify-center text-brand-orange shrink-0">
                <Bot className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-xs sm:text-sm text-white flex items-center gap-1.5">
                  <span>OriZen AI Assistant</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </h4>
                <p className="text-[10px] text-slate-300">Online • Instant Answers</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-3.5 sm:p-4 overflow-y-auto space-y-3.5 bg-slate-50 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-brand-navy text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5 text-brand-orange" />
                  </div>
                )}

                <div className="max-w-[85%] space-y-2">
                  <div
                    className={`p-3 sm:p-3.5 rounded-2xl leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-brand-orange text-white rounded-tr-none font-medium text-xs'
                        : 'bg-white text-slate-800 rounded-tl-none border border-slate-200 shadow-sm text-xs'
                    }`}
                  >
                    {msg.text}
                  </div>

                  {/* Bot Options Chips */}
                  {msg.options && (
                    <div className="flex flex-col gap-1 pt-1">
                      {msg.options.map((opt, i) => (
                        <button
                          key={i}
                          onClick={() => handleOptionClick(opt)}
                          className="px-3 py-2 rounded-xl bg-white hover:bg-brand-orange hover:text-white text-brand-navy border border-slate-200 text-left font-bold text-[11px] shadow-sm transition-all flex items-center justify-between group"
                        >
                          <span>{opt.label}</span>
                          <ArrowRight className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-transform shrink-0 ml-1.5" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Footer Escalation */}
          <div className="p-2.5 sm:p-3 bg-white border-t border-slate-200 flex items-center justify-between gap-2">
            <a
              href="https://wa.me/919502264933?text=Hi%20OriZen,%20I%20am%20chatting%20with%20your%20website%20assistant%20and%20want%20to%20speak%20with%20a%20mentor."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 sm:py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm text-center"
            >
              <MessageCircle className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">Talk to Mentor</span>
            </a>
            
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenConsultation();
              }}
              className="py-2 sm:py-2.5 px-3 rounded-xl bg-brand-navy hover:bg-slate-800 text-white font-bold text-xs transition-colors shrink-0"
            >
              Counseling
            </button>
          </div>

        </div>
      )}

    </div>
  );
};

