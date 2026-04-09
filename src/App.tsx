import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import AnimationPage from '../components/ui/hero-ascii-one';
import { Scroller } from '@/components/ui/scroller-1';
import { Preloader } from '@/components/ui/preloader';
import { MagneticButton } from '@/components/ui/magnetic-button';
import { LegalModal } from '@/components/ui/legal-modal';
import { WaitlistModal } from '@/components/ui/waitlist-modal';
import { ContactModal } from '@/components/ui/contact-modal';
import { WaitlistCountDisplay } from '@/components/ui/waitlist-count-display';

const smoothFade: any = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function App() {
  const [legalContent, setLegalContent] = useState<'privacy' | 'terms' | null>(null);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-[#fdf9fa] text-[#1a1a1a] selection:bg-[#60507c] selection:text-white font-sans overflow-x-hidden">
      <Preloader />
      <LegalModal content={legalContent} onClose={() => setLegalContent(null)} />
      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      
      {/* 1. HERO SECTION (Dark theme) */}
      <section className="relative w-full h-screen border-b-2 border-black/10">
        <AnimationPage onOpenWaitlist={() => setIsWaitlistOpen(true)} />
      </section>

      {/* 2. TRUST / SOCIAL PROOF BAR */}
      <section className="pt-32 pb-16 px-6 lg:px-20 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={smoothFade}
          className="flex flex-col md:flex-row items-baseline justify-between border-b-2 border-[#1a1a1a] pb-12"
        >
          <div className="text-xs font-bold tracking-[0.2em] text-[#60507c] uppercase mb-6 md:mb-0 flex-shrink-0">
            Systems Online
          </div>
          <div className="overflow-hidden w-full md:ml-12 relative flex">
            <div className="absolute left-0 w-16 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 w-16 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
            <div className="animate-marquee gap-8 md:text-3xl text-xl tracking-[0.05em] uppercase whitespace-nowrap text-transparent [-webkit-text-stroke:1px_#1a1a1a] font-black hover:text-[#1a1a1a] hover:[-webkit-text-stroke:0px] transition-colors duration-300 cursor-default">
              <span>GRAPH-NATIVE AI // RELATIONSHIP INTELLIGENCE // MULTI-HOP REASONING // BEYOND TABULAR ML //</span>
              <span>GRAPH-NATIVE AI // RELATIONSHIP INTELLIGENCE // MULTI-HOP REASONING // BEYOND TABULAR ML //</span>
              <span>GRAPH-NATIVE AI // RELATIONSHIP INTELLIGENCE // MULTI-HOP REASONING // BEYOND TABULAR ML //</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. WHAT IS ZUPSILON? (RESEARCH) */}
      <section id="research" className="py-24 px-6 lg:px-20 max-w-7xl mx-auto relative shader-bg-light overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={smoothFade}
          className="max-w-4xl mb-32 relative z-10"
        >
          <h2 className="text-5xl lg:text-7xl font-bold tracking-tight text-[#1a1a1a] leading-[1.05] mb-8">
            Intelligence Mapped.
          </h2>
          <p className="text-xl lg:text-3xl text-gray-500 font-medium leading-relaxed">
            Most AI sees rows and columns. Reality doesn't work that way. Zupsilon maps the hidden structure connecting everything.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 relative z-10"
        >
          {[
            { word: "चैतन्य", meaning: "Awareness", desc: "Sees every node in context — not in isolation. Full network awareness, always." },
            { word: "विचार", meaning: "Reasoning", desc: "Follows chains of connection across 10, 20, 100 hops. Finds what flat data can't." },
            { word: "युक्ति", meaning: "Strategy", desc: "Turns structural insight into decisions. Not just analysis — action." }
          ].map((pillar, i) => (
            <motion.div key={i} variants={smoothFade} className="flex flex-col border-t-2 border-[#1a1a1a] pt-8">
              <div className="text-[2.5rem] text-[#60507c] font-sanskrit leading-none mb-6 font-bold">{pillar.word}</div>
              <h3 className="text-xl font-bold tracking-tight text-[#1a1a1a] mb-4">{pillar.meaning}</h3>
              <p className="text-gray-600 font-medium leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. WHAT YOU BUILD (PLATFORM) */}
      <section id="platform" className="py-32 px-6 lg:px-20 bg-[#fdf9fa] mt-16 relative overflow-hidden">
        <div className="absolute inset-0 shader-mesh-gradient opacity-80 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col lg:flex-row justify-between items-start gap-16"
          >
            <motion.div variants={smoothFade} className="lg:w-5/12">
              <div className="text-xs font-bold tracking-[0.2em] text-[#60507c] uppercase mb-8">
                Graph Engine
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-8 leading-[1.1]">
                Under every complex system is a graph. We read it.
              </h2>
              <p className="text-lg text-gray-700 font-medium leading-relaxed">
                Our systems analyze networks — people, data, systems — uncovering deep dimensional patterns. <strong className="text-[#1a1a1a]">Traditional ML calls it noise. We call it signal.</strong>
              </p>
            </motion.div>
            
            <motion.div variants={smoothFade} className="lg:w-6/12 w-full pt-12 lg:pt-0">
               <div className="border-4 border-[#1a1a1a] bg-white p-8 md:p-16 shadow-[8px_8px_0_0_#1a1a1a] relative overflow-hidden transition-all duration-300 hover:shadow-[16px_16px_0_0_#1a1a1a] hover:-translate-y-2 hover:-translate-x-2">
                 <div className="flex flex-col gap-8 relative z-10">
                   {[
                     { title: "Relationship Layer", desc: "See how every entity connects to every other — in real time." },
                     { title: "Pattern Discovery", desc: "Identifies cyclical clusters and structural anomalies." },
                     { title: "Semantic Traversal", desc: "Navigates multi-hop pathways with natural reasoning." }
                   ].map((item, i) => (
                     <div key={i} className="flex flex-col gap-2 border-b-2 border-gray-200 pb-8 last:border-0 last:pb-0">
                       <h4 className="text-[#1a1a1a] font-bold text-lg uppercase tracking-wide">{item.title}</h4>
                       <p className="text-gray-600 font-medium">{item.desc}</p>
                     </div>
                   ))}
                 </div>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. HOW IT WORKS (PHILOSOPHY) */}
      <section id="philosophy" className="py-32 px-6 lg:px-20 max-w-7xl mx-auto relative overflow-hidden shader-bg-light">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={smoothFade}
          className="mb-24 md:w-1/2 relative z-10"
        >
           <h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">The Logic of <br/><span className="text-[#60507c]">Connection.</span></h2>
           <p className="text-xl text-gray-600 font-medium">Transforming unstructured noise into deliberate, navigable intelligence.</p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 relative z-10"
        >
          {[
            { step: "01", title: "Input Data Intakes", desc: "Pulls from messy, disconnected data sources — structured or not." },
            { step: "02", title: "Relationship Mapping", desc: "Constructing multi-dimensional edge networks to highlight latent connections." },
            { step: "03", title: "Insight Generation", desc: "Generates predictions, classifications, and structural insight — across the full graph." }
          ].map((step, i) => (
            <motion.div key={i} variants={smoothFade} className="flex flex-col group">
              <div className="text-sm font-bold tracking-wider bg-black text-white px-3 py-1 w-fit mb-6 transition-colors duration-500">
                {step.step}
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#1a1a1a] uppercase">{step.title}</h3>
              <p className="text-gray-600 font-medium leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 6. USE CASES WITH SCROLLER COMPONENT */}
      <section className="py-32 px-0 bg-gray-100 border-y-4 border-black relative overflow-hidden">
        <div className="absolute inset-0 shader-mesh-gradient-dark opacity-30 pointer-events-none mix-blend-multiply"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-20 mb-20 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={smoothFade}
          >
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">Real-World Relevance</h2>
          </motion.div>
        </div>

        <div className="relative z-10 pl-6 lg:pl-20">
          <Scroller overflow="x" withButtons childrenContainerClassName="gap-8 pr-6 lg:pr-20 py-8 pl-4">
            {[
              { img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200", title: "Financial Networks", desc: "Detect fraud before it propagates. Follow the money across hidden shells." },
              { img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200", title: "Knowledge Graphs", desc: "Connect research across disciplines. Find the insight that lives between papers." },
              { img: "https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=1200", title: "Recommendation Systems", desc: "Move beyond collaborative filtering. Understand why people connect." },
              { img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200", title: "Social Graphs", desc: "Map communities, detect influence clusters, predict churn." }
            ].map((useCase, i) => (
              <div key={i} className="group relative overflow-hidden bg-white cursor-pointer w-[85vw] sm:w-[450px] h-[350px] flex-shrink-0 border-4 border-black shadow-[8px_8px_0_0_#1a1a1a] hover:shadow-[12px_12px_0_0_#1a1a1a] transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2">
                <img src={useCase.img} alt={useCase.title} className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-[0.22,1,0.36,1]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight mb-2">{useCase.title}</h3>
                    <p className="text-white/80 font-medium text-sm leading-relaxed">{useCase.desc}</p>
                  </div>
                  <div className="w-10 h-10 bg-white flex flex-shrink-0 items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-lg mt-2">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </Scroller>
        </div>
      </section>


      {/* 9. ABOUT / TEAM & 10. CTA SECTION */}
      <section className="py-32 px-6 lg:px-20 bg-black text-white border-t-8 border-[#60507c] relative overflow-hidden">
        <div className="absolute inset-0 shader-bg-dark opacity-50 blur-[50px] pointer-events-none"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-5xl lg:text-8xl font-black mb-8 tracking-tighter uppercase">Intelligence. <br/>Evolved.</h2>
            <p className="text-xl text-white/70 mb-8 font-medium max-w-2xl mx-auto leading-relaxed text-balance">
              Built by ML engineers and systems architects who've worked at the edges of graph research. We're opening early access to a select group of partners.
            </p>
            
            <WaitlistCountDisplay />
            
            <p className="text-lg font-bold text-[#b19cd9] mb-12 tracking-widest uppercase mt-4">
              50 teams. First come, first mapped.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <MagneticButton>
                <button onClick={() => setIsWaitlistOpen(true)} className="px-10 py-5 bg-white text-black font-bold text-lg hover:scale-105 transition-transform duration-500 flex items-center gap-3 shadow-[8px_8px_0_0_#60507c] border-2 border-transparent hover:border-black group relative z-50">
                  <span className="group-hover:mr-2 transition-all duration-300">Join Early Access</span> 
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                </button>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="bg-black pt-16 pb-8 px-6 lg:px-20 text-white font-medium border-t-4 border-white/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12 pt-8">
            <div className="max-w-md">
              <div className="flex items-center gap-3 mb-6">
                 <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain brightness-0 invert" />
                 <span className="font-sans text-xl font-bold tracking-widest text-[#60507c]">ZUPSILON</span>
              </div>
              <p className="text-sm text-white/50 leading-relaxed font-bold">
                Building Graph Neural Network systems to model real-world relationships.
              </p>
            </div>
            
            <div className="flex gap-16 text-sm">
              <div className="flex flex-col gap-4">
                <span className="text-white font-bold mb-2 tracking-wider text-xs uppercase bg-[#60507c] px-2 py-1 w-fit">Company</span>
                <a href="#platform" className="hover:text-[#b19cd9] transition-colors font-bold uppercase tracking-wider">Platform</a>
                <a href="#research" className="hover:text-[#b19cd9] transition-colors font-bold uppercase tracking-wider">Research</a>
                <a href="#philosophy" className="hover:text-[#b19cd9] transition-colors font-bold uppercase tracking-wider">Philosophy</a>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-white font-bold mb-2 tracking-wider text-xs uppercase bg-[#60507c] px-2 py-1 w-fit">Connect</span>
                <a href="#research" className="hover:text-[#b19cd9] transition-colors font-bold uppercase tracking-wider">About Us</a>
                <button onClick={() => setIsContactOpen(true)} className="text-left hover:text-[#b19cd9] transition-colors font-bold uppercase tracking-wider">Contact</button>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#b19cd9] transition-colors font-bold uppercase tracking-wider">Instagram</a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-white/40 tracking-wider font-bold">
            <div>© 2026 ZUPSILON. ALL RIGHTS RESERVED.</div>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <button onClick={() => setLegalContent('privacy')} className="hover:text-white transition-colors uppercase tracking-wider font-bold">PRIVACY</button>
              <button onClick={() => setLegalContent('terms')} className="hover:text-white transition-colors uppercase tracking-wider font-bold">TERMS</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
