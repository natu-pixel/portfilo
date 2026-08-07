"use client";

import { useState, useEffect, useRef } from "react";
import { Terminal, Play, Square, RefreshCw, CheckCircle, ShieldAlert, Zap } from "lucide-react";

const sampleLogs = [
  { type: "sys", text: "[SYS] Initializing WebSockets connection to Binance & DEX order books..." },
  { type: "sys", text: "[SYS] Connection established (latency: 18ms). Subscribing to BTC/USDT & ETH/USDT streams." },
  { type: "info", text: "[MARKET] BTC/USDT Bid: $67,420.50 | Ask: $67,421.10 (Volume 24h: 18.4K BTC)" },
  { type: "calc", text: "[ALGO] Evaluating RSI(14) = 32.4 (Oversold condition detected). Preparing buy signal." },
  { type: "order", text: "[EXEC] Placing LIMIT BUY order #89421 @ $67,420.50 [Qty: 0.15 BTC]" },
  { type: "success", text: "[CONFIRM] Order #89421 FILLED in 32ms. Execution Price: $67,420.50" },
  { type: "calc", text: "[RISK] Trailing stop-loss set to $66,950.00 (-0.70%). Profit Target: $68,100.00 (+1.00%)" },
  { type: "info", text: "[MARKET] Price surge detected. BTC/USDT: $68,105.00 (+1.02%)" },
  { type: "success", text: "[PROFIT] Take-profit target reached! Sell order executed. Net profit: +$102.67 (+1.01%)" },
  { type: "sys", text: "[SYS] Bot engine active. Listening for high-probability liquidity setups..." },
];

export default function BotSandbox() {
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState<string[]>([
    "[SYS] Algorithmic Bot Terminal ready.",
    "[SYS] Click 'Run Strategy Simulation' below to see real-time order book execution logs."
  ]);
  const logEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      let logIndex = 0;
      interval = setInterval(() => {
        const nextLog = sampleLogs[logIndex % sampleLogs.length];
        const timestamp = new Date().toISOString().split("T")[1].slice(0, 8);
        setLogs((prev) => [...prev, `[${timestamp}] ${nextLog.text}`]);
        logIndex++;
      }, 1200);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const toggleRun = () => {
    if (!isRunning) {
      setLogs((prev) => [...prev, `[${new Date().toISOString().split("T")[1].slice(0, 8)}] [SYS] Starting Automated Strategy Loop...`]);
    }
    setIsRunning(!isRunning);
  };

  const clearLogs = () => {
    setLogs(["[SYS] Terminal cleared."]);
  };

  return (
    <div className="w-full rounded-2xl bg-neutral-950 border border-neutral-800 overflow-hidden shadow-xl my-6">
      {/* Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-neutral-900 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <span className="text-xs font-mono text-neutral-400 flex items-center gap-1.5 ml-2">
            <Terminal className="w-3.5 h-3.5 text-blue-400" /> Bot Execution Sandbox Terminal
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleRun}
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-semibold transition-colors ${
              isRunning
                ? "bg-amber-500/20 text-amber-400 border border-amber-500/40 hover:bg-amber-500/30"
                : "bg-blue-600 hover:bg-blue-500 text-white"
            }`}
          >
            {isRunning ? <Square className="w-3 h-3 fill-current" /> : <Play className="w-3 h-3 fill-current" />}
            {isRunning ? "Stop Simulation" : "Run Strategy Simulation"}
          </button>

          <button
            onClick={clearLogs}
            className="p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors"
            title="Clear Logs"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Terminal Output Screen */}
      <div className="p-4 h-56 overflow-y-auto font-mono text-xs text-neutral-300 space-y-1.5 bg-neutral-950">
        {logs.map((log, i) => (
          <div
            key={i}
            className={`${
              log.includes("[CONFIRM]") || log.includes("[PROFIT]")
                ? "text-emerald-400 font-semibold"
                : log.includes("[EXEC]") || log.includes("[ALGO]")
                ? "text-blue-400"
                : log.includes("[RISK]")
                ? "text-amber-400"
                : "text-neutral-400"
            }`}
          >
            {log}
          </div>
        ))}
        <div ref={logEndRef} />
      </div>

      {/* Footer Info Bar */}
      <div className="px-4 py-2 bg-neutral-900/60 border-t border-neutral-800 flex items-center justify-between text-[11px] font-mono text-neutral-500">
        <span className="flex items-center gap-1.5">
          <Zap className="w-3 h-3 text-blue-400" /> Sub-50ms Execution Latency
        </span>
        <span className="flex items-center gap-1.5">
          <CheckCircle className="w-3 h-3 text-emerald-400" /> WebSockets Connected
        </span>
      </div>
    </div>
  );
}
