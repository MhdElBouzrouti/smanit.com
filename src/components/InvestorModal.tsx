import React, { useState } from 'react';
import { X, Lock, KeyRound, CheckCircle2, AlertTriangle, Send } from 'lucide-react';
import { Translations } from '../types';

interface InvestorModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: Translations;
}

export const InvestorModal: React.FC<InvestorModalProps> = ({ isOpen, onClose, t }) => {
  const [tokenInput, setTokenInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formSent, setFormSent] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    entity: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tokenInput.trim().toUpperCase() === 'SMANIT-ALPHA' || tokenInput.trim().toUpperCase() === 'STEALTH-2026') {
      alert('Clé maître reconnue. Redirection vers le portail sécurisé...');
      onClose();
    } else {
      setErrorMessage(t.investorModal.invalidKey);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      // simulate sent
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg rounded-2xl glass-panel-glow p-6 sm:p-8 bg-[#0b0d14] border border-white/10 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center">
            <Lock className="w-5 h-5 text-cyan-400" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">
              {t.investorModal.title}
            </h3>
            <p className="text-xs text-slate-400">
              {t.investorModal.subtitle}
            </p>
          </div>
        </div>

        <div className="h-px bg-white/10 my-5" />

        {/* Section 1: Direct Key Entry */}
        <form onSubmit={handleKeySubmit} className="mb-6">
          <label className="block text-xs font-mono text-slate-300 mb-2">
            {t.investorModal.accessKeyLabel}
          </label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <KeyRound className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                value={tokenInput}
                onChange={(e) => {
                  setTokenInput(e.target.value);
                  setErrorMessage('');
                }}
                placeholder={t.investorModal.accessKeyPlaceholder}
                className="w-full pl-9 pr-3 py-2 rounded-lg glass-input text-white text-xs font-mono placeholder-slate-600 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-white/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:border-cyan-500/50 rounded-lg text-xs font-mono transition-all"
            >
              {t.investorModal.unlockButton}
            </button>
          </div>
          {errorMessage && (
            <div className="mt-2 text-[11px] text-rose-400 flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}
        </form>

        {/* Section 2: Request Token Form */}
        <div className="border-t border-white/5 pt-4">
          <p className="text-xs font-mono text-slate-400 mb-3">
            {t.investorModal.orInquiry}
          </p>

          {!formSent ? (
            <form onSubmit={handleFormSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t.investorModal.namePlaceholder}
                  className="w-full px-3 py-2 rounded-lg glass-input text-white text-xs placeholder-slate-600 focus:outline-none"
                />
                <input
                  type="text"
                  required
                  value={formData.entity}
                  onChange={(e) => setFormData({ ...formData, entity: e.target.value })}
                  placeholder={t.investorModal.entityPlaceholder}
                  className="w-full px-3 py-2 rounded-lg glass-input text-white text-xs placeholder-slate-600 focus:outline-none"
                />
              </div>

              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder={t.investorModal.emailPlaceholder}
                className="w-full px-3 py-2 rounded-lg glass-input text-white text-xs placeholder-slate-600 focus:outline-none"
              />

              <textarea
                rows={2}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={t.investorModal.messagePlaceholder}
                className="w-full px-3 py-2 rounded-lg glass-input text-white text-xs placeholder-slate-600 focus:outline-none resize-none"
              />

              <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-cyan-600/30 hover:bg-cyan-600/50 border border-cyan-500/40 text-cyan-200 text-xs font-mono flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{t.investorModal.submitInquiry}</span>
              </button>
            </form>
          ) : (
            <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-center">
              <CheckCircle2 className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
              <p className="text-xs text-slate-200 leading-relaxed">
                {t.investorModal.successMessage}
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
