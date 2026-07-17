import { useState } from "react";
import { Icons } from "./Icons";

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError("");

    const form = e.target;

    try {
      const result = await window.emailjs.sendForm(
        "service_2oz0ffu",
        "template_x7b33bd",
        form,
      );
      if (result.status === 200) {
        setSubmitted(true);
        form.reset();
      } else {
        setError("Something went wrong. Try emailing me directly instead.");
      }
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Network error. Try emailing me directly instead.");
    }
    setSending(false);
  };

  if (submitted) {
    return (
      <section id="contact" className="section">
        <div className="section-header reveal visible">
          <span className="section-label">/ contact</span>
          <h2 className="section-title">
            Message <span>sent!</span>
          </h2>
        </div>
        <div className="contact-content reveal visible">
          <p className="contact-text">
            Thanks for reaching out! I'll get back to you as soon as possible.
          </p>
          <button
            className="btn btn-primary"
            onClick={() => setSubmitted(false)}
          >
            Send another message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section">
      <div className="section-header reveal">
        <span className="section-label">/ contact</span>
        <h2 className="section-title">
          Let's <span>connect</span>
        </h2>
      </div>

      <div className="contact-content">
        <p className="contact-text reveal reveal-delay-1">
          I'm always open to new opportunities, collaborations, or just a
          friendly chat. Whether you have a project in mind or just want to say
          hi — send me a message or reach out on socials.
        </p>

        <form
          className="contact-form reveal reveal-delay-2"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your name"
            required
            className="form-input"
          />
          <input
            type="email"
            name="reply_to"
            placeholder="Your email"
            required
            className="form-input"
          />
          <textarea
            name="message"
            placeholder="What's on your mind?"
            rows="5"
            required
            className="form-textarea"
          ></textarea>
          {error && <p className="form-error">{error}</p>}
          <button
            type="submit"
            className="btn btn-primary form-submit"
            disabled={sending}
          >
            {sending ? "Sending..." : "Send message"}
            {!sending && <Icons.arrowUpRight />}
          </button>
        </form>

        <div className="contact-divider reveal reveal-delay-3">
          <span>or reach out directly</span>
        </div>

        <div className="contact-links reveal reveal-delay-3">
          <a
            href="https://github.com/gianacevedof"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link contact-link-github"
          >
            <Icons.github /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/gianacevedof/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link contact-link-linkedin"
          >
            <Icons.linkedin /> LinkedIn
          </a>
          <a
            href="mailto:gianacevedof@gmail.com"
            className="contact-link contact-link-email"
          >
            <Icons.mail /> Send Email
          </a>
        </div>
      </div>
    </section>
  );
}