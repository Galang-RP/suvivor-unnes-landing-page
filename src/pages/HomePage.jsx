import PageShell from '../components/PageShell.jsx'
import { assets } from '../assets'

export default function HomePage() {
  return (
    <main>
    <section id="hero" tabIndex={-1} aria-label="Home">
    <PageShell>
      <img className="brand-logo" {...assets['suvifor-logo']} decoding="async" />
      <p className="eyebrow">UAV RESEARCH TEAM</p>
      <h1>SUVIFOR <span>UNNES</span></h1>
      <p>Website sedang dalam pengembangan.</p>
    </PageShell>
    </section>
    {['about', 'programs', 'recruitment', 'contact'].map(id => (
      <section key={id} id={id} tabIndex={-1} className="section-placeholder" aria-labelledby={`${id}-title`}>
        <h2 id={`${id}-title`}>{id.toUpperCase()}</h2>
        <p>Bagian ini akan dikembangkan pada tahap berikutnya.</p>
      </section>
    ))}
    </main>
  )
}
