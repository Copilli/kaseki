import React from 'react'

export default function Home() {
  return (
    <div>
      <header className="py-5 text-center border-bottom">
        <div className="container">
          <h1 className="display-5">KASEKI</h1>
          <p className="lead">Resources and news about the identification of archaeological materials.</p>
        </div>
      </header>

      <div className="row g-4 py-5">
        <div className="col-md-8">
          <article className="card mb-4">
            <div className="card-body">
              <h2 className="card-title">COPILLI TEAM</h2>
              <p className="card-text">Do you want to meet the principal team? Click below</p>
              <a className="btn btn-primary" href="#">To About Us</a>
            </div>
          </article>

          <div className="row">
            <div className="col-sm-6">
              <div className="card mb-3">
                <img src="https://picsum.photos/600/300?random=1" className="card-img-top" alt="placeholder" />
                <div className="card-body">
                  <h5 className="card-title">Article 1</h5>
                  <p className="card-text">Brief summary of article 1.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card mb-3">
                <img src="https://picsum.photos/600/300?random=2" className="card-img-top" alt="placeholder" />
                <div className="card-body">
                  <h5 className="card-title">Article 2</h5>
                  <p className="card-text">Resumen breve del artículo 2.</p>
                </div>
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
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <h2 className="mb-4 text-primary">Título del Contenido</h2>
                
                <p className="lead mb-3">
                  Este es el espacio principal para agregar información extensa. 
                  Puedes escribir varios párrafos, agregar detalles importantes sobre tu proyecto,
                  noticias, actualizaciones o cualquier contenido relevante.
                </p>
                
                <p className="mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                
                <p className="mb-3">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                  culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <h4 className="mt-4 mb-3 text-primary">Subtítulo Adicional</h4>
                <p className="mb-3">
                  Aquí puedes continuar agregando más información. Esta sección es completamente 
                  editable desde el código en VS Code. Puedes agregar más párrafos, listas, o 
                  cualquier otro contenido HTML que necesites.
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
              <div className="card border-0 shadow-sm">
                <img 
                  src="https://picsum.photos/seed/home-side-1/400/250" 
                  className="card-img-top" 
                  alt="Imagen 1"
                  style={{objectFit: 'cover', height: '200px'}}
                />
                <div className="card-body">
                  <h6 className="card-title mb-1">Imagen 1</h6>
                  <p className="card-text small text-muted">
                    Descripción breve de la imagen 1
                  </p>
                </div>
              </div>

              {/* Imagen 2 */}
              <div className="card border-0 shadow-sm">
                <img 
                  src="https://picsum.photos/seed/home-side-2/400/250" 
                  className="card-img-top" 
                  alt="Imagen 2"
                  style={{objectFit: 'cover', height: '200px'}}
                />
                <div className="card-body">
                  <h6 className="card-title mb-1">Imagen 2</h6>
                  <p className="card-text small text-muted">
                    Descripción breve de la imagen 2
                  </p>
                </div>
              </div>

              {/* Imagen 3 */}
              <div className="card border-0 shadow-sm">
                <img 
                  src="https://picsum.photos/seed/home-side-3/400/250" 
                  className="card-img-top" 
                  alt="Imagen 3"
                  style={{objectFit: 'cover', height: '200px'}}
                />
                <div className="card-body">
                  <h6 className="card-title mb-1">Imagen 3</h6>
                  <p className="card-text small text-muted">
                    Descripción breve de la imagen 3
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
