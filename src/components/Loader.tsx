import { motion } from "framer-motion";
import balao from "@/assets/balao-remax.png";

export function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <motion.img
        src={balao}
        alt="Carregando"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: [0.8, 1, 0.8], opacity: 1, y: [0, -10, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="h-24 w-24 drop-shadow-[0_10px_30px_rgba(255,0,0,0.4)]"
      />
    </motion.div>
  );
}
