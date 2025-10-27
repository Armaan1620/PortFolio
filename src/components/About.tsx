import { Code2, Palette, Rocket, Users } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'React Native'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs'],
    },
    {
      category: 'Tools',
      items: ['Git', 'Docker', 'Vercel', 'Figma', 'VS Code'],
    },
    {
      category: 'Soft Skills',
      items: ['Team Leadership', 'Problem Solving', 'Communication', 'Agile', 'Mentoring'],
    },
  ];

  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.',
    },
    {
      icon: Palette,
      title: 'Design Focused',
      description: 'Creating intuitive interfaces with attention to detail and user experience.',
    },
    {
      icon: Rocket,
      title: 'Fast Learner',
      description: 'Quickly adapting to new technologies and frameworks to deliver results.',
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Collaborating effectively with cross-functional teams to achieve goals.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-slate-800 p-8 rounded-2xl border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-4">Who I Am</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  I'm a passionate developer who loves turning complex problems into simple, beautiful, and intuitive solutions. With a strong foundation in both frontend and backend development, I create seamless digital experiences.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group relative bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <Icon className="text-cyan-400 mb-3" size={32} />
                  <h4 className="text-white font-semibold mb-2">{title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Expertise</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map(({ category, items }) => (
              <div
                key={category}
                className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <h4 className="text-cyan-400 font-semibold text-lg mb-4 group-hover:text-cyan-300 transition-colors">
                  {category}
                </h4>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="text-gray-400 text-sm flex items-center group-hover:text-gray-300 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
