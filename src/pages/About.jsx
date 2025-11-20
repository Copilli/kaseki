import React from 'react'

// CONFIGURACIÓN: Modifica las imágenes y descripciones desde aquí
const initialCards = [
  {
    id: 0,
    name: 'Regina Garcia', // Cambia el nombre del integrante aquí
    image: 'https://picsum.photos/seed/about-0/600/400', // Cambia la URL de la imagen aquí
    info: 'Designer on the Kaseki team. Specialist in background design for the app.'
  },
  {
    id: 1,
    name: 'Ana Sandoval',
    image: 'https://picsum.photos/seed/about-1/600/400',
    info: 'Designer for the Kaseki team. Expert in logo and character design for the app.'
  },
  {
    id: 2,
    name: 'Diego Velazquez',
    image: 'https://picsum.photos/seed/about-2/600/400',
    info: 'Mecanico y programador del equipo Kaseki. Experto en programacion de modelos roboticos para Lego League.'
  },
  {
    id: 3,
    name: 'Gael Casas',
    image: 'https://picsum.photos/seed/about-3/600/400',
    info: 'Constructor y diseñador del equipo Kaseki. Experto en diseño y construccion de modelos roboticos para Lego League'
  },
  {
    id: 4,
    name: 'Yareni Saavedra',
    image: 'https://picsum.photos/seed/about-4/600/400',
    info: 'Programadora principal del equipo Kaseki. Especialista en desarrollo y programacion de la app.'
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
