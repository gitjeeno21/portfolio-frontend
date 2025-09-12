import { memo } from 'react';
import { useMobilePerformance } from '@/hooks/use-mobile-performance';

const About = memo(() => {
  const { isMobile, shouldReduceEffects, shouldReduceAnimations } = useMobilePerformance();

  return (
    <>
      {/* Background Effects - Reduced for mobile */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-cyan-50/20 to-blue-50/20"></div>
        
        {/* Floating ambient orbs - Simplified for mobile */}
        {!shouldReduceEffects && (
          <>
            <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-gradient-to-r from-cyan-200/30 to-blue-300/30 rounded-full blur-3xl animate-pulse opacity-40"></div>
            <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-blue-200/30 to-cyan-300/30 rounded-full blur-3xl animate-pulse delay-1000 opacity-40"></div>
            <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-r from-pink-200/20 to-rose-300/20 rounded-full blur-3xl animate-pulse delay-2000 opacity-30"></div>
          </>
        )}
      </div>

      <section id="about" className="relative min-h-screen flex items-center justify-center px-6 py-20 z-10">
        <div className="container mx-auto">
          <div className="backdrop-blur-3xl bg-white/20 border border-white/30 rounded-3xl p-12 max-w-4xl mx-auto text-center shadow-2xl shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-[1.02]">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-700 via-cyan-600 to-blue-600 bg-clip-text text-transparent mb-8 animate-pulse">
              About Me
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              I’m Jeenokanth, a final-year student passionate about Python and AI. Currently strengthening my skills in Python, DSA, and exploring machine learning.
              I love solving problems and building projects that make a difference.
            </p>
            <p><b>Education</b></p>

<p>🎓 B.Tech in Computer Science & Engineering </p>
 <p> Adhiyamaan College of Engineering, Hosur (2022 – 2026)
Current CGPA: 8.0

📘 HSC – 81% | SSLC – 98.2%</p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12">
              <div className={`text-center backdrop-blur-2xl bg-white/15 border border-white/30 rounded-2xl p-4 md:p-6 transition-all duration-300 ${!shouldReduceAnimations ? 'hover:bg-white/25 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105' : ''}`}>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-2">20+</div>
                <div className="text-xs md:text-sm text-slate-500 uppercase tracking-wide">Projects</div>
              </div>
              <div className={`text-center backdrop-blur-2xl bg-white/15 border border-white/30 rounded-2xl p-4 md:p-6 transition-all duration-300 ${!shouldReduceAnimations ? 'hover:bg-white/25 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105' : ''}`}>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-2">100+</div>
                <div className="text-xs md:text-sm text-slate-500 uppercase tracking-wide">Problems solved</div>
              </div>
              <div className={`text-center backdrop-blur-2xl bg-white/15 border border-white/30 rounded-2xl p-4 md:p-6 transition-all duration-300 ${!shouldReduceAnimations ? 'hover:bg-white/25 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105' : ''}`}>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-2">3+</div>
                <div className="text-xs md:text-sm text-slate-500 uppercase tracking-wide">Internships</div>
              </div>
              <div className={`text-center backdrop-blur-2xl bg-white/15 border border-white/30 rounded-2xl p-4 md:p-6 transition-all duration-300 ${!shouldReduceAnimations ? 'hover:bg-white/25 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105' : ''}`}>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-2">10+</div>
                <div className="text-xs md:text-sm text-slate-500 uppercase tracking-wide">Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default About;