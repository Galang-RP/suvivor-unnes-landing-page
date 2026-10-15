import { assets } from "../assets";
import "./WorkPrograms.css";

const programs = [
  {
    number: "01",
    category: "EDUKASI & WORKSHOP",
    title: "ROBOTIC SCHOOL",
    description:
      "Pengenalan dunia robotika penerbangan dan wahana terbang tanpa awak (UAV) serta wadah pengembangan skill teknikal bagi mahasiswa.",
    image: assets["robotic-school-1"],
    imageAlt: "Robotic School SUVIFOR UNNES",
  },
  {
    number: "02",
    category: "REGENERASI ANGGOTA",
    title: "OPEN RECRUITMENT",
    description:
      "Regenerasi anggota baru SUVIFOR yang diperuntukkan bagi mahasiswa UNNES semester 2 dan 4 dalam divisi mekanik, elektrik, serta software.",
    image: assets["oprec2"],
    imageAlt: "Open Recruitment SUVIFOR UNNES",
  },
  {
    number: "03",
    category: "PELATIHAN TEKNIKAL",
    title: "PENDIDIKAN DASAR (PENDAS)",
    description:
      "Pelatihan awal komprehensif dan praktik langsung dalam merancang aerodinamika, perakitan avionik, serta uji terbang prototipe di lapangan.",
    image: assets["pendas-1"],
    imageAlt: "Pendidikan Dasar SUVIFOR",
  },
  {
    number: "04",
    category: "PELEPASAN TIM & PROTOKOL",
    title: "GRAND LAUNCHING & DOA BERSAMA",
    description:
      "Pelepasan resmi kontingen riset, peluncuran wahana UAV prototipe terbaru, serta doa bersama sivitas akademika menjelang kompetisi.",
    image: assets["grand-launching-2"],
    imageAlt: "Grand Launching & Doa Bersama SUVIFOR UNNES",
  },
  {
    number: "05",
    category: "KOMPETISI NASIONAL",
    title: "KRTI (KONTES ROBOT TERBANG INDONESIA)",
    description:
      "Kompetisi UAV bergengsi tingkat nasional oleh Belmawa Kemendiktisaintek mencakup divisi Racing Plane, Fixed Wing, dan Vertical Take-Off Landing (VTOL).",
    image: assets["krti"],
    imageAlt: "Kontes Robot Terbang Indonesia KRTI",
  },
  {
    number: "06",
    category: "AJANG INTERNASIONAL",
    title: "TEKNOFEST INTERNATIONAL",
    description:
      "Festival kedirgantaraan dan teknologi internasional di Turki, wadah unjuk kebolehan inovasi wahana nirawak serta riset tingkat global.",
    image: assets["teknofest"],
    imageAlt: "TEKNOFEST International Competition SUVIFOR",
  },
];

export default function WorkPrograms() {
  return (
    <section
      id="programs"
      className="work-programs"
      tabIndex={-1}
      aria-labelledby="programs-title"
    >
      <div className="work-programs-container">
        <p className="work-programs-label">OPERATIONAL DIVISIONS & PROKER</p>
        <div className="work-programs-header">
          <h2 id="programs-title">
            WORK <span>PROGRAMS</span>
          </h2>
          <p className="work-programs-description">
            AGENDA RISET, PENDIDIKAN TEKNIKAL, SERTA KOMPETISI NASIONAL &
            INTERNASIONAL SUVIFOR UNNES
          </p>
        </div>
        <div className="work-programs-grid">
          {programs.map((p) => (
            <article key={p.number} className="work-program-card">
              <div className="work-program-card-header">
                <span className="work-program-number">{p.number}</span>
                <span className="work-program-category">{p.category}</span>
              </div>
              <figure className="work-program-image">
                {p.image?.src && (
                  <img
                    {...p.image}
                    alt={p.imageAlt}
                    loading="lazy"
                    decoding="async"
                  />
                )}
              </figure>
              <h3 className="work-program-title">{p.title}</h3>
              <p className="work-program-description">{p.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
