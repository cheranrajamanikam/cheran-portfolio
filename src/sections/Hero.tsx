import { lazy, Suspense } from 'react'
import Magnetic from '../components/Magnetic'
import { motion, type Variants } from 'framer-motion'
import { Github, Linkedin, ArrowDown, FileText } from 'lucide-react'
import { personal, stats } from '../data/portfolio'
const NeuralScene = lazy(() => import('../components/NeuralScene'))
const item: Variants = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: .6, ease: 'easeOut' } } }
export default function Hero() {
  return (<>
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <div aria-hidden className="grid-bg absolute inset-0" />
      <div aria-hidden className="absolute inset-y-0 right-0 w-full opacity-60 sm:w-3/5 sm:opacity-100"><Suspense fallback={null}><NeuralScene /></Suspense></div>
      <div aria-hidden className="absolute left-1/2 top-1/4 h-[420px] w-[620px] max-w-full -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]" />
      <motion.div variants={{ show: { transition: { staggerChildren: .1 } } }} initial="hidden" animate="show"
        className="relative mx-auto w-full max-w-6xl px-5 pb-24 pt-32 sm:px-8">
        <motion.p variants={item} className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[.03] px-3 py-1 text-xs tracking-wider text-zinc-300">
          <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60 motion-reduce:hidden" /><span className="relative h-2 w-2 rounded-full bg-emerald-400" /></span>{personal.status}</motion.p>
        <motion.p variants={item} className="mt-6 text-sm font-medium tracking-wide text-zinc-400">CHERAN RAJAMANIKAM</motion.p>
        <motion.h1 variants={item} className="mt-4 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tighter text-zinc-50 sm:text-6xl lg:text-7xl">Building intelligent systems, AI products &amp; research-driven software.</motion.h1>
        <motion.p variants={item} className="mt-5 text-lg font-medium text-zinc-200">{personal.roles}</motion.p>
        <motion.p variants={item} className="mt-4 max-w-xl leading-relaxed text-zinc-400">{personal.intro}</motion.p>
        <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
          <Magnetic><a href="#projects" className="btn btn-p">Explore My Work →</a></Magnetic>
          <Magnetic><a href={personal.resume} target="_blank" rel="noreferrer" className="btn btn-s">View Resume ↗</a></Magnetic></motion.div>
        <motion.div variants={item} className="hidden text-sm text-zinc-400">
          <a href={personal.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-zinc-50"><Github size={16} />GitHub</a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-zinc-50"><Linkedin size={16} />LinkedIn</a></motion.div>
      </motion.div>
      <a href="#about" aria-label="Scroll to About" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-zinc-500 hover:text-zinc-200"><ArrowDown size={20} className="animate-bounce motion-reduce:animate-none" /></a>
    </section>
    <div className="border-y border-line bg-white/[.015]"><dl className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-5 py-10 sm:px-8 md:grid-cols-4">
      {stats.map(s => <div key={s.label}><dd className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">{s.value}</dd><dt className="mt-1 text-sm text-zinc-500">{s.label}</dt></div>)}</dl></div>
  </>)
}
