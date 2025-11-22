"use client";

export default function Page() {
  return (


    <main className="container py-4">

      <h1 className="text-danger">Testimonios</h1>
      <br></br>

      <div className="row g-4">

        {/* CARD 1 */}
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Kevin Chacón</h5>
                  <p className="card-text">
                    En Grace Christian Academy aprendí un nivel de inglés que me ha abierto
                    muchas puertas en mi vida. Además, aprendí muchos valores que todavía aplico
                    en mi vida a más de 10 años de haberme graduado.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Ex-alumno de Grace Christian Academy
                    </small>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <img
                  src="/assets/testimonio.jpg"
                  className="img-fluid rounded-end"
                  alt="imagen"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card 2</h5>
                  <p className="card-text">
                    Texto de ejemplo para el card 2.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Ex-alumno de Grace Christian Academy
                    </small>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <img
                  src="/assets/home2.jpg"
                  className="img-fluid rounded-end"
                  alt="imagen"
                />
              </div>
            </div>
          </div>
        </div>

      </div>

    </main>
  );
}
