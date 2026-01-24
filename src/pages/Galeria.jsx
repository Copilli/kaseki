import React, { useEffect } from 'react';

// CONFIGURACIÓN: Imágenes para cada carrusel
const carouselImages = {
  carousel1: [
    '/kaseki/images/calendar.jpg',
    '/kaseki/images/calendar2.jpg',
    '/kaseki/images/calendar3.jpg'
  ],
  carousel2: [
    '/kaseki/images/piedra.jpg',
    '/kaseki/images/piedra2.jpg',
    '/kaseki/images/piedra3.jpg'
  ],
  carousel3: [
    '/kaseki/images/circle.jpg',
    '/kaseki/images/circle2.jpg',
    '/kaseki/images/circle3.jpg'
  ],
  carousel4: [
    '/kaseki/images/bird.jpeg',
    '/kaseki/images/bird2.jpeg',
    
  ],
  carousel5: [
    '/kaseki/images/jaguar.jpg',
    '/kaseki/images/jaguar2.jpg',
    '/kaseki/images/jaguar3.jpg'
  ],
  carousel6: [
    '/kaseki/images/libro.jpg',
    '/kaseki/images/libro2.jpg',
    '/kaseki/images/libro3.jpg'
  ]
};

export default function Galeria() {
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
      <div className="container py-4" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <h1 className="text-center mb-5" style={{
        fontSize: '3.5rem',
        fontWeight: 'bold',
        color: '#8B4513',
        textTransform: 'uppercase',
        letterSpacing: '4px',
        textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
        marginTop: '2rem',
        marginBottom: '3rem',
        borderBottom: '4px solid #D2691E',
        paddingBottom: '1rem',
        background: 'linear-gradient(135deg, #8B4513 0%, #D2691E 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>Galería</h1>

      {/* Row 1: Carousel right, Card left */}
      <div className="row mb-5 align-items-center">
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title" style={{
                fontSize: '1.8rem',
                fontWeight: 'bold',
                color: '#8B4513',
                textAlign: 'center',
                marginBottom: '1.5rem',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                borderBottom: '3px solid #D2691E',
                paddingBottom: '0.5rem'
              }}>CALENDARIO MAYA</h5>
              <p className="card-text">
                <strong>Cultura Probable:</strong> Azteca (con posibles influencias o interpretaciones modernas)
              </p>
              <p className="card-text">
                <strong>Periodo:</strong> Posclásico Tardío (si fuera auténtico), pero probablemente una recreación moderna.
              </p>
              <p className="card-text">
                <strong>Región:</strong> Mesoamérica, específicamente el centro de México.
              </p>
              <p className="card-text">
                <strong>Justificación:</strong> El disco presenta una serie de elementos iconográficos que recuerdan a la cultura Azteca. La estructura radial general y los glifos/símbolos inscritos alrededor del círculo evocan el Calendario Azteca o la Piedra del Sol. El rostro central, con la lengua extendida, es una representación de una deidad solar o terrestre. La estilización general es consistente con el arte mesoamericano, particularmente el Azteca, pero la ejecución parece carecer de la precisión y detalle que se esperaría de un artefacto antiguo genuino.
              </p>
              <p className="card-text"><small className="text-muted">Fecha: 2023</small></p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div id="carousel1" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {carouselImages.carousel1.map((src, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <img 
                    src={src} 
                    className="d-block w-100 rounded" 
                    alt={`Imagen 1.${index + 1}`}
                    style={{
                      height: '400px',
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                  />
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
              <h5 className="card-title" style={{
                fontSize: '1.8rem',
                fontWeight: 'bold',
                color: '#8B4513',
                textAlign: 'center',
                marginBottom: '1.5rem',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                borderBottom: '3px solid #D2691E',
                paddingBottom: '0.5rem'
              }}>COLGANTE EGIPCIO</h5>
              <p className="card-text">
                <strong>Cultura:</strong> Antiguo Egipto
              </p>
              <p className="card-text">
                <strong>Periodo:</strong> Moderno
              </p>
              <p className="card-text">
                <strong>Región:</strong> Producción occidental.
              </p>
              <p className="card-text">
                <strong>Justificación:</strong> El objeto presenta una serie de jeroglíficos egipcios. La forma general de la tablilla y la disposición de los 'jeroglíficos' en líneas sugieren inscripciones egipcias, pero la falta de autenticidad en los símbolos individuales indica que es una creación moderna inspirada en el arte y la escritura del antiguo Egipto. La presencia de símbolos que parecen inventados o malinterpretados de los jeroglíficos reales respalda aún más esta conclusión. La paleta de colores (gris con detalles dorados) es común en imitaciones modernas, a menudo asociadas con objetos decorativos y souvenirs.
              </p>
              <p className="card-text"><small className="text-muted">Fecha: 2022</small></p>
            </div>
          </div>
        </div>
        <div className="col-md-6 order-md-1">
          <div id="carousel2" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {carouselImages.carousel2.map((src, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <img 
                    src={src} 
                    className="d-block w-100 rounded" 
                    alt={`Imagen 2.${index + 1}`}
                    style={{
                      height: '400px',
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                  />
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
              <h5 className="card-title" style={{
                fontSize: '1.8rem',
                fontWeight: 'bold',
                color: '#8B4513',
                textAlign: 'center',
                marginBottom: '1.5rem',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                borderBottom: '3px solid #D2691E',
                paddingBottom: '0.5rem'
              }}>PIEDRA OLMECA</h5>
              <p className="card-text">
                <strong>Cultura Probable:</strong> Olmeca (posible influencia o inspiración moderna).
              </p>
              <p className="card-text">
                <strong>Periodo:</strong> No aplicable a una réplica moderna, pero la inspiración sería del Periodo Preclásico Medio (1200-400 a.C.).
              </p>
              <p className="card-text">
                <strong>Región:</strong> Mesoamérica, principalmente la costa del Golfo de México (actuales estados de Veracruz y Tabasco).
              </p>
              <p className="card-text">
                <strong>Justificación:</strong> La pieza presenta características que recuerdan elementos de la iconografía Olmeca. La espiral puede evocar representaciones de deidades o conceptos cósmicos presentes en el arte Olmeca. La parte inferior con secciones verticales gruesas podrían ser una representación estilizada de otros elementos iconográficos presentes en la cultura Olmeca. Sin embargo, la forma general y la ejecución sugieren que podría ser una pieza moderna inspirada en el arte Olmeca, en lugar de una pieza arqueológica genuina debido a su acabado superficial y estilo de creación.
              </p>
              <p className="card-text"><small className="text-muted">Fecha: 2021</small></p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div id="carousel3" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {carouselImages.carousel3.map((src, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <img 
                    src={src} 
                    className="d-block w-100 rounded" 
                    alt={`Imagen 3.${index + 1}`}
                    style={{
                      height: '400px',
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                  />
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

      {/* Row 4: Carousel left, Card right */}
      <div className="row mb-5 align-items-center">
        <div className="col-md-6 order-md-2">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title" style={{
                fontSize: '1.8rem',
                fontWeight: 'bold',
                color: '#8B4513',
                textAlign: 'center',
                marginBottom: '1.5rem',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                borderBottom: '3px solid #D2691E',
                paddingBottom: '0.5rem'
              }}>TABLILLA EGIPCIA</h5>
              <p className="card-text">
                <strong>Cultura Probable:</strong> Egipto Antiguo
              </p>
              <p className="card-text">
                <strong>Periodo:</strong> Probablemente del Periodo Dinástico (3100 a.C. - 30 a.C.)
              </p>
              <p className="card-text">
                <strong>Región:</strong> Egipto
              </p>
              <p className="card-text">
                <strong>Justificación:</strong> La pieza presenta una iconografía y estilo característicos del arte egipcio antiguo. Los jeroglíficos simplificados, la representación de aves (posiblemente representaciones simbólicas) y la forma estilizada de la mano son elementos comunes en el arte egipcio, particularmente en inscripciones y relieves de tumbas y templos. El uso del color dorado, aunque aplicado modernamente en esta pieza, es simbólico de la realeza y la divinidad en la cultura egipcia. Los elementos representados evocan escenas de ofrendas o narrativas religiosas, aunque la interpretación precisa requeriría un análisis más detallado de los jeroglíficos.
              </p>
              <p className="card-text"><small className="text-muted">Fecha: 2024</small></p>
            </div>
          </div>
        </div>
        <div className="col-md-6 order-md-1">
          <div id="carousel4" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {carouselImages.carousel4.map((src, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <img 
                    src={src} 
                    className="d-block w-100 rounded" 
                    alt={`Imagen 4.${index + 1}`}
                    style={{
                      height: '400px',
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                  />
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carousel4" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carousel4" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      {/* Row 5: Carousel right, Card left */}
      <div className="row mb-5 align-items-center">
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title" style={{
                fontSize: '1.8rem',
                fontWeight: 'bold',
                color: '#8B4513',
                textAlign: 'center',
                marginBottom: '1.5rem',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                borderBottom: '3px solid #D2691E',
                paddingBottom: '0.5rem'
              }}>JAGUAR MAYA</h5>
              <p className="card-text">
                <strong>Cultura Probable:</strong>Posible inspiración en las culturas mesoamericanas, aunque con elementos modernos y no directamente atribuible a una cultura específica.

              </p>
              <p className="card-text">
                <strong>Periodo:</strong> Moderno.
              </p>
              <p className="card-text">
                <strong>Región:</strong> Desconocida, pero posiblemente de un taller artesanal en América Latina.

              </p>
              <p className="card-text">
                <strong>Justificación:</strong> El objeto presenta características que evocan elementos de representaciones animales encontradas en culturas mesoamericanas. La figura canina, aunque estilizada, podría recordar a los perros representados en cerámica de culturas como la Maya o la del Occidente de México, donde los perros tenían un simbolismo importante, a menudo asociados al inframundo o como compañeros de viaje. Sin embargo, la presencia de elementos como la corbata y la pintura decorativa con un patrón que simula una camisa, sugieren que se trata de una reinterpretación moderna o contemporánea. La técnica de modelado y pintura también parece más propia de la artesanía actual que de las técnicas antiguas. Por lo tanto, si bien puede tener inspiración mesoamericana, no se puede clasificar como una pieza arqueológica auténtica.

              </p>
              <p className="card-text"><small className="text-muted">Fecha: 2025</small></p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div id="carousel5" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {carouselImages.carousel5.map((src, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <img 
                    src={src} 
                    className="d-block w-100 rounded" 
                    alt={`Imagen 5.${index + 1}`}
                    style={{
                      height: '400px',
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                  />
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carousel5" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carousel5" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      {/* Row 6: Carousel left, Card right */}
      <div className="row mb-5 align-items-center">
        <div className="col-md-6 order-md-2">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title" style={{
                fontSize: '1.8rem',
                fontWeight: 'bold',
                color: '#8B4513',
                textAlign: 'center',
                marginBottom: '1.5rem',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                borderBottom: '3px solid #D2691E',
                paddingBottom: '0.5rem'
              }}>LIBRO ANTIGUO</h5>
              <p className="card-text">
                <strong>Cultura Probable:</strong> Desconocida, pero se sabe que proviene de la Nueva España.
              </p>
              <p className="card-text">
                <strong>Periodo:</strong> 1571, impreso en Nueva España.
              </p>
              <p className="card-text">
                <strong>Región:</strong> Vocabulario de la lengua mexicana y castellana
              </p>
              <p className="card-text">
                <strong>Justificación:</strong>  tiene una encuadernación con nervios en pergamino, papel de algodón, un ex libris, impresiones de xilografía para las ilustraciones, impresión de tipos móviles para la escritura, y anotaciones con tinta ferrogálica.

              </p>
              <p className="card-text"><small className="text-muted">Fecha: 2025</small></p>
            </div>
          </div>
        </div>
        <div className="col-md-6 order-md-1">
          <div id="carousel6" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {carouselImages.carousel6.map((src, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <img 
                    src={src} 
                    className="d-block w-100 rounded" 
                    alt={`Imagen 6.${index + 1}`}
                    style={{
                      height: '400px',
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                  />
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carousel6" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carousel6" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}