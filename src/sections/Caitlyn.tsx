import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Search, DollarSign, FileCheck, Terminal } from "lucide-react";
import { fadeInUp, staggeredContainer } from "../animations/variants";

interface AvatarMode {
  id: "general" | "beauty" | "market";
  name: string;
  role: string;
  avatarUrl: string;
  description: string;
  badge: string;
}

const AVATAR_MODES: AvatarMode[] = [
  {
    id: "general",
    name: "Caitlyn Core",
    role: "Itinerary Hunter & Logística Maritime",
    avatarUrl: "/projects/caitlyn_avatar.png",
    description: "Orquesta búsquedas autónomas en tiempo real navegando portales de navieras como Maersk y MSC usando Playwright. Narra cada evento mediante WebSockets y extrae datos de contenedores mediante computer vision (OCR).",
    badge: "Online: Logistics"
  },
  {
    id: "beauty",
    name: "Caitlyn Beauty",
    role: "Gestión Operativa de Estética & Comisiones",
    avatarUrl: "/projects/caitlyn_beauty_avatar.png",
    description: "Modo especializado para salones de belleza y barberías. Automatiza el control de turnos de especialistas, calcula comisiones fijas/escalonadas e ingresos y sugiere márgenes de precios basados en insumos.",
    badge: "Online: Beauty"
  },
  {
    id: "market",
    name: "Caitlyn Frutera",
    role: "Costeo de Insumos & Frutas en Retail",
    avatarUrl: "/projects/caitlyn_frutera.png",
    description: "Modo diseñado para fruterías y retail. Monitorea los precios diarios del mercado mayorista (Merca Panamá) para alertar al comerciante sobre fluctuaciones en el costo de productos frescos y proteger su rentabilidad.",
    badge: "Online: Retail"
  }
];

const LOG_MESSAGES = [
  { text: "INICIANDO CAITLYN ENGINE v2.0.4...", type: "system" },
  { text: "Conectando al microservicio de FastAPI (Puerto 8000)...", type: "system" },
  { text: "Estado de conexión: OK. WebSocket establecido.", type: "success" },
  { text: "Consulta recibida: 'Sugerir receta de Ceviche de Corvina'", type: "action" },
  { text: "Caitlyn AI -> Consultando inventario local del Food Truck...", type: "action" },
  { text: "Inventario: Cebolla morada (En stock: $0.15/unidad).", type: "success" },
  { text: "Inventario: Corvina fresca (Sin stock en inventario local).", type: "warning" },
  { text: "Caitlyn AI -> Rastreando Merca Panamá / IMA en tiempo real...", type: "action" },
  { text: "Extraído Merca Panamá: Corvina a $3.25 / Lb. (Ahorro del 8% detectado)", type: "success" },
  { text: "Caitlyn AI -> Consultando combustible en Secretaría Nacional de Energía...", type: "action" },
  { text: "SNE: Gasolina 95 octanos a $0.98/L. Calculando logística Panamá Oeste...", type: "success" },
  { text: "Caitlyn AI -> Aplicando fallback de Gemini Flash para estimación de sal...", type: "action" },
  { text: "Gemini: Sal gruesa estimada en $0.05 por porción.", type: "success" },
  { text: "Cálculo de costo de Ceviche completado con éxito: $1.15 por porción.", type: "success" },
  { text: "Precio sugerido para venta (Margen 65%): $3.30.", type: "success" },
  { text: "Iniciando scraper Playwright para rastreo de contenedor MSC...", type: "action" },
  { text: "Abriendo navegador oculto Chromium en headless mode...", type: "action" },
  { text: "Bypass de cookies y validación de portal MSC exitoso.", type: "success" },
  { text: "Extrayendo ETA y Vessel Name de contenedor: MSC-892019...", type: "action" },
  { text: "ETA detectado: 12 de Junio de 2026. Guardando en Postgres (Prisma).", type: "success" },
  { text: "Iniciando auditor aduanero con visión computacional...", type: "action" },
  { text: "Analizando PDF de factura comercial contra declaración de aduanas...", type: "action" },
  { text: "Auditoría completada. 0 discrepancias arancelarias encontradas.", type: "success" }
];

export const Caitlyn = () => {
  const [activeTab, setActiveTab] = useState<"general" | "beauty" | "market">("general");
  const [logs, setLogs] = useState<Array<{ text: string; type: string }>>([]);
  const logIndexRef = useRef(0);
  const consoleBodyRef = useRef<HTMLDivElement>(null);

  // Cycle through log messages to simulate terminal logs
  useEffect(() => {
    // Initial logs load
    setLogs(LOG_MESSAGES.slice(0, 4));
    logIndexRef.current = 4;

    const interval = setInterval(() => {
      if (logIndexRef.current < LOG_MESSAGES.length) {
        setLogs((prev) => [...prev, LOG_MESSAGES[logIndexRef.current]]);
        logIndexRef.current += 1;
      } else {
        // Reset and clear logs when finished to loop again
        setLogs(LOG_MESSAGES.slice(0, 3));
        logIndexRef.current = 3;
      }
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  // Auto-scroll terminal sin afectar el viewport global
  useEffect(() => {
    if (consoleBodyRef.current) {
      consoleBodyRef.current.scrollTop = consoleBodyRef.current.scrollHeight;
    }
  }, [logs]);

  const activeMode = AVATAR_MODES.find(mode => mode.id === activeTab) || AVATAR_MODES[0];

  return (
    <section id="caitlyn" className="caitlyn">
      <div className="caitlyn__container">
        
        {/* Section Header */}
        <div className="caitlyn__header">
          <motion.span 
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="caitlyn__label"
          >
            Proyecto Estrella
          </motion.span>
          <motion.h2 
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="caitlyn__title"
          >
            Caitlyn AI: <span>El Cerebro Inteligente</span>
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="caitlyn__subtitle"
          >
            Caitlyn es un ecosistema autónomo de IA y automatización que conecta el mundo digital con la logística aduanera y el comercio local tradicional en Centroamérica.
          </motion.p>
        </div>

        {/* Section Content Grid */}
        <div className="caitlyn__grid">
          
          {/* Left Side: Three Main Superpowers */}
          <motion.div 
            variants={staggeredContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="caitlyn__info"
          >
            <h3 className="projects__card-title" style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>
              Los Tres Superpoderes de Caitlyn
            </h3>
            
            <div className="caitlyn__features">
              
              {/* Feature 1 */}
              <motion.div variants={fadeInUp} className="caitlyn__feature-card">
                <div className="caitlyn__feature-icon">
                  <Search size={22} />
                </div>
                <div>
                  <h4 className="caitlyn__feature-title">Itinerary Hunter (Buscador Activo)</h4>
                  <p className="caitlyn__feature-desc">
                    Navega de forma sigilosa por los portales navieros del mundo (Maersk, MSC, Hapag-Lloyd) simulando inyección de eventos nativos en Playwright, logrando saltar cookies y extraer de forma exacta la información logística.
                  </p>
                </div>
              </motion.div>

              {/* Feature 2 */}
              <motion.div variants={fadeInUp} className="caitlyn__feature-card">
                <div className="caitlyn__feature-icon">
                  <DollarSign size={22} />
                </div>
                <div>
                  <h4 className="caitlyn__feature-title">Costeo Inteligente en 3 Niveles</h4>
                  <p className="caitlyn__feature-desc">
                    Calcula el costo real de una receta o producto consultando el stock interno, precios del combustible en la SNE, canasta básica familiar en la ACODECO y alimentos frescos en Merca Panamá, con fallback en Gemini.
                  </p>
                </div>
              </motion.div>

              {/* Feature 3 */}
              <motion.div variants={fadeInUp} className="caitlyn__feature-card">
                <div className="caitlyn__feature-icon">
                  <FileCheck size={22} />
                </div>
                <div>
                  <h4 className="caitlyn__feature-title">Auditoría Aduanera con IA y Visión</h4>
                  <p className="caitlyn__feature-desc">
                    Actúa como un auditor inteligente comparando facturas comerciales contra declaraciones de aduana (SIGA) mediante visión por computadora (EasyOCR + PyTorch) para prevenir costosas multas administrativas.
                  </p>
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* Right Side: Interactive Showcase & Live Logs */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="caitlyn__visuals"
          >
            {/* Avatar Selector tabs */}
            <div className="caitlyn__avatar-selector">
              {AVATAR_MODES.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setActiveTab(mode.id)}
                  className={`caitlyn__avatar-tab ${activeTab === mode.id ? "caitlyn__avatar-tab--active" : ""}`}
                >
                  {mode.name.split(" ")[1] || "Core"}
                </button>
              ))}
            </div>

            {/* Display Card */}
            <div className="caitlyn__display-card">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMode.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                  <div className="caitlyn__avatar-wrapper">
                    <img src={activeMode.avatarUrl} alt={activeMode.name} />
                    <span className="caitlyn__avatar-badge">{activeMode.badge}</span>
                  </div>

                  <h4 className="caitlyn__avatar-name">{activeMode.name}</h4>
                  <span className="caitlyn__avatar-role">{activeMode.role}</span>
                  <p className="projects__description" style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                    {activeMode.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Console log simulator */}
              <div className="caitlyn__console">
                <div className="caitlyn__console-header">
                  <span className="caitlyn__console-dot" />
                  <span className="caitlyn__console-dot" />
                  <span className="caitlyn__console-dot" />
                  <Terminal size={12} style={{ color: 'var(--color-primary)', opacity: 0.7 }} />
                  <span className="caitlyn__console-title">Live event narration (websockets)</span>
                </div>
                
                <div ref={consoleBodyRef} style={{ height: '95px', overflowY: 'hidden' }}>
                  {logs.map((log, index) => (
                    <div key={index} className={`caitlyn__console-line caitlyn__console-line--${log.type}`}>
                      &gt; {log.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
