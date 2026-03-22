import { memo, useEffect, useState } from 'react';
import { useMobilePerformance } from '@/hooks/use-mobile-performance';

const GITHUB_USER = 'gitjeeno21';

const About = memo(() => {
  const { shouldReduceEffects, shouldReduceAnimations } = useMobilePerformance();
  const [github, setGithub] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USER}`)
      .then(r => r.json())
      .then(setGithub)
      .catch(() => { });
  }, []);

  return (
    <>
      {/* ── Background ─────────────────────────────────────────── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-cyan-50/20 to-blue-50/20" />

        {!shouldReduceEffects && (
          <>
            <div className="absolute top-1/3  left-1/3  w-80 h-80 rounded-full blur-3xl opacity-40 animate-pulse         bg-gradient-to-r from-cyan-200/30 to-blue-300/30" />
            <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full blur-3xl opacity-40 animate-pulse delay-1000 bg-gradient-to-r from-blue-200/30 to-cyan-300/30" />
            <div className="absolute top-1/2  left-1/4  w-48 h-48 rounded-full blur-3xl opacity-30 animate-pulse delay-2000 bg-gradient-to-r from-pink-200/20 to-rose-300/20" />
          </>
        )}
      </div>

      {/* ── Section ────────────────────────────────────────────── */}
      <section
        id="about"
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20 z-10"
      >
        <div className="container mx-auto">
          <div className="
            backdrop-blur-3xl bg-white/20 border border-white/30
            rounded-3xl p-6 sm:p-12 max-w-4xl mx-auto text-center
            shadow-2xl shadow-cyan-500/10
            hover:shadow-cyan-500/20 hover:scale-[1.02]
            transition-all duration-500
          ">

            {/* Heading */}
            <h2 className="
              text-2xl sm:text-3xl md:text-4xl font-bold mb-6 animate-pulse
              bg-gradient-to-r from-slate-700 via-cyan-600 to-blue-600
              bg-clip-text text-transparent
            ">
              About Me
            </h2>

            {/* Bio */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10">
              I'm Jeenokanth, a final-year student passionate about Python and AI.
              Currently strengthening my skills in Python, DSA, and exploring machine learning.
              I love solving problems and building projects that make a difference.
            </p>

            {/* ── Education Card ──────────────────────────────── */}
            <div className="
              backdrop-blur-2xl bg-white/25 border border-white/40
              rounded-2xl p-5 sm:p-6 max-w-2xl mx-auto text-left mb-6
            ">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-base">🎓</span>
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                  Education
                </h3>
              </div>

              <p className="text-base sm:text-lg font-semibold text-slate-800 leading-snug mb-1">
                Bachelor Of Engineering in Computer Science
              </p>
              <p className="text-sm text-slate-500">
                Adhiyamaan College of Engineering, Hosur &nbsp;·&nbsp; 2022 – 2026
              </p>

              <div className="border-t border-slate-200/60 my-4" />

              <div className="grid grid-cols-3 gap-3 text-center">
                {[
                  { score: '8.0', label: 'CGPA' },
                  { score: '81%', label: 'HSC' },
                  { score: '98.2%', label: 'SSLC' },
                ].map(({ score, label }) => (
                  <div key={label} className="bg-white/40 rounded-xl py-3 px-2">
                    <p className="text-base sm:text-lg font-bold text-cyan-600">{score}</p>
                    <p className="text-xs text-slate-400 mt-0.5 uppercase tracking-wide">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── GitHub Card ─────────────────────────────────── */}
            <a
              href={`https://github.com/${GITHUB_USER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                block max-w-2xl mx-auto
                backdrop-blur-2xl bg-white/25 border border-white/40
                rounded-2xl p-5 sm:p-6 text-left
                transition-all duration-300
                hover:bg-white/35 hover:border-cyan-300/50 hover:-translate-y-0.5
              "
            >
              <div className="flex items-center gap-2 mb-4">
                {/* GitHub icon */}
                <svg className="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.745 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                  GitHub
                </h3>
              </div>

              {github ? (
                <div className="flex items-center gap-4">
                  <img
                    src={github.avatar_url}
                    alt="avatar"
                    className="w-14 h-14 rounded-full border-2 border-white/50 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-base font-semibold text-slate-800 truncate">
                      {github.name || GITHUB_USER}
                    </p>
                    <p className="text-xs text-slate-500 truncate">@{github.login}</p>
                    {github.bio && (
                      <p className="text-xs text-slate-500 mt-1 line-clamp-1">{github.bio}</p>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-white/30 animate-pulse shrink-0" />
                  <div className="flex-1 space-y-2">
                    <div className="h-3 bg-white/30 rounded animate-pulse w-1/3" />
                    <div className="h-3 bg-white/20 rounded animate-pulse w-1/2" />
                  </div>
                </div>
              )}

              <p className="text-xs text-slate-400 mt-3 text-right">
                github.com/{GITHUB_USER} ↗
              </p>
            </a>

          </div>
        </div>
      </section>
    </>
  );
});

export default About;