import { useState, type FormEvent } from 'react'
import { Github, Linkedin, Mail, Phone, FileText, Download, Award } from 'lucide-react'
import { Section, SectionHeading, SkillBadge, Reveal, Timeline } from '../components/ui'
import Magnetic from '../components/Magnetic'
import { ProjectCard, ProjectModal, ResearchCard, ExperienceCard } from '../components/Cards'
import { personal, projects, research, experience, skills, learning, certifications, education, earlier, type Project } from '../data/portfolio'
const ext = { target: '_blank', rel: 'noreferrer' }

export const About = () => (<Section id="about"><div className="grid gap-10 md:grid-cols-5">
  <Reveal className="md:col-span-3"><h2 className="text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-5xl">{personal.statement}</h2></Reveal>
  <Reveal delay={.08} className="md:col-span-2"><p className="text-zinc-400">{personal.about[0]}</p>
    <h3 className="mt-8 text-sm font-medium text-zinc-100">Interests</h3><ul className="mt-3 flex flex-wrap gap-2">{personal.focus.map(f => <li key={f}><SkillBadge>{f}</SkillBadge></li>)}</ul></Reveal></div></Section>)

export function Projects() {
  const [open, setOpen] = useState<Project | null>(null)
  return (<Section id="projects"><SectionHeading title="Selected work" sub="Systems, experiments and research prototypes." />
    <div className="grid gap-4 md:grid-cols-2">{projects.map((p, i) => <ProjectCard key={p.name} p={p} i={i} onOpen={setOpen} />)}</div>
    <ProjectModal p={open} onClose={() => setOpen(null)} /></Section>)
}

export const Research = () => (<Section id="research"><div className="mb-12 flex flex-wrap items-end justify-between gap-6"><SectionHeading title="Research & publications" sub="Quantum machine learning, medical AI and biosensing." />
  <Reveal><p className="flex items-baseline gap-3"><span className="text-6xl font-semibold tracking-tighter text-zinc-50">3</span><span className="text-zinc-400">Publications</span></p></Reveal></div>
  <div className="grid gap-4 md:grid-cols-3">{research.map(r => <ResearchCard key={r.title} {...r} />)}</div></Section>)

export const Experience = () => (<Section id="experience"><SectionHeading title="Experience" />
  <Timeline>{experience.map(e => <ExperienceCard key={e.company} {...e} />)}</Timeline></Section>)

export function Skills() {
  const keys = Object.keys(skills); const [k, setK] = useState(keys[0])
  return (<Section id="skills"><SectionHeading title="Skills" sub="Tools and technologies I work with." />
    <div className="grid gap-8 md:grid-cols-4"><div role="tablist" aria-label="Skill categories" className="flex gap-2 overflow-x-auto md:flex-col md:overflow-visible">
      {keys.map(c => <button key={c} role="tab" aria-selected={c === k} onClick={() => setK(c)} onMouseEnter={() => setK(c)}
        className={`shrink-0 rounded-md border px-3 py-2 text-left text-sm transition ${c === k ? 'border-accent/50 bg-accent/10 text-zinc-50' : 'border-line text-zinc-400 hover:text-zinc-100'}`}>{c}</button>)}</div>
      <ul role="tabpanel" className="flex flex-wrap content-start gap-2 md:col-span-3">{skills[k].map(s => <li key={s} className="rounded-md border border-line bg-card px-3 py-2 text-sm text-zinc-200 transition hover:-translate-y-0.5 hover:border-accent/40">{s}</li>)}</ul></div></Section>)
}

export const Now = () => (<Section id="now"><Reveal><div className="rounded-lg border border-line bg-card p-6 sm:p-8"><h2 className="text-xl font-semibold text-zinc-50">Currently building</h2>
  <p className="mt-4 text-lg font-medium text-zinc-100">ResearchMind</p><p className="text-zinc-400">Local-first AI research workspace.</p>
  <p className="mt-3 flex items-center gap-2 text-xs text-zinc-300"><span className="h-2 w-2 rounded-full bg-emerald-400" />Active development</p>
  <h3 className="mt-6 text-sm font-medium text-zinc-100">Currently exploring</h3><ul className="mt-2 flex flex-wrap gap-1.5">{learning.map(l => <li key={l}><SkillBadge>{l}</SkillBadge></li>)}</ul></div></Reveal></Section>)

export const Education = () => (<Section id="education"><SectionHeading title="Education" />
  <Reveal><div className="rounded-lg border border-accent/25 bg-card p-6 sm:p-8"><p className="text-sm text-zinc-500">{education.years}</p>
    <h3 className="mt-1 text-xl font-semibold text-zinc-50">{education.degree}</h3>
    <p className="mt-3 text-zinc-200">{education.school}</p><p className="ml-3 border-l border-accent/50 pl-3 text-sm text-zinc-400">under {education.university}</p>
    <div className="mt-5 flex flex-wrap gap-6 text-sm text-zinc-400"><p>CGPA <span className="ml-1 text-2xl font-semibold text-zinc-50">{education.cgpa}</span></p><p className="self-end">{education.distinction}</p></div></div></Reveal>
  <div className="mt-4 grid gap-4 md:grid-cols-2">{earlier.map(e => <Reveal key={e.school}><div className="h-full rounded-lg border border-line bg-card p-6">
    <p className="text-xs text-zinc-500">{e.years} · {e.grade}</p><h3 className="mt-1 font-medium text-zinc-50">{e.school}</h3><p className="mt-1 text-sm text-zinc-400">{e.program}</p>
    <ul className="mt-4 flex flex-wrap gap-1.5">{e.activities.map(a => <li key={a}><SkillBadge>{a}</SkillBadge></li>)}</ul></div></Reveal>)}</div>
  <h3 className="mb-4 mt-16 text-xl font-semibold text-zinc-50">Certifications</h3>
  <div className="grid gap-4 md:grid-cols-3">{certifications.map(c => <Reveal key={c.title}><div className="h-full rounded-lg border border-line bg-card p-5"><Award size={16} className="text-accent" />
    <p className="mt-3 text-sm font-medium text-zinc-100">{c.title}</p><p className="mt-1 text-xs text-zinc-500">{c.issuer} · {c.date}</p></div></Reveal>)}</div></Section>)

export function Contact() {
  const send = (e: FormEvent<HTMLFormElement>) => { e.preventDefault(); const f = new FormData(e.currentTarget)
    location.href = `mailto:${personal.email}?subject=${encodeURIComponent('Portfolio message from ' + f.get('name'))}&body=${encodeURIComponent(`${f.get('message')}\n\nFrom: ${f.get('name')} (${f.get('email')})`)}` }
  const field = 'w-full rounded-md border border-line bg-white/[.03] px-3 py-2.5 text-sm text-zinc-100 focus:border-accent/60 focus:outline-none'
  return (<Section id="contact"><div className="grid gap-12 md:grid-cols-2"><Reveal>
    <h2 className="text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">Let's build something intelligent.</h2>
    <p className="mt-4 max-w-md text-zinc-400">Have an internship opportunity, research idea, project or collaboration in mind? Let's talk.</p>
    <ul className="mt-6 space-y-2 text-sm"><li><a className="flex items-center gap-2 text-zinc-200 hover:text-accent" href={`mailto:${personal.email}`}><Mail size={16} />{personal.email}</a></li>
      <li><a className="flex items-center gap-2 text-zinc-200 hover:text-accent" href={`tel:${personal.phone.replace(/\s/g, '')}`}><Phone size={16} />{personal.phone}</a></li></ul>
    <div className="mt-8 flex flex-wrap gap-3"><Magnetic><a href={`mailto:${personal.email}`} className="btn btn-p"><Mail size={16} />Email Me</a></Magnetic>
      <a href={personal.github} {...ext} className="btn btn-s"><Github size={16} />GitHub</a><a href={personal.linkedin} {...ext} className="btn btn-s"><Linkedin size={16} />LinkedIn</a>
      <a href={personal.resume} {...ext} className="btn btn-s"><FileText size={16} />View Resume</a><a href={personal.resume} download className="btn btn-s"><Download size={16} />Download Resume</a></div></Reveal>
    <Reveal delay={.08}><form onSubmit={send} className="space-y-3 rounded-lg border border-line bg-card p-6">
      <label className="block text-sm text-zinc-400">Name<input required name="name" className={field + ' mt-1'} autoComplete="name" /></label>
      <label className="block text-sm text-zinc-400">Email<input required type="email" name="email" className={field + ' mt-1'} autoComplete="email" /></label>
      <label className="block text-sm text-zinc-400">Message<textarea required name="message" rows={4} className={field + ' mt-1 resize-none'} /></label>
      <button className="btn btn-p w-full justify-center">Send message</button><p className="text-xs text-zinc-600">Opens your email client.</p></form></Reveal></div></Section>)
}

export const Footer = () => (<footer className="border-t border-line"><div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 text-sm text-zinc-500 sm:flex-row sm:justify-between sm:px-8">
  <div><p className="font-semibold text-zinc-200">CHERAN.</p><p>{personal.roles}</p><p>{personal.location}</p></div>
  <div className="flex flex-col gap-2 sm:items-end"><div className="flex flex-wrap gap-4"><a className="hover:text-zinc-200" href={`mailto:${personal.email}`}>Email</a><a className="hover:text-zinc-200" href={personal.github}>GitHub</a><a className="hover:text-zinc-200" href={personal.linkedin}>LinkedIn</a><a className="hover:text-zinc-200" href={personal.resume}>Resume</a></div>
    <p>Copyright © 2026 Cheran Rajamanikam</p></div></div></footer>)
