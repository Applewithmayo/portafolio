'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projectData = [
  {
    title: 'Plataforma Inteligente de Reclutamiento con IA',
    description: 'Diseño e implementación de un sistema completo de reclutamiento en Odoo v18. Integra parsing de CVs, búsqueda semántica y scoring híbrido.',
    tags: ['Odoo v18', 'Python', 'AI', 'Vector DB'],
    githubUrl: null,
    liveUrl: null,
  },
  {
    title: 'Arquitectura de Integración API',
    description: 'Desarrollo de conectores API entre Odoo y plataformas como Shopify (e-commerce), Buk (RRHH) y Justo (Food-tech), automatizando flujos de datos críticos.',
    tags: ['Odoo', 'API REST', 'Shopify', 'Buk'],
    githubUrl: null,
    liveUrl: null,
  },
  {
    title: 'Módulo de Facturación Multi-País',
    description: 'Habilitación de facturación electrónica (CFE en Uruguay) e internacional en Odoo, cumpliendo con normativas fiscales y adaptando flujos contables.',
    tags: ['Odoo', 'Facturación', 'Contabilidad'],
    githubUrl: null,
    liveUrl: null,
  },
  {
    title: 'Localización de Nómina y RRHH (Chile)',
    description: 'Implementación y adaptación completa del módulo de RRHH de Odoo para cumplir con la legislación chilena (contratos, finiquitos, etc.).',
    tags: ['Odoo', 'RRHH', 'Localización CL'],
    githubUrl: null,
    liveUrl: null,
  },
  {
    title: 'Módulo de QA y Gestión de Calidad para Odoo',
    description: 'Construcción desde cero de un módulo de QA nativo en Odoo v18. Permite definir suites de prueba, registrar resultados y generar tareas correctivas.',
    tags: ['Odoo v18', 'Python', 'XML'],
    githubUrl: null,
    liveUrl: null,
  },
  {
    title: 'Migración Contable Multi-Compañía',
    description: 'Ejecución de la migración de datos financieros para 7 empresas (Odoo v16 a v18), garantizando integridad histórica sin downtime crítico.',
    tags: ['Odoo', 'Python', 'PostgreSQL'],
    githubUrl: null,
    liveUrl: null,
  },
];

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <motion.section
      id="projects"
      className="min-h-screen flex items-center py-24"
      ref={ref}
    >
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-light-1 mb-12 font-mono"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-accent">02.</span> Proyectos que he Construido
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectData.map((project, i) => (
            <motion.div
              key={project.title}
              className="bg-dark-2 shadow-lg rounded-lg p-6 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300"
              custom={i}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={cardVariants}
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="text-accent text-3xl">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                  </div>
                  <div className="flex items-center gap-4 text-light-2">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="hover:text-accent"><FiGithub size={20} /></a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="hover:text-accent"><FiExternalLink size={20} /></a>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-light-1 mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-light-2 text-sm">{project.description}</p>
              </div>
              <ul className="flex flex-wrap gap-2 mt-4">
                {project.tags.map(tag => (
                  <li key={tag} className="bg-accent-secondary/10 text-accent-secondary text-xs font-mono px-2 py-1 rounded">
                    {tag}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
