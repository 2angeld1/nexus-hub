export interface Service {
  id: string;
  icon: string; // lucide icon name
  tags: string[];
}

export interface ServiceContent {
  title: string;
  description: string;
  features: string[];
}

export interface ServicesI18n {
  heroLabel: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCta: string;
  servicesLabel: string;
  servicesTitle: string;
  processLabel: string;
  processTitle: string;
  processSteps: { title: string; description: string }[];
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButton: string;
  ctaWhatsapp: string;
  includes: string;
}

export const servicesI18n: Record<"es" | "en", ServicesI18n> = {
  es: {
    heroLabel: "Servicios Profesionales",
    heroTitle: "Transformo Ideas en Soluciones de Alto Rendimiento",
    heroSubtitle:
      "Consultoría, desarrollo y arquitectura de software a medida. Desde la migración de sistemas legacy hasta la integración de IA aplicada.",
    heroCta: "Solicitar Cotización",
    servicesLabel: "¿Qué puedo hacer por ti?",
    servicesTitle: "Servicios Especializados",
    processLabel: "Metodología",
    processTitle: "Cómo Trabajo",
    processSteps: [
      {
        title: "Consulta",
        description:
          "Entiendo tu problema, analizo el contexto técnico y defino alcance.",
      },
      {
        title: "Propuesta",
        description:
          "Diseño la arquitectura, estimo tiempos y presento la solución técnica.",
      },
      {
        title: "Desarrollo",
        description:
          "Implemento con entregas iterativas, pruebas automatizadas y comunicación constante.",
      },
      {
        title: "Entrega",
        description:
          "Deploy estable, documentación, transferencia de conocimiento y soporte post-lanzamiento.",
      },
    ],
    ctaTitle: "¿Listo para llevar tu proyecto al siguiente nivel?",
    ctaSubtitle:
      "Cuéntame sobre tu proyecto y te respondo en menos de 24 horas.",
    ctaButton: "Escríbeme por WhatsApp",
    ctaWhatsapp: "Hola Angel, vi tu portafolio y me interesa cotizar un servicio.",
    includes: "Incluye",
  },
  en: {
    heroLabel: "Professional Services",
    heroTitle: "I Transform Ideas into High-Performance Solutions",
    heroSubtitle:
      "Custom software consulting, development, and architecture. From legacy system migration to applied AI integration.",
    heroCta: "Request a Quote",
    servicesLabel: "What can I do for you?",
    servicesTitle: "Specialized Services",
    processLabel: "Methodology",
    processTitle: "How I Work",
    processSteps: [
      {
        title: "Consult",
        description:
          "I understand your problem, analyze the technical context, and define scope.",
      },
      {
        title: "Propose",
        description:
          "I design the architecture, estimate timelines, and present the technical solution.",
      },
      {
        title: "Develop",
        description:
          "I implement with iterative deliveries, automated testing, and constant communication.",
      },
      {
        title: "Deliver",
        description:
          "Stable deploy, documentation, knowledge transfer, and post-launch support.",
      },
    ],
    ctaTitle: "Ready to take your project to the next level?",
    ctaSubtitle:
      "Tell me about your project and I'll respond within 24 hours.",
    ctaButton: "Message me on WhatsApp",
    ctaWhatsapp: "Hi Angel, I saw your portfolio and I'm interested in a quote for a service.",
    includes: "Includes",
  },
};

export interface ServiceData {
  id: string;
  icon: string;
  tags: string[];
  es: ServiceContent;
  en: ServiceContent;
}

export const services: ServiceData[] = [
  {
    id: "legacy-migration",
    icon: "RefreshCcw",
    tags: ["React", "C# .NET", "Razor Pages", "Clean Architecture", "Rust"],
    es: {
      title: "Migración de Software Legacy",
      description:
        "Transformo monolitos y plataformas heredadas en ecosistemas modernos, desacoplados y escalables sin frenar tu operación.",
      features: [
        "Auditoría técnica del sistema actual",
        "Plan de migración por fases con cero downtime",
        "Refactorización a Clean Architecture / microservicios",
        "Pruebas E2E automatizadas para validar cada fase",
      ],
    },
    en: {
      title: "Legacy Software Migration",
      description:
        "I transform monoliths and legacy platforms into modern, decoupled, and scalable ecosystems without disrupting your operations.",
      features: [
        "Technical audit of the current system",
        "Phased migration plan with zero downtime",
        "Refactoring to Clean Architecture / microservices",
        "Automated E2E testing to validate each phase",
      ],
    },
  },
  {
    id: "applied-ai",
    icon: "Brain",
    tags: ["FastAPI", "Rust", "LLMs", "MCP", "Playwright", "EasyOCR"],
    es: {
      title: "IA Aplicada & Automatización",
      description:
        "Integro inteligencia artificial práctica en tu negocio: desde agentes autónomos de web scraping hasta auditoría documental con visión por computadora.",
      features: [
        "Agentes autónomos (Playwright + OCR + LLMs)",
        "Integración de Model Context Protocol (MCP)",
        "Pipelines de procesamiento con FastAPI & Rust",
        "Automatización de flujos end-to-end con IA",
      ],
    },
    en: {
      title: "Applied AI & Automation",
      description:
        "I integrate practical artificial intelligence into your business: from autonomous web scraping agents to document auditing with computer vision.",
      features: [
        "Autonomous agents (Playwright + OCR + LLMs)",
        "Model Context Protocol (MCP) integration",
        "Processing pipelines with FastAPI & Rust",
        "End-to-end workflow automation with AI",
      ],
    },
  },
  {
    id: "qa-consulting",
    icon: "TestTubeDiagonal",
    tags: ["Playwright", "Selenium", "C#", "CI/CD", "Azure DevOps"],
    es: {
      title: "Consultoría QA & Testing E2E",
      description:
        "Estructuro y ejecuto estrategias de pruebas automatizadas escalables que previenen regresiones y aceleran tus ciclos de entrega.",
      features: [
        "Arquitectura de pruebas E2E con Playwright o Selenium",
        "Integración con pipelines CI/CD (Azure DevOps, GitHub Actions)",
        "Estrategia de cobertura y regresión",
        "Capacitación de equipos en testing automatizado",
      ],
    },
    en: {
      title: "QA Consulting & E2E Testing",
      description:
        "I structure and execute scalable automated testing strategies that prevent regressions and accelerate your delivery cycles.",
      features: [
        "E2E testing architecture with Playwright or Selenium",
        "CI/CD pipeline integration (Azure DevOps, GitHub Actions)",
        "Coverage and regression strategy",
        "Team training on automated testing",
      ],
    },
  },
  {
    id: "fullstack-dev",
    icon: "Layers",
    tags: [
      "React",
      "React Native",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
    ],
    es: {
      title: "Desarrollo Fullstack Web & Móvil",
      description:
        "Diseño y construyo aplicaciones web y móviles completas — desde el frontend hasta la API y la base de datos — con experiencias premium de UI/UX.",
      features: [
        "Aplicaciones web con React / Next.js / Vite",
        "Apps móviles con React Native & Expo",
        "APIs REST y microservicios en Node.js / C# .NET",
        "Diseño de base de datos (PostgreSQL, MongoDB)",
      ],
    },
    en: {
      title: "Fullstack Web & Mobile Development",
      description:
        "I design and build complete web and mobile applications — from the frontend to the API and database — with premium UI/UX experiences.",
      features: [
        "Web applications with React / Next.js / Vite",
        "Mobile apps with React Native & Expo",
        "REST APIs and microservices in Node.js / C# .NET",
        "Database design (PostgreSQL, MongoDB)",
      ],
    },
  },
  {
    id: "cloud-infra",
    icon: "Cloud",
    tags: ["Microsoft Azure", "Terraform", "Docker", "CI/CD"],
    es: {
      title: "Cloud & Infraestructura DevOps",
      description:
        "Despliego, administro y automatizo tu infraestructura cloud para que sea escalable, segura y reproducible con Infrastructure as Code.",
      features: [
        "Despliegue y gestión en Microsoft Azure",
        "Infrastructure as Code (IaC) con Terraform",
        "Containerización con Docker",
        "Pipelines de CI/CD automatizados",
      ],
    },
    en: {
      title: "Cloud & DevOps Infrastructure",
      description:
        "I deploy, manage, and automate your cloud infrastructure to be scalable, secure, and reproducible with Infrastructure as Code.",
      features: [
        "Deployment and management on Microsoft Azure",
        "Infrastructure as Code (IaC) with Terraform",
        "Containerization with Docker",
        "Automated CI/CD pipelines",
      ],
    },
  },
];
