'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/translations';

type Lang = 'es' | 'en';

const projectData = [
  {
    title: { es: 'Plataforma de Reclutamiento con IA', en: 'AI Recruitment Platform' },
    description: {
      es: 'Matching semántico de candidatos con embeddings (pgvector + Google Gemini), parsing automático de CVs con LLMs y scoring híbrido. Eliminó la digitación manual de datos en el proceso de selección.',
      en: 'Semantic candidate matching with embeddings (pgvector + Google Gemini), automatic CV parsing with LLMs, and hybrid scoring. Eliminated manual data entry in the selection process.',
    },
    tags: ['Odoo v18', 'Python', 'pgvector', 'Google Gemini'],
    githubUrl: null, liveUrl: null,
  },
  {
    title: { es: 'Arquitectura de Integraciones API', en: 'API Integration Architecture' },
    description: {
      es: 'API REST propia (acidlabs_data_api) con autenticación por API key, rate limiting y documentación Swagger/OpenAPI. Conectores con BUK, BigQuery, New Relic, Pipefy y Odoo Sign.',
      en: 'Custom REST API (acidlabs_data_api) with API key authentication, rate limiting, and Swagger/OpenAPI documentation. Connectors with BUK, BigQuery, New Relic, Pipefy, and Odoo Sign.',
    },
    tags: ['Odoo', 'REST API', 'Swagger', 'BUK'],
    githubUrl: null, liveUrl: null,
  },
  {
    title: { es: 'Migración Contable Multi-Compañía', en: 'Multi-Company Accounting Migration' },
    description: {
      es: '8 empresas migradas de Odoo v16 a v18 sin downtime crítico. Limpieza de asientos contables, conciliación, deduplicación de contactos y validación completa post-migración.',
      en: '8 companies migrated from Odoo v16 to v18 with no critical downtime. Accounting entry cleanup, reconciliation, contact deduplication, and complete post-migration validation.',
    },
    tags: ['Odoo', 'Python', 'PostgreSQL', 'ETL'],
    githubUrl: null, liveUrl: null,
  },
  {
    title: { es: 'Facturación Electrónica Multi-País', en: 'Multi-Country E-Invoicing' },
    description: {
      es: 'Localización fiscal para Uruguay (CFE DGI) integrada al flujo contable nativo de Odoo. Cumplimiento normativo completo con flujos adaptados por país.',
      en: 'Tax localization for Uruguay (DGI CFE) integrated into Odoo\'s native accounting flow. Full regulatory compliance with country-specific adapted workflows.',
    },
    tags: ['Odoo', 'Facturación', 'Contabilidad', 'UY'],
    githubUrl: null, liveUrl: null,
  },
  {
    title: { es: 'Módulo de QA Testing para Odoo', en: 'QA Testing Module for Odoo' },
    description: {
      es: 'Sistema de QA nativo en Odoo v18: suites de prueba, casos, pasos, reportes PDF y generación automática de tareas correctivas. Construido desde cero sin dependencias externas.',
      en: 'Native QA system in Odoo v18: test suites, cases, steps, PDF reports, and automatic corrective task generation. Built from scratch with no external dependencies.',
    },
    tags: ['Odoo v18', 'Python', 'XML', 'QWeb'],
    githubUrl: null, liveUrl: null,
  },
  {
    title: { es: 'Localización RRHH Chile', en: 'Chile HR Localization' },
    description: {
      es: 'Implementación completa del módulo de RRHH de Odoo adaptado a legislación chilena: contratos, finiquitos, nómina y flujos de onboarding automatizados por cron (Nacional/Internacional).',
      en: "Complete implementation of Odoo's HR module adapted to Chilean legislation: contracts, terminations, payroll, and automated onboarding workflows via cron (National/International).",
    },
    tags: ['Odoo', 'RRHH', 'Python', 'CL'],
    githubUrl: null, liveUrl: null,
  },
];

const Projects = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { lang } = useLanguage();
  const tr = t[lang].projects;

  return (
    <motion.section id="projects" className="py-24" ref={ref}>
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
        {projectData.map((project, i) => (
          <motion.div
            key={i}
            className="group bg-dark-2/50 border border-light-2/10 hover:border-accent/40 rounded-xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5"
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <div className="text-accent text-2xl">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <div className="flex items-center gap-4 text-light-2">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors"><FiGithub size={18} /></a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors"><FiExternalLink size={18} /></a>
                  )}
                </div>
              </div>
              <h3 className="text-lg font-bold text-light-1 mb-2 group-hover:text-accent transition-colors duration-300">
                {project.title[lang as Lang]}
              </h3>
              <p className="text-light-2 text-sm leading-relaxed">{project.description[lang as Lang]}</p>
            </div>
            <ul className="flex flex-wrap gap-2 mt-5">
              {project.tags.map((tag) => (
                <li key={tag} className="bg-accent-secondary/10 text-accent-secondary text-xs font-mono px-2 py-1 rounded">{tag}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
