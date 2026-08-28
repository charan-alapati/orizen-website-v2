export const coursesData = {
  german: {
    id: 'german',
    title: 'German Language Mastery',
    subtitle: 'From Absolute Beginner (A1) to Advanced Fluency (C2)',
    code: 'DE',
    flag: '🇩🇪',
    color: 'from-amber-500/20 to-orange-500/20',
    accentColor: '#f97316',
    description: 'Our German curriculum strictly adheres to the Common European Framework of Reference for Languages (CEFR). Tailored for engineering, healthcare professionals, and university aspirants aiming for top German institutions.',
    certifications: ['Goethe-Zertifikat', 'TestDaF', 'telc Deutsch', 'ÖSD'],
    stats: {
      successRate: '99.4%',
      avgWeeksPerLevel: '6-8 Weeks',
      batchSize: '8-12 Students',
      trainerType: 'C1/C2 Certified Native & Indian Experts'
    },
    levels: [
      {
        level: 'A1',
        name: 'Absolute Beginner',
        duration: '6-8 Weeks',
        hours: '80+ Hours',
        tag: 'Foundation',
        description: 'Understand and use familiar everyday expressions, basic greetings, self-introductions, ordering food, and asking simple directions.',
        outcomes: [
          'Master German alphabet, phonetic pronunciation & basic grammar',
          'Introduce yourself, family, background, and daily routines',
          'Order food, shop, tell time, and understand everyday numbers',
          'Read simple signs, forms, and short emails'
        ],
        idealFor: 'Beginners planning bachelor/master studies or spouses joining in Germany.'
      },
      {
        level: 'A2',
        name: 'Elementary German',
        duration: '6-8 Weeks',
        hours: '90+ Hours',
        tag: 'Everyday Fluency',
        description: 'Communicate in simple, routine tasks requiring a direct exchange of information on familiar topics like shopping, work, and surroundings.',
        outcomes: [
          'Form past, present, and future tense conversations effortlessly',
          'Discuss past events, work responsibilities, and hobbies',
          'Handle routine bank, grocery, and public transport inquiries',
          'Write short informal letters and personal updates'
        ],
        idealFor: 'Students preparing for student visa interviews and basic workplace communication.'
      },
      {
        level: 'B1',
        name: 'Intermediate (Independent User)',
        duration: '8-10 Weeks',
        hours: '120+ Hours',
        tag: 'Visa & Job Ready',
        description: 'Understand the main points of clear standard input on familiar matters. Deal with most travel situations in German-speaking countries.',
        outcomes: [
          'Express thoughts, opinions, dreams, hopes, and career ambitions',
          'Narrate stories, explain viewpoints, and give reasons for plans',
          'Handle unscripted conversations at German universities & workplaces',
          'Comprehensive Goethe-Zertifikat B1 mock tests with feedback'
        ],
        idealFor: 'Mandatory minimum requirement for many German Master degrees, Ausbildung & job seekers.'
      },
      {
        level: 'B2',
        name: 'Upper Intermediate (Professional Fluency)',
        duration: '8-10 Weeks',
        hours: '140+ Hours',
        tag: 'Direct University Entry',
        description: 'Understand complex technical texts, interact with native speakers with fluency and spontaneity without strain for either party.',
        outcomes: [
          'Participate actively in technical and academic seminars in German',
          'Write clear, detailed essays on complex subjects and opposing views',
          'Master clinical/nursing vocabulary or technical engineering terms',
          'Goethe-Zertifikat B2 & TestDaF targeted exam prep modules'
        ],
        idealFor: 'Direct admission to German-taught university degrees, Nurses & Healthcare licensures.'
      },
      {
        level: 'C1 & C2',
        name: 'Advanced & Mastery',
        duration: '10-12 Weeks',
        hours: '160+ Hours',
        tag: 'Academic Mastery',
        description: 'Express ideas fluently and spontaneously for academic, professional, and research purposes without searching for expressions.',
        outcomes: [
          'Produce clear, well-structured, detailed text on complex subjects',
          'Understand demanding, longer texts and recognize implicit meaning',
          'Doctorate level research presentation skills and formal debate fluency'
        ],
        idealFor: 'Medical Doctors (Approbation), Academic Researchers, and Legal translators.'
      }
    ],
    features: [
      { title: 'Interactive Smart Classes', desc: 'Live digital whiteboard, recorded lectures for revision, and interactive audio drills.' },
      { title: 'Official Exam Simulation', desc: 'Real Goethe-Institut & TestDaF mock tests with 1-on-1 speaking evaluation.' },
      { title: 'Small Cohorts (Max 12)', desc: 'Guaranteed individual speaking time with personalized pronunciation feedback.' },
      { title: 'Cultural Immersion Sessions', desc: 'Learn German etiquettes, workplace culture, dialect nuances, and life in DACH region.' }
    ]
  },
  french: {
    id: 'french',
    title: 'French Language Programs',
    subtitle: 'DELF/DALF & TEF Canada Immigration Excellence',
    code: 'FR',
    flag: '🇫🇷',
    color: 'from-blue-500/20 to-indigo-500/20',
    accentColor: '#2563eb',
    description: 'Expert-led French training designed for study in France, Switzerland, Belgium, and Canada PR points via TEF/TCF Canada exams.',
    certifications: ['DELF (A1-B2)', 'DALF (C1-C2)', 'TEF Canada', 'TCF'],
    stats: {
      successRate: '98.8%',
      avgWeeksPerLevel: '6-8 Weeks',
      batchSize: '8-12 Students',
      trainerType: 'DELF Certified Trainers'
    },
    levels: [
      {
        level: 'A1-A2',
        name: 'French Fundamentals',
        duration: '12-14 Weeks',
        hours: '150+ Hours',
        tag: 'Basic Communication',
        description: 'Build robust foundational grammar, everyday conversational fluency, and French cultural literacy.',
        outcomes: ['Introduce yourself & daily life in French', 'Basic travel, dining, and shopping dialogues', 'Phonetics & liaison pronunciation rules']
      },
      {
        level: 'B1-B2',
        name: 'Professional & TEF Canada Ready',
        duration: '14-16 Weeks',
        hours: '200+ Hours',
        tag: 'Canada PR & University',
        description: 'High-level fluency for French-taught universities in France/Quebec and maximum Express Entry immigration points.',
        outcomes: ['Flawless essay writing and argumentation', 'Listen to French radio broadcasts & news', 'Intensive TEF Canada speaking & writing workshops']
      }
    ],
    features: [
      { title: 'TEF / TCF Canada Coaching', desc: 'Targeted strategies for CLB 7+ in all 4 bands for Canadian PR boosts.' },
      { title: 'Alliance Française Exam Prep', desc: 'Authorized mock papers with native listening audio tracks.' }
    ]
  },
  italian: {
    id: 'italian',
    title: 'Italian Language & Culture',
    subtitle: 'Gateway to Art, Design, Engineering & Italian Universities',
    code: 'IT',
    flag: '🇮🇹',
    color: 'from-emerald-500/20 to-teal-500/20',
    accentColor: '#10b981',
    description: 'Master Italian for universities like Politecnico di Milano, Sapienza, and Italian luxury brand design programs.',
    certifications: ['CILS', 'CELI', 'PLIDA'],
    stats: {
      successRate: '99.1%',
      avgWeeksPerLevel: '6-8 Weeks',
      batchSize: '8-10 Students',
      trainerType: 'Certified Italian Instructors'
    },
    levels: [
      {
        level: 'A1-B1',
        name: 'Italian Essentials to Intermediate',
        duration: '12-16 Weeks',
        hours: '160+ Hours',
        tag: 'Study & Travel',
        description: 'Comprehensive Italian grammar, conversational mastery, and cultural orientation for Italian university life.',
        outcomes: ['Understand Italian conversational nuances', 'Academic communication in Italian campus life', 'CILS B1/B2 exam readiness']
      }
    ],
    features: [
      { title: 'Fashion & Tech Focus', desc: 'Specialized vocabulary modules for Architecture, Fashion, and Automotive design students.' }
    ]
  },
  english: {
    id: 'english',
    title: 'English Proficiency & Test Prep',
    subtitle: 'IELTS Band 7.5+ | TOEFL | PTE Academic Masterclasses',
    code: 'EN',
    flag: '🇬🇧',
    color: 'from-purple-500/20 to-pink-500/20',
    accentColor: '#8b5cf6',
    description: 'High-score strategy training for global admissions, academic SOP drafting, and embassy visa interviews.',
    certifications: ['IELTS Academic', 'TOEFL iBT', 'PTE Academic', 'Duolingo English Test'],
    stats: {
      successRate: '99.6%',
      avgWeeksPerLevel: '4-6 Weeks',
      batchSize: '10-15 Students',
      trainerType: 'British Council & IDP Certified'
    },
    levels: [
      {
        level: 'IELTS 7.5+ Bootcamp',
        name: 'Intensive Score Booster',
        duration: '4-6 Weeks',
        hours: '60+ Hours',
        tag: 'High Band Score',
        description: 'Targeted band 7.5 to 8.5 strategies for Academic Reading, Task 2 Essay Writing, and Fluency in Speaking.',
        outcomes: ['Master Academic Task 1 graph summaries', 'Advanced vocabulary & lexical resource training', 'Over 20 full-length timed mock tests']
      }
    ],
    features: [
      { title: 'Personalized SOP Guidance', desc: '1-on-1 Statement of Purpose & Motivation Letter review by senior mentors.' }
    ]
  }
};
