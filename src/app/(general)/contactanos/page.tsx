"use client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contáctanos",
  description:
    "Comunícate con Grace Christian Academy para información de matrícula, admisiones y atención por WhatsApp.",
  alternates: { canonical: "/contactanos" },
};

export default function Page() {
  return (
    <main className="container py-4">
      <h2 className="text-danger mb-4 fw-bold">Contactanos</h2>
      <p className="fs-5">¿Quieres información mas personalizada? ¡Sientete libre de contactarnos! </p>


      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6 sm-12">
            <h3 className="fw-bold mb-6 text-danger "><i className="bi bi-telephone"></i> Teléfono </h3>
            <p className="fs-5">
              (+504) 3172 - 6888</p>
            <p className="fs-5">
              (+504) 2552 - 1198</p>
          </div>

          <div className="col-md-6 sm-12">
            <h3 className="fw-bold mb-6 text-danger "><i className="bi bi-envelope"></i> Correo Electrónico  </h3>
            <p className="fs-5">
              gracesps@hotmail.com</p>
            <p className="fs-5">
              academygrace6@gmail.com</p>
          </div>
        </div>
        <h5 className="fw-bold mb-6 text-danger">Horario de Atención</h5>
        <p className="fs-5">Lunes a Viernes: 8am - 5pm <br></br>Sábado y Domingo: Cerrado</p>
      </div>

      <div className="container mb-4">
        <div className="row align-items-center">
          <h3 className="fw-bold mb-6 text-danger"><i className="bi bi-building"></i> Dirección </h3>
          <p  className="fs-5">
            Colonia Ideal, 6 Calle, 14 Avenida, San Pedro Sula, Honduras
          </p>
        </div>
      </div>

    <div style={{ width: "100%", maxWidth: "600px", margin: "auto" }}>
  <h2 className="fw-bold mb-4 text-danger text-center">Ubicación en el Mapa</h2>

  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1494.0035023337073!2d-88.00718806956843!3d15.507888641848261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6644b40327ac1d%3A0xb0ef75fc2456a07c!2sGrace%20Christian%20Academy!5e0!3m2!1ses!2shn!4v1764890045551!5m2!1ses!2shn"
    width="100%"
    height="450"
    style={{ border: 0 }}
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>


    </main>
  );
}
