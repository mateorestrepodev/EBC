"use client";

import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useLanguageStore } from "@/store/useLanguageStore";
import PortfolioCard from "@/components/ui/PortfolioCard";

type ValidDivision = "structural" | "exterior" | "interior";

export default function DivisionTemplate() {
  const params = useParams();
  const { t, _hasHydrated } = useLanguageStore();

  const divisionKey = params.division as ValidDivision;
  const validDivisions: ValidDivision[] = [
    "structural",
    "exterior",
    "interior",
  ];

  if (!validDivisions.includes(divisionKey)) {
    notFound();
  }

  if (!_hasHydrated) {
    return <div className="h-screen bg-ebc-cream" />;
  }

  const data = t.divisionDetails[divisionKey];

  return (
    <main className="bg-ebc-cream min-h-screen">
      {/* SECCIÓN 1: Hero - AHORA CON h-screen PARA CUBRIR TODA LA PANTALLA */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${data.bgImage})` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white uppercase tracking-widest drop-shadow-lg"
          >
            {data.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "80px" }}
            transition={{ delay: 0.2 }}
            className="h-1 bg-ebc-bronze mx-auto mt-6 mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-200 uppercase tracking-widest font-light"
          >
            {data.subtitle}
          </motion.p>
        </div>
      </section>

      {/* SECCIÓN 2: Información Técnica */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-ebc-dark mb-6">
              Mastery & Precision
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {data.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-sm shadow-lg border-t-4 border-ebc-bronze"
          >
            <h3 className="text-xl font-bold text-ebc-dark mb-6 uppercase tracking-wider">
              Core Capabilities
            </h3>
            <ul className="space-y-4">
              {data.features.map((feature: string, index: number) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-ebc-bronze mr-4 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN 3: Portafolio */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ebc-dark uppercase tracking-wider mb-4">
              Featured Work
            </h2>
            <div className="h-1 bg-ebc-bronze w-16 mx-auto" />
          </div>

          {/* Grid: 1 col móvil · 2 tablet · 3 desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.portfolioImages.map((img: string, index: number) => (
              <PortfolioCard
                key={index}
                img={img}
                title={data.title}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
