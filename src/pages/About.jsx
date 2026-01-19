import React, { useEffect } from 'react'

// CONFIGURACIÓN: Lista única de tarjetas (un solo objeto de configuración)
const cardsData = [
  {
    id: 0,
    name: 'Regina Garcia',
    image: '/kaseki/images/regina.jpeg',
    info: 'Diseñadora del equipo Kaseki. Especialista en diseño de fondos para la aplicación.'
  },
  {
    id: 1,
    name: 'Diego Velazquez',
    image: '/kaseki/images/diego.jpg',
    info: 'Mecánico y programador del equipo Kaseki. Experto en programación de modelos robóticos para Lego League.'
  },
  {
    id: 2,
    name: 'Gael Casas',
    image: '/kaseki/images/gael.jpeg',
    info: 'Constructor y diseñador del equipo Kaseki. Experto en diseño y construcción de modelos robóticos para Lego League.'
  },
  {
    id: 3,
    name: 'Yareni Saavedra',
    image: '/kaseki/images/yare.jpeg',
    info: 'Programadora líder del equipo Kaseki. Especialista en desarrollo de aplicaciones y programación.'
  },
  {
    id: 4,
    name: 'Daniel Ornelas',
    image: '/kaseki/images/pet.png',
    info: 'Plataforma innovadora para la identificación de materiales arqueológicos mediante IA.'
  },
  {
    id: 5,
    name: 'Hilary Casillas',
    image: '/kaseki/images/ej.2.jpg',
    info: 'Utilizamos inteligencia artificial y aprendizaje automático para análisis precisos.'
  },
  {
    id: 6,
    name: 'Helaman Gonzalez',
    image: '/kaseki/images/ej.4.jpg',
    info: 'Herramientas educativas para estudiantes y profesionales de arqueología.'
  },
  {
    id: 7,
    name: 'Valentina Barajas',
    image: '/kaseki/images/ej.5.jpg',
    info: 'Trabajamos en conjunto con instituciones académicas y museos.'
  },
  {
    id: 8,
    name: 'Naomi Oceguera',
    image: '/kaseki/images/ej.2.jpg',
    info: 'Amplia colección de datos sobre materiales arqueológicos históricos.'
  },
  {
    id: 9,
    name: 'Amahia Gomez',
    image: '/kaseki/images/ej.4.jpg',
    info: 'Herramientas accesibles para investigadores y estudiantes de todo el mundo.'
  }
]

export default function About(){
  const cards = cardsData

  useEffect(() => {
    document.body.style.backgroundImage = 'url(/kaseki/images/pinkbackground.png)'
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
        backgroundImage: 'url(/kaseki/images/pinkbackground.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        filter: 'blur(8px)',
        zIndex: -1
      }}></div>
      <h2 className="text-center mb-4">Acerca de Nosotros</h2>
      
      {/* Tarjeta hero grande con imagen y texto */}
      <div className="card mb-5 shadow-lg border-0" style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(6px)' }}>
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
          <div className="col-md-6 d-flex align-items-center justify-content-center p-3">
            <img 
              src="/kaseki/images/pet2.png" 
              className="img-fluid rounded-end" 
              alt="Artefactos arqueológicos"
              style={{ width: '100%', height: 'auto', maxHeight: '35vh', objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>

      {/* Sección de miembros y proyecto (unificada) */}
      <h3 className="text-center mb-4">Nuestro Equipo</h3>
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-3">
        {cards.map((card, idx) => (
          <div className="col" key={`${card.name}-${idx}`}>
            <div className="card about-card shadow-sm" style={{ aspectRatio: '1/1', background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(6px)', overflow: 'hidden' }}>
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
                <h6 className="card-title fw-bold mb-1" style={{fontSize: '0.85rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{card.name}</h6>
                <p className="card-text mb-0" style={{fontSize: '0.7rem', lineHeight: '1.2', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden'}}>{card.info}</p>
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
