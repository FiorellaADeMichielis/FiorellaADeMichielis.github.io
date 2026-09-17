import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <nav className="max-w-5xl mx-auto px-6 py-6 flex justify-end">
      <button
        onClick={toggleLanguage}
        aria-label="Toggle language"
        className="group inline-flex items-center gap-2 bg-slate-200 text-slate-900 text-xs font-semibold px-4 py-2 rounded-lg border border-slate-300 shadow-sm hover:border-brand-400 hover:text-brand-300 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-400"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
          className="w-4 h-4 text-brand-400 group-hover:rotate-12 transition-transform duration-200"
        >
          <circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/>
        </svg>
        <span>{language === 'es' ? 'EN / English' : 'ES / Español'}</span>
      </button>
    </nav>
  );
};