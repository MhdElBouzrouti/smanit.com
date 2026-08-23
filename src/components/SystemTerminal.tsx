import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, Send } from 'lucide-react';
import { Translations } from '../types';

interface SystemTerminalProps {
  t: Translations;
}

export const SystemTerminal: React.FC<SystemTerminalProps> = ({ t }) => {
  const [logs, setLogs] = useState<string[]>(t.terminal.initialLogs);
  const [inputVal, setInputVal] = useState<string>('');
  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  // Sync initial logs when language switches
  useEffect(() => {
    setLogs(t.terminal.initialLogs);
  }, [t]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newLogs = [...logs, `> ${inputVal}`];

    switch (cmd) {
      case 'help':
        newLogs.push(...t.terminal.helpText);
        break;
      case 'status':
        newLogs.push(
          `[SYS] Cluster Status: 100% HEALTHY`,
          `[BUILD] Pipeline: COMPILING COMPONENT RUNTIME (94.2%)`,
          `[NODES] Mesh: 16 Autonomous Enclaves Active`,
          `[UPTIME] 99.999% // LATENCY: 0.28ms`
        );
        break;
      case 'mission':
        newLogs.push(...t.terminal.missionText);
        break;
      case 'decrypt':
        newLogs.push(...t.terminal.decryptSuccess);
        break;
      case 'ping':
        newLogs.push(`[PING] smanit-node-01.internal: 0.19ms (0% packet loss)`);
        break;
      case 'clear':
        setLogs([]);
        setInputVal('');
        return;
      default:
        newLogs.push(
          `[ERR] Commande non reconnue : "${inputVal}". Tapez 'help' pour la liste des commandes valides.`
        );
        break;
    }

    setLogs(newLogs);
    setInputVal('');
  };

  return (
    <section id="system-feed" className="py-16 sm:py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Terminal Frame */}
        <div className="rounded-2xl overflow-hidden glass-panel border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
          
          {/* Top Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#0e1017]/90 border-b border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
                {t.terminal.headerTitle}
              </span>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>STREAM: LIVE</span>
            </div>
          </div>

          {/* Terminal Output */}
          <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm text-slate-300 space-y-2.5 max-h-80 overflow-y-auto bg-[#08090d]/95">
            {logs.map((log, index) => {
              const isCommand = log.startsWith('>');
              const isError = log.startsWith('[ERR]');
              const isDecrypt = log.includes('>>> SMANIT');
              const isSuccess = log.includes('[DECRYPT]') || log.includes('[SECURITY]');

              return (
                <div
                  key={index}
                  className={`leading-relaxed ${
                    isCommand
                      ? 'text-cyan-400 font-semibold pl-2 border-l-2 border-cyan-500'
                      : isError
                      ? 'text-rose-400'
                      : isDecrypt
                      ? 'text-purple-300 font-bold bg-purple-950/30 p-2 rounded border border-purple-500/30'
                      : isSuccess
                      ? 'text-emerald-400'
                      : 'text-slate-300'
                  }`}
                >
                  {log}
                </div>
              );
            })}
            <div ref={terminalEndRef} />
          </div>

          {/* Terminal Input Box */}
          <form onSubmit={handleCommand} className="flex items-center gap-2 px-4 py-3 bg-[#0c0e14] border-t border-white/5">
            <span className="text-cyan-400 font-mono text-sm select-none">&gt;</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder={t.terminal.placeholder}
              className="w-full bg-transparent font-mono text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none"
            />
            <button
              type="submit"
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-300 transition-colors text-xs font-mono flex items-center gap-1"
            >
              <span>RUN</span>
              <Send className="w-3 h-3" />
            </button>
          </form>

          {/* Command helper bar */}
          <div className="px-4 py-2 bg-[#090b10] border-t border-white/5 text-[11px] font-mono text-slate-500 flex items-center justify-between">
            <span>{t.terminal.commandHint}</span>
            <span className="hidden sm:inline">SMANIT_OS v0.3.1</span>
          </div>

        </div>

      </div>
    </section>
  );
};
