'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight, FiArrowDown } from 'react-icons/fi';
import Avatar from './Avatar';

const metrics = [
  { num: 6, prefix: '', suffix: '+', label: 'Años en Odoo', sub: 'v13 → v19' },
  { num: 41, prefix: '~', suffix: '', label: 'Módulos custom', sub: 'en producción' },
  { num: 8, prefix: '', suffix: '', label: 'Empresas migradas', sub: 'v16 → v18' },
  { num: 4, prefix: '', suffix: '', label: 'Módulos de IA', sub: 'en reclutamiento' },
];

const SUBTITLE = 'Desarrollador Senior Odoo · Python · IA aplicada a ERP';

function CountUp({ target, prefix = '', suffix = '', duration = 1400, start }: {
  target: number; prefix?: string; suffix?: string; duration?: number; start: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const animate = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(target);
    };
    requestAnimationFrame(animate);
  }, [start, target, duration]);

  return <>{prefix}{count}{suffix}</>;
}

function Typewriter({ text, speed = 35, start }: { text: string; speed?: number; start: boolean }) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!start) return;
    let i = 0;
    setDisplayed('');
    setDone(false);
    const id = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(id);
      }
    }, speed);
    return () => clearInterval(id);
  }, [start, text, speed]);

  if (done) {
    return (
      <>
        Desarrollador Senior Odoo{' '}
        <span className="text-accent/60">·</span>{' '}
        Python{' '}
        <span className="text-accent/60">·</span>{' '}
        <span className="text-accent">IA aplicada a ERP</span>
      </>
    );
  }

  return (
    <>
      <span className="text-light-2">{displayed}</span>
      <span className="inline-block w-0.5 h-6 bg-accent ml-0.5 animate-pulse align-middle" />
    </>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.8 + i * 0.15, duration: 0.5, ease: 'easeOut' },
  }),
};

const Hero = () => {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-16 relative">
      <div className="w-full max-w-5xl flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">

      {/* ── Avatar (mobile: above text, desktop: right column) ── */}
      <motion.div
        className="flex-shrink-0 lg:order-last lg:pt-16"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
      >
        <Avatar />
      </motion.div>

      {/* ── Text content ── */}
      <div className="flex-1 min-w-0">
        <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp} className="mb-8">
          <span className="inline-flex items-center gap-2 bg-green-400/10 border border-green-400/30 text-green-400 font-mono text-sm px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Disponible para proyectos freelance
          </span>
        </motion.div>

        <motion.p custom={1} initial="hidden" animate="visible" variants={fadeUp} className="text-accent font-mono text-lg mb-4">
          Hola, soy
        </motion.p>

        <motion.h1
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-5xl sm:text-7xl font-bold leading-none tracking-tight"
          style={{
            background: 'linear-gradient(135deg, #f0f2ff 0%, #c4b5fd 50%, #8c70ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Eduardo Maldonado.
        </motion.h1>

        <motion.h2 custom={3} initial="hidden" animate="visible" variants={fadeUp} className="text-xl sm:text-3xl font-bold text-light-2 mt-4 min-h-[2rem]">
          <Typewriter text={SUBTITLE} start={started} />
        </motion.h2>

        <motion.p custom={4} initial="hidden" animate="visible" variants={fadeUp} className="text-light-2 max-w-2xl mt-6 text-base leading-relaxed">
          Construyo soluciones ERP de extremo a extremo — arquitectura, desarrollo, integración y deploy.
          Especialista en Odoo v13–v19 con foco creciente en inteligencia artificial aplicada a procesos
          de negocio: embeddings semánticos, LLMs y automatización inteligente.
        </motion.p>

        <motion.div custom={5} initial="hidden" animate="visible" variants={fadeUp} className="flex flex-wrap gap-4 mt-8">
          <a href="#servicios">
            <button className="inline-flex items-center gap-2 bg-accent hover:bg-accent/80 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent/25">
              Ver mis servicios <FiArrowRight />
            </button>
          </a>
          <a href="/portafolio/CV_EMaldonado_v3.pdf" download>
            <button className="inline-flex items-center gap-2 border border-accent/40 text-light-1 hover:border-accent hover:text-accent font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
              Descargar CV <FiDownload />
            </button>
          </a>
        </motion.div>

        <motion.div
          custom={6}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-light-2/10"
        >
          {metrics.map((m) => (
            <div key={m.label} className="group cursor-default">
              <p className="text-4xl font-bold text-accent group-hover:text-accent-secondary transition-colors duration-300 tabular-nums">
                <CountUp target={m.num} prefix={m.prefix} suffix={m.suffix} start={started} />
              </p>
              <p className="text-light-1 font-semibold text-sm mt-1">{m.label}</p>
              <p className="text-light-2 font-mono text-xs mt-0.5 opacity-70">{m.sub}</p>
            </div>
          ))}
        </motion.div>
      </div> {/* end text content */}
      </div> {/* end flex row */}

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-light-2/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <FiArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
