import React, { useState, useRef } from 'react'

// Información detallada por material (fallback local)
const MATERIAL_INFO = {
  "Cerámica": {
    description: 'Fragmentos de cerámica (barro cocido). Pueden mostrar decoración y características de fabricación que ayudan a tipificar cronológicamente.',
    typology: 'Vasijas, platos, tiestos, fragmentos decorados o utilitarios.',
    typical_context: 'Depósitos domésticos, basureros, contextos funerarios y ofrendas.',
    recommended_actions: 'Revisar morfología, análisis petrográfico y comparativa tipológica con catálogos regionales.',
    sources: [
  { title: 'Ceramic - Wikipedia', url: 'https://en.wikipedia.org/wiki/Ceramic' },
  { title: 'Portable Antiquities Scheme - Ceramics (UK)', url: 'https://finds.org.uk/learn/ceramics/' }
    ]
  },
  "Piedra": {
    description: 'Material lítico (piedra trabajada o natural). Incluye herramientas, núcleos, lascas y objetos esculpidos.',
    typology: 'Herramientas de corte, percusión, núcleos y piezas utilitarias o rituales.',
    typical_context: 'Niveles de actividad, talleres y afloramientos cercanos.',
    recommended_actions: 'Registrar tipo de roca, tecnología lítica y realizar análisis de uso si es posible.',
    sources: [
  { title: 'Lithic tool - Wikipedia', url: 'https://en.wikipedia.org/wiki/Lithic_tool' },
  { title: 'Archaeology Data Service (ADS)', url: 'https://archaeologydataservice.ac.uk/' }
    ]
  },
  "Hueso": {
    description: 'Material osteológico procedente de fauna o humano. Presenta características internas y externas que permiten su identificación.',
    typology: 'Restos óseos completos o fragmentados, artefactos modificados (punzones, agujas).',
    typical_context: 'Depósitos alimentarios, funerarios y contextos rituales.',
    recommended_actions: 'Evaluar anatómicamente y, si procede, enviar a análisis zooarqueológico o antropológico.',
    sources: [
  { title: 'Bone - Wikipedia', url: 'https://en.wikipedia.org/wiki/Bone' },
  { title: 'Smithsonian National Museum of Natural History', url: 'https://naturalhistory.si.edu/' }
    ]
  },
  "Metal": {
    description: 'Objetos metálicos (fundidos, forjados, o laminados). Incluye aleaciones y evidencias de tratamientos superficiales.',
    typology: 'Utensilios, adornos, herramientas y restos de fundición.',
    typical_context: 'Talleres metalúrgicos, contextos funerarios y depósitos votivos.',
    recommended_actions: 'Examinar tipos de aleación, corrosión y considerar análisis elemental (p. ej. XRF).',
    sources: [
  { title: 'Metalworking - Wikipedia', url: 'https://en.wikipedia.org/wiki/Metalworking' },
  { title: 'The British Museum - Metal objects', url: 'https://www.britishmuseum.org/collection' }
    ]
  },
  "Vidrio": {
    description: 'Material vítreo, a menudo asociado a recipientes o fragmentos vitrificados por procesos culturales o post-deposicionales.',
    typology: 'Fragmentos de recipientes, cuentas y vitrinas.',
    typical_context: 'Depósitos domésticos, contextos industriales o funerarios.',
    recommended_actions: 'Documentar color, grosor y posibles tratamientos; considerar análisis composicional.',
    sources: [
  { title: 'Glass - Wikipedia', url: 'https://en.wikipedia.org/wiki/Glass' },
  { title: 'Corning Museum of Glass', url: 'https://www.cmog.org/' }
    ]
  }
}

function mockIdentifyFromName(name){
  if(!name) name = 'file'
  let h = 0
  for(let i=0;i<name.length;i++) h = (h<<5) - h + name.charCodeAt(i)
  const materials = Object.keys(MATERIAL_INFO)
  const idx = Math.abs(h) % materials.length
  const material = materials[idx]
  return { material }
}

export default function Identify(){
  const [fileData, setFileData] = useState(null)
  const [result, setResult] = useState(null)
  const [sources, setSources] = useState([])
  const [loading, setLoading] = useState(false)
  const imgRef = useRef(null)

  async function identifyImage({dataUrl, file}){
    setLoading(true)
    setResult(null)
    setSources([])

    // Intentamos llamar a la API backend primero
    try {
      const form = new FormData()
      form.append('image', file)
      const res = await fetch('http://localhost:5000/identify', {
        method: 'POST',
        body: form
      })
      if(!res.ok) throw new Error('API response not ok')
      const json = await res.json()
      // Guardar todos los campos enriquecidos que devuelve la API
      setResult({
        material: json.material,
        notes: json.notes,
        description: json.description,
        typology: json.typology,
        typical_context: json.typical_context,
        recommended_actions: json.recommended_actions
      })
      setSources(json.sources || [])
      setLoading(false)
      return
    } catch (err) {
      console.warn('API identify failed, falling back to local mock:', err.message)
    }

    // Fallback local mock (si la API no está disponible)
    await new Promise(r=>setTimeout(r, 400)) // simula latencia
    const id = mockIdentifyFromName(file?.name)
    const mat = id.material
    const info = MATERIAL_INFO[mat] || {}
    setResult({
      material: mat,
      notes: 'Resultado preliminar (mock, fallback).',
      description: info.description,
      typology: info.typology,
      typical_context: info.typical_context,
      recommended_actions: info.recommended_actions
    })
    setSources(info.sources || [])
    setLoading(false)
  }

  function handleFile(e){
    const f = e.target.files && e.target.files[0]
    if(!f) return
    const reader = new FileReader()
    reader.onload = (ev) => {
      const dataUrl = ev.target.result
      setFileData(dataUrl)
      identifyImage({dataUrl, file: f})
    }
    reader.readAsDataURL(f)
  }

  return (
    <div>
      <h2 className="mb-4">Material Identify</h2>

      <div className="identify-box p-3 mb-4">
        <div className="row align-items-start">
          <div className="col-md-6 border-end">
            <h5>Picture</h5>
            <p>Upload an image of the archaeological object. The application will attempt to identify the material.</p>
            <input type="file" accept="image/*" onChange={handleFile} className="form-control mb-3" />

            <div className="preview-box">
              {fileData ? (
                <img ref={imgRef} src={fileData} alt="preview" className="img-fluid" />
              ) : (
                <div className="placeholder d-flex align-items-center justify-content-center">Vista previa</div>
              )}
            </div>
          </div>

          <div className="col-md-6">
            <h5>Results from the identification</h5>
            <div className="processed p-3">
              {loading ? (
                <p>Identifying...</p>
                      ) : result ? (
                          <div>
                            <p><strong>Possible material:</strong> {result.material}</p>
                            <p className="small text-muted">{result.notes}</p>
                            <hr />
                            <h6>Description</h6>
                            <p>{result.description}</p>
                            <h6>Tipology</h6>
                            <p>{result.typology}</p>
                            <h6>Typic context</h6>
                            <p>{result.typical_context}</p>
                            <h6>Recommended action</h6>
                            <p>{result.recommended_actions}</p>
                            <hr />
                            <h6>Sources</h6>
                            {sources.length ? (
                              <ul>
                                {sources.map((s, i) => (
                                  <li key={i}><a href={s.url} target="_blank" rel="noreferrer">{s.title}</a></li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-muted small">There is no sources for this material.</p>
                            )}
                          </div>
                        ) : (
                          <p>There is no identifycation either. Load an image to identifycate the material your lookinf for.</p>
                        )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
