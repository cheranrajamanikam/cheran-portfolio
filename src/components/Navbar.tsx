import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, FileText } from 'lucide-react'
import { nav, personal } from '../data/portfolio'
const ext = { target: '_blank', rel: 'noreferrer' }
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false); const [open, setOpen] = useState(false)
  useEffect(() => { const f = () => setScrolled(scrollY > 12); f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f) }, [])
  const link = (n: string) => `#${n.toLowerCase()}`
  return (
    <motion.header initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .4 }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${scrolled || open ? 'border-line bg-bg/75 backdrop-blur-xl' : 'border-transparent'}`}>
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="font-semibold text-zinc-50">CHERAN.</a>
        <ul className="hidden items-center gap-6 text-sm text-zinc-400 lg:flex">
          {nav.map(n => <li key={n}><a href={link(n)} className="transition-colors hover:text-zinc-50">{n}</a></li>)}</ul>
        <div className="hidden items-center gap-1 lg:flex">
          <a aria-label="GitHub" href={personal.github} {...ext} className="rounded-md p-2 text-zinc-400 hover:text-zinc-50"><Github size={18} /></a>
          <a aria-label="LinkedIn" href={personal.linkedin} {...ext} className="rounded-md p-2 text-zinc-400 hover:text-zinc-50"><Linkedin size={18} /></a>
          <a href={personal.resume} {...ext} className="btn btn-s ml-2 !py-1.5">Resume ↗</a></div>
        <button aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)} className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden">
          <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }} className="h-[2px] w-5 bg-zinc-100" />
          <motion.span animate={{ opacity: open ? 0 : 1 }} className="h-[2px] w-5 bg-zinc-100" />
          <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }} className="h-[2px] w-5 bg-zinc-100" /></button>
      </nav>
      <AnimatePresence>{open && (
        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden lg:hidden">
          <ul className="flex flex-col gap-1 px-5 pb-5">
            {nav.map(n => <li key={n}><a href={link(n)} onClick={() => setOpen(false)} className="block rounded-md px-3 py-2.5 text-zinc-300 hover:bg-white/5">{n}</a></li>)}
            <li className="mt-2 flex flex-wrap gap-2"><a href={personal.github} {...ext} className="btn btn-s">GitHub</a><a href={personal.linkedin} {...ext} className="btn btn-s">LinkedIn</a><a href={personal.resume} {...ext} className="btn btn-p">Resume</a></li>
          </ul></motion.div>)}</AnimatePresence>
    </motion.header>)
}
