'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stackGroups = [
  { category: 'Odoo', items: ['Odoo v13–v19', 'ORM', 'QWeb', 'OWL', 'Odoo Sign'] },
  { category: 'Lenguajes', items: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'XML'] },
  { category: 'IA & LLMs', items: ['Google Gemini', 'Embeddings', 'pgvector', 'Claude Code'] },
  { category: 'Datos', items: ['PostgreSQL', 'BigQuery', 'MySQL'] },
  { category: 'DevOps', items: ['AWS (SSM)', 'Docker', 'CI/CD', 'Linux'] },
  { category: 'Integraciones', items: ['REST APIs', 'BUK', 'New Relic', 'Pipefy'] },
];

const certifications = [
  'Odoo V13 Functional Certification',
  'Scrum Foundation Professional Certificate (SFPC)',
];

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.section
      id="about"
      className="py-24"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-light-1 mb-12 font-mono">
        <span className="text-accent">02.</span> Sobre Mí
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
        <motion.div
          className="md:col-span-3 text-light-2"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p className="mb-4">
            Soy un Ingeniero en Informática con <strong className="text-light-1">6+ años de experiencia</strong> construyendo
            soluciones ERP de extremo a extremo: arquitectura, desarrollo, integración y deploy. Especialista en
            Python, PostgreSQL y Odoo v13–v19, con foco reciente en <strong className="text-accent">inteligencia artificial
            aplicada a procesos de negocio</strong>: matching semántico con embeddings (pgvector), parsing de
            documentos con LLMs y generación de contenido.
          </p>
          <p className="mb-4">
            Lidero el desarrollo sobre Odoo 18 Enterprise en un repositorio de ~41 módulos custom, integrando
            desarrollo asistido por IA al flujo diario de ingeniería. También me desempeño como docente
            universitario en bases de datos y programación, lo que me permite comunicar soluciones complejas
            con claridad.
          </p>
          <p className="mb-6 text-sm text-light-2/70 font-mono">
            Español nativo · Inglés intermedio · Santiago, Chile · Remoto / Híbrido
          </p>

          <div className="space-y-4">
            {stackGroups.map((group) => (
              <div key={group.category}>
                <p className="text-accent font-mono text-xs mb-2 uppercase tracking-widest">{group.category}</p>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="bg-dark-2/60 border border-light-2/10 text-light-2 font-mono text-xs px-3 py-1 rounded">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-light-2/10">
            <p className="text-accent font-mono text-xs mb-3 uppercase tracking-widest">Certificaciones</p>
            <ul className="space-y-1">
              {certifications.map((cert) => (
                <li key={cert} className="text-light-2 text-sm flex items-center gap-2">
                  <span className="text-accent">▹</span> {cert}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="md:col-span-2 relative w-full max-w-xs mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-accent rounded-lg blur opacity-50 group-hover:opacity-80 transition duration-700"></div>
            <Image
              src="/portafolio/profile.png"
              alt="Eduardo Maldonado"
              width={300}
              height={300}
              className="relative rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
