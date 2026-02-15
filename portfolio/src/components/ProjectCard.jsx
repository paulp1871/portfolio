import { FiExternalLink, FiGithub, FiStar } from 'react-icons/fi';

export default function ProjectCard({ project }) {
  const { title, description, tags, links, featured } = project;

  return (
    <article className="project-card">
      {featured && (
        <span className="project-featured-badge">
          <FiStar size={12} /> Featured
        </span>
      )}

      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>

      <div className="project-tags">
        {tags.map((tag) => (
          <span className="chip" key={tag}>
            {tag}
          </span>
        ))}
      </div>

      <div className="project-links">
        {links.repo && (
          <a
            className="btn btn-secondary btn-small"
            href={links.repo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub size={14} /> Repo
          </a>
        )}
        {links.demo && (
          <a
            className="btn btn-primary btn-small"
            href={links.demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiExternalLink size={14} /> Live
          </a>
        )}
      </div>
    </article>
  );
}
