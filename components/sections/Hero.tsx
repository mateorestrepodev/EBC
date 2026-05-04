"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguageStore } from "@/store/useLanguageStore";

export const Hero = () => {
  const { t, _hasHydrated } = useLanguageStore();

  if (!_hasHydrated) {
    return <div className="h-screen bg-ebc-wood" />;
  }

  // Función de scroll mejorada
  const handleExplore = () => {
    const next = document.getElementById("divisions");
    if (next) {
      const topOffset = next.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* 1. Fondo de Video y Overlay Animados */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videohero1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-ebc-wood/80 via-ebc-wood/60 to-ebc-wood/80" />
      </motion.div>

      {/* 2. Contenido principal (Textos y Botones en cascada) */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl 2xl:max-w-7xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "60px" }}
          transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
          className="h-[1.5px] bg-ebc-bronze mb-6 md:mb-8"
        />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl font-bold text-white uppercase tracking-widest leading-tight drop-shadow-lg"
        >
          {t.hero.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "80px" }}
          transition={{ duration: 0.8, delay: 2.2, ease: "easeOut" }}
          className="h-[1.5px] bg-ebc-bronze mt-4 mb-4 md:mt-6 md:mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.4, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-xl 2xl:text-2xl text-gray-200 max-w-3xl 2xl:max-w-4xl leading-relaxed tracking-wide drop-shadow-md"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* Botones */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.6, ease: "easeOut" }}
          className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          {/* Botón Principal */}
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-ebc-bronze text-white text-[13px] 2xl:text-[15px] font-semibold uppercase tracking-widest rounded-sm hover:bg-white hover:text-ebc-bronze transition-colors duration-500 shadow-lg"
          >
            {t.hero.cta}
          </Link>

          {/* Botón Secundario */}
          <button
            onClick={handleExplore}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-white/40 text-white text-[13px] 2xl:text-[15px] font-semibold uppercase tracking-widest rounded-sm hover:bg-white hover:text-ebc-dark hover:border-white transition-all duration-500 backdrop-blur-sm hover:cursor-pointer"
          >
            Explore Divisions
          </button>
        </motion.div>
      </div>
    </section>
  );
};
