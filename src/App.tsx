import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, FlaskConical, BookOpen, BarChart3, Clock } from 'lucide-react';
import AnimationPage from '../components/ui/hero-ascii-one';
import { Preloader } from '@/components/ui/preloader';
import { LegalModal } from '@/components/ui/legal-modal';
import { ContactModal } from '@/components/ui/contact-modal';

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
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-[#fdf9fa] text-[#1a1a1a] selection:bg-[#60507c] selection:text-white font-sans overflow-x-hidden">
      <Preloader />
      <LegalModal content={legalContent} onClose={() => setLegalContent(null)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      
      {/* 1. HERO SECTION (Dark theme) */}
      <section className="relative w-full h-screen border-b-2 border-black/10">
        <AnimationPage />
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

      {/* 3a. THE NYAYA FRAMEWORK (CHARTER) */}
      <section id="charter" className="py-24 px-6 lg:px-20 max-w-7xl mx-auto relative overflow-hidden border-t-4 border-black/5">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={smoothFade}
           className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          <div className="lg:col-span-8">
            <div className="text-xs font-bold tracking-[0.25em] text-[#60507c] uppercase mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-[#60507c]"></span>
              Lab Charter v1.0
            </div>
            <h2 className="text-4xl lg:text-7xl font-black tracking-tight text-[#1a1a1a] leading-[1.0] uppercase mb-12">
              The Nyaya <br/>
              <span className="text-[#60507c]">Symmetry.</span>
            </h2>
            <div className="space-y-8 max-w-3xl">
              <p className="text-2xl lg:text-4xl font-medium text-[#1a1a1a] leading-tight tracking-tight">
                Our research synthesizes classical Indian logic with graph-native topologies and large-scale language models. 
              </p>
              <p className="text-lg text-gray-500 font-medium leading-relaxed">
                By treating relationships and linguistic semantics as first-class logical predicates, we enable multi-hop reasoning that bridges structural manifold learning with generative intelligence. This is not just processing; it is structural synthesis.
              </p>
            </div>
          </div>
          <div className="lg:col-span-4 lg:pt-32">
            <div className="border-l-4 border-[#60507c] pl-8 py-4">
              <div className="text-sm font-bold tracking-widest uppercase mb-4 text-[#1a1a1a]">Primary Directive</div>
              <p className="text-sm font-medium text-gray-600 leading-relaxed italic">
                &quot;To find the structure is to find the soul. Data without topology is noise; topology without reasoning is blind.&quot;
              </p>
              <div className="mt-8 flex flex-col gap-4 text-[10px] font-black tracking-[0.2em] uppercase text-[#1a1a1a]/40">
                <span>01 // STRUCTURAL SYSTHESIS</span>
                <span>02 // NYAYA CATEGORIZATION</span>
                <span>03 // HETU (EVIDENCE) VERIFICATION</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3b. THE LABORATORY (ABOUT & FOUNDER) */}
      <section id="about" className="py-32 px-6 lg:px-20 bg-white border-y-2 border-black/5 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Founder Image */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative"
            >
              <div className="relative z-10 border-8 border-black grayscale hover:grayscale-0 transition-all duration-700 shadow-[20px_20px_0_0_#60507c]">
                <img 
                  src="/founder.jpg" 
                  alt="Ansh Mishra - Founder" 
                  className="w-full aspect-square object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000"; // Fallback professional avatar
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#eee5e8] -z-10"></div>
            </motion.div>

            {/* Content */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="text-xs font-bold tracking-[0.2em] text-[#60507c] uppercase mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#60507c]"></span>
                The Founder
              </div>
              <h3 className="text-4xl lg:text-5xl font-black text-[#1a1a1a] uppercase tracking-tight mb-8">
                Ansh Mishra
              </h3>
              <div className="space-y-6 text-lg text-gray-700 font-medium leading-relaxed">
                <p>
                  Started during my first year of BTech, Zupsilon was born from a singular obsession: <span className="text-[#60507c]">how models reason across scale.</span>
                </p>
                <p>
                  We are building a new class of intelligence that synthesizes the structural rigor of Graph Neural Networks with the semantic breadth of Large Language Models. Our goal is to create systems that don't just predict the next token, but understand the underlying manifold of relationships.
                </p>
                <div className="pt-8 flex flex-wrap gap-4">
                  <div className="px-4 py-2 border-2 border-black text-xs font-bold uppercase tracking-widest">GNN Topologies</div>
                  <div className="px-4 py-2 border-2 border-black text-xs font-bold uppercase tracking-widest">Language Models</div>
                  <div className="px-4 py-2 border-2 border-black text-xs font-bold uppercase tracking-widest">Neural Geometry</div>
                </div>

                <div className="mt-12 p-6 border-l-4 border-dashed border-[#b19cd9] bg-[#fdf9fa]">
                  <h4 className="text-sm font-black uppercase tracking-widest mb-2">Open Collaboration</h4>
                  <p className="text-sm text-gray-500 italic mb-4">Interested in structural reasoning or Graph-LLM hybridization? We are open for researcher-led partnerships.</p>
                  <a href="mailto:anshmishra@zupsilonai.me" className="text-xs font-black text-[#60507c] hover:underline uppercase tracking-tighter">Inquire for Collaboration →</a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
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
                Neural Systems for Graphs & Language.
              </h2>
              <p className="text-lg text-gray-700 font-medium leading-relaxed">
                Our lab designs architectures that synthesize structural connection with semantic intelligence. We bridge the gap between <strong className="text-[#1a1a1a]">Manifold Learning</strong> and <strong className="text-[#1a1a1a]">Linear Reasoning</strong>.
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

      {/* 6. ETA-A BENCHMARK SHOWCASE */}
      <section id="benchmarks" className="py-32 px-6 lg:px-20 bg-[#0e0e0e] border-y-4 border-[#60507c] relative overflow-hidden">
        <div className="absolute inset-0 shader-bg-dark opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">

          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={smoothFade}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b-2 border-white/10 pb-10 gap-6"
          >
            <div>
              <div className="flex items-center gap-3 text-xs font-bold tracking-[0.25em] text-[#b19cd9] uppercase mb-4">
                <BarChart3 className="w-4 h-4" />
                ETA-A Benchmark Report v1.0
              </div>
              <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-white leading-[1.05] uppercase">
                Numbers.<br />
                <span className="text-[#b19cd9]">No Noise.</span>
              </h2>
            </div>
            <div className="flex flex-col gap-3 md:text-right">
              <p className="text-white/60 font-medium text-sm leading-relaxed max-w-xs md:ml-auto">
                Four architectures. Five independent trials. Legal precedent retrieval on Citation Dataset v4.0 — 500 nodes, 1950–2024.
              </p>
              <a
                href="/ETA-A_Benchmark_v1.0 (2).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#b19cd9] font-bold text-xs tracking-widest uppercase hover:text-white transition-colors duration-300"
              >
                <BookOpen className="w-3.5 h-3.5" /> Read Full Report <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          {/* Results Table */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="mb-16"
          >
            {/* Column Headers */}
            <div className="hidden md:grid grid-cols-5 gap-0 border-b-2 border-white/20 pb-4 mb-2 px-6">
              {['Architecture', 'MRR ↑', 'AUC ↑', 'Latency (ms/node) ↓', 'Throughput (nodes/s) ↑'].map((h, i) => (
                <div key={i} className={`text-[10px] font-black tracking-[0.2em] uppercase ${i === 0 ? 'text-white/50' : 'text-[#b19cd9]/70 text-right'}`}>{h}</div>
              ))}
            </div>

            {/* Rows */}
            {[
              { arch: 'Simple MLP', tag: 'Semantic Baseline', mrr: '0.365', auc: '0.739', lat: '0.0012', tput: '1,670', highlight: false, note: 'Leads on ranking precision at N=500. Dominant semantic signal.' },
              { arch: 'Legal GCN', tag: 'Recommended Production', mrr: '0.313', auc: '0.684', lat: '0.0047', tput: '1,330', highlight: true, note: 'Only model with citation path tracing & doctrinal lineage. Recommended architecture.' },
              { arch: 'GraphSAGE', tag: 'Experimental', mrr: '0.100', auc: '0.608', lat: '0.0074', tput: '1,027', highlight: false, note: 'Underperforms at N=500. Expected to improve at larger scale.' },
              { arch: 'Legal GAT', tag: 'Experimental', mrr: '0.063', auc: '0.603', lat: '0.0071', tput: '672', highlight: false, note: 'Attention overfits on sparse neighbourhoods. Not recommended at this scale.' },
            ].map((row, i) => (
              <motion.div
                key={i}
                variants={smoothFade}
                className={`group grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-0 items-start md:items-center px-6 py-6 border-b border-white/10 transition-all duration-300 cursor-default ${
                  row.highlight
                    ? 'bg-[#60507c]/20 border-l-4 border-l-[#b19cd9] hover:bg-[#60507c]/30'
                    : 'hover:bg-white/5'
                }`}
              >
                {/* Arch */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-3">
                    <span className="text-white font-black text-base tracking-tight">{row.arch}</span>
                    {row.highlight && <span className="text-[9px] font-black tracking-widest uppercase bg-[#b19cd9] text-black px-2 py-0.5">★ Prod</span>}
                  </div>
                  <span className="text-white/30 text-xs font-bold uppercase tracking-wider">{row.tag}</span>
                </div>
                {/* MRR */}
                <div className="flex flex-col md:items-end">
                  <span className="text-[#b19cd9] font-black text-2xl">{row.mrr}</span>
                  <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest md:hidden">MRR</span>
                </div>
                {/* AUC */}
                <div className="flex flex-col md:items-end">
                  <span className="text-white font-bold text-xl">{row.auc}</span>
                  <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest md:hidden">AUC</span>
                </div>
                {/* Latency */}
                <div className="flex flex-col md:items-end">
                  <span className="text-white/80 font-bold text-xl">{row.lat}</span>
                  <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest md:hidden">Latency ms/node</span>
                </div>
                {/* Throughput */}
                <div className="flex flex-col md:items-end">
                  <span className="text-white/80 font-bold text-xl">{row.tput}</span>
                  <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest md:hidden">Throughput nodes/s</span>
                  <p className="text-white/30 text-xs font-medium leading-relaxed mt-1 max-w-[200px] md:text-right hidden lg:block">{row.note}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Key Findings Strip */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-2 border-white/15"
          >
            {[
              { label: 'Recommended Path', value: 'Hybrid MLP + GCN', sub: 'Fast semantic ranking + deep structural re-ranking' },
              { label: 'GCN Latency Overhead', value: '4× vs MLP', sub: '0.0047 ms/node — operationally acceptable' },
              { label: 'Next Milestone', value: 'N = 5,000', sub: 'Benchmark v2.0 — GNN structural advantage expected to emerge' },
            ].map((kf, i) => (
              <motion.div
                key={i}
                variants={smoothFade}
                className="flex flex-col p-8 border-r border-white/10 last:border-r-0 group hover:bg-white/5 transition-colors duration-300"
              >
                <div className="text-[10px] font-black tracking-[0.2em] uppercase text-[#b19cd9]/60 mb-3">{kf.label}</div>
                <div className="text-2xl font-black text-white tracking-tight mb-2">{kf.value}</div>
                <div className="text-xs text-white/40 font-medium leading-relaxed">{kf.sub}</div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>


      {/* 7. RESEARCH LAB SECTION */}
      <section id="lab" className="py-32 px-6 lg:px-20 bg-[#fdf9fa] relative overflow-hidden">
        <div className="absolute inset-0 shader-bg-light opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">

          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={smoothFade}
            className="flex flex-col md:flex-row md:items-end justify-between mb-20 border-b-4 border-[#1a1a1a] pb-10 gap-6"
          >
            <div>
              <div className="flex items-center gap-3 text-xs font-bold tracking-[0.25em] text-[#60507c] uppercase mb-4">
                <FlaskConical className="w-4 h-4" />
                Research Lab
              </div>
              <h2 className="text-5xl lg:text-7xl font-black tracking-tight text-[#1a1a1a] leading-[1.02] uppercase">
                Proof.<br />
                <span className="text-[#60507c]">Not Promise.</span>
              </h2>
            </div>
            <p className="text-lg text-gray-600 font-medium max-w-sm leading-relaxed md:text-right">
              Our benchmarks, evaluations, and published research — open for scrutiny.
            </p>
          </motion.div>

          {/* ── BENCHMARK RESULTS ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="mb-24"
          >
            <div className="flex items-center gap-3 mb-10">
              <BarChart3 className="w-5 h-5 text-[#60507c]" />
              <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-[#1a1a1a]">Benchmark Results</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-[#1a1a1a]">
              {[
                { metric: "Node Classification", dataset: "OGB-ArXiv", value: "—", unit: "Acc.", tag: "Coming Soon", color: "#60507c" },
                { metric: "Link Prediction", dataset: "OGB-Collab", value: "—", unit: "Hits@50", tag: "Coming Soon", color: "#60507c" },
                { metric: "Graph Classification", dataset: "TUDataset", value: "—", unit: "Acc.", tag: "Coming Soon", color: "#60507c" },
                { metric: "Fraud Detection", dataset: "Yelp-Chi", value: "—", unit: "F1", tag: "Coming Soon", color: "#60507c" },
              ].map((bench, i) => (
                <motion.div
                  key={i}
                  variants={smoothFade}
                  className="flex flex-col p-8 border-r-2 border-[#1a1a1a] last:border-r-0 group relative overflow-hidden cursor-default hover:bg-[#60507c] hover:text-white transition-colors duration-500"
                >
                  <div className="text-[3.5rem] font-black leading-none mb-2 text-[#60507c] group-hover:text-white transition-colors duration-500">
                    {bench.value}
                  </div>
                  <div className="text-xs font-bold tracking-widest uppercase text-gray-400 group-hover:text-white/70 transition-colors duration-500 mb-4">
                    {bench.unit}
                  </div>
                  <div className="mt-auto">
                    <div className="text-sm font-bold text-[#1a1a1a] group-hover:text-white transition-colors duration-500 uppercase tracking-wide">
                      {bench.metric}
                    </div>
                    <div className="text-xs text-gray-500 group-hover:text-white/60 transition-colors duration-500 mt-1 font-medium">
                      {bench.dataset}
                    </div>
                  </div>
                  <span className="absolute top-4 right-4 text-[10px] font-black tracking-widest uppercase border border-current px-2 py-0.5 text-[#60507c] group-hover:text-white group-hover:border-white/50 transition-colors duration-500">
                    {bench.tag}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── RESEARCH ARCHIVE (CLEANUP) ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="mb-20"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-[#60507c]" />
                <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-[#1a1a1a]">Technical Archive</h3>
              </div>
            </div>

            <div className="border-4 border-[#1a1a1a] p-12 lg:p-20 bg-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4">
                 <Clock className="w-6 h-6 text-[#60507c] animate-pulse" />
              </div>
              <div className="relative z-10 max-w-2xl">
                <h4 className="text-3xl lg:text-5xl font-black text-[#1a1a1a] uppercase leading-none mb-6">
                  ACCESS <br className="hidden sm:block" />
                  <span className="text-[#60507c]">RESTRICTED.</span>
                </h4>
                <p className="text-lg text-gray-400 font-bold uppercase tracking-tight leading-relaxed mb-8">
                  Technical drafts and pre-prints are currently locked for empirical verification. Open-access reproduction logs are scheduled for release in Q3 2026.
                </p>
                <div className="flex flex-wrap gap-4 opacity-50 pointer-events-none grayscale">
                   <span className="text-[10px] font-black tracking-widest border border-black px-2 py-1">LOGS LOCKED</span>
                   <span className="text-[10px] font-black tracking-widest border border-black px-2 py-1">VERSION 0.9.4a</span>
                </div>
              </div>
              {/* Background Decoration */}
              <div className="absolute -bottom-10 -right-10 text-[12rem] font-black text-gray-50 select-none -z-10 group-hover:text-[#60507c]/5 transition-colors duration-700">
                LAB
              </div>
            </div>
          </motion.div>
          </motion.div>

          {/* ── COMING SOON STRIP ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={smoothFade}
            className="border-4 border-dashed border-[#1a1a1a]/30 p-10 flex flex-col md:flex-row items-center justify-between gap-6 bg-[#1a1a1a]/[0.02]"
          >
            <div>
              <div className="text-xs font-bold tracking-[0.25em] text-[#60507c] uppercase mb-2">On the Horizon</div>
              <h4 className="text-2xl font-black text-[#1a1a1a] uppercase tracking-tight">More results are being finalized.</h4>
              <p className="text-gray-500 font-medium text-sm mt-2">Full benchmark releases, ablation studies, and dataset cards dropping with our public beta.</p>
            </div>
            <div className="flex-shrink-0">
              <div className="border-2 border-[#1a1a1a] px-6 py-3 bg-white shadow-[4px_4px_0_0_#60507c] text-sm font-black tracking-widest uppercase text-[#1a1a1a] cursor-default">
                Stay Tuned
              </div>
            </div>
          </motion.div>

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
            <h2 className="text-4xl lg:text-7xl font-black mb-10 tracking-tighter uppercase leading-[1.1]">The Architecture <br/>of Reasoning.</h2>
            <p className="text-xl text-white/70 mb-12 font-medium max-w-2xl mx-auto leading-relaxed text-balance">
              Pioneering a new frontier in Graph Neural Networks. Our laboratory operates at the intersection of structural topology and semantic intelligence, building systems that don't just process data—they understand it.
            </p>
            
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-[10px] font-black tracking-[0.3em] uppercase text-[#b19cd9]">
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#b19cd9]"></span> Research First</span>
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#b19cd9]"></span> Scalable Reasoning</span>
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#b19cd9]"></span> Open Documentation</span>
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
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-[10px] font-black tracking-[0.2em] text-[#b19cd9] uppercase">Institutional Research</p>
                <p className="text-xs text-white/30 mt-2">Open for scientific inquiry & partnership.</p>
              </div>
            </div>
            
            <div className="flex gap-16 text-sm">
              <div className="flex flex-col gap-4">
                <span className="text-white font-bold mb-2 tracking-wider text-xs uppercase bg-[#60507c] px-2 py-1 w-fit">Company</span>
                <a href="#platform" className="hover:text-[#b19cd9] transition-colors font-bold uppercase tracking-wider">Platform</a>
                <a href="#research" className="hover:text-[#b19cd9] transition-colors font-bold uppercase tracking-wider">Research</a>
                <a href="#philosophy" className="hover:text-[#b19cd9] transition-colors font-bold uppercase tracking-wider">Philosophy</a>
                <a href="#about" className="hover:text-[#b19cd9] transition-colors font-bold uppercase tracking-wider">Founder</a>
                <a href="#lab" className="hover:text-[#b19cd9] transition-colors font-bold uppercase tracking-wider">Research Index</a>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-white font-bold mb-2 tracking-wider text-xs uppercase bg-[#60507c] px-2 py-1 w-fit">Connect</span>
                <a href="#research" className="hover:text-[#b19cd9] transition-colors font-bold uppercase tracking-wider">About Us</a>
                <a href="mailto:anshmishra@zupsilonai.me" className="text-left hover:text-[#b19cd9] transition-colors font-bold uppercase tracking-wider">Contact</a>
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
