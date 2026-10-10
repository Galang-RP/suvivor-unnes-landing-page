import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell.jsx'

export default function NotFoundPage() {
  return (
    <PageShell>
      <p className="eyebrow">404</p>
      <h1>Halaman tidak ditemukan</h1>
      <Link to="/">Kembali ke beranda</Link>
    </PageShell>
  )
}
