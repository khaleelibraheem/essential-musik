"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Artists', id: 'artists' },
    { name: 'About', id: 'about' },
    { name: 'Shop', id: 'shop' },
    { name: 'Contact', id: 'contact' },
    { name: 'FAQ', id: 'faq' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-black bg-opacity-90 backdrop-blur-lg' : 'bg-black md:bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="flex justify-between items-center h-20">
          <motion.div 
            className="text-2xl sm:text-3xl font-bold cursor-pointer tracking-tight"
            whileHover={{ scale: 1.05 }}
            onClick={() => setCurrentPage('home')}
          >
            Essential Musik
          </motion.div>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </motion.div>
          </button>

          <div className="hidden md:flex space-x-12">
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                onClick={() => setCurrentPage(link.id)}
                className={`relative text-sm tracking-wide hover:text-white transition-colors ${
                  currentPage === link.id ? 'text-white' : 'text-gray-400'
                }`}
                whileHover={{ y: -2 }}
              >
                {link.name}
                {currentPage === link.id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-white"
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black bg-opacity-95 backdrop-blur-xl"
          >
            <div className="px-6 py-4 space-y-2">
              {navLinks.map((link) => (
                <motion.button
                  key={link.id}
                  onClick={() => {
                    setCurrentPage(link.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-lg ${
                    currentPage === link.id ? 'bg-white bg-opacity-10 text-white' : 'text-gray-400'
                  }`}
                  whileHover={{ x: 8 }}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;