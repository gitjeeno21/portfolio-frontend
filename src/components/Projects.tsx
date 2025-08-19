import { Globe, Bot, BarChart3, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      icon: Globe,
      title: 'Advanced Portfolio Website',
      description: 'A modern, responsive portfolio with advanced CSS animations, glassmorphism effects, and smooth interactions.',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      gradient: 'from-blue-500 to-purple-600',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      icon: Bot,
      title: 'AI Chatbot Assistant',
      description: 'Intelligent chatbot using natural language processing, machine learning models, and advanced conversation flow.',
      tags: ['Python', 'NLP', 'TensorFlow', 'OpenAI API'],
      gradient: 'from-green-500 to-emerald-600',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      icon: BarChart3,
      title: 'Interactive Data Visualizer',
      description: 'Dynamic data visualization platform with real-time updates, interactive charts, and beautiful animations.',
      tags: ['D3.js', 'Python', 'React', 'WebSocket'],
      gradient: 'from-orange-500 to-red-600',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      icon: Globe,
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
      tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      gradient: 'from-pink-500 to-rose-600',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      icon: Bot,
      title: 'Machine Learning Pipeline',
      description: 'Automated ML pipeline for data preprocessing, model training, and deployment with monitoring.',
      tags: ['Python', 'Scikit-learn', 'Docker', 'AWS'],
      gradient: 'from-cyan-500 to-blue-600',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      icon: BarChart3,
      title: 'Social Media Analytics',
      description: 'Real-time social media analytics dashboard with sentiment analysis and engagement metrics.',
      tags: ['React', 'Python', 'APIs', 'Chart.js'],
      gradient: 'from-indigo-500 to-purple-600',
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container mx-auto">
        <div className="glass-card hover-lift p-12">
          <h2 className="text-4xl font-bold gradient-text text-center mb-12 animate-glow">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group glass-elevated rounded-2xl overflow-hidden hover-lift transition-all duration-500 border border-glass-border relative"
              >
                {/* Background Hover Effect */}
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                
                {/* Project Header */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative flex items-center justify-center`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <project.icon className="w-16 h-16 text-white z-10 group-hover:scale-110 transition-transform duration-300" />
                  
                  {/* Project Actions - Show on Hover */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6 relative z-10">
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:gradient-accent-text transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs bg-glass-bg border border-glass-border rounded-full text-muted-foreground group-hover:border-accent/50 transition-colors duration-300"
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
  );
};

export default Projects;