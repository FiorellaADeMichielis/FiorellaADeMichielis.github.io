import React, { useEffect } from 'react';
import { type Language } from '../data/portfolio';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onNavigate: (index: number) => void;
  projectTitle: string;
  language: Language;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNavigate,
  projectTitle,
  language
}) => {
  // Manejo de teclado (Escape para cerrar, flechas para navegar)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && images.length > 1) {
        onNavigate((currentIndex + 1) % images.length);
      } else if (e.key === 'ArrowLeft' && images.length > 1) {
        onNavigate((currentIndex - 1 + images.length) % images.length);
      }
    };

    // Bloquear scroll de la página mientras el modal está abierto
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen) return null;

  const hasMultipleImages = images.length > 1;

  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 sm:p-6 md:p-8 animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${projectTitle} - ${language === 'es' ? 'Vista ampliada' : 'Enlarged view'}`}
    >
      {/* Barra superior con título, contador y botón cerrar */}
      <div 
        className="w-full max-w-6xl flex items-center justify-between gap-4 mb-3 text-slate-900 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 overflow-hidden">
          <h4 className="font-bold text-sm sm:text-base text-slate-900 truncate">
            {projectTitle}
          </h4>
          {hasMultipleImages && (
            <span className="text-xs font-semibold bg-slate-200 text-brand-400 px-2.5 py-1 rounded-md border border-slate-300 whitespace-nowrap">
              {currentIndex + 1} / {images.length}
            </span>
          )}
        </div>

        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="flex items-center gap-1.5 bg-slate-200 hover:bg-slate-300 text-slate-900 hover:text-white px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-semibold transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-400"
          aria-label={language === 'es' ? 'Cerrar vista ampliada' : 'Close enlarged view'}
        >
          <span>{language === 'es' ? 'Cerrar' : 'Close'}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>

      {/* Contenedor principal de la imagen con flechas */}
      <div 
        className="relative w-full max-w-6xl max-h-[82vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón Anterior */}
        {hasMultipleImages && (
          <button
            onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
            className="absolute left-2 sm:left-4 z-20 bg-slate-900/90 hover:bg-slate-900 text-slate-900 p-2.5 sm:p-3 rounded-full shadow-2xl border border-slate-300 backdrop-blur-sm transition-transform active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-400"
            aria-label={language === 'es' ? 'Imagen anterior' : 'Previous image'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
        )}

        {/* Imagen en tamaño completo sin recorte */}
        <div className="relative max-h-[80vh] flex items-center justify-center overflow-hidden rounded-xl border border-slate-300 bg-slate-950/80 shadow-2xl">
          <img
            src={images[currentIndex]}
            alt={`${projectTitle} - ${language === 'es' ? 'Captura' : 'Screenshot'} ${currentIndex + 1}`}
            className="max-h-[78vh] w-auto max-w-full object-contain select-none"
          />
        </div>

        {/* Botón Siguiente */}
        {hasMultipleImages && (
          <button
            onClick={() => onNavigate((currentIndex + 1) % images.length)}
            className="absolute right-2 sm:right-4 z-20 bg-slate-900/90 hover:bg-slate-900 text-slate-900 p-2.5 sm:p-3 rounded-full shadow-2xl border border-slate-300 backdrop-blur-sm transition-transform active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-400"
            aria-label={language === 'es' ? 'Imagen siguiente' : 'Next image'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        )}
      </div>

      {/* Indicadores y atajos abajo */}
      <div 
        className="mt-3 flex items-center gap-4 text-xs text-slate-500"
        onClick={(e) => e.stopPropagation()}
      >
        {hasMultipleImages && (
          <div className="flex gap-1.5 bg-slate-900/90 px-3 py-1 rounded-full border border-slate-300">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => onNavigate(index)}
                className={`h-2 rounded-full transition-all duration-200 cursor-pointer ${
                  currentIndex === index ? 'bg-brand-400 w-5' : 'bg-slate-600 hover:bg-slate-400 w-2'
                }`}
                aria-label={`${language === 'es' ? 'Ir a imagen' : 'Go to image'} ${index + 1}`}
              />
            ))}
          </div>
        )}
        <span className="hidden sm:inline text-slate-500">
          {language === 'es' ? 'Tip: podés usar las flechas del teclado y Esc' : 'Tip: you can use arrow keys and Esc'}
        </span>
      </div>
    </div>
  );
};
