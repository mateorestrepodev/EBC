"use client";

import Link from "next/link";
import { motion, animate } from "framer-motion"; // <-- 1. Importamos animate de framer-motion
import { useLanguageStore } from "@/store/useLanguageStore";

export const Hero = () => {
  const { t, _hasHydrated } = useLanguageStore();

  if (!_hasHydrated) {
    return <div className="h-screen bg-[#111111]" />;
  }

  const handleExplore = () => {
    const next = document.getElementById("divisions");
    if (next) {
      const topOffset = next.getBoundingClientRect().top + window.scrollY;

      // 2. Animación de scroll personalizada (mucho más suave que el nativo)
      animate(window.scrollY, topOffset, {
        duration: 1.2, // Duración del viaje (1.2 segundos para ser elegante)
        ease: [0.76, 0, 0.24, 1], // La curva suave que usas en el resto del sitio
        onUpdate: (latest) => window.scrollTo(0, latest),
      });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#111111]">
      {/* 1. Fondo de Video y Overlay Animados */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 1.2, ease: [0.76, 0, 0.24, 1] }}
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
        <div className="absolute inset-0 bg-[#111111]/73" />
      </motion.div>

      {/* 2. Contenido principal (Textos y Botones en cascada) */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl 2xl:max-w-[1400px] mx-auto flex flex-col items-center  gap-10 pt-4 md:pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8, ease: [0.76, 0, 0.24, 1] }}
          className="text-3xl sm:text-4xl  font-bold text-[#FFFFFF] uppercase tracking-[0.15em] leading-[1.1] "
        >
          {t.hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.2, ease: [0.76, 0, 0.24, 1] }}
          className="text-lg sm:text-xl  text-gray-200 max-w-3xl 2xl:max-w-5xl font-light tracking-wider leading-relaxed drop-shadow-md"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* Botones - Ajustados al Master Prompt */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.4, ease: [0.76, 0, 0.24, 1] }}
          className=" flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          {/* Botón Principal: Explore Services */}
          <button
            onClick={handleExplore}
            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-[#A88258] text-[#FFFFFF] text-[13px] 2xl:text-[15px] font-bold uppercase tracking-[0.2em]  hover:bg-[#FFFFFF] hover:text-[#111111] transition-colors duration-500 shadow-xl cursor-pointer"
          >
            Explore Services
          </button>
        </motion.div>
      </div>
    </section>
  );
};
