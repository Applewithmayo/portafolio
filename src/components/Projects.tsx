'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projectData = [
  {
    title: 'Plataforma de Reclutamiento con IA',
    description:
      'Matching semántico de candidatos con embeddings (pgvector + Google Gemini), parsing automático de CVs con LLMs y scoring híbrido. Eliminó la digitación manual de datos en el proceso de selección.',
    tags: ['Odoo v18', 'Python', 'pgvector', 'Google Gemini'],
    githubUrl: null,
    liveUrl: null,
  },
  {
    title: 'Arquitectura de Integraciones API',
    description:
      'API REST propia (acidlabs_data_api) con autenticación por API key, rate limiting y documentación Swagger/OpenAPI. Conectores con BUK, BigQuery, New Relic, Pipefy y Odoo Sign.',
    tags: ['Odoo', 'REST API', 'Swagger', 'BUK'],
    githubUrl: null,
    liveUrl: null,
  },
  {
    title: 'Migración Contable Multi-Compañía',
    description:
      '8 empresas migradas de Odoo v16 a v18 sin downtime crítico. Limpieza de asientos contables, conciliación, deduplicación de contactos y validación completa post-migración.',
    tags: ['Odoo', 'Python', 'PostgreSQL', 'ETL'],
    githubUrl: null,
    liveUrl: null,
  },
  {
    title: 'Facturación Electrónica Multi-País',
    description:
      'Localización fiscal para Uruguay (CFE DGI) integrada al flujo contable nativo de Odoo. Cumplimiento normativo completo con flujos adaptados por país.',
    tags: ['Odoo', 'Facturación', 'Contabilidad', 'UY'],
    githubUrl: null,
    liveUrl: null,
  },
  {
    title: 'Módulo de QA Testing para Odoo',
    description:
      'Sistema de QA nativo en Odoo v18: suites de prueba, casos, pasos, reportes PDF y generación automática de tareas correctivas. Construido desde cero sin dependencias externas.',
    tags: ['Odoo v18', 'Python', 'XML', 'QWeb'],
    githubUrl: null,
    liveUrl: null,
  },
  {
    title: 'Localización RRHH Chile',
    description:
      'Implementación completa del módulo de RRHH de Odoo adaptado a legislación chilena: contratos, finiquitos, nómina y flujos de onboarding automatizados por cron (Nacional/Internacional).',
    tags: ['Odoo', 'RRHH', 'Python', 'CL'],
    githubUrl: null,
    liveUrl: null,
  },
];

const Projects = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.section id="projects" className="py-24" ref={ref}>
      <motion.h2
        className="text-3xl font-bold text-light-1 mb-4 font-mono"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <span className="text-accent">03.</span> Proyectos Destacados
      </motion.h2>
      <motion.p
        className="text-light-2 max-w-2xl mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Soluciones construidas en entornos de producción reales. Sin demos — todo en producción.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData.map((project, i) => (
          <motion.div
            key={project.title}
            className="group bg-dark-2/50 border border-light-2/10 hover:border-accent/40 rounded-xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <div className="text-accent text-2xl">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div className="flex items-center gap-4 text-light-2">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                      <FiGithub size={18} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                      <FiExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="text-lg font-bold text-light-1 mb-2 group-hover:text-accent transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-light-2 text-sm leading-relaxed">{project.description}</p>
            </div>
            <ul className="flex flex-wrap gap-2 mt-5">
              {project.tags.map((tag) => (
                <li key={tag} className="bg-accent-secondary/10 text-accent-secondary text-xs font-mono px-2 py-1 rounded">
                  {tag}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
