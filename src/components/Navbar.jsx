import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { assets } from '../assets'
import './Navbar.css'

const rows = [
  [['hero', 'HOME'], ['about', 'ABOUT']],
  [['programs', 'PROGRAMS']],
  [['recruitment', 'RECRUITMENT'], ['contact', 'CONTACT']],
]

export default function Navbar() {
  const dialog = useRef(null)
  const trigger = useRef(null)
  const location = useLocation()

  function closeMenu() {
    dialog.current.close()
  }

  useEffect(() => {
    const element = dialog.current
    let previousOverflow = ''
    const unlock = () => {
      document.body.style.overflow = previousOverflow
      trigger.current?.setAttribute('aria-expanded', 'false')
    }
    const lock = () => {
      previousOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      trigger.current?.setAttribute('aria-expanded', 'true')
    }
    const button = trigger.current
    const open = () => { lock(); element.showModal() }
    button.addEventListener('click', open)
    element.addEventListener('close', unlock)
    return () => {
      button.removeEventListener('click', open)
      element.removeEventListener('close', unlock)
      if (element.open) { element.close(); unlock() }
    }
  }, [])

  function sectionLink(id, label, className) {
    return <Link className={className} to={`/#${id}`} onClick={() => {
      if (dialog.current.open) closeMenu()
      // A repeated click on the current hash must also return to that section.
      if (location.pathname === '/' && location.hash === `#${id}`) {
        const target = document.getElementById(id)
        target?.focus({ preventScroll: true })
        target?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
      }
    }}>{label}</Link>
  }

  const brand = () => sectionLink('hero', <>
    <img src={assets['suvifor-logo'].src} width="40" height="40" alt="" />
    <span className="nav-brand-copy"><strong>SUVIFOR <span>UNNES</span></strong><small>UAV RESEARCH TEAM</small></span>
  </>, 'nav-brand')

  return <>
    <header className="site-navbar">
      <div className="navbar-bar">
        {brand()}
        <button ref={trigger} type="button" className="menu-toggle" aria-label="Buka menu navigasi" aria-haspopup="dialog" aria-expanded="false" aria-controls="navigation-menu">MENU <span className="menu-bars" aria-hidden="true"><i /><i /></span></button>
        {sectionLink('recruitment', <>LET’S FLY <span aria-hidden="true">↗</span></>, 'nav-cta')}
      </div>
    </header>
    <dialog ref={dialog} id="navigation-menu" className="navigation-menu" aria-label="Menu navigasi utama">
      <div className="overlay-header"><div className="navbar-bar">
        {brand()}
        <button type="button" className="menu-toggle close-toggle" onClick={closeMenu} autoFocus aria-label="Tutup menu navigasi"><span aria-hidden="true">✕</span> CLOSE</button>
        {sectionLink('recruitment', <>LET’S FLY <span aria-hidden="true">↗</span></>, 'nav-cta')}
      </div></div>
      <div className="menu-content">
        <nav aria-label="Section halaman" className="menu-links">
          {rows.map((row, index) => <div className="menu-row" key={index} style={{ '--delay': `${0.18 + index * 0.08}s` }}>
            {row.map(([id, label]) => <span key={id} className={(location.hash || '#hero') === `#${id}` && location.pathname === '/' ? 'is-active' : ''}>{sectionLink(id, label)}</span>)}
          </div>)}
        </nav>
        <div className="menu-metadata"><span>TEAM: SUVIFOR UNNES</span><span>LOCATION: GEDUNG PKMU LT. 2 UNNES, SEMARANG</span><span>EMAIL: CYCYLIA_24@STUDENTS.UNNES.AC.ID</span></div>
      </div>
      <footer className="menu-footer">
        <div><a href="mailto:cycylia_24@students.unnes.ac.id">cycylia_24@students.unnes.ac.id</a><a href="https://wa.me/628882400429">+62 888 2400 429</a><small>(PIC Cycylia Kusumawardani)</small></div>
        <div><a href="https://instagram.com/suvifor" target="_blank" rel="noreferrer">Instagram (@suvifor)</a><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a></div>
        <div><span>Gedung PKMU Lt. 2 (Lab Robotika)</span><small>Kampus Sekaran, Gunungpati, Semarang</small></div>
      </footer>
    </dialog>
  </>
}
