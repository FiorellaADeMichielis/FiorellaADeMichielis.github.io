import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <nav 
      aria-label={language === 'es' ? 'Selector de idioma' : 'Language selector'}
      className="max-w-5xl mx-auto px-6 pt-6 pb-2 flex justify-end items-center"
    >
      <div className="flex items-center gap-2">
        {/* Ícono de globo y etiqueta contextual sutil */}
        <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-500 font-medium select-none mr-1">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="14" 
            height="14" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-slate-400"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            <path d="M2 12h20"/>
          </svg>
          <span>{language === 'es' ? 'Idioma' : 'Language'}</span>
        </span>

        {/* Control segmentado claro e intuitivo (ES / EN) */}
        <div 
          role="tablist" 
          aria-label={language === 'es' ? 'Seleccionar idioma' : 'Select language'}
          className="inline-flex items-center p-1 bg-slate-100 rounded-lg border border-slate-300 shadow-sm"
        >
          {/* Opción Español */}
          <button
            type="button"
            role="tab"
            aria-selected={language === 'es'}
            onClick={() => setLanguage('es')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-400 ${
              language === 'es'
                ? 'bg-slate-200 text-slate-900 border border-brand-400/40 shadow-sm font-bold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-200/50 border border-transparent font-medium'
            }`}
          >
            {language === 'es' && (
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" aria-hidden="true"></span>
            )}
            <span>ES</span>
            <span className="hidden md:inline text-[11px] opacity-75 font-normal">Español</span>
          </button>

          {/* Divisor vertical sutil */}
          <span className="w-px h-3.5 bg-slate-300/80 mx-0.5" aria-hidden="true"></span>

          {/* Opción Inglés */}
          <button
            type="button"
            role="tab"
            aria-selected={language === 'en'}
            onClick={() => setLanguage('en')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-400 ${
              language === 'en'
                ? 'bg-slate-200 text-slate-900 border border-brand-400/40 shadow-sm font-bold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-200/50 border border-transparent font-medium'
            }`}
          >
            {language === 'en' && (
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" aria-hidden="true"></span>
            )}
            <span>EN</span>
            <span className="hidden md:inline text-[11px] opacity-75 font-normal">English</span>
          </button>
        </div>
      </div>
    </nav>
  );
};