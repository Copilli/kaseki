import React from 'react';

// CONFIGURACIÓN: Imágenes para cada carrusel
const carouselImages = {
  carousel1: [
    '/kaseki/images/piedra.jpg',
    '/kaseki/images/piedra2.jpg',
    '/kaseki/images/piedra3.jpg'
  ],
  carousel2: [
    '/kaseki/images/imagen2.1.jpg',
    '/kaseki/images/imagen2.2.jpg',
    '/kaseki/images/imagen2.3.jpg'
  ],
  carousel3: [
    '/kaseki/images/imagen3.1.jpg',
    '/kaseki/images/imagen3.2.jpg',
    '/kaseki/images/imagen3.3.jpg'
  ]
};

export default function Galeria() {
  return (
    <div className="container py-4" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <h1 className="text-center mb-5">Galería</h1>

      {/* Row 1: Carousel right, Card left */}
      <div className="row mb-5 align-items-center">
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Colgante Egipcio</h5>
              <p className="card-text">Descripción del primer elemento de la galería. Aquí puedes agregar información relevante sobre la imagen o el objeto arqueológico.</p>
              <p className="card-text"><small className="text-muted">Fecha: 2023</small></p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div id="carousel1" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {carouselImages.carousel1.map((src, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <img src={src} className="d-block w-100 rounded" alt={`Imagen 1.${index + 1}`} />
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carousel1" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carousel1" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      {/* Row 2: Carousel left, Card right */}
      <div className="row mb-5 align-items-center">
        <div className="col-md-6 order-md-2">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Título 2</h5>
              <p className="card-text">Descripción del segundo elemento. Más detalles sobre este hallazgo arqueológico.</p>
              <p className="card-text"><small className="text-muted">Fecha: 2022</small></p>
            </div>
          </div>
        </div>
        <div className="col-md-6 order-md-1">
          <div id="carousel2" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {carouselImages.carousel2.map((src, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <img src={src} className="d-block w-100 rounded" alt={`Imagen 2.${index + 1}`} />
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carousel2" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carousel2" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      {/* Row 3: Carousel right, Card left */}
      <div className="row mb-5 align-items-center">
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Título 3</h5>
              <p className="card-text">Descripción del tercer elemento. Información adicional para completar la galería.</p>
              <p className="card-text"><small className="text-muted">Fecha: 2021</small></p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div id="carousel3" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {carouselImages.carousel3.map((src, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <img src={src} className="d-block w-100 rounded" alt={`Imagen 3.${index + 1}`} />
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carousel3" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carousel3" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}