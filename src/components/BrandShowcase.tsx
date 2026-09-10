import React, { useState } from 'react';

export const BrandShowcase: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-between z-10 select-none px-6 py-12 sm:py-16 overflow-hidden">
      
      {/* Discreet top status */}
      <header className="w-full max-w-5xl flex items-center justify-end text-[11px] font-mono tracking-widest text-slate-500">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80 animate-pulse" />
          <span className="text-slate-500 text-[10px]">SMN-01</span>
        </div>
      </header>

      {/* Main Center Stage: Pure SMANIT Wordmark with subtle human N anchor */}
      <main 
        className="flex flex-col items-center justify-center text-center my-auto cursor-default group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        
        {/* The Wordmark SMANIT */}
        <div 
          className="relative flex items-center justify-center tracking-[0.12em] sm:tracking-[0.16em] md:tracking-[0.2em] text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase text-white drop-shadow-[0_12px_30px_rgba(0,0,0,0.9)] transition-all duration-500 group-hover:scale-[1.01]"
          style={{
            fontFamily: '"Syne", "Outfit", -apple-system, BlinkMacSystemFont, sans-serif',
            fontWeight: 900,
          }}
        >
          {/* SMA */}
          <span className="text-slate-100 transition-colors duration-300">
            SMA
          </span>

          {/* N (accent ambre subtil, point focal) */}
          <span className="relative inline-flex flex-col items-center mx-1 sm:mx-2 text-amber-400">
            <span className="relative z-10 drop-shadow-[0_0_20px_rgba(245,158,11,0.4)]">
              N
            </span>
            {/* Discret soulignement */}
            <span 
              className="absolute -bottom-2 sm:-bottom-3 h-[2.5px] rounded-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-500"
              style={{
                width: isHovered ? '100%' : '50%',
                boxShadow: '0 0 10px rgba(245, 158, 11, 0.6)',
              }}
            />
          </span>

          {/* IT */}
          <span className="text-slate-100 transition-colors duration-300">
            IT
          </span>
        </div>

        {/* Minimal sub-line */}
        <div className="mt-8 sm:mt-10 text-[10px] sm:text-xs font-mono tracking-[0.4em] text-slate-500 uppercase font-medium">
          <span>smanit.com</span>
        </div>

      </main>

      {/* Minimal Footer */}
      <footer className="w-full max-w-5xl flex items-center justify-between text-[11px] font-mono text-slate-500 border-t border-white/[0.03] pt-6">
        <div>
          &copy; {new Date().getFullYear()} SMANIT
        </div>
        <div className="text-slate-500 text-[10px] tracking-wider">
          STEALTH
        </div>
      </footer>

    </div>
  );
};
