"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguageStore } from "@/store/useLanguageStore";

export const Hero = () => {
  const { t, _hasHydrated } = useLanguageStore();

  if (!_hasHydrated) {
    return <div className="h-screen bg-ebc-wood" />;
  }

  const handleExplore = () => {
    const next = document.getElementById("divisions");
    if (next) next.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 1. Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videohero1.mp4" type="video/mp4" />
      </video>

      {/* 2. Overlay con gradiente — más sutil que un color plano */}
      <div className="absolute inset-0 bg-gradient-to-b from-ebc-wood/80 via-ebc-wood/60 to-ebc-wood/80" />

      {/* 3. Contenido principal */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        {/* Línea decorativa bronce arriba del título */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="h-[1.5px] bg-ebc-bronze mb-8"
        />

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl  font-bold text-white uppercase tracking-widest leading-tight drop-shadow-lg"
        >
          {t.hero.title}
        </motion.h1>

        {/* Línea decorativa bronce debajo del título */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "80px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="h-[1.5px] bg-ebc-bronze mt-4 mb-4"
        />

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed tracking-wide drop-shadow-md"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* Botones */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-ebc-bronze text-white text-[13px] font-semibold uppercase tracking-widest rounded-sm hover:bg-ebc-dark transition-colors duration-300 shadow-lg"
          >
            {t.hero.cta}
          </Link>

          <button
            onClick={handleExplore}
            className="inline-flex items-center justify-center px-8 py-4 border border-white/40 text-white text-[13px] font-semibold uppercase tracking-widest rounded-sm hover:bg-white/10 hover:border-ebc-bronze transition-all duration-300 backdrop-blur-sm"
          >
            Explore Divisions
          </button>
        </motion.div>
      </div>

      {/* 4. Indicador de scroll animado */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={handleExplore}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 group-hover:text-white/80 transition-colors duration-300">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-ebc-bronze" />
        </motion.div>
      </motion.div>
    </section>
  );
};
