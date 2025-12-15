"use client";

export default function Page() {
  return (
    <div className="container py-4">
      {/* Texto principal */}
      <div className="row mb-5">
        <div className="col-md-10 col-lg-12">
          <h2 className="text-danger mb-4 fw-bold">Acerca de Nosotros</h2>

          <p className="fs-5">
            Grace Christian Academy es una institución educativa comprometida con la formación
            integral de niños y jóvenes, fundamentada en la excelencia académica, el aprendizaje
            del idioma inglés y la vivencia de valores cristianos.
          </p>

          <p className="fs-5">
            Nuestra historia comienza en el año 2000, cuando la escuela fue fundada por Dagoberto Argujo bajo el nombre de
            Legacy Christian School, con la visión de ofrecer una educación de calidad que preparara
            a los estudiantes no solo en el ámbito académico, sino también en su desarrollo espiritual,
            moral y personal. Con el paso de los años, la institución evolucionó y adoptó el nombre de
            Grace Christian Academy, reafirmando su misión de educar con gracia, fe y propósito.
          </p>

          <p className="fs-5">
            Desde sus inicios, Grace Christian Academy ha mantenido un firme compromiso con la enseñanza
            bilingüe, promoviendo un alto dominio del inglés como herramienta clave para el futuro académico
            y profesional de sus estudiantes. Este enfoque se complementa con una educación basada en principios
            y valores cristianos, que fortalecen el carácter, fomentan el respeto, la responsabilidad y el amor
            al prójimo.
          </p>

          <p className="fs-5">
            Hoy, Grace Christian Academy continúa formando generaciones de estudiantes preparados para enfrentar
            los retos del mundo actual, con una educación sólida, una fe bien cimentada y una visión clara de servicio
            y liderazgo.
          </p>
        </div>
      </div>

      {/* Misión y Visión */}
      <div className="row justify-content-center g-4">
        <div className="col-md-5">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body p-4 text-center">
              <h3 className="h5 fw-bold text-danger mb-3">Misión</h3>
              <p className="mb-0">
                Brindar una educación integral de altos estándares, con enseñanza
                bilingüe y fundamentos cristianos, formando estudiantes con carácter,
                excelencia académica y compromiso con el servicio.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-5">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body p-4 text-center">
              <h3 className="h5 fw-bold text-danger mb-3">Visión</h3>
              <p className="mb-0">
                Ser una institución reconocida por su excelencia académica, alto
                dominio del inglés y formación en valores cristianos, preparando
                líderes que impacten positivamente su comunidad y el mundo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}
