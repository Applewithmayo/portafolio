'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  'Python',
  'Odoo',
  'JavaScript (ES6+)',
  'TypeScript',
  'React',
  'Next.js',
  'PostgreSQL',
  'Tailwind CSS',
];

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section 
      id="about" 
      className="min-h-screen flex items-center py-24"
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-light-1 mb-12 font-mono">
          <span className="text-accent">01.</span> Sobre Mí
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
          <motion.div 
            className="md:col-span-3 text-light-2"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <p className="mb-4">
              Soy un Ingeniero en Informática con 5 años de experiencia transformando negocios a través de soluciones empresariales con Odoo y Python. Me especializo en la arquitectura de soluciones, el desarrollo de módulos a medida y la integración de sistemas para optimizar la eficiencia operativa.
            </p>
            <p className="mb-4">
              Mi enfoque es gestionar el ciclo completo de los proyectos: desde el levantamiento de requerimientos hasta el desarrollo, despliegue y soporte. Disfruto compartiendo mi conocimiento como docente y aplicando buenas prácticas para crear software escalable y mantenible.
            </p>
            <p className="mb-6">
              Aquí hay algunas de las tecnologías con las que he estado trabajando recientemente:
            </p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 font-mono text-sm">
              {skills.map((skill, i) => (
                <li key={i} className="before:content-['▹'] before:text-accent before:mr-2">
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            className="md:col-span-2 relative w-full max-w-xs mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-accent rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
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
      </div>
    </motion.section>
  );
};

export default About;
