import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      {['programs', 'recruitment', 'contact'].map(id => (
        <section key={id} id={id} tabIndex={-1} className="section-placeholder" aria-labelledby={`${id}-title`}>
          <h2 id={`${id}-title`}>{id.toUpperCase()}</h2>
          <p>Bagian ini akan dikembangkan pada tahap berikutnya.</p>
        </section>
      ))}
    </main>
  )
}
