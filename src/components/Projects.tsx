import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'ClipForge',
      description: 'Full-stack video editing app using React Native (Expo) and FastAPI, featuring overlays, FFmpeg rendering, real-time preview, async job tracking, and complete Dockerized deployment.',
      image: '',
      tags: ['React Native', 'FastAPI', 'Docker', 'FFmpeg'],
      github: 'https://github.com/Armaan1620/DripLink',
      demo: '#',
    },
    {
      title: 'Byte-Chef',
      description: 'Built a cross-platform mobile app for discovering and searching recipes using TheMealDB API. Integrated user authentication with Clerk and secure token handling. ',
      image: '/ByteChef.png',
      tags: ['React Native', 'TypeScript', 'Express', 'MySQL'],
      github: 'https://github.com/Armaan1620/recipe-app-api',
      demo: '#',
    },
    {
      title: 'Myntra-Clone',
      description: 'Built a full-stack e-commerce web app inspired by Myntra using React with Redux for state management and Bootstrap for responsive UI design.Designed responsive UI using Bootstrap, ensuring seamless usability across devices.',
      image: '/myntra.jpg',
      tags: ['Python', 'React', 'OpenAI', 'FastAPI'],
      github: 'https://github.com/Armaan1620/MyntraClone',
      demo: '#',
    },
   
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-slate-900 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60"></div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium text-cyan-400 bg-cyan-400/10 rounded-full border border-cyan-400/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm font-medium"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm font-medium"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
