export default function Footer() {
  return (
    <footer className="border-top py-4">
      <div className="container">

        <div className="row justify-content-center align-items-center text-center text-md-start">

          <div className="col-md-5 mb-3 mb-md-0 text-danger">
            <p className="mb-0 small">
              Colonia Ideal, 14 Calle 7 Avenida<br />
              San Pedro Sula, Cortés <br />
              Honduras
            </p>
          </div>

          <div className="col-md-3 text-md-end text-center">
            
            <div className="d-flex justify-content-center justify-content-md-end gap-3 fs-3 text-danger">
              <a href="https://wa.me/50431726888" target="_blank" className="text-danger">
                <i className="bi bi-whatsapp"></i>
              </a>
              <a href="https://www.facebook.com/Legacy.hn" target="_blank" className="text-danger">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://www.instagram.com/academygracechristian/" target="_blank" className="text-danger">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-danger mt-3 small">
          © {new Date().getFullYear()} Grace Christian Academy. Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
}
