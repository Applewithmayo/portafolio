import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="border-t border-light-2/10 py-10 mt-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-accent font-mono text-xl font-bold">EM</span>
          <p className="text-light-2 font-mono text-xs">
            Desarrollador Senior Odoo · Python · IA aplicada a ERP
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Applewithmayo"
            target="_blank"
            rel="noreferrer"
            className="text-light-2 hover:text-accent transition-colors duration-200"
            aria-label="GitHub"
          >
            <FiGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/edomaldonadodev/"
            target="_blank"
            rel="noreferrer"
            className="text-light-2 hover:text-accent transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={18} />
          </a>
          <a
            href="mailto:ed.maldonadoe@gmail.com"
            className="text-light-2 hover:text-accent transition-colors duration-200"
            aria-label="Email"
          >
            <FiMail size={18} />
          </a>
        </div>

        <p className="text-light-2/50 font-mono text-xs text-center md:text-right">
          Diseñado y construido por Eduardo Maldonado<br />
          Next.js · Tailwind · Framer Motion
        </p>
      </div>
    </footer>
  );
};

export default Footer;
