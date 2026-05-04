import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesGrid />
      {/* Próximamente: TrustBar, About Us, Reviews, Footer */}
    </main>
  );
}
