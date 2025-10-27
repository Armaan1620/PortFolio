import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'SDE',
      company: 'Gharpayy.',
      period: 'March 2025 - Oct 2025',
      description: ' Worked as a SDE Intern, building the company’s web and mobile applications using the MERN stack to enhance user experience. Enhanced website functionality by integrating APIs and dynamic content features. Optimized code and performance, reducing page load time and improving UX.',
      highlights: [
        'Architected and deployed 2 production applications',
        'Improved application performance by 25%'
      ],
    },
    
    {
      type: 'education',
      title: 'Bachelor of Computer Science Engineering',
      company: 'Chitkara University',
      period: '2021 - 2025',
      description: 'Focused on software engineering, algorithms, and web development. Graduated with honors.',
      highlights: [
        'GPA: 8.8/10',
        'Dean\'s List all semesters',
        'Organising Head of E-Sports Club',
      ],
    },
    
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1 w-full">
                  <div
                    className={`bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group ${
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-4 justify-start md:justify-end">
                      <div className={`p-2 rounded-lg ${exp.type === 'work' ? 'bg-cyan-500/10 text-cyan-400' : 'bg-purple-500/10 text-purple-400'}`}>
                        {exp.type === 'work' ? <Briefcase size={20} /> : <GraduationCap size={20} />}
                      </div>
                      <span className={`text-sm font-medium ${exp.type === 'work' ? 'text-cyan-400' : 'text-purple-400'}`}>
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-cyan-400 font-medium mb-3">{exp.company}</p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                          <span className="text-cyan-400 mt-1.5">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full border-4 border-slate-900 z-10 group-hover:scale-125 transition-transform"></div>

                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
