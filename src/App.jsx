import SplashCursor from "./components/SplashCursor";
import ClickSpark from "./components/ClickSpark";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import SkillsBanner from "./components/SkillsBanner";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useScrollReveal } from "./hooks/useScrollReveal";

export default function App() {
  useScrollReveal();

  return (
    <>
      <SplashCursor
        COLOR="#00D4B5"
        RAINBOW_MODE={false}
        DENSITY_DISSIPATION={4}
        VELOCITY_DISSIPATION={3}
      />
      <ClickSpark
        sparkColor="#00D4B5"
        sparkSize={8}
        sparkCount={6}
        sparkRadius={18}
      >
        <Nav />
        <Hero />
        <SkillsBanner />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </ClickSpark>
    </>
  );
}