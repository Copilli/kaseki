import React, { useEffect } from 'react'

// CONFIGURACIÓN: Modifica las imágenes y descripciones desde aquí
const initialCards = [
  {
    id: 0,
    name: 'Regina Garcia',
    image: '/Kaseki/images/regina.jpeg',
    info: 'Diseñadora del equipo Kaseki. Especialista en diseño de fondos para la aplicación.'
  },
  {
    id: 1,
    name: 'Ana Sandoval',
    image: '/Kaseki/images/ej.1.jpg',
    info: 'Diseñadora del equipo Kaseki. Experta en diseño de logos y personajes para la aplicación.'
  },
  {
    id: 2,
    name: 'Diego Velazquez',
    image: '/Kaseki/images/diego.jpg',
    info: 'Mecánico y programador del equipo Kaseki. Experto en programación de modelos robóticos para Lego League.'
  },
  {
    id: 3,
    name: 'Gael Casas',
    image: '/Kaseki/images/ej.3.jpg',
    info: 'Constructor y diseñador del equipo Kaseki. Experto en diseño y construcción de modelos robóticos para Lego League.'
  },
  {
    id: 4,
    name: 'Yareni Saavedra',
    image: '/Kaseki/images/yare.jpeg',
    info: 'Programadora líder del equipo Kaseki. Especialista en desarrollo de aplicaciones y programación.'
  }
]

export default function About(){
  const cards = initialCards

  useEffect(() => {
    document.body.style.backgroundImage = 'url(/Kaseki/images/pinkbackground.png)'
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
    <div>
      <h2 className="text-center mb-4">Acerca de Nosotros</h2>
      
      {/* Tarjeta hero grande con imagen y texto */}
      <div className="card mb-5 shadow-lg border-0">
        <div className="row g-0">
          <div className="col-md-6">
            <div className="card-body p-5 d-flex flex-column justify-content-center h-100">
              <h3 className="card-title fw-bold mb-3">Equipo Kaseki</h3>
              <p className="card-text lead mb-3">
                Somos un equipo dedicado a la identificación y preservación del patrimonio arqueológico utilizando tecnología moderna.
              </p>
              <p className="card-text">
                Nuestro objetivo es hacer la arqueología accesible a través de herramientas de inteligencia artificial y búsqueda web, permitiendo la identificación de materiales y civilizaciones desde cualquier parte del mundo.
              </p>
              <p className="card-text mb-0">
                <small className="text-muted">Combinando la pasión por la historia con la innovación tecnológica</small>
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <img 
              src="/Kaseki/images/pet2.png" 
              className="img-fluid rounded-end" 
              alt="Artefactos arqueológicos"
              style={{height: '100%', objectFit: 'cover', minHeight: '150px'}}
            />
          </div>
        </div>
      </div>

      {/* Sección de miembros del equipo */}
      <h3 className="text-center mb-4">Nuestro Equipo</h3>
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-3">
        {cards.map((card) => (
          <div className="col" key={card.id}>
            <div className="card about-card shadow-sm" style={{aspectRatio: '1/1'}}>
              <div 
                className="card-img-top" 
                style={{
                  backgroundImage:`url(${card.image})`,
                  height: '60%',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
              <div className="card-body d-flex flex-column justify-content-center p-2" style={{height: '40%'}}>
                <h6 className="card-title fw-bold mb-1" style={{fontSize: '0.85rem'}}>{card.name}</h6>
                <p className="card-text mb-0" style={{fontSize: '0.7rem', lineHeight: '1.2'}}>{card.info}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <br/>

      <div className="container mb-5">
        <h3 className="text-center mb-4">Dejanos tu opinión</h3>
        <div className="d-flex justify-content-center">
          <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSceCwHs2ba1e8Q5UzroFYOUVSLqsvVn43sVbsNZWMv-I9NGDw/viewform?embedded=true"
              width="100%" height="1200" frameBorder="0" marginHeight="0" marginWidth="0"
              style={{maxWidth: '640px', border: 'none'}}>Cargando…</iframe>
        </div>
      </div>
    </div>
  )
}
