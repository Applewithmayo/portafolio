'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/translations';

type Lang = 'es' | 'en';

const experienceData = [
  {
    company: 'Acid Labs',
    role:      { es: 'Desarrollador Senior Odoo', en: 'Senior Odoo Developer' },
    date:      'Dic 2024 – Presente',
    highlight: { es: '~41 módulos custom · 8 empresas migradas · 4 módulos IA', en: '~41 custom modules · 8 companies migrated · 4 AI modules' },
    tasks: {
      es: [
        'Lideré la arquitectura e implementación de ~41 módulos custom sobre Odoo 18 Enterprise: RRHH, IA, contabilidad, proyectos, helpdesk, QA e integraciones.',
        'Diseñé matching semántico de candidatos con embeddings (pgvector + Google Gemini) y parsing automático de CVs con LLMs, eliminando digitación manual.',
        'Construí acidlabs_data_api: API REST propia con autenticación por API key, rate limiting y documentación Swagger/OpenAPI.',
        'Integré sistemas externos: BUK, BigQuery, New Relic (APM), Pipefy y Odoo Sign.',
        'Lideré la migración contable multi-compañía de 8 empresas de Odoo v16 a v18 sin downtime crítico.',
        'Implementé la localización fiscal de Uruguay (facturación electrónica DGI) y el flujo de deploy staging → producción en AWS con pipeline CI/CD.',
      ],
      en: [
        'Led the architecture and implementation of ~41 custom modules on Odoo 18 Enterprise: HR, AI, accounting, projects, helpdesk, QA, and integrations.',
        'Designed semantic candidate matching with embeddings (pgvector + Google Gemini) and automatic CV parsing with LLMs, eliminating manual data entry.',
        'Built acidlabs_data_api: custom REST API with API key authentication, rate limiting, and Swagger/OpenAPI documentation.',
        'Integrated external systems: BUK, BigQuery, New Relic (APM), Pipefy, and Odoo Sign.',
        'Led multi-company accounting migration of 8 companies from Odoo v16 to v18 with no critical downtime.',
        'Implemented Uruguay fiscal localization (DGI electronic invoicing) and the staging → production deployment flow on AWS with CI/CD pipeline.',
      ],
    },
  },
  {
    company: 'Duoc UC',
    role:      { es: 'Docente', en: 'Lecturer' },
    date:      'Mar 2024 – Dic 2025',
    highlight: { es: 'Modelamiento BD · Programación de Algoritmos', en: 'DB Modeling · Algorithm Programming' },
    tasks: {
      es: [
        'Docente de "Modelamiento de Base de Datos" y "Programación de Algoritmos" en educación superior.',
        'Formación en diseño relacional, normalización, SQL y lógica de programación aplicada.',
      ],
      en: [
        'Lecturer for "Database Modeling" and "Algorithm Programming" in higher education.',
        'Training in relational design, normalization, SQL, and applied programming logic.',
      ],
    },
  },
  {
    company: 'Addval',
    role:      { es: 'Desarrollador Senior Odoo', en: 'Senior Odoo Developer' },
    date:      'Ene 2024 – Feb 2025',
    highlight: { es: 'Módulos custom · Integraciones · Arquitectura', en: 'Custom modules · Integrations · Architecture' },
    tasks: {
      es: [
        'Diseño, desarrollo y personalización de módulos ERP en Python sobre Odoo.',
        'Levantamiento de requerimientos con clientes, arquitectura de soluciones y QA.',
        'Integración de Odoo con sistemas externos, asegurando interoperabilidad fluida.',
      ],
      en: [
        'Design, development, and customization of ERP modules in Python on Odoo.',
        'Requirements gathering with clients, solution architecture, and QA.',
        'Integration of Odoo with external systems, ensuring seamless interoperability.',
      ],
    },
  },
  {
    company: 'APIUX Chile',
    role:      { es: 'Desarrollador Backend Python / Odoo', en: 'Python / Odoo Backend Developer' },
    date:      'Mar 2023 – Ene 2024',
    highlight: { es: 'Backend Python · Arquitectura · PostgreSQL', en: 'Python Backend · Architecture · PostgreSQL' },
    tasks: {
      es: [
        'Desarrollo backend Python para Odoo y arquitectura de soluciones modulares.',
        'Normalización de datos en PostgreSQL y optimización de rendimiento.',
      ],
      en: [
        'Python backend development for Odoo and modular solution architecture.',
        'Data normalization in PostgreSQL and performance optimization.',
      ],
    },
  },
  {
    company: 'Open Solutions',
    role:      { es: 'Analista Programador / Consultor', en: 'Software Analyst / Consultant' },
    date:      'Dic 2019 – Feb 2023',
    highlight: { es: '3 años · Contabilidad · RRHH · Proyectos', en: '3 years · Accounting · HR · Projects' },
    tasks: {
      es: [
        'Desarrollo Python para Odoo en contabilidad, RRHH, proyectos y operaciones.',
        'Levantamiento de requerimientos, implementación, capacitación a usuarios finales y soporte continuo.',
        'Normalización y migración de datos en PostgreSQL.',
      ],
      en: [
        'Python development for Odoo in accounting, HR, projects, and operations.',
        'Requirements gathering, implementation, end-user training, and ongoing support.',
        'Data normalization and migration in PostgreSQL.',
      ],
    },
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { lang } = useLanguage();
  const tr = t[lang].experience;

  return (
    <motion.section id="experience" className="py-24" ref={ref}>
      <motion.h2
        className="text-3xl font-bold text-light-1 mb-12 font-mono"
        initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
      >
        <span className="text-accent">{tr.num}</span> {tr.title}
      </motion.h2>

      <motion.div
        className="flex flex-col md:flex-row gap-8"
        initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.5 }}
      >
        {/* Tab list */}
        <div className="flex md:flex-col md:w-1/4 overflow-x-auto gap-0">
          {experienceData.map((exp, index) => (
            <button
              key={exp.company}
              onClick={() => setActiveTab(index)}
              className={`text-left p-3 px-4 w-full font-mono text-sm border-b-2 md:border-b-0 md:border-l-2 transition-all duration-200 whitespace-nowrap ${
                activeTab === index
                  ? 'border-accent text-accent bg-accent/10'
                  : 'border-light-2/20 text-light-2 hover:bg-accent/5 hover:text-accent hover:border-accent/50'
              }`}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="md:w-3/4">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${lang}`}
              initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-bold text-light-1">
                {experienceData[activeTab].role[lang as Lang]}{' '}
                <span className="text-accent">@ {experienceData[activeTab].company}</span>
              </h3>
              <p className="font-mono text-sm text-light-2 mt-1">{experienceData[activeTab].date}</p>
              <p className="font-mono text-xs text-accent-secondary/80 mt-1 mb-5">
                {experienceData[activeTab].highlight[lang as Lang]}
              </p>
              <ul className="space-y-3">
                {experienceData[activeTab].tasks[lang as Lang].map((task, i) => (
                  <li key={i} className="relative pl-5 text-light-2 text-sm leading-relaxed">
                    <span className="absolute left-0 text-accent">▹</span>
                    {task}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Experience;
