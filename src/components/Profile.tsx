import { motion } from "framer-motion";
import profile from "@/assets/perfil.jpg";

export function Profile() {
  return (
    <div className="flex flex-col items-center text-center">
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative"
      >
        <div className="absolute inset-0 -m-1 rounded-full bg-gradient-to-tr from-[var(--remax-red)] via-white to-[var(--remax-blue)] blur-md opacity-70" />
        <div className="relative rounded-full p-[3px] bg-gradient-to-tr from-[var(--remax-red)] via-white to-[var(--remax-blue)]">
          <img
            src={profile}
            alt="Foto do corretor"
            width={140}
            height={140}
            className="h-32 w-32 md:h-36 md:w-36 rounded-full object-cover border-4 border-background"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-5 flex items-center gap-2"
      >
        <span className="inline-block h-2 w-2 rounded-full bg-[var(--remax-red)] shadow-[0_0_12px_var(--remax-red)]" />
        <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">RE/MAX</span>  {/*• CRECI 00000 */}
      </motion.div>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-gradient"
      >
        Wener Silva
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-2 max-w-sm text-sm md:text-base text-muted-foreground"
      >
        Especialista em imóveis em Ribeirão Preto e região
      </motion.p>
    </div>
  );
}
