import { Icons } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-monogram">GC</div>
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Giancarlo Acevedo. All rights
          reserved.
        </p>
        <div className="footer-socials">
          <a
            href="https://github.com/gianacevedof"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="GitHub"
          >
            <Icons.github />
          </a>
          <a
            href="https://www.linkedin.com/in/gianacevedof/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="LinkedIn"
          >
            <Icons.linkedin />
          </a>
          <a
            href="mailto:gianacevedof@gmail.com"
            className="footer-social-link"
            aria-label="Email"
          >
            <Icons.mail />
          </a>
        </div>
      </div>
    </footer>
  );
}