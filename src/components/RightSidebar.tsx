'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/translations';

const RightSidebar = () => {
  const { lang } = useLanguage();
  const tr = t[lang].sidebar;

  return (
    <motion.div
      className="fixed bottom-0 right-10 w-10 z-10 hidden lg:block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-6 after:content-[''] after:block after:w-px after:h-24 after:bg-light-2 after:mt-6">
        <a
          href="mailto:ed.maldonadoe@gmail.com"
          className="writing-mode-vertical-rl font-mono text-light-2 tracking-widest text-sm hover:text-accent transition-colors"
        >
          {tr.contact}
        </a>
      </div>
    </motion.div>
  );
};

export default RightSidebar;
