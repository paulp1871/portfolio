import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const ICON_MAP = {
  FiGithub: FiGithub,
  FiLinkedin: FiLinkedin,
  FiTwitter: FiTwitter,
};

export default function Footer({ data }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} {data.name} &mdash;{' '}
          <span>{data.footerNote}</span>
        </p>

        <div className="footer-links">
          {data.socialLinks.map((link) => {
            const Icon = ICON_MAP[link.icon] || FiGithub;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
