import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-white">
      {/* 1. Pantalla completa (100vh) */}
      <Hero />

      {/* 2. Secciones de Divisiones Especializadas */}
      <ServicesGrid />

      {/* 
        PRÓXIMAS SECCIONES (Alineadas a la Arquitectura del Master Prompt)
        Iremos descomentando e integrando estas progresivamente:
      */}

      {/* <PortfolioPreview /> */}
      {/* <AboutPreview /> */}
      {/* <ContactCTA /> */}
    </main>
  );
}
