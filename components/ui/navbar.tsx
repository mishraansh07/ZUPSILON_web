'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface NavLink {
  name: string;
  id: string;
}

const navLinks: NavLink[] = [
  { name: 'Charter', id: 'charter' },
  { name: 'Laboratory', id: 'about' },
  { name: 'Benchmarks', id: 'benchmarks' },
  { name: 'Archive', id: 'lab' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Handle scroll for glass effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b-4 border-black ${
          scrolled ? 'bg-white/95 backdrop-blur-md h-16' : 'bg-white h-20'
        }`}
      >
        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-[-4px] left-0 right-0 h-1 bg-[#60507c] z-[101] origin-[0%]"
          style={{ scaleX }}
        />

        <div className="container mx-auto px-8 lg:px-12 h-full flex items-center justify-between">
          {/* Brand */}
          <div 
            className="flex items-center gap-3 sm:gap-4 cursor-pointer group" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="relative">
              <img src="/logo.png" alt="Logo" className="h-5 lg:h-8 w-auto grayscale brightness-0 group-hover:grayscale-0 transition-all duration-500" />
              <div className="absolute -inset-2 border border-[#60507c]/0 group-hover:border-[#60507c]/50 transition-all duration-500 scale-110 opacity-0 group-hover:opacity-100"></div>
            </div>
            <span className="text-black text-lg lg:text-xl font-black tracking-widest uppercase">Zupsilon</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center h-full">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="h-full px-8 text-[11px] font-black uppercase tracking-[0.25em] text-black hover:bg-black hover:text-white transition-all duration-200 border-l-2 border-black last:border-r-2"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Right Section: Status & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3 px-4 py-2 border-2 border-black bg-white text-black hover:bg-[#60507c] hover:text-white transition-colors duration-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#60507c] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#60507c]"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest">v1.0 SYNCED</span>
            </div>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2 border-2 border-black hover:bg-black hover:text-white transition-colors"
              onClick={() => setIsOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-over Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] lg:hidden"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white z-[120] border-l-8 border-black shadow-[-20px_0_60px_-15px_rgba(0,0,0,0.3)] lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b-4 border-black">
                <span className="text-black font-black uppercase tracking-widest">Navigation</span>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 border-2 border-black hover:bg-black hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto">
                {navLinks.map((link, i) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="w-full text-left p-8 text-2xl font-black uppercase tracking-tight border-b-2 border-black/10 hover:bg-[#60507c] hover:text-white transition-colors group flex justify-between items-center"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={28} />
                  </button>
                ))}
              </div>

              <div className="p-8 bg-black text-white">
                <div className="flex items-center gap-4 mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b19cd9] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#b19cd9]"></span>
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#b19cd9]">System Operational</span>
                </div>
                <p className="text-xs text-white/50 font-bold leading-relaxed mb-4 uppercase tracking-tighter">
                  Institutional Research // Graph-Native Intelligence // multi-hop reasoning
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
