import React, { useState } from 'react';

export const BrandShowcase: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center z-10 select-none px-4 overflow-hidden">
      
      {/* Subtle Ambient Cosmic Glow */}
      <div 
        className="absolute w-[600px] h-[350px] rounded-full pointer-events-none -z-10 transition-opacity duration-700"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(239,68,68,0.04) 0%, rgba(56,189,248,0.08) 35%, transparent 70%)'
        }}
      />

      {/* Main Center Stage: Refined & Balanced SMANIT Wordmark */}
      <div 
        className="relative flex flex-col items-center justify-center cursor-default group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        
        {/* The Wordmark SMANIT (Refined Size) */}
        <div 
          className="relative flex items-center tracking-[0.12em] sm:tracking-[0.16em] md:tracking-[0.2em] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase text-white drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)] transition-all duration-500 group-hover:scale-[1.02]"
          style={{
            fontFamily: '"Syne", "Outfit", -apple-system, BlinkMacSystemFont, sans-serif',
            fontWeight: 900,
          }}
        >
          {/* S M A N */}
          <span className="transition-colors duration-300">S</span>
          <span className="transition-colors duration-300">M</span>
          <span className="transition-colors duration-300">A</span>
          <span className="transition-colors duration-300">N</span>

          {/* Letter 'I' with Celestial Diamond Star */}
          <span className="relative inline-flex flex-col items-center mx-0.5 sm:mx-1">
            
            {/* Glowing 4-Point Diamond Star */}
            <div 
              className="absolute -top-3.5 sm:-top-5 md:-top-6 lg:-top-7 left-1/2 -translate-x-1/2 pointer-events-none transition-transform duration-500"
              style={{
                transform: `translateX(-50%) scale(${isHovered ? 1.25 : 1})`,
              }}
            >
              <div className="relative flex items-center justify-center">
                {/* Star Neon Cosmic Aura */}
                <div className="absolute inset-0 rounded-full bg-cyan-400 blur-md opacity-90 animate-pulse" />
                
                {/* 4-Point Star */}
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5.5 lg:h-5.5 text-cyan-300 fill-current drop-shadow-[0_0_12px_rgba(56,189,248,1)] animate-spin"
                  style={{ animationDuration: isHovered ? '4s' : '12s' }}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0L14.7 9.3L24 12L14.7 14.7L12 24L9.3 14.7L0 12L9.3 9.3L12 0Z" />
                </svg>
              </div>
            </div>

            {/* Pillar 'I' */}
            <span>I</span>
          </span>

          {/* Letter T */}
          <span className="transition-colors duration-300">T</span>
        </div>

        {/* Discreet smanit.com Sub-line */}
        <div className="mt-5 sm:mt-7 text-[10px] sm:text-xs font-mono tracking-[0.4em] text-slate-400 uppercase font-medium">
          <span>smanit.com</span>
        </div>

      </div>

    </div>
  );
};
