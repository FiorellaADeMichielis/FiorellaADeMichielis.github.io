import { LanguageToggle } from './components/LanguageToggle';
import { Header } from './components/Header';
import { TechStack } from './components/TechStack';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationSection } from './components/EducationSection';
import { useLanguage } from './context/LanguageContext';

function App() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-700">
      <LanguageToggle />

      <main className="grow max-w-5xl mx-auto px-6 pb-20 w-full">
        <Header />
        <TechStack />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
      </main>

      {/* Footer Minimalista */}
      <footer className="border-t border-slate-300 py-8 text-center text-slate-500 text-xs font-medium">
        <p>
          {language === 'es' 
            ? '© 2026 Ana Fiorella Arduino De Michielis — Desarrolladora Full Stack' 
            : '© 2026 Ana Fiorella Arduino De Michielis — Full Stack Developer'}
        </p>
      </footer>
    </div>
  );
}

export default App;