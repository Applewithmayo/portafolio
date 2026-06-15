'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiPackage, FiLink, FiRefreshCw, FiCpu, FiBriefcase, FiServer } from 'react-icons/fi';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/translations';

const servicesData = [
  {
    icon: FiPackage,
    title: { es: 'Módulos Custom Odoo', en: 'Custom Odoo Modules' },
    description: {
      es: 'Desarrollo de módulos a medida sobre Odoo v13–v19: modelos, vistas QWeb, lógica de negocio, reportes PDF y wizards. Desde cero o extendiendo módulos nativos.',
      en: 'Custom module development on Odoo v13–v19: models, QWeb views, business logic, PDF reports, and wizards. From scratch or extending native modules.',
    },
    tags: ['Python', 'ORM', 'QWeb', 'OWL'],
  },
  {
    icon: FiLink,
    title: { es: 'Integraciones API', en: 'API Integrations' },
    description: {
      es: 'Conectores entre Odoo y sistemas externos vía REST API: BUK, Shopify, BigQuery, New Relic, Pipefy. APIs propias con autenticación, rate limiting y documentación Swagger/OpenAPI.',
      en: 'Connectors between Odoo and external systems via REST API: BUK, Shopify, BigQuery, New Relic, Pipefy. Custom APIs with authentication, rate limiting, and Swagger/OpenAPI documentation.',
    },
    tags: ['REST API', 'Webhooks', 'Swagger'],
  },
  {
    icon: FiRefreshCw,
    title: { es: 'Migraciones Odoo', en: 'Odoo Migrations' },
    description: {
      es: '8 empresas migradas de v16 a v18 sin downtime crítico. Limpieza de datos, conciliación contable, deduplicación de registros y validación completa post-migración.',
      en: '8 companies migrated from v16 to v18 with no critical downtime. Data cleanup, accounting reconciliation, record deduplication, and complete post-migration validation.',
    },
    tags: ['v13 → v19', 'PostgreSQL', 'ETL'],
  },
  {
    icon: FiCpu,
    title: { es: 'IA aplicada a ERP', en: 'AI Applied to ERP' },
    description: {
      es: 'Matching semántico con embeddings (pgvector + Google Gemini), parsing de CVs con LLMs, generación automática de contenido e integración de inteligencia artificial en flujos Odoo.',
      en: 'Semantic matching with embeddings (pgvector + Google Gemini), CV parsing with LLMs, automatic content generation, and AI integration into Odoo workflows.',
    },
    tags: ['Embeddings', 'LLMs', 'pgvector'],
  },
  {
    icon: FiBriefcase,
    title: { es: 'Consultoría y Arquitectura', en: 'Consulting & Architecture' },
    description: {
      es: 'Levantamiento de requerimientos, diseño de arquitectura ERP, optimización de procesos y acompañamiento técnico en implementaciones. Gestión ágil del ciclo completo del proyecto.',
      en: 'Requirements gathering, ERP architecture design, process optimization, and technical support throughout implementations. Agile management of the complete project lifecycle.',
    },
    tags: ['Análisis', 'Arquitectura', 'Scrum'],
  },
  {
    icon: FiServer,
    title: { es: 'Deploy y DevOps', en: 'Deploy & DevOps' },
    description: {
      es: 'Configuración de ambientes staging/producción en AWS (SSM), pipelines CI/CD, distribución de módulos compilados a bytecode y monitoreo con New Relic.',
      en: 'Staging/production environment setup on AWS (SSM), CI/CD pipelines, compiled module distribution to bytecode, and monitoring with New Relic.',
    },
    tags: ['AWS', 'Docker', 'CI/CD', 'Linux'],
  },
];

const CARD_BG = 'rgba(48,45,78,0.5)';

type Lang = 'es' | 'en';

function ServiceCard({ service, index, inView, lang }: {
  service: typeof servicesData[0]; index: number; inView: boolean; lang: Lang;
}) {
  const Icon = service.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.background = `radial-gradient(320px circle at ${e.clientX - rect.left}px ${e.clientY - rect.top}px, rgba(140,112,255,0.14), transparent 65%), ${CARD_BG}`;
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
          {service.title[lang]}
        </h3>
        <p className="text-light-2 text-sm leading-relaxed mb-4">{service.description[lang]}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span key={tag} className="bg-accent/10 text-accent text-xs font-mono px-2 py-1 rounded">{tag}</span>
        ))}
      </div>
    </motion.div>
  );
}

const Services = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { lang } = useLanguage();
  const tr = t[lang].services;

  return (
    <section id="servicios" className="py-24" ref={ref}>
      <motion.h2
        className="text-3xl font-bold text-light-1 mb-4 font-mono"
        initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
      >
        <span className="text-accent">{tr.num}</span> {tr.title}
      </motion.h2>
      <motion.p
        className="text-light-2 max-w-2xl mb-12"
        initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}
      >
        {tr.subtitle}
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service, i) => (
          <ServiceCard key={i} service={service} index={i} inView={inView} lang={lang} />
        ))}
      </div>
    </section>
  );
};

export default Services;
