import { profile } from '../data/profile';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Ambient glow blobs */}
      <div className="hero-glow hero-glow--cyan" aria-hidden="true" />
      <div className="hero-glow hero-glow--magenta" aria-hidden="true" />

      <div className="container hero-content">
        <p className="hero-greeting">Hi, my name is</p>
        <h1 className="hero-name">{profile.name}</h1>
        <p className="hero-tagline">{profile.tagline}</p>


        <div className="hero-buttons">
          <a className="btn btn-primary" href="#projects">
            View Projects
          </a>
          <a className="btn btn-secondary" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
