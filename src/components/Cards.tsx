import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Github, X, ExternalLink, BookOpen } from 'lucide-react'
import type { Project } from '../data/portfolio'
import { SkillBadge, Reveal } from './ui'

export const ProjectCard = ({ p, i, onOpen }: { p: Project; i: number; onOpen: (p: Project) => void }) => (
  <Reveal delay={(i % 3) * 0.06} className={p.featured ? 'md:col-span-2' : ''}>
    <button data-cursor="project" onClick={() => onOpen(p)} aria-label={`Open ${p.name} details`}
      className={`group relative flex h-full w-full flex-col overflow-hidden rounded-lg border bg-card p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-accent/40 ${p.featured ? 'border-accent/25 sm:p-8' : 'border-line'}`}>
      <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
      {p.featured && <span className="mb-4 w-fit rounded-full border border-accent/30 px-2.5 py-0.5 text-xs text-accent">Flagship project</span>}
      <div className="flex items-start justify-between gap-4">
        <h3 className={`font-semibold tracking-tight text-zinc-50 ${p.featured ? 'text-3xl' : 'text-xl'}`}>{p.name}</h3>
        <ArrowUpRight className="shrink-0 text-zinc-500 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" size={20} />
      </div>
      <p className="mt-2 text-zinc-400">{p.tagline}</p>
      {(p.featured || i < 3) && <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400">{p.description}</p>}
      {p.featured && <>
        <p className="mt-5 max-w-2xl border-l-2 border-accent/60 pl-4 text-sm text-zinc-200">{p.highlight}</p></>}
      <div className="mt-auto flex flex-wrap gap-1.5 pt-6">{p.tech.slice(0, p.featured ? 9 : 5).map(t => <SkillBadge key={t}>{t}</SkillBadge>)}</div>
    </button>
  </Reveal>)

export function ProjectModal({ p, onClose }: { p: Project | null; onClose: () => void }) {
  useEffect(() => {
    if (!p) return
    const k = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    addEventListener('keydown', k); document.body.style.overflow = 'hidden'
    return () => { removeEventListener('keydown', k); document.body.style.overflow = '' }
  }, [p, onClose])
  const rows = p ? [['Overview', p.description], ['Problem', p.problem], ['Solution', p.solution], ['Architecture', p.architecture], ['Implementation', p.implementation], ['Results', p.results], ['Future improvements', p.future]].filter(r => r[1]) : []
  return (
    <AnimatePresence>{p && (
      <motion.div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
        <motion.div role="dialog" aria-modal="true" aria-label={p.name} onClick={e => e.stopPropagation()}
          initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }} transition={{ duration: .25 }}
          className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-xl border border-line bg-card p-6 sm:rounded-xl sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div><h3 className="text-2xl font-semibold text-zinc-50">{p.name}</h3><p className="mt-1 text-zinc-400">{p.tagline}</p></div>
            <button autoFocus aria-label="Close" onClick={onClose} className="rounded-md p-2 text-zinc-400 hover:bg-white/5 hover:text-zinc-50"><X size={20} /></button></div>
          {p.features && <div className="mt-5 flex flex-wrap gap-1.5">{p.features.map(f => <SkillBadge key={f}>{f}</SkillBadge>)}</div>}
          <dl className="mt-6 space-y-5">{rows.map(([h, t]) => <div key={h}><dt className="text-sm font-medium text-zinc-100">{h}</dt><dd className="mt-1 text-sm leading-relaxed text-zinc-400">{t}</dd></div>)}
            <div><dt className="text-sm font-medium text-zinc-100">Technologies</dt><dd className="mt-2 flex flex-wrap gap-1.5">{p.tech.map(t => <SkillBadge key={t}>{t}</SkillBadge>)}</dd></div></dl>
          <div className="mt-8 flex gap-3">
            <a href={p.github} target="_blank" rel="noreferrer" className="btn btn-p"><Github size={16} />GitHub</a>
            {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="btn btn-s"><ExternalLink size={16} />Demo</a>}</div>
        </motion.div></motion.div>)}</AnimatePresence>)
}

export const ResearchCard = ({ title, area, status, description }: { title: string; area: string; status: string; description: string }) => (
  <Reveal><article className="h-full rounded-lg border border-line bg-card p-6 transition hover:border-white/20">
    <BookOpen size={18} className="text-accent" /><h3 className="mt-4 font-medium leading-snug text-zinc-50">{title}</h3>
    <p className="mt-2 text-xs text-accent">{area}</p><p className="mt-3 text-sm text-zinc-400">{description}</p><p className="mt-5 border-t border-line pt-4 text-xs text-zinc-500">{status}</p></article></Reveal>)

export const ExperienceCard = ({ period, role, company, description }: { period: string; role: string; company: string; description: string }) => (
  <li className="relative pb-10 pl-8 last:pb-0"><span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border border-accent bg-bg" />
    <Reveal><p className="font-mono text-xs text-zinc-500">{period}</p><h3 className="mt-1 font-medium text-zinc-50">{role}</h3>
      <p className="text-sm text-accent">{company}</p><p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-400">{description}</p></Reveal></li>)
