import Section from './Section';
import { profile } from '../data/profile';

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="skills-categories">
        {profile.skills.map((group, i) => (
          <div className="skill-category" key={i}>
            <h3 className="skill-category-title">{group.category}</h3>
            <div className="skill-chips">
              {group.items.map((skill) => (
                <span className="chip" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
