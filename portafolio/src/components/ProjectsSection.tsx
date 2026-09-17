import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/portfolio';
import { ProjectCard } from './ProjectCard';

export const ProjectsSection: React.FC = () => {
  const { language } = useLanguage();
  const { projects } = portfolioData;

  return (
    <section className="mb-20">
      <div className="mb-8 pb-4 border-b border-slate-300">
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
          {language === 'es' ? 'Proyectos Técnicos Destacados' : 'Featured Technical Projects'}
        </h3>
        <p className="text-sm text-slate-600 mt-1">
          {language === 'es' 
            ? 'Aplicaciones web interactivas, arquitecturas asíncronas y plataformas de ingeniería de software.' 
            : 'Interactive web apps, asynchronous architectures, and software engineering platforms.'}
        </p>
      </div>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            isReversed={index % 2 !== 0} 
          />
        ))}
      </div>
    </section>
  );
};