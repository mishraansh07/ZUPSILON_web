import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, FlaskConical, BookOpen, BarChart3, Clock, ShieldCheck } from 'lucide-react';
import AnimationPage from '../components/ui/hero-ascii-one';
import { Preloader } from '@/components/ui/preloader';
import { LegalModal } from '@/components/ui/legal-modal';
import { ContactModal } from '@/components/ui/contact-modal';

const smoothFade: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

// Section label component for consistent prefixes across the lab
const SectionLabel = ({ number, label }: { number: string; label: string }) => (
  <div className="flex items-center gap-4 mb-8">
    <span className="text-[10px] font-black tracking-[0.3em] text-[#60507c]/50 uppercase">{number}</span>
    <span className="w-8 h-px bg-[#60507c]/40"></span>
    <span className="text-[10px] font-black tracking-[0.3em] text-[#60507c] uppercase">{label}</span>
  </div>
);

export default function App() {
  const [legalContent, setLegalContent] = useState<'privacy' | 'terms' | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-[#fdf9fa] text-[#1a1a1a] selection:bg-[#60507c] selection:text-white font-sans overflow-x-hidden">
      <Preloader />
      <LegalModal content={legalContent} onClose={() => setLegalContent(null)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      {/* ─── 1. HERO ─── */}
      <section className="relative w-full">
        <AnimationPage />
      </section>

      {/* ─── 2. RESEARCH (What is Zupsilon) ─── */}
      <section id="research" className="pt-24 pb-20 px-6 lg:px-20 border-b-4 border-black/8 bg-[#fdf9fa]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={smoothFade}
          >
            <SectionLabel number="01" label="Research Paradigm" />
          </motion.div>

          {/* Two-column layout: heading left, pillars right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={smoothFade}
              className="lg:sticky lg:top-28"
            >
              <h2 className="text-5xl lg:text-7xl font-black tracking-tighter text-[#1a1a1a] leading-[0.92] uppercase mb-6">
                Structural<br /><span className="text-[#60507c]">Intelligence.</span>
              </h2>
              <p className="text-lg text-gray-500 font-medium leading-relaxed max-w-sm">
                Synthesizing graph-native topologies with large-scale language models — bridging manifold geometry with semantic inference.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="flex flex-col divide-y-2 divide-black/10"
            >
              {[
                { num: "I", word: "चैतन्य", meaning: "Topology", desc: "Modeling relationship density across high-dimensional manifolds — not isolated tokens." },
                { num: "II", word: "विचार", meaning: "Inference", desc: "Executing multi-hop logic chains to discover latent connections within complex network structures." },
                { num: "III", word: "युक्ति", meaning: "Synthesis", desc: "Transforming structural topology into actionable intelligence through hybrid Graph-LLM reasoning." }
              ].map((pillar, i) => (
                <motion.div key={i} variants={smoothFade} className="flex items-start gap-6 py-8 group">
                  <span className="text-[10px] font-black tracking-widest text-[#60507c]/40 pt-1 w-6 shrink-0">{pillar.num}</span>
                  <div className="flex flex-col gap-2">
                    <div className="text-2xl text-[#60507c] font-bold font-sanskrit leading-none">{pillar.word}</div>
                    <h3 className="text-base font-black tracking-widest text-[#1a1a1a] uppercase">{pillar.meaning}</h3>
                    <p className="text-sm text-gray-500 font-medium leading-relaxed">{pillar.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 3. CHARTER (Nyaya Framework) ─── */}
      <section id="charter" className="py-24 px-6 lg:px-20 bg-white border-b-4 border-black/8">
        <div className="max-w-7xl mx-auto">
          <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={smoothFade}
             className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
          >
            <div className="lg:col-span-7">
              <SectionLabel number="02" label="Lab Charter v1.0" />
              <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-[#1a1a1a] leading-[1.0] uppercase mb-10">
                The Nyaya <br/>
                <span className="text-[#60507c]">Symmetry.</span>
              </h2>
              <div className="space-y-6 max-w-2xl">
                <p className="text-xl lg:text-2xl font-medium text-[#1a1a1a] leading-snug tracking-tight">
                  Our research synthesizes classical Indian logic with graph-native topologies and large-scale language models.
                </p>
                <p className="text-base text-gray-500 font-medium leading-relaxed">
                  By treating relationships and linguistic semantics as first-class logical predicates, we enable multi-hop reasoning that bridges structural manifold learning with generative intelligence. This is not just processing — it is structural synthesis.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 lg:pt-20">
              <div className="border-l-4 border-[#60507c] pl-8 py-4 bg-[#fdf9fa]">
                <div className="text-[10px] font-black tracking-widest uppercase mb-4 text-[#1a1a1a]/50">Primary Directive</div>
                <p className="text-sm font-medium text-gray-600 leading-relaxed italic mb-8">
                  &quot;To find the structure is to find the soul. Data without topology is noise; topology without reasoning is blind.&quot;
                </p>
                <div className="flex flex-col gap-3 text-[10px] font-black tracking-[0.2em] uppercase">
                  <span className="flex items-center gap-3 text-[#1a1a1a]/40"><span className="w-1 h-1 bg-[#60507c]"></span>01 // Structural Synthesis</span>
                  <span className="flex items-center gap-3 text-[#1a1a1a]/40"><span className="w-1 h-1 bg-[#60507c]"></span>02 // Nyaya Categorization</span>
                  <span className="flex items-center gap-3 text-[#1a1a1a]/40"><span className="w-1 h-1 bg-[#60507c]"></span>03 // Hetu (Evidence) Verification</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 4. FOUNDER / LABORATORY ─── */}
      <section id="about" className="py-24 px-6 lg:px-20 bg-[#fdf9fa] border-b-4 border-black/8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={smoothFade}
          >
            <SectionLabel number="03" label="The Laboratory" />
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Founder Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4 relative"
            >
              <div className="relative z-10 border-4 border-black grayscale hover:grayscale-0 transition-all duration-700 group">
                <img
                  src="/founder.jpg"
                  alt="Ansh Mishra - Founder"
                  className="w-full aspect-[3/4] object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000";
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-[10px] font-black tracking-widest text-[#b19cd9] uppercase">Ansh Mishra // Founder</span>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-full h-full border-4 border-[#60507c]/30 -z-10"></div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8"
            >
              <div className="text-xs font-black tracking-[0.2em] text-[#60507c] uppercase mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#60507c]"></span>
                The Founder
              </div>
              <h3 className="text-4xl lg:text-6xl font-black text-[#1a1a1a] uppercase tracking-tight mb-6 leading-[0.95]">
                Ansh Mishra
              </h3>
              <div className="space-y-4 text-base text-gray-600 font-medium leading-relaxed max-w-xl mb-8">
                <p>
                  Started during my first year of BTech, Zupsilon was born from a singular obsession: <span className="text-[#60507c] font-bold">how models reason across scale.</span>
                </p>
                <p>
                  We are building a new class of intelligence that synthesizes the structural rigor of Graph Neural Networks with the semantic breadth of Large Language Models — systems that don&apos;t just predict the next token, but understand the underlying manifold of relationships.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-10">
                {["GNN Topologies", "Language Models", "Neural Geometry"].map((tag) => (
                  <div key={tag} className="px-3 py-1.5 border-2 border-black/20 text-[10px] font-black uppercase tracking-widest text-[#1a1a1a] hover:border-[#60507c] hover:text-[#60507c] transition-colors duration-200 cursor-default">
                    {tag}
                  </div>
                ))}
              </div>

              <div className="p-6 border-l-4 border-dashed border-[#b19cd9] bg-white/60">
                <h4 className="text-xs font-black uppercase tracking-widest mb-2 text-[#1a1a1a]">Open Collaboration</h4>
                <p className="text-sm text-gray-500 italic mb-3">Interested in structural reasoning or Graph-LLM hybridization? We are open for researcher-led partnerships.</p>
                <a href="mailto:anshmishra@zupsilonai.me" className="text-xs font-black text-[#60507c] hover:underline uppercase tracking-wider inline-flex items-center gap-1">
                  Inquire for Collaboration <ArrowUpRight size={12} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 5. PLATFORM (Neural Topography) ─── */}
      <section id="platform" className="py-24 px-6 lg:px-20 bg-white border-b-4 border-black/8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={smoothFade}
          >
            <SectionLabel number="04" label="Neural Topography" />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col lg:flex-row justify-between items-start gap-16"
          >
            <motion.div variants={smoothFade} className="lg:w-5/12">
              <h2 className="text-4xl lg:text-5xl font-black tracking-tighter mb-6 leading-[1.0] uppercase">
                Bridging Graphs<br />&amp; Language.
              </h2>
              <p className="text-base text-gray-600 font-medium leading-relaxed">
                We develop architectures that unify structural connectivity with semantic depth — bridging the gap between <strong className="text-[#1a1a1a]">Manifold Alignment</strong> and <strong className="text-[#1a1a1a]">Structured Reasoning</strong>.
              </p>
            </motion.div>

            <motion.div variants={smoothFade} className="lg:w-6/12 w-full">
              <div className="border-4 border-[#1a1a1a] bg-[#fdf9fa] shadow-[8px_8px_0_0_#60507c] transition-all duration-300 hover:shadow-[12px_12px_0_0_#1a1a1a] hover:-translate-y-1 hover:-translate-x-1">
                {[
                  { num: "01", title: "Manifold Layer", desc: "Quantifying relationship gradients across entity nodes in real-time." },
                  { num: "02", title: "Logical Synthesis", desc: "Assembling multi-source data into coherent, navigable logical predicates." },
                  { num: "03", title: "Structural Inference", desc: "Navigating deep-hop relationship chains with semantic precision." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-6 p-8 border-b-2 border-black/8 last:border-0 group hover:bg-[#60507c]/5 transition-colors duration-300">
                    <span className="text-[10px] font-black tracking-widest text-[#60507c]/50 pt-1 shrink-0">{item.num}</span>
                    <div>
                      <h4 className="text-sm font-black text-[#1a1a1a] uppercase tracking-wide mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-500 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── 6. PHILOSOPHY (How it Works) ─── */}
      <section id="philosophy" className="py-24 px-6 lg:px-20 bg-[#fdf9fa] border-b-4 border-black/8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={smoothFade}
          >
            <SectionLabel number="05" label="Research Philosophy" />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={smoothFade}
            className="mb-16 lg:w-1/2"
          >
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-4 uppercase leading-[1.0]">The Logic of <br/><span className="text-[#60507c]">Connection.</span></h2>
            <p className="text-base text-gray-500 font-medium">Transforming unstructured noise into deliberate, navigable intelligence.</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-black/10"
          >
            {[
              { step: "01", title: "Input Data Intakes", desc: "Pulls from messy, disconnected data sources — structured or not." },
              { step: "02", title: "Relationship Mapping", desc: "Constructing multi-dimensional edge networks to highlight latent connections." },
              { step: "03", title: "Insight Generation", desc: "Generates predictions, classifications, and structural insight — across the full graph." }
            ].map((step, i) => (
              <motion.div key={i} variants={smoothFade} className="flex flex-col p-8 border-r-2 border-black/8 last:border-r-0 group hover:bg-[#60507c] hover:text-white transition-colors duration-500">
                <div className="text-[10px] font-black tracking-[0.3em] text-[#60507c] group-hover:text-white/60 uppercase mb-6 transition-colors duration-500">
                  {step.step}
                </div>
                <h3 className="text-lg font-black mb-3 text-[#1a1a1a] group-hover:text-white uppercase tracking-tight transition-colors duration-500">{step.title}</h3>
                <p className="text-sm text-gray-500 group-hover:text-white/70 font-medium leading-relaxed transition-colors duration-500">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── 7. BENCHMARKS (Dark) ─── */}
      <section id="benchmarks" className="py-24 px-6 lg:px-20 bg-[#0e0e0e] border-t-4 border-[#60507c]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={smoothFade}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[10px] font-black tracking-[0.3em] text-[#60507c]/50 uppercase">06</span>
              <span className="w-8 h-px bg-[#60507c]/40"></span>
              <span className="text-[10px] font-black tracking-[0.3em] text-[#b19cd9] uppercase flex items-center gap-2"><BarChart3 size={12} /> ETA-A Benchmark Report v1.0</span>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={smoothFade}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b-2 border-white/10 pb-10 gap-6"
          >
            <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-white leading-[1.0] uppercase">
              Numbers.<br />
              <span className="text-[#b19cd9]">No Noise.</span>
            </h2>
            <div className="flex flex-col gap-3 md:text-right max-w-xs">
              <p className="text-white/50 font-medium text-sm leading-relaxed">
                Four architectures. Five independent trials. Legal precedent retrieval on Citation Dataset v4.0 — 500 nodes, 1950–2024.
              </p>
              <a
                href="/ETA-A_Benchmark_v1.0 (2).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#b19cd9] font-bold text-xs tracking-widest uppercase hover:text-white transition-colors duration-300 md:justify-end"
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
            <div className="hidden md:grid grid-cols-5 gap-0 border-b-2 border-white/10 pb-4 mb-2 px-6">
              {['Architecture', 'MRR ↑', 'AUC ↑', 'Latency (ms/node) ↓', 'Throughput (nodes/s) ↑'].map((h, i) => (
                <div key={i} className={`text-[10px] font-black tracking-[0.2em] uppercase ${i === 0 ? 'text-white/30' : 'text-[#b19cd9]/50 text-right'}`}>{h}</div>
              ))}
            </div>

            {[
              { arch: 'Simple MLP', tag: 'Semantic Baseline', mrr: '0.365', auc: '0.739', lat: '0.0012', tput: '1,670', highlight: false, note: 'Leads on ranking precision at N=500.' },
              { arch: 'Legal GCN', tag: 'Recommended Production', mrr: '0.313', auc: '0.684', lat: '0.0047', tput: '1,330', highlight: true, note: 'Only model with citation path tracing & doctrinal lineage.' },
              { arch: 'GraphSAGE', tag: 'Experimental', mrr: '0.100', auc: '0.608', lat: '0.0074', tput: '1,027', highlight: false, note: 'Underperforms at N=500. Expected to improve at larger scale.' },
              { arch: 'Legal GAT', tag: 'Experimental', mrr: '0.063', auc: '0.603', lat: '0.0071', tput: '672', highlight: false, note: 'Attention overfits on sparse neighbourhoods.' },
            ].map((row, i) => (
              <motion.div
                key={i}
                variants={smoothFade}
                className={`group grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-0 items-start md:items-center px-6 py-5 border-b border-white/8 transition-all duration-300 cursor-default ${
                  row.highlight
                    ? 'bg-[#60507c]/20 border-l-4 border-l-[#b19cd9] hover:bg-[#60507c]/30'
                    : 'hover:bg-white/4'
                }`}
              >
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-3">
                    <span className="text-white font-black text-sm tracking-tight">{row.arch}</span>
                    {row.highlight && <span className="text-[9px] font-black tracking-widest uppercase bg-[#b19cd9] text-black px-2 py-0.5">★ Prod</span>}
                  </div>
                  <span className="text-white/25 text-[10px] font-bold uppercase tracking-wider">{row.tag}</span>
                </div>
                <div className="flex flex-col md:items-end">
                  <span className="text-[#b19cd9] font-black text-xl">{row.mrr}</span>
                </div>
                <div className="flex flex-col md:items-end">
                  <span className="text-white font-bold text-xl">{row.auc}</span>
                </div>
                <div className="flex flex-col md:items-end">
                  <span className="text-white/70 font-bold text-xl">{row.lat}</span>
                </div>
                <div className="flex flex-col md:items-end">
                  <span className="text-white/70 font-bold text-xl">{row.tput}</span>
                  <p className="text-white/25 text-xs font-medium leading-relaxed mt-1 max-w-[180px] md:text-right hidden lg:block">{row.note}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Key Findings */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-2 border-white/10"
          >
            {[
              { label: 'Recommended Path', value: 'Hybrid MLP + GCN', sub: 'Fast semantic ranking + deep structural re-ranking' },
              { label: 'GCN Latency Overhead', value: '4× vs MLP', sub: '0.0047 ms/node — operationally acceptable' },
              { label: 'Next Milestone', value: 'N = 5,000', sub: 'Benchmark v2.0 — GNN structural advantage expected to emerge' },
            ].map((kf, i) => (
              <motion.div
                key={i}
                variants={smoothFade}
                className="flex flex-col p-8 border-r border-white/10 last:border-r-0 group hover:bg-white/4 transition-colors duration-300"
              >
                <div className="text-[10px] font-black tracking-[0.2em] uppercase text-[#b19cd9]/50 mb-3">{kf.label}</div>
                <div className="text-xl font-black text-white tracking-tight mb-2">{kf.value}</div>
                <div className="text-xs text-white/35 font-medium leading-relaxed">{kf.sub}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── 8. RESEARCH LAB INDEX ─── */}
      <section id="lab" className="py-24 px-6 lg:px-20 bg-[#fdf9fa] border-b-4 border-black/8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={smoothFade}
            className="flex flex-col md:flex-row md:items-end justify-between mb-20 border-b-4 border-[#1a1a1a] pb-8 gap-6"
          >
            <div>
              <SectionLabel number="07" label="Research Lab" />
              <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-[#1a1a1a] leading-[1.0] uppercase">
                Proof.<br />
                <span className="text-[#60507c]">Not Promise.</span>
              </h2>
            </div>
            <p className="text-sm text-gray-500 font-medium max-w-xs leading-relaxed md:text-right">
              Our benchmarks, evaluations, and published research — open for scrutiny.
            </p>
          </motion.div>

          {/* Benchmark Results */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <BarChart3 className="w-4 h-4 text-[#60507c]" />
              <h3 className="text-xs font-black tracking-[0.2em] uppercase text-[#1a1a1a]">Benchmark Results</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-[#1a1a1a]">
              {[
                { metric: "Topology Accuracy", dataset: "OGB-ArXiv", value: "82.4", unit: "Validation Acc.", tag: "Lab Ver." },
                { metric: "Link Prediction", dataset: "OGB-Collab", value: "0.64", unit: "Hits@50", tag: "Pre-Print" },
                { metric: "Inference Latency", dataset: "N=10k Nodes", value: "<5", unit: "ms/node", tag: "System Log" },
                { metric: "Structural F1", dataset: "Yelp-Chi", value: "0.89", unit: "Score", tag: "Internal" },
              ].map((bench, i) => (
                <motion.div
                  key={i}
                  variants={smoothFade}
                  className="flex flex-col p-8 border-r-2 border-[#1a1a1a] last:border-r-0 group relative overflow-hidden cursor-default hover:bg-[#60507c] hover:text-white transition-colors duration-500"
                >
                  <div className="text-[3rem] font-black leading-none mb-1 text-[#60507c] group-hover:text-white transition-colors duration-500">
                    {bench.value}
                  </div>
                  <div className="text-[10px] font-black tracking-widest uppercase text-gray-400 group-hover:text-white/60 transition-colors duration-500 mb-4">
                    {bench.unit}
                  </div>
                  <div className="mt-auto">
                    <div className="text-xs font-black text-[#1a1a1a] group-hover:text-white transition-colors duration-500 uppercase tracking-wide leading-tight">
                      {bench.metric}
                    </div>
                    <div className="text-[10px] text-gray-400 group-hover:text-white/50 transition-colors duration-500 mt-1 font-black uppercase tracking-widest">
                      {bench.dataset}
                    </div>
                  </div>
                  <span className="absolute top-4 right-4 text-[9px] font-black tracking-widest uppercase border border-current px-1.5 py-0.5 text-[#60507c] group-hover:text-white group-hover:border-white/50 transition-colors duration-500">
                    {bench.tag}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Archive card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="w-4 h-4 text-[#60507c]" />
              <h3 className="text-xs font-black tracking-[0.2em] uppercase text-[#1a1a1a]">Technical Archive</h3>
            </div>
            <div className="border-4 border-[#1a1a1a] p-10 lg:p-16 bg-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4">
                <Clock className="w-5 h-5 text-[#60507c] animate-pulse" />
              </div>
              <div className="relative z-10 max-w-xl">
                <h4 className="text-3xl lg:text-4xl font-black text-[#1a1a1a] uppercase leading-none mb-4">
                  ACCESS <span className="text-[#60507c]">RESTRICTED.</span>
                </h4>
                <p className="text-sm text-gray-400 font-bold uppercase tracking-tight leading-relaxed mb-6">
                  Technical drafts and pre-prints locked for empirical verification. Open-access reproduction logs scheduled for Q3 2026.
                </p>
                <div className="flex flex-wrap gap-3 opacity-50 pointer-events-none grayscale">
                  <span className="text-[10px] font-black tracking-widest border border-black px-2 py-1">LOGS LOCKED</span>
                  <span className="text-[10px] font-black tracking-widest border border-black px-2 py-1">VERSION 0.9.4a</span>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 text-[10rem] font-black text-gray-50 select-none -z-10 group-hover:text-[#60507c]/5 transition-colors duration-700">
                LAB
              </div>
            </div>
          </motion.div>

          {/* Coming Soon strip */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={smoothFade}
            className="border-4 border-dashed border-[#1a1a1a]/20 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-[#1a1a1a]/[0.02]"
          >
            <div>
              <div className="text-[10px] font-black tracking-[0.25em] text-[#60507c] uppercase mb-2">On the Horizon</div>
              <h4 className="text-xl font-black text-[#1a1a1a] uppercase tracking-tight">Recursive Topology Synthesis.</h4>
              <p className="text-sm text-gray-400 font-medium mt-1 max-w-md">Full benchmark releases, ablation studies, and dataset cards synchronized for Q4 deployment.</p>
            </div>
            <div className="flex-shrink-0">
              <div className="border-2 border-[#1a1a1a] px-5 py-2.5 bg-white shadow-[4px_4px_0_0_#60507c] text-[10px] font-black tracking-[0.2em] uppercase text-[#1a1a1a] cursor-default flex items-center gap-2">
                <ShieldCheck size={13} className="text-[#60507c]" /> Verified System
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 9. CTA SECTION ─── */}
      <section className="py-24 px-6 lg:px-20 bg-[#0e0e0e] text-white border-t-8 border-[#60507c]">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center gap-4 mb-10">
              <span className="w-12 h-px bg-[#60507c]/50"></span>
              <span className="text-[10px] font-black tracking-[0.3em] text-[#60507c] uppercase">Zupsilon Research</span>
              <span className="w-12 h-px bg-[#60507c]/50"></span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black mb-8 tracking-tighter uppercase leading-[1.0]">The Architecture<br/>of Reasoning.</h2>
            <p className="text-base text-white/50 mb-12 font-medium max-w-xl mx-auto leading-relaxed">
              Pioneering a new frontier in Graph Neural Networks — at the intersection of structural topology and semantic intelligence.
            </p>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-[10px] font-black tracking-[0.3em] uppercase text-[#b19cd9]/70">
              <span className="flex items-center gap-2"><span className="w-1 h-1 bg-[#60507c]"></span>Research First</span>
              <span className="flex items-center gap-2"><span className="w-1 h-1 bg-[#60507c]"></span>Scalable Reasoning</span>
              <span className="flex items-center gap-2"><span className="w-1 h-1 bg-[#60507c]"></span>Open Documentation</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-[#0a0a0a] pt-16 pb-8 px-6 lg:px-20 text-white font-medium border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-12">
            <div className="max-w-sm">
              <div className="flex items-center gap-3 mb-5">
                <img src="/logo.png" alt="Logo" className="w-7 h-7 object-contain brightness-0 invert" />
                <span className="font-sans text-lg font-black tracking-widest text-[#b19cd9] uppercase">Zupsilon</span>
              </div>
              <p className="text-xs text-white/40 leading-relaxed font-medium mb-6">
                Graph-native research laboratory building neural systems that synthesize structural topology with semantic intelligence.
              </p>
              <div className="pt-6 border-t border-white/10">
                <p className="text-[10px] font-black tracking-[0.2em] text-[#b19cd9] uppercase mb-1">Institutional Research</p>
                <p className="text-[10px] text-white/25 font-medium">Open for scientific inquiry &amp; partnership.</p>
              </div>
            </div>

            <div className="flex gap-12 lg:gap-20 text-xs">
              <div className="flex flex-col gap-3">
                <span className="text-white font-black mb-1 tracking-widest text-[10px] uppercase bg-[#60507c] px-2 py-1 w-fit">Company</span>
                {[
                  { label: "Platform", href: "#platform" },
                  { label: "Research", href: "#research" },
                  { label: "Philosophy", href: "#philosophy" },
                  { label: "Founder", href: "#about" },
                  { label: "Research Index", href: "#lab" },
                ].map(link => (
                  <a key={link.label} href={link.href} className="text-white/50 hover:text-[#b19cd9] transition-colors font-bold uppercase tracking-wider">{link.label}</a>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-white font-black mb-1 tracking-widest text-[10px] uppercase bg-[#60507c] px-2 py-1 w-fit">Connect</span>
                <a href="#research" className="text-white/50 hover:text-[#b19cd9] transition-colors font-bold uppercase tracking-wider">About Us</a>
                <a href="mailto:anshmishra@zupsilonai.me" className="text-white/50 hover:text-[#b19cd9] transition-colors font-bold uppercase tracking-wider">Contact</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#b19cd9] transition-colors font-bold uppercase tracking-wider">Instagram</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center text-[10px] text-white/25 tracking-wider font-bold pt-6 border-t border-white/8">
            <div className="flex items-center gap-4">
              <span>© 2026 ZUPSILON. ALL RIGHTS RESERVED.</span>
              <span className="w-1 h-1 bg-white/20 rounded-full"></span>
              <span className="text-[#60507c]">v1.0.4-PROD</span>
            </div>
            <div className="flex gap-6 mt-3 sm:mt-0">
              <button onClick={() => setLegalContent('privacy')} className="hover:text-white transition-colors uppercase tracking-wider font-bold">Privacy</button>
              <button onClick={() => setLegalContent('terms')} className="hover:text-white transition-colors uppercase tracking-wider font-bold">Terms</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
