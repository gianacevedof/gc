import SpotlightCard from "./SpotlightCard";
import { Icons } from "./Icons";

export default function Projects() {
  const projects = [
    {
      label: "Featured Project",
      title: "Soynikon Desk",
      description:
        "Full-stack business management app built for a real business — Soynikon, live at desk.soynikon.do. Features client and order management, shipping label generation (PDF), JWT-based auth with standard/admin role permissions, and a fully responsive layout. Solo project, deployed on shared hosting with a Git-based workflow.",
      tags: [
        "React 19",
        "Vite",
        "PHP",
        "MySQL",
        "React Router 7",
        "Bootstrap 5",
        "JWT Auth",
      ],
      image: "./sn-desk.png",
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
