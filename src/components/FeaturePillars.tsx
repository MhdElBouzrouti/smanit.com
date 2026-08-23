import React from 'react';
import { Cpu, Zap, ShieldCheck, Layers, ArrowUpRight } from 'lucide-react';
import { Translations } from '../types';

interface FeaturePillarsProps {
  t: Translations;
}

export const FeaturePillars: React.FC<FeaturePillarsProps> = ({ t }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'core':
        return <Cpu className="w-6 h-6 text-cyan-400" />;
      case 'speed':
        return <Zap className="w-6 h-6 text-indigo-400" />;
      case 'security':
        return <ShieldCheck className="w-6 h-6 text-purple-400" />;
      default:
        return <Layers className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section className="py-20 sm:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-white/10 text-slate-400 text-xs font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>ARCHITECTURAL SPECS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            {t.pillars.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {t.pillars.subtitle}
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {t.pillars.items.map((pillar) => (
            <div
              key={pillar.id}
              className="relative rounded-2xl glass-panel p-6 sm:p-8 hover:border-cyan-500/40 transition-all duration-300 group flex flex-col justify-between hover:shadow-[0_0_30px_rgba(56,189,248,0.1)]"
            >
              {/* Card top */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-surface border border-surface-border flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner">
                    {getIcon(pillar.id)}
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400/80 tracking-widest bg-cyan-950/40 px-2.5 py-1 rounded-md border border-cyan-500/20">
                    {pillar.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              {/* Card bottom technical tag */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="truncate">{pillar.code}</span>
                <ArrowUpRight className="w-4 h-4 text-cyan-400/60 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
