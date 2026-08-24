"use client";

import { useState, useEffect, useRef } from "react";
import { Play, Square, RefreshCw, Terminal, Zap, ShieldAlert, BarChart2, DollarSign } from "lucide-react";

const strategyLogs: Record<string, string[]> = {
  Arbitrage: [
    "[WEBSOCKET] Connected to Binance & Bybit Mempools...",
    "[SCANNER] Price Discrepancy Detected: BTC/USDT +0.42%",
    "[CHECK] Flash Loan Gas Estimation: 0.0012 ETH (Profitable)",
    "[EXEC] Transacting Atomic Swap via Smart Contract...",
    "[CONFIRM] Flash Loan Repaid. Net Arbitrage Profit: +$412.80 USDT",
  ],
  Scalping: [
    "[FEED] Sub-20ms Tick Ingestion Active...",
    "[INDICATOR] RSI (14) = 28.4 (Oversold), MACD Crossover confirmed.",
    "[ORDER] Placing Limit Buy Order @ $64,210.50...",
    "[FILLED] Position opened. Setting Trailing Stop-Loss @ 0.3%.",
    "[PROFIT] Target Met! Position Closed. Return: +1.85%",
  ],
  TrendFollowing: [
    "[DATA] 4H Exponential Moving Average (EMA 50 > EMA 200) Golden Cross.",
    "[RISK] Position Sizing calculated at 2% total equity risk.",
    "[ALGO] Buying Breakout Channel @ $64,500...",
    "[MONITOR] Trailing Stop-Loss adjusting dynamically...",
    "[LOG] Trailing Stop Hit @ $65,890. Profit Locked: +$1,390.00",
  ],
};

export default function BotSandbox() {
  const [strategy, setStrategy] = useState<"Arbitrage" | "Scalping" | "TrendFollowing">("Arbitrage");
  const [isRunning, setIsRunning] = useState(true);
  const [riskLevel, setRiskLevel] = useState(2);
  const [latency, setLatency] = useState(14);
  const [logs, setLogs] = useState<string[]>([
    "[SYS] Algorithmic Bot Kernel Initialized.",
    "[SYS] Sub-20ms WebSocket Connection Established.",
  ]);

  const terminalBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      let logIndex = 0;
      const currentLogs = strategyLogs[strategy];
      interval = setInterval(() => {
        const nextLog = currentLogs[logIndex % currentLogs.length];
        const timestamp = new Date().toISOString().split("T")[1].slice(0, 8);
        setLogs((prev) => [...prev, `[${timestamp}] ${nextLog}`]);
        setLatency(Math.floor(Math.random() * 8) + 12); // Random 12-20ms latency
        logIndex++;
      }, 1200);
    }
    return () => clearInterval(interval);
  }, [isRunning, strategy]);

  useEffect(() => {
    if (terminalBoxRef.current) {
      terminalBoxRef.current.scrollTop = terminalBoxRef.current.scrollHeight;
    }
  }, [logs]);

  const toggleRun = () => {
    if (!isRunning) {
      setLogs((prev) => [...prev, `[${new Date().toISOString().split("T")[1].slice(0, 8)}] [SYS] Resuming ${strategy} Strategy Loop...`]);
    }
    setIsRunning(!isRunning);
  };

  const clearLogs = () => {
    setLogs(["[SYS] Terminal cleared."]);
  };

  const executeManualTrade = () => {
    const timestamp = new Date().toISOString().split("T")[1].slice(0, 8);
    setLogs((prev) => [
      ...prev,
      `[${timestamp}] [MANUAL] Instant Order Triggered by User. Executing ${strategy} @ Risk Factor ${riskLevel}x...`,
      `[${timestamp}] [CONFIRM] Order Executed Successfully! Latency: ${latency}ms`,
    ]);
  };

  return (
    <div className="w-full rounded-3xl bg-neutral-950 border border-neutral-800 overflow-hidden shadow-2xl my-6">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-neutral-900 border-b border-neutral-800 gap-4">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <span className="text-xs font-mono text-neutral-300 flex items-center gap-1.5 font-bold">
            <Terminal className="w-4 h-4 text-blue-400" /> Interactive Live Trading Bot Sandbox
          </span>
        </div>

        {/* Strategy Selector Tabs */}
        <div className="flex items-center gap-2 bg-neutral-950 p-1 rounded-xl border border-neutral-800">
          {(["Arbitrage", "Scalping", "TrendFollowing"] as const).map((strat) => (
            <button
              key={strat}
              onClick={() => {
                setStrategy(strat);
                setLogs((prev) => [...prev, `[SYS] Switched Active Strategy to ${strat}`]);
              }}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-colors ${
                strategy === strat
                  ? "bg-blue-600 text-white font-semibold"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {strat}
            </button>
          ))}
        </div>
      </div>

      {/* Control & Risk Panel */}
      <div className="px-4 py-3 bg-neutral-900/60 border-b border-neutral-800/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
        <div className="flex items-center gap-4">
          <button
            onClick={toggleRun}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-colors ${
              isRunning
                ? "bg-amber-500/20 text-amber-400 border border-amber-500/40 hover:bg-amber-500/30"
                : "bg-blue-600 hover:bg-blue-500 text-white"
            }`}
          >
            {isRunning ? <Square className="w-3 h-3 fill-current" /> : <Play className="w-3 h-3 fill-current" />}
            {isRunning ? "Pause Engine" : "Start Engine"}
          </button>

          <button
            onClick={executeManualTrade}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors"
          >
            <DollarSign className="w-3.5 h-3.5" /> Execute Test Trade
          </button>

          <button
            onClick={clearLogs}
            className="p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors"
            title="Clear Terminal Logs"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Risk Slider & Latency Indicator */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-neutral-400">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
            <span>Risk Multiplier: <strong className="text-white">{riskLevel}x</strong></span>
            <input
              type="range"
              min="1"
              max="5"
              value={riskLevel}
              onChange={(e) => setRiskLevel(Number(e.target.value))}
              className="w-16 accent-blue-500 cursor-pointer"
            />
          </div>

          <div className="flex items-center gap-1.5 text-emerald-400">
            <Zap className="w-3.5 h-3.5" />
            <span>{latency}ms Latency</span>
          </div>
        </div>
      </div>

      {/* Terminal Output Screen */}
      <div ref={terminalBoxRef} className="p-4 h-64 overflow-y-auto font-mono text-xs text-neutral-300 space-y-2 bg-neutral-950">
        {logs.map((log, i) => (
          <div
            key={i}
            className={`${
              log.includes("[CONFIRM]") || log.includes("[PROFIT]")
                ? "text-emerald-400 font-semibold"
                : log.includes("[EXEC]") || log.includes("[ALGO]") || log.includes("[MANUAL]")
                ? "text-blue-400"
                : log.includes("[RISK]") || log.includes("[CHECK]")
                ? "text-amber-400"
                : "text-neutral-400"
            }`}
          >
            {log}
          </div>
        ))}
      </div>

      {/* Footer Live Order Book Depth Bar */}
      <div className="px-4 py-2.5 bg-neutral-900 border-t border-neutral-800 flex flex-wrap items-center justify-between text-[11px] font-mono text-neutral-400">
        <span className="flex items-center gap-2">
          <BarChart2 className="w-3.5 h-3.5 text-blue-400" /> Simulated Order Book Depth: <strong className="text-emerald-400">BID $64,210.50</strong> / <strong className="text-red-400">ASK $64,211.20</strong>
        </span>
        <span className="text-neutral-500 hidden sm:inline">Engine: WebSockets + Python AsyncIO</span>
      </div>

    </div>
  );
}
