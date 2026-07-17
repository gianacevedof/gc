export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-header reveal">
        <span className="section-label">/ about</span>
        <h2 className="section-title">
          More <span>about me</span>
        </h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p className="reveal reveal-delay-1">
            I started learning web development in high school and have been
            passionate about it ever since. Now, in my free time, I enjoy
            creating <strong>responsive and user-friendly websites</strong> that
            provide great user experiences. I believe that great code isn't just
            about functionality — it's about creating{" "}
            <strong>seamless digital experiences</strong>.
          </p>
          <p className="reveal reveal-delay-2">
            I specialize in the <strong>core web stack</strong> (HTML, CSS,
            JavaScript, SQL) and have built full-stack applications with{" "}
            <strong>React, PHP, and MySQL</strong>. I'm currently expanding my
            expertise in modern frontend tooling and performance optimization.
          </p>
          <p className="reveal reveal-delay-3">
            When I'm not coding, I'm exploring new technologies, improving my
            workflow, or finding ways to write cleaner, more maintainable code.
          </p>
        </div>

        <div className="about-image reveal reveal-delay-2">
          <div className="about-image-frame">
            <img src="./about_me.jpeg" alt="Giancarlo Acevedo" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}