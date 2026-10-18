import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
export default function Cursor() {
  const x = useMotionValue(-100), y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 500, damping: 40 }), sy = useSpring(y, { stiffness: 500, damping: 40 })
  const [mode, setMode] = useState<'idle' | 'link' | 'project'>('idle')
  const fine = typeof matchMedia !== 'undefined' && matchMedia('(hover: hover) and (pointer: fine)').matches
  useEffect(() => {
    if (!fine) return
    const mv = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY) }
    const ov = (e: MouseEvent) => { const t = e.target as HTMLElement
      setMode(t.closest('[data-cursor="project"]') ? 'project' : t.closest('a,button,input,textarea') ? 'link' : 'idle') }
    addEventListener('mousemove', mv); addEventListener('mouseover', ov)
    return () => { removeEventListener('mousemove', mv); removeEventListener('mouseover', ov) }
  }, [fine, x, y])
  if (!fine) return null
  const size = mode === 'project' ? 64 : mode === 'link' ? 40 : 10
  return (<motion.div aria-hidden style={{ x: sx, y: sy }} className="pointer-events-none fixed left-0 top-0 z-[100]">
    <motion.div animate={{ width: size, height: size }} transition={{ duration: .2 }}
      className="flex items-center justify-center rounded-full bg-white mix-blend-difference" style={{ translate: '-50% -50%' }}>
      {mode === 'project' && <span className="text-[11px] font-medium text-black">View</span>}</motion.div></motion.div>)
}
