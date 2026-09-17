<div align="center">

# Ana Fiorella Arduino De Michielis
### Portfolio Profesional — Código Fuente Frontend

[![React 19](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

[🌐 Portafolio en Vivo](https://fiorellaademichielis.github.io) • [💻 Repositorio](https://github.com/FiorellaADeMichielis/FiorellaADeMichielis.github.io)

</div>

---

## 📌 Arquitectura y Decisiones de Diseño

- **Framework:** React 19 + TypeScript + Vite 8.
- **Estilos:** Tailwind CSS v4 con configuración semántica de Modo Oscuro puro (`#0b1120`, `#131d2e`, `#1e293b`), contraste alto (13:1) y acentos técnicos en cyan.
- **Tipografía:** Fuente **Inter** (pesos 400 a 800) para máxima legibilidad.
- **Internacionalización:** Soporte bilingüe completo (Español / Inglés) mediante `LanguageContext` y selector segmentado accesible.
- **Componentes & UI:**
  - `Header.tsx`: Bio profesional, datos de contacto (Email, GitHub) y llamada a la acción.
  - `TechStack.tsx`: Clasificación en 5 categorías técnicas del CV, destacando Front-End.
  - `ExperienceSection.tsx`: Proyectos reales y roles profesionales (`@Freelance`) con badges de estado actual.
  - `ProjectCard.tsx`: Previsualización completa de capturas (`object-contain`), marco de navegador, y maquetación adaptativa a ancho completo para proyectos sin capturas.
  - `ImageModal.tsx`: Visor modal (Lightbox) interactivo con navegación por teclado (`Escape`, flechas) y vista en pantalla completa.
  - `EducationSection.tsx`: Formación académica en UNNE FaCENA, complementaria (Start Coding IA) e idiomas certificados (C1, B1).
  - `LanguageToggle.tsx`: Control segmentado directo e intuitivo `[ ES | EN ]`.

---

## 🚀 Comandos Disponibles

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo en local
npm run dev

# Compilar para producción (TypeScript + Vite)
npm run build

# Ejecutar análisis estático con ESLint
npm run lint

# Previsualizar el build de producción
npm run preview
```