import React, { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    document.body.style.backgroundImage = 'url(/kaseki/images/bluebackground.png)'
    document.body.style.backgroundSize = 'cover'
    document.body.style.backgroundRepeat = 'no-repeat'
    document.body.style.backgroundAttachment = 'fixed'
    document.body.style.backgroundPosition = 'center'
    document.body.style.minHeight = '100vh'

    return () => {
      document.body.style.backgroundImage = ''
      document.body.style.backgroundSize = ''
      document.body.style.backgroundRepeat = ''
      document.body.style.backgroundAttachment = ''
      document.body.style.backgroundPosition = ''
      document.body.style.minHeight = ''
    }
  }, [])

  return (
    <div style={{position: 'relative', minHeight: '100vh'}}>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url(/kaseki/images/bluebackground.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        filter: 'blur(8px)',
        zIndex: -1
      }}></div>
      <header className="py-5 text-center border-bottom" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
        <div className="container">
          <h1 className="display-5">KASEKI</h1>
          <p className="lead">Identificación asistida por IA de materiales y origen/civilización.</p>
        </div>
      </header>

      <section className="container py-3">
        <div className="row g-3">
          <div className="col-md-6">
            <div className="card border-0 shadow-sm" style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(6px)' }}>
              <div className="card-body">
                <h3 className="h5 mb-2">Identificación de Materiales</h3>
                <p className="mb-0">Detecta la composición física (cerámica, lítica, metalurgia), técnicas de manufactura y estado de conservación.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-0 shadow-sm" style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(6px)' }}>
              <div className="card-body">
                <h3 className="h5 mb-2">Origen y Civilización</h3>
                <p className="mb-0">Determina la filiación cultural, periodo cronológico y región, basándose en iconografía y estilo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row g-4 py-5">
          <div className="col-md-8">
            <section>
              <div className="card border-0 shadow-sm mb-5" style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(6px)' }}>
                <div className="card-body">
                  <h2 className="mb-3">¿Cómo Funciona Kaseki?</h2>
                  <p>Kaseki es una aplicación diseñada para facilitar la comprensión de los procesos fundamentales de la documentación arqueológica. Aquí podrás encontrar guías especializadas para identificar materiales y estructuras antiguas mediante análisis de imágenes con inteligencia artificial.</p>

                  <h3>¿Qué Problema Estamos Resolviendo?</h3>
                  <p>La identificación de materiales arqueológicos tradicionalmente requiere años de experiencia y conocimiento especializado. Muchos estudiantes y aficionados carecen de acceso a expertos que puedan ayudarles a identificar y documentar correctamente los materiales que encuentran. Esto puede llevar a documentación inadecuada o pérdida de información valiosa.</p>

                  <h3>¿Cómo Lo Resolvemos?</h3>
                  <p>El usuario podrá analizar imágenes de materiales arqueológicos utilizando inteligencia artificial, reconociendo las técnicas con las que fueron elaborados, sus elementos visibles, sus posibles periodos o fechas y la civilización a la que pertenecen. Es importante aclarar que nos enfocamos en la "arquitectura" o descripción técnica del objeto, más no en su contexto histórico.</p>

                  <h3>¿Por Qué Kaseki?</h3>
                  <p>El nombre "Kaseki" (化石) proviene del japonés y significa "fósil" o "vestigio". Representa nuestra misión de preservar y comprender el pasado a través de la tecnología moderna. La inteligencia artificial nos permite democratizar el acceso al conocimiento arqueológico.</p>

                  <h3>¿Existen Otras Soluciones?</h3>
                  <p>Sí, pero creamos Kaseki con nuestra propia perspectiva y enfoque. Desarrollamos esta herramienta desde cero para ofrecer contenido confiable, accesible y organizado, ideal para estudiantes y usuarios interesados en comprender cómo registrar información de un objeto arqueológico y qué métodos permiten identificar sus características.</p>

                  <h3>¿Cómo Tendrá Kaseki un Impacto Positivo?</h3>
                  <p>Estamos en fase de pruebas y crecimiento, pero nuestra visión es clara: proporcionar herramientas accesibles para la documentación arqueológica, fomentando el interés por la preservación del patrimonio cultural y facilitando el aprendizaje de nuevas generaciones de arqueólogos y entusiastas.</p>

                  <h3>Nuestro Proceso</h3>
                  <p>El desarrollo incluye:</p>
                  <ul>
                    <li>Integración de IA con modelos de visión artificial avanzados</li>
                    <li>Pruebas continuas de identificación y precisión</li>
                    <li>Diseño enfocado en la experiencia del usuario</li>
                    <li>Validación con fuentes arqueológicas confiables</li>
                  </ul>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-sm-6">
                  <div className="card mb-3 border-0 shadow-sm" style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(6px)' }}>
                    <img src="/kaseki/images/ej.1.jpg" className="card-img-top" alt="Ejemplo arqueológico" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card mb-3 border-0 shadow-sm" style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(6px)' }}>
                    <img src="/kaseki/images/ej.2.jpg" className="card-img-top" alt="Ejemplo arqueológico" />
                  </div>
                </div>
              </div>
            </section>
          </div>

          <aside className="col-md-4">
            <div className="p-3 mb-3 rounded" style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(6px)' }}>
              <h4>Acerca de Kaseki</h4>
              <p>Proyecto para asistir en la identificación preliminar de materiales arqueológicos a través de imágenes.</p>
            </div>
            <div className="p-4 mb-3 card" style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(6px)' }}>
              <h4 className="fst-italic">Recursos Arqueológicos</h4>
              <ul className="list-unstyled">
                <li className="py-2 border-top">
                  <a href="https://www.inah.gob.mx/" 
                    className="text-decoration-none link-body-emphasis d-block">
                    <strong>INAH – Instituto Nacional de Antropología e Historia</strong><br />
                    <small>Portal oficial del INAH con recursos sobre arqueología mexicana.</small>
                  </a>
                </li>
                <li className="py-2 border-top">
                  <a href="https://arqueologiamexicana.mx/" 
                    className="text-decoration-none link-body-emphasis d-block">
                    <strong>Arqueología Mexicana</strong><br />
                    <small>Revista especializada en la arqueología e historia de México.</small>
                  </a>
                </li>
                <li className="py-2 border-top">
                  <a href="https://www.cambridge.org/core/journals/latin-american-antiquity" 
                    className="text-decoration-none link-body-emphasis d-block">
                    <strong>Latin American Antiquity</strong><br />
                    <small>Publicaciones científicas sobre arqueología latinoamericana.</small>
                  </a>
                </li>
                <li className="py-2 border-top">
                  <a href="https://www.sciencedirect.com/journal/journal-of-archaeological-science" 
                    className="text-decoration-none link-body-emphasis d-block">
                    <strong>Journal of Archaeological Science</strong><br />
                    <small>Investigación científica aplicada a la arqueología.</small>
                  </a>
                </li>
                <li className="py-2 border-top">
                  <a href="https://www.metmuseum.org/about-the-met/collection-areas/the-libraries/watson-digital-collections" 
                    className="text-decoration-none link-body-emphasis d-block">
                    <strong>Metropolitan Museum – Archaeological Resources</strong><br />
                    <small>Colecciones digitales y recursos sobre arte y arqueología antigua.</small>
                  </a>
                </li>
              </ul>
              
              <h4 className="fst-italic mt-4">Bibliografía</h4>
              <ol className="list-unstyled mb-0">
                <li><a href="https://www.inah.gob.mx/">INAH – Instituto Nacional de Antropología e Historia</a></li>
                <li><a href="https://arqueologiamexicana.mx/">Arqueología Mexicana</a></li>
                <li><a href="https://www.cambridge.org/core/journals/latin-american-antiquity">Latin American Antiquity</a></li>
                <li><a href="https://www.sciencedirect.com/journal/journal-of-archaeological-science">Journal of Archaeological Science</a></li>
                <li><a href="https://www.metmuseum.org/about-the-met/collection-areas/the-libraries/watson-digital-collections">Metropolitan Museum – Archaeological Resources</a></li>
                <li><a href="https://www.sciencedirect.com/topics/social-sciences/archaeological-materials">Archaeological Materials – ScienceDirect</a></li>
              </ol>
            </div>

            <div className="d-flex flex-column gap-3">
              <div className="card border-0 shadow-sm" style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(6px)' }}>
                <img 
                  src="/kaseki/images/ej.3.jpg" 
                  className="card-img-top" 
                  alt="Ejemplo arqueológico"
                  style={{objectFit: 'cover', height: '200px'}}
                />
              </div>

              <div className="card border-0 shadow-sm" style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(6px)' }}>
                <img 
                  src="/kaseki/images/ej.4.jpg" 
                  className="card-img-top" 
                  alt="Ejemplo arqueológico"
                  style={{objectFit: 'cover', height: '200px'}}
                />
              </div>

              <div className="card border-0 shadow-sm" style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(6px)' }}>
                <img 
                  src="/kaseki/images/ej.5.jpg" 
                  className="card-img-top" 
                  alt="Ejemplo arqueológico"
                  style={{objectFit: 'cover', height: '200px'}}
                />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
