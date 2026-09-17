import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/portfolio';

export const Header: React.FC = () => {
  const { language } = useLanguage();
  const { personal } = portfolioData;

  return (
    <header className="py-12 md:py-20 max-w-5xl mx-auto">
      
      {/* SECCIÓN PRINCIPAL */}
      <div className="flex flex-col items-start text-left mb-12">
        
        {/* Indicador de Estado */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-200 border border-slate-300 mb-6 shadow-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-400"></span>
          </span>
          <span className="text-xs font-semibold text-brand-300 uppercase tracking-wider">
            {language === 'es' ? 'Disponible para nuevas oportunidades' : 'Available for opportunities'}
          </span>
        </div>

        {/* Nombre */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight text-slate-900 pb-1">
          {personal.name}
        </h1>
        
        {/* Rol Profesional con orientación Front-End */}
        <h2 className="text-brand-400 font-semibold text-xl sm:text-2xl md:text-3xl mb-6 tracking-wide">
          {personal.role[language]}
        </h2>
        
        {/* Biografía Técnica */}
        <p className="text-slate-700 mb-8 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl font-normal">
          {personal.bio[language]}
        </p>
        
        {/* Botones y Enlaces Profesionales */}
        <div className="flex flex-wrap gap-4 mb-8">
          <a 
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2.5 bg-brand-500 hover:bg-brand-400 text-slate-950 px-7 py-3 rounded-lg font-semibold transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            <span>{language === 'es' ? 'Enviar Email' : 'Send Email'}</span>
          </a>
          
          <a 
            href={personal.github}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-slate-200 text-slate-900 border border-slate-300 px-7 py-3 rounded-lg font-medium hover:border-brand-400 hover:text-brand-300 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.37 4.37 0 0 0 9 18v4"/><path d="M12 18v-2"/><path d="m9 18-1.5-1.5"/>
            </svg>
            <span>GitHub Profile</span>
          </a>
        </div>

        {/* Barra de Contacto Rápido */}
        <div className="flex items-center gap-6 text-xs text-slate-500 flex-wrap">
          <span className="flex items-center gap-1.5">
            <span className="text-brand-400 font-semibold">Email:</span>
            <span className="text-slate-900 font-medium">{personal.email}</span>
          </span>
          <span className="text-slate-400">•</span>
          <span className="flex items-center gap-1.5">
            <span className="text-brand-400 font-semibold">GitHub:</span>
            <span className="text-slate-900 font-medium">FiorellaADeMichielis</span>
          </span>
        </div>

      </div>
    </header>
  );
};