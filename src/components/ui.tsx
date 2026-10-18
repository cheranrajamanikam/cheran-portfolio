import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
export const Reveal = ({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay, ease: 'easeOut' }}>{children}</motion.div>)
export const SectionHeading = ({ title, sub }: { title: string; sub?: string }) => (
  <Reveal className="mb-12 max-w-2xl"><h2 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">{title}</h2>
    {sub && <p className="mt-3 text-zinc-400">{sub}</p>}</Reveal>)
export const SkillBadge = ({ children }: { children: ReactNode }) => (
  <span className="rounded-md border border-line bg-white/[.03] px-2.5 py-1 text-xs text-zinc-300">{children}</span>)
export const Section = ({ id, children }: { id: string; children: ReactNode }) => (
  <section id={id} className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">{children}</section>)
export const Timeline = ({ children }: { children: ReactNode }) => <ol className="relative ml-2 border-l border-line">{children}</ol>
