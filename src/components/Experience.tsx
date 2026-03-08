'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experienceData = [
  {
    company: 'Acid Labs',
    role: 'Desarrollador Senior Odoo',
    date: 'Dic 2024 - Presente',
    tasks: [
      'Diseño, implementación e integración de soluciones tecnológicas para optimizar procesos empresariales.',
      'Gestión del ciclo completo del desarrollo: desde el levantamiento de requerimientos hasta el deploy y soporte.',
      'Desarrollo de más de 20 módulos personalizados y 10 integraciones externas vía API REST.',
      'Participación en proyectos de optimización de procesos con IA aplicados al ecosistema Odoo.'
    ]
  },
  {
    company: 'Duoc UC',
    role: 'Docente',
    date: 'Mar 2024 - Dic 2025',
    tasks: [
      'Docente de las asignaturas "Modelamiento de Base de Datos" y "Programación de Algoritmos".',
      'Enseñanza de fundamentos de diseño de bases de datos relacionales y lógica de programación.',
    ]
  },
  {
    company: 'Addval',
    role: 'Desarrollador Senior Odoo',
    date: 'Ene 2024 - Feb 2025',
    tasks: [
      'Diseño, desarrollo y personalización de módulos y funcionalidades del sistema ERP Odoo.',
      'Integración de Odoo con otros sistemas y plataformas, asegurando una interoperabilidad fluida.',
      'Identificación y solución de problemas técnicos en el sistema para optimizar su rendimiento.',
    ]
  },
  {
    company: 'Apiux Tecnología',
    role: 'Desarrollador de Software',
    date: 'Ene 2023 - Ene 2024',
    tasks: [
      'Implementación y mejora de sistemas ERP, específicamente Odoo, utilizando Python.',
      'Desarrollo de soluciones modulares para optimizar y ampliar las capacidades del sistema.',
    ]
  },
    {
    company: 'Open Solutions',
    role: 'Analista Desarrollador Odoo',
    date: 'Ene 2020 - Dic 2022',
    tasks: [
      'Implementación, personalización y soporte del sistema ERP Odoo.',
      'Análisis de requisitos, configuración de Odoo y desarrollo de módulos personalizados.',
      'Capacitación a usuarios finales y soporte continuo para mejorar el uso del sistema.'
    ]
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      id="experience"
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
          <span className="text-accent">03.</span> Dónde he Trabajado
        </motion.h2>
        <motion.div 
          className="flex flex-col md:flex-row gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="flex md:flex-col md:w-1/4 overflow-x-auto">
            {experienceData.map((exp, index) => (
              <button
                key={exp.company}
                onClick={() => setActiveTab(index)}
                className={`text-left p-3 px-4 w-full font-mono text-sm border-b-2 md:border-b-0 md:border-l-2 transition-colors duration-300 whitespace-nowrap ${
                  activeTab === index
                    ? 'border-accent text-accent bg-accent/10'
                    : 'border-light-2/20 text-light-2 hover:bg-accent/10 hover:text-accent'
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          <div className="md:w-3/4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="text-xl font-bold text-light-1">
                  {experienceData[activeTab].role}{' '}
                  <span className="text-accent">@ {experienceData[activeTab].company}</span>
                </h3>
                <p className="font-mono text-sm text-light-2 mt-1 mb-4">
                  {experienceData[activeTab].date}
                </p>
                <ul className="space-y-2">
                  {experienceData[activeTab].tasks.map((task, i) => (
                    <li key={i} className="relative pl-5 text-light-2">
                      <span className="absolute left-0 text-accent">▹</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;
