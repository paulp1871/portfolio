import { useState, useCallback } from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiCopy, FiCheck } from 'react-icons/fi';
import Section from './Section';
import { profile } from '../data/profile';

const ICON_MAP = {
  FiGithub: FiGithub,
  FiLinkedin: FiLinkedin,
  FiTwitter: FiTwitter,
};

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: do nothing
    }
  }, []);

  return (
    <Section id="contact" title="Contact">
      <div className="contact-content">
        <p className="contact-text">
          I'm always open to new opportunities, collaborations, or just a
          friendly chat. Feel free to reach out!
        </p>

        <div className="contact-links">
          {profile.socialLinks.map((link) => {
            const Icon = ICON_MAP[link.icon] || FiGithub;
            return (
              <a
                key={link.name}
                className="contact-link"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
              >
                <Icon />
                {link.name}
              </a>
            );
          })}

          <a
            className="contact-link"
            href={`mailto:${profile.email}`}
            aria-label="Email"
          >
            <FiMail />
            Email
          </a>
        </div>

        <div className="copy-email-wrapper">
          <button className="btn btn-secondary btn-small" onClick={copyEmail}>
            {copied ? <FiCheck size={14} /> : <FiCopy size={14} />}
            {copied ? 'Copied!' : 'Copy Email'}
          </button>
          <span className="copy-feedback" aria-live="polite">
            {copied ? profile.email : ''}
          </span>
        </div>
      </div>
    </Section>
  );
}
