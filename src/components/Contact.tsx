'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from './ui/button';

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
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
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center text-center py-24"
      ref={ref}
    >
      <motion.h2 
        className="font-mono text-accent mb-4"
        custom={1}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
      >
        04. ¿Cuál es el Siguiente Paso?
      </motion.h2>

      <motion.h3 
        className="text-4xl md:text-5xl font-bold text-light-1 mb-4"
        custom={2}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
      >
        Ponte en Contacto
      </motion.h3>
      
      <motion.p 
        className="text-light-2 max-w-xl mx-auto mb-8"
        custom={3}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
      >
        Estoy convencido de que la colaboración y el intercambio de ideas impulsan la innovación. Si tienes un proyecto en mente, una pregunta técnica o simplemente quieres conectar, mi bandeja de entrada está siempre abierta. ¡Hablemos!
      </motion.p>
      
      <motion.div
        custom={4}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
      >
        <a href="mailto:ed.maldonadoe@proton.me">
          <Button variant="outline" size="lg">
            ¡Di Hola!
          </Button>
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
