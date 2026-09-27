import React, { useState, useEffect } from 'react';
import { personalInfo, socialLinks } from '../data/portfolioData';
import {
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Sparkles,
  Terminal,
  CheckCircle2,
  FileText,
} from 'lucide-react';

export const Hero: React.FC = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % personalInfo.titles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const getSocialIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'github':
        return <Github className="w-5 h-5" />;
      case 'linkedin':
        return <Linkedin className="w-5 h-5" />;
      case 'mail':
        return <Mail className="w-5 h-5" />;
      case 'twitter':
        return <Twitter className="w-5 h-5" />;
      default:
        return <Mail className="w-5 h-5" />;
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-indigo-500/10 dark:bg-purple-500/15 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Introductions & CTAs */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/25 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm font-medium">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.status}</span>
            </div>

            {/* Name & Animated Title */}
            <div className="space-y-3">
              <p className="text-sm sm:text-base font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold">
                Hi there, I'm
              </p>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {personalInfo.name}
              </h1>
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient">
                  {personalInfo.titles[currentTitleIndex]}
                </span>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {personalInfo.tagline} — turning complex engineering challenges into seamless, accessible, and high-performance digital experiences.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-cyan-500" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Links Row */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Connect with me:
              </span>
              <div className="flex items-center gap-2.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-950/40 border border-slate-200 dark:border-slate-700/60 transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
                  >
                    {getSocialIcon(social.icon)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Code Terminal Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-dark-surface/90 backdrop-blur-xl animate-float">
              {/* Terminal Header */}
              <div className="px-4 py-3 bg-slate-100 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="ml-2 text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5" />
                    developer.config.ts
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                  <CheckCircle2 className="w-3 h-3" />
                  Compiled
                </div>
              </div>

              {/* Code Snippet Content */}
              <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-slate-800 dark:text-slate-200">
                <div className="text-slate-400 dark:text-slate-500 mb-2">
                  // Engineer Profile Manifest
                </div>
                <div>
                  <span className="text-purple-600 dark:text-purple-400 font-semibold">const</span>{' '}
                  <span className="text-cyan-600 dark:text-cyan-400 font-semibold">developer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-slate-600 dark:text-slate-300">name:</span>{' '}
                  <span className="text-emerald-600 dark:text-emerald-400">'Harsh Singh'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-600 dark:text-slate-300">role:</span>{' '}
                  <span className="text-emerald-600 dark:text-emerald-400">'Full Stack Software Engineer'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-600 dark:text-slate-300">stack:</span> [
                  <span className="text-amber-600 dark:text-amber-300">'React'</span>,{' '}
                  <span className="text-amber-600 dark:text-amber-300">'TypeScript'</span>,{' '}
                  <span className="text-amber-600 dark:text-amber-300">'Node.js'</span>,{' '}
                  <span className="text-amber-600 dark:text-amber-300">'Next.js'</span>,{' '}
                  <span className="text-amber-600 dark:text-amber-300">'Python'</span>],
                </div>
                <div className="pl-4">
                  <span className="text-slate-600 dark:text-slate-300">databases:</span> [
                  <span className="text-teal-600 dark:text-teal-300">'PostgreSQL'</span>,{' '}
                  <span className="text-teal-600 dark:text-teal-300">'MongoDB'</span>,{' '}
                  <span className="text-teal-600 dark:text-teal-300">'Redis'</span>],
                </div>
                <div className="pl-4">
                  <span className="text-slate-600 dark:text-slate-300">architecture:</span>{' '}
                  <span className="text-emerald-600 dark:text-emerald-400">'Distributed & Microservices'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-600 dark:text-slate-300">lovesBuilding:</span> [
                  <span className="text-amber-600 dark:text-amber-300">'Fast Web Apps'</span>,{' '}
                  <span className="text-amber-600 dark:text-amber-300">'Scalable APIs'</span>],
                </div>
                <div className="pl-4">
                  <span className="text-slate-600 dark:text-slate-300">openToWork:</span>{' '}
                  <span className="text-cyan-500 font-bold">true</span>,
                </div>
                <div>&#125;;</div>
                <div className="mt-3 text-cyan-600 dark:text-cyan-400 flex items-center gap-1 font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>export default developer;</span>
                </div>
              </div>

              {/* Quick highlight bar */}
              <div className="px-5 py-2.5 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-cyan-500" />
                  Clean Architecture & High Performance
                </span>
                <span className="font-mono text-[11px] text-slate-400">UTF-8</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
