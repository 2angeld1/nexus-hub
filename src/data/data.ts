export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string; // GitHub Link
  dashboardUrl?: string; // Optional Dashboard Link
  appUrl?: string; // Optional App Link
  videoUrl?: string; // Optional Video Preview
  status: "completed" | "in-progress" | "concept";
}

export const projects: Project[] = [
  {
    id: "mpolog",
    title: "MPOLOG - Cloud Logistics",
    description: "Solución SaaS nacida de una necesidad personal para digitalizar mi comunidad. Reemplazó flujos manuales (Excel/Papel) por un ecosistema digital de eventos y logística, optimizando recursos en tiempo real.",
    tags: ["Flutter", "Founder", "Digital Transformation"],
    imageUrl: "/projects/mpolog.png",
    videoUrl: "/videos/mpolog.mp4",
    demoUrl: "https://mpolog.vercel.app",
    repoUrl: "https://github.com/2angeld1/MPOLOG",
    status: "completed"
  },
  {
    id: "kitchy",
    title: "Kitchy & Vesta",
    description: "Ecosistema POS inteligente dual diseñado para PyMEs en Latinoamérica. Kitchy gestiona gastronomía, fruterías y salones de belleza (con comisiones para especialistas y turnos); Vesta automatiza servicios como lavautos y jardinería. Integrados con Caitlyn, un motor de IA que automatiza el costeo de producción consultando precios de mercados locales (Merca Panamá, ACODECO, SNE combustible) en tiempo real.",
    tags: ["React Native", "Expo", "Node.js", "FastAPI AI"],
    imageUrl: "/projects/kitchy.png",
    videoUrl: "/videos/kitchy.mp4",
    demoUrl: "https://kitchy-one.vercel.app",
    repoUrl: "https://github.com/2angeld1/Kitchy",
    status: "completed"
  },
  {
    id: "focus-alert",
    title: "FocusAlert AI",
    description: "Asistente de movilidad predictiva (IonicNotif). App móvil/web que predice tiempos de ruta reales sobre calles mediante OSRM y un regresor de Random Forest entrenado en FastAPI. Ajusta las estimaciones de viaje según incidencias viales, hora, día de la semana y el clima en tiempo real usando OpenWeatherMap.",
    tags: ["Ionic React", "FastAPI", "Machine Learning", "OSRM Maps"],
    imageUrl: "/projects/ionicmaps.png",
    videoUrl: "/videos/ionicnotif.mp4",
    demoUrl: "https://ionicnotif.vercel.app",
    repoUrl: "https://github.com/2angeld1/IonicNotif",
    status: "completed"
  },
  {
    id: "muelle",
    title: "Muelle - Inteligencia Logística",
    description: "Plataforma SaaS para optimizar la cadena de suministro marítima y aduanera. Incorpora Caitlyn AI (FastAPI + Playwright + EasyOCR), un agente autónomo que navega portales de navieras en paralelo para cazar itinerarios en tiempo real y ofrece logs interactivos vía WebSockets. Incluye un validador aduanero que audita documentos contra multas.",
    tags: ["Next.js 16", "React 19", "FastAPI & Python", "Playwright"],
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1600",
    repoUrl: "https://github.com/2angeld1/Muelle",
    status: "completed"
  },
  {
    id: "verso",
    title: "Verso - Legacy Migrator",
    description: "Herramienta SaaS de modernización de código para la traducción masiva de repositorios. Combina la potencia semántica de LLMs (Gemini/Cohere) con un motor en Rust para la validación estricta de sintaxis a nivel AST y un sistema de caché de traducciones en memoria, asegurando consistencia y determinismo en migraciones de PHP, COBOL y Java.",
    tags: ["Rust Core", "Next.js", "AST Parsing", "AI Orchestrator"],
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1600",
    repoUrl: "https://github.com/2angeld1/Verso",
    status: "completed"
  },
  {
    id: "gosen-engines",
    title: "Gosen Engines",
    description: "Monorepo de alto rendimiento en Rust (Cargo Workspaces) que centraliza la capa de cálculo y procesamiento de IA del ecosistema Gosen Tech. Aloja kitchy-router (OCR de facturas con Gemini Flash Vision), verso-router (procesamiento sintáctico de código para Verso), y librerías optimizadas de compresión WebP en milisegundos.",
    tags: ["Rust", "Axum & Tokio", "Cargo Workspaces", "AI Concurrency"],
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1600",
    repoUrl: "https://github.com/2angeld1/gosen-engines",
    status: "completed"
  },
  {
    id: "agrolink",
    title: "AgroLink Panamá",
    description: "Plataforma de comercio agrícola 'inDrive' para el agro, diseñada para conectar de forma directa a productores y compradores en Panamá. Los clientes publican demandas de productos frescos, los productores cercanos ofertan en tiempo real y el flujo de despacho logístico se valida y rastrea con códigos QR dinámicos.",
    tags: ["React Native", "Node.js & Express", "MongoDB", "Expo"],
    imageUrl: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=1600",
    repoUrl: "https://github.com/2angeld1/AgroLink",
    status: "completed"
  },
  {
    id: "car-catalog",
    title: "Velodrive Suite",
    description: "Plataforma Automotriz End-to-End totalmente autónoma. Incluye Storefront Luxury y CMS administrativo propio. Actualmente integro un módulo experimental de inspección 3D/AR que permite visualizar diagnósticos sobre un modelo interactivo en tiempo real.",
    tags: ["React", "Custom CMS", "Node.js", "Marketplace"],
    imageUrl: "/projects/velodrive.png",
    videoUrl: "/videos/velodrive.mp4",
    demoUrl: "https://autos-react-front.vercel.app",
    dashboardUrl: "https://autos-react-dashboard.vercel.app",
    appUrl: "https://velodrive-mobile.vercel.app",
    repoUrl: "https://github.com/2angeld1/autos-react-vite",
    status: "completed"
  },
  {
    id: "cinescope",
    title: "CineScope V2",
    description: "Agregador de medios interactivo multi-api. V2 en desarrollo implementando motores de recomendación personalizados basados en gustos de usuario mediante IA.",
    tags: ["React", "API Aggregation", "Python AI"],
    imageUrl: "/projects/moviefinder.png",
    videoUrl: "/videos/moviefinder.mp4",
    demoUrl: "https://buscado-peliculas.vercel.app",
    repoUrl: "https://github.com/2angeld1/buscado-peliculas",
    status: "completed"
  },
  {
    id: "winforms-api",
    title: "WinSync Gateway",
    description: "Puente de integración híbrido Desktop-Web. Automatización de impresión en segundo plano y sincronización de documentos vía API REST C# a PHP.",
    tags: ["C# .NET", "System Integration", "Automation"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600",
    repoUrl: "https://github.com/2angeld1/WinFormsApiApp",
    status: "in-progress"
  },
  {
    id: "archiquect",
    title: "Archiquect",
    description: "E-commerce especializado para planos y activos arquitectónicos. Plataforma MERN/PERN completa (React + Node.js + Express + Prisma + PostgreSQL) con un flujo de checkout interactivo de 4 pasos, compras directas y cotizaciones personalizadas.",
    tags: ["React & TS", "Prisma & Postgres", "Tailwind CSS", "Express API"],
    imageUrl: "/projects/architect.png",
    demoUrl: "https://architect-x.vercel.app/",
    repoUrl: "https://github.com/2angeld1/Architect",
    status: "completed"
  }
];

export const experience = [
  {
    id: 0,
    company: "UTP Incuba (Dirección de Gestión y Transferencia del Conocimiento - UTP)",
    role: "Emprendedor en Incubación - Programa de Innovación",
    period: "Marzo 2026 - Presente",
    description: "Participante activo en el programa de incubación de empresas de base tecnológica. Desarrollo y validación técnica/comercial de soluciones de software de alto impacto (Muelle y Verso) bajo mentorías especializadas en propiedad intelectual, modelo de negocios y validación de mercado (Programa ACCIONA)."
  },
  {
    id: 1,
    company: "Payday Software",
    role: "Frontend Lead & UI Architect",
    period: "Marzo 2025 - Presente",
    description: "Co-liderazgo en la modernización de la plataforma: Migración de Monolito Legacy (Razor Pages) a SPA Clean Architecture (React/Vite/TS). Responsable del Governance Frontend: Code Reviews, estandarización SOLID, implementación de Redis y optimización de Time-to-Market."
  },
  {
    id: 2,
    company: "Logic Studio (Cliente: ACP)",
    role: "Consultor QA Automation & Arquitectura",
    period: "agosto 2024 - octubre 2024 (temporal)",
    description: "Consultoría especializada para la Autoridad del Canal de Panamá. Implementación de arquitectura de pruebas automatizadas E2E con Playwright y C#. Aplicación estricta de principios SOLID, Clean Code e integración continua (CI/CD) en Azure DevOps."
  },
  {
    id: 3,
    company: "Logic Studio S.A.",
    role: "Full Stack Web Developer",
    period: "Mayo 2022 - marzo 2025",
    description: "Liderazgo técnico para cuentas Tier-1 (Ricardo Pérez Toyota, Banesco). Hitos clave: Migración crítica en ecosistema PHP (Joomla 3 a 4), desarrollo de módulos custom en Laravel y automatización de procesos con PowerApps."
  },
  {
    id: 4,
    company: "Consultor Independiente",
    role: "Full Stack & Infraestructura",
    period: "2022 - 2025 (Paralelo)",
    description: "Despliegue de plataformas LMS (Moodle) y E-commerce en infraestructuras dedicadas. Desarrollo de 'WinSync Gateway' (C# Desktop): Integración de hardware (Escaners/Impresoras Virtuales) con APIs Web PHP, implementando flujos de autenticación 2FA y manejo de archivos locales."
  }
];

