"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface PortfolioCardProps {
  img: string;
  title: string;
  index: number;
}

export default function PortfolioCard({
  img,
  title,
  index,
}: PortfolioCardProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group relative overflow-hidden w-full h-[400px] rounded-sm"
    >
      {/* 
        Skeleton de Carga:
        Cambiamos el gris genérico por un color neutro más elegante (ej. ebc-cream o un gris muy suave). 
        Se desvanece suavemente cuando 'loaded' es true.
      */}
      <div
        className={`absolute inset-0 bg-[#F5F5F0] animate-pulse transition-opacity duration-700 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Imagen Optimizada */}
      <Image
        src={img}
        alt={`${title} Project ${index + 1}`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className={`
          object-cover
          transition-all duration-1000 ease-in-out
          group-hover:scale-105
          ${loaded ? "opacity-100" : "opacity-0"}
        `}
        onLoad={() => setLoaded(true)}
      />

      {/* Overlay con gradiente oscuro al hacer hover para resaltar contraste */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-t from-black/60 via-black/0 to-transparent
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500
          pointer-events-none
        "
      />
    </motion.div>
  );
}
