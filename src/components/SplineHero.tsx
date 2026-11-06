import { createElement, useEffect, type PointerEvent as ReactPointerEvent } from 'react'

const SPLINE_SCENE_URL =
  'https://prod.spline.design/jrSFLoNrlfJIVNdx/scene.splinecode'
const VIEWER_SCRIPT_ID = 'spline-viewer-module'
const VIEWER_SCRIPT_URL =
  'https://unpkg.com/@splinetool/viewer@2.0.75/build/spline-viewer.js'

/**
 * Full-bleed Spline hero. The scene contains its own continuous orbital
 * animation; pointer movement adds a restrained 3D parallax response.
 */
export default function SplineHero() {
  useEffect(() => {
    if (typeof customElements === 'undefined' || customElements.get('spline-viewer')) return
    if (document.getElementById(VIEWER_SCRIPT_ID)) return

    const script = document.createElement('script')
    script.id = VIEWER_SCRIPT_ID
    script.type = 'module'
    script.src = VIEWER_SCRIPT_URL
    script.async = true
    document.head.appendChild(script)
  }, [])

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    if (!rect.width || !rect.height) return
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2
    const intensity = event.pointerType === 'touch' ? 1.6 : 3.8
    event.currentTarget.style.setProperty('--spline-tilt-x', `${(-y * intensity).toFixed(2)}deg`)
    event.currentTarget.style.setProperty('--spline-tilt-y', `${(x * intensity).toFixed(2)}deg`)
  }

  const handlePointerLeave = (event: ReactPointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty('--spline-tilt-x', '0deg')
    event.currentTarget.style.setProperty('--spline-tilt-y', '0deg')
  }

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty('--spline-press-scale', '1.012')
  }

  const handlePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty('--spline-press-scale', '1')
  }

  return (
    <div
      className="spline-hero-scene"
      aria-label="Animated interactive 3D orbital intelligence sculpture"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      {createElement('spline-viewer', {
        url: SPLINE_SCENE_URL,
        loading: 'eager',
        'events-target': 'global',
        style: { display: 'block', width: '100%', height: '100%' },
      } as any)}
      <noscript>Enable JavaScript to view the interactive 3D scene.</noscript>
    </div>
  )
}
