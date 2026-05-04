"use client";

import { motion } from "framer-motion";
import { useLanguageStore } from "@/store/useLanguageStore";
import { ServiceCard } from "@/components/ui/ServiceCard";

export const ServicesGrid = () => {
  const { t, _hasHydrated } = useLanguageStore();

  if (!_hasHydrated) {
    return <div className="py-24 bg-ebc-cream min-h-[600px]" />;
  }

  // Rutas a las páginas internas
  const routes = ["/structural", "/exterior", "/interior"];

  // Imágenes de fondo para cada tarjeta
  const backgroundImages = [
    "/structural.webp",
    "/exterior.webp",
    "/interior.webp",
  ];

  return (
    <section id="divisions" className="py-20 bg-white">
      {/* El ID "divisions" en la etiqueta de arriba conecta con el scroll del Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título de la Sección */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl font-bold text-ebc-dark uppercase tracking-wider"
          >
            {t.services.title}
          </motion.h2>
        </div>

        {/* Grid de Tarjetas visuales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full justify-items-center">
          {t.services.cards.map((card, index) => (
            <ServiceCard
              key={index}
              index={index}
              title={card.title}
              route={routes[index]}
              bgImage={backgroundImages[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
