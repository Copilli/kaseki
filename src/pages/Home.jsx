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
        filter: 'blur(1px)',
        zIndex: -1
      }}></div>
      <header className="py-5 text-center border-bottom" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
        <div className="container">
          <h1 className="display-5">KASEKI</h1>
          <p className="lead">Resources and news about the identification of archaeological materials.</p>
        </div>
      </header>

      <div className="row g-4 py-5">
        <div className="col-md-8">
          <article className="card mb-4">
          </article>

          <div className="row">
            <div className="col-sm-6">
              <div className="card mb-3" style={{ filter: 'blur(0.5px)' }}>
                <img src="/kaseki/images/ej.1.jpg" className="card-img-top" alt="placeholder" />
               
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card mb-3" style={{ filter: 'blur(0.5px)' }}>
                <img src="/kaseki/images/ej.2.jpg" className="card-img-top" alt="placeholder" />
                
              </div>
            </div>
          </div>
        </div>

        <aside className="col-md-4">
          <div className="p-3 mb-3 bg-light rounded">
            <h4>About Kaseki</h4>
            <p>Project to assist in the preliminary identification of archaeological materials through images.</p>
          </div>
          <div className="p-3">
            <h4>Links</h4>
            <ol className="list-unstyled">
              <li><a href="#">Resources</a></li>
              <li><a href="#">Publications</a></li>
            </ol>
          </div>
        </aside>
      </div>

      {/* Sección de contenido con imágenes laterales */}
      <section className="container py-5">
        <div className="row g-4">
          {/* Área de contenido principal */}
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm h-100" style={{ filter: 'blur(0.5px)' }}>
              <div className="card-body p-4">
                <h2 className="mb-4 text-primary">¡Coonoce mas sobre Kaseki!</h2>
                
                <p className="lead mb-3">
                Introducción
Esta aplicación está diseñada para facilitar la comprensión de los procesos fundamentales de la documentación arqueológica. Aquí podrás encontrar guías especializadas para identificar materiales y estructuras antiguas.
El usuario podrá analizar imágenes de materiales arqueológicos, reconocer las técnicas con las que fueron elaborados, sus elementos visibles, sus posibles periodos o fechas y la civilización a la que pertenecen. Es importante aclarar que esta sección se enfoca en la “arquitectura” o descripción técnica del objeto, mas no en su contexto histórico.
Cada apartado ofrece contenido confiable, accesible y organizado, ideal para estudiantes y usuarios interesados en comprender cómo registrar información de un objeto arqueológico y qué métodos permiten identificar sus características.

                </p>
                
                <p className="mb-3">
                  Hipótesis 
Debemos hacer que la aplicación pueda detectar los materiales que le mostramos a simple vista con la identificación de objetos arqueológicos de IA, incluido el diseño de la aplicación ya finalizado con toda la información sobre la arqueología obtenida y la IA de identificación en la aplicación.

                </p>
                
                <p className="mb-3">
                  PROCEDIMIENTO:
1. Modificación de robots e inicio del desarrollo de la app.
2. Inician pruebas de identificación en la app y en el robot.
3. Terminar ambos proyectos para si poder presentarlos a la competencia. 

                </p>

                <h4 className="mt-4 mb-3 text-primary">Subtítulo Adicional</h4>
                <p className="mb-3">
                  RESULTADOS:
Tenemos tanto la aplicación como el robot para poder compartirlo y llevarlo a cabo a la competición, donde mostramos lo que estuvimos haciendo, tanto el robot como la aplicación, donde mostraremos las mejores de estos dos prototipos creados por el equipo detrás de esto.


                </p>

                <ul className="list-unstyled">
                  <li className="mb-2">✓ Punto importante número uno</li>
                  <li className="mb-2">✓ Punto importante número dos</li>
                  <li className="mb-2">✓ Punto importante número tres</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Columna lateral con imágenes */}
          <div className="col-lg-4">
            <div className="d-flex flex-column gap-3">
              {/* Imagen 1 */}
              <div className="card border-0 shadow-sm" style={{ filter: 'blur(0.5px)' }}>
                <img 
                  src="/kaseki/images/ej.3.jpg" 
                  className="card-img-top" 
                  alt="Imagen 1"
                  style={{objectFit: 'cover', height: '200px'}}
                />
               
              </div>

              {/* Imagen 2 */}
              <div className="card border-0 shadow-sm" style={{ filter: 'blur(0.5px)' }}>
                <img 
                  src="/kaseki/images/ej.4.jpg" 
                  className="card-img-top" 
                  alt="Imagen 2"
                  style={{objectFit: 'cover', height: '200px'}}
                />
               
              </div>

              {/* Imagen 3 */}
              <div className="card border-0 shadow-sm" style={{ filter: 'blur(0.5px)' }}>
                <img 
                  src="/kaseki/images/ej.5.jpg" 
                  className="card-img-top" 
                  alt="Imagen 3"
                  style={{objectFit: 'cover', height: '200px'}}
                />
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
