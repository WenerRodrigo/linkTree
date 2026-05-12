import { motion } from "framer-motion";
import balao from "@/assets/balao-remax.png";

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(0.28_0.08_265)_0%,_oklch(0.12_0.03_260)_55%,_oklch(0.08_0.02_260)_100%)]" />

      {/* RE/MAX color blobs */}
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[var(--remax-blue)] opacity-25 blur-[120px] animate-pulse-glow" />
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[var(--remax-red)] opacity-20 blur-[140px] animate-pulse-glow" />
      <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[100px]" />

      {/* RE/MAX Balloon */}
      <motion.img
        src={balao}
        alt=""
        aria-hidden
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 0.18, y: 0 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute right-[-60px] top-10 w-[280px] md:w-[420px] md:right-[8%] md:top-[6%] animate-float select-none pointer-events-none drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
      />
      <motion.img
        src={balao}
        alt=""
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 2, delay: 0.4 }}
        className="absolute left-[-80px] bottom-10 w-[200px] md:w-[300px] md:left-[5%] animate-float select-none pointer-events-none"
        style={{ animationDelay: "2s" }}
      />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(oklch(1_0_0)_1px,transparent_1px),linear-gradient(90deg,oklch(1_0_0)_1px,transparent_1px)] [background-size:48px_48px]" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,oklch(0.08_0.02_260)_100%)]" />
    </div>
  );
}
