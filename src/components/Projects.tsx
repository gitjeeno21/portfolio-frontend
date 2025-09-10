import { Globe, Bot, BarChart3, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      icon: Globe,
      title: 'Advanced Portfolio Website',
      description: 'A modern, responsive portfolio with advanced CSS animations, glassmorphism effects, and smooth interactions.',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      gradient: 'from-cyan-400 to-blue-500',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      icon: Bot,
      title: 'AI Chatbot Assistant',
      description: 'Intelligent chatbot using natural language processing, machine learning models, and advanced conversation flow.',
      tags: ['Python', 'NLP', 'TensorFlow', 'OpenAI API'],
      gradient: 'from-blue-400 to-cyan-500',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      icon: BarChart3,
      title: 'Student On-Duty Registration Portal',
      description: ' Web portal for CSE students to submit and track On-Duty requests. Implemented with Flask backend and SQL database integration.',
      tags: ['HTML', 'CSS','Tailwind CSS', 'PHP', 'MySQL'],
      gradient: 'from-cyan-500 to-blue-600',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      icon: Globe,
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
      tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      gradient: 'from-pink-400 to-rose-500',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      icon: Bot,
      title: 'Cancer Mortality Rate Prediction ',
      description: 'Automated ML model for predicting US cancer mortality rates with data preprocessing, model training, and Flask-based web deployment',
      tags: ['Python', 'Scikit-learn', 'Flask', 'Pandas'],
      gradient: 'from-blue-500 to-cyan-600',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      icon: BarChart3,
      title: 'Advertisement Spending Prediction',
      description: 'Regression model analyzing ad-spend vs. revenue to provide actionable insights for marketing decisions..',
      tags: [ 'Python', 'NumPy', 'Pandas', 'Matplotlib'],
      gradient: 'from-cyan-600 to-blue-700',
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <>
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-cyan-50/20 to-blue-50/20"></div>
        
        {/* Floating orbs for ambient effect */}
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-200/30 to-blue-300/30 rounded-full blur-3xl animate-pulse opacity-40"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-blue-200/30 to-cyan-300/30 rounded-full blur-3xl animate-pulse delay-1000 opacity-40"></div>
      </div>

      <section id="projects" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20 z-10">
        <div className="container mx-auto">
          <div className="backdrop-blur-3xl bg-white/20 border border-white/30 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-[1.02]">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-slate-700 via-cyan-600 to-blue-600 bg-clip-text text-transparent text-center mb-8 sm:mb-12 animate-pulse">
              Featured Projects
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group backdrop-blur-2xl bg-white/15 border border-white/30 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-105 hover:bg-white/25 relative"
                >
                  {/* Background Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Project Header */}
                  <div className={`h-40 sm:h-48 bg-gradient-to-br ${project.gradient} relative flex items-center justify-center`}>
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                    <project.icon className="w-12 h-12 sm:w-16 sm:h-16 text-white z-10 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
                    
                    {/* Project Actions - Show on Hover */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      <button
                        className="p-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 rounded-lg transition-all duration-300 hover:scale-110 shadow-lg"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </button>
                      <button
                        className="p-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 rounded-lg transition-all duration-300 hover:scale-110 shadow-lg"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-4 sm:p-6 relative z-10">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-slate-700 group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 sm:px-3 py-1 text-xs backdrop-blur-xl bg-white/20 border border-white/40 rounded-full text-slate-600 group-hover:border-cyan-400/50 group-hover:bg-white/30 transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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

export default Projects;