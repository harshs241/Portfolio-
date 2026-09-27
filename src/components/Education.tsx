import React from 'react';
import { educations, certifications } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-mono text-xs uppercase tracking-wider font-semibold mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education &amp; <span className="text-gradient">Credentials</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            Formal computer science foundation complemented by continuous learning and recognized cloud certifications.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Main Degree Card */}
          <div className="lg:col-span-7 space-y-6">
            {educations.map((edu) => (
              <div
                key={edu.id}
                className="rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-base font-semibold text-cyan-600 dark:text-cyan-400 mt-0.5">
                      {edu.institution}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400 my-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {edu.location}
                      </span>
                    </div>
                    {edu.gpa && (
                      <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 my-2">
                        {edu.gpa}
                      </div>
                    )}
                  </div>
                </div>

                {/* Relevant Coursework */}
                <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800/80">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-cyan-500" />
                    Relevant Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/50"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Honors & Activities */}
                {edu.honors && (
                  <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-2 flex items-center gap-2">
                      <Award className="w-4 h-4 text-amber-500" />
                      Honors &amp; Leadership
                    </h4>
                    {edu.honors.map((honor, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>{honor}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Certifications Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Industry Certifications
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Validated technical proficiencies
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/80 hover:border-cyan-500/40 transition-colors"
                  >
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      {cert.title}
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mt-1">
                      <span>{cert.issuer}</span>
                      <span className="font-mono text-cyan-600 dark:text-cyan-400 font-semibold">
                        {cert.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
