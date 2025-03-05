import Hero from "./Hero";
import About from "./About";
import BentoGrid from "./BentoGrid";
import Work from "./Work";
import Education from "./Education";
import Projects from "./Projects";
import Contact from "./Contact";
import Blog from "./Blog";
import Skills from "./Skills";

export default function HomeSection() {
  return (
    <>
      <Hero />
      <About />
      <BentoGrid />
      <Work />
      <Education />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
    </>
  );
}
