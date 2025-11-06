import React from 'react'

export default function Home() {
  return (
    <div>
      <header className="py-5 text-center border-bottom">
        <div className="container">
          <h1 className="display-5">Blog</h1>
          <p className="lead">Recursos y novedades sobre identificación de materiales arqueológicos.</p>
        </div>
      </header>

      <div className="row g-4 py-5">
        <div className="col-md-8">
          <article className="card mb-4">
            <div className="card-body">
              <h2 className="card-title">Entrada destacada</h2>
              <p className="card-text">Aquí puedes publicar novedades, métodos, o estudios de caso relacionados con materiales arqueológicos.</p>
              <a className="btn btn-primary" href="#">Leer más</a>
            </div>
          </article>

          <div className="row">
            <div className="col-sm-6">
              <div className="card mb-3">
                <img src="https://picsum.photos/600/300?random=1" className="card-img-top" alt="placeholder" />
                <div className="card-body">
                  <h5 className="card-title">Artículo 1</h5>
                  <p className="card-text">Resumen breve del artículo 1.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card mb-3">
                <img src="https://picsum.photos/600/300?random=2" className="card-img-top" alt="placeholder" />
                <div className="card-body">
                  <h5 className="card-title">Artículo 2</h5>
                  <p className="card-text">Resumen breve del artículo 2.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside className="col-md-4">
          <div className="p-3 mb-3 bg-light rounded">
            <h4>Sobre Kaseki</h4>
            <p>Proyecto para ayudar a la identificación preliminar de materiales arqueológicos mediante imágenes.</p>
          </div>
          <div className="p-3">
            <h4>Enlaces</h4>
            <ol className="list-unstyled">
              <li><a href="#">Recursos</a></li>
              <li><a href="#">Publicaciones</a></li>
            </ol>
          </div>
        </aside>
      </div>
    </div>
  )
}
