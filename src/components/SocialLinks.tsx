import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaLinkedinIn,
  FaYoutube,
  FaGlobe,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi2";
import type { IconType } from "react-icons";

type LinkItem = {
  label: string;
  sub?: string;
  href: string;
  Icon: IconType;
  accent: string;
};

const links: LinkItem[] = [
  { label: "WhatsApp", sub: "Atendimento direto", href: "https://wa.me/5516997606232", Icon: FaWhatsapp, accent: "#25D366" },
  { label: "Catálogo de Imóveis", sub: "Veja oportunidades selecionadas", href: "#", Icon: HiOutlineHome, accent: "var(--remax-red)" },
  { label: "Instagram", sub: "@wenerrodrigo_", href: "https://www.instagram.com/wenerrodrigo_/", Icon: FaInstagram, accent: "#E1306C" },
  { label: "TikTok", sub: "Tours e dicas", href: "https://tiktok.com", Icon: FaTiktok, accent: "#ffffff" },
  { label: "Facebook", href: "https://facebook.com", Icon: FaFacebookF, accent: "#1877F2" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/wener-silva/", Icon: FaLinkedinIn, accent: "#0A66C2" },
  { label: "YouTube", href: "https://www.youtube.com/@WenerIm%C3%B3veis", Icon: FaYoutube, accent: "#FF0000" },
  { label: "Google Maps", sub: "Ribeirão Preto - SP", href: "https://www.google.com/maps/search/R.%20Jos%C3%A9%20Sapienza%2C%20481%20-%20Jardim%20Sao%20Luiz%2C%20Ribeir%C3%A3o%20Preto%20-%20SP%2C%2014020-450%2C%20Brasil/@-21.1739,-47.8129,17z?hl=pt-BR", Icon: FaMapMarkerAlt, accent: "#4285F4" },
  { label: "Email", sub: "wenerrodrigo@remax.com.br", href: "mailto:wenerrodrigo@remax.com.br", Icon: FaEnvelope, accent: "#ffffff" },
];

export function SocialLinks() {
  return (
    <div className="mt-8 flex flex-col gap-3">
      {links.map((l, i) => (
        <motion.a
          key={l.label}
          href={l.href}
          target={l.href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + i * 0.06, duration: 0.5, ease: "easeOut" }}
          whileHover={{ y: -3, scale: 1.015 }}
          whileTap={{ scale: 0.98 }}
          className="shine glass-btn group relative flex items-center gap-4 rounded-2xl px-4 py-4 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.08] hover:shadow-[0_10px_40px_-10px_rgba(0,100,255,0.4)]"
        >
          <span
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-6deg]"
            style={{ background: `linear-gradient(135deg, ${l.accent}, color-mix(in oklab, ${l.accent} 60%, black))` }}
          >
            <l.Icon className="h-5 w-5" />
          </span>
          <div className="flex flex-1 flex-col text-left">
            <span className="font-semibold text-foreground">{l.label}</span>
            {l.sub && <span className="text-xs text-muted-foreground">{l.sub}</span>}
          </div>
          <span className="text-muted-foreground transition-transform duration-300 group-hover:translate-x-1">→</span>
        </motion.a>
      ))}
    </div>
  );
}
