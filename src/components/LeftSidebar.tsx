'use client'

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

const LeftSidebar = () => {
  return (
    <motion.div 
      className="fixed bottom-0 left-10 w-10 z-10 hidden lg:block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
    >
      <ul className="flex flex-col items-center gap-6 after:content-[''] after:block after:w-px after:h-24 after:bg-light-2 after:mt-6">
        <li>
          <a href="https://github.com/Applewithmayo" target="_blank" rel="noreferrer" className="text-light-2 hover:text-accent transition-colors">
            <FiGithub size={20} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/edomaldonadodev/" target="_blank" rel="noreferrer" className="text-light-2 hover:text-accent transition-colors">
            <FiLinkedin size={20} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/applewithmayopoh/" target="_blank" rel="noreferrer" className="text-light-2 hover:text-accent transition-colors">
            <FiInstagram size={20} />
          </a>
        </li>
      </ul>
    </motion.div>
  );
};

export default LeftSidebar;
