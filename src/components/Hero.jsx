import AnimatedName from "./AnimatedName";
import HeroParticles from "./HeroParticles";
import { Icons } from "./Icons";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <HeroParticles />
      <div className="hero-inner">
        <div className="hero-text">
          <p className="hero-greeting reveal visible">— Hello, I'm</p>
          <AnimatedName />
          <p className="hero-tagline reveal visible reveal-delay-2">
            A full-stack developer who has built a real, working web application
            — from database to deployment. I'm turning ideas into a product
            people actually use.
          </p>
          <div className="hero-cta reveal visible reveal-delay-3">
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View projects <Icons.arrowDown />
            </a>
            <a
              href="#contact"
              className="btn btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper reveal visible reveal-delay-2">
          <div className="hero-image-frame">
            <div className="hero-image-orbital"></div>
            <img
              src="./me_hero.png"
              alt="Giancarlo Acevedo portrait"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
