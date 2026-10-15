import { Link } from "react-router-dom";
import { useState } from "react";
import { assets } from "../assets";
import "./Hero.css";

export default function Hero() {
  const [tickerPaused, setTickerPaused] = useState(false);
  return (
    <>
      <section
        id="hero"
        className="hero"
        tabIndex={-1}
        aria-labelledby="hero-title"
      >
        <div className="hero-atmosphere" aria-hidden="true">
          <div className="hero-radar">
            <i />
            <i />
            <i />
            <span />
          </div>
          <div className="hero-scan" />
          <div className="hero-signal hero-signal-one" />
          <div className="hero-signal hero-signal-two" />
          <div className="hero-flight-path" />
        </div>
        <div className="hero-container">
          <div className="hero-copy">
            <p className="hero-badge">
              <span aria-hidden="true" />
              SPIRIT IN INNOVATION
            </p>
            <h1 id="hero-title">
              <span>ADVANCING UAV ROBOTICS &amp;</span>
              <span>AERIAL INTELLIGENCE.</span>
            </h1>
            <p className="hero-description">
              Semarang State University Flying Object Research (SUVIFOR)
              merupakan tim riset UAV di bawah naungan UKM RIPTEK Universitas
              Negeri Semarang (UNNES) yang berfokus pada riset, inovasi, dan
              pengembangan teknologi kedirgantaraan serta wahana tanpa awak.
            </p>
            <div className="hero-actions">
              <Link
                className="hero-button hero-button-primary"
                to="/#recruitment"
              >
                [ JOIN RECRUITMENT ↗ ]
              </Link>
              <Link
                className="hero-button hero-button-secondary"
                to="/#programs"
              >
                [ EXPLORE PROGRAMS ↓ ]
              </Link>
            </div>
          </div>
          <figure className="hero-visual">
            <div className="hero-photo-frame">
              <div className="hero-photo-label" aria-hidden="true">
                <span /> FIELD LOG / 01
              </div>
              <img {...assets["hero"]} fetchPriority="high" decoding="async" />
              <div className="hero-photo-sweep" aria-hidden="true" />
              <span className="hero-photo-crosshair" aria-hidden="true">
                +
              </span>
            </div>
            <figcaption>
              <span>FIELD OPERATIONS / SUVIFOR UNNES</span>
              <span>PENDIDIKAN DASAR — UAV DEVELOPMENT</span>
            </figcaption>
          </figure>
        </div>
      </section>
      <aside
        className={`hero-ticker${tickerPaused ? " is-paused" : ""}`}
        aria-label="Fokus SUVIFOR"
      >
        <div className="hero-ticker-window">
          <div className="hero-ticker-track">
            {[0, 1].map((copy) => (
              <div
                className="hero-ticker-group"
                key={copy}
                aria-hidden={copy === 1 ? true : undefined}
              >
                <span>SUVIFOR UNNES — SPIRIT IN INNOVATION</span>
                <span aria-hidden="true">✱</span>
                <span>RESEARCH, INNOVATION &amp; UAV DEVELOPMENT</span>
                <span aria-hidden="true">✱</span>
                <span>KRTI &amp; TEKNOFEST SQUAD</span>
                <span aria-hidden="true">✱</span>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
