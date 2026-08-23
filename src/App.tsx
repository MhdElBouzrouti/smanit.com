import React, { useState } from 'react';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SystemTerminal } from './components/SystemTerminal';
import { FeaturePillars } from './components/FeaturePillars';
import { WaitlistForm } from './components/WaitlistForm';
import { InvestorModal } from './components/InvestorModal';
import { Footer } from './components/Footer';
import { translations } from './data/translations';
import { Language } from './types';

export const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('fr');
  const [isInvestorModalOpen, setIsInvestorModalOpen] = useState(false);

  const t = translations[lang];

  const scrollToWaitlist = () => {
    const el = document.getElementById('waitlist-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#08090d] text-slate-100 flex flex-col font-sans overflow-x-hidden selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Dynamic Background Canvas */}
      <BackgroundCanvas />

      {/* Top Navigation */}
      <Navbar
        lang={lang}
        setLang={setLang}
        t={t}
        onOpenInvestorModal={() => setIsInvestorModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        <HeroSection t={t} onScrollToWaitlist={scrollToWaitlist} />
        <SystemTerminal t={t} />
        <FeaturePillars t={t} />
        <WaitlistForm t={t} />
      </main>

      {/* Footer */}
      <Footer
        t={t}
        onOpenInvestorModal={() => setIsInvestorModalOpen(true)}
      />

      {/* Investor / Private Key Modal */}
      <InvestorModal
        isOpen={isInvestorModalOpen}
        onClose={() => setIsInvestorModalOpen(false)}
        t={t}
      />
    </div>
  );
};

export default App;
