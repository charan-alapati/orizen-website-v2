export const jobsData = {
  sectors: [
    {
      id: 'healthcare',
      title: 'Healthcare & Registered Nursing',
      country: 'Germany & Austria',
      icon: 'HeartPulse',
      tag: 'Critical Shortage / Fast-Track Visa',
      color: 'from-rose-500/10 to-red-500/10 border-rose-500/30',
      textColor: 'text-rose-600',
      salaryRange: '€3,200 - €4,500 / month (~₹3.2L - ₹4.5L/mo)',
      demandLevel: 'Extreme (Over 200,000 Open Positions in Germany)',
      requirements: [
        'B.Sc. Nursing or GNM Diploma with valid state nursing council registration',
        'German Language Proficiency: B1/B2 Level certified (Goethe/telc)',
        'Minimum 6-12 months of clinical hospital experience'
      ],
      benefits: [
        'Direct employer sponsorship with German government-approved hospitals & clinics',
        'Relocation allowance + Initial subsidized hospital housing',
        'Permanent European residency (PR) eligibility within 2-3 years',
        'Family reunification: Bring spouse & children with full work rights'
      ],
      anerkennungProcess: 'Full recognition of Indian nursing qualification (Defizitbescheid & adaptation course assistance).'
    },
    {
      id: 'tech-it',
      title: 'IT, Software & Cloud Engineering',
      country: 'Germany, Netherlands & Ireland',
      icon: 'Code2',
      tag: 'High Salary & EU Blue Card Fast Track',
      color: 'from-blue-500/10 to-cyan-500/10 border-blue-500/30',
      textColor: 'text-blue-600',
      salaryRange: '€55,000 - €90,000 / year (~₹55L - ₹90L/yr)',
      demandLevel: 'High (Over 100,000 Tech Openings)',
      requirements: [
        'B.Tech / B.E. / MCA in Computer Science, IT, Data Science, or related fields',
        '2+ years experience in Full-Stack, Java, Python, Cloud (AWS/Azure), or DevOps',
        'Professional English fluency (German B1 is a massive career booster)'
      ],
      benefits: [
        'Instant qualification for EU Blue Card with lowered salary thresholds',
        'Option for PR after only 21 months of German employment (with B1 German)',
        'Cutting-edge R&D centers in Berlin, Munich, Frankfurt, and Amsterdam',
        'Generous paid annual leave (28-30 days paid vacation/year)'
      ],
      anerkennungProcess: 'ZAB (Central Office for Foreign Education) comparability statement.'
    },
    {
      id: 'green-engineering',
      title: 'Mechanical, Automotive & Green Energy',
      country: 'Germany & Austria',
      icon: 'Zap',
      tag: 'Industrial Powerhouse',
      color: 'from-emerald-500/10 to-teal-500/10 border-emerald-500/30',
      textColor: 'text-emerald-600',
      salaryRange: '€50,000 - €78,000 / year (~₹50L - ₹78L/yr)',
      demandLevel: 'Very High (Transition to EV, Battery & Solar/Wind Power)',
      requirements: [
        'Degree in Mechanical, Electrical, Mechatronics, Automotive, or Renewable Energy',
        'Experience with CAD/CAM, PLC, battery management systems, or automation',
        'German Language B1/B2 recommended for German manufacturing plants'
      ],
      benefits: [
        'Work with world leaders: Siemens, Bosch, BMW, Mercedes-Benz, Volkswagen',
        'Strong collective bargaining worker protections and career longevity',
        'Relocation package support and structured onboarding training'
      ],
      anerkennungProcess: 'IHK FOSA / Engineering Council qualification evaluation.'
    },
    {
      id: 'hospitality',
      title: 'Luxury Hospitality & Culinary Arts',
      country: 'Switzerland & Austria',
      icon: 'Utensils',
      tag: '5-Star Alpine & Urban Resorts',
      color: 'from-amber-500/10 to-orange-500/10 border-amber-500/30',
      textColor: 'text-amber-600',
      salaryRange: 'CHF 4,000 - 5,500 / month (~₹3.8L - ₹5.2L/mo in Swiss Francs)',
      demandLevel: 'High in Luxury Hotels, Fine Dining & Ski Resorts',
      requirements: [
        'Degree/Diploma in Hotel Management, Culinary Arts, or F&B Service',
        'Fluency in English + Conversational German or French (A2/B1)',
        'Passionate customer service mindset and luxury hotel grooming'
      ],
      benefits: [
        'World-class hospitality pedigree on your global resume',
        'Accommodation and gourmet meals frequently provided by resort employers',
        'High tax-free tip earnings and seasonal contract renewals'
      ],
      anerkennungProcess: 'Direct hospitality trade certificate verification.'
    }
  ],
  anerkennungSteps: [
    {
      step: '01',
      title: 'Document Dossier Preparation & Certified Translation',
      desc: 'All degree certificates, mark sheets, clinical transcripts, and experience letters are translated into German by sworn legal translators.'
    },
    {
      step: '02',
      title: 'State Authority Submission (Defizitbescheid)',
      desc: 'Dossier is filed with the relevant German state authority (Landesprüfungsamt / IHK FOSA) to assess curriculum equivalence.'
    },
    {
      step: '03',
      title: 'Deficit Notice & Adaptation Training',
      desc: 'Any slight curricular difference is bridged through a short adaptation course or employer-sponsored practical training in Germany.'
    },
    {
      step: '04',
      title: 'Official Licensure (Urkunde) & Permanent Contract',
      desc: 'Full German state license (e.g. Staatlich anerkannte Pflegefachkraft) is awarded, guaranteeing equal German salaries and lifetime job security.'
    }
  ]
};
