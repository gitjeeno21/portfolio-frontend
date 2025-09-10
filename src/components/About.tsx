const About = () => {
  return (
    <>
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-cyan-50/20 to-blue-50/20"></div>
        
        {/* Floating ambient orbs */}
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-gradient-to-r from-cyan-200/30 to-blue-300/30 rounded-full blur-3xl animate-pulse opacity-40"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-blue-200/30 to-cyan-300/30 rounded-full blur-3xl animate-pulse delay-1000 opacity-40"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-r from-pink-200/20 to-rose-300/20 rounded-full blur-3xl animate-pulse delay-2000 opacity-30"></div>
      </div>

      <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-slate-100 to-white">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
    {/* Section Title */}
    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-4 sm:mb-6">
      About Me
    </h2>
    <p className="text-base sm:text-lg text-slate-700 leading-relaxed text-center max-w-3xl mx-auto px-4 sm:px-0">
      I’m <b>Jeenokanth</b>, a final-year Computer Science student passionate about{" "}
      <b>Python, AI, and Web Development</b>. Skilled in problem-solving, DSA, and backend frameworks, 
      I enjoy building intelligent, data-driven solutions that create real-world impact.
    </p>

    {/* Education */}
    <div className="mt-8 sm:mt-12">
      <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-3 sm:mb-4">🎓 Education</h3>
      <ul className="text-slate-800 text-sm sm:text-base space-y-2 px-4 sm:px-0">
        <li>
          <b>B.Tech in Computer Science & Engineering</b> – Adhiyamaan College of Engineering (2022 – 2026) <br />
          Current CGPA: <b>8.0</b>
        </li>
        <li>HSC – <b>81%</b></li>
        <li>SSLC – <b>98.2%</b></li>
      </ul>
    </div>

    {/* Stats Section */}
    <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
      <div>
        <div className="text-2xl sm:text-3xl font-bold text-blue-700">20+</div>
        <div className="text-xs sm:text-sm text-slate-700 uppercase tracking-wide">Projects</div>
      </div>

      <div>
        <div className="text-2xl sm:text-3xl font-bold text-green-700">200+</div>
        <div className="text-xs sm:text-sm text-slate-700 uppercase tracking-wide">Problems Solved</div>
      </div>

      <div>
        <div className="text-2xl sm:text-3xl font-bold text-purple-700">5+</div>
        <div className="text-xs sm:text-sm text-slate-700 uppercase tracking-wide">Hackathons</div>
      </div>

      <div>
        <div className="text-2xl sm:text-3xl font-bold text-orange-700">10+</div>
        <div className="text-xs sm:text-sm text-slate-700 uppercase tracking-wide">Certifications</div>
      </div>
    </div>

    {/* Soft Skills */}
    <p className="mt-8 sm:mt-12 text-slate-800 text-center text-sm sm:text-base px-4 sm:px-0">
      💡 <b>Strengths:</b> Problem-solving, adaptability, teamwork, and continuous learning.
    </p>
  </div>
</section>

    </>
  );
};

export default About;