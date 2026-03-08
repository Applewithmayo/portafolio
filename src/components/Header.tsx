'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-dark-1/80 backdrop-blur-md"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-accent font-mono text-2xl font-bold">
          EM
        </Link>
        <ul className="hidden md:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <motion.li 
              key={item.name}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
            >
              <a href={item.href} className="font-mono text-light-1 hover:text-accent transition-colors">
                <span className="text-accent">0{index + 1}.</span> {item.name}
              </a>
            </motion.li>
          ))}
        </ul>
        <button className="md:hidden text-accent">
          {/* Mobile menu icon will go here */}
        </button>
      </nav>
    </motion.header>
  );
};

export default Header;
