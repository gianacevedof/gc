import { useState, useEffect } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#hero" className="nav-logo" onClick={(e) => handleNavClick(e, '#hero')}>
          <span className="nav-logo-mark">GC</span>
        </a>

        <button
          className={`nav-toggle${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links${menuOpen ? ' open' : ''}`}>
          <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, '#about')}>About</a>
          <a href="#projects" className="nav-link" onClick={(e) => handleNavClick(e, '#projects')}>Projects</a>
          <a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a>
          <a href="/GC_Resume.pdf" className="nav-resume" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
      </div>
    </nav>
  );
}