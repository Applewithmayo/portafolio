'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';

const navItems = [
  { name: 'Servicios', href: '#servicios' },
  { name: 'Sobre Mí', href: '#about' },
  { name: 'Proyectos', href: '#projects' },
  { name: 'Experiencia', href: '#experience' },
  { name: 'Contacto', href: '#contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          {navItems.map((item, index) => (
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
          <motion.a
            href="/portafolio/CV_EMaldonado_v3.pdf"
            download
            className="inline-flex items-center gap-2 border border-accent text-accent hover:bg-accent hover:text-white font-mono text-sm px-4 py-2 rounded transition-colors duration-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.3 }}
          >
            <FiDownload size={14} /> CV
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-accent p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menú"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
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
              {navItems.map((item, index) => (
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
                  <FiDownload size={14} /> Descargar CV
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
