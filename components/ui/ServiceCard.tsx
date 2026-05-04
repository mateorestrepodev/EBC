"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  route: string;
  bgImage: string; // Nueva propiedad para la imagen de fondo
  index: number;
}

export const ServiceCard = ({
  title,
  route,
  bgImage,
  index,
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="h-[400px] w-[300px]"
    >
      <Link
        href={route}
        className="relative block w-full h-full overflow-hidden group rounded-sm shadow-md"
      >
        {/* Imagen de fondo con animación de escala en hover */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-105"
          style={{ backgroundImage: `url(${bgImage})` }}
        />

        {/* Capa oscura (Overlay) para asegurar que el texto se lea. 
            Se vuelve un poco más clara al hacer hover */}
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />

        {/* Texto centrado estilo Resgroup */}
        <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
          <h3 className="text-2xl font-bold text-white uppercase tracking-widest drop-shadow-lg">
            {title}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
};
