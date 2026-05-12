import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Background } from "@/components/Background";
import { Profile } from "@/components/Profile";
import { SocialLinks } from "@/components/SocialLinks";
import { Footer } from "@/components/Footer";
import { Loader } from "@/components/Loader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wener Silva | Corretor RE/MAX em Ribeirão Preto" },
      { name: "description", content: "Especialista em imóveis em Ribeirão Preto e região. Compre, venda e invista com um corretor RE/MAX de confiança." },
      { property: "og:title", content: "Wener Silva | Corretor RE/MAX" },
      { property: "og:description", content: "Especialista em imóveis em Ribeirão Preto e região." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <Background />
      <main className="relative mx-auto flex min-h-screen w-full max-w-md flex-col px-5 py-10 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass rounded-3xl p-6 md:p-8 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
        >
          <Profile />
          <SocialLinks />
        </motion.div>
        <Footer />
      </main>
    </>
  );
}
