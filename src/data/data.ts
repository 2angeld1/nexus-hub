export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
  status: "completed" | "in-progress" | "concept";
}

export const projects: Project[] = [
  {
    id: "mpolog2",
    title: "MPOLOG2",
    description: "Sistema de gestión logística avanzado.",
    tags: ["React", "Node.js", "SQL"],
    imageUrl: "https://images.unsplash.com/photo-1586281380923-93c9b0a7298e?auto=format&fit=crop&q=80&w=1600",
    status: "completed"
  },
  {
    id: "kitchy",
    title: "Kitchy",
    description: "Aplicación de gestión para restaurantes y pedidos de comida.",
    tags: ["Vite", "React", "Tailwind"],
    imageUrl: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=1600",
    status: "completed"
  },
  {
    id: "ionic-notif",
    title: "IonicNotif",
    description: "Sistema de notificaciones push multiplataforma.",
    tags: ["Ionic", "Mobile", "Push Notifications"],
    imageUrl: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=1600",
    status: "completed"
  },
  {
    id: "buscador-peliculas",
    title: "Buscador de Películas",
    description: "Interfaz moderna para explorar y buscar películas favoritas.",
    tags: ["Frontend", "API"],
    imageUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=1600",
    status: "completed"
  },
  {
    id: "car-catalog-vite",
    title: "Car Catalog",
    description: "Catálogo interactivo de vehículos con filtrado avanzado.",
    tags: ["Vite", "React", "CSS Modules"],
    imageUrl: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1600",
    status: "completed"
  },
  {
    id: "archiquect-frontend",
    title: "Archiquect",
    description: "Plataforma para arquitectura y diseño (Fase inicial).",
    tags: ["Architecture", "Design"],
    imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1600",
    status: "in-progress"
  }
];

export const experience = [
  {
    id: 1,
    company: "Tech Solutions Inc.",
    role: "Full Stack Developer",
    period: "2023 - Present",
    description: "Liderando el desarrollo de aplicaciones web escalables usando React y .NET."
  },
  {
    id: 2,
    company: "Digital Agency",
    role: "Frontend Developer",
    period: "2021 - 2023",
    description: "Creación de interfaces de usuario interactivas y pixel-perfect para clientes internacionales."
  },
  {
    id: 3,
    company: "StartUp Lab",
    role: "Junior Developer",
    period: "2020 - 2021",
    description: "Colaboración en el desarrollo de MVPs y mantenimiento de código legacy."
  }
];
