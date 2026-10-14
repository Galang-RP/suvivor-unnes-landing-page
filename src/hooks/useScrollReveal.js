import { useEffect } from 'react'
import './useScrollReveal.css'

const targets = '.hero-badge, .hero-copy h1 span, .hero-description, .hero-actions, .hero-visual, .about-label, .about-intro, .about-description, .about-photo, .about-focus article, .work-programs-label, .work-programs-header, .work-program-card, .agenda-left, .agenda-timeline-item, .contact-container > *'

export default function useScrollReveal(rootRef) {
  useEffect(() => {
    const root = rootRef.current
    if (!root || !('IntersectionObserver' in window)) return
    const elements = [...root.querySelectorAll(targets)]
    const motion = matchMedia('(prefers-reduced-motion: reduce)')
    let observer
    const clear = () => {
      observer?.disconnect()
      elements.forEach(element => element.classList.remove('scroll-reveal', 'is-visible'))
    }
    const setup = () => {
      clear()
      if (motion.matches) return
      observer = new IntersectionObserver(entries => {
        entries.forEach(({ target, isIntersecting }) => {
          target.classList.toggle('is-visible', isIntersecting || target.contains(document.activeElement))
        })
      }, { rootMargin: '-24px 0px -24px 0px', threshold: 0 })
      elements.forEach(element => {
        element.classList.add('scroll-reveal')
        observer.observe(element)
      })
    }
    const revealFocus = event => event.target.closest('.scroll-reveal')?.classList.add('is-visible')
    setup()
    motion.addEventListener('change', setup)
    root.addEventListener('focusin', revealFocus)
    return () => {
      clear()
      motion.removeEventListener('change', setup)
      root.removeEventListener('focusin', revealFocus)
    }
  }, [rootRef])
}


