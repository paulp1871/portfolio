export const profile = {
  name: 'Paul Pham',
  firstName: 'Paul',
  lastName: 'Pham',
  tagline: 'Computer Science Student @ University of Calgary',
  location: 'Calgary, AB',
  email: 'paulpham1871@gmail.com',

  about: [
    "Hello! I’m Paul Pham, a Computer Science student at the University of Calgary. I am an aspiring developer, and I love projects that turn messy real-world data into something you can actually explore!",
    "Lately I’ve been working on an interactive mapping project and I am currently learning more about full-stack web development and artifical intelligence.",
  ],

  facts: [
    { label: 'Location', value: 'Calgary, AB' },
    { label: 'School', value: 'University of Calgary' },
    { label: 'Degree', value: 'B.S. Computer Science' },
    { label: 'Focus', value: 'Web & AI' },
  ],

  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/paulp1871',
      icon: 'FiGithub',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/paul-p1871/',
      icon: 'FiLinkedin',
    },
  ],

  skills: [
    {
      category: 'Languages',
      items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL', 'HTML/CSS'],
    },
    {
      category: 'Frontend',
      items: ['React', 'Next.js', 'Vue'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express', 'Django', 'PostgreSQL', 'MongoDB'],
    },
    {
      category: 'Tools',
      items: ['Git', 'Linux', 'Postman', 'Vite'],
    },
  ],

  projects: [
    {
      title: 'PLARF Missile Coverage Visualizer',
      description:
        'Interactive web app that maps 38 missile sites from the People\'s Liberation Army Rocket Force and visualizes the range of 16 missile types from open-source data.',
      tags: ['Python', 'Folium', 'Leaflet.js', 'Node.js', 'Express'],
      links: {
        repo: 'https://github.com/paulp1871/plarf-missile-coverage-visualizer',
        demo: 'https://plarf-missile-coverage-visualizer.onrender.com/',
      },
      featured: true,
    },
  ],

  experience: [
    {
      type: 'education',
      title: 'B.S. Computer Science',
      organization: 'University of Calgary',
      date: '2023 – Present',
      description:
        'Focused on software engineering, data structures & algorithms, AI/machine learning, and human-computer interaction.',
    },
  ],

  footerNote: 'Designed & built with React + Vite',
};
