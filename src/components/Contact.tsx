'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiLinkedin, FiDownload } from 'react-icons/fi';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/translations';

const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { lang } = useLanguage();
  const tr = t[lang].contact;

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
  };

  return (
    <motion.section id="contact" className="py-32 flex flex-col items-center text-center" ref={ref}>
      <motion.p className="font-mono text-accent mb-4 text-sm" custom={1} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeUp}>
        {tr.num}
      </motion.p>

      <motion.h3 className="text-4xl md:text-5xl font-bold text-light-1 mb-6 leading-tight" custom={2} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeUp}>
        {tr.title1}<br />
        <span className="text-accent">{tr.title2}</span>
      </motion.h3>

      <motion.p className="text-light-2 max-w-lg mx-auto mb-10 leading-relaxed" custom={3} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeUp}>
        {tr.subtitle}
      </motion.p>

      <motion.div className="flex flex-col sm:flex-row gap-4 mb-12" custom={4} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeUp}>
        <a href="mailto:ed.maldonadoe@gmail.com" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/80 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200">
          <FiMail size={18} /> ed.maldonadoe@gmail.com
        </a>
        <a href="https://www.linkedin.com/in/edomaldonadodev/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-accent/40 text-light-1 hover:border-accent hover:text-accent font-semibold px-8 py-4 rounded-lg transition-colors duration-200">
          <FiLinkedin size={18} /> LinkedIn
        </a>
      </motion.div>

      <motion.a href="/portafolio/CV_EMaldonado_v3.pdf" download className="inline-flex items-center gap-2 text-light-2 hover:text-accent font-mono text-sm transition-colors duration-200" custom={5} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeUp}>
        <FiDownload size={14} /> {tr.downloadCV}
      </motion.a>
    </motion.section>
  );
};

export default Contact;
