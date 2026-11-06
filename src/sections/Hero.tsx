import Magnetic from '../components/Magnetic'
import { motion, type Variants } from 'framer-motion'
import { Github, Linkedin, ArrowDown, Download, ArrowUpRight } from 'lucide-react'
import { personal, stats } from '../data/portfolio'
import SplineHero from '../components/SplineHero'

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: .65, ease: 'easeOut' } },
}

export default function Hero() {
  return (<>
    <section id="home" className="hero-stage relative flex min-h-[100svh] items-center overflow-hidden pt-24">
      {/* The Spline canvas is a real full-bleed 3D layer, not a framed card. */}
      <div className="hero-3d-bg" aria-label="Interactive animated 3D orbital sculpture">
        <SplineHero />
      </div>
      <div aria-hidden className="grid-bg absolute inset-0 z-[1]" />
      <div aria-hidden className="hero-3d-vignette absolute inset-0 z-[2]" />
      <div aria-hidden className="hero-bottom-glow absolute inset-x-0 bottom-0 z-[3]" />

      <motion.div
        variants={{ show: { transition: { staggerChildren: .1 } } }}
        initial="hidden"
        animate="show"
        className="hero-copy relative z-10 mx-auto flex w-full max-w-6xl items-center px-5 pb-28 pt-12 sm:px-8 lg:pb-32"
      >
        <div className="w-full max-w-[50rem]">
          <motion.p variants={item} className="hero-availability inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-semibold tracking-[.16em]">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.8)]" />
            {personal.status}
          </motion.p>
          <motion.p variants={item} className="mt-8 text-xs font-bold tracking-[.28em] text-accent">PORTFOLIO · 2026</motion.p>
          <motion.h1 variants={item} className="hero-title mt-4 max-w-[54rem] text-5xl font-bold leading-[.96] tracking-tighter text-zinc-50 sm:text-6xl lg:text-[5.4rem]">
            Ideas into <span className="hero-title-accent italic" style={{ fontFamily: 'Georgia, serif' }}>intelligence.</span>
          </motion.h1>
          <motion.p variants={item} className="hero-name mt-6">I'm <span>{personal.name}</span>.</motion.p>
          <motion.p variants={item} className="hero-roles mt-2">{personal.roles}</motion.p>
          <motion.p variants={item} className="hero-intro mt-5 max-w-xl text-base leading-8">
            {personal.intro}
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <Magnetic><a href="#projects" className="btn btn-p">Explore selected work <ArrowUpRight size={16} /></a></Magnetic>
            <Magnetic><a href={personal.resume} download="Cheran_Rajamanikam_Resume.pdf" className="btn btn-s"><Download size={16} />Download résumé</a></Magnetic>
          </motion.div>
          <motion.div variants={item} className="mt-7 flex flex-wrap items-center gap-5 text-sm text-zinc-300">
            <a href={personal.github} target="_blank" rel="noreferrer" className="hero-social flex items-center gap-2"><Github size={17} />GitHub</a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="hero-social flex items-center gap-2"><Linkedin size={17} />LinkedIn</a>
            <span className="hero-location">{personal.location}</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Keep the existing small portrait from the previous 3D badge, but remove its card. */}
      <div className="hero-signature pointer-events-none absolute bottom-24 right-[6vw] z-20 hidden items-center gap-3 md:flex">
        <img src="/photos/cheran-profile.jpeg" alt="" className="h-12 w-12 rounded-full object-cover object-center ring-1 ring-white/35 shadow-[0_0_24px_rgba(74,222,255,.16)]" />
        <div>
          <p className="text-[9px] font-semibold tracking-[.2em] text-white/55">CURIOUS BY DEFAULT</p>
          <p className="mt-1 text-sm font-semibold text-white/90">Research. Build. Repeat.</p>
          <p className="mt-1 text-[9px] tracking-[.14em] text-white/45">AI × ENGINEERING · BENGALURU</p>
        </div>
      </div>

      <a href="#about" aria-label="Scroll to About" className="hero-scroll absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-zinc-400 hover:text-cyan-200">
        <span className="h-8 w-px bg-gradient-to-b from-cyan-200/80 to-violet-300/30" />
        <span className="text-[10px] tracking-[.24em]">SCROLL</span>
        <ArrowDown size={15} className="animate-bounce motion-reduce:animate-none" />
      </a>
    </section>

    <div className="stats-band"><dl className="stats-grid mx-auto grid max-w-6xl grid-cols-2 gap-y-7 px-5 py-8 sm:px-8 md:grid-cols-4 md:py-9">
      {stats.map(s => <div className="stats-item" key={s.label}><dd>{s.value}</dd><dt>{s.label}</dt></div>)}
    </dl></div>
  </>)
}
