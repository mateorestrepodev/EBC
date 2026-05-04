import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import Preloader from "@/components/ui/Preloader"; // Importamos nuestro nuevo Preloader
import "./globals.css";

export const metadata: Metadata = {
  title: "Etiquette Build Corp | Premium General Contracting",
  description: "Building excellence from the ground up in Canada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* 1. Preloader animado que cubre toda la pantalla al inicio */}
        <Preloader />

        {/* 2. El Navbar se renderizará en todas las rutas */}
        <Navbar />

        {/* 3. Aquí se inyecta el contenido de cada página individual */}
        <div>{children}</div>
      </body>
    </html>
  );
}
