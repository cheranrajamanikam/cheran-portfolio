import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
function Net({ n, still }: { n: number; still: boolean }) {
  const g = useRef<THREE.Group>(null); const m = useRef({ x: 0, y: 0 })
  useEffect(() => { const f = (e: PointerEvent) => { m.current = { x: e.clientX / innerWidth * 2 - 1, y: -(e.clientY / innerHeight * 2 - 1) } }
    addEventListener('pointermove', f); return () => removeEventListener('pointermove', f) }, [])
  const { pos, lines } = useMemo(() => {
    const pts = Array.from({ length: n }, () => new THREE.Vector3().randomDirection().multiplyScalar(1.1 + Math.random() * .9))
    const l: number[] = []
    pts.forEach((a, i) => pts.slice(i + 1).forEach(b => { if (a.distanceTo(b) < .8) l.push(a.x, a.y, a.z, b.x, b.y, b.z) }))
    return { pos: new Float32Array(pts.flatMap(v => [v.x, v.y, v.z])), lines: new Float32Array(l) }
  }, [n])
  useFrame((_, dt) => {
    const o = g.current; if (!o || still) return
    o.rotation.y += dt * .07
    o.rotation.x = THREE.MathUtils.lerp(o.rotation.x, m.current.y * .3 + scrollY * .0006, .05)
    o.position.x = THREE.MathUtils.lerp(o.position.x, m.current.x * .25, .05)
  })
  return (<group ref={g}>
    <points><bufferGeometry><bufferAttribute attach="attributes-position" args={[pos, 3]} /></bufferGeometry><pointsMaterial size={.04} color="#a9bcff" transparent opacity={.9} sizeAttenuation /></points>
    <lineSegments><bufferGeometry><bufferAttribute attach="attributes-position" args={[lines, 3]} /></bufferGeometry><lineBasicMaterial color="#7c9cff" transparent opacity={.2} /></lineSegments>
    <mesh><icosahedronGeometry args={[.85, 1]} /><meshBasicMaterial color="#7c9cff" wireframe transparent opacity={.1} /></mesh></group>)
}
export default function NeuralScene() {
  const small = innerWidth < 768, still = matchMedia('(prefers-reduced-motion: reduce)').matches
  return <Canvas dpr={[1, small ? 1 : 1.5]} camera={{ position: [0, 0, 4.2], fov: 50 }} gl={{ antialias: !small, alpha: true }} style={{ pointerEvents: 'none' }}><Net n={small ? 45 : 110} still={still} /></Canvas>
}
