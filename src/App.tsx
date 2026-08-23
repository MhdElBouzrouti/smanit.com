import React from 'react';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { BrandShowcase } from './components/BrandShowcase';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#07080c] overflow-hidden flex items-center justify-center">
      <BackgroundCanvas />
      <BrandShowcase />
    </div>
  );
};

export default App;
