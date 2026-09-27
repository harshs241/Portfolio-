import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { User, Heart, Compass, Layers, Cpu, Coffee, Gamepad2, Mountain, BookOpen } from 'lucide-react';

export const About: React.FC = () => {
  const hobbies = [
    { icon: <Mountain className="w-4 h-4 text-cyan-500" />, label: 'Hiking & Trails' },
    { icon: <Gamepad2 className="w-4 h-4 text-indigo-500" />, label: 'Rapid Chess' },
    { icon: <BookOpen className="w-4 h-4 text-emerald-500" />, label: 'System Design Books' },
    { icon: <Coffee className="w-4 h-4 text-amber-500" />, label: 'Specialty Coffee' },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-mono text-xs uppercase tracking-wider font-semibold mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Discover</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Profile Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              {/* Outer decorative ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 rounded-3xl blur-md opacity-30 group-hover:opacity-100 transition duration-1000 -z-10" />

              <div className="rounded-2xl overflow-hidden bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 shadow-xl p-6 sm:p-8 space-y-6">
                {/* Profile Card Header */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 via-teal-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold font-mono shadow-md">
                    HS
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {personalInfo.name}
                    </h3>
                    <p className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
                      Full Stack Engineer
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>

                {/* Quick stats grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {personalInfo.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/80 text-center"
                    >
                      <div className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">
                        {stat.value}
                      </div>
                      <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Hobbies & Personality tags */}
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-2.5">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5 text-rose-500" />
                    Beyond the Code
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {hobbies.map((h, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 dark:bg-slate-900/40 text-xs font-medium text-slate-700 dark:text-slate-300 border border-slate-100 dark:border-slate-800/50"
                      >
                        {h.icon}
                        <span>{h.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3-Paragraph Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
            <div className="flex items-start gap-4">
              <div className="mt-1 p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  My Journey & Background
                </h4>
                <p>{personalInfo.bio[0]}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 p-2 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Engineering Philosophy & Craft
                </h4>
                <p>{personalInfo.bio[1]}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 p-2 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Current Focus & Next Horizons
                </h4>
                <p>{personalInfo.bio[2]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
