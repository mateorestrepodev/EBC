"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* 1. TARJETA EN LA GRILLA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{
          duration: 0.8,
          delay: index * 0.1,
          ease: [0.76, 0, 0.24, 1],
        }}
        onClick={() => setIsOpen(true)}
        className="group relative overflow-hidden w-full aspect-[4/5] max-w-[330px] mx-auto cursor-pointer shadow-xl"
      >
        <div
          className={`absolute inset-0 bg-[#F5F5F0] animate-pulse transition-opacity duration-700 z-0 ${
            loaded ? "opacity-0" : "opacity-100"
          }`}
        />

        <Image
          src={img}
          alt={`${title} Project ${index + 1}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={`
            object-cover z-0
            transition-opacity duration-[1.2s] ease-[cubic-bezier(0.76,0,0.24,1)]
            ${loaded ? "opacity-100" : "opacity-0"}
          `}
          onLoad={() => setLoaded(true)}
        />
      </motion.div>

      {/* 2. MODAL PANTALLA COMPLETA (LIGHTBOX) REFINADO */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            // Fondo más transparente (/75) para que deje ver sutilmente la web detrás
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#111111]/75 backdrop-blur-sm p-6 md:p-12"
            onClick={() => setIsOpen(false)}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
              className="absolute top-6 right-6 md:top-10 md:right-10 text-[#FFFFFF] hover:text-[#A88258] transition-colors duration-300 z-50 p-2 cursor-pointer"
            >
              <X className="w-8 h-8 md:w-10 md:h-10" />
            </button>

            {/* Contenedor de la Imagen con alto restringido (max 80vh) para que no ocupe toda la pantalla */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              className="relative w-full max-w-5xl h-[60vh] md:h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={img}
                alt={`${title} Fullsize`}
                fill
                sizes="100vw"
                className="object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
