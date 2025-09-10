import { 
  Code, 
  Brain, 
  Palette, 
  Database, 
  GitBranch, 
  Smartphone,
  Server,
  Globe,
  Cpu
} from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: Code,
      title: 'Python Development',
      description: 'Advanced Python programming, Django, Flask, and automation',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: ' Libraries / Tools :NumPy,Pandas,Matplotlib,Scikit-learn ',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Palette,
      title: 'Web Design',
      description: 'HTML, CSS, TailwindCSS, Figma,NodeJS',
      color: 'from-pink-400 to-rose-500'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'SQL, MongoDB',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: GitBranch,
      title: 'Version Control',
      description: 'Git, GitHub, and collaborative development',
      color: 'from-blue-500 to-indigo-600'
    }
  ];

  return (
    <>
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-cyan-50/20 to-blue-50/20"></div>
        
        {/* Floating ambient orbs */}
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-cyan-200/30 to-blue-300/30 rounded-full blur-3xl animate-pulse opacity-50"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-200/30 to-cyan-300/30 rounded-full blur-3xl animate-pulse delay-1000 opacity-50"></div>
      </div>

      <section id="skills" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20 z-10">
        <div className="container mx-auto">
          <div className="backdrop-blur-3xl bg-white/20 border border-white/30 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-[1.02]">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-slate-700 via-cyan-600 to-blue-600 bg-clip-text text-transparent text-center mb-8 sm:mb-12 animate-pulse">
              Skills & Expertise
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group backdrop-blur-2xl bg-white/15 border border-white/30 p-4 sm:p-6 rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-105 hover:bg-white/25 relative overflow-hidden"
                >
                  {/* Background Gradient Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Top Border Effect */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${skill.color} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg backdrop-blur-sm border border-white/20`}>
                      <skill.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white drop-shadow-sm" />
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-slate-700 group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {skill.title}
                    </h3>
                    
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;