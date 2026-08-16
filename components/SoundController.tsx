"use client";

import { useState, useEffect, createContext, useContext, ReactNode } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface SoundContextType {
  isMuted: boolean;
  toggleMute: () => void;
  playHoverSound: () => void;
  playClickSound: () => void;
}

const SoundContext = createContext<SoundContextType>({
  isMuted: true,
  toggleMute: () => {},
  playHoverSound: () => {},
  playClickSound: () => {},
});

export const useSound = () => useContext(SoundContext);

export function SoundProvider({ children }: { children: ReactNode }) {
  const [isMuted, setIsMuted] = useState(true);
  const [audioCtx, setAudioCtx] = useState<AudioContext | null>(null);

  useEffect(() => {
    // Lazy initialize Web Audio API context on user interaction
    const initAudio = () => {
      if (!audioCtx && typeof window !== "undefined") {
        const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
        setAudioCtx(ctx);
      }
    };

    window.addEventListener("click", initAudio, { once: true });
    return () => window.removeEventListener("click", initAudio);
  }, [audioCtx]);

  const playHoverSound = () => {
    if (isMuted || !audioCtx) return;
    try {
      if (audioCtx.state === "suspended") audioCtx.resume();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(440, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.015, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.05);
    } catch {
      // Ignore audio context errors
    }
  };

  const playClickSound = () => {
    if (isMuted || !audioCtx) return;
    try {
      if (audioCtx.state === "suspended") audioCtx.resume();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(600, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.03, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.08);
    } catch {
      // Ignore audio context errors
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (isMuted && audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume();
    }
  };

  return (
    <SoundContext.Provider value={{ isMuted, toggleMute, playHoverSound, playClickSound }}>
      {children}
    </SoundContext.Provider>
  );
}

export default function SoundToggleButton() {
  const { isMuted, toggleMute } = useSound();

  return (
    <button
      onClick={toggleMute}
      aria-label={isMuted ? "Unmute UI Sound Effects" : "Mute UI Sound Effects"}
      className="p-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 text-neutral-700 transition-all flex items-center gap-1.5 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-blue-600"
    >
      {isMuted ? <VolumeX className="w-4 h-4 text-neutral-400" /> : <Volume2 className="w-4 h-4 text-blue-600 animate-pulse" />}
      <span className="hidden sm:inline">{isMuted ? "Sound OFF" : "Sound ON"}</span>
    </button>
  );
}
