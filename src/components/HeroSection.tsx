import React, { useState, useEffect } from 'react';
import { ChevronRight, Activity } from 'lucide-react';
import { Translations } from '../types';

interface HeroSectionProps {
  t: Translations;
  onScrollToWaitlist: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ t, onScrollToWaitlist }) => {
  const [timeUtc, setTimeUtc] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeUtc(now.toUTCString().split(' ')[4] + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Stealth Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-surface-border mb-8 shadow-inner animate-fade-in">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono text-slate-300 uppercase tracking-wider">
            {t.hero.preTitle}
          </span>
          <span className="text-slate-600">|</span>
          <span className="text-[11px] font-mono text-cyan-400">
            {timeUtc || '00:00:00 UTC'}
          </span>
        </div>

        {/* Main Headline with subtle gradient glow */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight sm:leading-none mb-6">
          <span>{t.hero.titleMain} </span>
          <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent underline decoration-cyan-500/30 decoration-wavy decoration-1">
            {t.hero.titleHighlight}
          </span>
        </h1>

        {/* Mysterious Description */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-10">
          {t.hero.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={onScrollToWaitlist}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-medium shadow-[0_0_25px_rgba(56,189,248,0.3)] hover:shadow-[0_0_35px_rgba(99,102,241,0.5)] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>{t.waitlist.button}</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#system-feed"
            className="w-full sm:w-auto px-6 py-4 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-white/20 transition-all duration-300 font-mono text-xs flex items-center justify-center gap-2"
          >
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            <span>EXAMINER LA TÉLÉMÉTRIE</span>
          </a>
        </div>

        {/* Cryptic Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {t.hero.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="glass-panel p-4 rounded-xl text-left border border-white/5 hover:border-cyan-500/30 transition-all group"
            >
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1 flex items-center justify-between">
                <span>{metric.label}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors" />
              </div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-white group-hover:text-cyan-300 transition-colors">
                {metric.value}
              </div>
              <div className="text-[11px] text-slate-400 truncate mt-1">
                {metric.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
