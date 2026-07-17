export default function SkillsBanner() {
  const skills = [
    { name: 'HTML', label: 'HTML5' },
    { name: 'CSS', label: 'CSS3' },
    { name: 'JavaScript', label: 'JavaScript' },
    { name: 'React', label: 'React' },
    { name: 'PHP', label: 'PHP' },
    { name: 'SQL', label: 'SQL' },
    { name: 'GitHub', label: 'Git' },
    { name: 'Vite', label: 'Vite' },
  ];

  return (
    <div className="skills-banner">
      <div className="skills-banner-inner">
        {skills.map((skill, i) => (
          <div key={skill.name} className={`skill-item reveal reveal-delay-${Math.min(i, 4)}`}>
            <span className="skill-icon">{skill.name === 'React' ? '⚛' : skill.name === 'Vite' ? '⚡' : '▸'}</span>
            {skill.label}
          </div>
        ))}
      </div>
    </div>
  );
}