import React from 'react';
import { experiences } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-50/50 dark:bg-dark-surface/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-mono text-xs uppercase tracking-wider font-semibold mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            A track record of scaling high-traffic systems, leading feature development, and delivering measurable business impact.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central glowing vertical track */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-cyan-500 via-indigo-500 to-purple-500 opacity-30 dark:opacity-40" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Glowing Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-dark-bg border-4 border-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/30 z-10">
                    <div className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
                  </div>

                  {/* Empty Spacer Column for Desktop */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card Content Column */}
                  <div className="pl-12 md:pl-0 md:w-1/2 w-full">
                    <div
                      className={`md:mx-8 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-cyan-500/40 dark:hover:border-cyan-500/40 ${
                        isEven ? 'md:text-left' : 'md:text-left'
                      }`}
                    >
                      {/* Current Status Pill */}
                      {exp.isCurrent && (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          Current Role
                        </div>
                      )}

                      {/* Role & Company */}
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <div className="text-base font-semibold text-cyan-600 dark:text-cyan-400 mt-0.5">
                        {exp.company}
                      </div>

                      {/* Meta (Dates & Location) */}
                      <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400 my-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Key Achievements Bullet Points */}
                      <div className="space-y-2.5 mt-4 text-sm text-slate-600 dark:text-slate-300">
                        {exp.achievements.map((item, i) => (
                          <div key={i} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-1.5">
                        {exp.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
