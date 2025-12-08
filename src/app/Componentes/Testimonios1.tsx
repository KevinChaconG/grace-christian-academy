

export default function Testimonios1() {
    return (

<div className="container my-5">
  <div className="row g-4 align-items-stretch">

    {/* CARD 1 */}
    <div className="col-md-6 d-flex">
      <div className="card mb-3 border-0 shadow-sm rounded-4 h-100 w-100">
        <div className="row g-0 align-items-center h-100">

          {/* Texto */}
          <div className="col-12 col-md-8">
            <div className="card-body">
              <h5 className="card-title mb-2">Luis Alveiro Medina Pineda</h5>
              <p className="card-text mb-2">
                Excelente ente formador integral! Desde Colombia damos fe de la eficiencia del proceso formativo, 
                ya que nuestra hija estudia en esta prestigiosa institución.
              </p>
              <p className="card-text mb-0">
                <small className="text-body-secondary">Padre de familia</small>
              </p>
            </div>
          </div>

          {/* Imagen */}
          <div className="col-12 col-md-4 d-flex justify-content-center align-items-center p-3 p-md-0">
            <div className="testimonial-img-wrapper">
              <img src="/assets/testimonio3.jpg" alt="foto" className="img-fluid" />
            </div>
          </div>

        </div>
      </div>
    </div>

    {/* CARD 2 */}
    <div className="col-md-6 d-flex">
      <div className="card mb-3 border-0 shadow-sm rounded-4 h-100 w-100">
        <div className="row g-0 align-items-center h-100">

          {/* Texto */}
          <div className="col-12 col-md-8">
            <div className="card-body">
              <h5 className="card-title mb-2">Denisse Vélez De Cook</h5>
              <p className="card-text mb-2">
                Una excelente institución que ha brindado a mis hijos un alto nivel en educación. Muy feliz y 
                recomiendo esta escuela a cualquier padre que desee que sus hijos obtengan un alto nivel de inglés.
              </p>
              <p className="card-text mb-0">
                <small className="text-body-secondary">Madre de familia</small>
              </p>
            </div>
          </div>

          {/* Imagen */}
          <div className="col-12 col-md-4 d-flex justify-content-center align-items-center p-3 p-md-0">
            <div className="testimonial-img-wrapper">
              <img src="/assets/testimonio4.jpg" alt="foto" className="img-fluid" />
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</div>

    )
}