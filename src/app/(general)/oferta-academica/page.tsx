"use client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oferta Académica",
  description:
    "Preescolar, primaria, secundaria y bachillerato en ciencias y letras. Alto nivel de inglés y formación en valores cristianos.",
  alternates: { canonical: "/oferta-academica" },
};

export default function Page() {
  return (
    <main className="container py-4">

      <div className="container fs-4 mb-4">

        <h2 className="text-danger mb-3 fw-bold">Oferta Académica</h2>

        <p className="fs-5">En Grace Christian Academy ofrecemos una formación integral que combina excelencia académica,
          valores cristianos sólidos y un alto dominio del idioma inglés. Nuestro enfoque educativo busca
          desarrollar no solo el conocimiento, sino también el carácter, el liderazgo y la capacidad de
          cada estudiante para influir positivamente en su comunidad. Desde preescolar hasta bachillerato,
          cada nivel está diseñado para brindar una experiencia educativa de calidad, segura y centrada
          en el crecimiento espiritual y académico.</p>

        <div className="col-md-12 text-center">
          <img
            src="/assets/teachers.jpg"
            alt="Maestros de Grace Christian Academy"
            className="img-fluid rounded shadow"
          />
        </div>

      </div>

      <div className="container mb-5 oferta-academica">
        <h2 className="text-center mb-2 text-danger fw-bold titulo-oferta">
          Niveles Académicos
        </h2>
        <p className="text-center text-muted mb-5 subtitulo-oferta">
          Acompañamos cada etapa de formación con excelencia académica, valores cristianos y un alto dominio del inglés.
        </p>

        <div className="row">

          {/* Preescolar */}
          <div className="col-md-6 mb-4">
            <div className="card shadow h-100 nivel-card">
              <div className="card-body fs-6 fs-md-5">
                <h3 className="text-danger mb-3">Preescolar</h3>

                <p className="texto-nivel">
                  En Preescolar brindamos el primer acercamiento al aprendizaje formal en un entorno seguro, afectivo y estructurado, 
                  donde los niños desarrollan habilidades fundamentales a través del juego guiado, la exploración y rutinas pedagógicas intencionales.
                </p>

                <div className="nivel-seccion">
                  <h5 className="titulo-seccion">Competencias desarrolladas</h5>
                  <ul>
                    <li>Desarrollo cognitivo, motriz y socioemocional acorde a la edad.</li>
                    <li>Fortalecimiento de la atención, memoria y seguimiento de instrucciones.</li>
                    <li>Desarrollo de la autonomía, confianza y hábitos escolares.</li>
                    <li>Interacción social positiva y normas de convivencia.</li>
                  </ul>
                </div>

                <div className="nivel-seccion">
                  <h5 className="titulo-seccion">Áreas de aprendizaje</h5>
                  <ul>
                    <li>Reconocimiento y clasificación de colores, formas, números y secuencias.</li>
                    <li>Lenguaje oral, vocabulario y prelectura.</li>
                    <li>Juego estructurado y actividades sensoriales con propósito educativo.</li>
                  </ul>
                </div>

                <div className="nivel-seccion">
                  <h5 className="titulo-seccion">Inglés</h5>
                  <ul>
                    <li>Introducción al idioma mediante rutinas diarias, canciones y juegos.</li>
                    <li>Comprensión y ejecución de instrucciones básicas en inglés.</li>
                    <li>Vocabulario inicial relacionado con su entorno.</li>
                  </ul>
                </div>

                <div className="nivel-seccion">
                  <h5 className="titulo-seccion">Formación en valores cristianos</h5>
                  <ul>
                    <li>Oraciones sencillas y relatos bíblicos adaptados a la edad.</li>
                    <li>Práctica de valores como respeto, obediencia, gratitud y amor al prójimo.</li>
                  </ul>
                </div>

                <div className="nivel-seccion">
                  <h5 className="titulo-seccion">Actividades complementarias</h5>
                  <ul>
                    <li>Cuentos, música y expresión corporal.</li>
                    <li>Juegos al aire libre que fortalecen la motricidad y el trabajo en equipo.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Primaria */}
          <div className="col-md-6 mb-4">
            <div className="card shadow h-100 nivel-card">
              <div className="card-body fs-6 fs-md-5">
                <h3 className="text-danger mb-3">Primaria</h3>

                <p className="texto-nivel">
                  Una etapa clave donde los estudiantes consolidan fundamentos académicos sólidos, desarrollan disciplina de estudio
                  y avanzan hacia un dominio competitivo del idioma inglés a través del sistema Abeka, reconocido por su alto nivel y
                  enfoque en excelencia académica.
                </p>

                <div className="nivel-seccion">
                  <h5 className="titulo-seccion">Habilidades desarrolladas</h5>
                  <ul>
                    <li>Comprensión lectora avanzada y producción escrita estructurada tanto en inglés como en español.</li>
                    <li>Pensamiento lógico-matemático, razonamiento crítico y resolución estratégica de problemas.</li>
                    <li>Autonomía académica, responsabilidad personal y trabajo colaborativo eficaz.</li>
                    <li>Comunicación oral segura, con presentaciones, participaciones guiadas y debates acorde al nivel.</li>
                  </ul>
                </div>

                <div className="nivel-seccion">
                  <h5 className="titulo-seccion">Áreas académicas</h5>
                  <ul>
                    <li><strong>Lengua y Literatura: </strong>Dominio de la lectura comprensiva, análisis de textos y redacción coherente y argumentativa.</li>

                    <li><strong>Matemáticas y Ciencias Naturales: </strong>Fortalecimiento del razonamiento numérico, procesos científicos, experimentación y aplicación práctica.</li>
                    <li><strong>Estudios Sociales y Arte: </strong>Formación integral a través del estudio de la sociedad, cultura, historia y expresión artística.</li>
                  </ul>
                </div>

                <div className="nivel-seccion">
                  <h5 className="titulo-seccion">Inglés — Abeka Program (Nivel exigente y progresivo)</h5>
                  <ul>
                    <li>Lectura y análisis de textos completos acorde al nivel.</li>
                    <li>Redacción estructurada: párrafos desarrollados, composiciones y ejercicios gramaticales rigurosos.</li>
                    <li>Speaking diario con énfasis en pronunciación, vocabulario académico y fluidez.</li>
                    <li>Phonics, spelling, vocabulary & grammar con estándares elevadas según programa Abeka.</li>
                    <li>Desempeño medido a través de evaluaciones periódicas, exposiciones, proyectos y participación oral</li>
                  </ul>
                </div>

                <div className="nivel-seccion">
                  <h5 className="titulo-seccion">Valores cristianos</h5>
                  <ul>
                    <li>Formación en principios bíblicos aplicados a la conducta, toma de decisiones, respeto, integridad y servicio.</li>
                  </ul>
                </div>

                <div className="nivel-seccion">
                  <h5 className="titulo-seccion">Actividades especiales</h5>
                  <ul>
                    <li>Proyectos académicos con estándares altos en investigación y presentación.</li>
                    <li>Ferias de lectura y actividades de fortalecimiento lingüístico.</li>
                    <li>Actos cívicos, devocionales y actividades que integran fe, valores y excelencia educativa.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Secundaria */}
          <div className="col-md-6 mb-4">
            <div className="card shadow h-100 nivel-card">
              <div className="card-body fs-6 fs-md-5">
                <h3 className="text-danger mb-3">Secundaria</h3>

                <p className="texto-nivel">
                  Etapa determinante donde los estudiantes consolidan un pensamiento analítico sólido, desarrollan disciplina 
                  académica y fortalecen habilidades esenciales para la vida universitaria y profesional.
                </p>

                <div className="nivel-seccion">
                  <h5 className="titulo-seccion">Habilidades desarrolladas</h5>
                  <ul>
                    <li>Dominio del pensamiento crítico y capacidad de argumentación.</li>
                    <li>Análisis profundo de información y toma de decisiones informada.</li>
                    <li>Gestión del tiempo, cumplimiento de estándares académicos altos y responsabilidad personal.</li>
                    <li>Comunicación oral y escrita con precisión y claridad en español e inglés.</li>
                  </ul>
                </div>

                <div className="nivel-seccion">
                  <h5 className="titulo-seccion">Áreas académicas</h5>
                  <ul>
                    <li><strong>Matemáticas avanzadas: </strong>Álgebra, Geometría, Pre-Cálculo y razonamiento cuantitativo.</li>
                    <li><strong>Ciencias: </strong>Biología, Física y Química impartidas con enfoque teórico-práctico a través de proyectos, demostraciones y análisis de casos.</li>
                    <li><strong>Español y Literatura: </strong>Comprensión crítica, análisis literario y redacción académica.</li>
                    <li><strong>Estudios Sociales: </strong>Historia, geografía, ciudadanía y análisis del contexto global.</li>
                    <li><strong>Tecnología y Computación: </strong>Herramientas digitales, investigación académica y proyectos aplicados.</li>
                    <li><strong>Electivas formativas: </strong>Áreas de interés que fortalecen habilidades específicas.</li>
                  </ul>
                </div>

                <div className="nivel-seccion">
                  <h5 className="titulo-seccion">Inglés (Sistema ABEKA - Nivel Competitivo)</h5>
                  <ul>
                    <li>Lectura y análisis de textos académicos y argumentativos.</li>
                    <li>Redacción de ensayos formales, reportes, resúmenes y análisis.</li>
                    <li>Presentaciones orales estructuradas, debates y participación activa en clase.</li>
                    <li>Vocabulario avanzado, gramática rigurosa y fluidez conversacional.</li>
                    <li>Énfasis en pensamiento crítico aplicado en inglés como segunda lengua.</li>
                  </ul>
                </div>

                <div className="nivel-seccion">
                  <h5 className="titulo-seccion">Valores cristianos</h5>
                  <ul>
                    <li>Identidad y propósito fundamentados en la Palabra de Dios.</li>
                    <li>Formación ética, carácter, autocontrol, liderazgo y servicio.</li>
                    <li>Convivencia basada en respeto, integridad y responsabilidad.</li>
                  </ul>
                </div>

                <div className="nivel-seccion">
                  <h5 className="titulo-seccion">Actividades especiales</h5>
                  <ul>
                    <li>Proyectos integradores de investigación y análisis.</li>
                    <li>Actividades de servicio comunitario con propósito.</li>
                    <li>Eventos académicos, devocionales y espacios de formación espiritual.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Bachillerato Ciencias y Humanidades */}
          <div className="col-md-6 mb-4">
            <div className="card shadow h-100 nivel-card">
              <div className="card-body fs-6 fs-md-5">
                <h3 className="text-danger mb-3">Bachillerato en Ciencias y Humanidades</h3>

                <p className="texto-nivel">
                  La etapa más rigurosa de nuestra institución, diseñada para estudiantes que buscan un nivel académico competitivo,
                  habilidades de pensamiento avanzado y una preparación sólida para la vida universitaria. Nuestro programa exige
                  excelencia, disciplina y dominio en todas las áreas, con un enfoque especial en inglés.
                </p>

                <div className="nivel-seccion">
                  <h5 className="titulo-seccion">Habilidades desarrolladas</h5>
                  <ul>
                    <li>Pensamiento analítico y resolución de problemas complejos.</li>
                    <li>Investigación, análisis crítico y toma de decisiones fundamentadas.</li>
                    <li>Comunicación profesional oral y escrita.</li>
                    <li>Gestión de proyectos y trabajo colaborativo.</li>
                    <li>Autonomía, responsabilidad y excelencia académica.</li>
                  </ul>
                </div>

                <div className="nivel-seccion">
                  <h5 className="titulo-seccion">Áreas Académicas</h5>
                  <ul>
                    <li><strong>Ciencias: </strong>Biología, Química, Física y Matemáticas avanzadas (pre-cálculo, estadística, lógica).</li>
                    <li><strong>Humanidades: </strong>Literatura universal, análisis crítico, filosofía, historia y ciencias sociales.</li>
                    <li><strong>Informática: </strong>Programación, pensamiento computacional, herramientas digitales avanzadas, manejo de plataformas tecnológicas y desarrollo de proyectos tecnológicos.</li>
                    <li><strong>Formación general: </strong>Oratoria, redacción académica, cultura digital, comprensión del contexto global.</li>
                  </ul>
                </div>

                <div className="nivel-seccion">
                  <h5 className="titulo-seccion">Electivas: Orientadas a intereses vocacionales y universitarios.</h5>
                  <ul>
                    <li>Inglés (Nivel Preuniversitario - Sistema ABEKA)</li>
                    <li>Redacción de ensayos formales y análisis literario.</li>
                    <li>Lectura crítica de textos académicos.</li>
                    <li>Exposiciones, debates y presentaciones profesionales.</li>
                    <li>Preparación para contextos universitarios bilingües.</li>
                  </ul>
                </div>

                <div className="nivel-seccion">
                  <h5 className="titulo-seccion">Valores cristianos</h5>
                  <ul>
                    <li>Liderazgo con integridad y servicio.</li>
                    <li>Ética cristiana aplicada a decisiones reales.</li>
                    <li>Formación espiritual, carácter y responsabilidad social.</li>
                  </ul>
                </div>

                <div className="nivel-seccion">
                  <h5 className="titulo-seccion">Actividades especiales</h5>
                  <ul>
                    <li>Proyectos de investigación y defensa oral.</li>
                    <li>Orientación vocacional y preparación para la universidad.</li>
                    <li>Eventos académicos, devocionales y espacios de crecimiento espiritual.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
