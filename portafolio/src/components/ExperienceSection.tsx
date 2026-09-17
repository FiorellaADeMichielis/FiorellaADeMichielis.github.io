import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/portfolio';

export const ExperienceSection: React.FC = () => {
  const { language } = useLanguage();
  const { experience } = portfolioData;

  return (
    <section className="mb-20">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 pb-4 border-b border-slate-300">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
            {language === 'es' ? 'Experiencia Profesional' : 'Professional Experience'}
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            {language === 'es' 
              ? 'Trayectoria en desarrollo web y soluciones frontend para proyectos reales y clientes.' 
              : 'Track record in web development and frontend solutions for real projects and clients.'}
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {experience.map((item) => (
          <article 
            key={item.id} 
            className="bg-slate-100 rounded-xl border border-slate-300 p-6 md:p-8 hover:border-slate-400 transition-colors shadow-sm"
          >
            {/* Cabecera de la Experiencia */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
              <div>
                <div className="flex items-center flex-wrap gap-2.5 mb-1">
                  <h4 className="text-xl md:text-2xl font-bold text-slate-900">
                    {item.role[language]}
                  </h4>
                  <span className="text-brand-400 font-semibold text-base md:text-lg">
                    @{item.company}
                  </span>
                  {item.current && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-brand-500/15 text-brand-300 border border-brand-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse"></span>
                      {language === 'es' ? 'Actual' : 'Current'}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <span>{item.type[language]}</span>
                  <span>•</span>
                  <span>{item.period[language]}</span>
                </div>
              </div>

              {/* Badges de Tecnologías principales */}
              <div className="flex flex-wrap gap-1.5 md:justify-end max-w-md">
                {item.techStack.map((tech) => (
                  <span 
                    key={tech} 
                    className="text-xs bg-slate-200 text-slate-900 border border-slate-300 px-2.5 py-1 rounded-md font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Puntos y Responsabilidades */}
            <ul className="space-y-3 mt-5">
              {item.description[language].map((point, index) => (
                <li key={index} className="text-sm text-slate-700 flex items-start gap-2.5 leading-relaxed">
                  <span className="text-brand-400 mt-0.5 shrink-0 font-bold">›</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};
