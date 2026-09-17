import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/portfolio';

export const EducationSection: React.FC = () => {
  const { language } = useLanguage();
  const { education, complementaryTraining, languages } = portfolioData;

  return (
    <section className="mb-20">
      <div className="mb-8 pb-4 border-b border-slate-300">
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
          {language === 'es' ? 'Educación, Formación & Idiomas' : 'Education, Training & Languages'}
        </h3>
        <p className="text-sm text-slate-600 mt-1">
          {language === 'es' 
            ? 'Formación académica universitaria, programas de especialización y competencias lingüísticas.' 
            : 'University academic background, specialized programs, and linguistic proficiencies.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Columna Izquierda: Educación & Formación */}
        <div className="space-y-6">
          {/* Educación Universitaria */}
          <div className="bg-slate-100 rounded-xl border border-slate-300 p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-400">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
              <h4 className="text-xs font-bold text-brand-400 uppercase tracking-widest">
                {language === 'es' ? 'Educación Universitaria' : 'University Education'}
              </h4>
            </div>

            {education.map((item) => (
              <div key={item.id} className="space-y-2">
                <div className="flex items-baseline justify-between gap-2 flex-wrap">
                  <h5 className="text-lg font-bold text-slate-900">
                    {item.degree[language]}
                  </h5>
                  <span className="text-xs font-semibold text-brand-300 bg-brand-500/15 px-2.5 py-0.5 rounded border border-brand-500/30">
                    {item.status[language]}
                  </span>
                </div>

                <p className="text-sm font-medium text-slate-600">
                  {item.institution}
                </p>

                <p className="text-xs text-slate-500 font-mono">
                  {item.period}
                </p>

                {item.intermediateDegree && (
                  <div className="pt-2 mt-2 border-t border-slate-300/60">
                    <p className="text-sm font-medium text-slate-700 flex items-center gap-1.5">
                      <span className="text-brand-400 font-bold">›</span>
                      <span>{item.intermediateDegree[language]}</span>
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Formación Complementaria */}
          <div className="bg-slate-100 rounded-xl border border-slate-300 p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-400">
                <path d="m16 6 4 14"/>
                <path d="M12 6v14"/>
                <path d="M8 8v12"/>
                <path d="M4 4v16"/>
              </svg>
              <h4 className="text-xs font-bold text-brand-400 uppercase tracking-widest">
                {language === 'es' ? 'Formación Complementaria' : 'Complementary Training'}
              </h4>
            </div>

            {complementaryTraining.map((item) => (
              <div key={item.id} className="space-y-1.5">
                <div className="flex items-baseline justify-between gap-2 flex-wrap">
                  <h5 className="text-base font-bold text-slate-900">
                    {item.program[language]}
                  </h5>
                  <span className="text-xs text-slate-500 font-mono">
                    {item.period}
                  </span>
                </div>
                <p className="text-sm text-slate-600">
                  {item.institution}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Columna Derecha: Idiomas */}
        <div className="bg-slate-100 rounded-xl border border-slate-300 p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-400">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              <h4 className="text-xs font-bold text-brand-400 uppercase tracking-widest">
                {language === 'es' ? 'Competencias en Idiomas' : 'Language Proficiencies'}
              </h4>
            </div>

            <div className="space-y-5">
              {languages.map((lang) => (
                <div 
                  key={lang.name.es} 
                  className="p-4 rounded-lg bg-slate-200 border border-slate-300 flex items-center justify-between gap-4 shadow-sm"
                >
                  <div>
                    <h5 className="text-base font-bold text-slate-900">
                      {lang.name[language]}
                    </h5>
                    <p className="text-xs text-slate-600 mt-0.5">
                      {lang.description[language]}
                    </p>
                  </div>

                  <span className="px-3 py-1 text-sm font-bold bg-brand-500/15 text-brand-300 border border-brand-500/30 rounded-md">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-300/60 text-xs text-slate-500 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-400 shrink-0">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
            </svg>
            <span>
              {language === 'es' 
                ? 'Niveles validados según estándares marco MCER / CEFR.' 
                : 'Proficiency levels aligned with CEFR standards.'}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
