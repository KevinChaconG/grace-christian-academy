'use client'
import Link from "next/link";
import Footer from "./Componentes/Footer";
import NavBar from "./Componentes/NavBar";
import BootstrapClient from "./Componentes/bootstrap.client";
import Image from "next/image";

const slides = [
  {
    src: "/assets/h1.jpg",
    title: "Excelencia Academica",
    text: "Educación académica de excelencia",
  },
  {
    src: "/assets/h2.jpg",
    title: "Formación en Valores",
    text: "Valores cristianos que fortalecen el carácter",
  },
  {
    src: "/assets/h3.jpg",
    title: "Educación Bilingüe Integral",
    text: "Enseñanza bilingüe con enfoque en liderazgo y servicio",
  },
  {
    src: "/assets/h4.jpg",
    title: "Ambiente Seguro y Amoroso",
    text: "Ambientes seguros, alegres y llenos de amor",
  },
];

export default function Home() {
  return (
    <div>

      <div
        id="heroCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >

        <div className="carousel-indicators">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to={i}
              className={i === 0 ? "active" : ""}
              aria-current={i === 0 ? "true" : undefined}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="carousel-inner">
          {slides.map((slide, i) => (
            <div className={`carousel-item ${i === 0 ? "active" : ""}`} key={i}>
              <Image
                src={slide.src}
                alt={slide.title}
                className="d-block w-100"
                width={1600}
                height={700}
                priority={i === 0}
                style={{ objectFit: "cover", height: "70vh" }}
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
                <h3 className="fw-bold text-white">{slide.title}</h3>
                <p className="text-light">{slide.text}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev custom-control"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next custom-control"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>

      <br></br>

      <div className="container my-5">
        <div className="row align-items-center">

          <div className="col-md-6">
            <h2 className="fw-bold mb-3">¡El futuro de tu hijo comienza hoy!</h2>
            <p className="text-muted" style={{ lineHeight: "1.6" }}>
              No dejes que su educación dependa del azar. En Grace Christian Academy brindamos una
              formación integral que combina excelencia académica, desarrollo de valores cristianos y un
              alto dominio del inglés, preparando a cada estudiante para sobresalir y enfrentar los retos del mañana.
            </p>

            <p><strong>¿Por qué Grace Christian Academy es la mejor opción para tus hijos?</strong></p>
            <p>Porque aquí no solo formamos estudiantes, ¡formamos personas con propósito! Nosotros creemos que cada niño
              fue creado con un propósito especial, y cada día trabajamos para ayudarle a descubrirlo.
            </p>
            <p>¡Crecen en conocimiento, fe y valores!</p>
            <div>
              <a
                href="https://wa.me/50431729888?text=Hola,%20me%20gustaría%20obtener%20información%20sobre%20la%20prematrícula."
                target="_blank"
                className="btn btn-success btn-lg mt-3"
              >
                📲 WhatsApp
              </a>
              <br></br>
            </div>
          </div>

          <div className="col-md-6 text-center">
            <img
              src="/assets/matricula.jpg"
              alt="Prematrícula 2026"
              className="img-fluid rounded shadow"
            />
          </div>

        </div>

      </div>

    </div>
  );
}
