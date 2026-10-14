import "./Footer.css";

function scrollToTop(event) {
  event.preventDefault();
  const target = document.getElementById("hero");
  if (target) {
    target.scrollIntoView({
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
    target.focus({ preventScroll: true });
  }
}

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-brand">
          <span className="footer-dot" aria-hidden="true" />
          <span className="footer-title">SUVIFOR UNNES</span>
          <small>
            © 2026 SUVIFOR UNNES • UKM RIPTEK UNIVERSITAS NEGERI SEMARANG. ALL
            RIGHTS RESERVED.
          </small>
        </div>
        <div className="footer-links">
          <a
            href="https://instagram.com/suvifor"
            target="_blank"
            rel="noopener noreferrer"
          >
            INSTAGRAM
          </a>
          <span className="footer-separator" aria-hidden="true">
            •
          </span>
          <a
            href="https://unnes.ac.id/tim-robotik-unnes-kembangkan-3-model-drone-militer/ukm-riptek/"
            target="_blank"
            rel="noopener noreferrer"
          >
            UKM RIPTEK UNNES
          </a>
          <span className="footer-separator" aria-hidden="true">
            •
          </span>
          <a href="#hero" className="footer-top" onClick={scrollToTop}>
            [ TOP ↑ ]
          </a>
        </div>
      </div>
    </footer>
  );
}
