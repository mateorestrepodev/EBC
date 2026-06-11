"use client";

import { motion } from "framer-motion";
import { useLanguageStore } from "@/store/useLanguageStore";
import { ServiceCard } from "@/components/ui/ServiceCard";

export const ServicesGrid = () => {
  const { t, _hasHydrated } = useLanguageStore();

  if (!_hasHydrated) {
    return <div className="py-32 bg-[#F5F5F0] min-h-[800px]" />;
  }

  const routes = [
    "/services/structural",
    "/services/exterior",
    "/services/interior",
  ];

  const backgroundImages = [
    "/structural.webp",
    "/exterior.webp",
    "/interior.webp",
  ];

  return (
    <section id="divisions" className="py-24 md:py-32 bg-[#F5F5F0]">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título de la Sección Editorial */}
        <div className="text-center mb-20 md:mb-28">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="text-4xl  font-bold text-[#111111] uppercase tracking-[0.15em]"
          >
            {t.services.title}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="h-[1.5px] bg-[#A88258] mx-auto mt-8"
          />
        </div>

        {/* Grid ajustado con espacio negativo de lujo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full justify-items-center">
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
