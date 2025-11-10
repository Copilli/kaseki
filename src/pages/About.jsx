import React from 'react'

// CONFIGURACIÓN: Modifica las imágenes y descripciones desde aquí
const initialCards = [
  {
    id: 0,
    name: 'Dr. Juan Pérez', // Cambia el nombre del integrante aquí
    image: 'https://picsum.photos/seed/about-0/600/400', // Cambia la URL de la imagen aquí
    info: 'Miembro del equipo especializado en arqueología. Con experiencia en identificación de materiales cerámicos y líticos.'
  },
  {
    id: 1,
    name: 'Dra. María González',
    image: 'https://picsum.photos/seed/about-1/600/400',
    info: 'Investigador principal del proyecto Kaseki. Experto en análisis de materiales arqueológicos mediante técnicas de imagen.'
  },
  {
    id: 2,
    name: 'Ing. Carlos Rodríguez',
    image: 'https://picsum.photos/seed/about-2/600/400',
    info: 'Desarrollador web y especialista en inteligencia artificial aplicada a la arqueología.'
  },
  {
    id: 3,
    name: 'Lic. Ana Martínez',
    image: 'https://picsum.photos/seed/about-3/600/400',
    info: 'Coordinador de investigación y análisis de datos arqueológicos. Especialista en clasificación de artefactos.'
  },
  {
    id: 4,
    name: 'Dr. Roberto López',
    image: 'https://picsum.photos/seed/about-4/600/400',
    info: 'Consultor externo y asesor académico del proyecto. PhD en Arqueología Mesoamericana.'
  }
]

export default function About(){
  const cards = initialCards

  return (
    <div>
      <h2 className="mb-4">About Us</h2>
      <p>This section provides information about our team.</p>
      

      <div className="row gy-4">
        {cards.map((card) => (
          <div className="col-md-4" key={card.id}>
            <div className="card about-card h-100 shadow-sm">
              <div className="card-img-top img-placeholder" style={{backgroundImage:`url(${card.image})`}}></div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{card.name}</h5>
                

                <p className="card-text">{card.info}</p>

                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
