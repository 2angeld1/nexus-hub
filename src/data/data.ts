export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string; // GitHub Link
  dashboardUrl?: string; // Optional Dashboard Link
  videoUrl?: string; // Optional Video Preview
  status: "completed" | "in-progress" | "concept";
}

export const projects: Project[] = [
  {
    id: "mpolog",
    title: "MPOLOG - Cloud Logistics",
    description: "Solución SaaS nacida de una necesidad personal para digitalizar mi comunidad. Reemplazó flujos manuales (Excel/Papel) por un ecosistema digital de eventos y logística, optimizando recursos en tiempo real.",
    tags: ["Ionic React", "Founder", "Digital Transformation"],
    imageUrl: "/projects/mpolog.png",
    demoUrl: "https://mpolog.vercel.app",
    repoUrl: "https://github.com/2angeld1/MPOLOG",
    status: "completed"
  },
  {
    id: "kitchy",
    title: "Kitchy Systems",
    description: "Producto propio desarrollado como co-dueño de Foodtruck. Diseñado como alternativa móvil-nativa y ligera a Zoho para el mercado regional. Centraliza inventario, ventas y operación en una app rápida sin bloatware web.",
    tags: ["Ionic React", "Product Owner", "Mobile First"],
    imageUrl: "/projects/kitchy.png",
    demoUrl: "https://kitchy-one.vercel.app",
    repoUrl: "https://github.com/2angeld1/Kitchy",
    status: "completed"
  },
  {
    id: "focus-alert",
    title: "FocusAlert AI",
    description: "Asistente de movilidad predictiva. Backend Python con ML para analizar patrones de ruta y sugerir trayectos óptimos antes de salir de casa.",
    tags: ["Python", "Machine Learning", "Ionic Native"],
    imageUrl: "/projects/ionicmaps.png",
    demoUrl: "https://ionicnotif.vercel.app",
    repoUrl: "https://github.com/2angeld1/IonicNotif",
    status: "completed"
  },
  {
    id: "car-catalog",
    title: "Velodrive Suite",
    description: "Plataforma Automotriz End-to-End totalmente autónoma. Incluye Storefront Luxury y CMS administrativo propio para gestión de leads, inventario y cotizaciones.",
    tags: ["React", "Custom CMS", "Node.js", "Marketplace"],
    imageUrl: "/projects/velodrive.png",
    demoUrl: "https://autos-react-front.vercel.app",
    dashboardUrl: "https://autos-react-dashboard.vercel.app",
    repoUrl: "https://github.com/2angeld1/autos-react-vite",
    status: "completed"
  },
  {
    id: "cinescope",
    title: "CineScope V2",
    description: "Agregador de medios interactivo multi-api. V2 en desarrollo implementando motores de recomendación personalizados basados en gustos de usuario mediante IA.",
    tags: ["React", "API Aggregation", "Python AI"],
    imageUrl: "/projects/moviefinder.png",
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
    title: "Archiquect (En Construcción)",
    description: "E-commerce especializado para activos arquitectónicos. Plataforma MERN completa para gestión de planos, diseños y servicios profesionales.",
    tags: ["MERN Stack", "E-commerce", "Mongo DB"],
    imageUrl: "/projects/architect.png",
    status: "concept"
  }
];

export const experience = [
  {
    id: 1,
    company: "Payday Software",
    role: "Frontend Lead & UI Architect",
    period: "Marzo 2025 - Presente",
    description: "Co-liderazgo en la modernización de la plataforma hacia Clean Architecture (React/Vite/TS). Responsable del Governance Frontend: Code Reviews, estandarización SOLID y refactorización continua. Implementación de capas de caché (Redis) y optimización de rendimiento, logrando acelerar el Time-to-Market de la versión Beta."
  },
  {
    id: 2,
    company: "Logic Studio (Cliente: ACP)",
    role: "Consultor QA Automation & Arquitectura",
    period: "2024 - 2025",
    description: "Consultoría especializada para la Autoridad del Canal de Panamá. Implementación de arquitectura de pruebas automatizadas E2E con Playwright y C#. Aplicación estricta de principios SOLID, Clean Code e integración continua (CI/CD) en Azure DevOps."
  },
  {
    id: 3,
    company: "Logic Studio S.A.",
    role: "Full Stack Web Developer",
    period: "Mayo 2022 - 2024",
    description: "Liderazgo técnico para cuentas Tier-1 (Ricardo Pérez Toyota, Banesco, Seguros). Hitos clave: Migración crítica de Joomla 3 a 4, desarrollo de módulos custom en Laravel (Cookies/Cotizadores) y automatización de procesos internos con PowerApps."
  },
  {
    id: 4,
    company: "Consultor Independiente",
    role: "Full Stack & Infraestructura",
    period: "2022 - 2024 (Paralelo)",
    description: "Despliegue de plataformas LMS (Moodle) y E-commerce en infraestructuras dedicadas. Desarrollo de 'WinSync Gateway' (C# Desktop): Integración de hardware (Escaners/Impresoras Virtuales) con APIs Web PHP, implementando flujos de autenticación 2FA y manejo de archivos locales."
  }
];
