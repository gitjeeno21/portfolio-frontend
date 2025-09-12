import { useState, useEffect, memo } from 'react';
import { Download, Mail, Github, Linkedin, Facebook, Instagram, Code, Brain, Sparkles, Zap } from 'lucide-react';
import profileImg from '@/assets/profile.jpg';
import { useMobilePerformance } from '@/hooks/use-mobile-performance';

const Hero = memo(() => {
  const [currentRole, setCurrentRole] = useState(0);
  const { isMobile, shouldReduceAnimations } = useMobilePerformance();

  const roles = [
    { text: 'Aspiring Python Developer', icon: Code, color: 'from-blue-600 to-blue-800' },
    { text: 'Final-Year CS Student', icon: Brain, color: 'from-indigo-600 to-purple-700' },
    { text: 'AI & Generative AI Enthusiast', icon: Sparkles, color: 'from-blue-500 to-indigo-600' },
    { text: 'Problem Solver', icon: Zap, color: 'from-purple-600 to-violet-700' }
  ];

  // Optimize role switching - slower on mobile to reduce CPU usage
  const roleInterval = shouldReduceAnimations ? 5000 : 3000;
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, roleInterval);
    return () => clearInterval(interval);
  }, [roleInterval, roles.length]);

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-500/20 hover:border-blue-500/40' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/jeenokanth21/', label: 'LinkedIn', color: 'hover:bg-blue-600/20 hover:border-blue-600/40' },
    { icon: Instagram, href: 'https://www.instagram.com/____jk__.__/', label: 'Instagram', color: 'hover:bg-purple-500/20 hover:border-purple-500/40' },
    { icon: Github, href: 'https://github.com/gitjeeno21', label: 'GitHub', color: 'hover:bg-slate-700/20 hover:border-slate-700/40' },
  ];

  const CurrentIcon = roles[currentRole].icon;

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24 sm:pt-28 lg:pt-32 z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-24">
            {/* Text Section */}
            <div className="flex-1 text-center lg:text-left space-y-6 sm:space-y-8 max-w-2xl">
              {/* Role Display */}
              <div className="relative mb-8 mt-4">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
                  <span className="text-base sm:text-lg text-slate-600 font-medium">Hello, I'm a</span>
                </div>
                <div className="relative flex items-center justify-center lg:justify-start">
                  <div className="backdrop-blur-xl bg-white/30 border border-white/40 rounded-2xl px-4 sm:px-6 py-2 sm:py-3 shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${roles[currentRole].color} border border-white/30 shadow-lg`}>
                        <CurrentIcon className="w-5 h-5 text-white" />
                      </div>
                      <span className={`text-lg sm:text-xl font-semibold bg-gradient-to-r ${roles[currentRole].color} bg-clip-text text-transparent`}>
                        {roles[currentRole].text}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Name & Title */}
              <div className="relative mb-8">
                <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-800 bg-clip-text text-transparent relative leading-tight">
                  Jeenokanth G
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-600/15 to-purple-500/10 bg-clip-text text-transparent blur-2xl pointer-events-none select-none">
                    Jeenokanth G
                  </span>
                </h1>
                
              </div>

              {/* Tagline / Description */}
              <div className="relative backdrop-blur-xl bg-white/25 rounded-2xl p-4 sm:p-6 border border-white/40 shadow-lg hover:shadow-blue-500/10 transition-all duration-300 mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-600/5 rounded-2xl pointer-events-none select-none"></div>
                <p className="relative text-base sm:text-lg text-slate-700 leading-relaxed">
                  Passionate about <span className="font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Python,AI,Web Development </span>and solving real-world coding challenges
                </p>
              </div>

              {/* Action Buttons and Social Links */}
              <div className="flex flex-col sm:flex-row lg:flex-row items-center gap-4 sm:gap-6">
                <a
                  href="/Jeenokanth_Resume.pdf" // Place your resume as 'public/Jeenokanth_Resume.pdf'
                  download
                  className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition text-sm sm:text-base"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
                <a
                  href="mailto:jeenokanth21@gmail.com"
                  className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl bg-white border border-blue-200 text-blue-700 font-semibold shadow-lg hover:bg-blue-50 transition text-sm sm:text-base"
                >
                  <Mail className="w-5 h-5" />
                  Email Me
                </a>
                <div className="flex items-center gap-2 sm:gap-3 mt-4 lg:mt-0">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className={`inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-slate-200 bg-white text-slate-700 shadow hover:scale-110 transition ${link.color}`}
                    >
                      <link.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            {/* Profile Picture Section (Right Side) */}
            <div className="flex-shrink-0 mb-8 sm:mb-10 lg:mb-0 flex justify-center lg:justify-end w-full lg:w-auto">
              <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-xl border-4 border-blue-200 bg-white flex items-center justify-center">
                <img
                  src={profileImg}
                  alt="Jeeno Profile"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  style={{ willChange: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export default Hero;