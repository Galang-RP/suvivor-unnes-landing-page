import PageShell from '../components/PageShell.jsx'
import { assets } from '../assets'

export default function HomePage() {
  return (
    <PageShell>
      <img className="brand-logo" {...assets['suvifor-logo']} decoding="async" />
      <p className="eyebrow">UAV RESEARCH TEAM</p>
      <h1>SUVIFOR <span>UNNES</span></h1>
      <p>Website sedang dalam pengembangan.</p>
    </PageShell>
  )
}
