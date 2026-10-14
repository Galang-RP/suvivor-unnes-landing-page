import "./Agenda.css";

const timelineItems = [
  {
    date: "OKTOBER 2026",
    phase: "TAHAP 01",
    title: "OPEN RECRUITMENT",
    description:
      "Regenerasi anggota baru mahasiswa UNNES semester 2 dan 4 untuk divisi mekanik, elektrik, dan software.",
  },
  {
    date: "NOVEMBER 2026",
    phase: "TAHAP 02",
    title: "ROBOTIC SCHOOL & PENDAS",
    description:
      "Pelatihan intensif aerodinamika, perancangan, avionika, dan uji terbang prototipe secara langsung di lapangan.",
  },
  {
    date: "DESEMBER 2026",
    phase: "TAHAP 03",
    title: "SELEKSI & PERSIAPAN KRTI / TEKNOFEST",
    description:
      "Pembentukan kontingen resmi divisi Racing Plane, Fixed Wing, dan VTOL untuk persiapan kontes kedirgantaraan nasional dan internasional.",
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
                href="https://wa.me/6281244091033?text=Halo%20SUVIFOR%20UNNES,%20saya%20tertarik%20untuk%20bergabung"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>DAFTAR VIA WHATSAPP</span>
                <span aria-hidden="true">→</span>
              </a>
              <a
                className="agenda-button agenda-button-secondary"
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>FORMULIR ONLINE</span>
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
