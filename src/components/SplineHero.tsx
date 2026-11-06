import { createElement, useEffect } from 'react'

const SPLINE_SCENE_URL =
  'https://prod.spline.design/jrSFLoNrlfJIVNdx/scene.splinecode'
const VIEWER_SCRIPT_ID = 'spline-viewer-module'
const VIEWER_SCRIPT_URL =
  'https://unpkg.com/@splinetool/viewer@2.0.75/build/spline-viewer.js'

/**
 * Loads the Spline web component once and mounts the exported scene.
 * The native viewer keeps Spline's scene animation/HTML runtime intact and
 * avoids adding a second WebGL/Three.js dependency to the existing app.
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

  return (
    <div className="spline-hero-scene" aria-label="Animated 3D intelligence core with blue and violet orbital rings">
      {createElement('spline-viewer', {
        url: SPLINE_SCENE_URL,
        loading: 'lazy',
        'events-target': 'global',
        style: { display: 'block', width: '100%', height: '100%' },
      } as any)}
      <noscript>Enable JavaScript to view the interactive 3D scene.</noscript>
    </div>
  )
}
