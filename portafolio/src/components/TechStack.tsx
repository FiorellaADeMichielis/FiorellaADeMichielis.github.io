import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/portfolio';

export const TechStack: React.FC = () => {
  const { language } = useLanguage();
  const { techCategories } = portfolioData;

  const categoryIcons: Record<number, React.ReactNode> = {
    0: (
      // Front-End
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-400">
        <rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/>
      </svg>
    ),
    1: (
      // Back-End
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-400">
        <rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>
      </svg>
    ),
    2: (
      // Databases
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-400">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>
      </svg>
    ),
    3: (
      // Architecture & Engineering
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-400">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
    4: (
      // Tools & Others
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-400">
        <polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/>
      </svg>
    )
  };

  return (
    <section className="mb-20">
      <div className="mb-8 pb-4 border-b border-slate-300">
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
          {language === 'es' ? 'Habilidades & Stack Tecnológico' : 'Skills & Tech Stack'}
        </h3>
        <p className="text-sm text-slate-600 mt-1">
          {language === 'es' 
            ? 'Dominio técnico con especialización en Front-End, integración backend, bases de datos y principios de arquitectura.' 
            : 'Technical proficiency specializing in Front-End, backend integration, databases, and architectural principles.'}
        </p>
      </div>
      
      {/* Grid de 5 categorías en modo oscuro */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techCategories.map((category, index) => {
          const isFrontEnd = index === 0;
          return (
            <div 
              key={category.title.es}
              className={`bg-slate-100 rounded-xl border p-6 shadow-sm transition-all duration-200 flex flex-col justify-between ${
                isFrontEnd 
                  ? 'border-brand-500/50 ring-1 ring-brand-500/30 md:col-span-2 lg:col-span-1' 
                  : 'border-slate-300 hover:border-slate-400'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-2.5">
                    {categoryIcons[index]}
                    <h4 className="text-base font-bold text-slate-900">
                      {category.title[language]}
                    </h4>
                  </div>
                  {isFrontEnd && (
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded bg-brand-500/15 text-brand-300 border border-brand-500/30">
                      {language === 'es' ? 'Enfoque Principal' : 'Primary Focus'}
                    </span>
                  )}
                </div>

                <ul className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li 
                      key={skill.name} 
                      className={`text-xs px-3 py-1.5 rounded-lg border transition-colors cursor-default ${
                        isFrontEnd
                          ? 'bg-brand-950/60 text-brand-100 border-brand-500/40 font-semibold hover:border-brand-400 hover:text-white'
                          : 'bg-slate-200 text-slate-900 border-slate-300 font-medium hover:border-brand-400 hover:text-brand-300'
                      }`}
                    >
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};