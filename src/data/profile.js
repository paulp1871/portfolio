export const profile = {
  name: 'Paul Pham',
  firstName: 'Paul',
  lastName: 'Pham',
  tagline: 'Computer Science Student @ University of Calgary',
  location: 'Calgary, AB',
  email: 'paulpham1871@gmail.com',

  about: [
    "Hello! I'm Paul Pham, a Computer Science student at the University of Calgary. I am an aspiring developer, and I love projects that turn messy real-world data into something you can actually explore!",
    "Lately, I've worked on an interactive mapping project, and I am an incoming Software Developer Intern at Environment and Climate Change Canada for May 2026.",
  ],

  facts: [
    { label: 'Degree', value: 'B.Sc. Computer Science' },
    { label: 'School', value: 'University of Calgary' },
    { label: 'Location', value: 'Calgary, AB' },
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
      items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C', 'HTML/CSS'],
    },
    {
      category: 'Frameworks/Libraries',
      items: ['React', 'Node', 'Express', 'JavaFX', 'Pandas', 'SciKit-Learn', 'NumPy'],
    },
    {
      category: 'Databases',
      items: ['SQL', 'MongoDB'],
    },
    {
      category: 'Tools',
      items: ['Git', 'Linux', 'Postman', 'Render'],
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
        demo: 'https://plarf-missile-coverage-visualizer-foto.onrender.com/',
      },
      featured: true,
    },
  ],

  experience: [
    {
      type: 'experience',
      title: 'Software Developer Intern',
      organization: 'Environment & Climate Change Canada',
      date: 'Incoming - May 2026',
      description:
        'Developing a web-based interactive mapping tool to process and display weather and geospatial data for forecasting and hazard analysis.',
    }
  ],

  education: [
    {
      type: 'education',
      title: 'Bachelor of Science, Computer Science',
      organization: 'University of Calgary',
      date: 'September 2023 – Present',
      description:
        'Relevant Coursework: Data Structures & Algorithms, Software Engineering, Computer Architecture, Object Oriented Programming, Python Progamming',
    },
  ],

  footerNote: 'Designed & built with React + Vite',
};
