export default function AnimatedName() {
  const firstName = 'Giancarlo';
  const lastName = 'Acevedo';
  return (
    <h1 className="hero-name animated-name" aria-label="Giancarlo Acevedo">
      <span className="name-line">
        {firstName.split('').map((char, i) => (
          <span key={i} className="name-char" style={{ '--char-index': i }} aria-hidden="true">
            {char}
          </span>
        ))}
      </span>
      <br />
      <span className="name-line">
        {lastName.split('').map((char, i) => (
          <span key={i} className="name-char name-char-accent" style={{ '--char-index': i + 9 }} aria-hidden="true">
            {char}
          </span>
        ))}
      </span>
    </h1>
  );
}