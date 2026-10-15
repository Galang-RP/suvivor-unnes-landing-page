import { assets } from "../assets";
import "./About.css";

const focusAreas = [
  [
    "01 RISET & PRODUKSI",
    "Menjadi pusat penelitian wahana terbang tanpa awak di UNNES serta melakukan proses rekayasa, perancangan, dan produksi sesuai standar industri.",
  ],
  [
    "02 EDUKASI & KREASI",
    "Menumbuhkan daya tarik mahasiswa terhadap teknologi aviasi melalui pelatihan teknis, simulasi penerbangan, dan pengujian prototipe.",
  ],
  [
    "03 KOMPETISI & PRESTASI",
    "Menjadi salah satu pemain utama dalam berbagai kegiatan dan kompetisi kedirgantaraan nasional (KRTI) maupun internasional (TEKNOFEST).",
  ],
];

export default function About() {
  return (
    <section
      id="about"
      className="about"
      tabIndex={-1}
      aria-labelledby="about-title"
    >
      <div className="about-container">
        <p className="about-label">VISION &amp; IDENTITY</p>
        <div className="about-intro">
          <h2 id="about-title">
            WADAH PENELITIAN, PENGEMBANGAN DAN PRODUKSI TEKNOLOGI WAHANA TERBANG
            TANPA AWAK.
          </h2>
        </div>
        <div className="about-details">
          <p className="about-description">
            Semarang State University Flying Object Research (SUVIFOR) merupakan
            tim riset UAV di bawah naungan UKM Rekayasa Ilmu Pengetahuan dan
            Teknologi (RIPTEK) Universitas Negeri Semarang. SUVIFOR menjadi
            wadah mahasiswa yang memiliki minat dan dedikasi dalam bidang UAV
            dan teknologi kedirgantaraan melalui kegiatan penelitian,
            pengembangan, edukasi, dan pelatihan. Fokus riset meliputi desain
            aerodinamika, sistem navigasi otomatis, serta penerapan kecerdasan
            buatan untuk menghasilkan UAV yang inovatif, efisien, dan aplikatif.
          </p>
          <figure className="about-photo">
            <img {...assets["about"]} loading="lazy" decoding="async" />
            <figcaption>TIM SUVIFOR UNNES / GRAND LAUNCHING</figcaption>
          </figure>
        </div>
        <div className="about-focus">
          {focusAreas.map(([title, description]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
