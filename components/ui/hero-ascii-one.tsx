'use client';

import { useEffect, useState } from 'react';
import { MagneticButton } from './magnetic-button';

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
      <div className="absolute inset-0 w-full h-full">
        <div data-us-project="OMzqyUv6M3kSnv0JeAtC" style={{ width: '100%', height: '100%', minHeight: '100vh' }} />
      </div>

      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0a0a0a]/20 via-[#0a0a0a]/60 to-[#0a0a0a]/90 pointer-events-none"></div>

      {/* Premium Floating Header */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-7xl">
        <div className="bg-black/40 backdrop-blur-2xl border border-white/10 px-6 py-4 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo" className="h-6 lg:h-8 w-auto brightness-200" />
            <span className="text-white text-lg font-black tracking-widest uppercase">Zupsilon</span>
          </div>

          {/* Center Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {[
              { name: 'Charter', id: 'charter' },
              { name: 'Laboratory', id: 'about' },
              { name: 'Benchmarks', id: 'benchmarks' },
              { name: 'Archive', id: 'lab' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#b19cd9] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Status & Contact */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2 px-3 py-1 border border-white/5 bg-white/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b19cd9] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#b19cd9]"></span>
              </span>
              <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">Lab Online</span>
            </div>
            <a 
              href="mailto:anshmishra@zupsilonai.me"
              className="px-4 py-2 bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-[#b19cd9] transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <div className="absolute top-24 left-6 lg:left-12 w-12 h-12 border-t-4 border-l-4 border-white/20 z-20 hidden lg:block"></div>
      <div className="absolute top-24 right-6 lg:right-12 w-12 h-12 border-t-4 border-r-4 border-white/20 z-20 hidden lg:block"></div>

      {/* CTA Content */}
      <div className="relative z-10 flex min-h-screen items-center pt-32 lg:pt-40 pb-16">
        <div className="w-full lg:w-3/4 px-6 lg:px-16 lg:ml-8 mt-12 lg:mt-0">
          <div className="max-w-3xl relative">
            


            <div className="relative mb-8">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tighter uppercase text-white drop-shadow-2xl shader-text-gradient">
                Structural Reasoning. <br className="hidden lg:block" />
                <span className="text-white/40 font-bold">Language Intelligence.</span>
              </h1>
            </div>

            <p className="text-lg lg:text-2xl text-white mb-10 leading-relaxed font-medium max-w-2xl text-balance bg-black/40 backdrop-blur-md p-4 border-l-4 border-[#b19cd9]">
              Zupsilon builds Neural Systems that synthesize Graph Topologies with Language Model reasoning — modeling how data connect and communicate.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <MagneticButton>
                <button 
                  onClick={() => { document.getElementById('lab')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="relative px-8 py-4 bg-white/10 text-white font-bold rounded-none group border-4 border-white backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-black shadow-[8px_8px_0_0_rgba(255,255,255,0.4)] hover:shadow-none uppercase tracking-widest text-sm"
                >
                  Explore Benchmarks
                </button>
              </MagneticButton>
              
              <MagneticButton>
                <a 
                  href="/ETA-A_Benchmark_v1.0.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-transparent text-white/80 font-bold tracking-widest uppercase text-sm border-2 border-white/20 hover:bg-white/5 hover:text-white transition-all duration-300 hover:border-white text-center"
                >
                  Read Lab Report
                </a>
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
