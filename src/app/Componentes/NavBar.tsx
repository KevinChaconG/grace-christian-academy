import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
      <div className="container-fluid justify-content-center">

        <Link href="/" className="navbar-brand d-flex align-items-center gap-2">
          <Image
            src="/assets/logo.png" 
            alt="Logo Grace Christian Academy"
            width={130}
            height={60}
            priority
          />
        </Link>

        {/* Botón hamburguesa (responsive) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
          <ul className="navbar-nav text-center">
            <li className="nav-item">
              <Link className="nav-link text-danger fw-semibold" href="/">
                Inicio
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-danger fw-semibold"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Información Académica
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item text-danger" href="/oferta-academica">
                    Oferta Académica 2026
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-danger" href="/calendario-escolar">
                    Calendario Escolar
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-danger" href="/actividades-extracurriculares">
                    Actividades Extracurriculares
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-danger fw-semibold" href="/eventos">
                Eventos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-danger fw-semibold" href="/testimonios">
                Testimonios
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-danger fw-semibold" href="/acerca-nosotros">
                Acerca de Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-danger fw-semibold" href="/contactanos">
                Contáctanos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
