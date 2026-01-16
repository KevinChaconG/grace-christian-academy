import type { Metadata } from "next";

import Testimonios1 from "@/app/Componentes/Testimonios1";
import Testimonios2 from "@/app/Componentes/Testimonios2";

export const metadata: Metadata = {
  title: "Testimonios",
  description:
    "Conoce experiencias de familias y estudiantes de Grace Christian Academy y por qué nos eligen.",
  alternates: { canonical: "/testimonios" },
};

export default function Page() {
  return (

    <main className="container py-4">
      <h2 className="text-danger mb-4 fw-bold">Testimonios</h2>
      <div className="row g-4">
        <p className="fs-5 mb-4">En Grace Christian Academy, cada historia refleja nuestro compromiso con la 
          formación integral. Estos testimonios representan la experiencia real de padres, 
          alumnos y egresados que han visto el impacto de una educación basada en valores 
          cristianos y excelencia académica.</p>

        <Testimonios1></Testimonios1>
        <Testimonios2></Testimonios2>

      </div>
    </main>
  );
}
