import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function SectionNavigation() {
  const { pathname, hash, key } = useLocation()
  useEffect(() => {
    if (pathname !== '/') return
    const target = document.getElementById(hash.slice(1) || 'hero')
    if (!target) return
    const frame = requestAnimationFrame(() => {
      target.focus({ preventScroll: true })
      target.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
    })
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash, key])
  return null
}
