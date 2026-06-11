"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useLanguageStore } from "@/store/useLanguageStore";
import PortfolioCard from "@/components/ui/PortfolioCard";

type ValidDivision = "structural" | "exterior" | "interior";

interface DivisionTemplateProps {
  divisionKey: ValidDivision;
}

export const DivisionTemplate = ({ divisionKey }: DivisionTemplateProps) => {
  const { t, _hasHydrated } = useLanguageStore();
  const [bgLoaded, setBgLoaded] = useState(false);

  if (!_hasHydrated) {
    return <div className="h-screen bg-[#F5F5F0]" />;
  }

  const data = t.divisionDetails[divisionKey];

  return (
    <main className="bg-[#F5F5F0] min-h-screen">
      {/* SECCIÓN 1: Hero Cinemático Refinado */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#111111]">
        <div className="absolute inset-0 z-0">
          <Image
            src={data.bgImage}
            alt={`${data.title} Background`}
            fill
            priority
            sizes="100vw"
            className={`
              object-cover 
              transition-opacity duration-[1.2s] ease-[cubic-bezier(0.76,0,0.24,1)]
              ${bgLoaded ? "opacity-100" : "opacity-0"}
            `}
            onLoad={() => setBgLoaded(true)}
          />
          <div className="absolute inset-0 bg-[#111111]/60" />{" "}
          {/* Oscurecido sutilmente para contraste */}
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            // Tamaños reducidos para un look más sofisticado
            className="text-3xl md:text-5xl font-bold text-[#FFFFFF] uppercase tracking-[0.15em] drop-shadow-lg leading-tight"
          >
            {data.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "80px" }}
            transition={{ delay: 0.2, duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="h-[1.5px] bg-[#A88258] mx-auto mt-6 mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.76, 0, 0.24, 1] }}
            // Textos descriptivos más moderados
            className="text-base md:text-lg text-gray-200 uppercase tracking-widest font-light"
          >
            {data.subtitle}
          </motion.p>
        </div>
      </section>

      {/* SECCIÓN 2: Información Técnica (Mastery & Precision) */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6 uppercase tracking-[0.15em]">
              Mastery & Precision
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light">
              {data.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="bg-[#FFFFFF] p-8 md:p-12 shadow-xl border-t-[3px] border-[#A88258]"
          >
            <h3 className="text-lg md:text-xl font-bold text-[#111111] mb-8 uppercase tracking-widest">
              Core Capabilities
            </h3>
            <ul className="space-y-5">
              {data.features.map((feature: string, index: number) => (
                <li key={index} className="flex items-start group">
                  <CheckCircle2 className="w-5 h-5 text-[#A88258] mr-4 mt-1 flex-shrink-0 transition-transform duration-500" />
                  <span className="text-gray-700 text-base md:text-lg font-light leading-relaxed group-hover:text-[#111111] transition-colors duration-300">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN 3: Portafolio Preview */}
      <section className="py-20 md:py-28 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] uppercase tracking-[0.15em] mb-6">
              Featured Work
            </h2>
            <div className="h-[1.5px] bg-[#A88258] w-[80px] mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
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
};
