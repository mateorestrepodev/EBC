"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  route: string;
  bgImage: string;
  index: number;
}

export const ServiceCard = ({
  title,
  route,
  bgImage,
  index,
}: ServiceCardProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.76, 0, 0.24, 1],
      }}
      // Redujimos el ancho máximo a 320px y ajustamos la proporción a 4/5 para un look más refinado
      className="w-full aspect-[4/5] max-w-[320px]"
    >
      <Link
        href={route}
        className="relative block w-full h-full overflow-hidden group shadow-xl cursor-pointer"
      >
        {/* Skeleton Cream */}
        <div
          className={`absolute inset-0 bg-[#F5F5F0] animate-pulse transition-opacity duration-700 z-0 ${
            loaded ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Imagen Optimizada (SE ELIMINÓ EL group-hover:scale-105) */}
        <Image
          src={bgImage}
          alt={`${title} Division`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={`
            object-cover z-0
            transition-all duration-[1.2s] ease-[cubic-bezier(0.76,0,0.24,1)]
            ${loaded ? "opacity-100" : "opacity-0"}
          `}
          onLoad={() => setLoaded(true)}
        />

        {/* Overlay premium: Gradiente oscuro desde abajo que solo aparece en hover */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#111111]/90 via-[#111111]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[1s] ease-[cubic-bezier(0.76,0,0.24,1)]" />

        {/* Texto: Empieza invisible y desplazado hacia abajo, aparece al hacer hover */}
        <div className="absolute inset-0 z-20 flex items-end justify-center p-8 pb-10 text-center pointer-events-none">
          <h3 className="text-xl md:text-2xl font-bold text-[#FFFFFF] uppercase tracking-[0.2em] opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-[0.8s] ease-[cubic-bezier(0.76,0,0.24,1)] drop-shadow-2xl">
            {title}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
};
