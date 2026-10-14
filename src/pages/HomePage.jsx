import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import WorkPrograms from "../components/WorkPrograms.jsx";
import Agenda from "../components/Agenda.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import { useRef } from "react";
import useScrollReveal from "../hooks/useScrollReveal";

export default function HomePage() {
  const pageRef = useRef(null);
  useScrollReveal(pageRef);
  return (
    <div ref={pageRef}>
      <main>
        <Hero />
        <About />
        <WorkPrograms />
        <Agenda />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
