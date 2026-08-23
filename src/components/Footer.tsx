import React from 'react';
import { Shield, Radio, ArrowUp } from 'lucide-react';
import { Translations } from '../types';

interface FooterProps {
  t: Translations;
  onOpenInvestorModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ t, onOpenInvestorModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 bg-[#06070a] py-12 relative z-10 text-xs font-mono text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          
          {/* SMANIT brand indicator */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-white tracking-widest">
              SMANIT<span className="text-cyan-400">.</span>COM
            </span>
            <span className="text-slate-600">|</span>
            <div className="flex items-center gap-1.5 text-slate-400">
              <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>{t.footer.stealthNotice}</span>
            </div>
          </div>

          {/* Quick discrete links */}
          <div className="flex items-center gap-6 text-slate-400">
            <button
              onClick={onOpenInvestorModal}
              className="hover:text-cyan-300 transition-colors"
            >
              RELATIONS INVESTISSEURS
            </button>
            <a
              href="#waitlist-section"
              className="hover:text-cyan-300 transition-colors"
            >
              AVANT-PREMIÈRE
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>HAUT</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} SMANIT Inc. {t.footer.rights}
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>{t.footer.location}</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-slate-400">
              <Shield className="w-3 h-3 text-cyan-500/70" />
              {t.footer.securityNote}
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
