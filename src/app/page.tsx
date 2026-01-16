'use client'
import Image from "next/image";
import Testimonios1 from "./Componentes/Testimonios1";
import { useEffect } from "react";

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
    src: "/assets/h4.jpeg",
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

{/* Descripción Grace Christian Academy */}
<section className="text-white py-5" id="descripcion">
  <div className="container">
    <div className="row justify-content-center text-center">
      <div className="col-md-10 col-lg-8">

        <h2 className="fw-bold mb-4">¿Quiénes somos?</h2>

        <p className="fs-5 mb-0">
          Somos una institución educativa de altos estándares, con enseñanza bilingüe
          y formación basada en valores cristianos. Fundada en el año 2000, nuestro programa
          académico es avalado y respaldado por instituciones educativas norteamaricanas.
        </p>

      </div>
    </div>
  </div>
</section>


      {/* Elección Grace Christian Academy */}
      <div className="container my-5">
        <div className="row align-items-center">

          <div className="col-md-6">
            <h2 className="fw-bold mb-3">¡El futuro de tu hijo comienza hoy!</h2>
            <p className="fs-5">
              No dejes que su educación dependa del azar. En Grace Christian Academy brindamos una
              formación integral que combina excelencia académica, desarrollo de valores cristianos y un
              alto dominio del inglés, preparando a cada estudiante para sobresalir y enfrentar los retos del mañana.
            </p>

            <h4 className="fw-bold mb-3">¿Por qué Grace Christian Academy es la mejor opción para tus hijos?</h4>
            <p className="fs-5">Porque aquí no solo formamos estudiantes, ¡formamos personas con propósito! Nosotros creemos que cada niño
              fue creado con un propósito especial, y cada día trabajamos para ayudarle a descubrirlo.
            </p>
            <p className="fs-5">¡Crecen en conocimiento, fe y valores!</p>
            <div>
              <a
                href="https://wa.me/50431726888?text=Hola,%20me%20gustaría%20obtener%20información%20sobre%20la%20prematrícula."
                target="_blank"
                className="btn btn-success btn-lg mt-3 mb-4 mb-md-0">
                <i className="bi bi-whatsapp mb-4"></i> WhatsApp</a>
            </div>
          </div>

          <div className="col-md-6 text-center">
            <img
              src="/assets/matricula-2026.PNG"
              alt="Matrícula 2026"
              className="img-fluid rounded shadow" />
          </div>
        </div>
      </div>

      <br></br>

      {/* Instalaciones */}
      <div className="container mb-5">
        <h2 className="fw-bold mb-4">Nuestras Instalaciones</h2>

        <div className="row g-4">

          <div className="col-6 col-md-3">
            <img
              src="/assets/instalaciones1.webp"
              data-index="0"
              className="img-fluid rounded shadow instalaciones-img"
              data-bs-toggle="modal"
              data-bs-target="#modalGaleria"
            />
          </div>

          <div className="col-6 col-md-3">
            <img
              src="/assets/instalaciones2.webp"
              data-index="1"
              className="img-fluid rounded shadow instalaciones-img"
              data-bs-toggle="modal"
              data-bs-target="#modalGaleria"
            />
          </div>

          <div className="col-6 col-md-3">
            <img
              src="/assets/instalaciones1.webp"
              data-index="2"
              className="img-fluid rounded shadow instalaciones-img"
              data-bs-toggle="modal"
              data-bs-target="#modalGaleria"
            />
          </div>

          <div className="col-6 col-md-3">
            <img
              src="/assets/instalaciones2.webp"
              data-index="3"
              className="img-fluid rounded shadow instalaciones-img"
              data-bs-toggle="modal"
              data-bs-target="#modalGaleria"
            />
          </div>

        </div>
      </div>

      {/* MODAL + CAROUSEL */}
      <div
        className="modal fade"
        id="modalGaleria"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content bg-dark position-relative">

            {/* Botón flotante rojo */}
            <button
              type="button"
              className="modal-close-floating"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="bi bi-x-lg"></i>
            </button>

            {/* Carousel */}
            <div
              id="carouselGaleria"
              className="carousel slide"
              data-bs-ride="false"
            >
              <div className="carousel-inner">

                <div className="carousel-item active">
                  <img src="/assets/instalaciones1.webp" className="d-block w-100" />
                </div>

                <div className="carousel-item">
                  <img src="/assets/instalaciones2.webp" className="d-block w-100" />
                </div>

                <div className="carousel-item">
                  <img src="/assets/instalaciones1.webp" className="d-block w-100" />
                </div>

                <div className="carousel-item">
                  <img src="/assets/instalaciones2.webp" className="d-block w-100" />
                </div>

              </div>

              {/* Controles */}
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselGaleria"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon"></span>
              </button>

              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselGaleria"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon"></span>
              </button>

            </div>
          </div>
        </div>
      </div>

      {/* Testimonios */}

      <div className="container">
        <div className="row">
          <div className="col-12">

            <h2 className="fw-bold mb-4">¿Qué opinan de nosotros?</h2>

            <Testimonios1 />

            <div className="mb-4">
              <a
                href="/testimonios"
                className="btn btn-danger btn-lg" id="testimonio-button"
              >
                Ver más Testimonios
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
