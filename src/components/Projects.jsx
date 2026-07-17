import SpotlightCard from "./SpotlightCard";
import { Icons } from "./Icons";

export default function Projects() {
  const projects = [
    {
      label: "Featured Project",
      title: "Soynikon Desk",
      description:
        "A full-stack business management application built for a real photography company. Features include client management, order tracking, and automated shipping label generation via PDF. Deployed with a React frontend and PHP + MySQL backend, handling real business operations in production.",
      tags: [
        "React 19",
        "Vite",
        "PHP",
        "MySQL",
        "React Router 7",
        "Bootstrap 5",
        "JWT Auth",
      ],
      image: "./Label_generator_website.png",
      links: [
        { label: "Live Demo", url: "https://desk.soynikon.do", primary: true },
        {
          label: "Source Code",
          url: "https://github.com/gianacevedof/desk.soynikon.do",
          primary: false,
        },
      ],
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="section-header reveal">
        <span className="section-label">/ projects</span>
        <h2 className="section-title">
          Featured <span>work</span>
        </h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <SpotlightCard
            key={project.title}
            className={`project-card reveal reveal-delay-${i + 1}`}
            spotlightColor="rgba(0, 212, 181, 0.15)"
          >
            <div className="project-image">
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                loading="lazy"
              />
            </div>
            <div className="project-info">
              <span className="project-label">{project.label}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`project-link ${link.primary ? "project-link-primary" : "project-link-secondary"}`}
                  >
                    {link.label}
                    <Icons.external />
                  </a>
                ))}
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}