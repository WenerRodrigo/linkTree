import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4, duration: 0.6 }}
      className="mt-10 text-center text-xs text-muted-foreground"
    >
      <div className="mx-auto mb-3 h-px w-16 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <p>Desenvolvido com tecnologia e inovação</p>
      <p className="mt-1 opacity-60">© {new Date().getFullYear()} Wener Silva • RE/MAX</p>
    </motion.footer>
  );
}
