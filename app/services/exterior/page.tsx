import { Metadata } from "next";
import { DivisionTemplate } from "@/components/sections/DivisionTemplate";

export const metadata: Metadata = {
  title: "Exterior Division | EBC",
  description: "High-end exterior systems, cladding, and building envelopes.",
};

export default function ExteriorPage() {
  return <DivisionTemplate divisionKey="exterior" />;
}
