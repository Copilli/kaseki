import React, { useState, useRef } from 'react'

export default function Identify(){
  const [fileData, setFileData] = useState(null)
  const [meta, setMeta] = useState(null)
  const imgRef = useRef(null)

  function handleFile(e){
    const f = e.target.files && e.target.files[0]
    if(!f) return
    const reader = new FileReader()
    reader.onload = (ev) => {
      setFileData(ev.target.result)
      // get dimensions
      const img = new Image()
      img.onload = () => {
        setMeta({
          name: f.name,
          size: f.size,
          type: f.type,
          width: img.width,
          height: img.height
        })
      }
      img.src = ev.target.result
    }
    reader.readAsDataURL(f)
  }

  return (
    <div>
      <h2 className="mb-4">Identificación de materiales</h2>

      <div className="identify-box p-3 mb-4">
        <div className="row align-items-center">
          <div className="col-md-6 border-end">
            <h5>Imagen</h5>
            <p>Sube una imagen del objeto arqueológico. La aplicación la leerá y mostrará una vista previa.</p>
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
            <h5>Información procesada</h5>
            <div className="processed p-3">
              {meta ? (
                <div>
                  <p><strong>Nombre:</strong> {meta.name}</p>
                  <p><strong>Tipo:</strong> {meta.type || 'desconocido'}</p>
                  <p><strong>Tamaño:</strong> {(meta.size/1024).toFixed(1)} KB</p>
                  <p><strong>Dimensiones:</strong> {meta.width} x {meta.height} px</p>
                  <hr />
                  <p><em>Resultado preliminar:</em> (Aquí puedes integrar un modelo o API para identificar el material.)</p>
                  <ul>
                    <li>Posible material: <strong>—</strong></li>
                    <li>Confianza: <strong>—</strong></li>
                  </ul>
                </div>
              ) : (
                <p>No hay datos procesados aún. Sube una imagen para empezar.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <section>
        <h5>Fuentes y recursos arqueológicos</h5>
        <div className="sources mt-3">
          <ul>
            <li><a href="#">Centro de arqueología - catálogo de materiales</a></li>
            <li><a href="#">Guía tipológica de cerámica</a></li>
            <li><a href="#">Repositorio de imágenes arqueológicas</a></li>
            <li><a href="#">Publicaciones y estudios (journals)</a></li>
          </ul>
          <p className="text-muted small">Estas fuentes sirven para complementar la identificación y proporcionar contexto histórico y tipológico.</p>
        </div>
      </section>
    </div>
  )
}
