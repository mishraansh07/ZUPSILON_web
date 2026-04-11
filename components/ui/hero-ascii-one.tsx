'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MagneticButton } from './magnetic-button';
import { Navbar } from './navbar';

export default function AnimationPage() {

  useEffect(() => {
    
    const embedScript = document.createElement('script');
    embedScript.type = 'text/javascript';
    embedScript.textContent = `
      !function(){
        if(!window.UnicornStudio){
          window.UnicornStudio={isInitialized:!1};
          var i=document.createElement("script");
          i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js";
          i.onload=function(){
            window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)
          };
          (document.head || document.body).appendChild(i)
        }
      }();
    `;
    document.head.appendChild(embedScript);

    const style = document.createElement('style');
    style.textContent = `
      [data-us-project] { position: relative !important; overflow: hidden !important; }
      [data-us-project] canvas { transform: scale(1.1) translateY(4%) !important; }
      [data-us-project] * { pointer-events: none !important; }
      /* Global Light DOM aggressive hiding */
      a[href*="unicorn.studio"], a[href*="unicorn"], div[style*="z-index: 99999"] {
        display: none !important; visibility: hidden !important; opacity: 0 !important;
      }
    `;
    document.head.appendChild(style);

    const hideBranding = () => {
      // 1. Light DOM pass
      const globalTags = document.querySelectorAll('a[href*="unicorn"], iframe[src*="unicorn"]');
      globalTags.forEach(el => { try { el.remove(); } catch(e) {} });

      // 2. Shadow DOM pass (Unicorn Studio uses shadow roots for watermarks)
      const hosts = document.querySelectorAll('[data-us-project], .unicorn-studio-container');
      hosts.forEach(host => {
        const sr = host.shadowRoot;
        if (sr) {
          const style = document.createElement('style');
          style.textContent = 'a, .watermark, [href*="unicorn"] { display: none !important; }';
          sr.appendChild(style);
          
          sr.querySelectorAll('a[href*="unicorn"], a, .watermark').forEach(el => {
            const tempEl = el as HTMLElement;
            tempEl.style.display = 'none';
            tempEl.style.opacity = '0';
            try { tempEl.remove(); } catch(e) {}
          });
        }
      });
    };

    hideBranding();
    const interval = setInterval(hideBranding, 50);
    setTimeout(hideBranding, 500); setTimeout(hideBranding, 1000); setTimeout(hideBranding, 2000); setTimeout(hideBranding, 5000); setTimeout(hideBranding, 10000);

    return () => {
      clearInterval(interval);
      document.head.removeChild(embedScript);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a0a]">
      {/* Hard mask — covers any UnicornStudio watermark at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-[#0a0a0a] z-50 pointer-events-none" />

      <div className="absolute inset-0 w-full h-full">
        <div data-us-project="OMzqyUv6M3kSnv0JeAtC" style={{ width: '100%', height: '100%', minHeight: '100vh' }} />
      </div>

      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0a0a0a]/20 via-[#0a0a0a]/60 to-[#0a0a0a]/90 pointer-events-none"></div>

      {/* Lab Grid Overlay */}
      <div className="absolute inset-0 z-[1] opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      {/* New Responsive Navbar */}
      <Navbar />

      <div className="absolute top-24 left-6 lg:left-12 w-12 h-12 border-t-4 border-l-4 border-white/20 z-20 hidden lg:block"></div>
      <div className="absolute top-24 right-6 lg:right-12 w-12 h-12 border-t-4 border-r-4 border-white/20 z-20 hidden lg:block"></div>

      {/* CTA Content */}
      <div className="relative z-10 flex min-h-screen items-center pt-20 pb-12">
        <div className="w-full lg:w-3/4 px-6 lg:px-16 lg:ml-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl relative"
          >
            <div className="relative mb-6">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.0] tracking-tighter uppercase text-white drop-shadow-2xl shader-text-gradient">
                Structural Reasoning. <br className="hidden sm:block" />
                <span className="text-white/40 font-bold">Language Intelligence.</span>
              </h1>
            </div>

            <p className="text-sm sm:text-base lg:text-lg text-white mb-8 leading-relaxed font-medium max-w-2xl text-balance bg-black/40 backdrop-blur-md p-4 sm:p-5 border-l-4 border-[#b19cd9]">
              Zupsilon builds Neural Systems that synthesize Graph Topologies with Language Model reasoning — modeling how data connect and communicate.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
              <MagneticButton>
                <button 
                  onClick={() => { document.getElementById('lab')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="w-full sm:w-auto relative px-8 py-4 bg-white/10 text-white font-bold rounded-none group border-4 border-white backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-black shadow-[4px_4px_0_0_rgba(255,255,255,0.4)] hover:shadow-none uppercase tracking-widest text-[10px] sm:text-xs"
                >
                  Explore Benchmarks
                </button>
              </MagneticButton>
              
              <MagneticButton>
                <a 
                  href="/ETA-A_Benchmark_v1.0.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-transparent text-white/80 font-bold tracking-widest uppercase text-[10px] sm:text-xs border-2 border-white/20 hover:bg-white/5 hover:text-white transition-all duration-300 hover:border-white text-center"
                >
                  Read Lab Report
                </a>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
