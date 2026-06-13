'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experienceData = [
  {
    company: 'Acid Labs',
    role: 'Desarrollador Senior Odoo',
    date: 'Dic 2024 – Presente',
    highlight: '~41 módulos custom · 8 empresas migradas · 4 módulos IA',
    tasks: [
      'Lideré la arquitectura e implementación de ~41 módulos custom sobre Odoo 18 Enterprise: RRHH, IA, contabilidad, proyectos, helpdesk, QA e integraciones.',
      'Diseñé matching semántico de candidatos con embeddings (pgvector + Google Gemini) y parsing automático de CVs con LLMs, eliminando digitación manual.',
      'Construí acidlabs_data_api: API REST propia con autenticación por API key, rate limiting y documentación Swagger/OpenAPI.',
      'Integré sistemas externos: BUK, BigQuery, New Relic (APM), Pipefy y Odoo Sign.',
      'Lideré la migración contable multi-compañía de 8 empresas de Odoo v16 a v18 sin downtime crítico.',
      'Implementé la localización fiscal de Uruguay (facturación electrónica DGI) y el flujo de deploy staging → producción en AWS con pipeline CI/CD.',
    ],
  },
  {
    company: 'Duoc UC',
    role: 'Docente',
    date: 'Mar 2024 – Dic 2025',
    highlight: 'Modelamiento BD · Programación de Algoritmos',
    tasks: [
      'Docente de "Modelamiento de Base de Datos" y "Programación de Algoritmos" en educación superior.',
      'Formación en diseño relacional, normalización, SQL y lógica de programación aplicada.',
    ],
  },
  {
    company: 'Addval',
    role: 'Desarrollador Senior Odoo',
    date: 'Ene 2024 – Feb 2025',
    highlight: 'Módulos custom · Integraciones · Arquitectura',
    tasks: [
      'Diseño, desarrollo y personalización de módulos ERP en Python sobre Odoo.',
      'Levantamiento de requerimientos con clientes, arquitectura de soluciones y QA.',
      'Integración de Odoo con sistemas externos, asegurando interoperabilidad fluida.',
    ],
  },
  {
    company: 'APIUX Chile',
    role: 'Desarrollador Backend Python / Odoo',
    date: 'Mar 2023 – Ene 2024',
    highlight: 'Backend Python · Arquitectura · PostgreSQL',
    tasks: [
      'Desarrollo backend Python para Odoo y arquitectura de soluciones modulares.',
      'Normalización de datos en PostgreSQL y optimización de rendimiento.',
    ],
  },
  {
    company: 'Open Solutions',
    role: 'Analista Programador / Consultor',
    date: 'Dic 2019 – Feb 2023',
    highlight: '3 años · Contabilidad · RRHH · Proyectos',
    tasks: [
      'Desarrollo Python para Odoo en contabilidad, RRHH, proyectos y operaciones.',
      'Levantamiento de requerimientos, implementación, capacitación a usuarios finales y soporte continuo.',
      'Normalización y migración de datos en PostgreSQL.',
    ],
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.section id="experience" className="py-24" ref={ref}>
      <motion.h2
        className="text-3xl font-bold text-light-1 mb-12 font-mono"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <span className="text-accent">04.</span> Dónde he Trabajado
      </motion.h2>

      <motion.div
        className="flex flex-col md:flex-row gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.5 }}
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
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-bold text-light-1">
                {experienceData[activeTab].role}{' '}
                <span className="text-accent">@ {experienceData[activeTab].company}</span>
              </h3>
              <p className="font-mono text-sm text-light-2 mt-1">
                {experienceData[activeTab].date}
              </p>
              <p className="font-mono text-xs text-accent-secondary/80 mt-1 mb-5">
                {experienceData[activeTab].highlight}
              </p>
              <ul className="space-y-3">
                {experienceData[activeTab].tasks.map((task, i) => (
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
