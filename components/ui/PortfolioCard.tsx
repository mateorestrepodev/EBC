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
      className="group relative overflow-hidden h-[400px]"
      style={{ aspectRatio: "8/9" }} // ← más alta que ancha, tipo retrato
    >
      {/* Skeleton */}
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}

      {/* Imagen — fill ocupa todo el contenedor */}
      <Image
        src={img}
        alt={`${title} Project ${index + 1}`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className={`
          object-cover
        
          ${loaded ? "opacity-100" : "opacity-0"}
        `}
        onLoad={() => setLoaded(true)}
      />

      {/* Overlay con gradiente elegante al hover */}
      <div
        className="
        absolute inset-0
        bg-gradient-to-t from-black/50 via-transparent to-transparent
        opacity-0 group-hover:opacity-100
        transition-opacity duration-500
        pointer-events-none
      "
      />
    </motion.div>
  );
}
