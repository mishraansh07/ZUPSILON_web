import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hold black screen for 1.8s
    // Disable scroll temporarily
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = ''; // Re-enable scroll when loading finishes
    }, 1800);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100vh" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[999998] bg-[#0a0a0a] flex items-center justify-center pointer-events-none"
        >
          <div className="absolute inset-0 dither-pattern mix-blend-overlay opacity-30"></div>
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="flex flex-col items-center gap-4 text-white z-10"
          >
            <div className="flex gap-2 mb-4">
              {[0, 1, 2].map(i => (
                <motion.div 
                  key={i}
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                  className="w-4 h-4 bg-[#b19cd9]"
                />
              ))}
            </div>
            <div className="font-mono text-xs font-bold tracking-[0.3em] uppercase text-white/70">
              [ ZUPSILON CORE BOOTING ]
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
