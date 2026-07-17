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
            building with it ever since. My focus is{" "}
            <strong>full-stack development</strong> — I like understanding how a
            project works end to end, not just how it looks.
          </p>
          <p className="reveal reveal-delay-2">
            I work across the <strong>core web stack</strong> (HTML, CSS,
            JavaScript, SQL) and have implemented{" "}
            <strong>React, PHP, and MySQL</strong> building a full-stack
            application. My biggest project so far,{" "}
            <strong>Soynikon Desk</strong>, is a management system I built for a
            real business — currently in production, handling their actual
            day-to-day operations.
          </p>
          <p className="reveal reveal-delay-3">
            I'm currently expanding into modern frontend tooling and performance
            optimization, and I'm always looking for ways to write cleaner, more
            maintainable code.
          </p>
        </div>

        <div className="about-image reveal reveal-delay-2">
          <div className="about-image-frame">
            <img src="./about_me.png" alt="Giancarlo Acevedo" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
