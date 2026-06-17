import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-[#FFFFFF]">
      {/* 1. Pantalla completa (100vh) */}
      <Hero />

      {/* 2. Secciones de Divisiones Especializadas */}
      <ServicesGrid />
    </main>
  );
}
