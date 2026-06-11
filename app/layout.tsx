import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import Preloader from "@/components/ui/Preloader";
import "./globals.css";

// Metadata optimizada según el Master Prompt (SEO Premium)
export const metadata: Metadata = {
  title: "EBC | Premium General Contracting",
  description:
    "Structural, Exterior and Interior Construction Services Across Canada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* antialiased suaviza las fuentes haciéndolas ver más premium (tipo MacOS) */}
      <body className="antialiased bg-[#111111] text-[#F5F5F0]">
        {/* 1. Preloader "Sello de la Casa" */}
        <Preloader />

        {/* 2. Navbar Global */}
        <Navbar />

        {/* 3. Wrapper principal preparado para empujar el Footer al fondo */}
        <div className="flex flex-col min-h-screen">{children}</div>

        {/* 4. Footer (Se creará en los próximos pasos) */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
