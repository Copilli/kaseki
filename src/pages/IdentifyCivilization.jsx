import React, { useState, useRef } from 'react'

export default function IdentifyCivilization(){
  const [fileData, setFileData] = useState(null)
  const [result, setResult] = useState(null)
  const [sources, setSources] = useState([])
  const [loading, setLoading] = useState(false)
  const imgRef = useRef(null)

  async function identifyImage({dataUrl, file}){
    setLoading(true)
    setResult(null)
    setSources([])

    // Intentamos llamar a la API backend que usa búsqueda web
    try {
      const form = new FormData()
      form.append('image', file)
      const res = await fetch('http://localhost:5000/identify-civilization', {
        method: 'POST',
        body: form
      })
      if(!res.ok) throw new Error('API response not ok')
      const json = await res.json()
      setResult({
        civilization: json.civilization,
        notes: json.notes,
        description: json.description,
        period: json.period,
        region: json.region,
        characteristics: json.characteristics
      })
      setSources(json.sources || [])
      setLoading(false)
      return
    } catch(err){
      console.error('Error conectando con el backend:', err)
      setResult({
        civilization: 'Error',
        description: 'No se pudo conectar con el servidor. Por favor, asegúrate de que el backend esté corriendo con "npm run server".',
        period: 'N/A',
        region: 'N/A',
        characteristics: 'N/A',
        notes: 'Error de conexión'
      })
      setSources([])
      setLoading(false)
    }
  }

  function handleImageUpload(e){
    const file = e.target.files?.[0]
    if(!file) return
    const reader = new FileReader()
    reader.onload = function(ev){
      const dataUrl = ev.target.result
      setFileData({dataUrl, file})
      identifyImage({dataUrl, file})
    }
    reader.readAsDataURL(file)
  }

  function handleReupload(){
    setFileData(null)
    setResult(null)
    setSources([])
  }

  return (
    <div className="container py-5">
      <h1 className="mb-4">Identificación de Civilización</h1>
      <p className="lead mb-4">
        Sube una imagen de un objeto arqueológico y usaremos búsqueda web en tiempo real para identificar a qué civilización podría pertenecer. No solo prehispánicas, ¡cualquier civilización de la historia!
      </p>

      {!fileData ? (
        <div className="card shadow-sm">
          <div className="card-body p-5 text-center">
            <label htmlFor="fileUpload" className="btn btn-primary btn-lg">
              Subir Imagen
            </label>
            <input 
              id="fileUpload" 
              type="file" 
              accept="image/*" 
              onChange={handleImageUpload} 
              style={{display:'none'}}
            />
            <p className="text-muted mt-3 mb-0">Formatos aceptados: JPG, PNG, WEBP</p>
          </div>
        </div>
      ) : (
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card shadow-sm">
              <div className="card-header bg-primary text-white">
                <h5 className="mb-0">Imagen Cargada</h5>
              </div>
              <div className="card-body text-center">
                <img 
                  ref={imgRef} 
                  src={fileData.dataUrl} 
                  alt="Uploaded" 
                  className="img-fluid rounded mb-3"
                  style={{maxHeight:'400px'}}
                />
                <button className="btn btn-outline-primary" onClick={handleReupload}>
                  Cargar Otra Imagen
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            {loading ? (
              <div className="card shadow-sm">
                <div className="card-body text-center p-5">
                  <div className="spinner-border text-primary mb-3" role="status">
                    <span className="visually-hidden">Identificando...</span>
                  </div>
                  <p className="text-muted">Analizando la imagen...</p>
                </div>
              </div>
            ) : result ? (
              <div className="card shadow-sm">
                <div className="card-header bg-success text-white">
                  <h5 className="mb-0">Resultado de Identificación</h5>
                </div>
                <div className="card-body">
                  <h4 className="text-primary mb-3">{result.civilization}</h4>
                  
                  {result.notes && (
                    <div className="alert alert-info">
                      <small>{result.notes}</small>
                    </div>
                  )}

                  <h6 className="fw-bold mt-3">Descripción:</h6>
                  <p>{result.description}</p>

                  <h6 className="fw-bold mt-3">Período:</h6>
                  <p>{result.period}</p>

                  <h6 className="fw-bold mt-3">Región:</h6>
                  <p>{result.region}</p>

                  <h6 className="fw-bold mt-3">Características:</h6>
                  <p>{result.characteristics}</p>

                  {sources.length > 0 && (
                    <>
                      <h6 className="fw-bold mt-4">Fuentes Recomendadas:</h6>
                      <ul className="list-unstyled">
                        {sources.map((src, i) => (
                          <li key={i} className="mb-2">
                            <a href={src.url} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                              {src.title} →
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  )
}
