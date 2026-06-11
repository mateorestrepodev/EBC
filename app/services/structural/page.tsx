import { Metadata } from "next";
import { DivisionTemplate } from "@/components/sections/DivisionTemplate";

export const metadata: Metadata = {
  title: "Structural Division | EBC",
  description:
    "Premium structural and concrete construction services across Canada.",
};

export default function StructuralPage() {
  return <DivisionTemplate divisionKey="structural" />;
}
