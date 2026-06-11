import { Metadata } from "next";
import { DivisionTemplate } from "@/components/sections/DivisionTemplate";

export const metadata: Metadata = {
  title: "Interior Division | EBC",
  description:
    "Precision interior fit-outs, millwork, and premium renovations.",
};

export default function InteriorPage() {
  return <DivisionTemplate divisionKey="interior" />;
}
