export default function Testimonios2() {
    return (
        <div className="container my-3">
            <div className="row g-4 align-items-stretch">

                {/* CARD 1 */}
                <div className="col-md-6 d-flex">
                    <div className="card mb-3 border-0 shadow-sm rounded-4 h-100 w-100">
                        <div className="row g-0 align-items-center h-100">

                            {/* Texto */}
                            <div className="col-12 col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title mb-2">Alejandra Erazo</h5>
                                    <p className="card-text mb-2">
                                        Estoy encantada con el nivel de inglés que ha alcanzado mi hija siendo tan pequeña. 
                                        Los maestros siempre pasan muy pendientes de ella y enseñan con mucho amor y paciencia. 
                                        ¡Full recomendada!
                                    </p>
                                    <p className="card-text mb-0">
                                        <small className="text-body-secondary">
                                            Madre de familia de alumna de Preescolar
                                        </small>
                                    </p>
                                </div>
                            </div>

                            {/* Imagen */}
                            <div className="col-12 col-md-4 d-flex justify-content-center align-items-center p-3 p-md-0">
                                <div className="testimonial-img-wrapper">
                                    <img
                                        src="/assets/testimonio2.jpg"
                                        alt="foto"
                                        className="img-fluid"
                                    />
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
                                    <h5 className="card-title mb-2">Kevin Chacón</h5>
                                    <p className="card-text mb-2">
                                        En Grace Christian Academy aprendí un nivel de inglés que me ha abierto muchas 
                                        puertas en mi vida. Además, aprendí muchos valores que todavía aplico en mi vida 
                                        a más de 10 años de haberme graduado.
                                    </p>
                                    <p className="card-text mb-0">
                                        <small className="text-body-secondary">
                                            Egresado de Grace Christian Academy
                                        </small>
                                    </p>
                                </div>
                            </div>

                            {/* Imagen */}
                            <div className="col-12 col-md-4 d-flex justify-content-center align-items-center p-3 p-md-0">
                                <div className="testimonial-img-wrapper">
                                    <img
                                        src="/assets/testimonio.jpg"
                                        alt="foto"
                                        className="img-fluid"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
