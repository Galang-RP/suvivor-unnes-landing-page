import "./Agenda.css";

const timelineItems = [
  {
    date: "OKTOBER 2026",
    phase: "TAHAP 01",
    title: "ORIENTASI ROBOTIKA",
    description:
      "Kegiatan yang bertujuan untuk memperkenalkan suvifor (KRTI) dan reactor (KRI) dan juga demo wahana.",
  },
  {
    date: "NOVEMBER 2026",
    phase: "TAHAP 02",
    title: "ROBOTIC SCHOOL ",
    description:
      "Pengenalan dunia robotika penerbangan dan wahana terbang tanpa awak (UAV) serta wadah pengembangan skill teknikal bagi mahasiswa.",
  },
  {
    date: "DESEMBER 2026",
    phase: "TAHAP 03",
    title: "OPEN RECRUITMENT",
    description:
      "Regenerasi anggota baru mahasiswa UNNES semester 2 dan 4 untuk divisi mekanik, elektrik, dan software.",
  },
  {
    date: "JANUARI 2027",
    phase: "TAHAP 04",
    title: "PENDAS",
    description:
      "Pelatihan awal komprehensif dan praktik langsung dalam merancang aerodinamika, perakitan avionik, serta uji terbang prototipe di lapangan.",
  },
  {
    date: "FEBRUARI 2027",
    phase: "TAHAP 05",
    title: "PERSIAPAN TEKNOFEST",
    description:
      "Festival kedirgantaraan dan teknologi internasional di Turki, wadah unjuk kebolehan inovasi wahana nirawak serta riset tingkat global.",
  },
  {
    date: "MARET - SEPTEMBER 2027",
    phase: "TAHAP 06",
    title: "KRTI",
    description:
      "Kompetisi UAV bergengsi tingkat nasional oleh Belmawa Kemendiktisaintek mencakup divisi Racing Plane, Fixed Wing, dan Vertical Take-Off Landing (VTOL).",
  },
];

export default function Agenda() {
  return (
    <section
      id="recruitment"
      className="agenda"
      tabIndex={-1}
      aria-labelledby="agenda-title"
    >
      <div className="agenda-container">
        <div className="agenda-grid">
          <div className="agenda-left">
            <p className="agenda-label">UPCOMING AGENDA // EVENT 2026</p>
            <div className="agenda-intro">
              <h2 id="agenda-title">ROBOTIC SCHOOL & AGENDA 2026</h2>
              <p className="agenda-description">
                Robotic School bertujuan memperkenalkan mahasiswa dalam dunia
                robotika khususnya UAV, diselenggarakan pada bulan November
                2026.
              </p>
            </div>
            <div className="agenda-actions">
              <a
                className="agenda-button agenda-button-primary"
                // href="https://wa.me/6281244091033?text=Halo%20SUVIFOR%20UNNES,%20saya%20tertarik%20untuk%20bergabung"
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>LIHAT GUIDEBOOK</span>
                <span aria-hidden="true">→</span>
              </a>
              <a
                className="agenda-button agenda-button-secondary"
                href="https://forms.gle/4NQwZrU69ZXgg3To7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>DAFTAR ROBOSCHOOL</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="agenda-right">
            <div className="agenda-timeline">
              {timelineItems.map((item) => (
                <article key={item.date} className="agenda-timeline-item">
                  <div className="agenda-timeline-meta">
                    <span className="agenda-timeline-date">{item.date}</span>
                    <span className="agenda-timeline-phase">{item.phase}</span>
                  </div>
                  <div className="agenda-timeline-content">
                    <h3 className="agenda-timeline-title">{item.title}</h3>
                    <p className="agenda-timeline-description">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
