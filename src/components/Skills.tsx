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
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Deep learning, neural networks, and data science',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Palette,
      title: 'Web Design',
      description: 'Modern UI/UX, responsive design, and interactive experiences',
      color: 'from-pink-400 to-pink-600'
    },
    {
      icon: Globe,
      title: 'JavaScript',
      description: 'ES6+, React, Node.js, and modern frameworks',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'SQL, NoSQL, and database optimization',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: GitBranch,
      title: 'Version Control',
      description: 'Git, GitHub, and collaborative development',
      color: 'from-orange-400 to-orange-600'
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'RESTful APIs, microservices, and cloud deployment',
      color: 'from-cyan-400 to-cyan-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'React Native, Flutter, and cross-platform apps',
      color: 'from-indigo-400 to-indigo-600'
    },
    {
      icon: Cpu,
      title: 'DevOps & Cloud',
      description: 'Docker, AWS, CI/CD, and infrastructure automation',
      color: 'from-red-400 to-red-600'
    }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container mx-auto">
        <div className="glass-card hover-lift p-12">
          <h2 className="text-4xl font-bold gradient-text text-center mb-12 animate-glow">
            Skills & Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group glass-elevated p-6 rounded-2xl hover-lift transition-all duration-300 border border-glass-border relative overflow-hidden"
              >
                {/* Background Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                
                {/* Top Border Effect */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <skill.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:gradient-accent-text transition-all duration-300">
                    {skill.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;