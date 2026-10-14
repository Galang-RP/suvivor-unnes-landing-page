import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import WorkPrograms from "../components/WorkPrograms.jsx";
import Agenda from "../components/Agenda.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <WorkPrograms />
        <Agenda />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
