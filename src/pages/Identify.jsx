import React, { useState, useRef, useEffect } from 'react'
import { getGeminiURL } from '../config'
import './identify.css'

export default function Identify() {
  const [currentMode, setCurrentMode] = useState('materials')
  const [selectedImage, setSelectedImage] = useState(null)
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [base64Data, setBase64Data] = useState(null)
  const [originalImage, setOriginalImage] = useState(new Image())
  const canvasRef = useRef(null)

  const modes = {
    materials: {
      title: "Identificación de Materiales",
      desc: "Detecta la composición física (cerámica, lítica, metalurgia), técnicas de manufactura y estado de conservación.",
      prompt: `Actúa como un arqueólogo experto en análisis de materiales. Analiza la imagen y detecta los distintos materiales u objetos.
                
                IMPORTANTE: Responde ÚNICAMENTE en formato JSON válido que sea una lista de objetos.
                Estructura del JSON:
                [
                  {
                    "titulo": "Nombre corto del objeto/material",
                    "box_2d": [0, 0, 1000, 1000],
                    "contenido_markdown": "**Material:** ... \\n **Técnica:** ... \\n **Descripción:** Texto detallado y completo sobre el material, color, textura y estado de conservación."
                  }
                ]
                
                Asegúrate de que el campo "contenido_markdown" sea rico en información, usando negritas y saltos de línea para que sea muy legible. Detecta entre 2 y 5 elementos clave.`
    },
    culture: {
      title: "Origen y Civilización",
      desc: "Determina la filiación cultural, periodo cronológico y región, basándose en iconografía y estilo.",
      prompt: `Actúa como un experto en historia del arte y arqueología. Analiza los objetos para determinar su procedencia.
                
                IMPORTANTE: Responde ÚNICAMENTE en formato JSON válido (lista de objetos).
                Estructura del JSON:
                [
                  {
                    "titulo": "Cultura o Estilo Identificado",
                    "box_2d": [0, 0, 1000, 1000],
                    "contenido_markdown": "**Cultura Probable:** ... \\n **Periodo:** ... \\n **Región:** ... \\n **Justificación:** Explicación detallada de por qué se atribuye a esta cultura basándose en los rasgos visuales (iconografía, formas, glifos)."
                  }
                ]
                
                El campo "contenido_markdown" debe ser un reporte completo y profesional.`
    }
  }

  const handleModeChange = (mode) => {
    setCurrentMode(mode)
    setResults([])
    setError(null)
  }

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      const result = e.target?.result
      if (result && typeof result === 'string') {
        setSelectedImage(result)
        setBase64Data(result.split(',')[1])
        
        // Cargar imagen en objeto para recortes
        const img = new Image()
        img.src = result
        img.onload = () => {
          setOriginalImage(img)
        }
        
        setResults([])
        setError(null)
      }
    }
    reader.readAsDataURL(file)
  }

  const getCropFromCoordinates = (box) => {
    if (!box || box.length !== 4 || !originalImage.naturalWidth) return selectedImage

    const [ymin, xmin, ymax, xmax] = box
    const canvas = canvasRef.current
    if (!canvas) return selectedImage

    const ctx = canvas.getContext('2d')
    const imgW = originalImage.naturalWidth
    const imgH = originalImage.naturalHeight

    // Calcular pixeles reales
    const rY = (ymin / 1000) * imgH
    const rX = (xmin / 1000) * imgW
    const rH = ((ymax - ymin) / 1000) * imgH
    const rW = ((xmax - xmin) / 1000) * imgW

    const padding = 20
    canvas.width = rW + padding
    canvas.height = rH + padding

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(originalImage, rX, rY, rW, rH, padding/2, padding/2, rW, rH)

    return canvas.toDataURL('image/jpeg')
  }

  const analyzeImage = async () => {
    if (!base64Data) return

    setLoading(true)
    setError(null)
    setResults([])

    try {
      const prompt = modes[currentMode].prompt
      const response = await fetch(getGeminiURL(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [
              { text: prompt },
              { inlineData: { mimeType: "image/jpeg", data: base64Data } }
            ]
          }],
          generationConfig: {
            responseMimeType: "application/json"
          }
        })
      })

      if (!response.ok) {
        const errText = await response.text()
        throw new Error(`API Error: ${response.status} - ${errText}`)
      }

      const data = await response.json()
      const textResponse = data.candidates[0].content.parts[0].text
      
      let cleanJson = textResponse.replace(/```json/g, '').replace(/```/g, '').trim()
      const jsonData = JSON.parse(cleanJson)
      
      setResults(jsonData)
    } catch (error) {
      console.error('Error:', error)
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const renderMarkdown = (markdown) => {
    if (!markdown) return { __html: "Sin descripción." }
    
    // Simple markdown parsing
    let html = markdown
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\\n/g, '<br>')
      .replace(/\n/g, '<br>')
    
    return { __html: html }
  }

  useEffect(() => {
    document.body.style.backgroundImage = 'url(/kaseki/images/bluebackground.png)'
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
    <div className="identify-page" style={{position: 'relative', minHeight: '100vh'}}>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url(/kaseki/images/bluebackground.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        filter: 'blur(8px)',
        zIndex: -1
      }}></div>
      <main className=" py-4">
        {/* Selector de Modo */}
        <div className="d-flex justify-content-center mb-5">
          <div className="btn-group mode-selector shadow-sm" role="group">
            <button 
              onClick={() => handleModeChange('materials')}
              className={`btn btn-lg ${currentMode === 'materials' ? 'btn-warning' : 'btn-outline-secondary'}`}
            >
              <i className="fa-solid fa-cube me-2"></i>Análisis de Materiales
            </button>
            <button 
              onClick={() => handleModeChange('culture')}
              className={`btn btn-lg ${currentMode === 'culture' ? 'btn-warning' : 'btn-outline-secondary'}`}
            >
              <i className="fa-solid fa-landmark me-2"></i>Origen y Civilización
            </button>
          </div>
        </div>

        <div className="card mb-4 shadow-lg border-0" style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}>
          <div className="card-body">
        <div className="row g-4">
          {/* Panel Izquierdo */}
          <div className="col-lg-4">
            {/* Tarjeta de Contexto */}
            <div className="card border-start border-warning border-4 mb-4" style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}>
              <div className="card-body">
                <h2 className="card-title h5 fw-bold">{modes[currentMode].title}</h2>
                <p className="card-text text-muted small">{modes[currentMode].desc}</p>
              </div>
            </div>

            {/* Área de Carga */}
            <div className="card" style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}>
              <div className="card-body">
                <div className="upload-preview-box mb-3">
                  {selectedImage ? (
                    <img src={selectedImage} alt="Vista previa" className="img-fluid" />
                  ) : (
                    <div className="text-center p-4">
                      <i className="fa-solid fa-camera-retro fs-1 text-muted mb-2 d-block"></i>
                      <p className="text-muted small text-uppercase fw-semibold">Subir Fotografía</p>
                    </div>
                  )}
                </div>

                <div className="d-grid gap-2">
                  <input 
                    type="file" 
                    onChange={handleImageUpload}
                    className="d-none" 
                    accept="image/*"
                    id="image-upload"
                  />
                  <label 
                    htmlFor="image-upload" 
                    className="btn btn-outline-secondary custom-file-upload"
                  >
                    <i className="fa-solid fa-folder-open me-2"></i>Seleccionar Archivo
                  </label>
                  
                  <button 
                    onClick={analyzeImage}
                    disabled={!selectedImage || loading}
                    className="btn btn-dark btn-lg"
                  >
                    <span>Ejecutar Análisis</span>
                    <i className="fa-solid fa-magnifying-glass ms-2"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Panel Derecho */}
          <div className="col-lg-8">
            <div className="card results-card" style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}>
              {/* Header */}
              <div className="card-header d-flex justify-content-between align-items-center" style={{ background: 'rgba(248,249,250,0.7)', borderBottom: '1px solid rgba(0,0,0,0.125)' }}>
                <h3 className="mb-0 fw-bold">
                  <i className="fa-solid fa-list-check text-warning me-2"></i>Informe Detallado
                </h3>
                <span className="badge bg-white text-dark border">
                  {results.length > 0 ? `${results.length} Hallazgos` : 'Esperando análisis...'}
                </span>
              </div>
              
              <div className="card-body results-body overflow-auto">
                {/* Estado Inicial */}
                {!loading && results.length === 0 && !error && (
                  <div className="text-center text-muted py-5">
                    <i className="fa-brands fa-searchengin display-1 opacity-25 d-block mb-3"></i>
                    <p className="fs-5">El informe arqueológico aparecerá aquí</p>
                  </div>
                )}

                {/* Loader */}
                {loading && (
                  <div className="text-center py-5">
                    <div className="spinner-border text-warning mb-3" role="status">
                      <span className="visually-hidden">Cargando...</span>
                    </div>
                    <h4 className="fw-bold">Analizando artefacto...</h4>
                    <p className="text-muted">Identificando patrones y generando recortes de detalle.</p>
                  </div>
                )}

                {/* Error */}
                {error && (
                  <div className="alert alert-danger border-start border-danger border-4" role="alert">
                    <strong>Error:</strong> {error}
                  </div>
                )}

                {/* Resultados */}
                {results.length > 0 && (
                  <div className="results-list">
                    {results.map((item, index) => {
                      const cropSrc = getCropFromCoordinates(item.box_2d)
                      
                      return (
                        <div key={index} className="card mb-3 result-item" style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}>
                          <div className="row g-0">
                            {/* Snapshot */}
                            <div className="col-md-3 border-end" style={{ background: 'rgba(248,249,250,0.7)' }}>
                              <div className="p-3">
                                <p className="text-uppercase text-muted small fw-bold text-center mb-2">Detalle Visual</p>
                                <div className="snapshot-container">
                                  <img 
                                    src={cropSrc} 
                                    className="snapshot-img" 
                                    alt="Zoom detalle"
                                  />
                                </div>
                              </div>
                            </div>

                            {/* Información */}
                            <div className="col-md-9">
                              <div className="card-body">
                                <div className="d-flex align-items-center gap-2 mb-3">
                                  <span className="badge bg-warning text-dark">
                                    {index + 1}
                                  </span>
                                  <h3 className="mb-0 fw-bold border-bottom pb-2 flex-grow-1">
                                    {item.titulo}
                                  </h3>
                                </div>
                                <div 
                                  className="content-markdown"
                                  dangerouslySetInnerHTML={renderMarkdown(item.contenido_markdown)}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
          </div>
        </div>
      </main>

      {/* Canvas oculto */}
      <canvas ref={canvasRef} className="d-none"></canvas>
    </div>
  )
}