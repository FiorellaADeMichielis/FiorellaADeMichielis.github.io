import React, { useState } from 'react';
import { type Project } from '../data/portfolio';
import { useLanguage } from '../context/LanguageContext';
import { ImageModal } from './ImageModal';

interface ProjectCardProps {
  project: Project;
  isReversed?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, isReversed = false }) => {
  const { language } = useLanguage();
  
  // Estado para controlar la imagen actual del carrusel y el modal
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Funciones para navegar en el carrusel
  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImgIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImgIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const hasImages = Boolean(project.images && project.images.length > 0);
  const hasMultipleImages = hasImages && project.images.length > 1;
  const isLiveDemo = project.link && !project.link.includes('github.com');

  if (!hasImages) {
    return (
      <article className="bg-slate-100 rounded-xl overflow-hidden border border-slate-300 shadow-sm p-6 md:p-8 lg:p-10 transition-all hover:border-slate-400">
        <div>
          {/* Título y Badge de Estado */}
          <div className="flex items-center flex-wrap gap-2.5 mb-2">
            <h4 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight">
              {project.title}
            </h4>
            {project.status === 'in-progress' && (
              <span className="bg-brand-500/15 text-brand-300 border border-brand-500/30 text-xs font-semibold px-2.5 py-0.5 rounded-md whitespace-nowrap">
                {language === 'es' ? 'En desarrollo' : 'In Development'}
              </span>
            )}
          </div>
          
          {/* Subtítulo (Rol / Contexto) */}
          <p className="text-brand-400 text-xs font-medium mb-4">
            {project.subtitle[language]}
          </p>
          
          {/* Stack Tecnológico */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.techStack.map((tech) => (
              <span 
                key={tech} 
                className="text-xs font-medium bg-slate-200 text-slate-900 border border-slate-300 px-2.5 py-1 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* Descripción */}
          <div className="text-sm text-slate-700 space-y-3 mb-6">
            {project.description[language].map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Botón de Enlace o Indicador de Repositorio */}
        <div className="pt-4 border-t border-slate-300">
          {project.link ? (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:text-brand-300 transition-colors group"
            >
              <span>
                {isLiveDemo 
                  ? (language === 'es' ? 'Ver aplicación en vivo' : 'View Live Application')
                  : (language === 'es' ? 'Ver repositorio en GitHub' : 'View GitHub Repository')}
              </span>
              {isLiveDemo ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 -translate-y-0.5 transition-transform text-brand-400">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform text-brand-400">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              )}
            </a>
          ) : (
            <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 cursor-default">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              <span>{language === 'es' ? 'Proyecto en desarrollo / Código privado' : 'Project in development / Private code'}</span>
            </div>
          )}
        </div>
      </article>
    );
  }

  return (
    <>
      <article className={`bg-slate-100 rounded-xl overflow-hidden border border-slate-300 shadow-sm flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} transition-all hover:border-slate-400`}>
        
        {/* Sección de la Imagen (Vista previa completa, sin recortar, clickeable para ampliar) */}
        <div 
          onClick={() => setIsModalOpen(true)}
          className={`md:w-1/2 bg-slate-950 relative flex flex-col justify-between ${isReversed ? 'md:border-l' : 'md:border-r'} border-slate-300 group cursor-zoom-in min-h-[280px] sm:min-h-[340px] md:min-h-[380px]`}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              setIsModalOpen(true);
            }
          }}
          aria-label={`${project.title} - ${language === 'es' ? 'Click para ampliar imagen' : 'Click to enlarge image'}`}
        >
          {/* Barra superior estilo ventana/browser */}
          <div className="flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-300/60 text-xs text-slate-500 select-none z-10">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
              <span className="ml-2 text-slate-500 font-medium hidden sm:inline truncate max-w-[200px]">
                {project.id}.app
              </span>
            </div>

            {/* Indicador de acción para ampliar */}
            <span className="flex items-center gap-1 text-slate-500 group-hover:text-brand-400 transition-colors font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>
              </svg>
              <span className="hidden sm:inline">
                {language === 'es' ? 'Ampliar' : 'Enlarge'}
              </span>
            </span>
          </div>

          {/* Área de la imagen con vista previa completa (object-contain, sin recortes) */}
          <div className="relative grow flex items-center justify-center p-3 sm:p-4 overflow-hidden">
            <img 
              src={project.images[currentImgIndex]} 
              alt={`${project.title} - Captura ${currentImgIndex + 1}`} 
              className="max-h-[300px] md:max-h-[340px] w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              loading="lazy"
            />

            {/* Overlay sutil al pasar el cursor */}
            <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
              <span className="bg-slate-900 text-slate-900 text-xs font-medium px-3.5 py-1.5 rounded-full border border-slate-300 flex items-center gap-2 shadow-xl backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-400">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                </svg>
                <span>{language === 'es' ? 'Click para ver en pantalla completa' : 'Click to view full screen'}</span>
              </span>
            </div>

            {/* Controles del carrusel en la vista previa */}
            {hasMultipleImages && (
              <>
                {/* Botón Anterior */}
                <button 
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-slate-900/90 hover:bg-slate-900 text-slate-900 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-brand-400 cursor-pointer z-10 border border-slate-300"
                  aria-label={language === 'es' ? 'Imagen anterior' : 'Previous image'}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6"/>
                  </svg>
                </button>

                {/* Botón Siguiente */}
                <button 
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-900/90 hover:bg-slate-900 text-slate-900 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-brand-400 cursor-pointer z-10 border border-slate-300"
                  aria-label={language === 'es' ? 'Imagen siguiente' : 'Next image'}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </button>
              </>
            )}
          </div>

          {/* Barra inferior de indicadores del carrusel */}
          {hasMultipleImages && (
            <div 
              className="flex items-center justify-center py-2 bg-slate-950/90 border-t border-slate-300/60 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex gap-1.5">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImgIndex(index);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                      currentImgIndex === index ? 'bg-brand-400 w-5' : 'bg-slate-500 hover:bg-slate-400 w-2'
                    }`}
                    aria-label={`${language === 'es' ? 'Ir a captura' : 'Go to screenshot'} ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Sección del Contenido */}
        <div className="md:w-1/2 p-6 md:p-8 lg:p-10 flex flex-col justify-between">
          <div>
            {/* Título y Badge de Estado */}
            <div className="flex items-center flex-wrap gap-2.5 mb-2">
              <h4 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight">
                {project.title}
              </h4>
              {project.status === 'in-progress' && (
                <span className="bg-brand-500/15 text-brand-300 border border-brand-500/30 text-xs font-semibold px-2.5 py-0.5 rounded-md whitespace-nowrap">
                  {language === 'es' ? 'En desarrollo' : 'In Development'}
                </span>
              )}
            </div>
            
            {/* Subtítulo (Rol / Contexto) */}
            <p className="text-brand-400 text-xs font-medium mb-4">
              {project.subtitle[language]}
            </p>
            
            {/* Stack Tecnológico */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.techStack.map((tech) => (
                <span 
                  key={tech} 
                  className="text-xs font-medium bg-slate-200 text-slate-900 border border-slate-300 px-2.5 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {/* Descripción */}
            <div className="text-sm text-slate-700 space-y-3 mb-6">
              {project.description[language].map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          
          {/* Botón de Enlace o Indicador de Repositorio */}
          <div className="pt-4 border-t border-slate-300">
            {project.link ? (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:text-brand-300 transition-colors group"
              >
                <span>
                  {isLiveDemo 
                    ? (language === 'es' ? 'Ver aplicación en vivo' : 'View Live Application')
                    : (language === 'es' ? 'Ver repositorio en GitHub' : 'View GitHub Repository')}
                </span>
                {isLiveDemo ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 -translate-y-0.5 transition-transform text-brand-400">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform text-brand-400">
                    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                  </svg>
                )}
              </a>
            ) : (
              <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 cursor-default">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500">
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                <span>{language === 'es' ? 'Proyecto en desarrollo / Código privado' : 'Project in development / Private code'}</span>
              </div>
            )}
          </div>
          
        </div>
      </article>

      {/* Modal / Lightbox para ver la imagen ampliada en tamaño completo */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={project.images}
        currentIndex={currentImgIndex}
        onNavigate={setCurrentImgIndex}
        projectTitle={project.title}
        language={language}
      />
    </>
  );
};