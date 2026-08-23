import React from 'react';
import { KeyRound } from 'lucide-react';
import { Language, Translations } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
  onOpenInvestorModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, t, onOpenInvestorModal }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#08090d]/80 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Stealth indicator */}
        <div className="flex items-center gap-4">
          <a href="#" className="group flex items-center gap-3">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-surface border border-surface-border group-hover:border-cyan-500/50 transition-all duration-300 shadow-[0_0_15px_rgba(56,189,248,0.1)]">
              <svg className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping opacity-75" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-widest text-white font-mono flex items-center gap-1.5">
                SMANIT<span className="text-cyan-400 text-sm">.</span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase -mt-1 hidden sm:inline-block">
                SYSTEMS
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>{t.meta.statusBadge}</span>
          </div>
        </div>

        {/* Right Navigation Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Language Switcher */}
          <div className="flex items-center bg-surface border border-white/10 rounded-lg p-1 text-xs font-mono">
            <button
              onClick={() => setLang('fr')}
              className={`px-2.5 py-1 rounded transition-all ${
                lang === 'fr'
                  ? 'bg-cyan-500/20 text-cyan-300 font-semibold shadow-sm border border-cyan-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              FR
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-1 rounded transition-all ${
                lang === 'en'
                  ? 'bg-cyan-500/20 text-cyan-300 font-semibold shadow-sm border border-cyan-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          {/* Access Modal Trigger */}
          <button
            onClick={onOpenInvestorModal}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono text-slate-300 bg-surface hover:bg-white/5 border border-white/10 hover:border-cyan-500/40 transition-all duration-200 group"
          >
            <KeyRound className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-12 transition-transform" />
            <span className="hidden sm:inline">{t.nav.requestAccess}</span>
            <span className="sm:hidden">Accès</span>
          </button>
        </div>

      </div>
    </header>
  );
};
