import Section from './Section';
import { profile } from '../data/profile';

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="about-grid">
        <div className="about-text">
          {profile.about.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="about-facts">
          {profile.facts.map((fact, i) => (
            <div className="fact-card" key={i}>
              <div className="fact-label">{fact.label}</div>
              <div className="fact-value">{fact.value}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
