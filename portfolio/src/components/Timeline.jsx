import Section from './Section';
import { profile } from '../data/profile';

export default function Timeline() {
  return (
    <Section
      id="experience"
      title="Experience & Education"
    >
      <div className="timeline">
        {profile.experience.map((item, i) => (
          <div className="timeline-item" key={i}>
            <div className="timeline-dot" aria-hidden="true" />
            <div className="timeline-content">
              <span className="timeline-date">{item.date}</span>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-org">{item.organization}</p>
              {item.description && (
                <p className="timeline-desc">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
