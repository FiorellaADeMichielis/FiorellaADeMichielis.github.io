import cdiTrainer from '../assets/cdi-trainer.png';
import cdiTrainer1 from '../assets/cdi-trainer1.png';
import cdiTrainer2 from '../assets/cdi-trainer2.png';
import cdiTrainer3 from '../assets/cdi-trainer3.png';
import gov2 from '../assets/governance2.png';
import gov8 from '../assets/governance8.png';
import govAudit from '../assets/Captura de pantalla 2026-09-11 195324.png';

// Definición de Tipos
export type Language = 'es' | 'en';

export interface TechCategory {
  title: Record<Language, string>;
  skills: {
    name: string;
    icon?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: Record<Language, string>;
  company: string;
  period: Record<Language, string>;
  current?: boolean;
  type: Record<Language, string>;
  techStack: string[];
  description: Record<Language, string[]>;
}

export interface Project {
  id: string;
  title: string;
  subtitle: Record<Language, string>;
  date: string;
  status: 'completed' | 'in-progress';
  featured?: boolean;
  techStack: string[];
  description: Record<Language, string[]>;
  images: string[];
  link?: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: Record<Language, string>;
  period: string;
  status: Record<Language, string>;
  intermediateDegree?: Record<Language, string>;
}

export interface ComplementaryTrainingItem {
  id: string;
  institution: string;
  program: Record<Language, string>;
  period: string;
}

export interface LanguageSkill {
  name: Record<Language, string>;
  level: string;
  description: Record<Language, string>;
}

export interface PortfolioData {
  personal: {
    name: string;
    email: string;
    github: string;
    phone: string;
    role: Record<Language, string>;
    bio: Record<Language, string>;
  };
  techCategories: TechCategory[];
  experience: ExperienceItem[];
  projects: Project[];
  education: EducationItem[];
  complementaryTraining: ComplementaryTrainingItem[];
  languages: LanguageSkill[];
}

// Datos Profesionales Oficiales (Basados fielmente en el CV)
export const portfolioData: PortfolioData = {
  personal: {
    name: "Ana Fiorella Arduino De Michielis",
    email: "fiorellaarduino801@gmail.com",
    github: "https://github.com/FiorellaADeMichielis",
    phone: "+54 9 0379 4347826",
    role: {
      es: "Desarrolladora Full Stack Junior | React · TypeScript · Node.js",
      en: "Junior Full Stack Developer | React · TypeScript · Node.js"
    },
    bio: {
      es: "Desarrolladora Full Stack Junior con orientación hacia Front-End y experiencia práctica en el desarrollo de aplicaciones web con React, TypeScript y Node.js. Especializada en la construcción de interfaces responsivas y modulares, integración de APIs REST, autenticación JWT, bases de datos relacionales y comunicación asíncrona. Aplico principios de Ingeniería de Software, Clean Architecture, MVVM, SOLID y patrones de diseño para desarrollar soluciones mantenibles y escalables.",
      en: "Junior Full Stack Developer with a strong Front-End orientation and hands-on experience building modern web applications with React, TypeScript, and Node.js. Experienced in responsive and modular interface development, REST API integration, JWT authentication, relational databases, and asynchronous communication. I apply Software Engineering principles, Clean Architecture, MVVM, SOLID, and design patterns to build maintainable and scalable solutions."
    }
  },

  techCategories: [
    {
      title: {
        es: "Front-End",
        en: "Front-End"
      },
      skills: [
        { name: "React" },
        { name: "Angular" },
        { name: "TypeScript" },
        { name: "JavaScript" },
        { name: "Tailwind CSS" },
        { name: "Bootstrap" },
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "Vite" }
      ]
    },
    {
      title: {
        es: "Back-End",
        en: "Back-End"
      },
      skills: [
        { name: "Node.js" },
        { name: "NestJS" },
        { name: "Python" },
        { name: "Django REST" },
        { name: "APIs REST" },
        { name: "GraphQL" }
      ]
    },
    {
      title: {
        es: "Bases de Datos",
        en: "Databases"
      },
      skills: [
        { name: "PostgreSQL" },
        { name: "SQL Server" },
        { name: "SQL" }
      ]
    },
    {
      title: {
        es: "Arquitectura & Ingeniería",
        en: "Architecture & Engineering"
      },
      skills: [
        { name: "Clean Architecture" },
        { name: "MVC & MVVM" },
        { name: "SOLID & Clean Code" },
        { name: "Design Patterns" },
        { name: "Separation of Concerns" }
      ]
    },
    {
      title: {
        es: "Herramientas & Otros",
        en: "Tools & Others"
      },
      skills: [
        { name: "Git & GitHub" },
        { name: "GitLab" },
        { name: "npm" },
        { name: "Linux" },
        { name: "RabbitMQ" },
        { name: "Docker" },
        { name: "Scrum" }
      ]
    }
  ],

  experience: [
    {
      id: "complejo-turistico",
      role: {
        es: "Desarrolladora Frontend — Complejo Turístico Paso del Rey",
        en: "Frontend Developer — Complejo Turístico Paso del Rey"
      },
      company: "Freelance",
      period: {
        es: "Julio 2026 – Actualmente",
        en: "July 2026 – Present"
      },
      current: true,
      type: {
        es: "Proyecto Freelance",
        en: "Freelance Project"
      },
      techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "SOLID", "Clean Code", "Mobile First"],
      description: {
        es: [
          "Desarrollo de un sitio web turístico responsive para un complejo turístico utilizando React, TypeScript, Vite y Tailwind CSS, incorporando catálogo de apartamentos y unidades de alojamiento, galería de imágenes, servicios, piscina, bar, ubicación, contacto y FAQ.",
          "Implementación de una arquitectura modular basada en componentes reutilizables, priorizando separación de responsabilidades, bajo acoplamiento, alta cohesión y mantenibilidad.",
          "Organización del frontend mediante componentes, layouts, páginas, hooks, utilidades, constantes y tipos, aplicando principios SOLID, Clean Code, DRY, KISS y Separation of Concerns.",
          "Diseño del proyecto bajo un enfoque Mobile First y con una estructura técnica preparada para futuras integraciones con servicios externos."
        ],
        en: [
          "Development of a responsive tourist website for a holiday complex using React, TypeScript, Vite, and Tailwind CSS, featuring an apartment and accommodation catalog, photo gallery, services, swimming pool, bar, location, contact, and FAQ.",
          "Implementation of a modular architecture based on reusable components, prioritizing separation of concerns, low coupling, high cohesion, and maintainability.",
          "Organization of the frontend into components, layouts, pages, custom hooks, utilities, constants, and types, strictly adhering to SOLID, Clean Code, DRY, KISS, and Separation of Concerns principles.",
          "Designed with a Mobile-First approach and an extensible architectural foundation ready for future third-party service integrations."
        ]
      }
    },
    {
      id: "freelance-angular",
      role: {
        es: "Desarrolladora Frontend",
        en: "Frontend Developer"
      },
      company: "Freelance",
      period: {
        es: "Mayo – Junio 2025",
        en: "May – June 2025"
      },
      current: false,
      type: {
        es: "Proyecto Freelance",
        en: "Freelance Project"
      },
      techStack: ["Angular", "Bootstrap", "HTML5", "CSS3", "SPA Routing"],
      description: {
        es: [
          "Desarrollo de un sitio web corporativo utilizando Angular, Bootstrap, HTML y CSS, adaptando la interfaz con precisión a los requerimientos visuales y funcionales del proyecto.",
          "Implementación del sistema de enrutamiento SPA para gestionar la navegación fluida entre las diferentes secciones de la aplicación.",
          "Realización de la maquetación e interactividad frontend priorizando fidelidad visual, consistencia de diseño y adaptación responsive."
        ],
        en: [
          "Development of a corporate website using Angular, Bootstrap, HTML, and CSS, accurately adapting the user interface to the visual and functional project requirements.",
          "Implementation of the SPA routing system to handle seamless navigation between the application's different views.",
          "Frontend implementation prioritizing visual fidelity, design consistency, and responsive adaptation across screen sizes."
        ]
      }
    }
  ],

  projects: [
    {
      id: "cdi-trainer",
      title: "Entrenador Interactivo de Cálculo Diferencial e Integral",
      subtitle: {
        es: "Desarrolladora Frontend | 2026",
        en: "Frontend Developer | 2026"
      },
      date: "2026",
      status: "completed",
      featured: true,
      techStack: ["React 19", "TypeScript", "Vite", "Tailwind CSS v4", "KaTeX", "localStorage"],
      images: [cdiTrainer, cdiTrainer1, cdiTrainer2, cdiTrainer3],
      link: "https://cdi-trainer.vercel.app/",
      description: {
        es: [
          "Desarrollo SPA y Estado Complejo: Construí una aplicación educativa interactiva utilizando React 19, TypeScript y Vite, optimizada para ejecutarse 100% en el navegador con persistencia de datos mediante localStorage.",
          "Renderizado Matemático y Lógica: Integré KaTeX para el renderizado preciso de fórmulas complejas y desarrollé un simulador de exámenes con temporizador y un motor de evaluación adaptativa con retroalimentación instantánea.",
          "UI/UX y Gamificación: Diseñé una interfaz moderna con Tailwind CSS v4 que incluye minijuegos lógicos, repaso espaciado y manejo de estado avanzado para evaluar el rendimiento del usuario a través de un extenso banco de ejercicios."
        ],
        en: [
          "SPA & Complex State Development: Engineered an interactive educational application using React 19, TypeScript, and Vite, optimized to run 100% client-side with persistent state managed via localStorage.",
          "Mathematical Rendering & Engine: Integrated KaTeX for rigorous rendering of complex math expressions, paired with a timed exam simulator and an adaptive assessment engine with immediate feedback.",
          "UI/UX & Gamification: Crafted a modern interface with Tailwind CSS v4 featuring logic mini-games, spaced repetition algorithms, and advanced state management to evaluate student performance over a broad exercise bank."
        ]
      }
    },
    {
      id: "governance-hub",
      title: "Governance Hub",
      subtitle: {
        es: "Desarrolladora Full Stack | 2026 – Actualidad",
        en: "Full Stack Developer | 2026 – Present"
      },
      date: "2026 – Actualidad",
      status: "in-progress",
      featured: true,
      techStack: ["NestJS", "TypeScript", "RabbitMQ", "React", "Socket.io", "Clean Architecture", "TypeORM"],
      images: [gov2, gov8, govAudit],
      link: "https://github.com/FiorellaADeMichielis/governance-hub",
      description: {
        es: [
          "Arquitectura Backend & DDD: Estructuré el backend con NestJS y TypeScript aplicando Clean Architecture y Domain-Driven Design (DDD). Implementé seguridad mediante JWT, Passport y validaciones globales con DTOs, gestionando la persistencia de datos relacionales a través de TypeORM.",
          "Procesamiento Asíncrono: Configuré una arquitectura Productor-Consumidor utilizando RabbitMQ para la ingesta asíncrona de webhooks. Garanticé la fiabilidad de la mensajería mediante canales AMQP durables y control de acuses de recibo, evitando bloqueos en el hilo principal y asegurando la resiliencia del sistema.",
          "Frontend en Tiempo Real: Desarrollé el dashboard interactivo y la interfaz de usuario con React y Vite. Integré un Gateway con Socket.io para escuchar eventos del backend, logrando la sincronización y actualización de tablas de auditoría y métricas en tiempo real sin recargas manuales.",
          "Gestión de Estado y UI/UX: Implementé el consumo seguro de APIs REST, paginación y filtros avanzados de estado. Diseñé una interfaz responsiva con soporte para modo claro/oscuro y modales interactivos para el control y auditoría de flujos."
        ],
        en: [
          "Backend Architecture & DDD: Structured the backend using NestJS and TypeScript applying Clean Architecture and Domain-Driven Design (DDD). Implemented authentication with JWT, Passport, and global DTO validation, persisting relational data via TypeORM.",
          "Asynchronous Processing: Configured a Producer-Consumer pipeline using RabbitMQ for asynchronous webhook ingestion. Ensured messaging reliability via durable AMQP channels and acknowledgment tracking, avoiding event loop blocks.",
          "Real-Time Frontend: Developed an interactive dashboard with React and Vite. Integrated a Socket.io Gateway to stream backend events, synchronizing live audit tables and telemetry metrics without manual refreshes.",
          "State Management & UI/UX: Implemented secure REST API consumption, pagination, and granular status filtering. Designed a responsive UI with dark/light mode and interactive modals for workflow auditing."
        ]
      }
    },
    {
      id: "provit",
      title: "ProvIT — Gestión y Análisis Inteligente de Proveedores",
      subtitle: {
        es: "Desarrolladora Full Stack | 2026 – Actualidad",
        en: "Full Stack Developer | 2026 – Present"
      },
      date: "2026 – Actualidad",
      status: "in-progress",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Python", "Django REST", "MVVM", "OCR"],
      images: [],
      link: "https://github.com/FiorellaADeMichielis/ISII_25TC_Grupo66",
      description: {
        es: [
          "Desarrollé el Front-End con React, TypeScript y Tailwind CSS, aplicando el patrón MVVM mediante Custom Hooks para separar la lógica de presentación.",
          "Implementé un cliente de API bajo el patrón Singleton para centralizar la comunicación HTTP y la gestión de tokens JWT.",
          "Integré el Front-End con un backend desarrollado en Python y Django REST Framework, consumiendo APIs REST para autenticación, consulta y procesamiento de información.",
          "Integré y visualicé resultados provenientes del procesamiento OCR de facturas dentro de la aplicación, facilitando la presentación y análisis de datos."
        ],
        en: [
          "Engineered the Front-End using React, TypeScript, and Tailwind CSS, adhering to the MVVM pattern via Custom Hooks to decouple presentation logic.",
          "Implemented an API client utilizing the Singleton pattern to centralize HTTP traffic and manage JWT tokens securely.",
          "Integrated the client application with a Python & Django REST Framework backend, consuming REST endpoints for authentication and business workflows.",
          "Visualized and analyzed invoice OCR extraction results within responsive interfaces designed for operational clarity."
        ]
      }
    },
    {
      id: "skyops",
      title: "SkyOps Aviation Logistics",
      subtitle: {
        es: "Desarrolladora Backend | Diciembre 2024",
        en: "Backend Developer | December 2024"
      },
      date: "Diciembre 2024",
      status: "completed",
      techStack: ["NestJS", "TypeScript", "PostgreSQL", "RabbitMQ", "Arquitectura Modular"],
      images: [],
      link: "https://github.com/FiorellaADeMichielis/skyops-backend",
      description: {
        es: [
          "Desarrollé el backend de una plataforma de logística aeronáutica utilizando NestJS y TypeScript bajo una arquitectura modular.",
          "Diseñé esquemas de bases de datos relacionales utilizando PostgreSQL.",
          "Integré RabbitMQ para implementar colas de mensajes y comunicación asíncrona entre servicios."
        ],
        en: [
          "Engineered the backend services for an aviation logistics platform using NestJS and TypeScript following modular architecture patterns.",
          "Designed and optimized relational database schemas with PostgreSQL.",
          "Integrated RabbitMQ to facilitate decoupled message queues and reliable asynchronous communication across microservices."
        ]
      }
    }
  ],

  education: [
    {
      id: "unne-licenciatura",
      institution: "Universidad Nacional del Nordeste (UNNE) — FaCENA",
      degree: {
        es: "Licenciatura en Sistemas de Información",
        en: "Bachelor's Degree in Information Systems"
      },
      period: "2022 – 2028 (Previsto)",
      status: {
        es: "En curso",
        en: "In progress"
      },
      intermediateDegree: {
        es: "Título intermedio: Analista Programadora Universitaria",
        en: "Intermediate degree: University Programmer Analyst"
      }
    }
  ],

  complementaryTraining: [
    {
      id: "start-coding-ia",
      institution: "Fundación Start Coding IA",
      program: {
        es: "Programa de Desarrollo Full Stack",
        en: "Full Stack Development Program"
      },
      period: "2024 – 2025"
    }
  ],

  languages: [
    {
      name: {
        es: "Inglés",
        en: "English"
      },
      level: "C1",
      description: {
        es: "Avanzado profesional",
        en: "Professional working proficiency"
      }
    },
    {
      name: {
        es: "Portugués",
        en: "Portuguese"
      },
      level: "B1",
      description: {
        es: "Intermedio",
        en: "Intermediate"
      }
    }
  ]
};