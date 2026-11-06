import Magnetic from '../components/Magnetic'
import { motion, type Variants } from 'framer-motion'
import { Github, Linkedin, ArrowDown, Download, ArrowUpRight } from 'lucide-react'
import { personal, stats } from '../data/portfolio'
import SplineHero from '../components/SplineHero'
const item: Variants = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: .6, ease: 'easeOut' } } }
export default function Hero() {
  return (<>
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div aria-hidden className="grid-bg absolute inset-0" />
      <motion.div variants={{ show: { transition: { staggerChildren: .1 } } }} initial="hidden" animate="show"
        className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[1.15fr_.85fr]">
        <div className="relative z-10">
          <motion.p variants={item} className="inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-4 py-2 text-[11px] font-semibold tracking-[.16em] text-zinc-500">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />{personal.status}</motion.p>
          <motion.p variants={item} className="mt-8 text-xs font-bold tracking-[.28em] text-accent">PORTFOLIO · 2026</motion.p>
          <motion.h1 variants={item} className="mt-4 max-w-3xl text-5xl font-bold leading-[.98] tracking-tighter text-zinc-50 sm:text-6xl lg:text-[5.25rem]">Ideas into <span className="italic text-accent" style={{fontFamily:'Georgia,serif'}}>intelligence.</span></motion.h1>
          <motion.p variants={item} className="hero-name mt-6">I'm <span>{personal.name}</span>.</motion.p>
          <motion.p variants={item} className="hero-roles mt-2">{personal.roles}</motion.p>
          <motion.p variants={item} className="mt-5 max-w-xl text-base leading-8 text-zinc-500">{personal.intro}</motion.p>
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <Magnetic><a href="#projects" className="btn btn-p">Explore selected work <ArrowUpRight size={16}/></a></Magnetic>
            <Magnetic><a href={personal.resume} download="Cheran_Rajamanikam_Resume.pdf" className="btn btn-s"><Download size={16}/>Download résumé</a></Magnetic></motion.div>
          <motion.div variants={item} className="mt-7 flex flex-wrap items-center gap-5 text-sm text-zinc-500">
            <a href={personal.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent"><Github size={16}/>GitHub</a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent"><Linkedin size={16}/>LinkedIn</a>
            <span className="text-zinc-400">{personal.location}</span></motion.div>
        </div>
        <motion.div variants={item} className="relative mx-auto w-full max-w-[500px] lg:ml-auto">
          <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full border border-accent/30" />
          <div className="absolute -bottom-5 -left-5 h-36 w-36 rounded-full bg-accent/10 blur-2xl" />
          <div className="spline-hero-card relative overflow-hidden rounded-[2rem] border border-line p-2.5">
            <div className="spline-hero-viewport relative h-[390px] w-full overflow-hidden rounded-[1.55rem] sm:h-[470px] lg:h-[510px]">
              <SplineHero />
              <div className="pointer-events-none absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#081020]/65 px-3 py-2 text-[9px] font-semibold tracking-[.18em] text-white/70 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_#22d3ee]" /> LIVE 3D SYSTEM
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-36 bg-gradient-to-t from-[#070a12]/90 via-[#070a12]/35 to-transparent" />
              <div className="pointer-events-none absolute bottom-4 left-4 right-4 z-10 flex items-center gap-3 rounded-2xl border border-white/15 bg-[#081020]/75 p-3 text-white shadow-2xl backdrop-blur-xl sm:bottom-5 sm:left-5 sm:right-5 sm:p-3.5">
                <img src="/photos/cheran-profile.jpeg" alt="Cheran Rajamanikam" className="h-[66px] w-[54px] shrink-0 rounded-xl object-cover object-center" />
                <div className="min-w-0">
                  <p className="text-[9px] font-semibold tracking-[.2em] text-white/55">CURIOUS BY DEFAULT</p>
                  <p className="mt-1 truncate text-base font-semibold sm:text-lg">Research. Build. Repeat.</p>
                  <p className="mt-1 text-[10px] tracking-wide text-white/55">AI × ENGINEERING · BENGALURU</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -left-8 top-12 z-20 hidden rounded-xl border border-line bg-card px-4 py-3 shadow-lg sm:block">
            <p className="text-[10px] font-semibold tracking-widest text-zinc-400">FOCUS</p><p className="mt-1 text-sm font-bold text-zinc-800">AI × Engineering</p>
          </div>
        </motion.div>
      </motion.div>
      <a href="#about" aria-label="Scroll to About" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-zinc-500 hover:text-accent"><ArrowDown size={20} className="animate-bounce motion-reduce:animate-none" /></a>
    </section>
    <div className="stats-band"><dl className="stats-grid mx-auto grid max-w-6xl grid-cols-2 gap-y-7 px-5 py-8 sm:px-8 md:grid-cols-4 md:py-9">
      {stats.map(s => <div className="stats-item" key={s.label}><dd>{s.value}</dd><dt>{s.label}</dt></div>)}</dl></div>
  </>)
}
