import React from 'react'

// CONFIGURACIÓN: Modifica las imágenes y descripciones desde aquí
const initialCards = [
  {
    id: 0,
    name: 'Regina Garcia',
    image: '/images/regina.jpg',
    info: 'Designer on the Kaseki team. Specialist in background design for the app.'
  },
  {
    id: 1,
    name: 'Ana Sandoval',
    image: '/images/ana.jpg',
    info: 'Designer for the Kaseki team. Expert in logo and character design for the app.'
  },
  {
    id: 2,
    name: 'Diego Velazquez',
    image: '/images/diego.jpg',
    info: 'Mechanic and programmer for the Kaseki team. Expert in programming robotic models for Lego League.'
  },
  {
    id: 3,
    name: 'Gael Casas',
    image: '/images/gael.jpg',
    info: 'Constructor and designer for the Kaseki team. Expert in design and construction of robotic models for Lego League.'
  },
  {
    id: 4,
    name: 'Yareni Saavedra',
    image: '/images/yareni.jpg',
    info: 'Lead programmer for the Kaseki team. Specialist in app development and programming.'
  }
]

export default function About(){
  const cards = initialCards

  return (
    <div>
      <h2 className="mb-4">About Us</h2>
      
      {/* Tarjeta hero grande con imagen y texto */}
      <div className="card mb-5 shadow-lg border-0">
        <div className="row g-0">
          <div className="col-md-6">
            <div className="card-body p-5 d-flex flex-column justify-content-center h-100">
              <h3 className="card-title fw-bold mb-3">Kaseki Team</h3>
              <p className="card-text lead mb-3">
                Somos un equipo dedicado a la identificación y preservación del patrimonio arqueológico mediante tecnología moderna.
              </p>
              <p className="card-text">
                Nuestro objetivo es hacer accesible la arqueología a través de herramientas de inteligencia artificial y búsqueda web, permitiendo identificar materiales y civilizaciones de cualquier parte del mundo.
              </p>
              <p className="card-text mb-0">
                <small className="text-muted">Combinando pasión por la historia con innovación tecnológica</small>
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <img 
              src="/images/hero.jpg" 
              className="img-fluid rounded-end" 
              alt="Archaeological artifacts"
              style={{height: '100%', objectFit: 'cover', minHeight: '350px'}}
            />
          </div>
        </div>
      </div>

      {/* Sección de miembros del equipo */}
      <h3 className="mb-4">Nuestro Equipo</h3>
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
    </div>
  )
}
