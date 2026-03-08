'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';

const Hero = () => {
  const intro = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1 + i * 0.15,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="hero" className="min-h-screen flex items-center container mx-auto px-6">
      <div>
        <motion.p 
          className="text-accent font-mono mb-4"
          custom={1}
          initial="hidden"
          animate="visible"
          variants={intro}
        >
          Hola, mi nombre es
        </motion.p>
        <motion.h1 
          className="text-4xl sm:text-6xl md:text-7xl font-bold text-light-1"
          custom={2}
          initial="hidden"
          animate="visible"
          variants={intro}
        >
          Eduardo Maldonado.
        </motion.h1>
        <motion.h2 
          className="text-3xl sm:text-5xl md:text-6xl font-bold text-light-2 mt-2"
          custom={3}
          initial="hidden"
          animate="visible"
          variants={intro}
        >
          Construyo soluciones con Odoo y Python.
        </motion.h2>
        <motion.p 
          className="text-light-2 max-w-xl mt-6"
          custom={4}
          initial="hidden"
          animate="visible"
          variants={intro}
        >
          Soy un desarrollador de software especializado en crear y optimizar sistemas ERP. Actualmente, me enfoco en construir soluciones a medida que mejoran la eficiencia y la productividad de las empresas.
        </motion.p>
        <motion.div
          custom={5}
          initial="hidden"
          animate="visible"
          variants={intro}
        >
          <a href="#projects">
            <Button variant="outline" size="lg" className="mt-8">
              ¡Mira mis proyectos!
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
