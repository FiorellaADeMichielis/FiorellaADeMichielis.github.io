import React, { createContext, useState, useContext, type ReactNode } from 'react';
import {type Language } from '../data/portfolio';

// Definimos qué datos va a exponer nuestro contexto
interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

// Creamos el contexto (inicia vacío)
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Provider
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // español por defecto
  const [language, setLanguage] = useState<Language>('es');

  // Función para alternar el idioma
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom Hook para consumir el contexto fácilmente en cualquier componente
// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage debe ser usado dentro de un LanguageProvider');
  }
  return context;
};