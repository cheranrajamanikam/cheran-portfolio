import { useRef, type ReactNode } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
export default function Magnetic({ children }: { children: ReactNode }) {
  const r = useRef<HTMLDivElement>(null); const x = useMotionValue(0), y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 18 }), sy = useSpring(y, { stiffness: 220, damping: 18 })
  return <motion.div ref={r} style={{ x: sx, y: sy, display: 'inline-block' }}
    onMouseMove={e => { const b = r.current!.getBoundingClientRect(); x.set((e.clientX - b.left - b.width / 2) * .25); y.set((e.clientY - b.top - b.height / 2) * .25) }}
    onMouseLeave={() => { x.set(0); y.set(0) }}>{children}</motion.div>
}
