import Section from './Section';
import ProjectCard from './ProjectCard';
import { profile } from '../data/profile';

export default function Projects() {
  // Featured projects first, then the rest
  const sorted = [...profile.projects].sort(
    (a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
  );

  return (
    <Section id="projects" title="Projects">
      <div className="projects-grid">
        {sorted.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </Section>
  );
}
