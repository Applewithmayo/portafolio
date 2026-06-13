'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiPackage, FiLink, FiRefreshCw, FiCpu, FiBriefcase, FiServer } from 'react-icons/fi';

const services = [
  {
    icon: FiPackage,
    title: 'Módulos Custom Odoo',
    description:
      'Desarrollo de módulos a medida sobre Odoo v13–v19: modelos, vistas QWeb, lógica de negocio, reportes PDF y wizards. Desde cero o extendiendo módulos nativos.',
    tags: ['Python', 'ORM', 'QWeb', 'OWL'],
  },
  {
    icon: FiLink,
    title: 'Integraciones API',
    description:
      'Conectores entre Odoo y sistemas externos vía REST API: BUK, Shopify, BigQuery, New Relic, Pipefy. APIs propias con autenticación, rate limiting y documentación Swagger/OpenAPI.',
    tags: ['REST API', 'Webhooks', 'Swagger'],
  },
  {
    icon: FiRefreshCw,
    title: 'Migraciones Odoo',
    description:
      '8 empresas migradas de v16 a v18 sin downtime crítico. Limpieza de datos, conciliación contable, deduplicación de registros y validación completa post-migración.',
    tags: ['v13 → v19', 'PostgreSQL', 'ETL'],
  },
  {
    icon: FiCpu,
    title: 'IA aplicada a ERP',
    description:
      'Matching semántico con embeddings (pgvector + Google Gemini), parsing de CVs con LLMs, generación automática de contenido e integración de inteligencia artificial en flujos Odoo.',
    tags: ['Embeddings', 'LLMs', 'pgvector'],
  },
  {
    icon: FiBriefcase,
    title: 'Consultoría y Arquitectura',
    description:
      'Levantamiento de requerimientos, diseño de arquitectura ERP, optimización de procesos y acompañamiento técnico en implementaciones. Gestión ágil del ciclo completo del proyecto.',
    tags: ['Análisis', 'Arquitectura', 'Scrum'],
  },
  {
    icon: FiServer,
    title: 'Deploy y DevOps',
    description:
      'Configuración de ambientes staging/producción en AWS (SSM), pipelines CI/CD, distribución de módulos compilados a bytecode y monitoreo con New Relic.',
    tags: ['AWS', 'Docker', 'CI/CD', 'Linux'],
  },
];

const CARD_BG = 'rgba(48,45,78,0.5)';

function ServiceCard({ service, index, inView }: {
  service: typeof services[0];
  index: number;
  inView: boolean;
}) {
  const Icon = service.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.background = `radial-gradient(320px circle at ${x}px ${y}px, rgba(140,112,255,0.14), transparent 65%), ${CARD_BG}`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.background = CARD_BG;
  };

  return (
    <motion.div
      className="group border border-light-2/10 hover:border-accent/40 rounded-xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5 cursor-default"
      style={{ background: CARD_BG }}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
          <Icon size={22} className="text-accent" />
        </div>
        <h3 className="text-lg font-bold text-light-1 mb-2 group-hover:text-accent transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-light-2 text-sm leading-relaxed mb-4">{service.description}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span key={tag} className="bg-accent/10 text-accent text-xs font-mono px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

const Services = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="servicios" className="py-24" ref={ref}>
      <motion.h2
        className="text-3xl font-bold text-light-1 mb-4 font-mono"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <span className="text-accent">01.</span> Servicios
      </motion.h2>
      <motion.p
        className="text-light-2 max-w-2xl mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        ¿Tienes un proyecto en Odoo? Puedo acompañarte desde el análisis hasta el deploy.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <ServiceCard key={service.title} service={service} index={i} inView={inView} />
        ))}
      </div>
    </section>
  );
};

export default Services;
