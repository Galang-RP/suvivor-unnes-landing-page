import "./Contact.css";

const contactInfo = [
  {
    label: "PERSON IN CHARGE",
    items: [
      {
        type: "phone",
        value: "Rifqi Mulia Pohan",
        href: "https://wa.me/62081244091033",
      },
      // {
      //   type: "phone",
      //   value: "0812 4409 1033",
      //   href: "https://wa.me/62081244091033",
      // },
    ],
  },
  {
    label: "OFFICIAL EMAIL",
    items: [
      {
        type: "email",
        value: "suvifor.unnes17@gmail.com",
        href: "mailto:suvifor.unnes17@gmail.com",
      },
      // { type: 'email', value: 'cycylia_24@students.unnes.ac.id' }
    ],
  },
  {
    label: "SOCIAL CHANNELS",
    items: [
      {
        type: "link",
        value: "Instagram: @suvifor",
        href: "https://instagram.com/suvifor",
      },
      {
        type: "link",
        value: "LinkedIn: @suvifor",
        href: "https://linkedin.com",
      },
      {
        type: "link",
        value: "TikTok: @suvifor",
        href: "https://tiktok.com/@suvifor",
      },
    ],
  },
  {
    label: "HEADQUARTERS",
    items: [
      { type: "text", value: "Gedung UKM Lt. 2 UNNES" },
      {
        type: "address",
        value:
          "Jl. Raya Banaran, Sekaran, Kec. Gn. Pati, Kota Semarang, Jawa Tengah 50229",
      },
    ],
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="contact"
      tabIndex={-1}
      aria-labelledby="contact-title"
    >
      <div className="contact-container">
        <div className="contact-header">
          <h2 id="contact-title">
            INTERESTED IN COLLABORATING OR JOINING? <span>LET'S FLY.</span>
          </h2>
          <p className="contact-description">
            Terbuka untuk kolaborasi riset antar-universitas, kemitraan industri
            kedirgantaraan, serta penerimaan mahasiswa baru yang bersemangat
            dalam dunia robotika terbang.
          </p>
        </div>
        <div className="contact-actions">
          <a
            className="contact-button contact-button-primary"
            href="https://wa.me/62081244091033?text=Halo%20SUVIFOR%20UNNES,%20saya%20tertarik%20untuk%20bergabung%20%2F%20berkolaborasi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>DAFTAR SEKARANG (WHATSAPP)</span>
            <span aria-hidden="true">→</span>
          </a>
          <a
            className="contact-button contact-button-secondary"
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>FORMULIR PENDAFTARAN ONLINE</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="contact-grid">
          {contactInfo.map((section) => (
            <div key={section.label} className="contact-section">
              <span className="contact-section-label">{section.label}</span>
              {section.items.map((item, idx) => (
                <ContactItem key={idx} item={item} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactItem({ item }) {
  const { type, value, href } = item;
  const content = href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {value}
    </a>
  ) : (
    value
  );

  switch (type) {
    case "name":
      return <p className="contact-name">{content}</p>;
    case "phone":
      return (
        <a className="contact-phone" href={href}>
          {content}
        </a>
      );
    case "email":
      return (
        <a className="contact-email" href={href}>
          {content}
        </a>
      );
    case "link":
      return (
        <a
          className="contact-link"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    case "text":
      return <p className="contact-text">{content}</p>;
    case "address":
      return <span className="contact-address">{content}</span>;
    default:
      return <span>{content}</span>;
  }
}
