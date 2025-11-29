import React, { useState, useRef } from 'react'
import { useLang } from '../i18n'
import './identify.css'

const API_URL = 'http://localhost:5000'

export default function Identify(){
  const { lang, t } = useLang()
  const [preview, setPreview] = useState(null)
  const [file, setFile] = useState(null)
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const imgRef = useRef(null)

  function onFileChange(e){
    const f = e.target.files && e.target.files[0]
    if(!f) return
    setFile(f)
    const r = new FileReader()
    r.onload = (ev) => setPreview(ev.target.result)
    r.readAsDataURL(f)
    setResult(null)
    setError(null)
  }

  async function doIdentify(){
    if(!file) return setError(t('noData'))
    setLoading(true)
    setResult(null)
    setError(null)
    try{
      const form = new FormData()
      form.append('image', file, file.name)
      const resp = await fetch(`${API_URL}/identify?lang=${lang}`, { method: 'POST', body: form })
      if(!resp.ok) throw new Error('Server error')
      const json = await resp.json()
      setResult(json)
    }catch(err){
      console.warn('Identify API error', err.message)
      setError(err.message)
    }finally{
      setLoading(false)
    }
  }

  const sources = result?.sources || []

  return (
    <div className="container mt-3">
      <h2>{t('identifyHeading')}</h2>
      <div className="row align-items-start">
        <div className="col-md-4">
          <div className="card mb-3">
            <div className="card-body d-flex flex-column">
              <label className="form-label">{t('imageLabel')}</label>
              <input type="file" accept="image/*" onChange={onFileChange} className="form-control mb-2" />
              <div className="preview-box mt-2">
                {preview ? <img ref={imgRef} src={preview} alt="preview" className="img-fluid" style={{maxHeight: 350}} /> : <div className="placeholder text-muted">{t('preview')}</div>}
              </div>
              <button className="btn btn-primary mt-3" onClick={doIdentify} disabled={loading || !file}>{t('identify')}</button>
            </div>
          </div>
          <div className="small text-muted">{t('identifyIntro')}</div>
        </div>
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{t('resultHeading')}</h5>
              {loading && <div className="text-info">{t('identifying')}</div>}
              {error && <div className="text-danger">{error}</div>}
              {!result && !loading && <div className="text-muted">{t('noData')}</div>}
              {result && (
                <div>
                  <h4>{t('materialProbable')}: {result.material}</h4>
                  {result.notes && <p className="text-muted">{result.notes}</p>}
                  <div className="mt-2">
                    <h6>{t('descriptionTitle')}</h6>
                    <p>{result.description}</p>
                    <h6>{t('typologyTitle')}</h6>
                    <p>{result.typology}</p>
                    <h6>{t('typicalContextTitle')}</h6>
                    <p>{result.typical_context}</p>
                    <h6>{t('recommendedActionsTitle')}</h6>
                    <p>{result.recommended_actions}</p>
                  </div>
                  <div className="mt-3">
                    <h6>{t('sourcesTitle')}</h6>
                    {sources.length ? (
                      <ul className="list-unstyled">
                        {sources.map((s, i) => (<li key={i}><a href={s.url} target="_blank" rel="noreferrer">{s.title}</a></li>))}
                      </ul>
                    ) : (<div className="text-muted">{t('noSources')}</div>)}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
