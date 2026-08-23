import React, { useState, useEffect } from 'react';
import { Mail, CheckCircle2, ShieldAlert, Copy, Check, Lock } from 'lucide-react';
import { Translations } from '../types';

interface WaitlistFormProps {
  t: Translations;
}

export const WaitlistForm: React.FC<WaitlistFormProps> = ({ t }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [userRank, setUserRank] = useState<string>('');
  const [userToken, setUserToken] = useState<string>('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Check if user already joined
    const savedToken = localStorage.getItem('smanit_waitlist_token');
    const savedRank = localStorage.getItem('smanit_waitlist_rank');
    if (savedToken && savedRank) {
      setUserToken(savedToken);
      setUserRank(savedRank);
      setIsSuccess(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setIsSubmitting(true);

    setTimeout(() => {
      // Generate a realistic cryptographic queue token
      const rankNum = Math.floor(Math.random() * 200) + 720;
      const rankFormatted = `#0${rankNum}`;
      const token = `SMN-${Math.random().toString(36).substring(2, 6).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

      localStorage.setItem('smanit_waitlist_email', email);
      localStorage.setItem('smanit_waitlist_rank', rankFormatted);
      localStorage.setItem('smanit_waitlist_token', token);

      setUserRank(rankFormatted);
      setUserToken(token);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleCopyToken = () => {
    if (!userToken) return;
    navigator.clipboard.writeText(userToken);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="waitlist-section" className="py-20 sm:py-28 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl glass-panel-glow p-8 sm:p-14 overflow-hidden text-center">
          
          {/* Subtle Ambient lights inside container */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-6">
            <Lock className="w-3.5 h-3.5" />
            <span>ACCÈS RESTREINT // AVANT-PREMIÈRE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            {t.waitlist.title}
          </h2>

          <p className="max-w-xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
            {t.waitlist.subtitle}
          </p>

          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.waitlist.placeholder}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl glass-input text-white text-sm placeholder-slate-500 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-medium text-sm shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2 shrink-0 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>{t.waitlist.submitting}</span>
                    </>
                  ) : (
                    <span>{t.waitlist.button}</span>
                  )}
                </button>
              </div>

              <div className="text-[11px] text-slate-400 font-mono flex items-center justify-center gap-2 pt-2">
                <ShieldAlert className="w-3.5 h-3.5 text-cyan-400" />
                <span>{t.waitlist.guarantee}</span>
              </div>
            </form>
          ) : (
            <div className="max-w-md mx-auto p-6 rounded-2xl bg-cyan-950/30 border border-cyan-500/40 text-left animate-fade-in">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                <h4 className="text-white font-bold text-base">
                  {t.waitlist.successTitle}
                </h4>
              </div>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                {t.waitlist.successMessage}
              </p>

              {/* Rank & Token Voucher */}
              <div className="p-3.5 rounded-xl bg-black/50 border border-white/10 flex items-center justify-between font-mono text-xs mb-3">
                <div>
                  <div className="text-[10px] text-slate-400 uppercase">{t.waitlist.queuePrefix}</div>
                  <div className="text-cyan-400 font-bold text-sm">{userRank}</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-slate-400 uppercase">ACCESS TOKEN</div>
                  <div className="text-slate-200 font-semibold">{userToken}</div>
                </div>
              </div>

              <button
                onClick={handleCopyToken}
                className="w-full py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-xs font-mono flex items-center justify-center gap-2 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Clé copiée dans le presse-papier !</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Copier la clé de référence</span>
                  </>
                )}
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
