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
            A frontend developer who loves building responsive, user-friendly
            web experiences. I turn ideas into polished digital products.
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
              src="./me_picture.JPG"
              alt="Giancarlo Acevedo portrait"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}