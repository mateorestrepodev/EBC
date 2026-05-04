import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
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
        {/* El Navbar se renderizará en todas las rutas */}
        <Navbar />

        {/* Aquí se inyecta el contenido de cada página individual */}
        <div>{children}</div>
      </body>
    </html>
  );
}
