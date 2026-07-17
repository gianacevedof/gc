import { useMemo } from 'react';

export default function HeroParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: 5 + Math.random() * 90,
        top: 5 + Math.random() * 90,
        size: 2 + Math.random() * 4,
        duration: 6 + Math.random() * 8,
        delay: Math.random() * 6,
        dx: -80 + Math.random() * 160,
        dy: -100 + Math.random() * 100,
      })),
    []
  );
  return (
    <div className="hero-particles" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="hero-particle"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            '--dx': `${p.dx}px`,
            '--dy': `${p.dy}px`,
            '--duration': `${p.duration}s`,
            '--delay': `${p.delay}s`,
            opacity: 0.2 + Math.random() * 0.4,
          }}
        />
      ))}
    </div>
  );
}