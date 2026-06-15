'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/translations';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const tr = t[lang].nav;

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-dark-1/90 backdrop-blur-md border-b border-light-2/5"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-accent font-mono text-2xl font-bold tracking-tight hover:text-accent-secondary transition-colors duration-200"
        >
          EM
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center space-x-6">
          {tr.links.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
            >
              <a
                href={item.href}
                className="font-mono text-sm text-light-2 hover:text-accent transition-colors duration-200"
              >
                <span className="text-accent">0{index + 1}.</span> {item.name}
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          {/* Language toggle */}
          <motion.button
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="font-mono text-xs border border-accent/40 text-accent hover:bg-accent/10 px-3 py-1.5 rounded transition-colors duration-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.3 }}
            title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          >
            {tr.langToggle}
          </motion.button>

          <motion.a
            href="/portafolio/CV_EMaldonado_v3.pdf"
            download
            className="inline-flex items-center gap-2 border border-accent text-accent hover:bg-accent hover:text-white font-mono text-sm px-4 py-2 rounded transition-colors duration-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.3 }}
          >
            <FiDownload size={14} /> CV
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="font-mono text-xs border border-accent/40 text-accent px-2 py-1 rounded"
          >
            {tr.langToggle}
          </button>
          <button
            className="text-accent p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={tr.menuLabel}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-dark-1/95 border-t border-light-2/10"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {tr.links.map((item, index) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="font-mono text-sm text-light-2 hover:text-accent transition-colors duration-200 block py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-accent">0{index + 1}.</span> {item.name}
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-light-2/10">
                <a
                  href="/portafolio/CV_EMaldonado_v3.pdf"
                  download
                  className="inline-flex items-center gap-2 border border-accent text-accent font-mono text-sm px-4 py-2 rounded"
                  onClick={() => setIsOpen(false)}
                >
                  <FiDownload size={14} /> {tr.downloadCV}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
