'use client';

import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/translations';

const Footer = () => {
  const { lang } = useLanguage();
  const tr = t[lang].footer;

  return (
    <footer className="border-t border-light-2/10 py-10 mt-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-accent font-mono text-xl font-bold">EM</span>
          <p className="text-light-2 font-mono text-xs">{tr.tagline}</p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/Applewithmayo" target="_blank" rel="noreferrer" className="text-light-2 hover:text-accent transition-colors duration-200" aria-label="GitHub">
            <FiGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/edomaldonadodev/" target="_blank" rel="noreferrer" className="text-light-2 hover:text-accent transition-colors duration-200" aria-label="LinkedIn">
            <FiLinkedin size={18} />
          </a>
          <a href="mailto:ed.maldonadoe@gmail.com" className="text-light-2 hover:text-accent transition-colors duration-200" aria-label="Email">
            <FiMail size={18} />
          </a>
        </div>

        <p className="text-light-2/50 font-mono text-xs text-center md:text-right">
          {tr.built}<br />
          Next.js · Tailwind · Framer Motion
        </p>
      </div>
    </footer>
  );
};

export default Footer;
