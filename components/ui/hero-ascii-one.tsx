'use client';

import { useEffect, useState } from 'react';
import { MagneticButton } from './magnetic-button';

export default function AnimationPage({ onOpenWaitlist }: { onOpenWaitlist?: () => void }) {
  const [waitlistCount, setWaitlistCount] = useState<number | string>('...');

  const fetchCount = () => {
    fetch(`/api/count?t=${Date.now()}`)
      .then(res => res.json())
      .then(data => setWaitlistCount(data.count))
      .catch(err => console.error("Error fetching waitlist count", err));
  };

  useEffect(() => {
    fetchCount();
    window.addEventListener('waitlistUpdated', fetchCount);
    
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
      window.removeEventListener('waitlistUpdated', fetchCount);
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

      {/* Top Header */}
      <div className="absolute top-0 left-0 right-0 z-20 border-b-4 border-white/10 bg-black/50 backdrop-blur-md">
        <div className="container mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4 lg:gap-6">
            <div className="flex items-center">
               <img src="/logo.png" alt="Zupsilon Logo" className="h-8 lg:h-10 w-auto object-contain brightness-200 contrast-150 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
               <span className="text-white text-xl lg:text-2xl font-bold tracking-widest ml-3">ZUPSILON</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-6 text-xs font-bold text-white/50 tracking-wider z-50 relative">
            <MagneticButton>
              <button 
                onClick={onOpenWaitlist}
                className="px-6 py-2 bg-white text-black font-black uppercase tracking-[0.15em] border-2 border-white hover:bg-black hover:text-white transition-all shadow-[4px_4px_0_0_#b19cd9] hover:shadow-none"
              >
                Join Early Access
              </button>
            </MagneticButton>
            <span className="flex items-center gap-2 border-2 border-white/10 px-3 py-1">
              <span className="w-2 h-2 bg-[#b19cd9] opacity-80"></span>
              NOW IN BETA
            </span>
          </div>
        </div>
      </div>

      <div className="absolute top-24 left-6 lg:left-12 w-12 h-12 border-t-4 border-l-4 border-white/20 z-20 hidden lg:block"></div>
      <div className="absolute top-24 right-6 lg:right-12 w-12 h-12 border-t-4 border-r-4 border-white/20 z-20 hidden lg:block"></div>

      {/* CTA Content */}
      <div className="relative z-10 flex min-h-screen items-center pt-32 lg:pt-40 pb-16">
        <div className="w-full lg:w-3/4 px-6 lg:px-16 lg:ml-8 mt-12 lg:mt-0">
          <div className="max-w-3xl relative">
            


            <div className="relative mb-8">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tighter uppercase text-white drop-shadow-2xl shader-text-gradient">
                The world runs on relationships. <br className="hidden lg:block" />
                <span className="text-white/40 font-bold">Most AI ignores that.</span>
              </h1>
            </div>

            <p className="text-lg lg:text-2xl text-white mb-10 leading-relaxed font-medium max-w-2xl text-balance bg-black/40 backdrop-blur-md p-4 border-l-4 border-[#b19cd9]">
              Zupsilon builds Graph Neural Network systems that model how data actually connects — across people, systems, and networks.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <MagneticButton>
                <button 
                  onClick={() => { document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="relative px-8 py-4 bg-white/10 text-white font-bold rounded-none group border-4 border-white backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-black shadow-[8px_8px_0_0_rgba(255,255,255,0.4)] hover:shadow-none uppercase tracking-widest text-sm"
                >
                  See How It Works
                </button>
              </MagneticButton>
              
              <MagneticButton>
                <button 
                  onClick={onOpenWaitlist}
                  className="px-8 py-4 bg-transparent text-white/80 font-bold tracking-widest uppercase text-sm border-2 border-white/20 hover:bg-white/5 hover:text-white transition-all duration-300 hover:border-white"
                >
                  Join Early Access
                </button>
              </MagneticButton>
              <div className="text-white/60 text-sm font-bold uppercase tracking-widest border-l-2 border-white/20 pl-6 py-2 ml-2">
                <span className="text-[#b19cd9] text-xl mr-2 animate-pulse">{typeof waitlistCount === 'number' ? Math.max(0, 50 - waitlistCount) : '...'}</span>
                <br/>Spots Remaining
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
