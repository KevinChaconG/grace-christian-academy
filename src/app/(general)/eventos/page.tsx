export default function Page() {

  return (
    <main className="container py-4">
      <h2 className="text-danger mb-2 fw-bold">Eventos 2025</h2>

      <div className="container my-5">
        <div className="row align-items-center mob-row">
          <div className="col-md-6 mob-order-1">
            <h3 className="fw-bold mb-3 text-danger">Spelling Bee</h3>
            <p className="fs-5">
              Letters, words, and lots of fun! <br></br>
              Así vivimos nuestro Spelling Bee 2025 en Grace Christian Academy, un evento que pone a prueba
              no solo el dominio del inglés, sino también la disciplina, la concentración y la valentía de cada uno de nuestros estudiantes.</p>

            <p className="fs-5">
              Fue una jornada llena de emoción, aprendizaje y compañerismo, donde los participantes demostraron su dedicación y amor por el
              idioma. Desde los primeros niveles hasta los más avanzados, cada niño brilló con su esfuerzo y perseverancia.</p>

            <p className="fs-5">
              ¡Felicitaciones a todos los concursantes por su excelente desempeño y entusiasmo!
              Nos llena de orgullo ver cómo continúan creciendo, superando retos y celebrando juntos el aprendizaje.
            </p>
          </div>


          <div className="col-md-6 text-center mob-order-2">
            <img
              src="/assets/spellingbee.jpg"
              alt="Spelling Bee"
              className="img-fluid rounded shadow"
              width={600}
            />
          </div>
        </div>
      </div>

      <div className="container my-5 ">
        <div className="row align-items-center mob-row">
          <div className="col-md-6 text-center mob-order-2">
            <img
              src="/assets/independencia.jpg"
              alt="Dia de la independencia Honduras"
              className="img-fluid rounded shadow"
              width={600}
            />
          </div>

          <div className="col-md-6 mob-order-1">
            <h3 className="fw-bold mb-3 text-danger">Día de la Independencia</h3>
            <p className="fs-5">
              En Grace Christian Academy conmemoramos el Día de la Independencia recordando con orgullo a quienes forjaron
              nuestra nación y renovando nuestro compromiso con los valores que nos representan.</p>

            <p className="fs-5">
              Honduras es una tierra de fe, trabajo y esperanza, un país lleno de gente valiente, solidaria y perseverante.
              Cada 15 de septiembre es una oportunidad para reflexionar sobre nuestro pasado, valorar nuestra cultura y enseñar a
              las nuevas generaciones el amor por nuestra patria.</p>

            <p className="fs-5">
              Que la libertad siga guiando nuestro camino y que juntos sigamos construyendo un futuro digno para Honduras.
            </p>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row align-items-center mob-row">
          <div className="col-md-6 mob-order-1">
            <h3 className="fw-bold mb-3 text-danger">Día de Naciones</h3>
            <p className="fs-5">
              En Grace Christian Academy vivimos una jornada especial donde nuestros estudiantes representaron con orgullo diferentes
              países del mundo, explorando sus tradiciones, vestimenta, gastronomía y valores característicos.</p>

            <p className="fs-5">
              Fue una experiencia enriquecedora que promovió la igualdad, la diversidad y el amor por aprender. A través de actividades
              educativas y presentaciones creativas, los alumnos no solo conocieron nuevas culturas, sino que también fortalecieron su
              capacidad de respeto y apreciación por la identidad de cada nación.</p>

            <p className="fs-5">
              Nos llena de orgullo ver a nuestros estudiantes crecer como ciudadanos del mundo, con una visión amplia y un corazón lleno de empatía.
            </p>
          </div>


          <div className="col-md-6 text-center mob-order-2">
            <img
              src="/assets/naciones.jpg"
              alt="Spelling Bee"
              className="img-fluid rounded shadow"
              width={600}
            />
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row align-items-center mob-row">
          <div className="col-md-6 text-center mob-order-2">
            <img
              src="/assets/atletismo.jpg"
              alt="Dia de la independencia Honduras"
              className="img-fluid rounded shadow"
              width={600}
            />
          </div>

          <div className="col-md-6 mob-order-1">
            <h3 className="fw-bold mb-3 text-danger">Día de Atletismo</h3>
            <p className="fs-5">
              En Grace Christian Academy vivimos una jornada llena de dinamismo donde cada estudiante mostró determinación, 
              disciplina y espíritu deportivo. Desde las carreras hasta los saltos, cada prueba estuvo cargada de emoción y 
              entusiasmo, reflejando el compromiso de nuestros atletas por superarse a sí mismos.</p>

            <p className="fs-5">
              Fue un día que nos recordó la importancia del trabajo en equipo, la perseverancia y la actitud positiva frente a 
              los retos. Más allá de los resultados, cada participación fue motivo de orgullo y celebración para nuestra comunidad 
              escolar.</p>

            <p className="fs-5">
              ¡Felicidades a todos nuestros atletas por dar lo mejor de sí! <br></br>
            Su dedicación inspira a toda la escuela a seguir avanzando con fuerza, entrega y pasión.
            </p>
          </div>
        </div>
      </div>


    </main>
  );
}
